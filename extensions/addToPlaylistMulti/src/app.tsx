import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

interface Playlist {
  name: string;
  uri: string;
}

async function fetchPlaylists(): Promise<Playlist[]> {
  const LibraryAPI = (Spicetify as any).Platform?.LibraryAPI;
  
  if (!LibraryAPI) {
    return [];
  }
  
  try {
    const response = await LibraryAPI.getContents({
      offset: 0,
      limit: 10000000,
      flattenTree: true,
    });
    
    const playlists: Playlist[] = [];
    const items = response?.items || [];
    
    for (const item of items) {
      if (item.type === "playlist" && item.canAddTo) {
        playlists.push({
          name: item.name,
          uri: item.uri,
        });
      }
    }
    
    return playlists;
  } catch (e) {
    return [];
  }
}

async function addTracksToPlaylists(playlistUris: string[], trackUris: string[]): Promise<void> {
  const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
  
  if (!PlaylistAPI) {
    throw new Error("No PlaylistAPI");
  }
  
  for (const playlistUri of playlistUris) {
    try {
      await PlaylistAPI.add(playlistUri, trackUris, []);
    } catch (e) {
      throw e;
    }
  }
}

function createModal(trackUris: string[]) {
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  
  const content = document.createElement("div");
  content.className = "add-to-playlist-content";
  
  const header = document.createElement("div");
  header.className = "add-to-playlist-header";
  header.textContent = "Add to Multiple Playlists";
  
  const trackCount = document.createElement("div");
  trackCount.className = "add-to-playlist-track-count";
  trackCount.textContent = `${trackUris.length} track(s) selected`;
  
  const playlistList = document.createElement("div");
  playlistList.className = "add-to-playlist-list";
  
  const selectedSet = new Set<string>();
  
  async function loadPlaylists() {
    try {
      const playlists = await fetchPlaylists();
      
      for (const playlist of playlists) {
        const item = document.createElement("label");
        item.className = "add-to-playlist-item";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "add-to-playlist-checkbox";
        
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            selectedSet.add(playlist.uri);
          } else {
            selectedSet.delete(playlist.uri);
          }
          confirmBtn.disabled = selectedSet.size === 0;
        });
        
        const name = document.createElement("span");
        name.className = "add-to-playlist-name";
        name.textContent = playlist.name;
        
        item.appendChild(checkbox);
        item.appendChild(name);
        playlistList.appendChild(item);
      }
    } catch (e) {
      playlistList.textContent = "Failed to load playlists";
    }
  }
  
  loadPlaylists();
  
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "add-to-playlist-buttons";
  
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "add-to-playlist-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => modal.remove());
  
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "add-to-playlist-btn confirm";
  confirmBtn.textContent = "Add";
  confirmBtn.disabled = true;
  
  confirmBtn.addEventListener("click", async () => {
    const playlistUris = Array.from(selectedSet);
    confirmBtn.disabled = true;
    confirmBtn.textContent = "Adding...";
    
    try {
      await addTracksToPlaylists(playlistUris, trackUris);
      Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${playlistUris.length} playlist(s)`);
      modal.remove();
    } catch (e) {
      Spicetify.showNotification("Failed to add tracks", true);
      confirmBtn.disabled = false;
      confirmBtn.textContent = "Add";
    }
  });
  
  buttonContainer.appendChild(cancelBtn);
  buttonContainer.appendChild(confirmBtn);
  
  content.appendChild(header);
  content.appendChild(trackCount);
  content.appendChild(playlistList);
  content.appendChild(buttonContainer);
  
  modal.appendChild(content);
  
  document.body.appendChild(modal);
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

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
  (uris: string[]) => uris.length > 0,
  "plus" as Spicetify.Icon
);

addToMultiplePlaylistsMenuItem.register();