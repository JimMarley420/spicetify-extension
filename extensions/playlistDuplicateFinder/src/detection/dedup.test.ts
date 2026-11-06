import { assertEquals, assertGreaterOrEqual } from "@std/assert";
import { type DedupOptions, detectDuplicates } from "./dedup.ts";
import type { PlaylistEntry } from "./types.ts";

/** Helper to build a playlist entry without boilerplate. */
function entry(overrides: Partial<PlaylistEntry> & Pick<PlaylistEntry, "name">): PlaylistEntry {
  return {
    position: overrides.position ?? 0,
    uri: overrides.uri ?? "",
    uid: overrides.uid ?? "",
    name: overrides.name,
    artists: overrides.artists ?? [],
    albumName: overrides.albumName ?? "",
    albumUri: overrides.albumUri ?? "",
    imageUrl: overrides.imageUrl ?? "",
    durationMs: overrides.durationMs ?? null,
    addedAt: overrides.addedAt ?? "",
    isrc: overrides.isrc ?? null,
  };
}

// Detection uses its default strip-word list so the normalization helpers are
// exercised end-to-end.
const OPTS: DedupOptions = {};

Deno.test("empty playlist and single track produce no groups", () => {
  assertEquals(detectDuplicates([], OPTS).exact.length, 0);
  const single = detectDuplicates(
    [entry({ name: "Alone", uri: "spotify:track:a1", position: 0, uid: "u0" })],
    OPTS,
  );
  assertEquals(single.exact.length, 0);
  assertEquals(single.maybe.length, 0);
});

Deno.test("exact level groups repeated URIs of the same track", () => {
  const results = detectDuplicates(
    [
      entry({ name: "Alone", uri: "spotify:track:a1", uid: "u1", position: 0, durationMs: 200000 }),
      entry({ name: "Alone", uri: "spotify:track:a1", uid: "u2", position: 4, durationMs: 200000 }),
    ],
    OPTS,
  );
  assertEquals(results.exact.length, 1);
  assertEquals(results.exact[0].members.length, 2);
  assertEquals(results.exact[0].members[0].position, 0);
  assertEquals(results.exact[0].members[1].position, 4);
  // Every other level stayed empty: the pair is consumed at the top level.
  assertEquals(results.isrc.length + results.probable.length + results.likely.length, 0);
});

Deno.test("exact level treats local and other context URIs", () => {
  const results = detectDuplicates(
    [
      entry({ name: " hallway tape ", uri: "spotify:local:a/b/128/1", uid: "u1", position: 0 }),
      entry({ name: "hallway tape", uri: "spotify:local:a/b/128/1", uid: "u2", position: 1 }),
    ],
    OPTS,
  );
  assertEquals(results.exact.length, 1);
});

Deno.test("isrc level groups different URIs sharing an ISRC", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Same Song (Album Version)",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        isrc: "USISRC1",
      }),
      entry({
        name: "Same Song (Single Edit)",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        isrc: "USISRC1",
      }),
      entry({
        name: "Unrelated Song",
        uri: "spotify:track:c3",
        uid: "u3",
        position: 2,
        isrc: "OTHERISRC",
      }),
    ],
    OPTS,
  );
  assertEquals(results.exact.length, 0);
  assertEquals(results.isrc.length, 1);
  assertEquals(results.isrc[0].members.length, 2);
  assertEquals(results.isrc[0].members[0].uid, "u1");
  assertEquals(results.isrc[0].members[1].uid, "u2");
});

Deno.test("probable level: same strict title and one shared artist", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Midnight City",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        artists: ["M83"],
      }),
      entry({
        name: "midnight city",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        artists: ["M83", "Special Guest"],
      }),
    ],
    OPTS,
  );
  assertEquals(results.probable.length, 1);
  assertEquals(results.probable[0].members.length, 2);
});

Deno.test("probable level refuses same title with disjoint artists", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Midnight City",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        artists: ["M83"],
      }),
      entry({
        name: "Midnight City",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        artists: ["Whatever Band"],
      }),
    ],
    OPTS,
  );
  assertEquals(results.probable.length, 0);
  assertEquals(results.likely.length, 0);
});

Deno.test("likely level accepts a 4.9s duration gap", () => {
  const results = detectDuplicates(
    [
      entry({ name: "Time", uri: "spotify:track:a1", uid: "u1", position: 0, durationMs: 300000 }),
      entry({ name: "Time", uri: "spotify:track:b2", uid: "u2", position: 1, durationMs: 304900 }),
    ],
    OPTS,
  );
  assertEquals(results.likely.length, 1);
  assertEquals(results.likely[0].members.length, 2);
});

Deno.test("likely level accepts exactly 5.0s and refuses 5.1s", () => {
  const atFive = detectDuplicates(
    [
      entry({ name: "Time", uri: "spotify:track:a1", uid: "u1", position: 0, durationMs: 300000 }),
      entry({ name: "Time", uri: "spotify:track:b2", uid: "u2", position: 1, durationMs: 305000 }),
    ],
    OPTS,
  );
  assertEquals(atFive.likely.length, 1);

  const aboveFive = detectDuplicates(
    [
      entry({ name: "Time", uri: "spotify:track:a1", uid: "u1", position: 0, durationMs: 300000 }),
      entry({ name: "Time", uri: "spotify:track:b2", uid: "u2", position: 1, durationMs: 305100 }),
    ],
    OPTS,
  );
  assertEquals(aboveFive.likely.length, 0);
});

Deno.test("likely level ignores tracks with unknown durations", () => {
  const results = detectDuplicates(
    [
      entry({ name: "Time", uri: "spotify:track:a1", uid: "u1", position: 0, durationMs: null }),
      entry({ name: "Time", uri: "spotify:track:b2", uid: "u2", position: 1, durationMs: 300000 }),
    ],
    OPTS,
  );
  assertEquals(results.likely.length, 0);
});

Deno.test("possible level: normalized spelling variants with close durations", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Halo (2011 Remastered)",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        artists: ["Beyoncé"],
        durationMs: 260000,
      }),
      entry({
        name: "Halo (Remaster 2009)",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        artists: ["Beyoncé"],
        durationMs: 262000,
      }),
    ],
    OPTS,
  );
  // Strict titles differ, so probable (title+artist) and likely (title+length)
  // are out; fuzzy keys collapse to the same key and durations are close.
  assertEquals(results.probable.length, 0);
  assertEquals(results.likely.length, 0);
  assertEquals(results.possible.length, 1);
  assertEquals(results.possible[0].members.length, 2);
});

Deno.test("clearly different songs are never grouped", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Highway to Hell",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        durationMs: 200000,
      }),
      entry({
        name: "Hotel California",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        durationMs: 260000,
      }),
    ],
    OPTS,
  );
  assertEquals(results.maybe.length, 0);
  assertEquals(results.possible.length, 0);
});

Deno.test("maybe level groups similar but not identical titles", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "A Beautiful Morning",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        durationMs: 240000,
      }),
      entry({
        name: "A Beautiful Mourning",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        durationMs: 300000,
      }),
    ],
    OPTS,
  );
  assertEquals(results.maybe.length, 1);
  assertEquals(results.maybe[0].members.length, 2);
});

Deno.test("every entry lands in at most one group across all levels", () => {
  const entries: PlaylistEntry[] = [
    entry({
      name: "Song One",
      uri: "spotify:track:a1",
      uid: "u1",
      position: 0,
      isrc: "ISRC1",
      artists: ["Alpha"],
      durationMs: 200000,
    }),
    entry({
      name: "Song One",
      uri: "spotify:track:a1",
      uid: "u2",
      position: 1,
      isrc: "ISRC1",
      artists: ["Alpha"],
      durationMs: 200000,
    }),
    entry({
      name: "Song One (Album Version)",
      uri: "spotify:track:b2",
      uid: "u3",
      position: 2,
      isrc: "ISRC1",
      artists: ["Alpha"],
      durationMs: 201000,
    }),
    entry({
      name: "Song Tuo",
      uri: "spotify:track:c3",
      uid: "u4",
      position: 3,
      artists: ["Alpha"],
      durationMs: 240000,
    }),
    entry({
      name: "Song Tiwo",
      uri: "spotify:track:d4",
      uid: "u5",
      position: 4,
      artists: ["Alpha"],
      durationMs: 240000,
    }),
  ];
  const results = detectDuplicates(entries, OPTS);
  let totalMembers = 0;
  for (const groups of Object.values(results)) {
    for (const group of groups) totalMembers += group.members.length;
  }
  // u1 + u2 are consumed by "exact"; u3's ISRC needs an unconsumed partner so
  // it stays alone; "Song Tuo"/"Song Tiwo" stay under the maybe threshold.
  assertEquals(totalMembers, 2);
});

Deno.test("exact grouping outranks isrc and probable for the same pair", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Same Song",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        isrc: "ISRC1",
        artists: ["Alpha"],
      }),
      entry({
        name: "Same Song",
        uri: "spotify:track:a1",
        uid: "u2",
        position: 1,
        isrc: "ISRC1",
        artists: ["Alpha"],
      }),
    ],
    OPTS,
  );
  assertEquals(results.exact.length, 1);
  const groupsElsewhere = Object.values(results)
    .slice(1)
    .reduce((sum, groups) => sum + groups.length, 0);
  assertEquals(groupsElsewhere, 0);
});

Deno.test("detection of 10 000 entries stays fast and never misattributes", () => {
  const entries: PlaylistEntry[] = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 10_000; i++) {
    const name = `${alphabet[i % 26]}-${alphabet[(i * 7) % 26]}${alphabet[(i * 13) % 26]} Track ${i}`;
    const position = entries.length;
    entries.push({
      position,
      uri: `spotify:track:t${i}`,
      uid: `u${i}`,
      name,
      artists: [`Artist ${i % 500}`],
      albumName: `Album ${i % 1000}`,
      albumUri: `spotify:album:al${i % 1000}`,
      imageUrl: "",
      durationMs: 180_000 + (i % 60) * 1000,
      addedAt: "",
      isrc: null,
    });
    // Sprinkle exact duplicates to force consumption in dedup.
    if (i % 200 === 0) {
      entries.push({
        position: entries.length,
        uri: `spotify:track:t${i}`,
        uid: `u${i}-dup`,
        name,
        artists: [`Artist ${i % 500}`],
        albumName: `Album ${i % 1000}`,
        albumUri: `spotify:album:al${i % 1000}`,
        imageUrl: "",
        durationMs: 180_000 + (i % 60) * 1000,
        addedAt: "",
        isrc: null,
      });
    }
  }

  const startedAt = performance.now();
  const results = detectDuplicates(entries, OPTS);
  const elapsed = performance.now() - startedAt;

  assertGreaterOrEqual(results.exact.length, 50);
  if (elapsed > 3_000) throw new Error(`detection too slow: ${elapsed.toFixed(0)}ms`);
});

Deno.test("exact level never pairs entries that disagree on a shared URI", () => {
  // Regression: a payload can hand the same URI to unrelated entries (local
  // files without tags do exactly that). "Identical Tracks" must stay honest —
  // a shared URI alone is not proof of a duplicate.
  const results = detectDuplicates(
    [
      entry({
        name: "Vendredi13Mai2022",
        uri: "spotify:track:shared-bogus-id",
        uid: "u1",
        position: 0,
        durationMs: 122_000,
      }),
      entry({
        name: "Vendredi13Août2021",
        uri: "spotify:track:shared-bogus-id",
        uid: "u2",
        position: 1,
        durationMs: 176_000,
      }),
    ],
    OPTS,
  );

  assertEquals(results.exact.length, 0);
  // Neither did they sneak into a level that requires real agreement.
  assertEquals(results.isrc.length, 0);
  assertEquals(results.probable.length, 0);
  assertEquals(results.likely.length, 0);
  assertEquals(results.possible.length, 0);
});

Deno.test("exact level still groups a true repeat of the same track", () => {
  // Guard the guard: the identity check must not eat real duplicates.
  const results = detectDuplicates(
    [
      entry({
        name: "Alone",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        durationMs: 200_000,
      }),
      entry({
        name: "  ALONE ",
        uri: "spotify:track:a1",
        uid: "u2",
        position: 7,
        durationMs: 200_000,
      }),
      entry({ name: "Alone", uri: "spotify:track:a1", uid: "u3", position: 9 }),
    ],
    OPTS,
  );
  assertEquals(results.exact.length, 1);
  assertEquals(results.exact[0].members.length, 3);
});

Deno.test("isrc level refuses a shared ISRC whose durations disagree", () => {
  const results = detectDuplicates(
    [
      entry({
        name: "Sunrise Drive",
        uri: "spotify:track:a1",
        uid: "u1",
        position: 0,
        durationMs: 120_000,
        isrc: "USISRC1",
      }),
      entry({
        name: "Completely Different Song",
        uri: "spotify:track:b2",
        uid: "u2",
        position: 1,
        durationMs: 300_000,
        isrc: "USISRC1",
      }),
    ],
    OPTS,
  );
  assertEquals(results.isrc.length, 0);
  assertEquals(results.exact.length, 0);
});
