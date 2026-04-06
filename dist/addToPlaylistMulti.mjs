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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFkZC10by1wbGF5bGlzdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNwb3RpZnkpLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWdpdGh1Yjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbGw6ICNiM2IzYjM7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2ggaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjM2UzZTNlO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC10cmFjay1jb3VudCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Qge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiA4cHggOHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMmEyYTJhO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveDpjaGVja2VkICsgLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBib3JkZXItY29sb3I6ICMxZGI5NTQ7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkICMwMDA7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveDpjaGVja2VkICsgLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b206OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3g6Zm9jdXMgKyAuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMWRiOTU0O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWVtcHR5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnV0dG9ucy1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuIHtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY29uZmlybSB7XG4gIGJhY2tncm91bmQ6ICMxZGI5NTQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzFlZDc2MDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY29uZmlybTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM1MzUzNTM7XG4gIGNvbG9yOiAjMTgxODE4O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlbGVjdC1hbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzFkYjk1NDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufWApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuaW50ZXJmYWNlIFBsYXlsaXN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hQbGF5bGlzdHMoKTogUHJvbWlzZTxQbGF5bGlzdFtdPiB7XG4gIGNvbnN0IExpYnJhcnlBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LkxpYnJhcnlBUEk7XG4gIFxuICBpZiAoIUxpYnJhcnlBUEkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGxpbWl0OiAxMDAwMDAwMCxcbiAgICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIGl0ZW0uY2FuQWRkVG8pIHtcbiAgICAgICAgcGxheWxpc3RzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICB1cmk6IGl0ZW0udXJpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRUcmFja3NUb1BsYXlsaXN0cyhwbGF5bGlzdFVyaXM6IHN0cmluZ1tdLCB0cmFja1VyaXM6IHN0cmluZ1tdKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IHN0cmluZ1tdOyBmYWlsZWQ6IHN0cmluZ1tdIH0+IHtcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICBcbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFBsYXlsaXN0QVBJXCIpO1xuICB9XG4gIFxuICBjb25zdCBzdWNjZXNzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBmYWlsZWQ6IHN0cmluZ1tdID0gW107XG4gIFxuICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQbGF5bGlzdEFQSS5hZGQocGxheWxpc3RVcmksIHRyYWNrVXJpcywgW10pO1xuICAgICAgc3VjY2Vzcy5wdXNoKHBsYXlsaXN0VXJpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBmYWlsZWQucHVzaChwbGF5bGlzdFVyaSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4geyBzdWNjZXNzLCBmYWlsZWQgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWwodHJhY2tVcmlzOiBzdHJpbmdbXSkge1xuICBsZXQgYWxsUGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGxldCBmaWx0ZXJlZFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1tb2RhbFwiO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWhlYWRlclwiO1xuICBcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIjtcbiAgXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1naXRodWJcIjtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmltTWFybGV5NDIwL2FydGlzdFNlYXJjaFwiO1xuICBnaXRodWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIk9wZW4gR2l0SHViIHJlcG9zaXRvcnlcIik7XG4gIGdpdGh1YkxpbmsuaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiLz48L3N2Zz5gO1xuICBcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlYXJjaFwiO1xuICBcbiAgY29uc3Qgc2VhcmNoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaFdyYXBwZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3Qtc2VhcmNoLXdyYXBwZXJcIjtcbiAgXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hJY29uLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC1pY29uXCI7XG4gIHNlYXJjaEljb24uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggcGxheWxpc3RzLi4uXCI7XG4gIFxuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaFdyYXBwZXIpO1xuICBcbiAgY29uc3QgdHJhY2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrQ291bnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtdHJhY2stY291bnRcIjtcbiAgdHJhY2tDb3VudC50ZXh0Q29udGVudCA9IGAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHNlbGVjdGVkYDtcbiAgXG4gIGNvbnN0IHBsYXlsaXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXlsaXN0TGlzdC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1saXN0XCI7XG4gIFxuICBjb25zdCBlbXB0eVN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW1wdHlTdGF0ZS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1lbXB0eVwiO1xuICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJMb2FkaW5nIHBsYXlsaXN0cy4uLlwiO1xuICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gIFxuICBmdW5jdGlvbiByZW5kZXJQbGF5bGlzdHMocGxheWxpc3RzOiBQbGF5bGlzdFtdKSB7XG4gICAgcGxheWxpc3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgaWYgKHBsYXlsaXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBzZWFyY2hJbnB1dC52YWx1ZSA/IFwiTm8gcGxheWxpc3RzIGZvdW5kXCIgOiBcIk5vIHBsYXlsaXN0cyBhdmFpbGFibGVcIjtcbiAgICAgIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChjb25zdCBwbGF5bGlzdCBvZiBwbGF5bGlzdHMpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBpdGVtLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWl0ZW1cIiArIChzZWxlY3RlZFNldC5oYXMocGxheWxpc3QudXJpKSA/IFwiIHNlbGVjdGVkXCIgOiBcIlwiKTtcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2tib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jaGVja2JveC13cmFwcGVyXCI7XG4gICAgICBcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gc2VsZWN0ZWRTZXQuaGFzKHBsYXlsaXN0LnVyaSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGN1c3RvbUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbVwiO1xuICAgICAgXG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrYm94KTtcbiAgICAgIFxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKHBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKHBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuYW1lLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LW5hbWVcIjtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5bGlzdC5uYW1lO1xuICAgICAgXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94V3JhcHBlcik7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gZmlsdGVyUGxheWxpc3RzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBmaWx0ZXJlZFBsYXlsaXN0cyA9IGFsbFBsYXlsaXN0cy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpO1xuICAgIHJlbmRlclBsYXlsaXN0cyhmaWx0ZXJlZFBsYXlsaXN0cyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tDb3VudC50ZXh0Q29udGVudCA9IGAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHNlbGVjdGVkIFx1MjAyMiAke3NlbGVjdGVkQ291bnR9IHBsYXlsaXN0KHMpYDtcbiAgICBjb25maXJtQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvdW50ID09PSBmaWx0ZXJlZFBsYXlsaXN0cy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVzZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0cygpIHtcbiAgICB0cnkge1xuICAgICAgYWxsUGxheWxpc3RzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdHMoKTtcbiAgICAgIGZpbHRlcmVkUGxheWxpc3RzID0gWy4uLmFsbFBsYXlsaXN0c107XG4gICAgICByZW5kZXJQbGF5bGlzdHMoZmlsdGVyZWRQbGF5bGlzdHMpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIjtcbiAgICAgIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICB9XG4gIH1cbiAgXG4gIGxvYWRQbGF5bGlzdHMoKTtcbiAgXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmaWx0ZXJQbGF5bGlzdHMpO1xuICBcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ1dHRvbnNcIjtcbiAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1iZXR3ZWVuXCI7XG4gIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgXG4gIGNvbnN0IHNlbGVjdEFsbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlbGVjdEFsbEJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1zZWxlY3QtYWxsXCI7XG4gIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICBzZWxlY3RBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRTZXQuc2l6ZSA9PT0gZmlsdGVyZWRQbGF5bGlzdHMubGVuZ3RoKSB7XG4gICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgcGxheWxpc3RMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRvLXBsYXlsaXN0LWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFkZC10by1wbGF5bGlzdC1jaGVja2JveFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoY2hlY2tib3gpIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJlZFBsYXlsaXN0cy5mb3JFYWNoKHAgPT4gc2VsZWN0ZWRTZXQuYWRkKHAudXJpKSk7XG4gICAgICBwbGF5bGlzdExpc3QucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtdG8tcGxheWxpc3QtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkdyb3VwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgYnV0dG9uR3JvdXAuc3R5bGUuZ2FwID0gXCIxMnB4XCI7XG4gIGJ1dHRvbkdyb3VwLnN0eWxlLm1hcmdpbkxlZnQgPSBcImF1dG9cIjtcbiAgXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnRuIGNvbmZpcm1cIjtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBsYXlsaXN0VXJpcyA9IEFycmF5LmZyb20oc2VsZWN0ZWRTZXQpO1xuICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZGluZy4uLlwiO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhZGRUcmFja3NUb1BsYXlsaXN0cyhwbGF5bGlzdFVyaXMsIHRyYWNrVXJpcyk7XG4gICAgICBcbiAgICAgIGlmIChyZXN1bHQuZmFpbGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihgQWRkZWQgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSB0byAke3Jlc3VsdC5zdWNjZXNzLmxlbmd0aH0gcGxheWxpc3QocylgKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN1Y2Nlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGFkZCB0cmFja3MgLSB0aGV5IG1heSBhbHJlYWR5IGJlIGluIHRoZSBwbGF5bGlzdHNcIiwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihgQWRkZWQgdG8gJHtyZXN1bHQuc3VjY2Vzcy5sZW5ndGh9IHBsYXlsaXN0KHMpLiAke3Jlc3VsdC5mYWlsZWQubGVuZ3RofSBhbHJlYWR5IGNvbnRhaW5lZCB0aGUgdHJhY2socykuYCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGFkZCB0cmFja3NcIiwgdHJ1ZSk7XG4gICAgICBjb25maXJtQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICB9XG4gIH0pO1xuICBcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIFxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrQ291bnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBsYXlsaXN0TGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIFxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKHVyaXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IHVyaXMuZmlsdGVyKCh1cmk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyBhbnkpLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgfSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgY3JlYXRlTW9kYWwodHJhY2tVcmlzKTtcbn1cblxuY29uc3QgYWRkVG9NdWx0aXBsZVBsYXlsaXN0c01lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudS5JdGVtKFxuICBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIixcbiAgaGFuZGxlTWVudUNsaWNrLFxuICAodXJpczogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBoYXNUcmFjayA9IHVyaXMuc29tZSgodXJpOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgICAgcmV0dXJuIHVyaU9iaiAmJiAodXJpT2JqIGFzIGFueSkudHlwZSA9PT0gXCJ0cmFja1wiO1xuICAgIH0pO1xuICAgIHJldHVybiBoYXNUcmFjaztcbiAgfSxcbiAgXCJwbHVzLWFsdFwiIGFzIFNwaWNldGlmeS5JY29uXG4pO1xuXG5hZGRUb011bHRpcGxlUGxheWxpc3RzTWVudUl0ZW0ucmVnaXN0ZXIoKTsiXSwKICAibWFwcGluZ3MiOiAiOzs7QUFDVSxJQUFNLFFBQVEsSUFBSSxjQUFjO0FBQ2hDLE1BQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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
