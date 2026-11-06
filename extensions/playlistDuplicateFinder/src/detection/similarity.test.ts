import { assertEquals, assertLessOrEqual } from "@std/assert";
import { bigramSimilarity, MAYBE_SIMILARITY_THRESHOLD } from "./similarity.ts";

Deno.test("identical titles score 1.0", () => {
  assertEquals(bigramSimilarity("green light", "greenlight"), 1.0);
});

Deno.test("clearly different titles stay far below the maybe threshold", () => {
  const score = bigramSimilarity("highway to hell", "highway star");
  assertLessOrEqual(score, MAYBE_SIMILARITY_THRESHOLD - 0.05);
});

Deno.test("small typos score high enough for the maybe level", () => {
  const score = bigramSimilarity("cruel summer", "cruel sumer");
  assertEquals(score >= MAYBE_SIMILARITY_THRESHOLD, true);
});

Deno.test("very short strings are scored 0 unless equal", () => {
  assertEquals(bigramSimilarity("a", "a"), 1.0);
  assertEquals(bigramSimilarity("a", "ab"), 0.0);
});

Deno.test("score is normalized to [0, 1]", () => {
  const score = bigramSimilarity("abcdefgh", "abcdefgh");
  assertEquals(score <= 1, true);
});
