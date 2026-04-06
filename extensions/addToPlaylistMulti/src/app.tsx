import styles from "./styles.css" with { type: "css" };
import { createModal } from "./modal.tsx";

document.adoptedStyleSheets.push(styles);

async function handleMenuClick(uris: string[]) {
  const trackUris = uris.filter((uri: string) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && (uriObj as any).type === "track";
  });
  
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  
  createModal(trackUris);
}

const addToMultiplePlaylistsMenuItem = new Spicetify.ContextMenu.Item(
  "Add to Multiple Playlists",
  handleMenuClick,
  (uris: string[]) => {
    const hasTrack = uris.some((uri: string) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && (uriObj as any).type === "track";
    });
    return hasTrack;
  },
  "plus-alt" as Spicetify.Icon
);

addToMultiplePlaylistsMenuItem.register();