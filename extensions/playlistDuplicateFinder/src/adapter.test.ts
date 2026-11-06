/// <reference path="../../../shared/types/spicetify.d.ts" />
import { assertEquals } from "@std/assert";
import { parsePlaylistItem } from "./adapter.ts";

Deno.test("parsePlaylistItem uses the item URI when it names a track", () => {
  const parsed = parsePlaylistItem(
    {
      uri: "spotify:track:abc",
      name: "Song",
      trackMetadata: { link: "spotify:track:xyz", name: "Other" },
    },
    0,
  );
  assertEquals(parsed?.uri, "spotify:track:abc");
  assertEquals(parsed?.name, "Song");
});

Deno.test("parsePlaylistItem ignores a URI that names something else", () => {
  // Payloads occasionally carry a playlist (or bare `spotify:local:`) URI on
  // the item: trusting it would merge unrelated tracks into one "identical"
  // group, so the track metadata link wins instead.
  const fromPlaylistUri = parsePlaylistItem(
    { uri: "spotify:playlist:123", trackMetadata: { link: "spotify:track:xyz", name: "Song" } },
    1,
  );
  assertEquals(fromPlaylistUri?.uri, "spotify:track:xyz");

  const fromLocalStub = parsePlaylistItem(
    {
      uri: "spotify:local:",
      trackMetadata: { link: "spotify:local:artist/album/song/122", name: "Song" },
    },
    2,
  );
  assertEquals(fromLocalStub?.uri, "spotify:local:artist/album/song/122");
});

Deno.test("parsePlaylistItem drops entries nothing can identify", () => {
  assertEquals(parsePlaylistItem({ uri: "spotify:playlist:123", trackMetadata: {} }, 3), null);
  assertEquals(parsePlaylistItem({ uid: "u1", name: "Song" }, 4), null);
});
