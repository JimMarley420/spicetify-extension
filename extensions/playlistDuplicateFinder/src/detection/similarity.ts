/**
 * Title similarity for the low-confidence duplicate levels.
 *
 * Dice coefficient over character bigrams, computed on the strings with all
 * whitespace removed (length differences from spacing must not penalize a
 * title). Pure function — no Spicetify dependency.
 */

/** Minimum similarity for two fuzzy keys to be considered "maybe" duplicates. */
export const MAYBE_SIMILARITY_THRESHOLD = 0.65;

/**
 * Cheap length guard: with a ratio above this, the best achievable Dice
 * score is far below the threshold, so the pair is skipped without scoring.
 */
export const MAYBE_LENGTH_RATIO_GUARD = 3;

/** Dice coefficient over character bigrams: 1.0 = identical, 0.0 = disjoint. */
export function bigramSimilarity(a: string, b: string): number {
  const s1 = a.replace(/\s+/g, "");
  const s2 = b.replace(/\s+/g, "");

  if (s1 === s2) return 1.0;
  if (s1.length < 2 || s2.length < 2) return 0.0;

  const bigrams = new Map<string, number>();
  for (let i = 0; i < s1.length - 1; i++) {
    const bg = s1.substring(i, i + 2);
    bigrams.set(bg, (bigrams.get(bg) ?? 0) + 1);
  }

  let intersection = 0;
  for (let i = 0; i < s2.length - 1; i++) {
    const bg = s2.substring(i, i + 2);
    const count = bigrams.get(bg) ?? 0;
    if (count > 0) {
      bigrams.set(bg, count - 1);
      intersection++;
    }
  }

  return Math.min(1, (2.0 * intersection) / (s1.length + s2.length - 2));
}
