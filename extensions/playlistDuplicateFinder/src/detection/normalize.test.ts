import { assertEquals } from "@std/assert";
import { normalizeArtist, normalizeFuzzy, normalizeTitleStrict } from "./normalize.ts";

Deno.test("normalizeTitleStrict lowercases, collapses spaces and keeps accents", () => {
  assertEquals(normalizeTitleStrict("  Sweater   Weather  "), "sweater weather");
  assertEquals(normalizeTitleStrict("Beyoncé"), "beyoncé");
  assertEquals(normalizeTitleStrict("Halo\n\t(2011)"), "halo (2011)");
});

Deno.test("normalizeFuzzy strips accents, brackets, noise words and punctuation", () => {
  assertEquals(normalizeFuzzy("Halo (2011 Remaster)"), "halo");
  assertEquals(normalizeFuzzy("Halo - Radio Edit [feat. Nobody]"), "halo");
  assertEquals(normalizeFuzzy("Beyoncé – Green Light (2024)"), "beyonce green light");
});

Deno.test("normalizeFuzzy keeps the core title when nothing is removable", () => {
  assertEquals(normalizeFuzzy("Take Me Home"), "take me home");
});

Deno.test("strip words must be whole words", () => {
  // "edit" inside another word must survive ("editor" → "editor").
  assertEquals(normalizeFuzzy("Editorial"), "editorial");
});

Deno.test("normalizeArtist trims and lowercases", () => {
  assertEquals(normalizeArtist(" The  Neighbourhood "), "the neighbourhood");
});
