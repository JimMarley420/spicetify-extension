await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// extensions/bulkDeletePlaylist/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.bulk-delete-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-family: "Circular Std", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.bulk-delete-content {
  background: #181818;
  border-radius: 10px;
  width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-header h2 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.bulk-delete-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bulk-delete-github {
  width: 24px;
  height: 24px;
  color: #b3b3b3;
  text-decoration: none;
  transition: color 0.2s;
}

.bulk-delete-github:hover {
  color: #fff;
}

.bulk-delete-github svg {
  width: 100%;
  height: 100%;
}

.bulk-delete-close {
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bulk-delete-close:hover {
  background: #282828;
  color: #fff;
}

.bulk-delete-close svg {
  width: 20px;
  height: 20px;
}

.bulk-delete-playlist-selector {
  padding: 16px 24px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-playlist-label {
  display: block;
  color: #b3b3b3;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bulk-delete-playlist-select {
  width: 100%;
  padding: 12px 16px;
  background: #282828;
  border: 1px solid #282828;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.bulk-delete-playlist-select:hover {
  border-color: #fff;
}

.bulk-delete-playlist-select:focus {
  outline: none;
  border-color: #1db954;
}

.bulk-delete-search {
  padding: 16px 24px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-search-wrapper {
  display: flex;
  align-items: center;
  background: #282828;
  border-radius: 4px;
  padding: 0 12px;
}

.bulk-delete-search-icon {
  color: #b3b3b3;
  display: flex;
  align-items: center;
}

.bulk-delete-search-icon svg {
  width: 20px;
  height: 20px;
}

.bulk-delete-search input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 12px;
  outline: none;
}

.bulk-delete-search input::placeholder {
  color: #b3b3b3;
}

.bulk-delete-track-info {
  padding: 12px 24px;
  background: #121212;
  border-bottom: 1px solid #282828;
}

.bulk-delete-track-info p {
  color: #b3b3b3;
  font-size: 13px;
  margin: 0;
}

.bulk-delete-track-info span {
  color: #fff;
  font-weight: 600;
}

.bulk-delete-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
  min-height: 200px;
  max-height: 300px;
}

.bulk-delete-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 200px;
  color: #b3b3b3;
  font-size: 14px;
}

.bulk-delete-item {
  display: flex;
  align-items: center;
  padding: 10px 24px;
  cursor: pointer;
  transition: background 0.15s;
}

.bulk-delete-item:hover {
  background: #282828;
}

.bulk-delete-item.selected {
  background: rgba(29, 185, 84, 0.1);
}

.bulk-delete-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bulk-delete-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.bulk-delete-checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #b3b3b3;
  border-radius: 3px;
  transition: all 0.15s;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.bulk-delete-item-info {
  flex: 1;
  min-width: 0;
}

.bulk-delete-item-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-artist {
  color: #b3b3b3;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-album {
  color: #727272;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
}

.bulk-delete-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #282828;
  background: #181818;
}

.bulk-delete-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.2s;
}

.bulk-delete-select-all:hover {
  color: #1ed760;
}

.bulk-delete-button-group {
  display: flex;
  gap: 12px;
}

.bulk-delete-btn {
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.bulk-delete-btn.cancel {
  background: transparent;
  color: #fff;
}

.bulk-delete-btn.cancel:hover {
  background: #282828;
}

.bulk-delete-btn.delete {
  background: #e91429;
  color: #fff;
}

.bulk-delete-btn.delete:hover:not(:disabled) {
  background: #f03727;
}

.bulk-delete-btn.delete:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
}

.bulk-delete-confirm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.bulk-delete-confirm-content {
  background: #181818;
  border-radius: 10px;
  width: 400px;
  padding: 24px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-confirm-header {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
}

.bulk-delete-confirm-warning {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(233, 20, 41, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
}

.bulk-delete-confirm-warning svg {
  width: 24px;
  height: 24px;
  color: #e91429;
  flex-shrink: 0;
}

.bulk-delete-confirm-warning p {
  color: #fff;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

.bulk-delete-confirm-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}`);
var styles_default = sheet;

// extensions/bulkDeletePlaylist/src/modal.tsx
async function fetchPlaylistsWithDeletePermission() {
  const LibraryAPI = Spicetify.Platform?.LibraryAPI;
  if (!LibraryAPI) {
    return [];
  }
  try {
    const response = await LibraryAPI.getContents({
      offset: 0,
      limit: 1e7,
      flattenTree: true
    });
    const playlists = [];
    const items = response?.items || [];
    for (const item of items) {
      if (item.type === "playlist" && item.canDelete) {
        playlists.push({
          name: item.name,
          uri: item.uri,
          canDelete: item.canDelete
        });
      }
    }
    return playlists;
  } catch (e) {
    return [];
  }
}
async function getPlaylistTracks(playlistUri) {
  const tracks = [];
  try {
    const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
    if (!PlaylistAPI) {
      return tracks;
    }
    const response = await PlaylistAPI.getContents(playlistUri, {
      offset: 0,
      limit: -1
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
            album
          });
        }
      }
    }
  } catch (e) {
    return tracks;
  }
  return tracks;
}
async function deleteTracksFromPlaylist(playlistUri, trackUris) {
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
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
function createDeleteConfirmModal(trackCount, playlistName, onConfirm, onCancel) {
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
function createModal(trackUris) {
  let allPlaylists = [];
  let currentTracks = [];
  let filteredTracks = [];
  const selectedSet = /* @__PURE__ */ new Set();
  let currentPlaylistUri = null;
  const modal = document.createElement("div");
  modal.className = "bulk-delete-modal";
  const content = document.createElement("div");
  content.className = "bulk-delete-content";
  const header = document.createElement("div");
  header.className = "bulk-delete-header";
  const headerTitle = document.createElement("h2");
  headerTitle.textContent = "Bulk Delete from Playlist";
  const headerRight = document.createElement("div");
  headerRight.className = "bulk-delete-header-right";
  const githubLink = document.createElement("a");
  githubLink.className = "bulk-delete-github";
  githubLink.href = "https://github.com/JimMarley420/spicetify-extension";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "bulk-delete-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
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
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
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
  function renderTracks(tracks) {
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
    filteredTracks = currentTracks.filter(
      (t) => t.name.toLowerCase().includes(query) || t.artist.toLowerCase().includes(query) || t.album.toLowerCase().includes(query)
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
  async function loadPlaylistTracks(playlistUri) {
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
    }
  }
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylistsWithDeletePermission();
      for (const playlist of allPlaylists) {
        const option = document.createElement("option");
        option.value = playlist.uri;
        option.textContent = playlist.name;
        playlistSelect.appendChild(option);
      }
    } catch (e) {
      console.error("Failed to load playlists", e);
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
      trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".bulk-delete-checkbox");
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredTracks.forEach((t) => selectedSet.add(t.uri));
      trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".bulk-delete-checkbox");
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
    const playlist = allPlaylists.find((p) => p.uri === currentPlaylistUri);
    const playlistName = playlist?.name || "Unknown Playlist";
    const trackCount = selectedSet.size;
    createDeleteConfirmModal(
      trackCount,
      playlistName,
      async () => {
        const trackUrisToDelete = Array.from(selectedSet);
        const success = await deleteTracksFromPlaylist(currentPlaylistUri, trackUrisToDelete);
        if (success) {
          Spicetify.showNotification(`Deleted ${trackCount} track(s) from playlist`);
          currentTracks = currentTracks.filter((t) => !selectedSet.has(t.uri));
          filteredTracks = filteredTracks.filter((t) => !selectedSet.has(t.uri));
          selectedSet.clear();
          renderTracks(filteredTracks);
          updateButtonState();
        } else {
          Spicetify.showNotification("Failed to delete tracks", true);
        }
      },
      () => {
      }
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

// extensions/bulkDeletePlaylist/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
async function handleMenuClick(uris) {
  const trackUris = uris.filter((uri) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && uriObj.type === "track";
  });
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  createModal(trackUris);
}
var bulkDeleteMenuItem = new Spicetify.ContextMenu.Item(
  "Bulk Delete from Playlist",
  handleMenuClick,
  (uris) => {
    const hasTrack = uris.some((uri) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && uriObj.type === "track";
    });
    return hasTrack;
  },
  "trash-icon"
);
bulkDeleteMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlUGxheWxpc3Qvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlUGxheWxpc3Qvc3JjL21vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2J1bGtEZWxldGVQbGF5bGlzdC9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYnVsay1kZWxldGUtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbiAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXIgU3RkXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1bGstZGVsZXRlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWhlYWRlciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi5idWxrLWRlbGV0ZS1naXRodWI6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiBzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2IzYjNiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBjb2xvciAwLjJzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1jbG9zZSBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0b3Ige1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3QtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjgyODI4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3Q6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMxZGI5NTQ7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gge1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gtaWNvbiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoIGlucHV0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWluZm8ge1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICMxMjEyMTI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW5mbyBwIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW5mbyBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idWxrLWRlbGV0ZS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmJ1bGstZGVsZXRlLWVtcHR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxODUsIDg0LCAwLjEpO1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b20ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94OmNoZWNrZWQgKyAuYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLWNvbG9yOiAjMWRiOTU0O1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3g6Y2hlY2tlZCArIC5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b206OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMnB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFydGlzdCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hbGJ1bSB7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5idWxrLWRlbGV0ZS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xufVxuXG4uYnVsay1kZWxldGUtc2VsZWN0LWFsbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWxlY3QtYWxsOmhvdmVyIHtcbiAgY29sb3I6ICMxZWQ3NjA7XG59XG5cbi5idWxrLWRlbGV0ZS1idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4ge1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQ6ICNlOTE0Mjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmRlbGV0ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICNmMDM3Mjc7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uZGVsZXRlOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzUzNTM1MztcbiAgY29sb3I6ICMxODE4MTg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0taGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIwLCA0MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZTkxNDI5O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufWApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHsgZmV0Y2hNZXRhZGF0YUZvclRyYWNrcyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL2ZldGNoTWV0YWRhdGFGb3JUcmFja3MudHNcIjtcblxuaW50ZXJmYWNlIFBsYXlsaXN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbiAgY2FuRGVsZXRlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgVHJhY2sge1xuICB1cmk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhcnRpc3Q6IHN0cmluZztcbiAgYWxidW06IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RzV2l0aERlbGV0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxQbGF5bGlzdFtdPiB7XG4gIGNvbnN0IExpYnJhcnlBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LkxpYnJhcnlBUEk7XG4gIFxuICBpZiAoIUxpYnJhcnlBUEkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGxpbWl0OiAxMDAwMDAwMCxcbiAgICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIGl0ZW0uY2FuRGVsZXRlKSB7XG4gICAgICAgIHBsYXlsaXN0cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgdXJpOiBpdGVtLnVyaSxcbiAgICAgICAgICBjYW5EZWxldGU6IGl0ZW0uY2FuRGVsZXRlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3RUcmFja3MocGxheWxpc3RVcmk6IHN0cmluZyk6IFByb21pc2U8VHJhY2tbXT4ge1xuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICAgIFxuICAgIGlmICghUGxheWxpc3RBUEkpIHtcbiAgICAgIHJldHVybiB0cmFja3M7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUGxheWxpc3RBUEkuZ2V0Q29udGVudHMocGxheWxpc3RVcmksIHtcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGxpbWl0OiAtMSxcbiAgICB9KTtcbiAgICBcbiAgICBpZiAocmVzcG9uc2U/Lml0ZW1zKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzcG9uc2UuaXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW0/LnVyaSkge1xuICAgICAgICAgIGxldCBuYW1lID0gXCJVbmtub3duIFRyYWNrXCI7XG4gICAgICAgICAgbGV0IGFydGlzdCA9IFwiVW5rbm93biBBcnRpc3RcIjtcbiAgICAgICAgICBsZXQgYWxidW0gPSBcIlVua25vd24gQWxidW1cIjtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaXRlbS5uYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXRlbS5hcnRpc3RzPy5bMF0/Lm5hbWUpIHtcbiAgICAgICAgICAgIGFydGlzdCA9IGl0ZW0uYXJ0aXN0c1swXS5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXRlbS5hbGJ1bT8ubmFtZSkge1xuICAgICAgICAgICAgYWxidW0gPSBpdGVtLmFsYnVtLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRyYWNrcy5wdXNoKHtcbiAgICAgICAgICAgIHVyaTogaXRlbS51cmksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJ0aXN0LFxuICAgICAgICAgICAgYWxidW0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJhY2tzO1xuICB9XG4gIFxuICByZXR1cm4gdHJhY2tzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVHJhY2tzRnJvbVBsYXlsaXN0KFxuICBwbGF5bGlzdFVyaTogc3RyaW5nLFxuICB0cmFja1VyaXM6IHN0cmluZ1tdXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICBcbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBmb3IgKGNvbnN0IHRyYWNrVXJpIG9mIHRyYWNrVXJpcykge1xuICAgICAgYXdhaXQgUGxheWxpc3RBUEkucmVtb3ZlKHBsYXlsaXN0VXJpLCB0cmFja1VyaSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUNvbmZpcm1Nb2RhbChcbiAgdHJhY2tDb3VudDogbnVtYmVyLFxuICBwbGF5bGlzdE5hbWU6IHN0cmluZyxcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkLFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1vdmVybGF5XCI7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1oZWFkZXJcIjtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZWxldGUgVHJhY2tzXCI7XG4gIFxuICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2FybmluZy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZ1wiO1xuICB3YXJuaW5nLmlubmVySFRNTCA9IGBcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2elwiLz48L3N2Zz5cbiAgICA8cD5UaGlzIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIDxzdHJvbmc+JHt0cmFja0NvdW50fTwvc3Ryb25nPiB0cmFjayhzKSBmcm9tIDxzdHJvbmc+JHtwbGF5bGlzdE5hbWV9PC9zdHJvbmc+LiBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvcD5cbiAgYDtcbiAgXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25zLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1idXR0b25zXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgb25DYW5jZWwoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBkZWxldGVcIjtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIG9uQ29uZmlybSgpO1xuICB9KTtcbiAgXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJuaW5nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgXG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIFxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRyYWNrVXJpczogc3RyaW5nW10pIHtcbiAgbGV0IGFsbFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBsZXQgY3VycmVudFRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBsZXQgZmlsdGVyZWRUcmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgbGV0IGN1cnJlbnRQbGF5bGlzdFVyaTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIFxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtbW9kYWxcIjtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaGVhZGVyXCI7XG4gIFxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkJ1bGsgRGVsZXRlIGZyb20gUGxheWxpc3RcIjtcbiAgXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1oZWFkZXItcmlnaHRcIjtcbiAgXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWdpdGh1YlwiO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9KaW1NYXJsZXk0MjAvc3BpY2V0aWZ5LWV4dGVuc2lvblwiO1xuICBnaXRodWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIk9wZW4gR2l0SHViIHJlcG9zaXRvcnlcIik7XG4gIGdpdGh1YkxpbmsuaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jbG9zZVwiO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz48L3N2Zz5gO1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG4gIFxuICBjb25zdCBwbGF5bGlzdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWxpc3RTZWxlY3Rvci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdG9yXCI7XG4gIFxuICBjb25zdCBwbGF5bGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwbGF5bGlzdExhYmVsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3QtbGFiZWxcIjtcbiAgcGxheWxpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IFBsYXlsaXN0XCI7XG4gIFxuICBjb25zdCBwbGF5bGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHBsYXlsaXN0U2VsZWN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0XCI7XG4gIFxuICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gIGRlZmF1bHRPcHRpb24udGV4dENvbnRlbnQgPSBcIkNob29zZSBhIHBsYXlsaXN0Li4uXCI7XG4gIHBsYXlsaXN0U2VsZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuICBcbiAgcGxheWxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwbGF5bGlzdExhYmVsKTtcbiAgcGxheWxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwbGF5bGlzdFNlbGVjdCk7XG4gIFxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWFyY2hcIjtcbiAgXG4gIGNvbnN0IHNlYXJjaFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VhcmNoLXdyYXBwZXJcIjtcbiAgXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hJY29uLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VhcmNoLWljb25cIjtcbiAgc2VhcmNoSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdHJhY2tzIGluIHBsYXlsaXN0Li4uXCI7XG4gIHNlYXJjaElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgXG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoV3JhcHBlcik7XG4gIFxuICBjb25zdCB0cmFja0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0luZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1pbmZvXCI7XG4gIHRyYWNrSW5mby5pbm5lckhUTUwgPSBgPHA+PHNwYW4+MDwvc3Bhbj4gdHJhY2socykgc2VsZWN0ZWQgZnJvbSBwbGF5bGlzdDwvcD5gO1xuICBcbiAgY29uc3QgdHJhY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tMaXN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtbGlzdFwiO1xuICBcbiAgY29uc3QgZW1wdHlTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtcHR5U3RhdGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gIFxuICBmdW5jdGlvbiByZW5kZXJUcmFja3ModHJhY2tzOiBUcmFja1tdKSB7XG4gICAgdHJhY2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgaWYgKHRyYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVtcHR5TXNnID0gc2VhcmNoSW5wdXQudmFsdWUgPyBcIk5vIHRyYWNrcyBmb3VuZFwiIDogXCJQbGF5bGlzdCBpcyBlbXB0eVwiO1xuICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZW1wdHkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICAgICAgZW1wdHkudGV4dENvbnRlbnQgPSBlbXB0eU1zZztcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAoY29uc3QgdHJhY2sgb2YgdHJhY2tzKSB7XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW1cIiArIChzZWxlY3RlZFNldC5oYXModHJhY2sudXJpKSA/IFwiIHNlbGVjdGVkXCIgOiBcIlwiKTtcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2tib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94LXdyYXBwZXJcIjtcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jaGVja2JveFwiO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHNlbGVjdGVkU2V0Lmhhcyh0cmFjay51cmkpO1xuICAgICAgXG4gICAgICBjb25zdCBjdXN0b21DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjdXN0b21DaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbVwiO1xuICAgICAgXG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrYm94KTtcbiAgICAgIFxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKHRyYWNrLnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKHRyYWNrLnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGluZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWluZm9cIjtcbiAgICAgIFxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLXRpdGxlXCI7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRyYWNrLm5hbWU7XG4gICAgICBcbiAgICAgIGNvbnN0IGFydGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhcnRpc3QuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWFydGlzdFwiO1xuICAgICAgYXJ0aXN0LnRleHRDb250ZW50ID0gdHJhY2suYXJ0aXN0O1xuICAgICAgXG4gICAgICBjb25zdCBhbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhbGJ1bS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYWxidW1cIjtcbiAgICAgIGFsYnVtLnRleHRDb250ZW50ID0gdHJhY2suYWxidW07XG4gICAgICBcbiAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhcnRpc3QpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhbGJ1bSk7XG4gICAgICBcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3hXcmFwcGVyKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBmaWx0ZXJUcmFja3MoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGZpbHRlcmVkVHJhY2tzID0gY3VycmVudFRyYWNrcy5maWx0ZXIodCA9PiBcbiAgICAgIHQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fFxuICAgICAgdC5hcnRpc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHxcbiAgICAgIHQuYWxidW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSlcbiAgICApO1xuICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tJbmZvLmlubmVySFRNTCA9IGA8cD48c3Bhbj4ke3NlbGVjdGVkQ291bnR9PC9zcGFuPiB0cmFjayhzKSBzZWxlY3RlZCBmcm9tIHBsYXlsaXN0PC9wPmA7XG4gICAgZGVsZXRlQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvdW50ID09PSBmaWx0ZXJlZFRyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVzZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpIHtcbiAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJMb2FkaW5nIHRyYWNrcy4uLlwiO1xuICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY3VycmVudFRyYWNrcyA9IGF3YWl0IGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpKTtcbiAgICAgIGZpbHRlcmVkVHJhY2tzID0gWy4uLmN1cnJlbnRUcmFja3NdO1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHNlYXJjaElucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJGYWlsZWQgdG8gbG9hZCB0cmFja3NcIjtcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICB9XG4gIH1cbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGF5bGlzdHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFsbFBsYXlsaXN0cyA9IGF3YWl0IGZldGNoUGxheWxpc3RzV2l0aERlbGV0ZVBlcm1pc3Npb24oKTtcbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBwbGF5bGlzdCBvZiBhbGxQbGF5bGlzdHMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcGxheWxpc3QudXJpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwbGF5bGlzdC5uYW1lO1xuICAgICAgICBwbGF5bGlzdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIiwgZSk7XG4gICAgfVxuICB9XG4gIFxuICBsb2FkUGxheWxpc3RzKCk7XG4gIFxuICBwbGF5bGlzdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVyaSA9IHBsYXlsaXN0U2VsZWN0LnZhbHVlO1xuICAgIGlmIChzZWxlY3RlZFVyaSkge1xuICAgICAgY3VycmVudFBsYXlsaXN0VXJpID0gc2VsZWN0ZWRVcmk7XG4gICAgICBhd2FpdCBsb2FkUGxheWxpc3RUcmFja3Moc2VsZWN0ZWRVcmkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWxpc3RVcmkgPSBudWxsO1xuICAgICAgY3VycmVudFRyYWNrcyA9IFtdO1xuICAgICAgZmlsdGVyZWRUcmFja3MgPSBbXTtcbiAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICBzZWFyY2hJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVtcHR5LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZW1wdHlcIjtcbiAgICAgIGVtcHR5LnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmaWx0ZXJUcmFja3MpO1xuICBcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnV0dG9uc1wiO1xuICBcbiAgY29uc3Qgc2VsZWN0QWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VsZWN0QWxsQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VsZWN0LWFsbFwiO1xuICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgc2VsZWN0QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkU2V0LnNpemUgPT09IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkVHJhY2tzLmZvckVhY2godCA9PiBzZWxlY3RlZFNldC5hZGQodC51cmkpKTtcbiAgICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkdyb3VwLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnV0dG9uLWdyb3VwXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50UGxheWxpc3RVcmkpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBwbGF5bGlzdCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSk7XG4gICAgY29uc3QgcGxheWxpc3ROYW1lID0gcGxheWxpc3Q/Lm5hbWUgfHwgXCJVbmtub3duIFBsYXlsaXN0XCI7XG4gICAgY29uc3QgdHJhY2tDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgXG4gICAgY3JlYXRlRGVsZXRlQ29uZmlybU1vZGFsKFxuICAgICAgdHJhY2tDb3VudCxcbiAgICAgIHBsYXlsaXN0TmFtZSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2tVcmlzVG9EZWxldGUgPSBBcnJheS5mcm9tKHNlbGVjdGVkU2V0KTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGRlbGV0ZVRyYWNrc0Zyb21QbGF5bGlzdChjdXJyZW50UGxheWxpc3RVcmkhLCB0cmFja1VyaXNUb0RlbGV0ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBEZWxldGVkICR7dHJhY2tDb3VudH0gdHJhY2socykgZnJvbSBwbGF5bGlzdGApO1xuICAgICAgICAgIFxuICAgICAgICAgIGN1cnJlbnRUcmFja3MgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXModC51cmkpKTtcbiAgICAgICAgICBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlcmVkVHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXModC51cmkpKTtcbiAgICAgICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBkZWxldGUgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9KTtcbiAgXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIFxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5bGlzdFNlbGVjdG9yKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrSW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tMaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICBcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBwbGF5bGlzdFNlbGVjdC5mb2N1cygpO1xufSIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKHVyaXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IHVyaXMuZmlsdGVyKCh1cmk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyBhbnkpLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgfSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgY3JlYXRlTW9kYWwodHJhY2tVcmlzKTtcbn1cblxuY29uc3QgYnVsa0RlbGV0ZU1lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudS5JdGVtKFxuICBcIkJ1bGsgRGVsZXRlIGZyb20gUGxheWxpc3RcIixcbiAgaGFuZGxlTWVudUNsaWNrLFxuICAodXJpczogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBoYXNUcmFjayA9IHVyaXMuc29tZSgodXJpOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgICAgcmV0dXJuIHVyaU9iaiAmJiAodXJpT2JqIGFzIGFueSkudHlwZSA9PT0gXCJ0cmFja1wiO1xuICAgIH0pO1xuICAgIHJldHVybiBoYXNUcmFjaztcbiAgfSxcbiAgXCJ0cmFzaC1pY29uXCIgYXMgU3BpY2V0aWZ5Lkljb25cbik7XG5cbmJ1bGtEZWxldGVNZW51SXRlbS5yZWdpc3RlcigpOyJdLAogICJtYXBwaW5ncyI6ICI7OztBQUNVLElBQU0sUUFBUSxJQUFJLGNBQWM7QUFDaEMsTUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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
