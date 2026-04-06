interface Playlist {
  name: string;
  uri: string;
  canDelete: boolean;
  canAddTo: boolean;
}

interface Track {
  uri: string;
  name: string;
  artist: string;
  album: string;
}

async function fetchAllLibraryContents(): Promise<object[]> {
  const LibraryAPI = (Spicetify as any).Platform?.LibraryAPI;
  if (!LibraryAPI) return [];
  
  const response = await LibraryAPI.getContents({
    offset: 0,
    limit: 10000000,
    flattenTree: true,
  });
  
  return response?.items || [];
}

export async function fetchPlaylistsWithDeletePermission(): Promise<Playlist[]> {
  try {
    const items = await fetchAllLibraryContents();
    
    const playlists: Playlist[] = [];
    
    for (const item of items) {
      const playlist = item as { type?: string; canDelete?: boolean; canAddTo?: boolean; name?: string; uri?: string };
      if (playlist.type === "playlist" && (playlist.canDelete || playlist.canAddTo)) {
        playlists.push({
          name: playlist.name || "Unknown",
          uri: playlist.uri || "",
          canDelete: playlist.canDelete || false,
          canAddTo: playlist.canAddTo || false,
        });
      }
    }
    
    return playlists;
  } catch (e) {
    return [];
  }
}

export async function getPlaylistTracks(playlistUri: string): Promise<Track[]> {
  const tracks: Track[] = [];
  
  try {
    const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
    
    if (!PlaylistAPI) {
      throw new Error("PlaylistAPI not available");
    }
    
    const response = await PlaylistAPI.getContents(playlistUri, {
      offset: 0,
      limit: -1,
    });
    
    if (response?.items) {
      for (const item of response.items) {
        if (item?.uri) {
          let name = "Unknown Track";
          let artist = "Unknown Artist";
          let album = "Unknown Album";
          
          if (item.name) {
            name = item.name;
          }
          if (item.artists?.[0]?.name) {
            artist = item.artists[0].name;
          }
          if (item.album?.name) {
            album = item.album.name;
          }
          
          tracks.push({
            uri: item.uri,
            name,
            artist,
            album,
          });
        }
      }
    }
  } catch (e) {
    throw e;
  }
  
  return tracks;
}

export async function deleteTracksFromPlaylist(
  playlistUri: string,
  trackUris: string[]
): Promise<boolean> {
  const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
  
  if (!PlaylistAPI) {
    return false;
  }
  
  try {
    for (const trackUri of trackUris) {
      await PlaylistAPI.remove(playlistUri, trackUri);
    }
    return true;
  } catch (e) {
    return false;
  }
}

function createDeleteConfirmModal(
  trackCount: number,
  playlistName: string,
  onConfirm: () => void,
  onCancel: () => void
) {
  const overlay = document.createElement("div");
  overlay.className = "bulk-delete-confirm-overlay";
  
  const content = document.createElement("div");
  content.className = "bulk-delete-confirm-content";
  
  const header = document.createElement("div");
  header.className = "bulk-delete-confirm-header";
  header.textContent = "Delete Tracks";
  
  const warning = document.createElement("div");
  warning.className = "bulk-delete-confirm-warning";
  warning.innerHTML = `
    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
    <p>This will permanently remove <strong>${trackCount}</strong> track(s) from <strong>${playlistName}</strong>. This action cannot be undone.</p>
  `;
  
  const buttons = document.createElement("div");
  buttons.className = "bulk-delete-confirm-buttons";
  
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "bulk-delete-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    overlay.remove();
    onCancel();
  });
  
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "bulk-delete-btn delete";
  confirmBtn.textContent = "Delete";
  confirmBtn.addEventListener("click", () => {
    overlay.remove();
    onConfirm();
  });
  
  buttons.appendChild(cancelBtn);
  buttons.appendChild(confirmBtn);
  
  content.appendChild(header);
  content.appendChild(warning);
  content.appendChild(buttons);
  
  overlay.appendChild(content);
  document.body.appendChild(overlay);
  
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      onCancel();
    }
  });
}

export function createModal(trackUris: string[]) {
  let allPlaylists: Playlist[] = [];
  let currentTracks: Track[] = [];
  let filteredTracks: Track[] = [];
  const selectedSet = new Set<string>();
  let currentPlaylistUri: string | null = null;
  
  const modal = document.createElement("div");
  modal.className = "bulk-delete-modal";
  
  const content = document.createElement("div");
  content.className = "bulk-delete-content";
  
  const header = document.createElement("div");
  header.className = "bulk-delete-header";
  
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Bulk Delete from Playlist";
  
  const headerRight = document.createElement("div");
  headerRight.className = "bulk-delete-header-right";
  
  const githubLink = document.createElement("a");
  githubLink.className = "bulk-delete-github";
  githubLink.href = "https://github.com/JimMarley420/spicetify-extension";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  
  const closeBtn = document.createElement("button");
  closeBtn.className = "bulk-delete-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  closeBtn.addEventListener("click", () => modal.remove());
  
  headerRight.appendChild(githubLink);
  headerRight.appendChild(closeBtn);
  
  header.appendChild(headerTitle);
  header.appendChild(headerRight);
  
  const playlistSelector = document.createElement("div");
  playlistSelector.className = "bulk-delete-playlist-selector";
  
  const playlistLabel = document.createElement("label");
  playlistLabel.className = "bulk-delete-playlist-label";
  playlistLabel.textContent = "Select Playlist";
  
  const playlistSelect = document.createElement("select");
  playlistSelect.className = "bulk-delete-playlist-select";
  
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Choose a playlist...";
  playlistSelect.appendChild(defaultOption);
  
  playlistSelector.appendChild(playlistLabel);
  playlistSelector.appendChild(playlistSelect);
  
  const searchContainer = document.createElement("div");
  searchContainer.className = "bulk-delete-search";
  
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "bulk-delete-search-wrapper";
  
  const searchIcon = document.createElement("div");
  searchIcon.className = "bulk-delete-search-icon";
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
  
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search tracks in playlist...";
  searchInput.disabled = true;
  
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchContainer.appendChild(searchWrapper);
  
  const trackInfo = document.createElement("div");
  trackInfo.className = "bulk-delete-track-info";
  trackInfo.innerHTML = `<p><span>0</span> track(s) selected from playlist</p>`;
  
  const trackList = document.createElement("div");
  trackList.className = "bulk-delete-list";
  
  const emptyState = document.createElement("div");
  emptyState.className = "bulk-delete-empty";
  emptyState.textContent = "Select a playlist first";
  trackList.appendChild(emptyState);
  
  function renderTracks(tracks: Track[]) {
    trackList.innerHTML = "";
    
    if (tracks.length === 0) {
      const emptyMsg = searchInput.value ? "No tracks found" : "Playlist is empty";
      const empty = document.createElement("div");
      empty.className = "bulk-delete-empty";
      empty.textContent = emptyMsg;
      trackList.appendChild(empty);
      return;
    }
    
    for (const track of tracks) {
      const item = document.createElement("label");
      item.className = "bulk-delete-item" + (selectedSet.has(track.uri) ? " selected" : "");
      
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "bulk-delete-checkbox-wrapper";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "bulk-delete-checkbox";
      checkbox.checked = selectedSet.has(track.uri);
      
      const customCheckbox = document.createElement("div");
      customCheckbox.className = "bulk-delete-checkbox-custom";
      
      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(customCheckbox);
      
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSet.add(track.uri);
          item.classList.add("selected");
        } else {
          selectedSet.delete(track.uri);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      
      const info = document.createElement("div");
      info.className = "bulk-delete-item-info";
      
      const title = document.createElement("div");
      title.className = "bulk-delete-item-title";
      title.textContent = track.name;
      
      const artist = document.createElement("div");
      artist.className = "bulk-delete-item-artist";
      artist.textContent = track.artist;
      
      const album = document.createElement("div");
      album.className = "bulk-delete-item-album";
      album.textContent = track.album;
      
      info.appendChild(title);
      info.appendChild(artist);
      info.appendChild(album);
      
      item.appendChild(checkboxWrapper);
      item.appendChild(info);
      trackList.appendChild(item);
    }
  }
  
  function filterTracks() {
    const query = searchInput.value.toLowerCase();
    filteredTracks = currentTracks.filter(t => 
      t.name.toLowerCase().includes(query) ||
      t.artist.toLowerCase().includes(query) ||
      t.album.toLowerCase().includes(query)
    );
    renderTracks(filteredTracks);
    updateButtonState();
  }
  
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackInfo.innerHTML = `<p><span>${selectedCount}</span> track(s) selected from playlist</p>`;
    deleteBtn.disabled = selectedCount === 0;
    
    if (selectedCount === 0) {
      selectAllBtn.textContent = "Select All";
    } else if (selectedCount === filteredTracks.length) {
      selectAllBtn.textContent = "Deselect All";
    } else {
      selectAllBtn.textContent = "Select All";
    }
  }
  
  async function loadPlaylistTracks(playlistUri: string) {
    emptyState.textContent = "Loading tracks...";
    trackList.innerHTML = "";
    trackList.appendChild(emptyState);
    
    try {
      currentTracks = await getPlaylistTracks(playlistUri);
      filteredTracks = [...currentTracks];
      selectedSet.clear();
      searchInput.disabled = false;
      searchInput.value = "";
      renderTracks(filteredTracks);
      updateButtonState();
    } catch (e) {
      emptyState.textContent = "Failed to load tracks";
      trackList.appendChild(emptyState);
      Spicetify.showNotification("Failed to load tracks", true);
    }
  }
  
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylistsWithDeletePermission();
      
      allPlaylists.sort((a, b) => a.name.localeCompare(b.name));
      
      const defaultOpt = document.createElement("option");
      defaultOpt.value = "";
      defaultOpt.textContent = "Select a playlist";
      playlistSelect.appendChild(defaultOpt);
      
      for (const playlist of allPlaylists) {
        const option = document.createElement("option");
        option.value = playlist.uri;
        option.textContent = playlist.name;
        playlistSelect.appendChild(option);
      }
      
      if (trackUris.length > 0 && allPlaylists.length > 0) {
        let foundPlaylist: Playlist | null = null;
        
        for (const playlist of allPlaylists) {
          try {
            const tracks = await getPlaylistTracks(playlist.uri);
            const trackUrisSet = new Set(tracks.map(t => t.uri));
            const hasSelectedTrack = trackUris.some(uri => trackUrisSet.has(uri));
            if (hasSelectedTrack) {
              foundPlaylist = playlist;
              break;
            }
          } catch (e) {
          }
        }
        
        if (foundPlaylist) {
          playlistSelect.value = foundPlaylist.uri;
          currentPlaylistUri = foundPlaylist.uri;
          await loadPlaylistTracks(foundPlaylist.uri);
          
          selectedSet.clear();
          const currentUris = new Set(currentTracks.map(t => t.uri));
          for (const uri of trackUris) {
            if (currentUris.has(uri)) {
              selectedSet.add(uri);
            }
          }
          
          trackList.querySelectorAll(".bulk-delete-item").forEach(item => {
            const checkbox = item.querySelector(".bulk-delete-checkbox") as HTMLInputElement;
            const titleEl = item.querySelector(".bulk-delete-item-title") as HTMLElement;
            if (titleEl) {
              const track = currentTracks.find(t => t.name === titleEl.textContent);
              if (track && selectedSet.has(track.uri)) {
                item.classList.add("selected");
                checkbox.checked = true;
              }
            }
          });
          
          updateButtonState();
        }
      }
    } catch (e) {
      Spicetify.showNotification("Failed to load playlists", true);
    }
  }
  
  loadPlaylists();
  
  playlistSelect.addEventListener("change", async () => {
    const selectedUri = playlistSelect.value;
    if (selectedUri) {
      currentPlaylistUri = selectedUri;
      await loadPlaylistTracks(selectedUri);
    } else {
      currentPlaylistUri = null;
      currentTracks = [];
      filteredTracks = [];
      selectedSet.clear();
      searchInput.disabled = true;
      searchInput.value = "";
      trackList.innerHTML = "";
      const empty = document.createElement("div");
      empty.className = "bulk-delete-empty";
      empty.textContent = "Select a playlist first";
      trackList.appendChild(empty);
      updateButtonState();
    }
  });
  
  searchInput.addEventListener("input", filterTracks);
  
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "bulk-delete-buttons";
  
  const selectAllBtn = document.createElement("button");
  selectAllBtn.className = "bulk-delete-select-all";
  selectAllBtn.textContent = "Select All";
  selectAllBtn.addEventListener("click", () => {
    if (selectedSet.size === filteredTracks.length) {
      selectedSet.clear();
      trackList.querySelectorAll(".bulk-delete-item").forEach(item => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".bulk-delete-checkbox") as HTMLInputElement;
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredTracks.forEach(t => selectedSet.add(t.uri));
      trackList.querySelectorAll(".bulk-delete-item").forEach(item => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".bulk-delete-checkbox") as HTMLInputElement;
        if (checkbox) checkbox.checked = true;
      });
    }
    updateButtonState();
  });
  
  const buttonGroup = document.createElement("div");
  buttonGroup.className = "bulk-delete-button-group";
  
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "bulk-delete-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => modal.remove());
  
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "bulk-delete-btn delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.disabled = true;
  
  deleteBtn.addEventListener("click", async () => {
    if (!currentPlaylistUri) return;
    
    const playlist = allPlaylists.find(p => p.uri === currentPlaylistUri);
    const playlistName = playlist?.name || "Unknown Playlist";
    const trackCount = selectedSet.size;
    
    createDeleteConfirmModal(
      trackCount,
      playlistName,
      async () => {
        const trackUrisToDelete = Array.from(selectedSet);
        const success = await deleteTracksFromPlaylist(currentPlaylistUri!, trackUrisToDelete);
        
        if (success) {
          Spicetify.showNotification(`Deleted ${trackCount} track(s) from playlist`);
          
          currentTracks = currentTracks.filter(t => !selectedSet.has(t.uri));
          filteredTracks = filteredTracks.filter(t => !selectedSet.has(t.uri));
          selectedSet.clear();
          renderTracks(filteredTracks);
          updateButtonState();
        } else {
          Spicetify.showNotification("Failed to delete tracks", true);
        }
      },
      () => {}
    );
  });
  
  buttonGroup.appendChild(cancelBtn);
  buttonGroup.appendChild(deleteBtn);
  
  buttonContainer.appendChild(selectAllBtn);
  buttonContainer.appendChild(buttonGroup);
  
  content.appendChild(header);
  content.appendChild(playlistSelector);
  content.appendChild(searchContainer);
  content.appendChild(trackInfo);
  content.appendChild(trackList);
  content.appendChild(buttonContainer);
  
  modal.appendChild(content);
  
  document.body.appendChild(modal);
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  playlistSelect.focus();
}