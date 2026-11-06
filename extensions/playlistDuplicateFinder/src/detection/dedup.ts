/**
 * Duplicate detection pipeline.
 *
 * Pure logic over `PlaylistEntry` values — no Spicetify dependency.
 *
 * Levels are evaluated sequentially in confidence order:
 *   exact → isrc → probable → likely → possible → maybe.
 * Every entry assigned to a group is consumed, so an entry appears in exactly
 * one (or zero) group, always at the highest-confidence level that matched.
 */
import { normalizeArtist, normalizeFuzzy, normalizeTitleStrict } from "./normalize.ts";
import {
  bigramSimilarity,
  MAYBE_LENGTH_RATIO_GUARD,
  MAYBE_SIMILARITY_THRESHOLD,
} from "./similarity.ts";
import {
  DURATION_TOLERANCE_MS,
  type DuplicateGroup,
  type DuplicateResults,
  GROUP_ORDER,
  type GroupId,
  type PlaylistEntry,
  type ScannedTrack,
} from "./types.ts";

export interface DedupOptions {
  /** Titles' noise words removed when building fuzzy keys. */
  stripWords?: readonly string[];
  /** Maximum duration difference (ms) accepted by `likely` and `possible`. */
  durationToleranceMs?: number;
  /** Similarity threshold for the `maybe` level. */
  maybeSimilarityThreshold?: number;
  /**
   * How many sorted neighbours are compared per candidate in the `maybe` level.
   * Similar titles are adjacent once the pool is sorted by fuzzy key, so a
   * small window keeps the level near O(n) instead of O(n²).
   */
  maybeNeighborWindow?: number;
}

const DEFAULT_DURATION_TOLERANCE_MS = DURATION_TOLERANCE_MS;
const DEFAULT_MAYBE_SIMILARITY_THRESHOLD = MAYBE_SIMILARITY_THRESHOLD;
const DEFAULT_MAYBE_NEIGHBOR_WINDOW = 20;

const isTrackUri = (uri: string): boolean => uri.startsWith("spotify:track:");

/** Unknown durations never disagree; known ones must stay within tolerance. */
function durationsAgree(a: ScannedTrack, b: ScannedTrack, toleranceMs: number): boolean {
  return (
    a.durationMs == null ||
    b.durationMs == null ||
    Math.abs(a.durationMs - b.durationMs) <= toleranceMs
  );
}

/**
 * Split a bucket into sub-groups whose entries agree with the bucket's head.
 * Title equality is an equivalence relation, so comparing against the head is
 * enough; durations act as a one-way sanity check.
 */
function splitBy<T>(items: readonly T[], agrees: (a: T, b: T) => boolean): T[][] {
  const groups: T[][] = [];
  for (const item of items) {
    const host = groups.find((group) => agrees(group[0], item));
    if (host) host.push(item);
    else groups.push([item]);
  }
  return groups;
}

function createEmptyResults(): Record<GroupId, DuplicateGroup[]> {
  const results = {} as Record<GroupId, DuplicateGroup[]>;
  for (const id of GROUP_ORDER) results[id] = [];
  return results;
}

function groupBy<T>(items: readonly T[], key: (item: T) => string | null): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    if (k == null) continue;
    const list = map.get(k);
    if (list) list.push(item);
    else map.set(k, [item]);
  }
  return map;
}

/**
 * Scan a fully loaded playlist and compute the duplicate groups per level.
 * Entries must carry a unique, stable `position` (their playlist index).
 */
export function detectDuplicates(
  entries: readonly PlaylistEntry[],
  options: DedupOptions = {},
): DuplicateResults {
  const results = createEmptyResults();
  if (entries.length < 2) return results;

  const toleranceMs = options.durationToleranceMs ?? DEFAULT_DURATION_TOLERANCE_MS;
  const maybeThreshold = options.maybeSimilarityThreshold ?? DEFAULT_MAYBE_SIMILARITY_THRESHOLD;
  const neighborWindow = options.maybeNeighborWindow ?? DEFAULT_MAYBE_NEIGHBOR_WINDOW;

  const pool: ScannedTrack[] = entries.map((entry) => ({
    ...entry,
    titleKey: normalizeTitleStrict(entry.name),
    fuzzyKey: normalizeFuzzy(entry.name, options.stripWords),
    artistKeys: entry.artists.map(normalizeArtist).filter((name) => name.length > 0),
  }));

  const consumed = new Set<number>();
  const membersAt = (id: GroupId, candidates: ScannedTrack[]) => {
    const members = [...candidates].sort((a, b) => a.position - b.position);
    if (members.length < 2) return;
    for (const member of members) consumed.add(member.position);
    results[id].push({ members });
  };

  // --- exact: the very same URI more than once. Any context entry counts. ---
  // Sharing a URI is necessary but not sufficient: some payloads hand the same
  // (often degenerate) URI to unrelated entries — local files with no tags, for
  // instance — so the displayed identity has to agree too. Entries that
  // disagree stay unconsumed and keep flowing down to the lower levels.
  const byUri = groupBy(pool, (t) => (t.uri ? t.uri : null));
  for (const bucket of byUri.values()) {
    const twins = splitBy(
      bucket,
      (a, b) => a.titleKey === b.titleKey && durationsAgree(a, b, toleranceMs),
    );
    for (const group of twins) membersAt("exact", group);
  }

  // --- isrc: different URIs for the same recording. Requires a known ISRC.
  // Titles legitimately differ between releases, so only duration agrees here —
  // a shared bogus URI would otherwise pair unrelated tracks through one ISRC.
  const byIsrc = groupBy(
    pool.filter((t) => !consumed.has(t.position) && isTrackUri(t.uri) && t.isrc),
    (t) => t.isrc,
  );
  for (const bucket of byIsrc.values()) {
    for (const group of splitBy(bucket, (a, b) => durationsAgree(a, b, toleranceMs))) {
      membersAt("isrc", group);
    }
  }

  // --- probable / likely: identical normalized titles, refined by a predicate.
  const artistOverlap = (a: ScannedTrack, b: ScannedTrack): boolean => {
    if (a.artistKeys.length === 0 || b.artistKeys.length === 0) return false;
    const other = new Set(b.artistKeys);
    return a.artistKeys.some((name) => other.has(name));
  };
  const closeDurations = (a: ScannedTrack, b: ScannedTrack): boolean =>
    a.durationMs != null &&
    b.durationMs != null &&
    Math.abs(a.durationMs - b.durationMs) <= toleranceMs;

  const titleClusters = () =>
    groupBy(
      pool.filter((t) => !consumed.has(t.position) && isTrackUri(t.uri) && t.titleKey),
      (t) => t.titleKey,
    ).values();

  for (const cluster of titleClusters()) {
    for (const base of cluster) {
      if (consumed.has(base.position)) continue;
      const matches = [base];
      for (const other of cluster) {
        if (other === base || consumed.has(other.position)) continue;
        // An empty artist list can never overlap, so it cannot join a group.
        if (other.artistKeys.length === 0) continue;
        if (artistOverlap(base, other)) matches.push(other);
      }
      membersAt("probable", matches);
    }
  }

  for (const cluster of titleClusters()) {
    for (const base of cluster) {
      if (consumed.has(base.position)) continue;
      const matches = [base];
      for (const other of cluster) {
        if (other === base || consumed.has(other.position)) continue;
        if (other.durationMs == null) continue;
        if (closeDurations(base, other)) matches.push(other);
      }
      membersAt("likely", matches);
    }
  }

  // --- possible / maybe: fuzzy titles. Clusters need a usable fuzzy key.
  const fuzzyPool = pool.filter(
    (t) => !consumed.has(t.position) && isTrackUri(t.uri) && t.fuzzyKey.length >= 2,
  );

  const byFuzzyKey = groupBy(fuzzyPool, (t) => t.fuzzyKey);
  for (const cluster of byFuzzyKey.values()) {
    for (const base of cluster) {
      if (consumed.has(base.position)) continue;
      const matches = [base];
      for (const other of cluster) {
        if (other === base || consumed.has(other.position)) continue;
        if (other.durationMs == null) continue;
        if (closeDurations(base, other)) matches.push(other);
      }
      membersAt("possible", matches);
    }
  }

  const maybePool = fuzzyPool.filter((t) => !consumed.has(t.position));

  for (const bucket of groupBy(maybePool, (t) => t.fuzzyKey.charAt(0)).values()) {
    bucket.sort((a, b) => (a.fuzzyKey < b.fuzzyKey ? -1 : a.fuzzyKey > b.fuzzyKey ? 1 : 0));
    for (let i = 0; i < bucket.length; i++) {
      const base = bucket[i];
      if (consumed.has(base.position)) continue;
      const matches = [base];
      const limit = Math.min(i + neighborWindow, bucket.length);
      for (let j = i + 1; j < limit; j++) {
        const candidate = bucket[j];
        if (lengthMismatch(base, candidate)) continue;
        if (bigramSimilarity(base.fuzzyKey, candidate.fuzzyKey) < maybeThreshold) continue;
        matches.push(candidate);
      }
      membersAt("maybe", matches);
    }
  }

  return results;
}

/** Cheap pre-filter: pairs with a huge length gap can never reach the threshold. */
function lengthMismatch(a: ScannedTrack, b: ScannedTrack): boolean {
  const longer = Math.max(a.fuzzyKey.length, b.fuzzyKey.length);
  const shorter = Math.min(a.fuzzyKey.length, b.fuzzyKey.length);
  return shorter > 0 && longer > shorter * MAYBE_LENGTH_RATIO_GUARD;
}
