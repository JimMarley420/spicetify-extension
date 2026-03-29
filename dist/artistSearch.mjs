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
  const [currentPlayingUri, setCurrentPlayingUri] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
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
    if (currentPlayingUri === trackUri && !isPaused) {
      Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {});
    }
  };
  const addToQueue = async (trackUri) => {
    await Spicetify.Platform.PlayerAPI.addToQueue([{ uri: trackUri }]);
  };
  const updatePlayerState = useCallback(() => {
    const state = Spicetify.Platform.PlayerAPI._state;
    if (state?.item?.uri) {
      setCurrentPlayingUri(state.item.uri);
      setIsPaused(state.isPaused);
    } else {
      setCurrentPlayingUri(null);
      setIsPaused(true);
    }
  }, []);
  useEffect(() => {
    updatePlayerState();
    Spicetify.Platform.PlayerAPI._events.addListener("update", updatePlayerState, {});
    return () => {
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updatePlayerState, {});
    };
  }, [updatePlayerState]);
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
      /* @__PURE__ */ jsx("div", { className: "artist-search-track-list", children: filteredTracks.map((track, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `artist-search-track ${selectedTrack === track.uri ? "selected" : ""} ${currentPlayingUri === track.uri ? "playing" : ""}`,
          onClick: () => setSelectedTrack(track.uri),
          onDoubleClick: () => playTrack(track.uri),
          children: [
            /* @__PURE__ */ jsx("span", { className: "artist-search-track-number", children: index + 1 }),
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
                  title: currentPlayingUri === track.uri && !isPaused ? "Pause" : "Play",
                  children: currentPlayingUri === track.uri && !isPaused ? /* @__PURE__ */ jsx(Icons.React.pause, { size: 16 }) : /* @__PURE__ */ jsx(Icons.React.play, { size: 16 })
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
  grid-template-columns: 32px 48px 1fr auto auto auto;
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
  background: rgba(var(--spice-rgb-card), 0.6);
}

.artist-search-track-number {
  color: var(--spice-subtext);
  font-size: 14px;
  text-align: center;
}

.artist-search-track.playing .artist-search-track-number {
  color: var(--spice-highlight);
}

.artist-search-track-name {
  color: var(--spice-text);
}

.artist-search-track.playing .artist-search-track-name {
  color: var(--spice-highlight);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LXNoaW0udHMiLCAiLi4vdGFza3Mvc2hpbXMvcmVhY3QtZG9tLXNoaW0udHMiLCAiLi4vc2hhcmVkL3N0eWxlcy9wb3B1cE1vZGFsLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2FydGlzdFNlYXJjaC9zcmMvc2VhcmNoTW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9zdHlsZXMuY3NzIiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9hcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIE1lcmdlZE9iamVjdCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmludGVyZmFjZSBQcm9wc0lucHV0IGV4dGVuZHMgTWVyZ2VkT2JqZWN0IHtcbiAgaXRlbT86IE1lcmdlZE9iamVjdDtcbiAgcmVmZXJlbmNlPzogTWVyZ2VkT2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wczogUHJvcHNJbnB1dCB8IG51bGwgfCB1bmRlZmluZWQpOiBNZXJnZWRPYmplY3Qge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkOiBNZXJnZWRPYmplY3QgPSB7fTtcblxuICBjb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZTogTWVyZ2VkT2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCwgdGFyZ2V0OiBNZXJnZWRPYmplY3QpID0+IHtcbiAgICBpZiAoIXNvdXJjZSB8fCB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093bihzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG1lcmdlUHJvcHMocHJvcHMsIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMuaXRlbSwgcGFyc2VkKTtcbiAgbWVyZ2VQcm9wcyhwcm9wcy5yZWZlcmVuY2UsIHBhcnNlZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiIsICJleHBvcnQgY29uc3QgeyBGcmFnbWVudCwganN4LCBqc3hzIH0gPSBTcGljZXRpZnkuUmVhY3RKU1g7XG4iLCAiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHNpemU/OiBudW1iZXI7XG4gIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0SWNvbkNvbXBvbmVudCA9IEZDPEljb25Qcm9wcz4gJiB7XG4gIGRlZmF1bHRQcm9wcz86IFBhcnRpYWw8SWNvblByb3BzPjtcbn07XG5cbmNvbnN0IGljb25EYXRhID0ge1xuICBzZWFyY2g6IHtcbiAgICBwYXRoOiBcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBwbGF5OiB7XG4gICAgcGF0aDogXCJNOCA1djE0bDExLTd6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBhdXNlOiB7XG4gICAgcGF0aDogXCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIGVkaXRCdXR0b246IHtcbiAgICBwYXRoOiBcIk0xNy4zMTggMS45NzVhMy4zMjkgMy4zMjkgMCAxMTQuNzA3IDQuNzA3TDguNDUxIDIwLjI1NmMtLjQ5LjQ5LTEuMDgyLjg2Ny0xLjczNSAxLjEwM0wyLjM0IDIyLjk0YTEgMSAwIDAxLTEuMjgtMS4yOGwxLjU4MS00LjM3NmE0LjcyNiA0LjcyNiAwIDAxMS4xMDMtMS43MzVMMTcuMzE4IDEuOTc1em0zLjI5MyAxLjQxNGExLjMyOSAxLjMyOSAwIDAwLTEuODggMEw1LjE1OSAxNi45NjNjLS4yODMuMjgzLS41LjYyNC0uNjM2IDFsLS44NTcgMi4zNzIgMi4zNzEtLjg1N2EyLjcyNiAyLjcyNiAwIDAwMS4wMDEtLjYzNkwyMC42MTEgNS4yNjhhMS4zMjkgMS4zMjkgMCAwMDAtMS44Nzl6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcGF0aDogXCJNNy45NiA1LjMzYTIuNjcgMi42NyAwIDExNS4zNCAyLjY3IDIuNjcgMi42NyAwIDAxLTUuMzQtMi42N1pNNi42NyA4QTEuMzMgMS4zMyAwIDEwOS4zMyA4IDEuMzMgMS4zMyAwIDAwNi42NyA4Wm00LjgyLTQuODFhLjk1Ljk0IDAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgMCAwMDkuNjguMTcgOC4xIDguMSAwIDAwNi4zMi4xNy40Ny40NyAwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDAgMDEtMS4yNS43MUwyLjU1IDIuNTFhLjQ3LjQ3IDAgMDAtLjUxLjEzQzEuMjggMy40Ny43MSA0LjQ2LjM2IDUuNTNhLjQ3LjQ3IDAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCAwIDAxMCAxLjQzTC41IDkuOTVhLjQ3LjQ3IDAgMDAtLjE0LjUxIDcuOTggNy45OCAwIDAwMS42OCAyLjkuNDcuNDcgMCAwMC41MS4xM2wxLjgxLS42NWEuOTQuOTQgMCAwMTEuMjUuNzJsLjM0IDEuODljLjA0LjE4LjE4LjMzLjM3LjM3YTguMSA4LjEgMCAwMDMuMzYgMCAuNDcuNDcgMCAwMC4zNy0uMzdsLjM0LTEuODlhLjk1Ljk1IDAgMDExLjI1LS43MmwxLjgxLjY1Yy4xOC4wNi4zOC4wMS41MS0uMTMuNzYtLjg0IDEuMzQtMS44MiAxLjY4LTIuOWEuNDcuNDcgMCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgMCAwMTAtMS40NEwxNS41IDYuMDRhLjQ3LjQ3IDAgMDAuMTQtLjUgNy45OCA3Ljk4IDAgMDAtMS42OC0yLjkuNDcuNDcgMCAwMC0uNTEtLjEzbC0xLjgxLjY1YS45NS45NSAwIDAxLS4xNS4wNFptLTguODIuNzggMS4yNS40NGEyLjI4IDIuMjggMCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSAwIDAxMS42OCAwbC4yNCAxLjNhMi4yOCAyLjI4IDAgMDAzLjAxIDEuNzNsMS4yNC0uNDRjLjM0LjQ0LjYzLjkzLjg0IDEuNDRsLTEgLjg1YTIuMjcgMi4yNyAwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSAwIDAxLS44NCAxLjQ0bC0xLjI0LS40NEEyLjI4IDIuMjggMCAwMDkuMDggMTMuMzJsLS4yNCAxLjI5YTYuOCA2LjggMCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCAwIDAwMy45MSAxMS41OWwtMS4yNC40NGE2LjY1IDYuNjUgMCAwMS0uODQtMS40NGwxLS44NmEyLjI3IDIuMjcgMCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgcGF0aDogXCJNMzEuMDk4IDI5Ljc5NCAxNi45NTUgMTUuNjUgMzEuMDk3IDEuNTEgMjkuNjgzLjA5MyAxNS41NCAxNC4yMzcgMS40LjA5NC0uMDE2IDEuNTA4IDE0LjEyNiAxNS42NS0uMDE2IDI5Ljc5NWwxLjQxNCAxLjQxNEwxNS41NCAxNy4wNjVsMTQuMTQ0IDE0LjE0M1wiLFxuICAgIHNpemU6IDMyLFxuICB9LFxuICBkdXBsaWNhdGU6IHtcbiAgICBwYXRoOiBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgSWNvbk5hbWUgPSBrZXlvZiB0eXBlb2YgaWNvbkRhdGE7XG5cbmNvbnN0IGNyZWF0ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWU6IEljb25OYW1lKTogUmVhY3RJY29uQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgeyBwYXRoLCBzaXplOiBkZWZhdWx0U2l6ZSB9ID0gaWNvbkRhdGFbbmFtZV07XG4gIGNvbnN0IENvbXBvbmVudDogUmVhY3RJY29uQ29tcG9uZW50ID0gKHsgc2l6ZSA9IGRlZmF1bHRTaXplLCBmaWxsID0gXCJjdXJyZW50Q29sb3JcIiB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICA+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IGRlZmF1bHRTaXplLFxuICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gIH07XG4gIHJldHVybiBDb21wb25lbnQ7XG59O1xuXG5pbnRlcmZhY2UgSWNvbkNvbGxlY3Rpb24ge1xuICByYXc6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbiAgcmVhY3Q6IFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PjtcbiAgaHRtbDogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xufVxuXG5jb25zdCB7IHJhdywgcmVhY3QsIGh0bWwgfSA9IChPYmplY3Qua2V5cyhpY29uRGF0YSkgYXMgSWNvbk5hbWVbXSkucmVkdWNlPEljb25Db2xsZWN0aW9uPihcbiAgKGFjYywgbmFtZSkgPT4ge1xuICAgIGFjYy5yYXdbbmFtZV0gPSBpY29uRGF0YVtuYW1lXS5wYXRoO1xuICAgIGFjYy5yZWFjdFtuYW1lXSA9IGNyZWF0ZVJlYWN0Q29tcG9uZW50KG5hbWUpO1xuICAgIGFjYy5odG1sW25hbWVdID0gYDxwYXRoIGQ9XCIke2ljb25EYXRhW25hbWVdLnBhdGh9XCIvPmA7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge1xuICAgIHJhdzoge30gYXMgUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+LFxuICAgIHJlYWN0OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD4sXG4gICAgaHRtbDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+LFxuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IEljb25zID0ge1xuICBSZWFjdDogcmVhY3QsXG4gIEhUTUw6IGh0bWwsXG4gIFJBVzogcmF3LFxufTtcbiIsICJleHBvcnQgY29uc3Qge1xuICBDaGlsZHJlbixcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudCxcbiAgUHJvZmlsZXIsXG4gIFB1cmVDb21wb25lbnQsXG4gIFN0cmljdE1vZGUsXG4gIFN1c3BlbnNlLFxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgYWN0LFxuICBjbG9uZUVsZW1lbnQsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZUZhY3RvcnksXG4gIGNyZWF0ZVJlZixcbiAgZm9yd2FyZFJlZixcbiAgaXNWYWxpZEVsZW1lbnQsXG4gIGxhenksXG4gIG1lbW8sXG4gIHN0YXJ0VHJhbnNpdGlvbixcbiAgdW5zdGFibGVfYWN0LFxuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRGVidWdWYWx1ZSxcbiAgdXNlRGVmZXJyZWRWYWx1ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VJZCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0LFxuICB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZHVjZXIsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlLFxuICB1c2VUcmFuc2l0aW9uLFxuICB2ZXJzaW9uLFxufSA9IFNwaWNldGlmeS5SZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgU3BpY2V0aWZ5LlJlYWN0O1xuIiwgImV4cG9ydCBjb25zdCB7XG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFxuICBjcmVhdGVQb3J0YWwsXG4gIGNyZWF0ZVJvb3QsXG4gIGZpbmRET01Ob2RlLFxuICBmbHVzaFN5bmMsXG4gIGh5ZHJhdGUsXG4gIGh5ZHJhdGVSb290LFxuICByZW5kZXIsXG4gIHVubW91bnRDb21wb25lbnRBdE5vZGUsXG4gIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLFxuICB1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3RET007XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdERPTTtcbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2hhZG93KSwgMC41KTtcbn1cblxuLm1vZGFsX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1jYXJkKSwgMC45NSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2hhZG93KSwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDEuNCkgYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lci0tbGFyZ2Uge1xuICB3aWR0aDogY2xhbXAoNTUwcHgsIDYwdncsIDY1MHB4KTtcbiAgbWF4LWhlaWdodDogODB2aDtcbn1cblxuLm1vZGFsX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMycHggMzJweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xufVxuXG4ubW9kYWxfX3RpdGxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5tb2RhbF9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbF9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4ubW9kYWxfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGUgYm90aC1lZGdlcztcbn1cblxuLm1vZGFsX19jb250ZW50ID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudFR5cGUsIEZDLCBLZXlib2FyZEV2ZW50LCBNb3VzZUV2ZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50LCBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCwgdHlwZSBSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3B1cE1vZGFsLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcHVwTW9kYWxQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb250ZW50OiBSZWFjdE5vZGUgfCBDb21wb25lbnRUeXBlPGFueT47XG4gIGlzTGFyZ2U/OiBib29sZWFuO1xuICBidXR0b25zPzogUmVhY3ROb2RlO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICB0ZW1wbGF0ZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBNb2RhbENvbXBvbmVudFByb3BzIGV4dGVuZHMgUG9wdXBNb2RhbFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxubGV0IG1vZGFsUm9vdDogUm9vdCB8IG51bGwgPSBudWxsO1xuY29uc3QgbW9kYWxDb250YWluZXJJZCA9IFwicG9wdXAtbW9kYWwtY29udGFpbmVyXCI7XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQ29udGFpbmVySWQpO1xuICBpZiAobW9kYWxSb290KSB7XG4gICAgbW9kYWxSb290LnVubW91bnQoKTtcbiAgICBtb2RhbFJvb3QgPSBudWxsO1xuICB9XG4gIGlmIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufTtcblxuY29uc3QgTW9kYWxDb21wb25lbnQ6IEZDPE1vZGFsQ29tcG9uZW50UHJvcHM+ID0gbWVtbyhcbiAgKHsgdGl0bGUsIGNvbnRlbnQsIGlzTGFyZ2UsIGJ1dHRvbnMsIGljb24sIHRlbXBsYXRlLCBvbkNsb3NlIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duIGFzIGFueSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24gYXMgYW55KTtcbiAgICAgIH07XG4gICAgfSwgW29uQ2xvc2VdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgb25DbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxSZWYuY3VycmVudCkge1xuICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCk6IFJlYWN0Tm9kZSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY29udGVudCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBDb250ZW50Q29tcG9uZW50ID0gY29udGVudCBhcyBDb21wb25lbnRUeXBlO1xuICAgICAgICByZXR1cm4gPENvbnRlbnRDb21wb25lbnQgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9O1xuXG4gICAgaWYgKHRlbXBsYXRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbGlja30gcmVmPXttb2RhbFJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pY29uXCI+e2ljb259PC9kaXY+fVxuICAgICAgICAgICAgICAgIHt0aXRsZSAmJiA8aDEgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+e3RpdGxlfTwvaDE+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkNsb3NlXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fY29udGVudFwiPntyZW5kZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsX19jb250YWluZXIke2lzTGFyZ2UgPyBcIiBtb2RhbF9fY29udGFpbmVyLS1sYXJnZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICB7cmVuZGVyQ29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgUG9wdXBNb2RhbCA9IChwcm9wczogUG9wdXBNb2RhbFByb3BzKTogdm9pZCA9PiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbENvbnRhaW5lcklkKSkge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaWQgPSBtb2RhbENvbnRhaW5lcklkO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbW9kYWxSb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuICBtb2RhbFJvb3QucmVuZGVyKDxNb2RhbENvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2xvc2U9e2Nsb3NlTW9kYWx9IC8+KTtcbn07XG5cblBvcHVwTW9kYWwuaGlkZSA9IGNsb3NlTW9kYWw7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5cbmludGVyZmFjZSBUcmFjayB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGR1cmF0aW9uX21zOiBudW1iZXI7XG4gIGFsYnVtOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGltYWdlczogQXJyYXk8eyB1cmw6IHN0cmluZyB9PjtcbiAgfTtcbiAgYXJ0aXN0czogQXJyYXk8eyBuYW1lOiBzdHJpbmcgfT47XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFydGlzdFVyaTogc3RyaW5nO1xuICBhcnRpc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGZvcm1hdER1cmF0aW9uID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuICByZXR1cm4gYCR7bWludXRlc306JHtyZW1haW5pbmdTZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0U2VhcmNoTW9kYWwoeyBhcnRpc3RVcmksIGFydGlzdE5hbWUgfTogUHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlPFRyYWNrW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRUcmFjaywgc2V0U2VsZWN0ZWRUcmFja10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nVXJpLCBzZXRDdXJyZW50UGxheWluZ1VyaV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBzZWFyY2hUaW1lb3V0UmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmZXRjaEFsYnVtVHJhY2tzID0gYXN5bmMgKGFsYnVtVXJpOiBzdHJpbmcsIGFsYnVtTmFtZTogc3RyaW5nLCBjb3ZlckFydDogYW55W10pOiBQcm9taXNlPFRyYWNrW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgIFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zLnF1ZXJ5QWxidW1UcmFja3MsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IGFsYnVtVXJpLFxuICAgICAgICAgIGxvY2FsZTogU3BpY2V0aWZ5LkxvY2FsZS5nZXRMb2NhbGUoKSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDUwMDAsXG4gICAgICAgIH0sXG4gICAgICApKSBhcyB7IGRhdGE6IGFueSB9O1xuXG4gICAgICBjb25zdCBhbGJ1bURhdGEgPSByZXNwb25zZT8uZGF0YT8uYWxidW1VbmlvbjtcbiAgICAgIGNvbnN0IHRyYWNrc1YyID0gYWxidW1EYXRhPy50cmFja3NWMjtcbiAgICAgIGlmICghdHJhY2tzVjI/Lml0ZW1zKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdHJhY2tzVjIuaXRlbXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IHJlc3VsdHM6IFRyYWNrW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCB0cmFjayA9IGl0ZW0/LnRyYWNrO1xuICAgICAgICBpZiAoIXRyYWNrKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gY292ZXJBcnQgfHwgdHJhY2s/LmFsYnVtPy5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcbiAgICAgICAgY29uc3QgYXJ0aXN0cyA9IEFycmF5LmlzQXJyYXkodHJhY2s/LmFydGlzdHMpID8gdHJhY2suYXJ0aXN0cyA6IFtdO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHVyaTogdHJhY2s/LnVyaSB8fCBcIlwiLFxuICAgICAgICAgIG5hbWU6IHRyYWNrPy5uYW1lIHx8IFwiXCIsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IHRyYWNrPy5kdXJhdGlvbj8udG90YWxNcyB8fCAwLFxuICAgICAgICAgIGFsYnVtOiB7XG4gICAgICAgICAgICBuYW1lOiBhbGJ1bU5hbWUsXG4gICAgICAgICAgICBpbWFnZXM6IGltYWdlcy5tYXAoKGltZzogYW55KSA9PiAoeyB1cmw6IGltZz8udXJsIHx8IFwiXCIgfSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJ0aXN0czogYXJ0aXN0cy5tYXAoKGE6IGFueSkgPT4gKHsgbmFtZTogYT8ucHJvZmlsZT8ubmFtZSB8fCBhPy5uYW1lIHx8IFwiXCIgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBFcnJvciBmZXRjaGluZyBhbGJ1bSB0cmFja3M6XCIsIGFsYnVtVXJpLCBlcnIpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaEFydGlzdFRyYWNrcyA9IGFzeW5jICgpOiBQcm9taXNlPFRyYWNrW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgIFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zLnF1ZXJ5QXJ0aXN0RGlzY29ncmFwaHlBbGwsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IGFydGlzdFVyaSxcbiAgICAgICAgICBsb2NhbGU6IFNwaWNldGlmeS5Mb2NhbGUuZ2V0TG9jYWxlKCksXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIGxpbWl0OiA1MCxcbiAgICAgICAgfSxcbiAgICAgICkpIGFzIHsgZGF0YTogYW55IH07XG5cbiAgICAgIGNvbnN0IGRpc2NvZ3JhcGh5ID0gcmVzcG9uc2U/LmRhdGE/LmFydGlzdFVuaW9uPy5kaXNjb2dyYXBoeTtcbiAgICAgIGlmICghZGlzY29ncmFwaHk/LmFsbD8uaXRlbXMpIHJldHVybiBbXTtcblxuICAgICAgY29uc3QgYWxsVHJhY2tzOiBUcmFja1tdID0gW107XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkaXNjb2dyYXBoeS5hbGwuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgcmVsZWFzZXMgPSBpdGVtPy5yZWxlYXNlcz8uaXRlbXM7XG4gICAgICAgIGlmICghcmVsZWFzZXMpIGNvbnRpbnVlO1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVsZWFzZSBvZiByZWxlYXNlcykge1xuICAgICAgICAgIGlmICghcmVsZWFzZT8udXJpKSBjb250aW51ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBhbGJ1bVVyaSA9IHJlbGVhc2UudXJpO1xuICAgICAgICAgIGNvbnN0IGFsYnVtTmFtZSA9IHJlbGVhc2UubmFtZSB8fCBcIlwiO1xuICAgICAgICAgIGNvbnN0IGNvdmVyQXJ0ID0gcmVsZWFzZS5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcblxuICAgICAgICAgIGNvbnN0IGFsYnVtVHJhY2tzID0gYXdhaXQgZmV0Y2hBbGJ1bVRyYWNrcyhhbGJ1bVVyaSwgYWxidW1OYW1lLCBjb3ZlckFydCk7XG4gICAgICAgICAgYWxsVHJhY2tzLnB1c2goLi4uYWxidW1UcmFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxUcmFja3M7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEVycm9yIGZldGNoaW5nIGFydGlzdCB0cmFja3M6XCIsIGVycik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICBjb25zdCBmZXRjaGVkVHJhY2tzID0gYXdhaXQgZmV0Y2hBcnRpc3RUcmFja3MoKTtcbiAgICAgIHNldFRyYWNrcyhmZXRjaGVkVHJhY2tzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgbG9hZFRyYWNrcygpO1xuICB9LCBbYXJ0aXN0VXJpXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkudHJpbSgpKSB7XG4gICAgICBzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gcXVlcnkudHJpbSgpXG4gICAgPyB0cmFja3MuZmlsdGVyKFxuICAgICAgICAodHJhY2spID0+XG4gICAgICAgICAgdHJhY2submFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgdHJhY2suYWxidW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgKVxuICAgIDogdHJhY2tzO1xuXG4gIGNvbnN0IHBsYXlUcmFjayA9ICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFja1VyaSAmJiAhaXNQYXVzZWQpIHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2Uoe30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoeyB1cmk6IHRyYWNrVXJpIH0sIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9RdWV1ZSA9IGFzeW5jICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5hZGRUb1F1ZXVlKFt7IHVyaTogdHJhY2tVcmkgfV0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVBsYXllclN0YXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlPy5pdGVtPy51cmkpIHtcbiAgICAgIHNldEN1cnJlbnRQbGF5aW5nVXJpKHN0YXRlLml0ZW0udXJpKTtcbiAgICAgIHNldElzUGF1c2VkKHN0YXRlLmlzUGF1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFBsYXlpbmdVcmkobnVsbCk7XG4gICAgICBzZXRJc1BhdXNlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVBsYXllclN0YXRlKCk7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZVBsYXllclN0YXRlLCB7fSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVQbGF5ZXJTdGF0ZSwge30pO1xuICAgIH07XG4gIH0sIFt1cGRhdGVQbGF5ZXJTdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaWNvblwiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZWFyY2ggc2l6ZT17MjB9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggaW4gJHthcnRpc3ROYW1lfSdzIHRyYWNrcy4uLmB9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgICB7cXVlcnkgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1jbGVhclwiIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KFwiXCIpfT5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxNn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtcmVzdWx0c1wiPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNwaW5uZXJcIiAvPlxuICAgICAgICAgICAgPHNwYW4+TG9hZGluZyB0cmFja3MuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtZXJyb3JcIj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICkgOiAhcXVlcnkudHJpbSgpICYmIGZpbHRlcmVkVHJhY2tzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaGludFwiPlxuICAgICAgICAgICAgPEljb25zLlJlYWN0LnNlYXJjaCBmaWxsPVwidmFyKC0tc3BpY2Utc3VidGV4dClcIiBzaXplPXs0OH0gLz5cbiAgICAgICAgICAgIDxwPkZvdW5kIHtmaWx0ZXJlZFRyYWNrcy5sZW5ndGh9IHRyYWNrcyBmcm9tIHthcnRpc3ROYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbm8tcmVzdWx0c1wiPlxuICAgICAgICAgICAgPHA+Tm8gdHJhY2tzIGZvdW5kIG1hdGNoaW5nIFwie3F1ZXJ5fVwiPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtY291bnRcIj5cbiAgICAgICAgICAgICAge2ZpbHRlcmVkVHJhY2tzLmxlbmd0aH0gdHJhY2t7ZmlsdGVyZWRUcmFja3MubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3VuZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbGlzdFwiPlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRUcmFja3MubWFwKCh0cmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcnRpc3Qtc2VhcmNoLXRyYWNrICR7c2VsZWN0ZWRUcmFjayA9PT0gdHJhY2sudXJpID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gJHtjdXJyZW50UGxheWluZ1VyaSA9PT0gdHJhY2sudXJpID8gXCJwbGF5aW5nXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLnVyaX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVHJhY2sodHJhY2sudXJpKX1cbiAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHBsYXlUcmFjayh0cmFjay51cmkpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbnVtYmVyXCI+e2luZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dHJhY2suYWxidW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzJdPy51cmwgfHwgdHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2staW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWVcIj57dHJhY2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stYXJ0aXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFjay5hcnRpc3RzLm1hcCgoYSkgPT4gYS5uYW1lKS5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hbGJ1bVwiPnt0cmFjay5hbGJ1bS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdER1cmF0aW9uKHRyYWNrLmR1cmF0aW9uX21zKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVRyYWNrKHRyYWNrLnVyaSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y3VycmVudFBsYXlpbmdVcmkgPT09IHRyYWNrLnVyaSAmJiAhaXNQYXVzZWQgPyBcIlBhdXNlXCIgOiBcIlBsYXlcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UGxheWluZ1VyaSA9PT0gdHJhY2sudXJpICYmICFpc1BhdXNlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5wYXVzZSBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zLlJlYWN0LnBsYXkgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9RdWV1ZSh0cmFjay51cmkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJBZGRlZCB0byBxdWV1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIHF1ZXVlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAxYS41LjUgMCAwMS41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwMS43MDguNzA4bC00IDRhLjUuNSAwIDAxLS43MDggMGwtNC00YS41LjUgMCAwMS43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMDE4IDF6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFydGlzdC1zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWJ1dHRvbik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1idXR0b24tYWN0aXZlKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGlzdC1zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtaW5wdXQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zcGljZS1zdHJva2UpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOlxuICAgIGJvcmRlci1jb2xvciAwLjJzIGVhc2UsXG4gICAgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtbWFpbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1jbGVhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQgMC4xNXMgZWFzZSxcbiAgICBjb2xvciAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1jbGVhcjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXJlc3VsdHMge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWRpbmcsXG4uYXJ0aXN0LXNlYXJjaC1oaW50LFxuLmFydGlzdC1zZWFyY2gtbm8tcmVzdWx0cyxcbi5hcnRpc3Qtc2VhcmNoLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1lcnJvcik7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXNwaW5uZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zcGljZS1zdHJva2UpO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYXJ0aXN0LXNlYXJjaC1zcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFydGlzdC1zZWFyY2gtc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNvdW50IHtcbiAgcGFkZGluZzogMCA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCA0OHB4IDFmciBhdXRvIGF1dG8gYXV0bztcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc3Ryb2tlKSwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3BpY2UtcmdiLWNhcmQpLCAwLjYpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1udW1iZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5wbGF5aW5nIC5hcnRpc3Qtc2VhcmNoLXRyYWNrLW51bWJlciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5wbGF5aW5nIC5hcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWUge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2staW1hZ2Uge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stYXJ0aXN0cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stYWxidW0ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWR1cmF0aW9uIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3ZlciAuYXJ0aXN0LXNlYXJjaC10cmFjay1hY3Rpb25zIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFydGlzdC1zZWFyY2gtYWN0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjpcbiAgICBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsXG4gICAgY29sb3IgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZC1oaWdobGlnaHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkLW1vcmUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWQtbW9yZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZC1tb3JlOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC41O1xufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgeyBwYXJzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvcGFyc2VQcm9wcy50c1wiO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5pbXBvcnQgeyBQb3B1cE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4XCI7XG5pbXBvcnQgeyBBcnRpc3RTZWFyY2hNb2RhbCB9IGZyb20gXCIuL3NlYXJjaE1vZGFsLnRzeFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuY29uc29sZS5sb2coXCJbQXJ0aXN0IFNlYXJjaF0gU3RhcnRpbmcgZXh0ZW5zaW9uIGluaXRpYWxpemF0aW9uLi4uXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gR2xvYmFsIGVycm9yOlwiLCBlLmVycm9yKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCAoZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIFVuaGFuZGxlZCByZWplY3Rpb246XCIsIGUucmVhc29uKTtcbn0pO1xuXG50cnkge1xuICBjb25zdCBzZWFyY2hBcnRpc3RNZW51SXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgICBjaGlsZHJlbjogXCJTZWFyY2ggQXJ0aXN0IFRyYWNrc1wiLFxuICAgIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnNlYXJjaCxcbiAgICBvbkNsaWNrOiBhc3luYyAoX2NvbnRleHQ6IGFueSwgX2l0ZW06IGFueSwgX2V2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBfY29udGV4dCBhcyB7IHByb3BzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgICBjb25zdCB1cmkgPSBwYXJzZWQudXJpIGFzIHN0cmluZztcblxuICAgICAgaWYgKCF1cmkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBObyBVUkkgZm91bmQgaW4gY29udGV4dFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhcnRpc3RVcmkgPSB1cmk7XG4gICAgICBsZXQgYXJ0aXN0TmFtZSA9IHBhcnNlZC5uYW1lIGFzIHN0cmluZztcblxuICAgICAgaWYgKCFhcnRpc3ROYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBTcGljZXRpZnkuQ29zbW9zQXN5bmMuZ2V0KFxuICAgICAgICAgICAgYHNwOi8vY29yZS92MS9lbnRpdHkvJHtlbmNvZGVVUklDb21wb25lbnQoYXJ0aXN0VXJpKX1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJ0aXN0TmFtZSA9IG1ldGFkYXRhPy5uYW1lIHx8IFwiVW5rbm93biBBcnRpc3RcIjtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgYXJ0aXN0TmFtZSA9IFwiVW5rbm93biBBcnRpc3RcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBQb3B1cE1vZGFsKHtcbiAgICAgICAgdGl0bGU6IGBTZWFyY2g6ICR7YXJ0aXN0TmFtZX1gLFxuICAgICAgICBjb250ZW50OiA8QXJ0aXN0U2VhcmNoTW9kYWwgYXJ0aXN0TmFtZT17YXJ0aXN0TmFtZX0gYXJ0aXN0VXJpPXthcnRpc3RVcml9IC8+LFxuICAgICAgICBpc0xhcmdlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNob3VsZEFkZDogKHByb3BzOiBhbnksIF90cmlnZ2VyOiBhbnksIF90YXJnZXQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhwcm9wcyk7XG4gICAgICBjb25zdCB1cmkgPSBwYXJzZWQudXJpIGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghdXJpKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk/LnR5cGU7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLkFSVElTVDtcbiAgICB9LFxuICB9KTtcblxuICBzZWFyY2hBcnRpc3RNZW51SXRlbS5yZWdpc3RlcigpO1xuXG4gIGNvbnNvbGUubG9nKFwiW0FydGlzdCBTZWFyY2hdIEV4dGVuc2lvbiBsb2FkZWQgLSBSaWdodC1jbGljayBvbiBhbiBhcnRpc3QgdG8gc2VhcmNoIHRoZWlyIHRyYWNrc1wiKTtcbn0gY2F0Y2ggKGVycikge1xuICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEVycm9yIGR1cmluZyBpbml0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O0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyxxQkFBUSxVQUFVOzs7QUN2Q2xCLElBQU07QUFBQSxFQUNYLG9EQUFBQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQUFDO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyx5QkFBUSxVQUFVOzs7QUNkZixJQUFNLFFBQVEsSUFBSSxjQUFjO0FBQ2hDLE1BQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBdVIzQjtBQUNTLElBQU8saUJBQVFBOzs7QUNwUnpCLFNBQVMsbUJBQW1CLEtBQUssY0FBTTtBQUV2QyxRQUFRLElBQUksc0RBQXNEO0FBRWxFLE9BQU8saUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLFVBQVEsTUFBTSxpQ0FBaUMsRUFBRSxLQUFLO0FBQ3hELENBQUM7QUFFRCxPQUFPLGlCQUFpQixzQkFBc0IsQ0FBQyxNQUFNO0FBQ25ELFVBQVEsTUFBTSx3Q0FBd0MsRUFBRSxNQUFNO0FBQ2hFLENBQUM7QUFFRCxJQUFJO0FBQ0YsUUFBTSx1QkFBdUIsSUFBSSxVQUFVLGNBQWMsS0FBSztBQUFBLElBQzVELFVBQVU7QUFBQSxJQUNWLGFBQWEsTUFBTSxLQUFLO0FBQUEsSUFDeEIsU0FBUyxPQUFPLFVBQWUsT0FBWSxXQUFnQjtBQUN6RCxZQUFNLFVBQVU7QUFDaEIsWUFBTSxTQUFTLFdBQVcsUUFBUSxLQUFLO0FBQ3ZDLFlBQU0sTUFBTSxPQUFPO0FBRW5CLFVBQUksQ0FBQyxLQUFLO0FBQ1IsZ0JBQVEsTUFBTSx5Q0FBeUM7QUFDdkQ7QUFBQSxNQUNGO0FBRUEsWUFBTSxZQUFZO0FBQ2xCLFVBQUksYUFBYSxPQUFPO0FBRXhCLFVBQUksQ0FBQyxZQUFZO0FBQ2YsWUFBSTtBQUNGLGdCQUFNLFdBQVcsTUFBTSxVQUFVLFlBQVk7QUFBQSxZQUMzQyx1QkFBdUIsbUJBQW1CLFNBQVMsQ0FBQztBQUFBLFVBQ3REO0FBQ0EsdUJBQWEsVUFBVSxRQUFRO0FBQUEsUUFDakMsUUFBUTtBQUNOLHVCQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFFQSxpQkFBVztBQUFBLFFBQ1QsT0FBTyxXQUFXLFVBQVU7QUFBQSxRQUM1QixTQUFTLG9CQUFDLHFCQUFrQixZQUF3QixXQUFzQjtBQUFBLFFBQzFFLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxXQUFXLENBQUMsT0FBWSxVQUFlLFlBQWlCO0FBQ3RELFlBQU0sU0FBUyxXQUFXLEtBQUs7QUFDL0IsWUFBTSxNQUFNLE9BQU87QUFDbkIsVUFBSSxDQUFDLElBQUssUUFBTztBQUNqQixZQUFNLE9BQU8sVUFBVSxJQUFJLEtBQUssR0FBRyxHQUFHO0FBQ3RDLGFBQU8sU0FBUyxVQUFVLElBQUksS0FBSztBQUFBLElBQ3JDO0FBQUEsRUFDRixDQUFDO0FBRUQsdUJBQXFCLFNBQVM7QUFFOUIsVUFBUSxJQUFJLG9GQUFvRjtBQUNsRyxTQUFTLEtBQUs7QUFDWixVQUFRLE1BQU0sZ0RBQWdELEdBQUc7QUFDbkU7IiwKICAibmFtZXMiOiBbIkNvbXBvbmVudCIsICJGcmFnbWVudCIsICJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsICJ2ZXJzaW9uIiwgInNoZWV0Il0KfQo=
