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
  let allPlaylists: Playlist[] = [];
  let filteredPlaylists: Playlist[] = [];
  const selectedSet = new Set<string>();
  
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  
  const content = document.createElement("div");
  content.className = "add-to-playlist-content";
  
  const header = document.createElement("div");
  header.className = "add-to-playlist-header";
  header.textContent = "Add to Multiple Playlists";
  
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
  (uris: string[]) => uris.length > 0,
  "plus-alt" as Spicetify.Icon
);

addToMultiplePlaylistsMenuItem.register();