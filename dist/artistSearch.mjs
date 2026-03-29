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
    path: "M10.5335 2.1123c2.9465.0001 5.3352 2.3888 5.3353 5.3353 0 1.4264-.5625 2.7723-1.5361 3.6799l3.1602 3.1602c.3904.3904.3904 1.0237 0 1.4142-.3904.3904-1.0237.3904-1.4142 0l-3.1602-3.1602C12.3079 13.4707 11.4288 14 10.5335 14 7.587 13.9999 5.1983 11.6112 5.1982 8.6647c0-2.9465 2.3887-5.3352 5.3353-5.3353 1.4264 0 2.7723.5625 3.6799 1.5361l2.5352 2.5352a.9994.9994 90 011.4142-1.4142l-2.5352-2.5352C13.3058 2.6747 11.9599 2.1123 10.5335 2.1123Zm-4.1982 5.3353c0-2.3094 1.876-4.1982 4.1982-4.1982 2.3094 0 4.1982 1.8888 4.1982 4.1982 0 2.3094-1.8888 4.1982-4.1982 4.1982-2.3094 0-4.1982-1.8888-4.1982-4.1982Z",
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
  background-color: rgba(var(--spice-rgb-main), 0.9);
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
  transition: background 0.15s ease;
}

.artist-search-track:hover {
  background: var(--spice-card);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LXNoaW0udHMiLCAiLi4vdGFza3Mvc2hpbXMvcmVhY3QtZG9tLXNoaW0udHMiLCAiLi4vc2hhcmVkL3N0eWxlcy9wb3B1cE1vZGFsLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2FydGlzdFNlYXJjaC9zcmMvc2VhcmNoTW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9zdHlsZXMuY3NzIiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9hcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIE1lcmdlZE9iamVjdCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmludGVyZmFjZSBQcm9wc0lucHV0IGV4dGVuZHMgTWVyZ2VkT2JqZWN0IHtcbiAgaXRlbT86IE1lcmdlZE9iamVjdDtcbiAgcmVmZXJlbmNlPzogTWVyZ2VkT2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wczogUHJvcHNJbnB1dCB8IG51bGwgfCB1bmRlZmluZWQpOiBNZXJnZWRPYmplY3Qge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkOiBNZXJnZWRPYmplY3QgPSB7fTtcblxuICBjb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZTogTWVyZ2VkT2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCwgdGFyZ2V0OiBNZXJnZWRPYmplY3QpID0+IHtcbiAgICBpZiAoIXNvdXJjZSB8fCB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093bihzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG1lcmdlUHJvcHMocHJvcHMsIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMuaXRlbSwgcGFyc2VkKTtcbiAgbWVyZ2VQcm9wcyhwcm9wcy5yZWZlcmVuY2UsIHBhcnNlZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiIsICJleHBvcnQgY29uc3QgeyBGcmFnbWVudCwganN4LCBqc3hzIH0gPSBTcGljZXRpZnkuUmVhY3RKU1g7XG4iLCAiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHNpemU/OiBudW1iZXI7XG4gIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0SWNvbkNvbXBvbmVudCA9IEZDPEljb25Qcm9wcz4gJiB7XG4gIGRlZmF1bHRQcm9wcz86IFBhcnRpYWw8SWNvblByb3BzPjtcbn07XG5cbmNvbnN0IGljb25EYXRhID0ge1xuICBzZWFyY2g6IHtcbiAgICBwYXRoOiBcIk0xMC41MzM1IDIuMTEyM2MyLjk0NjUuMDAwMSA1LjMzNTIgMi4zODg4IDUuMzM1MyA1LjMzNTMgMCAxLjQyNjQtLjU2MjUgMi43NzIzLTEuNTM2MSAzLjY3OTlsMy4xNjAyIDMuMTYwMmMuMzkwNC4zOTA0LjM5MDQgMS4wMjM3IDAgMS40MTQyLS4zOTA0LjM5MDQtMS4wMjM3LjM5MDQtMS40MTQyIDBsLTMuMTYwMi0zLjE2MDJDMTIuMzA3OSAxMy40NzA3IDExLjQyODggMTQgMTAuNTMzNSAxNCA3LjU4NyAxMy45OTk5IDUuMTk4MyAxMS42MTEyIDUuMTk4MiA4LjY2NDdjMC0yLjk0NjUgMi4zODg3LTUuMzM1MiA1LjMzNTMtNS4zMzUzIDEuNDI2NCAwIDIuNzcyMy41NjI1IDMuNjc5OSAxLjUzNjFsMi41MzUyIDIuNTM1MmEuOTk5NC45OTk0IDkwIDAxMS40MTQyLTEuNDE0MmwtMi41MzUyLTIuNTM1MkMxMy4zMDU4IDIuNjc0NyAxMS45NTk5IDIuMTEyMyAxMC41MzM1IDIuMTEyM1ptLTQuMTk4MiA1LjMzNTNjMC0yLjMwOTQgMS44NzYtNC4xOTgyIDQuMTk4Mi00LjE5ODIgMi4zMDk0IDAgNC4xOTgyIDEuODg4OCA0LjE5ODIgNC4xOTgyIDAgMi4zMDk0LTEuODg4OCA0LjE5ODItNC4xOTgyIDQuMTk4Mi0yLjMwOTQgMC00LjE5ODItMS44ODg4LTQuMTk4Mi00LjE5ODJaXCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBsYXk6IHtcbiAgICBwYXRoOiBcIk04IDV2MTRsMTEtN3pcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgcGF1c2U6IHtcbiAgICBwYXRoOiBcIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgZWRpdEJ1dHRvbjoge1xuICAgIHBhdGg6IFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICBwYXRoOiBcIk03Ljk2IDUuMzNhMi42NyAyLjY3IDAgMTE1LjM0IDIuNjcgMi42NyAyLjY3IDAgMDEtNS4zNC0yLjY3Wk02LjY3IDhBMS4zMyAxLjMzIDAgMTA5LjMzIDggMS4zMyAxLjMzIDAgMDA2LjY3IDhabTQuODItNC44MWEuOTUuOTQgMCAwMS0xLjEtLjc1TDEwLjA1LjU1QS40Ny40NyAwIDAwOS42OC4xNyA4LjEgOC4xIDAgMDA2LjMyLjE3LjQ3LjQ3IDAgMDA1Ljk2LjU1TDUuNjEgMi40NGEuOTUuOTUgMCAwMS0xLjI1LjcxTDIuNTUgMi41MWEuNDcuNDcgMCAwMC0uNTEuMTNDMS4yOCAzLjQ3LjcxIDQuNDYuMzYgNS41M2EuNDcuNDcgMCAwMC4xNC41MUwxLjk3IDcuMjhhLjk0Ljk0IDAgMDEwIDEuNDNMLjUgOS45NWEuNDcuNDcgMCAwMC0uMTQuNTEgNy45OCA3Ljk4IDAgMDAxLjY4IDIuOS40Ny40NyAwIDAwLjUxLjEzbDEuODEtLjY1YS45NC45NCAwIDAxMS4yNS43MmwuMzQgMS44OWMuMDQuMTguMTguMzMuMzcuMzdhOC4xIDguMSAwIDAwMy4zNiAwIC40Ny40NyAwIDAwLjM3LS4zN2wuMzQtMS44OWEuOTUuOTUgMCAwMTEuMjUtLjcybDEuODEuNjVjLjE4LjA2LjM4LjAxLjUxLS4xMy43Ni0uODQgMS4zNC0xLjgyIDEuNjgtMi45YS40Ny40NyAwIDAwLS4xNC0uNUwxNC4wMyA4LjcyYS45NC45NCAwIDAxMC0xLjQ0TDE1LjUgNi4wNGEuNDcuNDcgMCAwMC4xNC0uNSA3Ljk4IDcuOTggMCAwMC0xLjY4LTIuOS40Ny40NyAwIDAwLS41MS0uMTNsLTEuODEuNjVhLjk1Ljk1IDAgMDEtLjE1LjA0Wm0tOC44Mi43OCAxLjI1LjQ0YTIuMjggMi4yOCAwIDAwMy0xLjczbC4yNC0xLjNhNi44MSA2LjgxIDAgMDExLjY4IDBsLjI0IDEuM2EyLjI4IDIuMjggMCAwMDMuMDEgMS43M2wxLjI0LS40NGMuMzQuNDQuNjMuOTMuODQgMS40NGwtMSAuODVhMi4yNyAyLjI3IDAgMDAwIDMuNDhsMSAuODVhNi42NSA2LjY1IDAgMDEtLjg0IDEuNDRsLTEuMjQtLjQ0QTIuMjggMi4yOCAwIDAwOS4wOCAxMy4zMmwtLjI0IDEuMjlhNi44IDYuOCAwIDAxLTEuNjkgMGwtLjIzLTEuMjlBMi4yOCAyLjI4IDAgMDAzLjkxIDExLjU5bC0xLjI0LjQ0YTYuNjUgNi42NSAwIDAxLS44NC0xLjQ0bDEtLjg2YTIuMjcgMi4yNyAwIDAwMC0zLjQ3bC0xLS44NWMuMjEtLjUxLjUtMSAuODQtMS40NFpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBwYXRoOiBcIk0zMS4wOTggMjkuNzk0IDE2Ljk1NSAxNS42NSAzMS4wOTcgMS41MSAyOS42ODMuMDkzIDE1LjU0IDE0LjIzNyAxLjQuMDk0LS4wMTYgMS41MDggMTQuMTI2IDE1LjY1LS4wMTYgMjkuNzk1bDEuNDE0IDEuNDE0TDE1LjU0IDE3LjA2NWwxNC4xNDQgMTQuMTQzXCIsXG4gICAgc2l6ZTogMzIsXG4gIH0sXG4gIGR1cGxpY2F0ZToge1xuICAgIHBhdGg6IFwiTTE1IDMuNWMwLS41LS41LTEtMS0xSDExVjFjMC0uNS0uNS0xLTEtMUgyQzEuNSAwIDEgLjUgMSAxVjExLjVjMCAuNS41IDEgMSAxSDQuNVYxNWMwIC41LjUgMSAxIDFIMTRjLjUgMCAxLS41IDEtMVpNMi41IDJjMC0uMjUuMjUtLjUuNS0uNUg5Yy4yNSAwIC41LjI1LjUuNXY4LjVjMCAuMjUtLjI1LjUtLjUuNUgzYy0uMjUgMC0uNS0uMjUtLjUtLjVabTQgMTIuNWMtLjI1IDAtLjUtLjI1LS41LS41VjEyLjVoNGMuNSAwIDEtLjUgMS0xVjRoMmMuMjUgMCAuNS4yNS41LjVWMTRjMCAuMjUtLjI1LjUtLjUuNVpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBJY29uTmFtZSA9IGtleW9mIHR5cGVvZiBpY29uRGF0YTtcblxuY29uc3QgY3JlYXRlUmVhY3RDb21wb25lbnQgPSAobmFtZTogSWNvbk5hbWUpOiBSZWFjdEljb25Db21wb25lbnQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHNpemU6IGRlZmF1bHRTaXplIH0gPSBpY29uRGF0YVtuYW1lXTtcbiAgY29uc3QgQ29tcG9uZW50OiBSZWFjdEljb25Db21wb25lbnQgPSAoeyBzaXplID0gZGVmYXVsdFNpemUsIGZpbGwgPSBcImN1cnJlbnRDb2xvclwiIH0pID0+IChcbiAgICA8c3ZnXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB2aWV3Qm94PXtgMCAwICR7ZGVmYXVsdFNpemV9ICR7ZGVmYXVsdFNpemV9YH1cbiAgICAgIHdpZHRoPXtzaXplfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogZGVmYXVsdFNpemUsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgfTtcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmludGVyZmFjZSBJY29uQ29sbGVjdGlvbiB7XG4gIHJhdzogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xuICByZWFjdDogUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+O1xuICBodG1sOiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG59XG5cbmNvbnN0IHsgcmF3LCByZWFjdCwgaHRtbCB9ID0gKE9iamVjdC5rZXlzKGljb25EYXRhKSBhcyBJY29uTmFtZVtdKS5yZWR1Y2U8SWNvbkNvbGxlY3Rpb24+KFxuICAoYWNjLCBuYW1lKSA9PiB7XG4gICAgYWNjLnJhd1tuYW1lXSA9IGljb25EYXRhW25hbWVdLnBhdGg7XG4gICAgYWNjLnJlYWN0W25hbWVdID0gY3JlYXRlUmVhY3RDb21wb25lbnQobmFtZSk7XG4gICAgYWNjLmh0bWxbbmFtZV0gPSBgPHBhdGggZD1cIiR7aWNvbkRhdGFbbmFtZV0ucGF0aH1cIi8+YDtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7XG4gICAgcmF3OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gICAgcmVhY3Q6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PixcbiAgICBodG1sOiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgSWNvbnMgPSB7XG4gIFJlYWN0OiByZWFjdCxcbiAgSFRNTDogaHRtbCxcbiAgUkFXOiByYXcsXG59O1xuIiwgImV4cG9ydCBjb25zdCB7XG4gIENoaWxkcmVuLFxuICBDb21wb25lbnQsXG4gIEZyYWdtZW50LFxuICBQcm9maWxlcixcbiAgUHVyZUNvbXBvbmVudCxcbiAgU3RyaWN0TW9kZSxcbiAgU3VzcGVuc2UsXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFxuICBhY3QsXG4gIGNsb25lRWxlbWVudCxcbiAgY3JlYXRlQ29udGV4dCxcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlRmFjdG9yeSxcbiAgY3JlYXRlUmVmLFxuICBmb3J3YXJkUmVmLFxuICBpc1ZhbGlkRWxlbWVudCxcbiAgbGF6eSxcbiAgbWVtbyxcbiAgc3RhcnRUcmFuc2l0aW9uLFxuICB1bnN0YWJsZV9hY3QsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VEZWJ1Z1ZhbHVlLFxuICB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUlkLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VJbnNlcnRpb25FZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVkdWNlcixcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUsXG4gIHVzZVRyYW5zaXRpb24sXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3Q7XG4iLCAiZXhwb3J0IGNvbnN0IHtcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGNyZWF0ZVBvcnRhbCxcbiAgY3JlYXRlUm9vdCxcbiAgZmluZERPTU5vZGUsXG4gIGZsdXNoU3luYyxcbiAgaHlkcmF0ZSxcbiAgaHlkcmF0ZVJvb3QsXG4gIHJlbmRlcixcbiAgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxcbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsXG4gIHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyLFxuICB2ZXJzaW9uLFxufSA9IFNwaWNldGlmeS5SZWFjdERPTTtcblxuZXhwb3J0IGRlZmF1bHQgU3BpY2V0aWZ5LlJlYWN0RE9NO1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjUpO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLW1haW4pLCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxLjQpIGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLm1vZGFsX19jb250YWluZXItLWxhcmdlIHtcbiAgd2lkdGg6IGNsYW1wKDU1MHB4LCA2MHZ3LCA2NTBweCk7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG59XG5cbi5tb2RhbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMnB4IDMycHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcbn1cblxuLm1vZGFsX190aXRsZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4ubW9kYWxfX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLm1vZGFsX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlIGJvdGgtZWRnZXM7XG59XG5cbi5tb2RhbF9fY29udGVudCA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRUeXBlLCBGQywgS2V5Ym9hcmRFdmVudCwgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QsIHR5cGUgUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9wdXBNb2RhbC5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi9pY29ucy50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3B1cE1vZGFsUHJvcHMge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudDogUmVhY3ROb2RlIHwgQ29tcG9uZW50VHlwZTxhbnk+O1xuICBpc0xhcmdlPzogYm9vbGVhbjtcbiAgYnV0dG9ucz86IFJlYWN0Tm9kZTtcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdGVtcGxhdGU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTW9kYWxDb21wb25lbnRQcm9wcyBleHRlbmRzIFBvcHVwTW9kYWxQcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmxldCBtb2RhbFJvb3Q6IFJvb3QgfCBudWxsID0gbnVsbDtcbmNvbnN0IG1vZGFsQ29udGFpbmVySWQgPSBcInBvcHVwLW1vZGFsLWNvbnRhaW5lclwiO1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbENvbnRhaW5lcklkKTtcbiAgaWYgKG1vZGFsUm9vdCkge1xuICAgIG1vZGFsUm9vdC51bm1vdW50KCk7XG4gICAgbW9kYWxSb290ID0gbnVsbDtcbiAgfVxuICBpZiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbn07XG5cbmNvbnN0IE1vZGFsQ29tcG9uZW50OiBGQzxNb2RhbENvbXBvbmVudFByb3BzPiA9IG1lbW8oXG4gICh7IHRpdGxlLCBjb250ZW50LCBpc0xhcmdlLCBidXR0b25zLCBpY29uLCB0ZW1wbGF0ZSwgb25DbG9zZSB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93biBhcyBhbnkpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duIGFzIGFueSk7XG4gICAgICB9O1xuICAgIH0sIFtvbkNsb3NlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQmFja2Ryb3BDbGljayA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpOiBSZWFjdE5vZGUgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgQ29udGVudENvbXBvbmVudCA9IGNvbnRlbnQgYXMgQ29tcG9uZW50VHlwZTtcbiAgICAgICAgcmV0dXJuIDxDb250ZW50Q29tcG9uZW50IC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWxfX2NvbnRhaW5lciR7aXNMYXJnZSA/IFwiIG1vZGFsX19jb250YWluZXItLWxhcmdlXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2ljb24gJiYgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faWNvblwiPntpY29ufTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7dGl0bGUgJiYgPGgxIGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPnt0aXRsZX08L2gxPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXIgbGFiZWw9XCJDbG9zZVwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uIG1vZGFsX19idXR0b24tLWNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QuY2xvc2Ugc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2NvbnRlbnRcIj57cmVuZGVyQ29udGVudCgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBvbkNsaWNrPXtoYW5kbGVCYWNrZHJvcENsaWNrfSByZWY9e21vZGFsUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IFBvcHVwTW9kYWwgPSAocHJvcHM6IFBvcHVwTW9kYWxQcm9wcyk6IHZvaWQgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxDb250YWluZXJJZCkpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gbW9kYWxDb250YWluZXJJZDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIG1vZGFsUm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgbW9kYWxSb290LnJlbmRlcig8TW9kYWxDb21wb25lbnQgey4uLnByb3BzfSBvbkNsb3NlPXtjbG9zZU1vZGFsfSAvPik7XG59O1xuXG5Qb3B1cE1vZGFsLmhpZGUgPSBjbG9zZU1vZGFsO1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5cbmludGVyZmFjZSBUcmFjayB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGR1cmF0aW9uX21zOiBudW1iZXI7XG4gIGFsYnVtOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGltYWdlczogQXJyYXk8eyB1cmw6IHN0cmluZyB9PjtcbiAgfTtcbiAgYXJ0aXN0czogQXJyYXk8eyBuYW1lOiBzdHJpbmcgfT47XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFydGlzdFVyaTogc3RyaW5nO1xuICBhcnRpc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGZvcm1hdER1cmF0aW9uID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuICByZXR1cm4gYCR7bWludXRlc306JHtyZW1haW5pbmdTZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0U2VhcmNoTW9kYWwoeyBhcnRpc3RVcmksIGFydGlzdE5hbWUgfTogUHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlPFRyYWNrW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRUcmFjaywgc2V0U2VsZWN0ZWRUcmFja10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzZWFyY2hUaW1lb3V0UmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmZXRjaEFsYnVtVHJhY2tzID0gYXN5bmMgKGFsYnVtVXJpOiBzdHJpbmcsIGFsYnVtTmFtZTogc3RyaW5nLCBjb3ZlckFydDogYW55W10pOiBQcm9taXNlPFRyYWNrW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgIFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zLnF1ZXJ5QWxidW1UcmFja3MsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IGFsYnVtVXJpLFxuICAgICAgICAgIGxvY2FsZTogU3BpY2V0aWZ5LkxvY2FsZS5nZXRMb2NhbGUoKSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDUwMDAsXG4gICAgICAgIH0sXG4gICAgICApKSBhcyB7IGRhdGE6IGFueSB9O1xuXG4gICAgICBjb25zdCBhbGJ1bURhdGEgPSByZXNwb25zZT8uZGF0YT8uYWxidW1VbmlvbjtcbiAgICAgIGNvbnN0IHRyYWNrc1YyID0gYWxidW1EYXRhPy50cmFja3NWMjtcbiAgICAgIGlmICghdHJhY2tzVjI/Lml0ZW1zKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdHJhY2tzVjIuaXRlbXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IHJlc3VsdHM6IFRyYWNrW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCB0cmFjayA9IGl0ZW0/LnRyYWNrO1xuICAgICAgICBpZiAoIXRyYWNrKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gY292ZXJBcnQgfHwgdHJhY2s/LmFsYnVtPy5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcbiAgICAgICAgY29uc3QgYXJ0aXN0cyA9IEFycmF5LmlzQXJyYXkodHJhY2s/LmFydGlzdHMpID8gdHJhY2suYXJ0aXN0cyA6IFtdO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHVyaTogdHJhY2s/LnVyaSB8fCBcIlwiLFxuICAgICAgICAgIG5hbWU6IHRyYWNrPy5uYW1lIHx8IFwiXCIsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IHRyYWNrPy5kdXJhdGlvbj8udG90YWxNcyB8fCAwLFxuICAgICAgICAgIGFsYnVtOiB7XG4gICAgICAgICAgICBuYW1lOiBhbGJ1bU5hbWUsXG4gICAgICAgICAgICBpbWFnZXM6IGltYWdlcy5tYXAoKGltZzogYW55KSA9PiAoeyB1cmw6IGltZz8udXJsIHx8IFwiXCIgfSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJ0aXN0czogYXJ0aXN0cy5tYXAoKGE6IGFueSkgPT4gKHsgbmFtZTogYT8ucHJvZmlsZT8ubmFtZSB8fCBhPy5uYW1lIHx8IFwiXCIgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBFcnJvciBmZXRjaGluZyBhbGJ1bSB0cmFja3M6XCIsIGFsYnVtVXJpLCBlcnIpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaEFydGlzdFRyYWNrcyA9IGFzeW5jICgpOiBQcm9taXNlPFRyYWNrW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgIFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zLnF1ZXJ5QXJ0aXN0RGlzY29ncmFwaHlBbGwsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IGFydGlzdFVyaSxcbiAgICAgICAgICBsb2NhbGU6IFNwaWNldGlmeS5Mb2NhbGUuZ2V0TG9jYWxlKCksXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIGxpbWl0OiA1MCxcbiAgICAgICAgfSxcbiAgICAgICkpIGFzIHsgZGF0YTogYW55IH07XG5cbiAgICAgIGNvbnN0IGRpc2NvZ3JhcGh5ID0gcmVzcG9uc2U/LmRhdGE/LmFydGlzdFVuaW9uPy5kaXNjb2dyYXBoeTtcbiAgICAgIGlmICghZGlzY29ncmFwaHk/LmFsbD8uaXRlbXMpIHJldHVybiBbXTtcblxuICAgICAgY29uc3QgYWxsVHJhY2tzOiBUcmFja1tdID0gW107XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkaXNjb2dyYXBoeS5hbGwuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgcmVsZWFzZXMgPSBpdGVtPy5yZWxlYXNlcz8uaXRlbXM7XG4gICAgICAgIGlmICghcmVsZWFzZXMpIGNvbnRpbnVlO1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVsZWFzZSBvZiByZWxlYXNlcykge1xuICAgICAgICAgIGlmICghcmVsZWFzZT8udXJpKSBjb250aW51ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBhbGJ1bVVyaSA9IHJlbGVhc2UudXJpO1xuICAgICAgICAgIGNvbnN0IGFsYnVtTmFtZSA9IHJlbGVhc2UubmFtZSB8fCBcIlwiO1xuICAgICAgICAgIGNvbnN0IGNvdmVyQXJ0ID0gcmVsZWFzZS5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcblxuICAgICAgICAgIGNvbnN0IGFsYnVtVHJhY2tzID0gYXdhaXQgZmV0Y2hBbGJ1bVRyYWNrcyhhbGJ1bVVyaSwgYWxidW1OYW1lLCBjb3ZlckFydCk7XG4gICAgICAgICAgYWxsVHJhY2tzLnB1c2goLi4uYWxidW1UcmFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxUcmFja3M7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEVycm9yIGZldGNoaW5nIGFydGlzdCB0cmFja3M6XCIsIGVycik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICBjb25zdCBmZXRjaGVkVHJhY2tzID0gYXdhaXQgZmV0Y2hBcnRpc3RUcmFja3MoKTtcbiAgICAgIHNldFRyYWNrcyhmZXRjaGVkVHJhY2tzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgbG9hZFRyYWNrcygpO1xuICB9LCBbYXJ0aXN0VXJpXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkudHJpbSgpKSB7XG4gICAgICBzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gcXVlcnkudHJpbSgpXG4gICAgPyB0cmFja3MuZmlsdGVyKFxuICAgICAgICAodHJhY2spID0+XG4gICAgICAgICAgdHJhY2submFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgdHJhY2suYWxidW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgKVxuICAgIDogdHJhY2tzO1xuXG4gIGNvbnN0IHBsYXlUcmFjayA9ICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5wbGF5KHsgdXJpOiB0cmFja1VyaSB9LCB7fSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9RdWV1ZSA9IGFzeW5jICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5hZGRUb1F1ZXVlKFt7IHVyaTogdHJhY2tVcmkgfV0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaWNvblwiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZWFyY2ggc2l6ZT17MjB9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggaW4gJHthcnRpc3ROYW1lfSdzIHRyYWNrcy4uLmB9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgICB7cXVlcnkgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1jbGVhclwiIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KFwiXCIpfT5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxNn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtcmVzdWx0c1wiPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNwaW5uZXJcIiAvPlxuICAgICAgICAgICAgPHNwYW4+TG9hZGluZyB0cmFja3MuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtZXJyb3JcIj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICkgOiAhcXVlcnkudHJpbSgpICYmIGZpbHRlcmVkVHJhY2tzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaGludFwiPlxuICAgICAgICAgICAgPEljb25zLlJlYWN0LnNlYXJjaCBmaWxsPVwidmFyKC0tc3BpY2Utc3VidGV4dClcIiBzaXplPXs0OH0gLz5cbiAgICAgICAgICAgIDxwPkZvdW5kIHtmaWx0ZXJlZFRyYWNrcy5sZW5ndGh9IHRyYWNrcyBmcm9tIHthcnRpc3ROYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbm8tcmVzdWx0c1wiPlxuICAgICAgICAgICAgPHA+Tm8gdHJhY2tzIGZvdW5kIG1hdGNoaW5nIFwie3F1ZXJ5fVwiPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtY291bnRcIj5cbiAgICAgICAgICAgICAge2ZpbHRlcmVkVHJhY2tzLmxlbmd0aH0gdHJhY2t7ZmlsdGVyZWRUcmFja3MubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3VuZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbGlzdFwiPlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRUcmFja3MubWFwKCh0cmFjaykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFydGlzdC1zZWFyY2gtdHJhY2sgJHtzZWxlY3RlZFRyYWNrID09PSB0cmFjay51cmkgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLnVyaX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVHJhY2sodHJhY2sudXJpKX1cbiAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHBsYXlUcmFjayh0cmFjay51cmkpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PXt0cmFjay5hbGJ1bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0cmFjay5hbGJ1bS5pbWFnZXNbMl0/LnVybCB8fCB0cmFjay5hbGJ1bS5pbWFnZXNbMF0/LnVybCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbmFtZVwiPnt0cmFjay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hcnRpc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFydGlzdHMubWFwKChhKSA9PiBhLm5hbWUpLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWFsYnVtXCI+e3RyYWNrLmFsYnVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1kdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RHVyYXRpb24odHJhY2suZHVyYXRpb25fbXMpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5VHJhY2sodHJhY2sudXJpKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QucGxheSBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9RdWV1ZSh0cmFjay51cmkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJBZGRlZCB0byBxdWV1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIHF1ZXVlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAxYS41LjUgMCAwMS41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwMS43MDguNzA4bC00IDRhLjUuNSAwIDAxLS43MDggMGwtNC00YS41LjUgMCAwMS43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMDE4IDF6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFydGlzdC1zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWJ1dHRvbik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1idXR0b24tYWN0aXZlKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGlzdC1zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtaW5wdXQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zcGljZS1zdHJva2UpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOlxuICAgIGJvcmRlci1jb2xvciAwLjJzIGVhc2UsXG4gICAgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtbWFpbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1jbGVhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQgMC4xNXMgZWFzZSxcbiAgICBjb2xvciAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1jbGVhcjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXJlc3VsdHMge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWRpbmcsXG4uYXJ0aXN0LXNlYXJjaC1oaW50LFxuLmFydGlzdC1zZWFyY2gtbm8tcmVzdWx0cyxcbi5hcnRpc3Qtc2VhcmNoLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1lcnJvcik7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXNwaW5uZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zcGljZS1zdHJva2UpO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYXJ0aXN0LXNlYXJjaC1zcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFydGlzdC1zZWFyY2gtc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNvdW50IHtcbiAgcGFkZGluZzogMCA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxZnIgYXV0byBhdXRvIGF1dG87XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLXNlbGVjdGVkLXJvdyk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWltYWdlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2staW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFydGlzdHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFsYnVtIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1kdXJhdGlvbiB7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6aG92ZXIgLmFydGlzdC1zZWFyY2gtdHJhY2stYWN0aW9ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjE1cyBlYXNlLFxuICAgIGNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZC1tb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkLW1vcmU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkLWhpZ2hsaWdodCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWQtbW9yZTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHsgcGFyc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL3BhcnNlUHJvcHMudHNcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zLnRzeFwiO1xuaW1wb3J0IHsgUG9wdXBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeFwiO1xuaW1wb3J0IHsgQXJ0aXN0U2VhcmNoTW9kYWwgfSBmcm9tIFwiLi9zZWFyY2hNb2RhbC50c3hcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmNvbnNvbGUubG9nKFwiW0FydGlzdCBTZWFyY2hdIFN0YXJ0aW5nIGV4dGVuc2lvbiBpbml0aWFsaXphdGlvbi4uLlwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEdsb2JhbCBlcnJvcjpcIiwgZS5lcnJvcik7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgKGUpID0+IHtcbiAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBVbmhhbmRsZWQgcmVqZWN0aW9uOlwiLCBlLnJlYXNvbik7XG59KTtcblxudHJ5IHtcbiAgY29uc3Qgc2VhcmNoQXJ0aXN0TWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gICAgY2hpbGRyZW46IFwiU2VhcmNoIEFydGlzdCBUcmFja3NcIixcbiAgICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5zZWFyY2gsXG4gICAgb25DbGljazogYXN5bmMgKF9jb250ZXh0OiBhbnksIF9pdGVtOiBhbnksIF9ldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gX2NvbnRleHQgYXMgeyBwcm9wcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH07XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKGNvbnRleHQucHJvcHMpO1xuICAgICAgY29uc3QgdXJpID0gcGFyc2VkLnVyaSBhcyBzdHJpbmc7XG5cbiAgICAgIGlmICghdXJpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gTm8gVVJJIGZvdW5kIGluIGNvbnRleHRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXJ0aXN0VXJpID0gdXJpO1xuICAgICAgbGV0IGFydGlzdE5hbWUgPSBwYXJzZWQubmFtZSBhcyBzdHJpbmc7XG5cbiAgICAgIGlmICghYXJ0aXN0TmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgU3BpY2V0aWZ5LkNvc21vc0FzeW5jLmdldChcbiAgICAgICAgICAgIGBzcDovL2NvcmUvdjEvZW50aXR5LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFydGlzdFVyaSl9YCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGFydGlzdE5hbWUgPSBtZXRhZGF0YT8ubmFtZSB8fCBcIlVua25vd24gQXJ0aXN0XCI7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGFydGlzdE5hbWUgPSBcIlVua25vd24gQXJ0aXN0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUG9wdXBNb2RhbCh7XG4gICAgICAgIHRpdGxlOiBgU2VhcmNoOiAke2FydGlzdE5hbWV9YCxcbiAgICAgICAgY29udGVudDogPEFydGlzdFNlYXJjaE1vZGFsIGFydGlzdE5hbWU9e2FydGlzdE5hbWV9IGFydGlzdFVyaT17YXJ0aXN0VXJpfSAvPixcbiAgICAgICAgaXNMYXJnZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG91bGRBZGQ6IChwcm9wczogYW55LCBfdHJpZ2dlcjogYW55LCBfdGFyZ2V0OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMocHJvcHMpO1xuICAgICAgY29uc3QgdXJpID0gcGFyc2VkLnVyaSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAoIXVyaSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpPy50eXBlO1xuICAgICAgcmV0dXJuIHR5cGUgPT09IFNwaWNldGlmeS5VUkkuVHlwZS5BUlRJU1Q7XG4gICAgfSxcbiAgfSk7XG5cbiAgc2VhcmNoQXJ0aXN0TWVudUl0ZW0ucmVnaXN0ZXIoKTtcblxuICBjb25zb2xlLmxvZyhcIltBcnRpc3QgU2VhcmNoXSBFeHRlbnNpb24gbG9hZGVkIC0gUmlnaHQtY2xpY2sgb24gYW4gYXJ0aXN0IHRvIHNlYXJjaCB0aGVpciB0cmFja3NcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBFcnJvciBkdXJpbmcgaW5pdGlhbGl6YXRpb246XCIsIGVycik7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFPTyxTQUFTLFdBQVcsT0FBb0Q7QUFDN0UsTUFBSSxDQUFDLE1BQU8sUUFBTyxDQUFDO0FBRXBCLFFBQU0sU0FBdUIsQ0FBQztBQUU5QixRQUFNLGFBQWEsQ0FBQyxRQUF5QyxXQUF5QjtBQUNwRixRQUFJLENBQUMsVUFBVSxPQUFPLFdBQVcsU0FBVTtBQUMzQyxlQUFXLE9BQU8sUUFBUTtBQUN4QixVQUFJLE9BQU8sT0FBTyxRQUFRLEdBQUcsR0FBRztBQUM5QixZQUFJLE9BQU8sR0FBRyxNQUFNLFFBQVc7QUFDN0IsaUJBQU8sR0FBRyxJQUFJLE9BQU8sR0FBRztBQUFBLFFBQzFCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsYUFBVyxPQUFPLE1BQU07QUFDeEIsYUFBVyxNQUFNLE1BQU0sTUFBTTtBQUM3Qixh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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBb1EzQjtBQUNTLElBQU8saUJBQVFBOzs7QUNqUXpCLFNBQVMsbUJBQW1CLEtBQUssY0FBTTtBQUV2QyxRQUFRLElBQUksc0RBQXNEO0FBRWxFLE9BQU8saUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLFVBQVEsTUFBTSxpQ0FBaUMsRUFBRSxLQUFLO0FBQ3hELENBQUM7QUFFRCxPQUFPLGlCQUFpQixzQkFBc0IsQ0FBQyxNQUFNO0FBQ25ELFVBQVEsTUFBTSx3Q0FBd0MsRUFBRSxNQUFNO0FBQ2hFLENBQUM7QUFFRCxJQUFJO0FBQ0YsUUFBTSx1QkFBdUIsSUFBSSxVQUFVLGNBQWMsS0FBSztBQUFBLElBQzVELFVBQVU7QUFBQSxJQUNWLGFBQWEsTUFBTSxLQUFLO0FBQUEsSUFDeEIsU0FBUyxPQUFPLFVBQWUsT0FBWSxXQUFnQjtBQUN6RCxZQUFNLFVBQVU7QUFDaEIsWUFBTSxTQUFTLFdBQVcsUUFBUSxLQUFLO0FBQ3ZDLFlBQU0sTUFBTSxPQUFPO0FBRW5CLFVBQUksQ0FBQyxLQUFLO0FBQ1IsZ0JBQVEsTUFBTSx5Q0FBeUM7QUFDdkQ7QUFBQSxNQUNGO0FBRUEsWUFBTSxZQUFZO0FBQ2xCLFVBQUksYUFBYSxPQUFPO0FBRXhCLFVBQUksQ0FBQyxZQUFZO0FBQ2YsWUFBSTtBQUNGLGdCQUFNLFdBQVcsTUFBTSxVQUFVLFlBQVk7QUFBQSxZQUMzQyx1QkFBdUIsbUJBQW1CLFNBQVMsQ0FBQztBQUFBLFVBQ3REO0FBQ0EsdUJBQWEsVUFBVSxRQUFRO0FBQUEsUUFDakMsUUFBUTtBQUNOLHVCQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFFQSxpQkFBVztBQUFBLFFBQ1QsT0FBTyxXQUFXLFVBQVU7QUFBQSxRQUM1QixTQUFTLG9CQUFDLHFCQUFrQixZQUF3QixXQUFzQjtBQUFBLFFBQzFFLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxXQUFXLENBQUMsT0FBWSxVQUFlLFlBQWlCO0FBQ3RELFlBQU0sU0FBUyxXQUFXLEtBQUs7QUFDL0IsWUFBTSxNQUFNLE9BQU87QUFDbkIsVUFBSSxDQUFDLElBQUssUUFBTztBQUNqQixZQUFNLE9BQU8sVUFBVSxJQUFJLEtBQUssR0FBRyxHQUFHO0FBQ3RDLGFBQU8sU0FBUyxVQUFVLElBQUksS0FBSztBQUFBLElBQ3JDO0FBQUEsRUFDRixDQUFDO0FBRUQsdUJBQXFCLFNBQVM7QUFFOUIsVUFBUSxJQUFJLG9GQUFvRjtBQUNsRyxTQUFTLEtBQUs7QUFDWixVQUFRLE1BQU0sZ0RBQWdELEdBQUc7QUFDbkU7IiwKICAibmFtZXMiOiBbIkNvbXBvbmVudCIsICJGcmFnbWVudCIsICJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsICJ2ZXJzaW9uIiwgInNoZWV0Il0KfQo=
