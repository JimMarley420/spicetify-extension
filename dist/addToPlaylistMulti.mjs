await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// extensions/addToPlaylistMulti/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.add-to-playlist-modal {
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
}

.add-to-playlist-content {
  background: #181818;
  border-radius: 8px;
  width: 420px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.add-to-playlist-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-playlist-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-to-playlist-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.add-to-playlist-close:hover {
  background: #282828;
}

.add-to-playlist-close svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.add-to-playlist-close:hover svg {
  fill: #fff;
}

.add-to-playlist-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s;
}

.add-to-playlist-github:hover {
  background: #282828;
}

.add-to-playlist-github svg {
  width: 20px;
  height: 20px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.add-to-playlist-github:hover svg {
  fill: #fff;
}

.add-to-playlist-search {
  padding: 12px 16px;
  border-bottom: 1px solid #282828;
}

.add-to-playlist-search input {
  width: 100%;
  padding: 10px 12px;
  padding-left: 36px;
  background: #282828;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.add-to-playlist-search input::placeholder {
  color: #b3b3b3;
}

.add-to-playlist-search input:focus {
  background: #3e3e3e;
}

.add-to-playlist-search-wrapper {
  position: relative;
}

.add-to-playlist-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  fill: #b3b3b3;
  pointer-events: none;
}

.add-to-playlist-track-count {
  padding: 8px 20px;
  font-size: 12px;
  color: #b3b3b3;
  background: #181818;
}

.add-to-playlist-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 8px;
}

.add-to-playlist-list::-webkit-scrollbar {
  width: 8px;
}

.add-to-playlist-list::-webkit-scrollbar-track {
  background: transparent;
}

.add-to-playlist-list::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.add-to-playlist-list::-webkit-scrollbar-thumb:hover {
  background: #777;
}

.add-to-playlist-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
}

.add-to-playlist-item:hover {
  background: #282828;
}

.add-to-playlist-item.selected {
  background: #2a2a2a;
}

.add-to-playlist-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  flex-shrink: 0;
}

.add-to-playlist-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.add-to-playlist-checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #b3b3b3;
  border-radius: 4px;
  background: transparent;
  transition: all 0.15s;
  pointer-events: none;
}

.add-to-playlist-checkbox:checked + .add-to-playlist-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.add-to-playlist-checkbox-custom::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.add-to-playlist-checkbox:checked + .add-to-playlist-checkbox-custom::after {
  display: block;
}

.add-to-playlist-checkbox:focus + .add-to-playlist-checkbox-custom {
  box-shadow: 0 0 0 2px #1db954;
}

.add-to-playlist-name {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-to-playlist-empty {
  padding: 20px;
  text-align: center;
  color: #b3b3b3;
  font-size: 14px;
}

.add-to-playlist-buttons {
  padding: 16px 20px;
  border-top: 1px solid #282828;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-playlist-buttons-left {
  display: flex;
  gap: 8px;
}

.add-to-playlist-btn {
  padding: 10px 24px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}

.add-to-playlist-btn.cancel {
  background: transparent;
  color: #b3b3b3;
}

.add-to-playlist-btn.cancel:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.add-to-playlist-btn.confirm {
  background: #1db954;
  color: #000;
}

.add-to-playlist-btn.confirm:hover:not(:disabled) {
  background: #1ed760;
  transform: scale(1.02);
}

.add-to-playlist-btn.confirm:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
}

.add-to-playlist-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}

.add-to-playlist-select-all:hover {
  text-decoration: underline;
}

.add-to-playlist-confirm-content {
  background: #181818;
  border-radius: 8px;
  width: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.add-to-playlist-confirm-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
}

.add-to-playlist-confirm-list {
  flex: 1;
  overflow-y: auto;
  padding: 12px 20px;
  max-height: 200px;
}

.add-to-playlist-confirm-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #282828;
}

.add-to-playlist-confirm-item:last-child {
  border-bottom: none;
}

.add-to-playlist-confirm-item .track-name {
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.add-to-playlist-confirm-item .playlist-name {
  font-size: 13px;
  color: #b3b3b3;
}

.add-to-playlist-confirm-more {
  padding: 8px 0;
  font-size: 13px;
  color: #b3b3b3;
  text-align: center;
}

.add-to-playlist-confirm-info {
  padding: 12px 20px;
  font-size: 13px;
  color: #b3b3b3;
  background: #181818;
}

.add-to-playlist-confirm-buttons {
  padding: 16px 20px;
  border-top: 1px solid #282828;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}`);
var styles_default = sheet;

// extensions/addToPlaylistMulti/src/modal.tsx
async function fetchPlaylists() {
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
      if (item.type === "playlist" && item.canAddTo) {
        playlists.push({
          name: item.name,
          uri: item.uri
        });
      }
    }
    return playlists;
  } catch (e) {
    return [];
  }
}
async function getPlaylistTracks(playlistUri) {
  const trackUris = /* @__PURE__ */ new Set();
  try {
    const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
    if (!PlaylistAPI) {
      return trackUris;
    }
    const response = await PlaylistAPI.getContents(playlistUri, {
      offset: 0,
      limit: -1
    });
    if (response?.items) {
      for (const item of response.items) {
        if (item?.uri) {
          trackUris.add(item.uri);
        }
      }
    }
  } catch (e) {
    return trackUris;
  }
  return trackUris;
}
function getTrackName(uri) {
  const trackId = uri.split(":").pop() || "";
  return `Track (${trackId.slice(0, 8)}...)`;
}
function createConfirmModal(duplicates, trackCount, onConfirm, onCancel) {
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
  confirmBtn.textContent = "Add Anyway";
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
async function addTracksToPlaylists(playlistUris, trackUris) {
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    throw new Error("No PlaylistAPI");
  }
  const success = [];
  const failed = [];
  for (const playlistUri of playlistUris) {
    try {
      await PlaylistAPI.add(playlistUri, trackUris, []);
      success.push(playlistUri);
    } catch (e) {
      failed.push(playlistUri);
    }
  }
  return { success, failed };
}
function createModal(trackUris) {
  let allPlaylists = [];
  let filteredPlaylists = [];
  const selectedSet = /* @__PURE__ */ new Set();
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  const content = document.createElement("div");
  content.className = "add-to-playlist-content";
  const header = document.createElement("div");
  header.className = "add-to-playlist-header";
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Add to Multiple Playlists";
  const headerRight = document.createElement("div");
  headerRight.className = "add-to-playlist-header-right";
  const githubLink = document.createElement("a");
  githubLink.className = "add-to-playlist-github";
  githubLink.href = "https://github.com/JimMarley420/artistSearch";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "add-to-playlist-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  closeBtn.addEventListener("click", () => modal.remove());
  headerRight.appendChild(githubLink);
  headerRight.appendChild(closeBtn);
  header.appendChild(headerTitle);
  header.appendChild(headerRight);
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
  function renderPlaylists(playlists) {
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
    filteredPlaylists = allPlaylists.filter((p) => p.name.toLowerCase().includes(query));
    renderPlaylists(filteredPlaylists);
    updateButtonState();
  }
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackCount.textContent = `${trackUris.length} track(s) selected \u2022 ${selectedCount} playlist(s)`;
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
      playlistList.querySelectorAll(".add-to-playlist-item").forEach((item) => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox");
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredPlaylists.forEach((p) => selectedSet.add(p.uri));
      playlistList.querySelectorAll(".add-to-playlist-item").forEach((item) => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox");
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
      const duplicates = [];
      for (const playlistUri of playlistUris) {
        const playlist = allPlaylists.find((p) => p.uri === playlistUri);
        const playlistName = playlist?.name || "Unknown";
        const playlistTracks = await getPlaylistTracks(playlistUri);
        for (const trackUri of trackUris) {
          if (playlistTracks.has(trackUri)) {
            duplicates.push({
              playlistUri,
              playlistName,
              trackUri,
              trackName: getTrackName(trackUri)
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
            const result = await addTracksToPlaylists(playlistUris, trackUris);
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
        const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
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

// extensions/addToPlaylistMulti/src/app.tsx
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
var addToMultiplePlaylistsMenuItem = new Spicetify.ContextMenu.Item(
  "Add to Multiple Playlists",
  handleMenuClick,
  (uris) => {
    const hasTrack = uris.some((uri) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && uriObj.type === "track";
    });
    return hasTrack;
  },
  "plus-alt"
);
addToMultiplePlaylistsMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL21vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2FkZFRvUGxheWxpc3RNdWx0aS9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYWRkLXRvLXBsYXlsaXN0LW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxODE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQyMHB4O1xuICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZSBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNsb3NlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWdpdGh1YiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWdpdGh1Yjpob3ZlciBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaCB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzNlM2UzZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2gtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtdHJhY2stY291bnQge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogOHB4IDhweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzJhMmEyYTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiM2IzYjM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3g6Y2hlY2tlZCArIC5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLWNvbG9yOiAjMWRiOTU0O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3g6Y2hlY2tlZCArIC5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94OmZvY3VzICsgLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b20ge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzFkYjk1NDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1lbXB0eSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idXR0b25zIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI4MjgyODtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ1dHRvbnMtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNhbmNlbDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY29uZmlybTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMxZWQ3NjA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNvbmZpcm06ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNTM1MzUzO1xuICBjb2xvcjogIzE4MTgxODtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWxlY3QtYWxsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxZGI5NTQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlbGVjdC1hbGw6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNwb3RpZnkpLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWxpc3Qge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0taXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW0gLnRyYWNrLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW0gLnBsYXlsaXN0LW5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tbW9yZSB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1pbmZvIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyODI4Mjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcbn1gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImludGVyZmFjZSBQbGF5bGlzdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEdXBsaWNhdGVDaGVjayB7XG4gIHBsYXlsaXN0VXJpOiBzdHJpbmc7XG4gIHBsYXlsaXN0TmFtZTogc3RyaW5nO1xuICB0cmFja1VyaTogc3RyaW5nO1xuICB0cmFja05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RzKCk6IFByb21pc2U8UGxheWxpc3RbXT4ge1xuICBjb25zdCBMaWJyYXJ5QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5MaWJyYXJ5QVBJO1xuICBcbiAgaWYgKCFMaWJyYXJ5QVBJKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTGlicmFyeUFQSS5nZXRDb250ZW50cyh7XG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBsaW1pdDogMTAwMDAwMDAsXG4gICAgICBmbGF0dGVuVHJlZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBwbGF5bGlzdHM6IFBsYXlsaXN0W10gPSBbXTtcbiAgICBjb25zdCBpdGVtcyA9IHJlc3BvbnNlPy5pdGVtcyB8fCBbXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwicGxheWxpc3RcIiAmJiBpdGVtLmNhbkFkZFRvKSB7XG4gICAgICAgIHBsYXlsaXN0cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgdXJpOiBpdGVtLnVyaSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwbGF5bGlzdHM7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpOiBQcm9taXNlPFNldDxzdHJpbmc+PiB7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG4gICAgXG4gICAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgICAgcmV0dXJuIHRyYWNrVXJpcztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQbGF5bGlzdEFQSS5nZXRDb250ZW50cyhwbGF5bGlzdFVyaSwge1xuICAgICAgb2Zmc2V0OiAwLFxuICAgICAgbGltaXQ6IC0xLFxuICAgIH0pO1xuICAgIFxuICAgIGlmIChyZXNwb25zZT8uaXRlbXMpIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5pdGVtcykge1xuICAgICAgICBpZiAoaXRlbT8udXJpKSB7XG4gICAgICAgICAgdHJhY2tVcmlzLmFkZChpdGVtLnVyaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJhY2tVcmlzO1xuICB9XG4gIFxuICByZXR1cm4gdHJhY2tVcmlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhY2tOYW1lKHVyaTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHJhY2tJZCA9IHVyaS5zcGxpdChcIjpcIikucG9wKCkgfHwgXCJcIjtcbiAgcmV0dXJuIGBUcmFjayAoJHt0cmFja0lkLnNsaWNlKDAsIDgpfS4uLilgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uZmlybU1vZGFsKFxuICBkdXBsaWNhdGVzOiBEdXBsaWNhdGVDaGVja1tdLFxuICB0cmFja0NvdW50OiBudW1iZXIsXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZCxcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbikge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LW1vZGFsXCI7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWNvbnRlbnRcIjtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWhlYWRlclwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRyYWNrcyBhbHJlYWR5IGluIHBsYXlsaXN0KHMpXCI7XG4gIFxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWxpc3RcIjtcbiAgXG4gIGZvciAoY29uc3QgZHVwIG9mIGR1cGxpY2F0ZXMuc2xpY2UoMCwgMTApKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW1cIjtcbiAgICBpdGVtLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyYWNrLW5hbWVcIj4ke2R1cC50cmFja05hbWV9PC9zcGFuPjxzcGFuIGNsYXNzPVwicGxheWxpc3QtbmFtZVwiPmluICR7ZHVwLnBsYXlsaXN0TmFtZX08L3NwYW4+YDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG4gIFxuICBpZiAoZHVwbGljYXRlcy5sZW5ndGggPiAxMCkge1xuICAgIGNvbnN0IG1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vcmUuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29uZmlybS1tb3JlXCI7XG4gICAgbW9yZS50ZXh0Q29udGVudCA9IGAuLi5hbmQgJHtkdXBsaWNhdGVzLmxlbmd0aCAtIDEwfSBtb3JlYDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKG1vcmUpO1xuICB9XG4gIFxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWluZm9cIjtcbiAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID09PSB0cmFja0NvdW50KSB7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IFwiQWxsIHNlbGVjdGVkIHRyYWNrcyBhcmUgYWxyZWFkeSBpbiB0aGUgc2VsZWN0ZWQgcGxheWxpc3QocykuXCI7XG4gIH0gZWxzZSB7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IGAke2R1cGxpY2F0ZXMubGVuZ3RofSBvZiAke3RyYWNrQ291bnR9IHRyYWNrcyBhcmUgYWxyZWFkeSBpbiB0aGUgc2VsZWN0ZWQgcGxheWxpc3QocykuYDtcbiAgfVxuICBcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29uZmlybS1idXR0b25zXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnRuIGNhbmNlbFwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICBvbkNhbmNlbCgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjb25maXJtXCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBBbnl3YXlcIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIG9uQ29uZmlybSgpO1xuICB9KTtcbiAgXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIFxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRyYWNrc1RvUGxheWxpc3RzKFxuICBwbGF5bGlzdFVyaXM6IHN0cmluZ1tdLFxuICB0cmFja1VyaXM6IHN0cmluZ1tdXG4pOiBQcm9taXNlPHsgc3VjY2Vzczogc3RyaW5nW107IGZhaWxlZDogc3RyaW5nW10gfT4ge1xuICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG4gIFxuICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gUGxheWxpc3RBUElcIik7XG4gIH1cbiAgXG4gIGNvbnN0IHN1Y2Nlc3M6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGZhaWxlZDogc3RyaW5nW10gPSBbXTtcbiAgXG4gIGZvciAoY29uc3QgcGxheWxpc3RVcmkgb2YgcGxheWxpc3RVcmlzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFBsYXlsaXN0QVBJLmFkZChwbGF5bGlzdFVyaSwgdHJhY2tVcmlzLCBbXSk7XG4gICAgICBzdWNjZXNzLnB1c2gocGxheWxpc3RVcmkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGZhaWxlZC5wdXNoKHBsYXlsaXN0VXJpKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB7IHN1Y2Nlc3MsIGZhaWxlZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwodHJhY2tVcmlzOiBzdHJpbmdbXSkge1xuICBsZXQgYWxsUGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGxldCBmaWx0ZXJlZFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1tb2RhbFwiO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWhlYWRlclwiO1xuICBcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIjtcbiAgXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtaGVhZGVyLXJpZ2h0XCI7XG4gIFxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtZ2l0aHViXCI7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ppbU1hcmxleTQyMC9hcnRpc3RTZWFyY2hcIjtcbiAgZ2l0aHViTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBnaXRodWJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJPcGVuIEdpdEh1YiByZXBvc2l0b3J5XCIpO1xuICBnaXRodWJMaW5rLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY2xvc2VcIjtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz48L3N2Zz5gO1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG4gIFxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3Qtc2VhcmNoXCI7XG4gIFxuICBjb25zdCBzZWFyY2hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoV3JhcHBlci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1zZWFyY2gtd3JhcHBlclwiO1xuICBcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaEljb24uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3Qtc2VhcmNoLWljb25cIjtcbiAgc2VhcmNoSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLz48L3N2Zz5gO1xuICBcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBwbGF5bGlzdHMuLi5cIjtcbiAgXG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoV3JhcHBlcik7XG4gIFxuICBjb25zdCB0cmFja0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tDb3VudC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC10cmFjay1jb3VudFwiO1xuICB0cmFja0NvdW50LnRleHRDb250ZW50ID0gYCR7dHJhY2tVcmlzLmxlbmd0aH0gdHJhY2socykgc2VsZWN0ZWRgO1xuICBcbiAgY29uc3QgcGxheWxpc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWxpc3RMaXN0LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWxpc3RcIjtcbiAgXG4gIGNvbnN0IGVtcHR5U3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbXB0eVN0YXRlLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWVtcHR5XCI7XG4gIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgcGxheWxpc3RzLi4uXCI7XG4gIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgXG4gIGZ1bmN0aW9uIHJlbmRlclBsYXlsaXN0cyhwbGF5bGlzdHM6IFBsYXlsaXN0W10pIHtcbiAgICBwbGF5bGlzdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBcbiAgICBpZiAocGxheWxpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IHNlYXJjaElucHV0LnZhbHVlID8gXCJObyBwbGF5bGlzdHMgZm91bmRcIiA6IFwiTm8gcGxheWxpc3RzIGF2YWlsYWJsZVwiO1xuICAgICAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGNvbnN0IHBsYXlsaXN0IG9mIHBsYXlsaXN0cykge1xuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtaXRlbVwiICsgKHNlbGVjdGVkU2V0LmhhcyhwbGF5bGlzdC51cmkpID8gXCIgc2VsZWN0ZWRcIiA6IFwiXCIpO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LXdyYXBwZXJcIjtcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzZWxlY3RlZFNldC5oYXMocGxheWxpc3QudXJpKTtcbiAgICAgIFxuICAgICAgY29uc3QgY3VzdG9tQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY3VzdG9tQ2hlY2tib3guY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tXCI7XG4gICAgICBcbiAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tib3gpO1xuICAgICAgXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5hZGQocGxheWxpc3QudXJpKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5kZWxldGUocGxheWxpc3QudXJpKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIG5hbWUuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbmFtZVwiO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHBsYXlsaXN0Lm5hbWU7XG4gICAgICBcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3hXcmFwcGVyKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBmaWx0ZXJQbGF5bGlzdHMoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGZpbHRlcmVkUGxheWxpc3RzID0gYWxsUGxheWxpc3RzLmZpbHRlcihwID0+IHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSk7XG4gICAgcmVuZGVyUGxheWxpc3RzKGZpbHRlcmVkUGxheWxpc3RzKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG4gIFxuICBmdW5jdGlvbiB1cGRhdGVCdXR0b25TdGF0ZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gc2VsZWN0ZWRTZXQuc2l6ZTtcbiAgICB0cmFja0NvdW50LnRleHRDb250ZW50ID0gYCR7dHJhY2tVcmlzLmxlbmd0aH0gdHJhY2socykgc2VsZWN0ZWQgXHUyMDIyICR7c2VsZWN0ZWRDb3VudH0gcGxheWxpc3QocylgO1xuICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSBzZWxlY3RlZENvdW50ID09PSAwO1xuICAgIFxuICAgIGlmIChzZWxlY3RlZENvdW50ID09PSAwKSB7XG4gICAgICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ291bnQgPT09IGZpbHRlcmVkUGxheWxpc3RzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJEZXNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyBmdW5jdGlvbiBsb2FkUGxheWxpc3RzKCkge1xuICAgIHRyeSB7XG4gICAgICBhbGxQbGF5bGlzdHMgPSBhd2FpdCBmZXRjaFBsYXlsaXN0cygpO1xuICAgICAgZmlsdGVyZWRQbGF5bGlzdHMgPSBbLi4uYWxsUGxheWxpc3RzXTtcbiAgICAgIHJlbmRlclBsYXlsaXN0cyhmaWx0ZXJlZFBsYXlsaXN0cyk7XG4gICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkZhaWxlZCB0byBsb2FkIHBsYXlsaXN0c1wiO1xuICAgICAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICAgIH1cbiAgfVxuICBcbiAgbG9hZFBsYXlsaXN0cygpO1xuICBcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZpbHRlclBsYXlsaXN0cyk7XG4gIFxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnV0dG9uc1wiO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICBcbiAgY29uc3Qgc2VsZWN0QWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VsZWN0QWxsQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlbGVjdC1hbGxcIjtcbiAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gIHNlbGVjdEFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFNldC5zaXplID09PSBmaWx0ZXJlZFBsYXlsaXN0cy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICBwbGF5bGlzdExpc3QucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtdG8tcGxheWxpc3QtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkUGxheWxpc3RzLmZvckVhY2gocCA9PiBzZWxlY3RlZFNldC5hZGQocC51cmkpKTtcbiAgICAgIHBsYXlsaXN0TGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC10by1wbGF5bGlzdC1pdGVtXCIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGNoZWNrYm94KSBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uR3JvdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBidXR0b25Hcm91cC5zdHlsZS5nYXAgPSBcIjEycHhcIjtcbiAgYnV0dG9uR3JvdXAuc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuICBcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5yZW1vdmUoKSk7XG4gIFxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idG4gY29uZmlybVwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIFxuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGxheWxpc3RVcmlzID0gQXJyYXkuZnJvbShzZWxlY3RlZFNldCk7XG4gICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ2hlY2tpbmcuLi5cIjtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgZHVwbGljYXRlczogRHVwbGljYXRlQ2hlY2tbXSA9IFtdO1xuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgICAgICBjb25zdCBwbGF5bGlzdCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IHBsYXlsaXN0VXJpKTtcbiAgICAgICAgY29uc3QgcGxheWxpc3ROYW1lID0gcGxheWxpc3Q/Lm5hbWUgfHwgXCJVbmtub3duXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5bGlzdFRyYWNrcyA9IGF3YWl0IGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgdHJhY2tVcmkgb2YgdHJhY2tVcmlzKSB7XG4gICAgICAgICAgaWYgKHBsYXlsaXN0VHJhY2tzLmhhcyh0cmFja1VyaSkpIHtcbiAgICAgICAgICAgIGR1cGxpY2F0ZXMucHVzaCh7XG4gICAgICAgICAgICAgIHBsYXlsaXN0VXJpLFxuICAgICAgICAgICAgICBwbGF5bGlzdE5hbWUsXG4gICAgICAgICAgICAgIHRyYWNrVXJpLFxuICAgICAgICAgICAgICB0cmFja05hbWU6IGdldFRyYWNrTmFtZSh0cmFja1VyaSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRpbmcuLi5cIjtcbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUNvbmZpcm1Nb2RhbChcbiAgICAgICAgICBkdXBsaWNhdGVzLFxuICAgICAgICAgIHRyYWNrVXJpcy5sZW5ndGgsXG4gICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWRkVHJhY2tzVG9QbGF5bGlzdHMocGxheWxpc3RVcmlzLCB0cmFja1VyaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihgQWRkZWQgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSB0byAke3Jlc3VsdC5zdWNjZXNzLmxlbmd0aH0gcGxheWxpc3QocylgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHdlcmUgYWRkZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IFBsYXlsaXN0QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5QbGF5bGlzdEFQSTtcbiAgICAgICAgXG4gICAgICAgIGlmICghUGxheWxpc3RBUEkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBQbGF5bGlzdEFQSVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGFkZGVkQ291bnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBwbGF5bGlzdFVyaSBvZiBwbGF5bGlzdFVyaXMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUGxheWxpc3RBUEkuYWRkKHBsYXlsaXN0VXJpLCB0cmFja1VyaXMsIFtdKTtcbiAgICAgICAgICAgIGFkZGVkQ291bnQrKztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoYWRkZWRDb3VudCA+IDApIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihgQWRkZWQgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSB0byAke2FkZGVkQ291bnR9IHBsYXlsaXN0KHMpYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gYWRkIHRyYWNrc1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBhZGQgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgfVxuICB9KTtcbiAgXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEFsbEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG4gIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0cmFja0NvdW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5bGlzdExpc3QpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIFxuICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICBcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHNlYXJjaElucHV0LmZvY3VzKCk7XG59IiwgImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBjcmVhdGVNb2RhbCB9IGZyb20gXCIuL21vZGFsLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2sodXJpczogc3RyaW5nW10pIHtcbiAgY29uc3QgdHJhY2tVcmlzID0gdXJpcy5maWx0ZXIoKHVyaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdXJpT2JqID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk7XG4gICAgcmV0dXJuIHVyaU9iaiAmJiAodXJpT2JqIGFzIGFueSkudHlwZSA9PT0gXCJ0cmFja1wiO1xuICB9KTtcbiAgXG4gIGlmICh0cmFja1VyaXMubGVuZ3RoID09PSAwKSB7XG4gICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJObyB0cmFja3Mgc2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBjcmVhdGVNb2RhbCh0cmFja1VyaXMpO1xufVxuXG5jb25zdCBhZGRUb011bHRpcGxlUGxheWxpc3RzTWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51Lkl0ZW0oXG4gIFwiQWRkIHRvIE11bHRpcGxlIFBsYXlsaXN0c1wiLFxuICBoYW5kbGVNZW51Q2xpY2ssXG4gICh1cmlzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IGhhc1RyYWNrID0gdXJpcy5zb21lKCh1cmk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdXJpT2JqID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk7XG4gICAgICByZXR1cm4gdXJpT2JqICYmICh1cmlPYmogYXMgYW55KS50eXBlID09PSBcInRyYWNrXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhhc1RyYWNrO1xuICB9LFxuICBcInBsdXMtYWx0XCIgYXMgU3BpY2V0aWZ5Lkljb25cbik7XG5cbmFkZFRvTXVsdGlwbGVQbGF5bGlzdHNNZW51SXRlbS5yZWdpc3RlcigpOyJdLAogICJtYXBwaW5ncyI6ICI7OztBQUNVLElBQU0sUUFBUSxJQUFJLGNBQWM7QUFDaEMsTUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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
