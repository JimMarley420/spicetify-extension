/**
 * Thin adapter around the Spicetify APIs.
 *
 * Everything that touches `Spicetify.*` lives here so the detection logic
 * stays independent of Spotify internals (which change between client
 * versions).
 */
import { fetchMetadataForTracks } from "../../../shared/api/fetchMetadataForTracks.ts";
import type { PlaylistEntry } from "./detection/types.ts";
import { strings } from "./strings.ts";

const CONTENTS_PAGE_SIZE = 200;
const EDITABILITY_PAGE_SIZE = 10_000;
const ISRC_BATCH_SIZE = 100;
export const REMOVAL_BATCH_SIZE = 100;
const ISRC_RETRY_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 500;

export interface PlaylistIdentity {
  uri: string;
  name: string;
}

export interface PlaylistEditability {
  canEdit: boolean;
  known: boolean;
}

/* ---------------------------------------------------------------- helpers */

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Minimal shape of the internal playlist API surface used by this adapter. */
interface PlaylistApiLike {
  getContents?: (
    uri: string,
    options: { offset?: number; limit?: number },
  ) => Promise<{ items?: Record<string, unknown>[] }>;
  getMetadata?: (uri: string, options?: Record<string, unknown>) => Promise<{ name?: string }>;
  remove?: (uri: string, items: { uri: string; uid: string }[]) => Promise<unknown>;
}

function playlistApi(): PlaylistApiLike | undefined {
  return Spicetify?.Platform?.PlaylistAPI as PlaylistApiLike | undefined;
}

function showNotification(message: string, isError = false): void {
  Spicetify?.showNotification?.(message, isError);
}

/* ------------------------------------------------- playlist editability */

/**
 * An entry of the user's library listing. `canAddTo` is the edit-rights proxy
 * used across this repo's extensions (owner or collaborator on the playlist).
 */
export function parseLibraryItem(item: Record<string, unknown>): PlaylistIdentity | null {
  if (item.type !== "playlist") return null;
  const uri = typeof item.uri === "string" ? item.uri : null;
  if (!uri) return null;
  return { uri, name: typeof item.name === "string" ? item.name : "" };
}

/**
 * Look up the playlist in the user's library listing to resolve its
 * editability. Pages until the playlist is found (early stop).
 */
export async function fetchPlaylistEditability(playlistUri: string): Promise<PlaylistEditability> {
  // The library listing endpoint exists at runtime but is not part of the
  // repo's ambient d.ts, hence the narrow local cast.
  const LibraryAPI = (
    Spicetify?.Platform as unknown as {
      LibraryAPI?: {
        getContents?: (
          options: Record<string, unknown>,
        ) => Promise<{ items?: Record<string, unknown>[] }>;
      };
    }
  )?.LibraryAPI;
  if (!LibraryAPI?.getContents) return { canEdit: false, known: false };

  let offset = 0;
  try {
    while (true) {
      const response = await LibraryAPI.getContents({
        offset,
        limit: EDITABILITY_PAGE_SIZE,
        flattenTree: true,
      });
      const items: Record<string, unknown>[] = response?.items ?? [];
      for (const item of items) {
        if (item?.uri !== playlistUri) continue;
        return { canEdit: item.canAddTo === true, known: true };
      }
      if (items.length < EDITABILITY_PAGE_SIZE) return { canEdit: false, known: false };
      offset += EDITABILITY_PAGE_SIZE;
    }
  } catch (e) {
    console.warn("[playlistDuplicateFinder] editability lookup failed:", e);
    return { canEdit: false, known: false };
  }
}

/** Resolve a playlist display name from the selection payload, with fallback. */
export async function resolvePlaylistName(uri: string): Promise<string> {
  try {
    const metadata = await playlistApi()?.getMetadata?.(uri, {});
    return metadata?.name ?? "";
  } catch {
    return "";
  }
}

/* ------------------------------------------------------ playlist contents */

function readDuration(item: Record<string, unknown>): number | null {
  if (typeof item.durationMs === "number") return item.durationMs;
  if (typeof item.duration === "number") return item.duration;
  if (item.duration && typeof item.duration === "object") {
    const duration = item.duration as { totalMs?: unknown; milliseconds?: unknown };
    if (typeof duration.totalMs === "number") return duration.totalMs;
    if (typeof duration.milliseconds === "number") return duration.milliseconds;
  }
  return null;
}

function readImageUrl(item: Record<string, unknown>): string {
  const album = item.album as Record<string, unknown> | undefined;
  const images = album?.images as Array<{ url?: unknown }> | undefined;
  const image = images?.[0]?.url;
  if (typeof image === "string" && image) return image;
  const coverArt = album?.coverArt as { sources?: Array<{ url?: unknown }> } | undefined;
  const cover = coverArt?.sources?.[0]?.url;
  return typeof cover === "string" ? cover : "";
}

function readAddedAt(item: Record<string, unknown>): string {
  const addedAt = item.addedAt ?? item.added_at;
  if (typeof addedAt === "string") return addedAt;
  if (addedAt && typeof addedAt === "object") {
    const iso =
      (addedAt as { isoString?: unknown; iso_str?: unknown }).isoString ??
      (addedAt as { iso_str?: unknown }).iso_str;
    return typeof iso === "string" ? iso : "";
  }
  return "";
}

/**
 * URI of the playable entry itself. Playlists, albums and artists have URIs
 * too — and a bare `spotify:local:` with no components identifies nothing —
 * while payloads can hand such values to unrelated entries. Only a URI that
 * actually names a trackable item is accepted, the item's own field first.
 */
const CONTENT_URI = /^spotify:(?:track|local|episode|audio|file|video):.+/;

function readTrackUri(item: Record<string, unknown>, metadata: Record<string, unknown>): string {
  for (const candidate of [item.uri, metadata.link]) {
    if (typeof candidate === "string" && CONTENT_URI.test(candidate)) return candidate;
  }
  return "";
}

export function parsePlaylistItem(
  item: Record<string, unknown>,
  position: number,
): PlaylistEntry | null {
  const metadata = (item.trackMetadata as Record<string, unknown> | undefined) ?? {};
  const uri = readTrackUri(item, metadata);
  if (!uri) return null;

  const name =
    (typeof item.name === "string" ? item.name : "") ||
    (typeof metadata.name === "string" ? metadata.name : "");
  const artistField = item.artists ?? metadata.artist;
  const artists: string[] = Array.isArray(artistField)
    ? artistField
        .filter((a): a is Record<string, unknown> => typeof a?.name === "string")
        .map((a) => a.name as string)
    : [];
  const album =
    (item.album as Record<string, unknown> | undefined) ??
    (metadata.album as Record<string, unknown> | undefined) ??
    {};

  return {
    position,
    uri,
    uid: typeof item.uid === "string" ? item.uid : "",
    name,
    artists,
    albumName: typeof album.name === "string" ? album.name : "",
    albumUri: typeof album.uri === "string" ? album.uri : "",
    imageUrl: readImageUrl(item),
    durationMs: readDuration(item),
    addedAt: readAddedAt(item),
    isrc: null,
  };
}

/** Fetch every entry of a playlist (paginated), keeping occurrence `uid`s. */
export async function fetchPlaylistEntries(
  playlistUri: string,
  options: { onProgress?: (loaded: number) => void; signal?: AbortSignal } = {},
): Promise<PlaylistEntry[]> {
  const api = playlistApi();
  if (!api?.getContents) throw new Error("PlaylistAPI is unavailable");

  const entries: PlaylistEntry[] = [];
  let offset = 0;

  while (true) {
    options.signal?.throwIfAborted();
    const response = await api.getContents(playlistUri, {
      offset,
      limit: CONTENTS_PAGE_SIZE,
    });
    const items = response?.items ?? [];
    if (items.length === 0) break;

    for (let i = 0; i < items.length; i++) {
      const parsed = parsePlaylistItem(items[i] as Record<string, unknown>, offset + i);
      if (parsed) entries.push(parsed);
    }
    options.onProgress?.(entries.length);

    if (items.length < CONTENTS_PAGE_SIZE) break;
    offset += CONTENTS_PAGE_SIZE;
  }

  return entries;
}

/* ------------------------------------------------------------------ ISRC */

interface MetadataLike {
  duration?: unknown;
  external_id?: Array<{ type?: string; id?: string } | undefined>;
}

function isrcFromMetadata(metadata: unknown): string | null {
  const ids = (metadata as MetadataLike | null | undefined)?.external_id;
  if (!Array.isArray(ids)) return null;
  for (const entry of ids) {
    if (entry?.type === "isrc" && typeof entry.id === "string") return entry.id;
  }
  return null;
}

/** In-memory ISRC cache for the current Spotify session. */
const isrcCache = new Map<string, string | null>();

/** Batched ISRC hydration with retry/backoff; degradation is silent per track. */
export async function hydrateIsrcs(
  entries: readonly PlaylistEntry[],
  options: { onProgress?: (done: number, total: number) => void; signal?: AbortSignal } = {},
): Promise<void> {
  const missing = entries.filter((e) => e.isrc == null);
  const pendingUris = [...new Set(missing.map((e) => e.uri).filter((uri) => !isrcCache.has(uri)))];
  const total = pendingUris.length;
  if (total === 0) {
    for (const entry of missing) entry.isrc = isrcCache.get(entry.uri) ?? null;
    return;
  }

  let done = 0;
  for (let start = 0; start < pendingUris.length; start += ISRC_BATCH_SIZE) {
    options.signal?.throwIfAborted();
    const batch = pendingUris.slice(start, start + ISRC_BATCH_SIZE);

    let fetched: Map<string, unknown> | null = null;
    for (let attempt = 0; attempt < ISRC_RETRY_ATTEMPTS && fetched == null; attempt++) {
      try {
        fetched = await fetchMetadataForTracks(batch);
      } catch (e) {
        if (attempt < ISRC_RETRY_ATTEMPTS - 1) {
          await delay(RETRY_BASE_DELAY_MS * 2 ** attempt * (1 + Math.random() * 0.5));
          continue;
        }
        console.warn(`[playlistDuplicateFinder] ISRC batch failed after retries:`, e);
      }
    }

    for (const uri of batch) {
      const isrc = fetched ? isrcFromMetadata(fetched.get(uri)) : null;
      isrcCache.set(uri, isrc);
    }
    for (const entry of missing) {
      if (isrcCache.has(entry.uri) && entry.isrc == null)
        entry.isrc = isrcCache.get(entry.uri) ?? null;
    }

    done += batch.length;
    options.onProgress?.(done, total);
  }
}

/* ---------------------------------------------------------------- removal */

export interface RemovalTarget {
  uri: string;
  uid: string;
}

export interface RemovalSummary {
  removed: number;
  failed: number;
  /** Per-batch success flags, in target order, for partial-failure recovery. */
  batchResults: boolean[];
}

/** Remove playlist occurrences in batches, targeting uid + URI for accuracy. */
export async function removeEntries(
  playlistUri: string,
  targets: readonly RemovalTarget[],
  onProgress?: (done: number, total: number) => void,
): Promise<RemovalSummary> {
  const api = playlistApi();
  if (!api?.remove || targets.length === 0) {
    return { removed: 0, failed: targets.length, batchResults: [] };
  }

  let removed = 0;
  let failed = 0;
  let done = 0;
  const batchResults: boolean[] = [];

  for (let start = 0; start < targets.length; start += REMOVAL_BATCH_SIZE) {
    const batch = targets.slice(start, start + REMOVAL_BATCH_SIZE);
    const batchItems = batch.map((t) => ({ uri: t.uri, uid: t.uid }));
    let ok = false;
    try {
      await api.remove(playlistUri, batchItems);
      removed += batch.length;
      ok = true;
    } catch (e) {
      failed += batch.length;
      console.warn("[playlistDuplicateFinder] removal batch failed:", e);
    }
    batchResults.push(ok);
    done += batch.length;
    onProgress?.(done, targets.length);
  }

  return { removed, failed, batchResults };
}

/* --------------------------------------------------------------- notices */

export function notifySuccess(message: string): void {
  showNotification(message);
}

export function notifyFailure(message: string): void {
  showNotification(message, true);
}

export const notices = strings.summary;
