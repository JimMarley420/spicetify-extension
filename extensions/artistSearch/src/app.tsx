import { Icons } from "../../../shared/components/icons.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { ArtistSearchModal } from "./searchModal.tsx";
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

const searchArtistMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Search Artist Tracks",
  leadingIcon: Icons.HTML.search,
  onClick: (_context: any, _item: any, _event: any) => {
    const uri = _context?.props?.uri;
    if (!uri) return;

    PopupModal({
      title: "Search Artist Tracks",
      content: <ArtistSearchModal artistName="Artist" artistUri={uri} />,
      isLarge: true,
      template: true,
    });
  },
  shouldAdd: (props: any) => {
    const uri = props?.uri;
    if (!uri) return false;
    const type = Spicetify.URI.from(uri)?.type;
    return type === Spicetify.URI.Type.ARTIST;
  },
});

searchArtistMenuItem.register();
