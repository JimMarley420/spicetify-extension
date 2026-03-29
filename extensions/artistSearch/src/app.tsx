import { parseProps } from "../../../shared/api/parseProps.ts";
import { Icons } from "../../../shared/components/icons.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { ArtistSearchModal } from "./searchModal.tsx";
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

console.log("[Artist Search] Starting extension initialization...");

window.addEventListener("error", (e) => {
  console.error("[Artist Search] Global error:", e.error);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("[Artist Search] Unhandled rejection:", e.reason);
});

try {
  const searchArtistMenuItem = new Spicetify.ContextMenuV2.Item({
    children: "Search Artist Tracks",
    leadingIcon: Icons.HTML.search,
    onClick: async (_context: any, _item: any, _event: any) => {
      const context = _context as { props?: Record<string, unknown> };
      const parsed = parseProps(context.props);
      const uri = parsed.uri as string;

      if (!uri) {
        console.error("[Artist Search] No URI found in context");
        return;
      }

      const artistUri = uri;
      let artistName = parsed.name as string;

      if (!artistName) {
        try {
          const metadata = await Spicetify.CosmosAsync.get(
            `sp://core/v1/entity/${encodeURIComponent(artistUri)}`,
          );
          artistName = metadata?.name || "Unknown Artist";
        } catch {
          artistName = "Unknown Artist";
        }
      }

      PopupModal({
        title: `Search: ${artistName}`,
        content: <ArtistSearchModal artistName={artistName} artistUri={artistUri} />,
        isLarge: true,
        template: false,
      });
    },
    shouldAdd: (props: any, _trigger: any, _target: any) => {
      const parsed = parseProps(props);
      const uri = parsed.uri as string | undefined;
      if (!uri) return false;
      const type = Spicetify.URI.from(uri)?.type;
      return type === Spicetify.URI.Type.ARTIST;
    },
  });

  searchArtistMenuItem.register();

  console.log("[Artist Search] Extension loaded - Right-click on an artist to search their tracks");
} catch (err) {
  console.error("[Artist Search] Error during initialization:", err);
}
