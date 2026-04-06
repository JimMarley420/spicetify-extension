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
  width: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, sans-serif);
}

.add-to-playlist-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
}

.add-to-playlist-track-count {
  padding: 12px 20px;
  font-size: 13px;
  color: #b3b3b3;
}

.add-to-playlist-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
}

.add-to-playlist-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}

.add-to-playlist-item:hover {
  background: #282828;
}

.add-to-playlist-checkbox {
  margin-right: 12px;
  width: 18px;
  height: 18px;
  accent-color: #1db954;
  cursor: pointer;
}

.add-to-playlist-name {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-to-playlist-buttons {
  padding: 16px 20px;
  border-top: 1px solid #282828;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.add-to-playlist-btn {
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.add-to-playlist-btn.cancel {
  background: transparent;
  color: #b3b3b3;
}

.add-to-playlist-btn.cancel:hover {
  color: #fff;
}

.add-to-playlist-btn.confirm {
  background: #1db954;
  color: #000;
}

.add-to-playlist-btn.confirm:hover:not(:disabled) {
  background: #1ed760;
}

.add-to-playlist-btn.confirm:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
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
  for (const playlistUri of playlistUris) {
    try {
      await PlaylistAPI.add(playlistUri, trackUris, []);
    } catch (e) {
      throw e;
    }
  }
}
function createModal(trackUris) {
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
  const selectedSet = /* @__PURE__ */ new Set();
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
  (uris) => uris.length > 0,
  "plus"
);
addToMultiplePlaylistsMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFkZC10by1wbGF5bGlzdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNhbnMtc2VyaWYpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC10cmFjay1jb3VudCB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYWNjZW50LWNvbG9yOiAjMWRiOTU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyODI4Mjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNhbmNlbDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtIHtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNvbmZpcm06aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMWVkNzYwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzUzNTM1MztcbiAgY29sb3I6ICMxODE4MTg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59YCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5pbnRlcmZhY2UgUGxheWxpc3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVyaTogc3RyaW5nO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0cygpOiBQcm9taXNlPFBsYXlsaXN0W10+IHtcbiAgY29uc3QgTGlicmFyeUFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uTGlicmFyeUFQSTtcbiAgXG4gIGlmICghTGlicmFyeUFQSSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpYnJhcnlBUEkuZ2V0Q29udGVudHMoe1xuICAgICAgb2Zmc2V0OiAwLFxuICAgICAgbGltaXQ6IDEwMDAwMDAwLFxuICAgICAgZmxhdHRlblRyZWU6IHRydWUsXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgcGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gICAgY29uc3QgaXRlbXMgPSByZXNwb25zZT8uaXRlbXMgfHwgW107XG4gICAgXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSBcInBsYXlsaXN0XCIgJiYgaXRlbS5jYW5BZGRUbykge1xuICAgICAgICBwbGF5bGlzdHMucHVzaCh7XG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgIHVyaTogaXRlbS51cmksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGxheWxpc3RzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFRyYWNrc1RvUGxheWxpc3RzKHBsYXlsaXN0VXJpczogc3RyaW5nW10sIHRyYWNrVXJpczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICBcbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFBsYXlsaXN0QVBJXCIpO1xuICB9XG4gIFxuICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQbGF5bGlzdEFQSS5hZGQocGxheWxpc3RVcmksIHRyYWNrVXJpcywgW10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRyYWNrVXJpczogc3RyaW5nW10pIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1tb2RhbFwiO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWhlYWRlclwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIjtcbiAgXG4gIGNvbnN0IHRyYWNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0NvdW50LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXRyYWNrLWNvdW50XCI7XG4gIHRyYWNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSBzZWxlY3RlZGA7XG4gIFxuICBjb25zdCBwbGF5bGlzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5bGlzdExpc3QuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbGlzdFwiO1xuICBcbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGF5bGlzdHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0cyA9IGF3YWl0IGZldGNoUGxheWxpc3RzKCk7XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgcGxheWxpc3RzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtaXRlbVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCI7XG4gICAgICAgIFxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKHBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkU2V0LmRlbGV0ZShwbGF5bGlzdC51cmkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25maXJtQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRTZXQuc2l6ZSA9PT0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5hbWUuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbmFtZVwiO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcGxheWxpc3QubmFtZTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcGxheWxpc3RMaXN0LnRleHRDb250ZW50ID0gXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIjtcbiAgICB9XG4gIH1cbiAgXG4gIGxvYWRQbGF5bGlzdHMoKTtcbiAgXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idXR0b25zXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnRuIGNhbmNlbFwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vZGFsLnJlbW92ZSgpKTtcbiAgXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjb25maXJtXCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25maXJtQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgXG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwbGF5bGlzdFVyaXMgPSBBcnJheS5mcm9tKHNlbGVjdGVkU2V0KTtcbiAgICBjb25maXJtQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRpbmcuLi5cIjtcbiAgICBcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYWRkVHJhY2tzVG9QbGF5bGlzdHMocGxheWxpc3RVcmlzLCB0cmFja1VyaXMpO1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oYEFkZGVkICR7dHJhY2tVcmlzLmxlbmd0aH0gdHJhY2socykgdG8gJHtwbGF5bGlzdFVyaXMubGVuZ3RofSBwbGF5bGlzdChzKWApO1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gYWRkIHRyYWNrc1wiLCB0cnVlKTtcbiAgICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIH1cbiAgfSk7XG4gIFxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrQ291bnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBsYXlsaXN0TGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIFxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2sodXJpczogc3RyaW5nW10pIHtcbiAgY29uc3QgdHJhY2tVcmlzID0gdXJpcy5maWx0ZXIoKHVyaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdXJpT2JqID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk7XG4gICAgcmV0dXJuIHVyaU9iaiAmJiAodXJpT2JqIGFzIGFueSkudHlwZSA9PT0gXCJ0cmFja1wiO1xuICB9KTtcbiAgXG4gIGlmICh0cmFja1VyaXMubGVuZ3RoID09PSAwKSB7XG4gICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJObyB0cmFja3Mgc2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBjcmVhdGVNb2RhbCh0cmFja1VyaXMpO1xufVxuXG5jb25zdCBhZGRUb011bHRpcGxlUGxheWxpc3RzTWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51Lkl0ZW0oXG4gIFwiQWRkIHRvIE11bHRpcGxlIFBsYXlsaXN0c1wiLFxuICBoYW5kbGVNZW51Q2xpY2ssXG4gICh1cmlzOiBzdHJpbmdbXSkgPT4gdXJpcy5sZW5ndGggPiAwLFxuICBcInBsdXNcIiBhcyBTcGljZXRpZnkuSWNvblxuKTtcblxuYWRkVG9NdWx0aXBsZVBsYXlsaXN0c01lbnVJdGVtLnJlZ2lzdGVyKCk7Il0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQ1UsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFFNUIsUUFBTSxZQUFZLFNBQVMsY0FBYyxRQUFRO0FBQ2pELFlBQVUsWUFBWTtBQUN0QixZQUFVLGNBQWM7QUFDeEIsWUFBVSxpQkFBaUIsU0FBUyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBRXhELFFBQU0sYUFBYSxTQUFTLGNBQWMsUUFBUTtBQUNsRCxhQUFXLFlBQVk7QUFDdkIsYUFBVyxjQUFjO0FBQ3pCLGFBQVcsV0FBVztBQUV0QixhQUFXLGlCQUFpQixTQUFTLFlBQVk7QUFDL0MsVUFBTSxlQUFlLE1BQU0sS0FBSyxXQUFXO0FBQzNDLGVBQVcsV0FBVztBQUN0QixlQUFXLGNBQWM7QUFFekIsUUFBSTtBQUNGLFlBQU0scUJBQXFCLGNBQWMsU0FBUztBQUNsRCxnQkFBVSxpQkFBaUIsU0FBUyxVQUFVLE1BQU0sZ0JBQWdCLGFBQWEsTUFBTSxjQUFjO0FBQ3JHLFlBQU0sT0FBTztBQUFBLElBQ2YsU0FBUyxHQUFHO0FBQ1YsZ0JBQVUsaUJBQWlCLHdCQUF3QixJQUFJO0FBQ3ZELGlCQUFXLFdBQVc7QUFDdEIsaUJBQVcsY0FBYztBQUFBLElBQzNCO0FBQUEsRUFDRixDQUFDO0FBRUQsa0JBQWdCLFlBQVksU0FBUztBQUNyQyxrQkFBZ0IsWUFBWSxVQUFVO0FBRXRDLFVBQVEsWUFBWSxNQUFNO0FBQzFCLFVBQVEsWUFBWSxVQUFVO0FBQzlCLFVBQVEsWUFBWSxZQUFZO0FBQ2hDLFVBQVEsWUFBWSxlQUFlO0FBRW5DLFFBQU0sWUFBWSxPQUFPO0FBRXpCLFdBQVMsS0FBSyxZQUFZLEtBQUs7QUFFL0IsUUFBTSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDckMsUUFBSSxFQUFFLFdBQVcsT0FBTztBQUN0QixZQUFNLE9BQU87QUFBQSxJQUNmO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFFQSxlQUFlLGdCQUFnQixNQUFnQjtBQUM3QyxRQUFNLFlBQVksS0FBSyxPQUFPLENBQUMsUUFBZ0I7QUFDN0MsVUFBTSxTQUFTLFVBQVUsSUFBSSxLQUFLLEdBQUc7QUFDckMsV0FBTyxVQUFXLE9BQWUsU0FBUztBQUFBLEVBQzVDLENBQUM7QUFFRCxNQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLGNBQVUsaUJBQWlCLHNCQUFzQixJQUFJO0FBQ3JEO0FBQUEsRUFDRjtBQUVBLGNBQVksU0FBUztBQUN2QjtBQUVBLElBQU0saUNBQWlDLElBQUksVUFBVSxZQUFZO0FBQUEsRUFDL0Q7QUFBQSxFQUNBO0FBQUEsRUFDQSxDQUFDLFNBQW1CLEtBQUssU0FBUztBQUFBLEVBQ2xDO0FBQ0Y7QUFFQSwrQkFBK0IsU0FBUzsiLAogICJuYW1lcyI6IFtdCn0K
