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
}

.bulk-delete-content {
  background: #181818;
  border-radius: 8px;
  width: 600px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bulk-delete-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bulk-delete-close {
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

.bulk-delete-close:hover {
  background: #282828;
}

.bulk-delete-close svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.bulk-delete-close:hover svg {
  fill: #fff;
}

.bulk-delete-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s;
}

.bulk-delete-github:hover {
  background: #282828;
}

.bulk-delete-github svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.bulk-delete-github:hover svg {
  fill: #fff;
}

.bulk-delete-playlist-selector {
  padding: 16px 20px;
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
  padding: 10px 12px;
  background: #3f3f3f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23b3b3b3'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.bulk-delete-playlist-select:hover {
  background-color: #4a4a4a;
}

.bulk-delete-playlist-select:focus {
  outline: none;
  background-color: #4a4a4a;
}

.bulk-delete-search {
  padding: 16px 20px;
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

.bulk-delete-search input:disabled {
  opacity: 0.5;
}

.bulk-delete-track-info {
  padding: 12px 20px;
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
  min-height: 400px;
}

.bulk-delete-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  color: #b3b3b3;
  font-size: 14px;
}

.bulk-delete-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.15s;
  gap: 8px;
}

.bulk-delete-item:hover {
  background: #282828;
}

.bulk-delete-item.selected {
  background: rgba(29, 185, 84, 0.1);
}

.bulk-delete-track-number {
  width: 32px;
  text-align: center;
  color: #b3b3b3;
  font-size: 14px;
  flex-shrink: 0;
}

.bulk-delete-playing-indicator {
  width: 12px;
  height: 12px;
  display: inline-block;
}

.bulk-delete-playing-indicator::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background: #1db954;
  border-radius: 50%;
  animation: bulk-delete-pulse 1s ease-in-out infinite;
}

@keyframes bulk-delete-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.bulk-delete-track-image-container {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  background: #282828;
}

.bulk-delete-track-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bulk-delete-item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
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
}

.bulk-delete-playback-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 180px;
  flex-shrink: 0;
}

.bulk-delete-playback-button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.bulk-delete-playback-button:hover {
  background: #282828;
}

.bulk-delete-playback-button svg {
  width: 16px;
  height: 16px;
}

.bulk-delete-slider-container {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.bulk-delete-slider-time {
  color: #b3b3b3;
  font-size: 11px;
  min-width: 35px;
}

.bulk-delete-slider {
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: #4a4a4a;
  border-radius: 2px;
  cursor: pointer;
}

.bulk-delete-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.bulk-delete-slider:hover::-webkit-slider-thumb {
  transform: scale(1.2);
}

.bulk-delete-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bulk-delete-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.bulk-delete-checkbox-custom {
  width: 16px;
  height: 16px;
  border: 2px solid #b3b3b3;
  border-radius: 3px;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom::after {
  content: "";
  width: 6px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
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
  padding: 16px 20px;
  border-top: 1px solid #282828;
}

.bulk-delete-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 13px;
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
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.bulk-delete-btn.cancel {
  background: transparent;
  border: 1px solid #727272;
  color: #fff;
}

.bulk-delete-btn.cancel:hover {
  border-color: #fff;
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
  border-radius: 8px;
  width: 400px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-confirm-header {
  color: #fff;
  font-size: 16px;
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
async function fetchAllLibraryContents() {
  const LibraryAPI = Spicetify.Platform?.LibraryAPI;
  if (!LibraryAPI) return [];
  const response = await LibraryAPI.getContents({
    offset: 0,
    limit: 1e7,
    flattenTree: true
  });
  return response?.items || [];
}
async function fetchPlaylistsWithDeletePermission() {
  try {
    const items = await fetchAllLibraryContents();
    const playlists = [];
    for (const item of items) {
      const playlist = item;
      if (playlist.type === "playlist" && (playlist.canDelete || playlist.canAddTo)) {
        playlists.push({
          name: playlist.name || "Unknown",
          uri: playlist.uri || "",
          canDelete: playlist.canDelete || false,
          canAddTo: playlist.canAddTo || false
        });
      }
    }
    return playlists;
  } catch (e) {
    return [];
  }
}
function formatTime(ms) {
  if (ms == null || ms <= 0) return "0:00";
  const s = Math.floor(ms / 1e3);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function createPlaybackControl(uri, duration) {
  const container = document.createElement("div");
  container.className = "bulk-delete-playback-controls";
  container.dataset.uri = uri;
  const playBtn = document.createElement("button");
  playBtn.className = "bulk-delete-playback-button";
  playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    try {
      const player = Spicetify.Player;
      if (!player) return;
      const currentUri = player?.data?.item?.uri;
      if (currentUri === uri) {
        if (player?.isPlaying()) {
          player.pause();
        } else {
          player.play();
        }
      } else {
        player.playUri(uri);
      }
    } catch (err) {
      Spicetify.Player?.playUri(uri);
    }
  });
  const sliderContainer = document.createElement("div");
  sliderContainer.className = "bulk-delete-slider-container";
  const currentTime = document.createElement("span");
  currentTime.className = "bulk-delete-slider-time";
  currentTime.textContent = "0:00";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.className = "bulk-delete-slider";
  slider.min = "0";
  slider.max = duration > 0 ? duration.toString() : "1000";
  slider.value = "0";
  slider.step = "1000";
  const totalTime = document.createElement("span");
  totalTime.className = "bulk-delete-slider-time";
  totalTime.textContent = formatTime(duration);
  slider.addEventListener("input", () => {
    currentTime.textContent = formatTime(parseInt(slider.value));
  });
  slider.addEventListener("change", () => {
    try {
      Spicetify.Player?.seek(parseInt(slider.value));
    } catch (e) {
    }
  });
  sliderContainer.appendChild(currentTime);
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(totalTime);
  container.appendChild(playBtn);
  container.appendChild(sliderContainer);
  return container;
}
function createTrackImage(url) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "bulk-delete-track-image-container";
  const img = document.createElement("img");
  img.className = "bulk-delete-track-image";
  img.src = url || "";
  img.loading = "lazy";
  img.onerror = () => {
    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23282828' d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'/%3E%3C/svg%3E";
  };
  imgContainer.appendChild(img);
  return imgContainer;
}
function createPlayingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "bulk-delete-playing-indicator";
  return indicator;
}
async function getPlaylistTracks(playlistUri) {
  const tracks = [];
  try {
    const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
    if (!PlaylistAPI) {
      throw new Error("PlaylistAPI not available");
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
          let imageUrl = "";
          let duration = 0;
          let uid = item.uid || "";
          if (item.name) name = item.name;
          if (item.artists?.[0]?.name) artist = item.artists[0].name;
          if (item.album?.name) album = item.album.name;
          if (item.album?.coverArt?.sources?.[0]?.url) imageUrl = item.album.coverArt.sources[0].url;
          if (item.duration?.totalMs) duration = item.duration.totalMs;
          tracks.push({
            uri: item.uri,
            name,
            artist,
            album,
            imageUrl,
            duration,
            uid
          });
        }
      }
    }
  } catch (e) {
    throw e;
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
    const currentPlayingUri = Spicetify.Player?.data?.item?.uri || null;
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      const isPlaying = currentPlayingUri === track.uri;
      const item = document.createElement("div");
      item.className = "bulk-delete-item" + (selectedSet.has(track.uri) ? " selected" : "");
      const trackNumber = document.createElement("span");
      trackNumber.className = "bulk-delete-track-number";
      if (isPlaying) {
        trackNumber.appendChild(createPlayingIndicator());
      } else {
        trackNumber.textContent = (i + 1).toString();
      }
      const image = createTrackImage(track.imageUrl);
      const info = document.createElement("div");
      info.className = "bulk-delete-item-info";
      const title = document.createElement("span");
      title.className = "bulk-delete-item-title";
      title.textContent = track.name;
      const artist = document.createElement("span");
      artist.className = "bulk-delete-item-artist";
      artist.textContent = track.artist;
      const album = document.createElement("span");
      album.className = "bulk-delete-item-album";
      album.textContent = track.album;
      info.appendChild(title);
      info.appendChild(artist);
      info.appendChild(album);
      const playback = createPlaybackControl(track.uri, track.duration);
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
      item.appendChild(trackNumber);
      item.appendChild(checkboxWrapper);
      item.appendChild(image);
      item.appendChild(info);
      item.appendChild(playback);
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
      Spicetify.showNotification("Failed to load tracks", true);
    }
  }
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylistsWithDeletePermission();
      allPlaylists.sort((a, b) => a.name.localeCompare(b.name));
      for (const playlist of allPlaylists) {
        const option = document.createElement("option");
        option.value = playlist.uri;
        option.textContent = playlist.name;
        playlistSelect.appendChild(option);
      }
      if (trackUris.length > 0 && allPlaylists.length > 0) {
        let foundPlaylist = null;
        for (const playlist of allPlaylists) {
          try {
            const tracks = await getPlaylistTracks(playlist.uri);
            const trackUrisSet = new Set(tracks.map((t) => t.uri));
            const hasSelectedTrack = trackUris.some((uri) => trackUrisSet.has(uri));
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
          const currentUris = new Set(currentTracks.map((t) => t.uri));
          for (const uri of trackUris) {
            if (currentUris.has(uri)) {
              selectedSet.add(uri);
            }
          }
          trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
            const checkbox = item.querySelector(".bulk-delete-checkbox");
            const titleEl = item.querySelector(".bulk-delete-item-title");
            if (titleEl) {
              const track = currentTracks.find((t) => t.name === titleEl.textContent);
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
function shouldAdd(uris, uids, contextUri) {
  return uris.some((uri) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && uriObj.type === "track";
  });
}
var bulkDeleteMenuItem = new Spicetify.ContextMenu.Item(
  "Delete from Playlist",
  handleMenuClick,
  shouldAdd,
  "trashbin"
);
bulkDeleteMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlUGxheWxpc3Qvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlUGxheWxpc3Qvc3JjL21vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2J1bGtEZWxldGVQbGF5bGlzdC9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYnVsay1kZWxldGUtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RvciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICMzZjNmM2Y7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nJTIzYjNiM2IzJyUzRSUzQ3BhdGggZD0nTTcgMTBsNSA1IDUtNXonLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEycHggY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gtaWNvbiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoIGlucHV0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWluZm8ge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxMjEyMTI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW5mbyBwIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW5mbyBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idWxrLWRlbGV0ZS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uYnVsay1kZWxldGUtZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE4NSwgODQsIDAuMSk7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWluZy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYnVsay1kZWxldGUtcHVsc2UgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYnVsay1kZWxldGUtcHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0taW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFydGlzdCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hbGJ1bSB7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWJhY2stY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvbiB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtcGxheWJhY2stYnV0dG9uIHN2ZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZsZXg6IDE7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXItdGltZSB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1pbi13aWR0aDogMzVweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlciB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0YTRhNGE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXI6aG92ZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b20ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveDpjaGVja2VkICsgLmJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICMxZGI5NTQ7XG4gIGJvcmRlci1jb2xvcjogIzFkYjk1NDtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94OmNoZWNrZWQgKyAuYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0taW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFsYnVtIHtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWxlY3QtYWxsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxZGI5NTQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuLmJ1bGstZGVsZXRlLXNlbGVjdC1hbGw6aG92ZXIge1xuICBjb2xvcjogIzFlZDc2MDtcbn1cblxuLmJ1bGstZGVsZXRlLWJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MjcyNzI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmNhbmNlbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGUge1xuICBiYWNrZ3JvdW5kOiAjZTkxNDI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjZjAzNzI3O1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmRlbGV0ZTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM1MzUzNTM7XG4gIGNvbG9yOiAjMTgxODE4O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjAsIDQxLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXdhcm5pbmcgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNlOTE0Mjk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59YCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbnRlcmZhY2UgUGxheWxpc3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVyaTogc3RyaW5nO1xuICBjYW5EZWxldGU6IGJvb2xlYW47XG4gIGNhbkFkZFRvOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgVHJhY2sge1xuICB1cmk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhcnRpc3Q6IHN0cmluZztcbiAgYWxidW06IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgdWlkOiBzdHJpbmc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsTGlicmFyeUNvbnRlbnRzKCk6IFByb21pc2U8b2JqZWN0W10+IHtcbiAgY29uc3QgTGlicmFyeUFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uTGlicmFyeUFQSTtcbiAgaWYgKCFMaWJyYXJ5QVBJKSByZXR1cm4gW107XG4gIFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpYnJhcnlBUEkuZ2V0Q29udGVudHMoe1xuICAgIG9mZnNldDogMCxcbiAgICBsaW1pdDogMTAwMDAwMDAsXG4gICAgZmxhdHRlblRyZWU6IHRydWUsXG4gIH0pO1xuICBcbiAgcmV0dXJuIHJlc3BvbnNlPy5pdGVtcyB8fCBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RzV2l0aERlbGV0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxQbGF5bGlzdFtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpO1xuICAgIFxuICAgIGNvbnN0IHBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgY29uc3QgcGxheWxpc3QgPSBpdGVtIGFzIHsgdHlwZT86IHN0cmluZzsgY2FuRGVsZXRlPzogYm9vbGVhbjsgY2FuQWRkVG8/OiBib29sZWFuOyBuYW1lPzogc3RyaW5nOyB1cmk/OiBzdHJpbmcgfTtcbiAgICAgIGlmIChwbGF5bGlzdC50eXBlID09PSBcInBsYXlsaXN0XCIgJiYgKHBsYXlsaXN0LmNhbkRlbGV0ZSB8fCBwbGF5bGlzdC5jYW5BZGRUbykpIHtcbiAgICAgICAgcGxheWxpc3RzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHBsYXlsaXN0Lm5hbWUgfHwgXCJVbmtub3duXCIsXG4gICAgICAgICAgdXJpOiBwbGF5bGlzdC51cmkgfHwgXCJcIixcbiAgICAgICAgICBjYW5EZWxldGU6IHBsYXlsaXN0LmNhbkRlbGV0ZSB8fCBmYWxzZSxcbiAgICAgICAgICBjYW5BZGRUbzogcGxheWxpc3QuY2FuQWRkVG8gfHwgZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGxheWxpc3RzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobXM6IG51bWJlciB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmIChtcyA9PSBudWxsIHx8IG1zIDw9IDApIHJldHVybiBcIjA6MDBcIjtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwKTtcbiAgcmV0dXJuIGAke01hdGguZmxvb3IocyAvIDYwKX06JHsocyAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5YmFja0NvbnRyb2wodXJpOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzXCI7XG4gIGNvbnRhaW5lci5kYXRhc2V0LnVyaSA9IHVyaTtcbiAgXG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5QnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWJhY2stYnV0dG9uXCI7XG4gIHBsYXlCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gO1xuICBcbiAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyO1xuICAgICAgaWYgKCFwbGF5ZXIpIHJldHVybjtcbiAgICAgIFxuICAgICAgY29uc3QgY3VycmVudFVyaSA9IHBsYXllcj8uZGF0YT8uaXRlbT8udXJpO1xuICAgICAgaWYgKGN1cnJlbnRVcmkgPT09IHVyaSkge1xuICAgICAgICBpZiAocGxheWVyPy5pc1BsYXlpbmcoKSkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5wbGF5VXJpKHVyaSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyPy5wbGF5VXJpKHVyaSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNsaWRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNsaWRlci1jb250YWluZXJcIjtcbiAgXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGN1cnJlbnRUaW1lLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyLXRpbWVcIjtcbiAgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBcIjA6MDBcIjtcbiAgXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gIHNsaWRlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNsaWRlclwiO1xuICBzbGlkZXIubWluID0gXCIwXCI7XG4gIHNsaWRlci5tYXggPSBkdXJhdGlvbiA+IDAgPyBkdXJhdGlvbi50b1N0cmluZygpIDogXCIxMDAwXCI7XG4gIHNsaWRlci52YWx1ZSA9IFwiMFwiO1xuICBzbGlkZXIuc3RlcCA9IFwiMTAwMFwiO1xuICBcbiAgY29uc3QgdG90YWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRvdGFsVGltZS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNsaWRlci10aW1lXCI7XG4gIHRvdGFsVGltZS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUoZHVyYXRpb24pO1xuICBcbiAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHBhcnNlSW50KHNsaWRlci52YWx1ZSkpO1xuICB9KTtcbiAgXG4gIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcj8uc2VlayhwYXJzZUludChzbGlkZXIudmFsdWUpKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9KTtcbiAgXG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGltZSk7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxUaW1lKTtcbiAgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlckNvbnRhaW5lcik7XG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFja0ltYWdlKHVybDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1pbWFnZS1jb250YWluZXJcIjtcbiAgXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXRyYWNrLWltYWdlXCI7XG4gIGltZy5zcmMgPSB1cmwgfHwgXCJcIjtcbiAgaW1nLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgXG4gIGltZy5vbmVycm9yID0gKCkgPT4ge1xuICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFJTNDcGF0aCBmaWxsPSclMjMyODI4MjgnIGQ9J00xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnonLyUzRSUzQy9zdmclM0VcIjtcbiAgfTtcbiAgXG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICByZXR1cm4gaW1nQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5aW5nSW5kaWNhdG9yKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5kaWNhdG9yLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWluZy1pbmRpY2F0b3JcIjtcbiAgcmV0dXJuIGluZGljYXRvcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpOiBQcm9taXNlPFRyYWNrW10+IHtcbiAgY29uc3QgdHJhY2tzOiBUcmFja1tdID0gW107XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IFBsYXlsaXN0QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5QbGF5bGlzdEFQSTtcbiAgICBcbiAgICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5bGlzdEFQSSBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFBsYXlsaXN0QVBJLmdldENvbnRlbnRzKHBsYXlsaXN0VXJpLCB7XG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBsaW1pdDogLTEsXG4gICAgfSk7XG4gICAgXG4gICAgaWYgKHJlc3BvbnNlPy5pdGVtcykge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHJlc3BvbnNlLml0ZW1zKSB7XG4gICAgICAgIGlmIChpdGVtPy51cmkpIHtcbiAgICAgICAgICBsZXQgbmFtZSA9IFwiVW5rbm93biBUcmFja1wiO1xuICAgICAgICAgIGxldCBhcnRpc3QgPSBcIlVua25vd24gQXJ0aXN0XCI7XG4gICAgICAgICAgbGV0IGFsYnVtID0gXCJVbmtub3duIEFsYnVtXCI7XG4gICAgICAgICAgbGV0IGltYWdlVXJsID0gXCJcIjtcbiAgICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICAgIGxldCB1aWQgPSBpdGVtLnVpZCB8fCBcIlwiO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChpdGVtLm5hbWUpIG5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgaWYgKGl0ZW0uYXJ0aXN0cz8uWzBdPy5uYW1lKSBhcnRpc3QgPSBpdGVtLmFydGlzdHNbMF0ubmFtZTtcbiAgICAgICAgICBpZiAoaXRlbS5hbGJ1bT8ubmFtZSkgYWxidW0gPSBpdGVtLmFsYnVtLm5hbWU7XG4gICAgICAgICAgaWYgKGl0ZW0uYWxidW0/LmNvdmVyQXJ0Py5zb3VyY2VzPy5bMF0/LnVybCkgaW1hZ2VVcmwgPSBpdGVtLmFsYnVtLmNvdmVyQXJ0LnNvdXJjZXNbMF0udXJsO1xuICAgICAgICAgIGlmIChpdGVtLmR1cmF0aW9uPy50b3RhbE1zKSBkdXJhdGlvbiA9IGl0ZW0uZHVyYXRpb24udG90YWxNcztcbiAgICAgICAgICBcbiAgICAgICAgICB0cmFja3MucHVzaCh7XG4gICAgICAgICAgICB1cmk6IGl0ZW0udXJpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFydGlzdCxcbiAgICAgICAgICAgIGFsYnVtLFxuICAgICAgICAgICAgaW1hZ2VVcmwsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGU7XG4gIH1cbiAgXG4gIHJldHVybiB0cmFja3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUcmFja3NGcm9tUGxheWxpc3QoXG4gIHBsYXlsaXN0VXJpOiBzdHJpbmcsXG4gIHRyYWNrVXJpczogc3RyaW5nW11cbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG4gIFxuICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGZvciAoY29uc3QgdHJhY2tVcmkgb2YgdHJhY2tVcmlzKSB7XG4gICAgICBhd2FpdCBQbGF5bGlzdEFQSS5yZW1vdmUocGxheWxpc3RVcmksIHRyYWNrVXJpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQ29uZmlybU1vZGFsKFxuICB0cmFja0NvdW50OiBudW1iZXIsXG4gIHBsYXlsaXN0TmFtZTogc3RyaW5nLFxuICBvbkNvbmZpcm06ICgpID0+IHZvaWQsXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4pIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLW92ZXJsYXlcIjtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1jb250ZW50XCI7XG4gIFxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWhlYWRlclwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUcmFja3NcIjtcbiAgXG4gIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3YXJuaW5nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nXCI7XG4gIHdhcm5pbmcuaW5uZXJIVE1MID0gYFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjZ6XCIvPjwvc3ZnPlxuICAgIDxwPlRoaXMgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgPHN0cm9uZz4ke3RyYWNrQ291bnR9PC9zdHJvbmc+IHRyYWNrKHMpIGZyb20gPHN0cm9uZz4ke3BsYXlsaXN0TmFtZX08L3N0cm9uZz4uIFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9wPlxuICBgO1xuICBcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWJ1dHRvbnNcIjtcbiAgXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBvbkNhbmNlbCgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgb25Db25maXJtKCk7XG4gIH0pO1xuICBcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm5pbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICBcbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgb25DYW5jZWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwodHJhY2tVcmlzOiBzdHJpbmdbXSkge1xuICBsZXQgYWxsUGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGxldCBjdXJyZW50VHJhY2tzOiBUcmFja1tdID0gW107XG4gIGxldCBmaWx0ZXJlZFRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBsZXQgY3VycmVudFBsYXlsaXN0VXJpOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1tb2RhbFwiO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb250ZW50XCI7XG4gIFxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1oZWFkZXJcIjtcbiAgXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJCdWxrIERlbGV0ZSBmcm9tIFBsYXlsaXN0XCI7XG4gIFxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaGVhZGVyLXJpZ2h0XCI7XG4gIFxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1naXRodWJcIjtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmltTWFybGV5NDIwL3NwaWNldGlmeS1leHRlbnNpb25cIjtcbiAgZ2l0aHViTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBnaXRodWJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJPcGVuIEdpdEh1YiByZXBvc2l0b3J5XCIpO1xuICBnaXRodWJMaW5rLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jbG9zZVwiO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPjwvc3ZnPmA7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5yZW1vdmUoKSk7XG4gIFxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcbiAgXG4gIGNvbnN0IHBsYXlsaXN0U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5bGlzdFNlbGVjdG9yLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0b3JcIjtcbiAgXG4gIGNvbnN0IHBsYXlsaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHBsYXlsaXN0TGFiZWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbFwiO1xuICBwbGF5bGlzdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgUGxheWxpc3RcIjtcbiAgXG4gIGNvbnN0IHBsYXlsaXN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcGxheWxpc3RTZWxlY3QuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RcIjtcbiAgXG4gIHBsYXlsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocGxheWxpc3RMYWJlbCk7XG4gIHBsYXlsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocGxheWxpc3RTZWxlY3QpO1xuICBcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VhcmNoXCI7XG4gIFxuICBjb25zdCBzZWFyY2hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoV3JhcHBlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlYXJjaC13cmFwcGVyXCI7XG4gIFxuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoSWNvbi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlYXJjaC1pY29uXCI7XG4gIHNlYXJjaEljb24uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdHJhY2tzIGluIHBsYXlsaXN0Li4uXCI7XG4gIHNlYXJjaElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgXG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoV3JhcHBlcik7XG4gIFxuICBjb25zdCB0cmFja0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0luZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1pbmZvXCI7XG4gIHRyYWNrSW5mby5pbm5lckhUTUwgPSBgPHA+PHNwYW4+MDwvc3Bhbj4gdHJhY2socykgc2VsZWN0ZWQgZnJvbSBwbGF5bGlzdDwvcD5gO1xuICBcbiAgY29uc3QgdHJhY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tMaXN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtbGlzdFwiO1xuICBcbiAgY29uc3QgZW1wdHlTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtcHR5U3RhdGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gIFxuICBmdW5jdGlvbiByZW5kZXJUcmFja3ModHJhY2tzOiBUcmFja1tdKSB7XG4gICAgdHJhY2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgaWYgKHRyYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVtcHR5TXNnID0gc2VhcmNoSW5wdXQudmFsdWUgPyBcIk5vIHRyYWNrcyBmb3VuZFwiIDogXCJQbGF5bGlzdCBpcyBlbXB0eVwiO1xuICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZW1wdHkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICAgICAgZW1wdHkudGV4dENvbnRlbnQgPSBlbXB0eU1zZztcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRQbGF5aW5nVXJpID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcj8uZGF0YT8uaXRlbT8udXJpIHx8IG51bGw7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gdHJhY2tzW2ldO1xuICAgICAgY29uc3QgaXNQbGF5aW5nID0gY3VycmVudFBsYXlpbmdVcmkgPT09IHRyYWNrLnVyaTtcbiAgICAgIFxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbVwiICsgKHNlbGVjdGVkU2V0Lmhhcyh0cmFjay51cmkpID8gXCIgc2VsZWN0ZWRcIiA6IFwiXCIpO1xuICAgICAgXG4gICAgICBjb25zdCB0cmFja051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdHJhY2tOdW1iZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1udW1iZXJcIjtcbiAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgdHJhY2tOdW1iZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGxheWluZ0luZGljYXRvcigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrTnVtYmVyLnRleHRDb250ZW50ID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZVRyYWNrSW1hZ2UodHJhY2suaW1hZ2VVcmwpO1xuICAgICAgXG4gICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGluZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWluZm9cIjtcbiAgICAgIFxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbS10aXRsZVwiO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0cmFjay5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBhcnRpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGFydGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0XCI7XG4gICAgICBhcnRpc3QudGV4dENvbnRlbnQgPSB0cmFjay5hcnRpc3Q7XG4gICAgICBcbiAgICAgIGNvbnN0IGFsYnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhbGJ1bS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYWxidW1cIjtcbiAgICAgIGFsYnVtLnRleHRDb250ZW50ID0gdHJhY2suYWxidW07XG4gICAgICBcbiAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhcnRpc3QpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhbGJ1bSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHBsYXliYWNrID0gY3JlYXRlUGxheWJhY2tDb250cm9sKHRyYWNrLnVyaSwgdHJhY2suZHVyYXRpb24pO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlclwiO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gc2VsZWN0ZWRTZXQuaGFzKHRyYWNrLnVyaSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGN1c3RvbUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tXCI7XG4gICAgICBcbiAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tib3gpO1xuICAgICAgXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5hZGQodHJhY2sudXJpKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5kZWxldGUodHJhY2sudXJpKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodHJhY2tOdW1iZXIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChwbGF5YmFjayk7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBmaWx0ZXJUcmFja3MoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGZpbHRlcmVkVHJhY2tzID0gY3VycmVudFRyYWNrcy5maWx0ZXIodCA9PiBcbiAgICAgIHQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fFxuICAgICAgdC5hcnRpc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHxcbiAgICAgIHQuYWxidW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSlcbiAgICApO1xuICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tJbmZvLmlubmVySFRNTCA9IGA8cD48c3Bhbj4ke3NlbGVjdGVkQ291bnR9PC9zcGFuPiB0cmFjayhzKSBzZWxlY3RlZCBmcm9tIHBsYXlsaXN0PC9wPmA7XG4gICAgZGVsZXRlQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvdW50ID09PSBmaWx0ZXJlZFRyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVzZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpIHtcbiAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJMb2FkaW5nIHRyYWNrcy4uLlwiO1xuICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY3VycmVudFRyYWNrcyA9IGF3YWl0IGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpKTtcbiAgICAgIGZpbHRlcmVkVHJhY2tzID0gWy4uLmN1cnJlbnRUcmFja3NdO1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHNlYXJjaElucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJGYWlsZWQgdG8gbG9hZCB0cmFja3NcIjtcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGxvYWQgdHJhY2tzXCIsIHRydWUpO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0cygpIHtcbiAgICB0cnkge1xuICAgICAgYWxsUGxheWxpc3RzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdHNXaXRoRGVsZXRlUGVybWlzc2lvbigpO1xuICAgICAgXG4gICAgICBhbGxQbGF5bGlzdHMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgYWxsUGxheWxpc3RzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHBsYXlsaXN0LnVyaTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGxheWxpc3QubmFtZTtcbiAgICAgICAgcGxheWxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPiAwICYmIGFsbFBsYXlsaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBmb3VuZFBsYXlsaXN0OiBQbGF5bGlzdCB8IG51bGwgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBwbGF5bGlzdCBvZiBhbGxQbGF5bGlzdHMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gYXdhaXQgZ2V0UGxheWxpc3RUcmFja3MocGxheWxpc3QudXJpKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrVXJpc1NldCA9IG5ldyBTZXQodHJhY2tzLm1hcCh0ID0+IHQudXJpKSk7XG4gICAgICAgICAgICBjb25zdCBoYXNTZWxlY3RlZFRyYWNrID0gdHJhY2tVcmlzLnNvbWUodXJpID0+IHRyYWNrVXJpc1NldC5oYXModXJpKSk7XG4gICAgICAgICAgICBpZiAoaGFzU2VsZWN0ZWRUcmFjaykge1xuICAgICAgICAgICAgICBmb3VuZFBsYXlsaXN0ID0gcGxheWxpc3Q7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChmb3VuZFBsYXlsaXN0KSB7XG4gICAgICAgICAgcGxheWxpc3RTZWxlY3QudmFsdWUgPSBmb3VuZFBsYXlsaXN0LnVyaTtcbiAgICAgICAgICBjdXJyZW50UGxheWxpc3RVcmkgPSBmb3VuZFBsYXlsaXN0LnVyaTtcbiAgICAgICAgICBhd2FpdCBsb2FkUGxheWxpc3RUcmFja3MoZm91bmRQbGF5bGlzdC51cmkpO1xuICAgICAgICAgIFxuICAgICAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICAgICAgY29uc3QgY3VycmVudFVyaXMgPSBuZXcgU2V0KGN1cnJlbnRUcmFja3MubWFwKHQgPT4gdC51cmkpKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHVyaSBvZiB0cmFja1VyaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXJpcy5oYXModXJpKSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZFNldC5hZGQodXJpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsay1kZWxldGUtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtaXRlbS10aXRsZVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0aXRsZUVsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gY3VycmVudFRyYWNrcy5maW5kKHQgPT4gdC5uYW1lID09PSB0aXRsZUVsLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgaWYgKHRyYWNrICYmIHNlbGVjdGVkU2V0Lmhhcyh0cmFjay51cmkpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIFxuICBsb2FkUGxheWxpc3RzKCk7XG4gIFxuICBwbGF5bGlzdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVyaSA9IHBsYXlsaXN0U2VsZWN0LnZhbHVlO1xuICAgIGlmIChzZWxlY3RlZFVyaSkge1xuICAgICAgY3VycmVudFBsYXlsaXN0VXJpID0gc2VsZWN0ZWRVcmk7XG4gICAgICBhd2FpdCBsb2FkUGxheWxpc3RUcmFja3Moc2VsZWN0ZWRVcmkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWxpc3RVcmkgPSBudWxsO1xuICAgICAgY3VycmVudFRyYWNrcyA9IFtdO1xuICAgICAgZmlsdGVyZWRUcmFja3MgPSBbXTtcbiAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICBzZWFyY2hJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVtcHR5LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZW1wdHlcIjtcbiAgICAgIGVtcHR5LnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmaWx0ZXJUcmFja3MpO1xuICBcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnV0dG9uc1wiO1xuICBcbiAgY29uc3Qgc2VsZWN0QWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VsZWN0QWxsQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VsZWN0LWFsbFwiO1xuICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgc2VsZWN0QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkU2V0LnNpemUgPT09IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkVHJhY2tzLmZvckVhY2godCA9PiBzZWxlY3RlZFNldC5hZGQodC51cmkpKTtcbiAgICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkdyb3VwLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnV0dG9uLWdyb3VwXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50UGxheWxpc3RVcmkpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBwbGF5bGlzdCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSk7XG4gICAgY29uc3QgcGxheWxpc3ROYW1lID0gcGxheWxpc3Q/Lm5hbWUgfHwgXCJVbmtub3duIFBsYXlsaXN0XCI7XG4gICAgY29uc3QgdHJhY2tDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgXG4gICAgY3JlYXRlRGVsZXRlQ29uZmlybU1vZGFsKFxuICAgICAgdHJhY2tDb3VudCxcbiAgICAgIHBsYXlsaXN0TmFtZSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2tVcmlzVG9EZWxldGUgPSBBcnJheS5mcm9tKHNlbGVjdGVkU2V0KTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGRlbGV0ZVRyYWNrc0Zyb21QbGF5bGlzdChjdXJyZW50UGxheWxpc3RVcmkhLCB0cmFja1VyaXNUb0RlbGV0ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBEZWxldGVkICR7dHJhY2tDb3VudH0gdHJhY2socykgZnJvbSBwbGF5bGlzdGApO1xuICAgICAgICAgIFxuICAgICAgICAgIGN1cnJlbnRUcmFja3MgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXModC51cmkpKTtcbiAgICAgICAgICBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlcmVkVHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXModC51cmkpKTtcbiAgICAgICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBkZWxldGUgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9KTtcbiAgXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIFxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5bGlzdFNlbGVjdG9yKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrSW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tMaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICBcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBwbGF5bGlzdFNlbGVjdC5mb2N1cygpO1xufSIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKHVyaXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IHVyaXMuZmlsdGVyKCh1cmk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyBhbnkpLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgfSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgY3JlYXRlTW9kYWwodHJhY2tVcmlzKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkQWRkKHVyaXM6IHN0cmluZ1tdLCB1aWRzPzogc3RyaW5nW10sIGNvbnRleHRVcmk/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHVyaXMuc29tZSgodXJpOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgICByZXR1cm4gdXJpT2JqICYmICh1cmlPYmogYXMgYW55KS50eXBlID09PSBcInRyYWNrXCI7XG4gIH0pO1xufVxuXG5jb25zdCBidWxrRGVsZXRlTWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51Lkl0ZW0oXG4gIFwiRGVsZXRlIGZyb20gUGxheWxpc3RcIixcbiAgaGFuZGxlTWVudUNsaWNrLFxuICBzaG91bGRBZGQsXG4gIFwidHJhc2hiaW5cIlxuKTtcblxuYnVsa0RlbGV0ZU1lbnVJdGVtLnJlZ2lzdGVyKCk7Il0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQ1UsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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
