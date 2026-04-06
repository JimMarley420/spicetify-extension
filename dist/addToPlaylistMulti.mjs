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
}`);
var styles_default = sheet;

// extensions/addToPlaylistMulti/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
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
  const githubLink = document.createElement("a");
  githubLink.className = "add-to-playlist-github";
  githubLink.href = "https://github.com/JimMarley420/artist-search";
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
    confirmBtn.textContent = "Adding...";
    try {
      const result = await addTracksToPlaylists(playlistUris, trackUris);
      if (result.failed.length === 0) {
        Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${result.success.length} playlist(s)`);
      } else if (result.success.length === 0) {
        Spicetify.showNotification("Failed to add tracks - they may already be in the playlists", true);
      } else {
        Spicetify.showNotification(`Added to ${result.success.length} playlist(s). ${result.failed.length} already contained the track(s).`, true);
      }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFkZC10by1wbGF5bGlzdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNwb3RpZnkpLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWdpdGh1Yjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbGw6ICNiM2IzYjM7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2ggaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjM2UzZTNlO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC10cmFjay1jb3VudCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Qge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiA4cHggOHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMmEyYTJhO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveDpjaGVja2VkICsgLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBib3JkZXItY29sb3I6ICMxZGI5NTQ7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkICMwMDA7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveDpjaGVja2VkICsgLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b206OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3g6Zm9jdXMgKyAuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMWRiOTU0O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWVtcHR5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnV0dG9ucy1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuIHtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY29uZmlybSB7XG4gIGJhY2tncm91bmQ6ICMxZGI5NTQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzFlZDc2MDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY29uZmlybTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM1MzUzNTM7XG4gIGNvbG9yOiAjMTgxODE4O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlbGVjdC1hbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzFkYjk1NDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufWApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuaW50ZXJmYWNlIFBsYXlsaXN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hQbGF5bGlzdHMoKTogUHJvbWlzZTxQbGF5bGlzdFtdPiB7XG4gIGNvbnN0IExpYnJhcnlBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LkxpYnJhcnlBUEk7XG4gIFxuICBpZiAoIUxpYnJhcnlBUEkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGxpbWl0OiAxMDAwMDAwMCxcbiAgICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIGl0ZW0uY2FuQWRkVG8pIHtcbiAgICAgICAgcGxheWxpc3RzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICB1cmk6IGl0ZW0udXJpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRUcmFja3NUb1BsYXlsaXN0cyhwbGF5bGlzdFVyaXM6IHN0cmluZ1tdLCB0cmFja1VyaXM6IHN0cmluZ1tdKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IHN0cmluZ1tdOyBmYWlsZWQ6IHN0cmluZ1tdIH0+IHtcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICBcbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFBsYXlsaXN0QVBJXCIpO1xuICB9XG4gIFxuICBjb25zdCBzdWNjZXNzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBmYWlsZWQ6IHN0cmluZ1tdID0gW107XG4gIFxuICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQbGF5bGlzdEFQSS5hZGQocGxheWxpc3RVcmksIHRyYWNrVXJpcywgW10pO1xuICAgICAgc3VjY2Vzcy5wdXNoKHBsYXlsaXN0VXJpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBmYWlsZWQucHVzaChwbGF5bGlzdFVyaSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4geyBzdWNjZXNzLCBmYWlsZWQgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWwodHJhY2tVcmlzOiBzdHJpbmdbXSkge1xuICBsZXQgYWxsUGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGxldCBmaWx0ZXJlZFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1tb2RhbFwiO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWhlYWRlclwiO1xuICBcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIjtcbiAgXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1naXRodWJcIjtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmltTWFybGV5NDIwL2FydGlzdC1zZWFyY2hcIjtcbiAgZ2l0aHViTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBnaXRodWJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJPcGVuIEdpdEh1YiByZXBvc2l0b3J5XCIpO1xuICBnaXRodWJMaW5rLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIi8+PC9zdmc+YDtcbiAgXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1zZWFyY2hcIjtcbiAgXG4gIGNvbnN0IHNlYXJjaFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC13cmFwcGVyXCI7XG4gIFxuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoSWNvbi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1zZWFyY2gtaWNvblwiO1xuICBzZWFyY2hJY29uLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAwMTYgOS41IDYuNSA2LjUgMCAxMDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIvPjwvc3ZnPmA7XG4gIFxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHBsYXlsaXN0cy4uLlwiO1xuICBcbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hXcmFwcGVyKTtcbiAgXG4gIGNvbnN0IHRyYWNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0NvdW50LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXRyYWNrLWNvdW50XCI7XG4gIHRyYWNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSBzZWxlY3RlZGA7XG4gIFxuICBjb25zdCBwbGF5bGlzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5bGlzdExpc3QuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbGlzdFwiO1xuICBcbiAgY29uc3QgZW1wdHlTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtcHR5U3RhdGUuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtZW1wdHlcIjtcbiAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZyBwbGF5bGlzdHMuLi5cIjtcbiAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICBcbiAgZnVuY3Rpb24gcmVuZGVyUGxheWxpc3RzKHBsYXlsaXN0czogUGxheWxpc3RbXSkge1xuICAgIHBsYXlsaXN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIGlmIChwbGF5bGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gc2VhcmNoSW5wdXQudmFsdWUgPyBcIk5vIHBsYXlsaXN0cyBmb3VuZFwiIDogXCJObyBwbGF5bGlzdHMgYXZhaWxhYmxlXCI7XG4gICAgICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgcGxheWxpc3RzKSB7XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1pdGVtXCIgKyAoc2VsZWN0ZWRTZXQuaGFzKHBsYXlsaXN0LnVyaSkgPyBcIiBzZWxlY3RlZFwiIDogXCJcIik7XG4gICAgICBcbiAgICAgIGNvbnN0IGNoZWNrYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjaGVja2JveFdyYXBwZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtd3JhcHBlclwiO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jaGVja2JveFwiO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHNlbGVjdGVkU2V0LmhhcyhwbGF5bGlzdC51cmkpO1xuICAgICAgXG4gICAgICBjb25zdCBjdXN0b21DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjdXN0b21DaGVja2JveC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b21cIjtcbiAgICAgIFxuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChjdXN0b21DaGVja2JveCk7XG4gICAgICBcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmFkZChwbGF5bGlzdC51cmkpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmRlbGV0ZShwbGF5bGlzdC51cmkpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbmFtZS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1uYW1lXCI7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcGxheWxpc3QubmFtZTtcbiAgICAgIFxuICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGZpbHRlclBsYXlsaXN0cygpIHtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgZmlsdGVyZWRQbGF5bGlzdHMgPSBhbGxQbGF5bGlzdHMuZmlsdGVyKHAgPT4gcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKTtcbiAgICByZW5kZXJQbGF5bGlzdHMoZmlsdGVyZWRQbGF5bGlzdHMpO1xuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvblN0YXRlKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSBzZWxlY3RlZFNldC5zaXplO1xuICAgIHRyYWNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSBzZWxlY3RlZCBcdTIwMjIgJHtzZWxlY3RlZENvdW50fSBwbGF5bGlzdChzKWA7XG4gICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHNlbGVjdGVkQ291bnQgPT09IDA7XG4gICAgXG4gICAgaWYgKHNlbGVjdGVkQ291bnQgPT09IDApIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb3VudCA9PT0gZmlsdGVyZWRQbGF5bGlzdHMubGVuZ3RoKSB7XG4gICAgICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIkRlc2VsZWN0IEFsbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgICB9XG4gIH1cbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGF5bGlzdHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFsbFBsYXlsaXN0cyA9IGF3YWl0IGZldGNoUGxheWxpc3RzKCk7XG4gICAgICBmaWx0ZXJlZFBsYXlsaXN0cyA9IFsuLi5hbGxQbGF5bGlzdHNdO1xuICAgICAgcmVuZGVyUGxheWxpc3RzKGZpbHRlcmVkUGxheWxpc3RzKTtcbiAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiRmFpbGVkIHRvIGxvYWQgcGxheWxpc3RzXCI7XG4gICAgICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gICAgfVxuICB9XG4gIFxuICBsb2FkUGxheWxpc3RzKCk7XG4gIFxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZmlsdGVyUGxheWxpc3RzKTtcbiAgXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idXR0b25zXCI7XG4gIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gIFxuICBjb25zdCBzZWxlY3RBbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWxlY3RBbGxCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbFwiO1xuICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgc2VsZWN0QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkU2V0LnNpemUgPT09IGZpbHRlcmVkUGxheWxpc3RzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHBsYXlsaXN0TGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC10by1wbGF5bGlzdC1pdGVtXCIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGNoZWNrYm94KSBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyZWRQbGF5bGlzdHMuZm9yRWFjaChwID0+IHNlbGVjdGVkU2V0LmFkZChwLnVyaSkpO1xuICAgICAgcGxheWxpc3RMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRvLXBsYXlsaXN0LWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFkZC10by1wbGF5bGlzdC1jaGVja2JveFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoY2hlY2tib3gpIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gIH0pO1xuICBcbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Hcm91cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGJ1dHRvbkdyb3VwLnN0eWxlLmdhcCA9IFwiMTJweFwiO1xuICBidXR0b25Hcm91cC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCJhdXRvXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnRuIGNhbmNlbFwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vZGFsLnJlbW92ZSgpKTtcbiAgXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjb25maXJtXCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25maXJtQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgXG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwbGF5bGlzdFVyaXMgPSBBcnJheS5mcm9tKHNlbGVjdGVkU2V0KTtcbiAgICBjb25maXJtQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRpbmcuLi5cIjtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWRkVHJhY2tzVG9QbGF5bGlzdHMocGxheWxpc3RVcmlzLCB0cmFja1VyaXMpO1xuICAgICAgXG4gICAgICBpZiAocmVzdWx0LmZhaWxlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oYEFkZGVkICR7dHJhY2tVcmlzLmxlbmd0aH0gdHJhY2socykgdG8gJHtyZXN1bHQuc3VjY2Vzcy5sZW5ndGh9IHBsYXlsaXN0KHMpYCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdWNjZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBhZGQgdHJhY2tzIC0gdGhleSBtYXkgYWxyZWFkeSBiZSBpbiB0aGUgcGxheWxpc3RzXCIsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oYEFkZGVkIHRvICR7cmVzdWx0LnN1Y2Nlc3MubGVuZ3RofSBwbGF5bGlzdChzKS4gJHtyZXN1bHQuZmFpbGVkLmxlbmd0aH0gYWxyZWFkeSBjb250YWluZWQgdGhlIHRyYWNrKHMpLmAsIHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBhZGQgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgfVxuICB9KTtcbiAgXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEFsbEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG4gIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0cmFja0NvdW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5bGlzdExpc3QpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIFxuICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICBcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHNlYXJjaElucHV0LmZvY3VzKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayh1cmlzOiBzdHJpbmdbXSkge1xuICBjb25zdCB0cmFja1VyaXMgPSB1cmlzLmZpbHRlcigodXJpOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgICByZXR1cm4gdXJpT2JqICYmICh1cmlPYmogYXMgYW55KS50eXBlID09PSBcInRyYWNrXCI7XG4gIH0pO1xuICBcbiAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPT09IDApIHtcbiAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIk5vIHRyYWNrcyBzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFsKHRyYWNrVXJpcyk7XG59XG5cbmNvbnN0IGFkZFRvTXVsdGlwbGVQbGF5bGlzdHNNZW51SXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnUuSXRlbShcbiAgXCJBZGQgdG8gTXVsdGlwbGUgUGxheWxpc3RzXCIsXG4gIGhhbmRsZU1lbnVDbGljayxcbiAgKHVyaXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgaGFzVHJhY2sgPSB1cmlzLnNvbWUoKHVyaTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyBhbnkpLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gaGFzVHJhY2s7XG4gIH0sXG4gIFwicGx1cy1hbHRcIiBhcyBTcGljZXRpZnkuSWNvblxuKTtcblxuYWRkVG9NdWx0aXBsZVBsYXlsaXN0c01lbnVJdGVtLnJlZ2lzdGVyKCk7Il0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQ1UsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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
