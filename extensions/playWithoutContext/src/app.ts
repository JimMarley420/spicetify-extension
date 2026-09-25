function isTrackUri(uri: string): boolean {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && (uriObj as { type?: string }).type === "track");
}

async function handleMenuClick(uris: string[]) {
  const trackUri = uris.find(isTrackUri);
  if (!trackUri) {
    Spicetify.showNotification("No track selected", true);
    return;
  }

  try {
    await Spicetify.Player.playUri(trackUri, {});
  } catch {
    Spicetify.showNotification("Unable to play track without context", true);
  }
}

const playWithoutContextMenuItem = new Spicetify.ContextMenu.Item(
  "Play Without Context",
  handleMenuClick,
  (uris: string[]) => uris.some(isTrackUri),
  "play" as Spicetify.Icon,
);

playWithoutContextMenuItem.register();
