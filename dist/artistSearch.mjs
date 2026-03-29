await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// shared/api/parseProps.ts
function parseProps(props) {
  if (!props) return {};
  const parsed = {};
  const mergeProps = (source, target) => {
    if (!source || typeof source !== "object") return;
    for (const key in source) {
      if (Object.hasOwn(source, key)) {
        if (target[key] === void 0) {
          target[key] = source[key];
        }
      }
    }
  };
  mergeProps(props, parsed);
  mergeProps(props.item, parsed);
  mergeProps(props.reference, parsed);
  return parsed;
}

// tasks/shims/jsx-runtime-shim.ts
var { Fragment, jsx, jsxs } = Spicetify.ReactJSX;

// shared/components/icons.tsx
var iconData = {
  search: {
    path: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    size: 24
  },
  play: {
    path: "M8 5v14l11-7z",
    size: 24
  },
  pause: {
    path: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
    size: 24
  },
  editButton: {
    path: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
    size: 24
  },
  settings: {
    path: "M7.96 5.33a2.67 2.67 0 115.34 2.67 2.67 2.67 0 01-5.34-2.67ZM6.67 8A1.33 1.33 0 109.33 8 1.33 1.33 0 006.67 8Zm4.82-4.81a.95.94 0 01-1.1-.75L10.05.55A.47.47 0 009.68.17 8.1 8.1 0 006.32.17.47.47 0 005.96.55L5.61 2.44a.95.95 0 01-1.25.71L2.55 2.51a.47.47 0 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 0 00.14.51L1.97 7.28a.94.94 0 010 1.43L.5 9.95a.47.47 0 00-.14.51 7.98 7.98 0 001.68 2.9.47.47 0 00.51.13l1.81-.65a.94.94 0 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 0 003.36 0 .47.47 0 00.37-.37l.34-1.89a.95.95 0 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 0 00-.14-.5L14.03 8.72a.94.94 0 010-1.44L15.5 6.04a.47.47 0 00.14-.5 7.98 7.98 0 00-1.68-2.9.47.47 0 00-.51-.13l-1.81.65a.95.95 0 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 0 003-1.73l.24-1.3a6.81 6.81 0 011.68 0l.24 1.3a2.28 2.28 0 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 0 000 3.48l1 .85a6.65 6.65 0 01-.84 1.44l-1.24-.44A2.28 2.28 0 009.08 13.32l-.24 1.29a6.8 6.8 0 01-1.69 0l-.23-1.29A2.28 2.28 0 003.91 11.59l-1.24.44a6.65 6.65 0 01-.84-1.44l1-.86a2.27 2.27 0 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
    size: 16
  },
  close: {
    path: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
    size: 32
  },
  duplicate: {
    path: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z",
    size: 16
  }
};
var createReactComponent = (name) => {
  const { path, size: defaultSize } = iconData[name];
  const Component2 = ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ jsx(
    "svg",
    {
      fill,
      height: size,
      role: "img",
      viewBox: `0 0 ${defaultSize} ${defaultSize}`,
      width: size,
      children: /* @__PURE__ */ jsx("path", { d: path })
    }
  );
  Component2.defaultProps = {
    size: defaultSize,
    fill: "currentColor"
  };
  return Component2;
};
var { raw, react, html } = Object.keys(iconData).reduce(
  (acc, name) => {
    acc.raw[name] = iconData[name].path;
    acc.react[name] = createReactComponent(name);
    acc.html[name] = `<path d="${iconData[name].path}"/>`;
    return acc;
  },
  {
    raw: {},
    react: {},
    html: {}
  }
);
var Icons = {
  React: react,
  HTML: html,
  RAW: raw
};

// tasks/shims/react-shim.ts
var {
  Children,
  Component,
  Fragment: Fragment2,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  act,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
} = Spicetify.React;
var react_shim_default = Spicetify.React;

// tasks/shims/react-dom-shim.ts
var {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
} = Spicetify.ReactDOM;
var react_dom_shim_default = Spicetify.ReactDOM;

// shared/styles/popupModal.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`body {
  overflow: hidden !important;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--spice-rgb-shadow), 0.5);
}

.modal__container {
  display: flex;
  flex-direction: column;
  width: 500px;
  max-height: 500px;
  background-color: rgba(var(--spice-rgb-card), 0.95);
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(var(--spice-rgb-shadow), 0.5);
  backdrop-filter: blur(20px) saturate(1.4) brightness(1.2);
}

.modal__container--large {
  width: clamp(550px, 60vw, 650px);
  max-height: 80vh;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 8px;
  border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
}

.modal__titleContainer {
  display: flex;
  gap: 8px;
}

.modal__icon {
  display: flex;
  align-items: center;
}

.modal__title {
  display: flex;
}

.modal__buttonContainer {
  display: flex;
  gap: 8px;
  align-items: center;
}

.modal__buttonContainer .modal__button {
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: var(--spice-highlight);
  border: 0;
  border-radius: 8px;
}

.modal__buttonContainer .modal__button:hover {
  transform: scale(1.1);
}

.modal__buttonContainer .modal__button:active {
  transform: scale(0.9);
}

.modal__content {
  display: flex;
  padding: 16px 24px;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}

.modal__content > * {
  width: 100%;
}
`);
var popupModal_default = sheet;

// shared/components/popupModal.tsx
document.adoptedStyleSheets.push(popupModal_default);
var modalRoot = null;
var modalContainerId = "popup-modal-container";
var closeModal = () => {
  const container = document.getElementById(modalContainerId);
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  if (container) {
    container.remove();
  }
  document.body.style.overflow = "auto";
};
var ModalComponent = memo(
  ({ title, content, isLarge, buttons, icon, template, onClose }) => {
    const modalRef = useRef(null);
    useEffect(() => {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
    const handleClose = () => {
      onClose();
    };
    const handleBackdropClick = (event) => {
      if (event.target === modalRef.current) {
        handleClose();
      }
    };
    const renderContent = () => {
      if (isValidElement(content)) {
        return content;
      }
      if (typeof content === "function") {
        const ContentComponent = content;
        return /* @__PURE__ */ jsx(ContentComponent, {});
      }
      return content;
    };
    if (template === true) {
      return /* @__PURE__ */ jsx("div", { className: "modal", onClick: handleBackdropClick, ref: modalRef, children: /* @__PURE__ */ jsxs("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "modal__header", children: [
          /* @__PURE__ */ jsxs("div", { className: "modal__titleContainer", children: [
            icon && /* @__PURE__ */ jsx("div", { className: "modal__icon", children: icon }),
            title && /* @__PURE__ */ jsx("h1", { className: "modal__title", children: title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "modal__buttonContainer", children: [
            buttons,
            /* @__PURE__ */ jsx(Spicetify.ReactComponent.TooltipWrapper, { label: "Close", placement: "top", children: /* @__PURE__ */ jsx("button", { className: "modal__button modal__button--close", onClick: handleClose, children: /* @__PURE__ */ jsx(Icons.React.close, { size: 18 }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "modal__content", children: renderContent() })
      ] }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "modal", onClick: handleBackdropClick, ref: modalRef, children: /* @__PURE__ */ jsx("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: renderContent() }) });
  }
);
var PopupModal = (props) => {
  if (document.getElementById(modalContainerId)) {
    closeModal();
  }
  const container = document.createElement("div");
  container.id = modalContainerId;
  document.body.appendChild(container);
  modalRoot = createRoot(container);
  modalRoot.render(/* @__PURE__ */ jsx(ModalComponent, { ...props, onClose: closeModal }));
};
PopupModal.hide = closeModal;

// extensions/artistSearch/src/searchModal.tsx
var formatDuration = (ms) => {
  const seconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
function ArtistSearchModal({ artistUri, artistName }) {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const searchTimeoutRef = useRef(null);
  const inputRef = useRef(null);
  const fetchAlbumTracks = async (albumUri, albumName, coverArt) => {
    try {
      const response = await Spicetify.Platform.GraphQLLoader(
        Spicetify.GraphQL.Definitions.queryAlbumTracks,
        {
          uri: albumUri,
          locale: Spicetify.Locale.getLocale(),
          offset: 0,
          limit: 5e3
        }
      );
      const albumData = response?.data?.albumUnion;
      const tracksV2 = albumData?.tracksV2;
      if (!tracksV2?.items) return [];
      const items = tracksV2.items;
      if (!Array.isArray(items)) return [];
      const results = [];
      for (const item of items) {
        const track = item?.track;
        if (!track) continue;
        const images = coverArt || track?.album?.coverArt?.sources || [];
        const artists = Array.isArray(track?.artists) ? track.artists : [];
        results.push({
          uri: track?.uri || "",
          name: track?.name || "",
          duration_ms: track?.duration?.totalMs || 0,
          album: {
            name: albumName,
            images: images.map((img) => ({ url: img?.url || "" }))
          },
          artists: artists.map((a) => ({ name: a?.profile?.name || a?.name || "" }))
        });
      }
      return results;
    } catch (err) {
      console.error("[Artist Search] Error fetching album tracks:", albumUri, err);
      return [];
    }
  };
  const fetchArtistTracks = async () => {
    try {
      const response = await Spicetify.Platform.GraphQLLoader(
        Spicetify.GraphQL.Definitions.queryArtistDiscographyAll,
        {
          uri: artistUri,
          locale: Spicetify.Locale.getLocale(),
          offset: 0,
          limit: 50
        }
      );
      const discography = response?.data?.artistUnion?.discography;
      if (!discography?.all?.items) return [];
      const allTracks = [];
      for (const item of discography.all.items) {
        const releases = item?.releases?.items;
        if (!releases) continue;
        for (const release of releases) {
          if (!release?.uri) continue;
          const albumUri = release.uri;
          const albumName = release.name || "";
          const coverArt = release.coverArt?.sources || [];
          const albumTracks = await fetchAlbumTracks(albumUri, albumName, coverArt);
          allTracks.push(...albumTracks);
        }
      }
      return allTracks;
    } catch (err) {
      console.error("[Artist Search] Error fetching artist tracks:", err);
      return [];
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    const loadTracks = async () => {
      setLoading(true);
      setError(null);
      const fetchedTracks = await fetchArtistTracks();
      setTracks(fetchedTracks);
      setLoading(false);
    };
    loadTracks();
  }, [artistUri]);
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    if (query.trim()) {
      searchTimeoutRef.current = window.setTimeout(() => {
      }, 300);
    }
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query]);
  const filteredTracks = query.trim() ? tracks.filter(
    (track) => track.name.toLowerCase().includes(query.toLowerCase()) || track.album.name.toLowerCase().includes(query.toLowerCase())
  ) : tracks;
  const playTrack = (trackUri) => {
    Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {});
  };
  const addToQueue = async (trackUri) => {
    await Spicetify.Platform.PlayerAPI.addToQueue([{ uri: trackUri }]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "artist-search-modal", children: [
    /* @__PURE__ */ jsxs("div", { className: "artist-search-input-container", children: [
      /* @__PURE__ */ jsx("span", { className: "artist-search-icon", children: /* @__PURE__ */ jsx(Icons.React.search, { size: 20 }) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "artist-search-input",
          onChange: (e) => setQuery(e.target.value),
          placeholder: `Search in ${artistName}'s tracks...`,
          ref: inputRef,
          type: "text",
          value: query
        }
      ),
      query && /* @__PURE__ */ jsx("button", { className: "artist-search-clear", onClick: () => setQuery(""), children: /* @__PURE__ */ jsx(Icons.React.close, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "artist-search-results", children: loading ? /* @__PURE__ */ jsxs("div", { className: "artist-search-loading", children: [
      /* @__PURE__ */ jsx("div", { className: "artist-search-spinner" }),
      /* @__PURE__ */ jsx("span", { children: "Loading tracks..." })
    ] }) : error ? /* @__PURE__ */ jsx("div", { className: "artist-search-error", children: error }) : !query.trim() && filteredTracks.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "artist-search-hint", children: [
      /* @__PURE__ */ jsx(Icons.React.search, { fill: "var(--spice-subtext)", size: 48 }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Found ",
        filteredTracks.length,
        " tracks from ",
        artistName
      ] })
    ] }) : filteredTracks.length === 0 ? /* @__PURE__ */ jsx("div", { className: "artist-search-no-results", children: /* @__PURE__ */ jsxs("p", { children: [
      'No tracks found matching "',
      query,
      '"'
    ] }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "artist-search-count", children: [
        filteredTracks.length,
        " track",
        filteredTracks.length !== 1 ? "s" : "",
        " found"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "artist-search-track-list", children: filteredTracks.map((track) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `artist-search-track ${selectedTrack === track.uri ? "selected" : ""}`,
          onClick: () => setSelectedTrack(track.uri),
          onDoubleClick: () => playTrack(track.uri),
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: track.album.name,
                className: "artist-search-track-image",
                src: track.album.images[2]?.url || track.album.images[0]?.url || ""
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "artist-search-track-info", children: [
              /* @__PURE__ */ jsx("span", { className: "artist-search-track-name", children: track.name }),
              /* @__PURE__ */ jsx("span", { className: "artist-search-track-artists", children: track.artists.map((a) => a.name).join(", ") })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "artist-search-track-album", children: track.album.name }),
            /* @__PURE__ */ jsx("span", { className: "artist-search-track-duration", children: formatDuration(track.duration_ms) }),
            /* @__PURE__ */ jsxs("div", { className: "artist-search-track-actions", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "artist-search-action-button",
                  onClick: (e) => {
                    e.stopPropagation();
                    playTrack(track.uri);
                  },
                  title: "Play",
                  children: /* @__PURE__ */ jsx(Icons.React.play, { size: 16 })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "artist-search-action-button",
                  onClick: (e) => {
                    e.stopPropagation();
                    addToQueue(track.uri);
                    Spicetify.showNotification("Added to queue");
                  },
                  title: "Add to queue",
                  children: /* @__PURE__ */ jsxs("svg", { fill: "currentColor", height: "16", viewBox: "0 0 16 16", width: "16", children: [
                    /* @__PURE__ */ jsx("path", { d: "M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z" }),
                    /* @__PURE__ */ jsx("path", { d: "M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" })
                  ] })
                }
              )
            ] })
          ]
        },
        track.uri
      )) })
    ] }) })
  ] });
}

// extensions/artistSearch/src/styles.css
var sheet2 = new CSSStyleSheet();
sheet2.replaceSync(`.artist-search-container {
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.artist-search-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--spice-text);
  cursor: pointer;
  background: var(--spice-button);
  border: none;
  border-radius: 20px;
  transition: background 0.15s ease;
}

.artist-search-button:hover {
  background: var(--spice-button-active);
}

.artist-search-modal {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 500px;
}

.artist-search-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.artist-search-icon {
  position: absolute;
  left: 12px;
  display: flex;
  color: var(--spice-subtext);
  pointer-events: none;
}

.artist-search-input {
  width: 100%;
  padding: 12px 40px;
  font-size: 14px;
  color: var(--spice-text);
  outline: none;
  background: var(--spice-input);
  border: 1px solid var(--spice-stroke);
  border-radius: 20px;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.artist-search-input:focus {
  background: var(--spice-main);
  border-color: var(--spice-highlight);
}

.artist-search-input::placeholder {
  color: var(--spice-subtext);
}

.artist-search-clear {
  position: absolute;
  right: 12px;
  display: flex;
  padding: 4px;
  color: var(--spice-subtext);
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 50%;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.artist-search-clear:hover {
  color: var(--spice-text);
  background: var(--spice-card);
}

.artist-search-results {
  flex: 1;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

.artist-search-loading,
.artist-search-hint,
.artist-search-no-results,
.artist-search-error {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 14px;
  color: var(--spice-subtext);
  text-align: center;
}

.artist-search-error {
  color: var(--spice-error);
}

.artist-search-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--spice-stroke);
  border-top-color: var(--spice-highlight);
  border-radius: 50%;
  animation: artist-search-spin 0.8s linear infinite;
}

@keyframes artist-search-spin {
  to {
    transform: rotate(360deg);
  }
}

.artist-search-count {
  padding: 0 4px 8px;
  font-size: 12px;
  color: var(--spice-subtext);
}

.artist-search-track-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.artist-search-track {
  display: grid;
  grid-template-columns: 48px 1fr auto auto auto;
  gap: 12px;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 6px;
  border-bottom: 1px solid rgba(var(--spice-rgb-stroke), 0.3);
  transition: background 0.15s ease;
}

.artist-search-track:hover {
  background: transparent;
}

.artist-search-track.selected {
  background: var(--spice-selected-row);
}

.artist-search-track-image {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
}

.artist-search-track-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.artist-search-track-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  color: var(--spice-text);
  white-space: nowrap;
}

.artist-search-track-artists {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: var(--spice-subtext);
  white-space: nowrap;
}

.artist-search-track-album {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: var(--spice-subtext);
  white-space: nowrap;
}

.artist-search-track-duration {
  min-width: 40px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--spice-subtext);
  text-align: right;
}

.artist-search-track-actions {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.artist-search-track:hover .artist-search-track-actions {
  opacity: 1;
}

.artist-search-action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  color: var(--spice-subtext);
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 50%;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.artist-search-action-button:hover {
  color: var(--spice-text);
  background: var(--spice-card-highlight);
}

.artist-search-load-more {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  font-size: 14px;
  color: var(--spice-text);
  cursor: pointer;
  background: var(--spice-card);
  border: none;
  border-radius: 20px;
  transition: background 0.15s ease;
}

.artist-search-load-more:hover:not(:disabled) {
  background: var(--spice-card-highlight);
}

.artist-search-load-more:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`);
var styles_default = sheet2;

// extensions/artistSearch/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
console.log("[Artist Search] Starting extension initialization...");
window.addEventListener("error", (e) => {
  console.error("[Artist Search] Global error:", e.error);
});
window.addEventListener("unhandledrejection", (e) => {
  console.error("[Artist Search] Unhandled rejection:", e.reason);
});
try {
  const searchArtistMenuItem = new Spicetify.ContextMenuV2.Item({
    children: "Search Artist Tracks",
    leadingIcon: Icons.HTML.search,
    onClick: async (_context, _item, _event) => {
      const context = _context;
      const parsed = parseProps(context.props);
      const uri = parsed.uri;
      if (!uri) {
        console.error("[Artist Search] No URI found in context");
        return;
      }
      const artistUri = uri;
      let artistName = parsed.name;
      if (!artistName) {
        try {
          const metadata = await Spicetify.CosmosAsync.get(
            `sp://core/v1/entity/${encodeURIComponent(artistUri)}`
          );
          artistName = metadata?.name || "Unknown Artist";
        } catch {
          artistName = "Unknown Artist";
        }
      }
      PopupModal({
        title: `Search: ${artistName}`,
        content: /* @__PURE__ */ jsx(ArtistSearchModal, { artistName, artistUri }),
        isLarge: true,
        template: false
      });
    },
    shouldAdd: (props, _trigger, _target) => {
      const parsed = parseProps(props);
      const uri = parsed.uri;
      if (!uri) return false;
      const type = Spicetify.URI.from(uri)?.type;
      return type === Spicetify.URI.Type.ARTIST;
    }
  });
  searchArtistMenuItem.register();
  console.log("[Artist Search] Extension loaded - Right-click on an artist to search their tracks");
} catch (err) {
  console.error("[Artist Search] Error during initialization:", err);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LXNoaW0udHMiLCAiLi4vdGFza3Mvc2hpbXMvcmVhY3QtZG9tLXNoaW0udHMiLCAiLi4vc2hhcmVkL3N0eWxlcy9wb3B1cE1vZGFsLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2FydGlzdFNlYXJjaC9zcmMvc2VhcmNoTW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9zdHlsZXMuY3NzIiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9hcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIE1lcmdlZE9iamVjdCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmludGVyZmFjZSBQcm9wc0lucHV0IGV4dGVuZHMgTWVyZ2VkT2JqZWN0IHtcbiAgaXRlbT86IE1lcmdlZE9iamVjdDtcbiAgcmVmZXJlbmNlPzogTWVyZ2VkT2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wczogUHJvcHNJbnB1dCB8IG51bGwgfCB1bmRlZmluZWQpOiBNZXJnZWRPYmplY3Qge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkOiBNZXJnZWRPYmplY3QgPSB7fTtcblxuICBjb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZTogTWVyZ2VkT2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCwgdGFyZ2V0OiBNZXJnZWRPYmplY3QpID0+IHtcbiAgICBpZiAoIXNvdXJjZSB8fCB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093bihzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG1lcmdlUHJvcHMocHJvcHMsIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMuaXRlbSwgcGFyc2VkKTtcbiAgbWVyZ2VQcm9wcyhwcm9wcy5yZWZlcmVuY2UsIHBhcnNlZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiIsICJleHBvcnQgY29uc3QgeyBGcmFnbWVudCwganN4LCBqc3hzIH0gPSBTcGljZXRpZnkuUmVhY3RKU1g7XG4iLCAiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHNpemU/OiBudW1iZXI7XG4gIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0SWNvbkNvbXBvbmVudCA9IEZDPEljb25Qcm9wcz4gJiB7XG4gIGRlZmF1bHRQcm9wcz86IFBhcnRpYWw8SWNvblByb3BzPjtcbn07XG5cbmNvbnN0IGljb25EYXRhID0ge1xuICBzZWFyY2g6IHtcbiAgICBwYXRoOiBcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBwbGF5OiB7XG4gICAgcGF0aDogXCJNOCA1djE0bDExLTd6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBhdXNlOiB7XG4gICAgcGF0aDogXCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIGVkaXRCdXR0b246IHtcbiAgICBwYXRoOiBcIk0xNy4zMTggMS45NzVhMy4zMjkgMy4zMjkgMCAxMTQuNzA3IDQuNzA3TDguNDUxIDIwLjI1NmMtLjQ5LjQ5LTEuMDgyLjg2Ny0xLjczNSAxLjEwM0wyLjM0IDIyLjk0YTEgMSAwIDAxLTEuMjgtMS4yOGwxLjU4MS00LjM3NmE0LjcyNiA0LjcyNiAwIDAxMS4xMDMtMS43MzVMMTcuMzE4IDEuOTc1em0zLjI5MyAxLjQxNGExLjMyOSAxLjMyOSAwIDAwLTEuODggMEw1LjE1OSAxNi45NjNjLS4yODMuMjgzLS41LjYyNC0uNjM2IDFsLS44NTcgMi4zNzIgMi4zNzEtLjg1N2EyLjcyNiAyLjcyNiAwIDAwMS4wMDEtLjYzNkwyMC42MTEgNS4yNjhhMS4zMjkgMS4zMjkgMCAwMDAtMS44Nzl6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcGF0aDogXCJNNy45NiA1LjMzYTIuNjcgMi42NyAwIDExNS4zNCAyLjY3IDIuNjcgMi42NyAwIDAxLTUuMzQtMi42N1pNNi42NyA4QTEuMzMgMS4zMyAwIDEwOS4zMyA4IDEuMzMgMS4zMyAwIDAwNi42NyA4Wm00LjgyLTQuODFhLjk1Ljk0IDAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgMCAwMDkuNjguMTcgOC4xIDguMSAwIDAwNi4zMi4xNy40Ny40NyAwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDAgMDEtMS4yNS43MUwyLjU1IDIuNTFhLjQ3LjQ3IDAgMDAtLjUxLjEzQzEuMjggMy40Ny43MSA0LjQ2LjM2IDUuNTNhLjQ3LjQ3IDAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCAwIDAxMCAxLjQzTC41IDkuOTVhLjQ3LjQ3IDAgMDAtLjE0LjUxIDcuOTggNy45OCAwIDAwMS42OCAyLjkuNDcuNDcgMCAwMC41MS4xM2wxLjgxLS42NWEuOTQuOTQgMCAwMTEuMjUuNzJsLjM0IDEuODljLjA0LjE4LjE4LjMzLjM3LjM3YTguMSA4LjEgMCAwMDMuMzYgMCAuNDcuNDcgMCAwMC4zNy0uMzdsLjM0LTEuODlhLjk1Ljk1IDAgMDExLjI1LS43MmwxLjgxLjY1Yy4xOC4wNi4zOC4wMS41MS0uMTMuNzYtLjg0IDEuMzQtMS44MiAxLjY4LTIuOWEuNDcuNDcgMCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgMCAwMTAtMS40NEwxNS41IDYuMDRhLjQ3LjQ3IDAgMDAuMTQtLjUgNy45OCA3Ljk4IDAgMDAtMS42OC0yLjkuNDcuNDcgMCAwMC0uNTEtLjEzbC0xLjgxLjY1YS45NS45NSAwIDAxLS4xNS4wNFptLTguODIuNzggMS4yNS40NGEyLjI4IDIuMjggMCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSAwIDAxMS42OCAwbC4yNCAxLjNhMi4yOCAyLjI4IDAgMDAzLjAxIDEuNzNsMS4yNC0uNDRjLjM0LjQ0LjYzLjkzLjg0IDEuNDRsLTEgLjg1YTIuMjcgMi4yNyAwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSAwIDAxLS44NCAxLjQ0bC0xLjI0LS40NEEyLjI4IDIuMjggMCAwMDkuMDggMTMuMzJsLS4yNCAxLjI5YTYuOCA2LjggMCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCAwIDAwMy45MSAxMS41OWwtMS4yNC40NGE2LjY1IDYuNjUgMCAwMS0uODQtMS40NGwxLS44NmEyLjI3IDIuMjcgMCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgcGF0aDogXCJNMzEuMDk4IDI5Ljc5NCAxNi45NTUgMTUuNjUgMzEuMDk3IDEuNTEgMjkuNjgzLjA5MyAxNS41NCAxNC4yMzcgMS40LjA5NC0uMDE2IDEuNTA4IDE0LjEyNiAxNS42NS0uMDE2IDI5Ljc5NWwxLjQxNCAxLjQxNEwxNS41NCAxNy4wNjVsMTQuMTQ0IDE0LjE0M1wiLFxuICAgIHNpemU6IDMyLFxuICB9LFxuICBkdXBsaWNhdGU6IHtcbiAgICBwYXRoOiBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgSWNvbk5hbWUgPSBrZXlvZiB0eXBlb2YgaWNvbkRhdGE7XG5cbmNvbnN0IGNyZWF0ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWU6IEljb25OYW1lKTogUmVhY3RJY29uQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgeyBwYXRoLCBzaXplOiBkZWZhdWx0U2l6ZSB9ID0gaWNvbkRhdGFbbmFtZV07XG4gIGNvbnN0IENvbXBvbmVudDogUmVhY3RJY29uQ29tcG9uZW50ID0gKHsgc2l6ZSA9IGRlZmF1bHRTaXplLCBmaWxsID0gXCJjdXJyZW50Q29sb3JcIiB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICA+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IGRlZmF1bHRTaXplLFxuICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gIH07XG4gIHJldHVybiBDb21wb25lbnQ7XG59O1xuXG5pbnRlcmZhY2UgSWNvbkNvbGxlY3Rpb24ge1xuICByYXc6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbiAgcmVhY3Q6IFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PjtcbiAgaHRtbDogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xufVxuXG5jb25zdCB7IHJhdywgcmVhY3QsIGh0bWwgfSA9IChPYmplY3Qua2V5cyhpY29uRGF0YSkgYXMgSWNvbk5hbWVbXSkucmVkdWNlPEljb25Db2xsZWN0aW9uPihcbiAgKGFjYywgbmFtZSkgPT4ge1xuICAgIGFjYy5yYXdbbmFtZV0gPSBpY29uRGF0YVtuYW1lXS5wYXRoO1xuICAgIGFjYy5yZWFjdFtuYW1lXSA9IGNyZWF0ZVJlYWN0Q29tcG9uZW50KG5hbWUpO1xuICAgIGFjYy5odG1sW25hbWVdID0gYDxwYXRoIGQ9XCIke2ljb25EYXRhW25hbWVdLnBhdGh9XCIvPmA7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge1xuICAgIHJhdzoge30gYXMgUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+LFxuICAgIHJlYWN0OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD4sXG4gICAgaHRtbDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+LFxuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IEljb25zID0ge1xuICBSZWFjdDogcmVhY3QsXG4gIEhUTUw6IGh0bWwsXG4gIFJBVzogcmF3LFxufTtcbiIsICJleHBvcnQgY29uc3Qge1xuICBDaGlsZHJlbixcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudCxcbiAgUHJvZmlsZXIsXG4gIFB1cmVDb21wb25lbnQsXG4gIFN0cmljdE1vZGUsXG4gIFN1c3BlbnNlLFxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgYWN0LFxuICBjbG9uZUVsZW1lbnQsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZUZhY3RvcnksXG4gIGNyZWF0ZVJlZixcbiAgZm9yd2FyZFJlZixcbiAgaXNWYWxpZEVsZW1lbnQsXG4gIGxhenksXG4gIG1lbW8sXG4gIHN0YXJ0VHJhbnNpdGlvbixcbiAgdW5zdGFibGVfYWN0LFxuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRGVidWdWYWx1ZSxcbiAgdXNlRGVmZXJyZWRWYWx1ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VJZCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0LFxuICB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZHVjZXIsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlLFxuICB1c2VUcmFuc2l0aW9uLFxuICB2ZXJzaW9uLFxufSA9IFNwaWNldGlmeS5SZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgU3BpY2V0aWZ5LlJlYWN0O1xuIiwgImV4cG9ydCBjb25zdCB7XG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFxuICBjcmVhdGVQb3J0YWwsXG4gIGNyZWF0ZVJvb3QsXG4gIGZpbmRET01Ob2RlLFxuICBmbHVzaFN5bmMsXG4gIGh5ZHJhdGUsXG4gIGh5ZHJhdGVSb290LFxuICByZW5kZXIsXG4gIHVubW91bnRDb21wb25lbnRBdE5vZGUsXG4gIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLFxuICB1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3RET007XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdERPTTtcbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2hhZG93KSwgMC41KTtcbn1cblxuLm1vZGFsX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1jYXJkKSwgMC45NSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2hhZG93KSwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDEuNCkgYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lci0tbGFyZ2Uge1xuICB3aWR0aDogY2xhbXAoNTUwcHgsIDYwdncsIDY1MHB4KTtcbiAgbWF4LWhlaWdodDogODB2aDtcbn1cblxuLm1vZGFsX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMycHggMzJweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xufVxuXG4ubW9kYWxfX3RpdGxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5tb2RhbF9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbF9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4ubW9kYWxfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGUgYm90aC1lZGdlcztcbn1cblxuLm1vZGFsX19jb250ZW50ID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudFR5cGUsIEZDLCBLZXlib2FyZEV2ZW50LCBNb3VzZUV2ZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50LCBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCwgdHlwZSBSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3B1cE1vZGFsLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcHVwTW9kYWxQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb250ZW50OiBSZWFjdE5vZGUgfCBDb21wb25lbnRUeXBlPGFueT47XG4gIGlzTGFyZ2U/OiBib29sZWFuO1xuICBidXR0b25zPzogUmVhY3ROb2RlO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICB0ZW1wbGF0ZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBNb2RhbENvbXBvbmVudFByb3BzIGV4dGVuZHMgUG9wdXBNb2RhbFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxubGV0IG1vZGFsUm9vdDogUm9vdCB8IG51bGwgPSBudWxsO1xuY29uc3QgbW9kYWxDb250YWluZXJJZCA9IFwicG9wdXAtbW9kYWwtY29udGFpbmVyXCI7XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQ29udGFpbmVySWQpO1xuICBpZiAobW9kYWxSb290KSB7XG4gICAgbW9kYWxSb290LnVubW91bnQoKTtcbiAgICBtb2RhbFJvb3QgPSBudWxsO1xuICB9XG4gIGlmIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufTtcblxuY29uc3QgTW9kYWxDb21wb25lbnQ6IEZDPE1vZGFsQ29tcG9uZW50UHJvcHM+ID0gbWVtbyhcbiAgKHsgdGl0bGUsIGNvbnRlbnQsIGlzTGFyZ2UsIGJ1dHRvbnMsIGljb24sIHRlbXBsYXRlLCBvbkNsb3NlIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duIGFzIGFueSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24gYXMgYW55KTtcbiAgICAgIH07XG4gICAgfSwgW29uQ2xvc2VdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgb25DbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxSZWYuY3VycmVudCkge1xuICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCk6IFJlYWN0Tm9kZSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY29udGVudCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBDb250ZW50Q29tcG9uZW50ID0gY29udGVudCBhcyBDb21wb25lbnRUeXBlO1xuICAgICAgICByZXR1cm4gPENvbnRlbnRDb21wb25lbnQgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9O1xuXG4gICAgaWYgKHRlbXBsYXRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbGlja30gcmVmPXttb2RhbFJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pY29uXCI+e2ljb259PC9kaXY+fVxuICAgICAgICAgICAgICAgIHt0aXRsZSAmJiA8aDEgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+e3RpdGxlfTwvaDE+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkNsb3NlXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fY29udGVudFwiPntyZW5kZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsX19jb250YWluZXIke2lzTGFyZ2UgPyBcIiBtb2RhbF9fY29udGFpbmVyLS1sYXJnZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICB7cmVuZGVyQ29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgUG9wdXBNb2RhbCA9IChwcm9wczogUG9wdXBNb2RhbFByb3BzKTogdm9pZCA9PiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbENvbnRhaW5lcklkKSkge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaWQgPSBtb2RhbENvbnRhaW5lcklkO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbW9kYWxSb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuICBtb2RhbFJvb3QucmVuZGVyKDxNb2RhbENvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2xvc2U9e2Nsb3NlTW9kYWx9IC8+KTtcbn07XG5cblBvcHVwTW9kYWwuaGlkZSA9IGNsb3NlTW9kYWw7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3hcIjtcblxuaW50ZXJmYWNlIFRyYWNrIHtcbiAgdXJpOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZHVyYXRpb25fbXM6IG51bWJlcjtcbiAgYWxidW06IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2VzOiBBcnJheTx7IHVybDogc3RyaW5nIH0+O1xuICB9O1xuICBhcnRpc3RzOiBBcnJheTx7IG5hbWU6IHN0cmluZyB9Pjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXJ0aXN0VXJpOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgZm9ybWF0RHVyYXRpb24gPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBzZWNvbmRzICUgNjA7XG4gIHJldHVybiBgJHttaW51dGVzfToke3JlbWFpbmluZ1NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RTZWFyY2hNb2RhbCh7IGFydGlzdFVyaSwgYXJ0aXN0TmFtZSB9OiBQcm9wcykge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGU8VHJhY2tbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHNlYXJjaFRpbWVvdXRSZWYgPSB1c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoQWxidW1UcmFja3MgPSBhc3luYyAoYWxidW1Vcmk6IHN0cmluZywgYWxidW1OYW1lOiBzdHJpbmcsIGNvdmVyQXJ0OiBhbnlbXSk6IFByb21pc2U8VHJhY2tbXT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uR3JhcGhRTExvYWRlcihcbiAgICAgICAgU3BpY2V0aWZ5LkdyYXBoUUwuRGVmaW5pdGlvbnMucXVlcnlBbGJ1bVRyYWNrcyxcbiAgICAgICAge1xuICAgICAgICAgIHVyaTogYWxidW1VcmksXG4gICAgICAgICAgbG9jYWxlOiBTcGljZXRpZnkuTG9jYWxlLmdldExvY2FsZSgpLFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogNTAwMCxcbiAgICAgICAgfSxcbiAgICAgICkpIGFzIHsgZGF0YTogYW55IH07XG5cbiAgICAgIGNvbnN0IGFsYnVtRGF0YSA9IHJlc3BvbnNlPy5kYXRhPy5hbGJ1bVVuaW9uO1xuICAgICAgY29uc3QgdHJhY2tzVjIgPSBhbGJ1bURhdGE/LnRyYWNrc1YyO1xuICAgICAgaWYgKCF0cmFja3NWMj8uaXRlbXMpIHJldHVybiBbXTtcblxuICAgICAgY29uc3QgaXRlbXMgPSB0cmFja3NWMi5pdGVtcztcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHJldHVybiBbXTtcblxuICAgICAgY29uc3QgcmVzdWx0czogVHJhY2tbXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrID0gaXRlbT8udHJhY2s7XG4gICAgICAgIGlmICghdHJhY2spIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBjb3ZlckFydCB8fCB0cmFjaz8uYWxidW0/LmNvdmVyQXJ0Py5zb3VyY2VzIHx8IFtdO1xuICAgICAgICBjb25zdCBhcnRpc3RzID0gQXJyYXkuaXNBcnJheSh0cmFjaz8uYXJ0aXN0cykgPyB0cmFjay5hcnRpc3RzIDogW107XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgdXJpOiB0cmFjaz8udXJpIHx8IFwiXCIsXG4gICAgICAgICAgbmFtZTogdHJhY2s/Lm5hbWUgfHwgXCJcIixcbiAgICAgICAgICBkdXJhdGlvbl9tczogdHJhY2s/LmR1cmF0aW9uPy50b3RhbE1zIHx8IDAsXG4gICAgICAgICAgYWxidW06IHtcbiAgICAgICAgICAgIG5hbWU6IGFsYnVtTmFtZSxcbiAgICAgICAgICAgIGltYWdlczogaW1hZ2VzLm1hcCgoaW1nOiBhbnkpID0+ICh7IHVybDogaW1nPy51cmwgfHwgXCJcIiB9KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcnRpc3RzOiBhcnRpc3RzLm1hcCgoYTogYW55KSA9PiAoeyBuYW1lOiBhPy5wcm9maWxlPy5uYW1lIHx8IGE/Lm5hbWUgfHwgXCJcIiB9KSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEVycm9yIGZldGNoaW5nIGFsYnVtIHRyYWNrczpcIiwgYWxidW1VcmksIGVycik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoQXJ0aXN0VHJhY2tzID0gYXN5bmMgKCk6IFByb21pc2U8VHJhY2tbXT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uR3JhcGhRTExvYWRlcihcbiAgICAgICAgU3BpY2V0aWZ5LkdyYXBoUUwuRGVmaW5pdGlvbnMucXVlcnlBcnRpc3REaXNjb2dyYXBoeUFsbCxcbiAgICAgICAge1xuICAgICAgICAgIHVyaTogYXJ0aXN0VXJpLFxuICAgICAgICAgIGxvY2FsZTogU3BpY2V0aWZ5LkxvY2FsZS5nZXRMb2NhbGUoKSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDUwLFxuICAgICAgICB9LFxuICAgICAgKSkgYXMgeyBkYXRhOiBhbnkgfTtcblxuICAgICAgY29uc3QgZGlzY29ncmFwaHkgPSByZXNwb25zZT8uZGF0YT8uYXJ0aXN0VW5pb24/LmRpc2NvZ3JhcGh5O1xuICAgICAgaWYgKCFkaXNjb2dyYXBoeT8uYWxsPy5pdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgICBjb25zdCBhbGxUcmFja3M6IFRyYWNrW10gPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRpc2NvZ3JhcGh5LmFsbC5pdGVtcykge1xuICAgICAgICBjb25zdCByZWxlYXNlcyA9IGl0ZW0/LnJlbGVhc2VzPy5pdGVtcztcbiAgICAgICAgaWYgKCFyZWxlYXNlcykgY29udGludWU7XG5cbiAgICAgICAgZm9yIChjb25zdCByZWxlYXNlIG9mIHJlbGVhc2VzKSB7XG4gICAgICAgICAgaWYgKCFyZWxlYXNlPy51cmkpIGNvbnRpbnVlO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGFsYnVtVXJpID0gcmVsZWFzZS51cmk7XG4gICAgICAgICAgY29uc3QgYWxidW1OYW1lID0gcmVsZWFzZS5uYW1lIHx8IFwiXCI7XG4gICAgICAgICAgY29uc3QgY292ZXJBcnQgPSByZWxlYXNlLmNvdmVyQXJ0Py5zb3VyY2VzIHx8IFtdO1xuXG4gICAgICAgICAgY29uc3QgYWxidW1UcmFja3MgPSBhd2FpdCBmZXRjaEFsYnVtVHJhY2tzKGFsYnVtVXJpLCBhbGJ1bU5hbWUsIGNvdmVyQXJ0KTtcbiAgICAgICAgICBhbGxUcmFja3MucHVzaCguLi5hbGJ1bVRyYWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFsbFRyYWNrcztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gRXJyb3IgZmV0Y2hpbmcgYXJ0aXN0IHRyYWNrczpcIiwgZXJyKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZFRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgIGNvbnN0IGZldGNoZWRUcmFja3MgPSBhd2FpdCBmZXRjaEFydGlzdFRyYWNrcygpO1xuICAgICAgc2V0VHJhY2tzKGZldGNoZWRUcmFja3MpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBsb2FkVHJhY2tzKCk7XG4gIH0sIFthcnRpc3RVcmldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeS50cmltKCkpIHtcbiAgICAgIHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgY29uc3QgZmlsdGVyZWRUcmFja3MgPSBxdWVyeS50cmltKClcbiAgICA/IHRyYWNrcy5maWx0ZXIoXG4gICAgICAgICh0cmFjaykgPT5cbiAgICAgICAgICB0cmFjay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICB0cmFjay5hbGJ1bS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSksXG4gICAgICApXG4gICAgOiB0cmFja3M7XG5cbiAgY29uc3QgcGxheVRyYWNrID0gKHRyYWNrVXJpOiBzdHJpbmcpID0+IHtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoeyB1cmk6IHRyYWNrVXJpIH0sIHt9KTtcbiAgfTtcblxuICBjb25zdCBhZGRUb1F1ZXVlID0gYXN5bmMgKHRyYWNrVXJpOiBzdHJpbmcpID0+IHtcbiAgICBhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLmFkZFRvUXVldWUoW3sgdXJpOiB0cmFja1VyaSB9XSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1pY29uXCI+XG4gICAgICAgICAgPEljb25zLlJlYWN0LnNlYXJjaCBzaXplPXsyMH0gLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCBpbiAke2FydGlzdE5hbWV9J3MgdHJhY2tzLi4uYH1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIC8+XG4gICAgICAgIHtxdWVyeSAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWNsZWFyXCIgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoXCJcIil9PlxuICAgICAgICAgICAgPEljb25zLlJlYWN0LmNsb3NlIHNpemU9ezE2fSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1yZXN1bHRzXCI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1sb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtc3Bpbm5lclwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nIHRyYWNrcy4uLjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1lcnJvclwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgKSA6ICFxdWVyeS50cmltKCkgJiYgZmlsdGVyZWRUcmFja3MubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1oaW50XCI+XG4gICAgICAgICAgICA8SWNvbnMuUmVhY3Quc2VhcmNoIGZpbGw9XCJ2YXIoLS1zcGljZS1zdWJ0ZXh0KVwiIHNpemU9ezQ4fSAvPlxuICAgICAgICAgICAgPHA+Rm91bmQge2ZpbHRlcmVkVHJhY2tzLmxlbmd0aH0gdHJhY2tzIGZyb20ge2FydGlzdE5hbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogZmlsdGVyZWRUcmFja3MubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1uby1yZXN1bHRzXCI+XG4gICAgICAgICAgICA8cD5ObyB0cmFja3MgZm91bmQgbWF0Y2hpbmcgXCJ7cXVlcnl9XCI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1jb3VudFwiPlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRUcmFja3MubGVuZ3RofSB0cmFja3tmaWx0ZXJlZFRyYWNrcy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9IGZvdW5kXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1saXN0XCI+XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFRyYWNrcy5tYXAoKHRyYWNrKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXJ0aXN0LXNlYXJjaC10cmFjayAke3NlbGVjdGVkVHJhY2sgPT09IHRyYWNrLnVyaSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgIGtleT17dHJhY2sudXJpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUcmFjayh0cmFjay51cmkpfVxuICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4gcGxheVRyYWNrKHRyYWNrLnVyaSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9e3RyYWNrLmFsYnVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2staW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RyYWNrLmFsYnVtLmltYWdlc1syXT8udXJsIHx8IHRyYWNrLmFsYnVtLmltYWdlc1swXT8udXJsIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1uYW1lXCI+e3RyYWNrLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWFydGlzdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dHJhY2suYXJ0aXN0cy5tYXAoKGEpID0+IGEubmFtZSkuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stYWxidW1cIj57dHJhY2suYWxidW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXREdXJhdGlvbih0cmFjay5kdXJhdGlvbl9tcyl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlUcmFjayh0cmFjay51cmkpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5wbGF5IHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb1F1ZXVlKHRyYWNrLnVyaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkFkZGVkIHRvIHF1ZXVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gcXVldWVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDFhLjUuNSAwIDAxLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAxLjcwOC43MDhsLTQgNGEuNS41IDAgMDEtLjcwOCAwbC00LTRhLjUuNSAwIDAxLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwMTggMXpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYXJ0aXN0LXNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtYnV0dG9uKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWJ1dHRvbi1hY3RpdmUpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1pbnB1dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNwaWNlLXN0cm9rZSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246XG4gICAgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSxcbiAgICBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1tYWluKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjE1cyBlYXNlLFxuICAgIGNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNsZWFyOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtcmVzdWx0cyB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZGluZyxcbi5hcnRpc3Qtc2VhcmNoLWhpbnQsXG4uYXJ0aXN0LXNlYXJjaC1uby1yZXN1bHRzLFxuLmFydGlzdC1zZWFyY2gtZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLWVycm9yKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtc3Bpbm5lciB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNwaWNlLXN0cm9rZSk7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBhcnRpc3Qtc2VhcmNoLXNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYXJ0aXN0LXNlYXJjaC1zcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmFydGlzdC1zZWFyY2gtY291bnQge1xuICBwYWRkaW5nOiAwIDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmciBhdXRvIGF1dG8gYXV0bztcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc3Ryb2tlKSwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLXNlbGVjdGVkLXJvdyk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWltYWdlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2staW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFydGlzdHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFsYnVtIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1kdXJhdGlvbiB7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6aG92ZXIgLmFydGlzdC1zZWFyY2gtdHJhY2stYWN0aW9ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjE1cyBlYXNlLFxuICAgIGNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZC1tb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkLW1vcmU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkLWhpZ2hsaWdodCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWQtbW9yZTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHsgcGFyc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL3BhcnNlUHJvcHMudHNcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zLnRzeFwiO1xuaW1wb3J0IHsgUG9wdXBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeFwiO1xuaW1wb3J0IHsgQXJ0aXN0U2VhcmNoTW9kYWwgfSBmcm9tIFwiLi9zZWFyY2hNb2RhbC50c3hcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmNvbnNvbGUubG9nKFwiW0FydGlzdCBTZWFyY2hdIFN0YXJ0aW5nIGV4dGVuc2lvbiBpbml0aWFsaXphdGlvbi4uLlwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEdsb2JhbCBlcnJvcjpcIiwgZS5lcnJvcik7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgKGUpID0+IHtcbiAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBVbmhhbmRsZWQgcmVqZWN0aW9uOlwiLCBlLnJlYXNvbik7XG59KTtcblxudHJ5IHtcbiAgY29uc3Qgc2VhcmNoQXJ0aXN0TWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gICAgY2hpbGRyZW46IFwiU2VhcmNoIEFydGlzdCBUcmFja3NcIixcbiAgICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5zZWFyY2gsXG4gICAgb25DbGljazogYXN5bmMgKF9jb250ZXh0OiBhbnksIF9pdGVtOiBhbnksIF9ldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gX2NvbnRleHQgYXMgeyBwcm9wcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH07XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKGNvbnRleHQucHJvcHMpO1xuICAgICAgY29uc3QgdXJpID0gcGFyc2VkLnVyaSBhcyBzdHJpbmc7XG5cbiAgICAgIGlmICghdXJpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gTm8gVVJJIGZvdW5kIGluIGNvbnRleHRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXJ0aXN0VXJpID0gdXJpO1xuICAgICAgbGV0IGFydGlzdE5hbWUgPSBwYXJzZWQubmFtZSBhcyBzdHJpbmc7XG5cbiAgICAgIGlmICghYXJ0aXN0TmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgU3BpY2V0aWZ5LkNvc21vc0FzeW5jLmdldChcbiAgICAgICAgICAgIGBzcDovL2NvcmUvdjEvZW50aXR5LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFydGlzdFVyaSl9YCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGFydGlzdE5hbWUgPSBtZXRhZGF0YT8ubmFtZSB8fCBcIlVua25vd24gQXJ0aXN0XCI7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGFydGlzdE5hbWUgPSBcIlVua25vd24gQXJ0aXN0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUG9wdXBNb2RhbCh7XG4gICAgICAgIHRpdGxlOiBgU2VhcmNoOiAke2FydGlzdE5hbWV9YCxcbiAgICAgICAgY29udGVudDogPEFydGlzdFNlYXJjaE1vZGFsIGFydGlzdE5hbWU9e2FydGlzdE5hbWV9IGFydGlzdFVyaT17YXJ0aXN0VXJpfSAvPixcbiAgICAgICAgaXNMYXJnZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG91bGRBZGQ6IChwcm9wczogYW55LCBfdHJpZ2dlcjogYW55LCBfdGFyZ2V0OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMocHJvcHMpO1xuICAgICAgY29uc3QgdXJpID0gcGFyc2VkLnVyaSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAoIXVyaSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpPy50eXBlO1xuICAgICAgcmV0dXJuIHR5cGUgPT09IFNwaWNldGlmeS5VUkkuVHlwZS5BUlRJU1Q7XG4gICAgfSxcbiAgfSk7XG5cbiAgc2VhcmNoQXJ0aXN0TWVudUl0ZW0ucmVnaXN0ZXIoKTtcblxuICBjb25zb2xlLmxvZyhcIltBcnRpc3QgU2VhcmNoXSBFeHRlbnNpb24gbG9hZGVkIC0gUmlnaHQtY2xpY2sgb24gYW4gYXJ0aXN0IHRvIHNlYXJjaCB0aGVpciB0cmFja3NcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBFcnJvciBkdXJpbmcgaW5pdGlhbGl6YXRpb246XCIsIGVycik7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFPTyxTQUFTLFdBQVcsT0FBb0Q7QUFDN0UsTUFBSSxDQUFDLE1BQU8sUUFBTyxDQUFDO0FBRXBCLFFBQU0sU0FBdUIsQ0FBQztBQUU5QixRQUFNLGFBQWEsQ0FBQyxRQUF5QyxXQUF5QjtBQUNwRixRQUFJLENBQUMsVUFBVSxPQUFPLFdBQVcsU0FBVTtBQUMzQyxlQUFXLE9BQU8sUUFBUTtBQUN4QixVQUFJLE9BQU8sT0FBTyxRQUFRLEdBQUcsR0FBRztBQUM5QixZQUFJLE9BQU8sR0FBRyxNQUFNLFFBQVc7QUFDN0IsaUJBQU8sR0FBRyxJQUFJLE9BQU8sR0FBRztBQUFBLFFBQzFCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsYUFBVyxPQUFPLE1BQU07QUFDeEIsYUFBVyxNQUFNLE1BQU0sTUFBTTtBQUM3QixhQUFXLE1BQU0sV0FBVyxNQUFNO0FBRWxDLFNBQU87QUFDVDs7O0FDNUJPLElBQU0sRUFBRSxVQUFVLEtBQUssS0FBSyxJQUFJLFVBQVU7OztBQ1dqRCxJQUFNLFdBQVc7QUFBQSxFQUNmLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0Y7QUFHQSxJQUFNLHVCQUF1QixDQUFDLFNBQXVDO0FBQ25FLFFBQU0sRUFBRSxNQUFNLE1BQU0sWUFBWSxJQUFJLFNBQVMsSUFBSTtBQUNqRCxRQUFNQSxhQUFnQyxDQUFDLEVBQUUsT0FBTyxhQUFhLE9BQU8sZUFBZSxNQUNqRjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLE1BQUs7QUFBQSxNQUNMLFNBQVMsT0FBTyxXQUFXLElBQUksV0FBVztBQUFBLE1BQzFDLE9BQU87QUFBQSxNQUVQLDhCQUFDLFVBQUssR0FBRyxNQUFNO0FBQUE7QUFBQSxFQUNqQjtBQUVGLEVBQUFBLFdBQVUsZUFBZTtBQUFBLElBQ3ZCLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0EsU0FBT0E7QUFDVDtBQVFBLElBQU0sRUFBRSxLQUFLLE9BQU8sS0FBSyxJQUFLLE9BQU8sS0FBSyxRQUFRLEVBQWlCO0FBQUEsRUFDakUsQ0FBQyxLQUFLLFNBQVM7QUFDYixRQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxFQUFFO0FBQy9CLFFBQUksTUFBTSxJQUFJLElBQUkscUJBQXFCLElBQUk7QUFDM0MsUUFBSSxLQUFLLElBQUksSUFBSSxZQUFZLFNBQVMsSUFBSSxFQUFFLElBQUk7QUFDaEQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsSUFDRSxLQUFLLENBQUM7QUFBQSxJQUNOLE9BQU8sQ0FBQztBQUFBLElBQ1IsTUFBTSxDQUFDO0FBQUEsRUFDVDtBQUNGO0FBRU8sSUFBTSxRQUFRO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUNQOzs7QUN2Rk8sSUFBTTtBQUFBLEVBQ1g7QUFBQSxFQUNBO0FBQUEsRUFDQSxVQUFBQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLElBQUksVUFBVTtBQUVkLElBQU8scUJBQVEsVUFBVTs7O0FDdkNsQixJQUFNO0FBQUEsRUFDWCxvREFBQUM7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxTQUFBQztBQUNGLElBQUksVUFBVTtBQUVkLElBQU8seUJBQVEsVUFBVTs7O0FDZGYsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LHFCQUN2RTtBQUFBO0FBQUEsY0FDRjtBQUFBLGVBQ0Y7QUFBQTtBQUFBO0FBQUEsUUE1Q0ssTUFBTTtBQUFBLE1BNkNiLENBQ0QsR0FDSDtBQUFBLE9BQ0YsR0FFSjtBQUFBLEtBQ0Y7QUFFSjs7O0FDNVFVLElBQU1DLFNBQVEsSUFBSSxjQUFjO0FBQ2hDQSxPQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FxUTNCO0FBQ1MsSUFBTyxpQkFBUUE7OztBQ2xRekIsU0FBUyxtQkFBbUIsS0FBSyxjQUFNO0FBRXZDLFFBQVEsSUFBSSxzREFBc0Q7QUFFbEUsT0FBTyxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDdEMsVUFBUSxNQUFNLGlDQUFpQyxFQUFFLEtBQUs7QUFDeEQsQ0FBQztBQUVELE9BQU8saUJBQWlCLHNCQUFzQixDQUFDLE1BQU07QUFDbkQsVUFBUSxNQUFNLHdDQUF3QyxFQUFFLE1BQU07QUFDaEUsQ0FBQztBQUVELElBQUk7QUFDRixRQUFNLHVCQUF1QixJQUFJLFVBQVUsY0FBYyxLQUFLO0FBQUEsSUFDNUQsVUFBVTtBQUFBLElBQ1YsYUFBYSxNQUFNLEtBQUs7QUFBQSxJQUN4QixTQUFTLE9BQU8sVUFBZSxPQUFZLFdBQWdCO0FBQ3pELFlBQU0sVUFBVTtBQUNoQixZQUFNLFNBQVMsV0FBVyxRQUFRLEtBQUs7QUFDdkMsWUFBTSxNQUFNLE9BQU87QUFFbkIsVUFBSSxDQUFDLEtBQUs7QUFDUixnQkFBUSxNQUFNLHlDQUF5QztBQUN2RDtBQUFBLE1BQ0Y7QUFFQSxZQUFNLFlBQVk7QUFDbEIsVUFBSSxhQUFhLE9BQU87QUFFeEIsVUFBSSxDQUFDLFlBQVk7QUFDZixZQUFJO0FBQ0YsZ0JBQU0sV0FBVyxNQUFNLFVBQVUsWUFBWTtBQUFBLFlBQzNDLHVCQUF1QixtQkFBbUIsU0FBUyxDQUFDO0FBQUEsVUFDdEQ7QUFDQSx1QkFBYSxVQUFVLFFBQVE7QUFBQSxRQUNqQyxRQUFRO0FBQ04sdUJBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUVBLGlCQUFXO0FBQUEsUUFDVCxPQUFPLFdBQVcsVUFBVTtBQUFBLFFBQzVCLFNBQVMsb0JBQUMscUJBQWtCLFlBQXdCLFdBQXNCO0FBQUEsUUFDMUUsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFdBQVcsQ0FBQyxPQUFZLFVBQWUsWUFBaUI7QUFDdEQsWUFBTSxTQUFTLFdBQVcsS0FBSztBQUMvQixZQUFNLE1BQU0sT0FBTztBQUNuQixVQUFJLENBQUMsSUFBSyxRQUFPO0FBQ2pCLFlBQU0sT0FBTyxVQUFVLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDdEMsYUFBTyxTQUFTLFVBQVUsSUFBSSxLQUFLO0FBQUEsSUFDckM7QUFBQSxFQUNGLENBQUM7QUFFRCx1QkFBcUIsU0FBUztBQUU5QixVQUFRLElBQUksb0ZBQW9GO0FBQ2xHLFNBQVMsS0FBSztBQUNaLFVBQVEsTUFBTSxnREFBZ0QsR0FBRztBQUNuRTsiLAogICJuYW1lcyI6IFsiQ29tcG9uZW50IiwgIkZyYWdtZW50IiwgIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwgInZlcnNpb24iLCAic2hlZXQiXQp9Cg==
