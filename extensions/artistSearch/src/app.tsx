import { parseProps } from "../../../shared/api/parseProps.ts";
import { Icons } from "../../../shared/components/icons.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { ArtistSearchModal } from "./searchModal.tsx";
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

const searchArtistMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Search Artist Tracks",
  leadingIcon: Icons.HTML.search,
  onClick: async (_context: any, _item: any, _event: any) => {
    const context = _context as { props?: Record<string, unknown> };
    const parsed = parseProps(context.props);
    const uri = parsed.uri as string;

    if (!uri) {
      return;
    }

    const artistUri = uri;
    let artistName = (parsed.name as string) 
      || (parsed.title as string) 
      || (parsed.headerTitle as string)
      || (parsed.subtitle as string)
      || "";

    if (!artistName || artistName.trim() === "") {
      try {
        const response = await Spicetify.Platform.GraphQLLoader(
          Spicetify.GraphQL.Definitions.browseArtist,
          {
            uri: artistUri,
            locale: Spicetify.Locale.getLocale(),
          },
        );
        artistName = response?.data?.artistUnion?.profile?.name || "";
      } catch {
        artistName = "";
      }
    }

    PopupModal({
      title: `Search: ${artistName || "Artist"}`,
      content: <ArtistSearchModal artistName={artistName || "Artist"} artistUri={artistUri} />,
      isLarge: true,
      template: true,
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
