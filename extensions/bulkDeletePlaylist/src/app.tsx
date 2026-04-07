import styles from "./styles.css" with { type: "css" };
import { createModal } from "./modal.tsx";

document.adoptedStyleSheets.push(styles);

async function handleMenuClick(uris: string[], _uids?: string[], contextUri?: string) {
  const trackUris = uris.filter((uri: string) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && (uriObj as any).type === "track";
  });
  
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  
  let playlistUri: string | undefined;
  if (contextUri) {
    const uriObj = Spicetify.URI.from(contextUri);
    if (uriObj && (uriObj as any).type === "playlist") {
      playlistUri = contextUri;
    }
  }
  
  createModal(trackUris, playlistUri);
}

function shouldAdd(uris: string[]): boolean {
  return uris.some((uri: string) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && (uriObj as any).type === "track";
  });
}

const bulkDeleteMenuItem = new Spicetify.ContextMenu.Item(
  "Delete from Playlist",
  handleMenuClick,
  shouldAdd,
  "trashbin" as any
);

bulkDeleteMenuItem.register();