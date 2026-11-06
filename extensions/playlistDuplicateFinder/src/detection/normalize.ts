/**
 * Title normalization for the duplicate detector.
 * Pure string functions — no Spicetify dependency.
 */

/**
 * Whole words treated as noise when building fuzzy keys. They describe
 * variants (remasters, edits, live takes, …) rather than a different song,
 * so removing them lets `Song (2011 Remaster)` and `Song` compare equal.
 */
export const DEFAULT_STRIP_WORDS: readonly string[] = [
  "remaster",
  "remastered",
  "reissue",
  "remix",
  "mix",
  "radio",
  "edit",
  "version",
  "ver",
  "feat",
  "ft",
  "live",
  "acoustic",
  "instrumental",
  "mono",
  "stereo",
  "deluxe",
  "demo",
  "intro",
  "outro",
  "explicit",
  "clean",
  "cover",
  "extended",
  "original",
  "single",
  "album",
  "bonus",
];

/** Strict normalization: case and whitespace only. Accents are preserved. */
export function normalizeTitleStrict(name: string): string {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Fuzzy normalization used by the low-confidence levels:
 * 1. strip diacritics ("Beyoncé" → "Beyonce") so fuzzy matching is not
 *    defeated by accent differences;
 * 2. lowercase;
 * 3. drop bracketed segments — `(...)`, `[...]`, `{...}` — which carry variant
 *    descriptors;
 * 4. drop the configured noise words (word boundaries respected);
 * 5. replace dashes with spaces;
 * 6. remove everything that is not a letter, number or space;
 * 7. collapse and trim whitespace.
 */
export function normalizeFuzzy(
  name: string,
  stripWords: readonly string[] = DEFAULT_STRIP_WORDS,
): string {
  let out = name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\([^)]*\)|\[[^\]]*\]|\{[^}]*\}/g, " ");

  if (stripWords.length > 0) {
    const pattern = `(?<![\\p{L}\\p{N}])(${stripWords.map(escapeRegExp).join("|")})(?![\\p{L}\\p{N}])`;
    out = out.replace(new RegExp(pattern, "gu"), " ");
  }

  return out
    .replace(/[-–—_]+/g, " ")
    .replace(/[^\p{L}\p{N} ]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Normalized artist names used for "at least one shared artist" checks. */
export function normalizeArtist(name: string): string {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}
