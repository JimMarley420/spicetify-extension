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

async function getPlaylistTracks(playlistUri: string): Promise<Set<string>> {
  const trackUris = new Set<string>();
  
  try {
    const response = await Spicetify.CosmosAsync.get(
      `sp://playlist/v1/tracks?uri=${encodeURIComponent(playlistUri)}`
    );
    
    if (response?.tracks) {
      for (const track of response.tracks) {
        if (track?.uri) {
          trackUris.add(track.uri);
        }
      }
    }
  } catch (e) {
    return trackUris;
  }
  
  return trackUris;
}

interface DuplicateCheck {
  playlistUri: string;
  playlistName: string;
  trackUri: string;
  trackName: string;
}

function createConfirmModal(
  duplicates: DuplicateCheck[],
  trackCount: number,
  onConfirm: () => void,
  onCancel: () => void
) {
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  
  const content = document.createElement("div");
  content.className = "add-to-playlist-confirm-content";
  
  const header = document.createElement("div");
  header.className = "add-to-playlist-confirm-header";
  header.textContent = "Tracks already in playlist(s)";
  
  const list = document.createElement("div");
  list.className = "add-to-playlist-confirm-list";
  
  for (const dup of duplicates.slice(0, 10)) {
    const item = document.createElement("div");
    item.className = "add-to-playlist-confirm-item";
    item.innerHTML = `<span class="track-name">${dup.trackName}</span><span class="playlist-name">in ${dup.playlistName}</span>`;
    list.appendChild(item);
  }
  
  if (duplicates.length > 10) {
    const more = document.createElement("div");
    more.className = "add-to-playlist-confirm-more";
    more.textContent = `...and ${duplicates.length - 10} more`;
    list.appendChild(more);
  }
  
  const info = document.createElement("div");
  info.className = "add-to-playlist-confirm-info";
  if (duplicates.length === trackCount) {
    info.textContent = "All selected tracks are already in the selected playlist(s).";
  } else {
    info.textContent = `${duplicates.length} of ${trackCount} tracks are already in the selected playlist(s).`;
  }
  
  const buttons = document.createElement("div");
  buttons.className = "add-to-playlist-confirm-buttons";
  
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "add-to-playlist-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    modal.remove();
    onCancel();
  });
  
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "add-to-playlist-btn confirm";
  confirmBtn.textContent = duplicates.length === trackCount ? "Add Anyway" : "Add Anyway";
  confirmBtn.addEventListener("click", () => {
    modal.remove();
    onConfirm();
  });
  
  buttons.appendChild(cancelBtn);
  buttons.appendChild(confirmBtn);
  
  content.appendChild(header);
  content.appendChild(list);
  content.appendChild(info);
  content.appendChild(buttons);
  
  modal.appendChild(content);
  
  document.body.appendChild(modal);
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      onCancel();
    }
  });
}

async function addTracksToPlaylists(
  playlistUris: string[],
  trackUris: string[],
  onDuplicateFound: (duplicates: DuplicateCheck[]) => Promise<boolean>
): Promise<{ success: string[]; failed: string[]; duplicates: DuplicateCheck[] }> {
  const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
  
  if (!PlaylistAPI) {
    throw new Error("No PlaylistAPI");
  }
  
  const allDuplicates: DuplicateCheck[] = [];
  const success: string[] = [];
  const failed: string[] = [];
  
  for (const playlistUri of playlistUris) {
    let playlistTracks: Set<string> | null = null;
    
    for (const trackUri of trackUris) {
      if (playlistTracks === null) {
        playlistTracks = await getPlaylistTracks(playlistUri);
      }
      
      if (playlistTracks.has(trackUri)) {
        const playlist = playlistUris.find(p => p === playlistUri);
        const playlistName = "Playlist";
        allDuplicates.push({
          playlistUri,
          playlistName: playlistName || "Unknown",
          trackUri,
          trackName: "Track",
        });
        continue;
      }
      
      try {
        await PlaylistAPI.add(playlistUri, [trackUri], []);
        success.push(playlistUri);
      } catch (e) {
        failed.push(playlistUri);
      }
    }
  }
  
  return { success, failed, duplicates: allDuplicates };
}

function getTrackName(uri: string): string {
  try {
    return decodeURIComponent(uri.split(":").pop() || "Unknown track");
  } catch {
    return "Unknown track";
  }
}

function createModal(trackUris: string[]) {
  let allPlaylists: Playlist[] = [];
  let filteredPlaylists: Playlist[] = [];
  const selectedSet = new Set<string>();
  
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  
  const content = document.createElement("div");
  content.className = "add-to-playlist-content";
  
  const header = document.createElement("div");
  header.className = "add-to-playlist-header";
  
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Add to Multiple Playlists";
  
  const githubLink = document.createElement("a");
  githubLink.className = "add-to-playlist-github";
  githubLink.href = "https://github.com/JimMarley420/artistSearch";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  
  header.appendChild(headerTitle);
  header.appendChild(githubLink);
  
  const searchContainer = document.createElement("div");
  searchContainer.className = "add-to-playlist-search";
  
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "add-to-playlist-search-wrapper";
  
  const searchIcon = document.createElement("div");
  searchIcon.className = "add-to-playlist-search-icon";
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
  
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search playlists...";
  
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchContainer.appendChild(searchWrapper);
  
  const trackCount = document.createElement("div");
  trackCount.className = "add-to-playlist-track-count";
  trackCount.textContent = `${trackUris.length} track(s) selected`;
  
  const playlistList = document.createElement("div");
  playlistList.className = "add-to-playlist-list";
  
  const emptyState = document.createElement("div");
  emptyState.className = "add-to-playlist-empty";
  emptyState.textContent = "Loading playlists...";
  playlistList.appendChild(emptyState);
  
  function renderPlaylists(playlists: Playlist[]) {
    playlistList.innerHTML = "";
    
    if (playlists.length === 0) {
      emptyState.textContent = searchInput.value ? "No playlists found" : "No playlists available";
      playlistList.appendChild(emptyState);
      return;
    }
    
    for (const playlist of playlists) {
      const item = document.createElement("label");
      item.className = "add-to-playlist-item" + (selectedSet.has(playlist.uri) ? " selected" : "");
      
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "add-to-playlist-checkbox-wrapper";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "add-to-playlist-checkbox";
      checkbox.checked = selectedSet.has(playlist.uri);
      
      const customCheckbox = document.createElement("div");
      customCheckbox.className = "add-to-playlist-checkbox-custom";
      
      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(customCheckbox);
      
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSet.add(playlist.uri);
          item.classList.add("selected");
        } else {
          selectedSet.delete(playlist.uri);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      
      const name = document.createElement("span");
      name.className = "add-to-playlist-name";
      name.textContent = playlist.name;
      
      item.appendChild(checkboxWrapper);
      item.appendChild(name);
      playlistList.appendChild(item);
    }
  }
  
  function filterPlaylists() {
    const query = searchInput.value.toLowerCase();
    filteredPlaylists = allPlaylists.filter(p => p.name.toLowerCase().includes(query));
    renderPlaylists(filteredPlaylists);
    updateButtonState();
  }
  
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackCount.textContent = `${trackUris.length} track(s) selected • ${selectedCount} playlist(s)`;
    confirmBtn.disabled = selectedCount === 0;
    
    if (selectedCount === 0) {
      selectAllBtn.textContent = "Select All";
    } else if (selectedCount === filteredPlaylists.length) {
      selectAllBtn.textContent = "Deselect All";
    } else {
      selectAllBtn.textContent = "Select All";
    }
  }
  
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylists();
      filteredPlaylists = [...allPlaylists];
      renderPlaylists(filteredPlaylists);
      updateButtonState();
    } catch (e) {
      emptyState.textContent = "Failed to load playlists";
      playlistList.appendChild(emptyState);
    }
  }
  
  loadPlaylists();
  
  searchInput.addEventListener("input", filterPlaylists);
  
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "add-to-playlist-buttons";
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.alignItems = "center";
  
  const selectAllBtn = document.createElement("button");
  selectAllBtn.className = "add-to-playlist-select-all";
  selectAllBtn.textContent = "Select All";
  selectAllBtn.addEventListener("click", () => {
    if (selectedSet.size === filteredPlaylists.length) {
      selectedSet.clear();
      playlistList.querySelectorAll(".add-to-playlist-item").forEach(item => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox") as HTMLInputElement;
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredPlaylists.forEach(p => selectedSet.add(p.uri));
      playlistList.querySelectorAll(".add-to-playlist-item").forEach(item => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox") as HTMLInputElement;
        if (checkbox) checkbox.checked = true;
      });
    }
    updateButtonState();
  });
  
  const buttonGroup = document.createElement("div");
  buttonGroup.style.display = "flex";
  buttonGroup.style.gap = "12px";
  buttonGroup.style.marginLeft = "auto";
  
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
    confirmBtn.textContent = "Checking...";
    
    try {
      const duplicates: DuplicateCheck[] = [];
      
      for (const playlistUri of playlistUris) {
        const playlist = allPlaylists.find(p => p.uri === playlistUri);
        const playlistName = playlist?.name || "Unknown";
        const playlistTracks = await getPlaylistTracks(playlistUri);
        
        for (const trackUri of trackUris) {
          if (playlistTracks.has(trackUri)) {
            duplicates.push({
              playlistUri,
              playlistName,
              trackUri,
              trackName: getTrackName(trackUri),
            });
          }
        }
      }
      
      if (duplicates.length > 0) {
        confirmBtn.textContent = "Adding...";
        
        createConfirmModal(
          duplicates,
          trackUris.length,
          async () => {
            const result = await addTracksToPlaylists(playlistUris, trackUris, async () => false);
            
            if (result.success.length > 0) {
              Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${result.success.length} playlist(s)`);
            } else {
              Spicetify.showNotification("No tracks were added", true);
            }
            modal.remove();
          },
          () => {
            confirmBtn.disabled = false;
            confirmBtn.textContent = "Add";
          }
        );
      } else {
        const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
        
        if (!PlaylistAPI) {
          throw new Error("No PlaylistAPI");
        }
        
        let addedCount = 0;
        
        for (const playlistUri of playlistUris) {
          try {
            await PlaylistAPI.add(playlistUri, trackUris, []);
            addedCount++;
          } catch (e) {
          }
        }
        
        if (addedCount > 0) {
          Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${addedCount} playlist(s)`);
        } else {
          Spicetify.showNotification("Failed to add tracks", true);
        }
        modal.remove();
      }
    } catch (e) {
      Spicetify.showNotification("Failed to add tracks", true);
      confirmBtn.disabled = false;
      confirmBtn.textContent = "Add";
    }
  });
  
  buttonGroup.appendChild(cancelBtn);
  buttonGroup.appendChild(confirmBtn);
  
  buttonContainer.appendChild(selectAllBtn);
  buttonContainer.appendChild(buttonGroup);
  
  content.appendChild(header);
  content.appendChild(searchContainer);
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
  
  searchInput.focus();
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