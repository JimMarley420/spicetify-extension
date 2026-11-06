/**
 * Shared data shapes for the duplicate detection pipeline.
 *
 * This module (and the whole `detection/` folder) is intentionally free of any
 * Spicetify dependency so it stays pure and unit-testable.
 */

/** How a scan entry is handed to the detector by the Spicetify adapter. */
export interface PlaylistEntry {
  /** 0-based position in the playlist at scan time. Identifies an occurrence. */
  position: number;
  /** Track URI. Exact duplicates share it; each occurrence still has its own uid. */
  uri: string;
  /** Occurrence id returned by the playlist contents API. */
  uid: string;
  name: string;
  /** Artist display names, in playlist order. */
  artists: readonly string[];
  albumName: string;
  albumUri: string;
  imageUrl: string;
  /** Duration in milliseconds, or null when unknown. */
  durationMs: number | null;
  /** ISO date string of "added at", or "" when unknown. */
  addedAt: string;
  /** ISRC recording id, or null when unknown / not yet fetched. */
  isrc: string | null;
}

/** A playlist entry enriched with the normalized keys used by the detector. */
export interface ScannedTrack extends PlaylistEntry {
  /** strict normalized title (lowercase, whitespace collapsed) */
  titleKey: string;
  /** fuzzy normalized title (accents stripped, noise words removed, …) */
  fuzzyKey: string;
  /** lowercase artist names for comparisons */
  artistKeys: readonly string[];
}

/** All six confidence levels, from most reliable to least reliable. */
export type GroupId = "exact" | "isrc" | "probable" | "likely" | "possible" | "maybe";

export const GROUP_ORDER: readonly GroupId[] = [
  "exact",
  "isrc",
  "probable",
  "likely",
  "possible",
  "maybe",
];

/** Reliability score per level, 1 (low) to 6 (certain). Used by the UI gauge. */
export const GROUP_RELIABILITY: Record<GroupId, number> = {
  exact: 6,
  isrc: 5,
  probable: 4,
  likely: 3,
  possible: 2,
  maybe: 1,
};

/**
 * One group of interchangeable entries.
 * `members` is sorted by playlist position; the first member is the entry the
 * detector suggests keeping (nothing is ever preselected in the UI).
 */
export interface DuplicateGroup {
  readonly members: readonly ScannedTrack[];
}

export type DuplicateResults = Record<GroupId, readonly DuplicateGroup[]>;

/** Detection performance guard: total duration tolerance for "likely"/"possible". */
export const DURATION_TOLERANCE_MS = 5_000;
