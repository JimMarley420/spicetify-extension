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

// shared/styles/slider.css
var sheet2 = new CSSStyleSheet();
sheet2.replaceSync(`.slider {
  --fill-color: var(--spice-button-active, #1ed760);
  --track-color: var(--spice-button-disabled, #535353);
  --thumb-color: var(--spice-text, #ffffff);
  --text-color: var(--spice-subtext, #b3b3b3);
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    .slider__thumb {
      opacity: 1;
    }

    .slider__fill {
      background-color: var(--fill-color);
    }
  }

  .slider-time {
    min-width: 40px;
    font-size: 12px;
    color: var(--text-color);
    text-align: center;
    user-select: none;
  }

  .slider-container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 12px;
    cursor: pointer;

    .slider__track {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: var(--track-color);
      border-radius: 2px;

      .slider__fill {
        position: absolute;
        height: 100%;
        background-color: var(--fill-color);
        border-radius: 2px;
      }

      .slider__thumb {
        position: absolute;
        top: 50%;
        width: 12px;
        height: 12px;
        background-color: var(--thumb-color);
        border-radius: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity 0.2s ease;
      }
    }
  }
}
`);
var slider_default = sheet2;

// shared/components/slider.tsx
document.adoptedStyleSheets.push(slider_default);
var Slider = memo(
  ({ value, min = 0, max = 100, step = 1, defaultValue, onChange, onRelease, disabled }) => {
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const controlledValue = value !== void 0 ? value : defaultValue;
    const progress = max > min && controlledValue !== void 0 ? (controlledValue - min) / (max - min) * 100 : 0;
    const handleInteraction = useCallback(
      (e) => {
        if (!sliderRef.current || disabled) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        let newValue = newX / rect.width * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));
        onChange(newValue);
      },
      [min, max, step, onChange, disabled]
    );
    const handlePointerDown = useCallback(
      (e) => {
        if (disabled || !sliderRef.current) return;
        isDragging.current = true;
        sliderRef.current.setPointerCapture(e.pointerId);
        handleInteraction(e.nativeEvent);
      },
      [handleInteraction, disabled]
    );
    const handlePointerMove = useCallback(
      (e) => {
        if (!isDragging.current) return;
        handleInteraction(e.nativeEvent);
      },
      [handleInteraction]
    );
    const handlePointerRelease = useCallback(
      (e) => {
        if (!isDragging.current || !sliderRef.current) return;
        isDragging.current = false;
        sliderRef.current.releasePointerCapture(e.pointerId);
        onRelease?.();
      },
      [onRelease]
    );
    return (
      // @ts-expect-error
      /* @__PURE__ */ jsx("div", { className: "slider", disabled, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "slider-container",
          onPointerCancel: handlePointerRelease,
          onPointerDown: handlePointerDown,
          onPointerMove: handlePointerMove,
          onPointerUp: handlePointerRelease,
          ref: sliderRef,
          children: /* @__PURE__ */ jsxs("div", { className: "slider__track", children: [
            /* @__PURE__ */ jsx("div", { className: "slider__fill", style: { width: `${progress}%` } }),
            /* @__PURE__ */ jsx("div", { className: "slider__thumb", style: { left: `${progress}%` } })
          ] })
        }
      ) })
    );
  }
);

// shared/hooks/usePlayer.ts
var listenerCount = 0;
var intervalId = null;
var startProgressTracking = () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    const currentState = Spicetify.Platform.PlayerAPI._state;
    Spicetify.Platform.PlayerAPI._events.emit("progress", currentState);
  }, 100);
};
var stopProgressTracking = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};
var usePlayer = (trackUri, trackDuration) => {
  const [playerState, setPlayerState] = useState(Spicetify.Platform.PlayerAPI._state);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(trackDuration);
  const isSliderDragging = useRef(false);
  const seekPositionRef = useRef(0);
  const updatePlayerData = useCallback(
    (newPlayerState, isProgressUpdate = false) => {
      setPlayerState(newPlayerState);
      const isPlayingThisTrack = newPlayerState.item?.uri === trackUri;
      if (isPlayingThisTrack) {
        if (!isProgressUpdate && seekPositionRef.current !== 0 && newPlayerState.positionAsOfTimestamp < 500) {
          Spicetify.Platform.PlayerAPI.seekTo(seekPositionRef.current);
          seekPositionRef.current = 0;
        }
        if (!isSliderDragging.current) {
          const calculatedPosition = isProgressUpdate && !newPlayerState.isPaused ? newPlayerState.positionAsOfTimestamp + (Date.now() - newPlayerState.timestamp) : newPlayerState.positionAsOfTimestamp;
          setPosition(Math.min(calculatedPosition, newPlayerState.duration));
        }
        setDuration(newPlayerState.duration);
      } else {
        setPosition(0);
        setDuration(trackDuration);
      }
    },
    [trackUri, trackDuration]
  );
  useEffect(() => {
    if (listenerCount === 0) {
      startProgressTracking();
    }
    listenerCount++;
    const initialPlayerState = Spicetify.Platform.PlayerAPI._state;
    updatePlayerData(initialPlayerState);
    const updateListener = (event) => updatePlayerData(event.data);
    const progressListener = (event) => updatePlayerData(event.data, true);
    Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener, {});
    Spicetify.Platform.PlayerAPI._events.addListener("progress", progressListener, {});
    return () => {
      listenerCount--;
      if (listenerCount === 0) {
        stopProgressTracking();
      }
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener, {});
      Spicetify.Platform.PlayerAPI._events.removeListener("progress", progressListener, {});
    };
  }, [updatePlayerData]);
  const togglePlay = useCallback(() => {
    const currentPlayingTrack = playerState.item?.uri;
    if (currentPlayingTrack === trackUri) {
      playerState.isPaused ? Spicetify.Platform.PlayerAPI.resume({}) : Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play(
        {
          uri: trackUri
        },
        {}
      );
    }
  }, [playerState, trackUri]);
  const handleSliderChange = useCallback((newPosition) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
    seekPositionRef.current = newPosition;
  }, []);
  const handleSliderRelease = useCallback(() => {
    if (isSliderDragging.current) {
      const isSameTrackInPlayer = playerState.item?.uri === trackUri;
      if (!isSameTrackInPlayer) {
        Spicetify.Platform.PlayerAPI.play(
          {
            uri: trackUri
          },
          {}
        );
      } else {
        Spicetify.Platform.PlayerAPI.seekTo(position);
      }
      isSliderDragging.current = false;
    }
  }, [position, trackUri, playerState]);
  const isCurrentlyPlayingThisTrack = useMemo(
    () => !playerState.isPaused && playerState.item?.uri === trackUri,
    [playerState, trackUri]
  );
  return {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease
  };
};

// extensions/artistSearch/src/searchModal.tsx
var TrackPlaybackControl = ({ uri, duration }) => {
  const {
    position,
    duration: playerDuration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease
  } = usePlayer(uri, duration);
  const displayDuration = playerDuration || duration || 0;
  const formatTime = (ms) => {
    if (ms == null || ms < 0) return "--:--";
    const s = Math.floor(ms / 1e3);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "artist-search-playback-controls", children: [
    /* @__PURE__ */ jsx("button", { className: "artist-search-playback-button", onClick: togglePlay, children: isCurrentlyPlayingThisTrack ? /* @__PURE__ */ jsx(Icons.React.pause, { size: 16 }) : /* @__PURE__ */ jsx(Icons.React.play, { size: 16 }) }),
    /* @__PURE__ */ jsx("span", { className: "artist-search-slider-time", children: formatTime(position) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        max: displayDuration,
        min: 0,
        onChange: handleSliderChange,
        onRelease: handleSliderRelease,
        step: 1,
        value: position || 0
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "artist-search-slider-time", children: formatTime(displayDuration) })
  ] });
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
  const fetchArtistTracks = async (onTrackAdd) => {
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
      if (!discography?.all?.items) return;
      for (const item of discography.all.items) {
        const releases = item?.releases?.items;
        if (!releases) continue;
        for (const release of releases) {
          if (!release?.uri) continue;
          const albumUri = release.uri;
          const albumName = release.name || "";
          const coverArt = release.coverArt?.sources || [];
          const albumTracks = await fetchAlbumTracks(albumUri, albumName, coverArt);
          if (albumTracks.length > 0) {
            onTrackAdd(albumTracks);
          }
        }
      }
    } catch (err) {
      console.error("[Artist Search] Error fetching artist tracks:", err);
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
      setTracks([]);
      await fetchArtistTracks((newTracks) => {
        setTracks((prev) => [...prev, ...newTracks]);
      });
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
          className: `artist-search-track ${selectedTrack === track.uri ? "selected" : ""}`,
          onClick: () => setSelectedTrack(track.uri),
          onDoubleClick: () => playTrack(track.uri),
          children: [
            /* @__PURE__ */ jsx("span", { className: "artist-search-track-number", children: currentPlayingUri === track.uri ? /* @__PURE__ */ jsx("span", { className: "artist-search-playing-indicator" }) : index + 1 }),
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
            /* @__PURE__ */ jsx("div", { className: "artist-search-track-playback", children: /* @__PURE__ */ jsx(TrackPlaybackControl, { uri: track.uri, duration: track.duration_ms }) })
          ]
        },
        track.uri
      )) })
    ] }) })
  ] });
}

// extensions/artistSearch/src/styles.css
var sheet3 = new CSSStyleSheet();
sheet3.replaceSync(`.artist-search-container {
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
  grid-template-columns: 32px 48px 1fr auto 200px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--spice-subtext);
  font-size: 14px;
  text-align: center;
}

.artist-search-playing-indicator {
  width: 8px;
  height: 8px;
  background-color: #1ed760;
  border-radius: 50%;
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

.artist-search-playback-controls {
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
}

.artist-search-track-playback .artist-search-playback-controls {
  padding: 0;
}

.artist-search-playback-button {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--spice-text);
  cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
}

.artist-search-playback-button:hover {
  background: rgba(var(--spice-rgb-selected-row), 0.1);
}

.artist-search-slider-time {
  min-width: 38px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--spice-subtext);
  text-align: center;
}
`);
var styles_default = sheet3;

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
      let artistName = parsed.name || parsed.title || "";
      if (!artistName || artistName.trim() === "") {
        try {
          const response = await Spicetify.Platform.GraphQLLoader(
            Spicetify.GraphQL.Definitions.queryArtistDiscographyAll,
            {
              uri: artistUri,
              locale: Spicetify.Locale.getLocale(),
              offset: 0,
              limit: 1
            }
          );
          artistName = response?.data?.artistUnion?.profile?.name || "";
        } catch (err) {
          console.error("[Artist Search] Error fetching artist name:", err);
          artistName = "";
        }
      }
      PopupModal({
        title: `Search: ${artistName || "Artist"}`,
        content: /* @__PURE__ */ jsx(ArtistSearchModal, { artistName: artistName || "Artist", artistUri }),
        isLarge: true,
        template: true
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LXNoaW0udHMiLCAiLi4vdGFza3Mvc2hpbXMvcmVhY3QtZG9tLXNoaW0udHMiLCAiLi4vc2hhcmVkL3N0eWxlcy9wb3B1cE1vZGFsLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeCIsICIuLi9zaGFyZWQvc3R5bGVzL3NsaWRlci5jc3MiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvc2xpZGVyLnRzeCIsICIuLi9zaGFyZWQvaG9va3MvdXNlUGxheWVyLnRzIiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9zZWFyY2hNb2RhbC50c3giLCAiLi4vZXh0ZW5zaW9ucy9hcnRpc3RTZWFyY2gvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9hcnRpc3RTZWFyY2gvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbInR5cGUgTWVyZ2VkT2JqZWN0ID0gUmVjb3JkPHN0cmluZywgYW55PjtcblxuaW50ZXJmYWNlIFByb3BzSW5wdXQgZXh0ZW5kcyBNZXJnZWRPYmplY3Qge1xuICBpdGVtPzogTWVyZ2VkT2JqZWN0O1xuICByZWZlcmVuY2U/OiBNZXJnZWRPYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb3BzKHByb3BzOiBQcm9wc0lucHV0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IE1lcmdlZE9iamVjdCB7XG4gIGlmICghcHJvcHMpIHJldHVybiB7fTtcblxuICBjb25zdCBwYXJzZWQ6IE1lcmdlZE9iamVjdCA9IHt9O1xuXG4gIGNvbnN0IG1lcmdlUHJvcHMgPSAoc291cmNlOiBNZXJnZWRPYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkLCB0YXJnZXQ6IE1lcmdlZE9iamVjdCkgPT4ge1xuICAgIGlmICghc291cmNlIHx8IHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duKHNvdXJjZSwga2V5KSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgbWVyZ2VQcm9wcyhwcm9wcywgcGFyc2VkKTtcbiAgbWVyZ2VQcm9wcyhwcm9wcy5pdGVtLCBwYXJzZWQpO1xuICBtZXJnZVByb3BzKHByb3BzLnJlZmVyZW5jZSwgcGFyc2VkKTtcblxuICByZXR1cm4gcGFyc2VkO1xufVxuIiwgImV4cG9ydCBjb25zdCB7IEZyYWdtZW50LCBqc3gsIGpzeHMgfSA9IFNwaWNldGlmeS5SZWFjdEpTWDtcbiIsICJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZmlsbD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVhY3RJY29uQ29tcG9uZW50ID0gRkM8SWNvblByb3BzPiAmIHtcbiAgZGVmYXVsdFByb3BzPzogUGFydGlhbDxJY29uUHJvcHM+O1xufTtcblxuY29uc3QgaWNvbkRhdGEgPSB7XG4gIHNlYXJjaDoge1xuICAgIHBhdGg6IFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAwMTYgOS41IDYuNSA2LjUgMCAxMDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBsYXk6IHtcbiAgICBwYXRoOiBcIk04IDV2MTRsMTEtN3pcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgcGF1c2U6IHtcbiAgICBwYXRoOiBcIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgZWRpdEJ1dHRvbjoge1xuICAgIHBhdGg6IFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICBwYXRoOiBcIk03Ljk2IDUuMzNhMi42NyAyLjY3IDAgMTE1LjM0IDIuNjcgMi42NyAyLjY3IDAgMDEtNS4zNC0yLjY3Wk02LjY3IDhBMS4zMyAxLjMzIDAgMTA5LjMzIDggMS4zMyAxLjMzIDAgMDA2LjY3IDhabTQuODItNC44MWEuOTUuOTQgMCAwMS0xLjEtLjc1TDEwLjA1LjU1QS40Ny40NyAwIDAwOS42OC4xNyA4LjEgOC4xIDAgMDA2LjMyLjE3LjQ3LjQ3IDAgMDA1Ljk2LjU1TDUuNjEgMi40NGEuOTUuOTUgMCAwMS0xLjI1LjcxTDIuNTUgMi41MWEuNDcuNDcgMCAwMC0uNTEuMTNDMS4yOCAzLjQ3LjcxIDQuNDYuMzYgNS41M2EuNDcuNDcgMCAwMC4xNC41MUwxLjk3IDcuMjhhLjk0Ljk0IDAgMDEwIDEuNDNMLjUgOS45NWEuNDcuNDcgMCAwMC0uMTQuNTEgNy45OCA3Ljk4IDAgMDAxLjY4IDIuOS40Ny40NyAwIDAwLjUxLjEzbDEuODEtLjY1YS45NC45NCAwIDAxMS4yNS43MmwuMzQgMS44OWMuMDQuMTguMTguMzMuMzcuMzdhOC4xIDguMSAwIDAwMy4zNiAwIC40Ny40NyAwIDAwLjM3LS4zN2wuMzQtMS44OWEuOTUuOTUgMCAwMTEuMjUtLjcybDEuODEuNjVjLjE4LjA2LjM4LjAxLjUxLS4xMy43Ni0uODQgMS4zNC0xLjgyIDEuNjgtMi45YS40Ny40NyAwIDAwLS4xNC0uNUwxNC4wMyA4LjcyYS45NC45NCAwIDAxMC0xLjQ0TDE1LjUgNi4wNGEuNDcuNDcgMCAwMC4xNC0uNSA3Ljk4IDcuOTggMCAwMC0xLjY4LTIuOS40Ny40NyAwIDAwLS41MS0uMTNsLTEuODEuNjVhLjk1Ljk1IDAgMDEtLjE1LjA0Wm0tOC44Mi43OCAxLjI1LjQ0YTIuMjggMi4yOCAwIDAwMy0xLjczbC4yNC0xLjNhNi44MSA2LjgxIDAgMDExLjY4IDBsLjI0IDEuM2EyLjI4IDIuMjggMCAwMDMuMDEgMS43M2wxLjI0LS40NGMuMzQuNDQuNjMuOTMuODQgMS40NGwtMSAuODVhMi4yNyAyLjI3IDAgMDAwIDMuNDhsMSAuODVhNi42NSA2LjY1IDAgMDEtLjg0IDEuNDRsLTEuMjQtLjQ0QTIuMjggMi4yOCAwIDAwOS4wOCAxMy4zMmwtLjI0IDEuMjlhNi44IDYuOCAwIDAxLTEuNjkgMGwtLjIzLTEuMjlBMi4yOCAyLjI4IDAgMDAzLjkxIDExLjU5bC0xLjI0LjQ0YTYuNjUgNi42NSAwIDAxLS44NC0xLjQ0bDEtLjg2YTIuMjcgMi4yNyAwIDAwMC0zLjQ3bC0xLS44NWMuMjEtLjUxLjUtMSAuODQtMS40NFpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBwYXRoOiBcIk0zMS4wOTggMjkuNzk0IDE2Ljk1NSAxNS42NSAzMS4wOTcgMS41MSAyOS42ODMuMDkzIDE1LjU0IDE0LjIzNyAxLjQuMDk0LS4wMTYgMS41MDggMTQuMTI2IDE1LjY1LS4wMTYgMjkuNzk1bDEuNDE0IDEuNDE0TDE1LjU0IDE3LjA2NWwxNC4xNDQgMTQuMTQzXCIsXG4gICAgc2l6ZTogMzIsXG4gIH0sXG4gIGR1cGxpY2F0ZToge1xuICAgIHBhdGg6IFwiTTE1IDMuNWMwLS41LS41LTEtMS0xSDExVjFjMC0uNS0uNS0xLTEtMUgyQzEuNSAwIDEgLjUgMSAxVjExLjVjMCAuNS41IDEgMSAxSDQuNVYxNWMwIC41LjUgMSAxIDFIMTRjLjUgMCAxLS41IDEtMVpNMi41IDJjMC0uMjUuMjUtLjUuNS0uNUg5Yy4yNSAwIC41LjI1LjUuNXY4LjVjMCAuMjUtLjI1LjUtLjUuNUgzYy0uMjUgMC0uNS0uMjUtLjUtLjVabTQgMTIuNWMtLjI1IDAtLjUtLjI1LS41LS41VjEyLjVoNGMuNSAwIDEtLjUgMS0xVjRoMmMuMjUgMCAuNS4yNS41LjVWMTRjMCAuMjUtLjI1LjUtLjUuNVpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBJY29uTmFtZSA9IGtleW9mIHR5cGVvZiBpY29uRGF0YTtcblxuY29uc3QgY3JlYXRlUmVhY3RDb21wb25lbnQgPSAobmFtZTogSWNvbk5hbWUpOiBSZWFjdEljb25Db21wb25lbnQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHNpemU6IGRlZmF1bHRTaXplIH0gPSBpY29uRGF0YVtuYW1lXTtcbiAgY29uc3QgQ29tcG9uZW50OiBSZWFjdEljb25Db21wb25lbnQgPSAoeyBzaXplID0gZGVmYXVsdFNpemUsIGZpbGwgPSBcImN1cnJlbnRDb2xvclwiIH0pID0+IChcbiAgICA8c3ZnXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB2aWV3Qm94PXtgMCAwICR7ZGVmYXVsdFNpemV9ICR7ZGVmYXVsdFNpemV9YH1cbiAgICAgIHdpZHRoPXtzaXplfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogZGVmYXVsdFNpemUsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgfTtcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmludGVyZmFjZSBJY29uQ29sbGVjdGlvbiB7XG4gIHJhdzogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xuICByZWFjdDogUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+O1xuICBodG1sOiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG59XG5cbmNvbnN0IHsgcmF3LCByZWFjdCwgaHRtbCB9ID0gKE9iamVjdC5rZXlzKGljb25EYXRhKSBhcyBJY29uTmFtZVtdKS5yZWR1Y2U8SWNvbkNvbGxlY3Rpb24+KFxuICAoYWNjLCBuYW1lKSA9PiB7XG4gICAgYWNjLnJhd1tuYW1lXSA9IGljb25EYXRhW25hbWVdLnBhdGg7XG4gICAgYWNjLnJlYWN0W25hbWVdID0gY3JlYXRlUmVhY3RDb21wb25lbnQobmFtZSk7XG4gICAgYWNjLmh0bWxbbmFtZV0gPSBgPHBhdGggZD1cIiR7aWNvbkRhdGFbbmFtZV0ucGF0aH1cIi8+YDtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7XG4gICAgcmF3OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gICAgcmVhY3Q6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PixcbiAgICBodG1sOiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgSWNvbnMgPSB7XG4gIFJlYWN0OiByZWFjdCxcbiAgSFRNTDogaHRtbCxcbiAgUkFXOiByYXcsXG59O1xuIiwgImV4cG9ydCBjb25zdCB7XG4gIENoaWxkcmVuLFxuICBDb21wb25lbnQsXG4gIEZyYWdtZW50LFxuICBQcm9maWxlcixcbiAgUHVyZUNvbXBvbmVudCxcbiAgU3RyaWN0TW9kZSxcbiAgU3VzcGVuc2UsXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFxuICBhY3QsXG4gIGNsb25lRWxlbWVudCxcbiAgY3JlYXRlQ29udGV4dCxcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlRmFjdG9yeSxcbiAgY3JlYXRlUmVmLFxuICBmb3J3YXJkUmVmLFxuICBpc1ZhbGlkRWxlbWVudCxcbiAgbGF6eSxcbiAgbWVtbyxcbiAgc3RhcnRUcmFuc2l0aW9uLFxuICB1bnN0YWJsZV9hY3QsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VEZWJ1Z1ZhbHVlLFxuICB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUlkLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VJbnNlcnRpb25FZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVkdWNlcixcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUsXG4gIHVzZVRyYW5zaXRpb24sXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3Q7XG4iLCAiZXhwb3J0IGNvbnN0IHtcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGNyZWF0ZVBvcnRhbCxcbiAgY3JlYXRlUm9vdCxcbiAgZmluZERPTU5vZGUsXG4gIGZsdXNoU3luYyxcbiAgaHlkcmF0ZSxcbiAgaHlkcmF0ZVJvb3QsXG4gIHJlbmRlcixcbiAgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxcbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsXG4gIHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyLFxuICB2ZXJzaW9uLFxufSA9IFNwaWNldGlmeS5SZWFjdERPTTtcblxuZXhwb3J0IGRlZmF1bHQgU3BpY2V0aWZ5LlJlYWN0RE9NO1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjUpO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLWNhcmQpLCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCkgc2F0dXJhdGUoMS40KSBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5tb2RhbF9fY29udGFpbmVyLS1sYXJnZSB7XG4gIHdpZHRoOiBjbGFtcCg1NTBweCwgNjB2dywgNjUwcHgpO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xufVxuXG4ubW9kYWxfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzJweCAzMnB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMSk7XG59XG5cbi5tb2RhbF9fdGl0bGVDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLm1vZGFsX19pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5tb2RhbF9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xufVxuXG4ubW9kYWxfX2NvbnRlbnQgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB0eXBlIHsgQ29tcG9uZW50VHlwZSwgRkMsIEtleWJvYXJkRXZlbnQsIE1vdXNlRXZlbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnQsIG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290LCB0eXBlIFJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BvcHVwTW9kYWwuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4vaWNvbnMudHN4XCI7XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9wdXBNb2RhbFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ6IFJlYWN0Tm9kZSB8IENvbXBvbmVudFR5cGU8YW55PjtcbiAgaXNMYXJnZT86IGJvb2xlYW47XG4gIGJ1dHRvbnM/OiBSZWFjdE5vZGU7XG4gIGljb24/OiBSZWFjdE5vZGU7XG4gIHRlbXBsYXRlPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIE1vZGFsQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBQb3B1cE1vZGFsUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5sZXQgbW9kYWxSb290OiBSb290IHwgbnVsbCA9IG51bGw7XG5jb25zdCBtb2RhbENvbnRhaW5lcklkID0gXCJwb3B1cC1tb2RhbC1jb250YWluZXJcIjtcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxDb250YWluZXJJZCk7XG4gIGlmIChtb2RhbFJvb3QpIHtcbiAgICBtb2RhbFJvb3QudW5tb3VudCgpO1xuICAgIG1vZGFsUm9vdCA9IG51bGw7XG4gIH1cbiAgaWYgKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG59O1xuXG5jb25zdCBNb2RhbENvbXBvbmVudDogRkM8TW9kYWxDb21wb25lbnRQcm9wcz4gPSBtZW1vKFxuICAoeyB0aXRsZSwgY29udGVudCwgaXNMYXJnZSwgYnV0dG9ucywgaWNvbiwgdGVtcGxhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24gYXMgYW55KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93biBhcyBhbnkpO1xuICAgICAgfTtcbiAgICB9LCBbb25DbG9zZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKTogUmVhY3ROb2RlID0+IHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjb250ZW50KSkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IENvbnRlbnRDb21wb25lbnQgPSBjb250ZW50IGFzIENvbXBvbmVudFR5cGU7XG4gICAgICAgIHJldHVybiA8Q29udGVudENvbXBvbmVudCAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH07XG5cbiAgICBpZiAodGVtcGxhdGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBvbkNsaWNrPXtoYW5kbGVCYWNrZHJvcENsaWNrfSByZWY9e21vZGFsUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsX19jb250YWluZXIke2lzTGFyZ2UgPyBcIiBtb2RhbF9fY29udGFpbmVyLS1sYXJnZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtpY29uICYmIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2ljb25cIj57aWNvbn08L2Rpdj59XG4gICAgICAgICAgICAgICAge3RpdGxlICYmIDxoMSBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj57dGl0bGV9PC9oMT59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b25Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7YnV0dG9uc31cbiAgICAgICAgICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyIGxhYmVsPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbiBtb2RhbF9fYnV0dG9uLS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmNsb3NlIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19jb250ZW50XCI+e3JlbmRlckNvbnRlbnQoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbGlja30gcmVmPXttb2RhbFJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWxfX2NvbnRhaW5lciR7aXNMYXJnZSA/IFwiIG1vZGFsX19jb250YWluZXItLWxhcmdlXCIgOiBcIlwifWB9PlxuICAgICAgICAgIHtyZW5kZXJDb250ZW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBQb3B1cE1vZGFsID0gKHByb3BzOiBQb3B1cE1vZGFsUHJvcHMpOiB2b2lkID0+IHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQ29udGFpbmVySWQpKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pZCA9IG1vZGFsQ29udGFpbmVySWQ7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBtb2RhbFJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG4gIG1vZGFsUm9vdC5yZW5kZXIoPE1vZGFsQ29tcG9uZW50IHsuLi5wcm9wc30gb25DbG9zZT17Y2xvc2VNb2RhbH0gLz4pO1xufTtcblxuUG9wdXBNb2RhbC5oaWRlID0gY2xvc2VNb2RhbDtcbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC5zbGlkZXIge1xuICAtLWZpbGwtY29sb3I6IHZhcigtLXNwaWNlLWJ1dHRvbi1hY3RpdmUsICMxZWQ3NjApO1xuICAtLXRyYWNrLWNvbG9yOiB2YXIoLS1zcGljZS1idXR0b24tZGlzYWJsZWQsICM1MzUzNTMpO1xuICAtLXRodW1iLWNvbG9yOiB2YXIoLS1zcGljZS10ZXh0LCAjZmZmZmZmKTtcbiAgLS10ZXh0LWNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0LCAjYjNiM2IzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLnNsaWRlcl9fdGh1bWIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuc2xpZGVyX19maWxsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXItdGltZSB7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLnNsaWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5zbGlkZXJfX3RyYWNrIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFjay1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAgIC5zbGlkZXJfX2ZpbGwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIH1cblxuICAgICAgLnNsaWRlcl9fdGh1bWIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYi1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgeyB0eXBlIEZDLCBtZW1vLCB0eXBlIFBvaW50ZXJFdmVudCBhcyBSZWFjdFBvaW50ZXJFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNsaWRlclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NsaWRlci5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzbGlkZXJTdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByb3BzIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIGRlZmF1bHRWYWx1ZT86IG51bWJlcjtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xuICBvblJlbGVhc2U/OiAoKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbGlkZXI6IEZDPFNsaWRlclByb3BzPiA9IG1lbW8oXG4gICh7IHZhbHVlLCBtaW4gPSAwLCBtYXggPSAxMDAsIHN0ZXAgPSAxLCBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlLCBvblJlbGVhc2UsIGRpc2FibGVkIH0pID0+IHtcbiAgICBjb25zdCBzbGlkZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGlzRHJhZ2dpbmcgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgY29uc3QgY29udHJvbGxlZFZhbHVlID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IHByb2dyZXNzID1cbiAgICAgIG1heCA+IG1pbiAmJiBjb250cm9sbGVkVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/ICgoY29udHJvbGxlZFZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMFxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBoYW5kbGVJbnRlcmFjdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlclJlZi5jdXJyZW50IHx8IGRpc2FibGVkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVjdCA9IHNsaWRlclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjbGllbnRYID0gZS5jbGllbnRYO1xuXG4gICAgICAgIGNvbnN0IG5ld1ggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjbGllbnRYIC0gcmVjdC5sZWZ0LCByZWN0LndpZHRoKSk7XG5cbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKG5ld1ggLyByZWN0LndpZHRoKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICBuZXdWYWx1ZSA9IE1hdGgucm91bmQobmV3VmFsdWUgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihuZXdWYWx1ZSwgbWF4KSk7XG5cbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgfSxcbiAgICAgIFttaW4sIG1heCwgc3RlcCwgb25DaGFuZ2UsIGRpc2FibGVkXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlUG9pbnRlckRvd24gPSB1c2VDYWxsYmFjayhcbiAgICAgIChlOiBSZWFjdFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZGlzYWJsZWQgfHwgIXNsaWRlclJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgICAgaXNEcmFnZ2luZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVyUmVmLmN1cnJlbnQuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuXG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9uKGUubmF0aXZlRXZlbnQgYXMgUG9pbnRlckV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBbaGFuZGxlSW50ZXJhY3Rpb24sIGRpc2FibGVkXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlUG9pbnRlck1vdmUgPSB1c2VDYWxsYmFjayhcbiAgICAgIChlOiBSZWFjdFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBoYW5kbGVJbnRlcmFjdGlvbihlLm5hdGl2ZUV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XG4gICAgICB9LFxuICAgICAgW2hhbmRsZUludGVyYWN0aW9uXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlUG9pbnRlclJlbGVhc2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChlOiBSZWFjdFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcuY3VycmVudCB8fCAhc2xpZGVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICBpc0RyYWdnaW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgc2xpZGVyUmVmLmN1cnJlbnQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcblxuICAgICAgICBvblJlbGVhc2U/LigpO1xuICAgICAgfSxcbiAgICAgIFtvblJlbGVhc2VdLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgb25Qb2ludGVyQ2FuY2VsPXtoYW5kbGVQb2ludGVyUmVsZWFzZX1cbiAgICAgICAgICBvblBvaW50ZXJEb3duPXtoYW5kbGVQb2ludGVyRG93bn1cbiAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtoYW5kbGVQb2ludGVyTW92ZX1cbiAgICAgICAgICBvblBvaW50ZXJVcD17aGFuZGxlUG9pbnRlclJlbGVhc2V9XG4gICAgICAgICAgcmVmPXtzbGlkZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fdHJhY2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX19maWxsXCIgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fdGh1bWJcIiBzdHlsZT17eyBsZWZ0OiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4pO1xuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IGxpc3RlbmVyQ291bnQgPSAwO1xubGV0IGludGVydmFsSWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBzdGFydFByb2dyZXNzVHJhY2tpbmcgPSAoKTogdm9pZCA9PiB7XG4gIGlmIChpbnRlcnZhbElkKSByZXR1cm47XG4gIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGU7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmVtaXQoXCJwcm9ncmVzc1wiLCBjdXJyZW50U3RhdGUpO1xuICB9LCAxMDApO1xufTtcblxuY29uc3Qgc3RvcFByb2dyZXNzVHJhY2tpbmcgPSAoKTogdm9pZCA9PiB7XG4gIGlmIChpbnRlcnZhbElkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFBsYXllclN0YXRlSXRlbSB7XG4gIHVyaTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUGxheWVyU3RhdGUge1xuICBpdGVtPzogUGxheWVyU3RhdGVJdGVtO1xuICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgcG9zaXRpb25Bc09mVGltZXN0YW1wOiBudW1iZXI7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgVXNlUGxheWVyUmV0dXJuIHtcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgaXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrOiBib29sZWFuO1xuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xuICBoYW5kbGVTbGlkZXJDaGFuZ2U6IChuZXdQb3NpdGlvbjogbnVtYmVyKSA9PiB2b2lkO1xuICBoYW5kbGVTbGlkZXJSZWxlYXNlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKHRyYWNrVXJpOiBzdHJpbmcsIHRyYWNrRHVyYXRpb246IG51bWJlcik6IFVzZVBsYXllclJldHVybiA9PiB7XG4gIGNvbnN0IFtwbGF5ZXJTdGF0ZSwgc2V0UGxheWVyU3RhdGVdID0gdXNlU3RhdGU8UGxheWVyU3RhdGU+KFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3N0YXRlKTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4odHJhY2tEdXJhdGlvbik7XG5cbiAgY29uc3QgaXNTbGlkZXJEcmFnZ2luZyA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHNlZWtQb3NpdGlvblJlZiA9IHVzZVJlZjxudW1iZXI+KDApO1xuXG4gIGNvbnN0IHVwZGF0ZVBsYXllckRhdGEgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3UGxheWVyU3RhdGU6IFBsYXllclN0YXRlLCBpc1Byb2dyZXNzVXBkYXRlID0gZmFsc2UpOiB2b2lkID0+IHtcbiAgICAgIHNldFBsYXllclN0YXRlKG5ld1BsYXllclN0YXRlKTtcblxuICAgICAgY29uc3QgaXNQbGF5aW5nVGhpc1RyYWNrID0gbmV3UGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaTtcblxuICAgICAgaWYgKGlzUGxheWluZ1RoaXNUcmFjaykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzUHJvZ3Jlc3NVcGRhdGUgJiZcbiAgICAgICAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCAhPT0gMCAmJlxuICAgICAgICAgIG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcCA8IDUwMFxuICAgICAgICApIHtcbiAgICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnNlZWtUbyhzZWVrUG9zaXRpb25SZWYuY3VycmVudCk7XG4gICAgICAgICAgc2Vla1Bvc2l0aW9uUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkUG9zaXRpb24gPVxuICAgICAgICAgICAgaXNQcm9ncmVzc1VwZGF0ZSAmJiAhbmV3UGxheWVyU3RhdGUuaXNQYXVzZWRcbiAgICAgICAgICAgICAgPyBuZXdQbGF5ZXJTdGF0ZS5wb3NpdGlvbkFzT2ZUaW1lc3RhbXAgKyAoRGF0ZS5ub3coKSAtIG5ld1BsYXllclN0YXRlLnRpbWVzdGFtcClcbiAgICAgICAgICAgICAgOiBuZXdQbGF5ZXJTdGF0ZS5wb3NpdGlvbkFzT2ZUaW1lc3RhbXA7XG5cbiAgICAgICAgICBzZXRQb3NpdGlvbihNYXRoLm1pbihjYWxjdWxhdGVkUG9zaXRpb24sIG5ld1BsYXllclN0YXRlLmR1cmF0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREdXJhdGlvbihuZXdQbGF5ZXJTdGF0ZS5kdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQb3NpdGlvbigwKTtcbiAgICAgICAgc2V0RHVyYXRpb24odHJhY2tEdXJhdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdHJhY2tVcmksIHRyYWNrRHVyYXRpb25dLFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgIHN0YXJ0UHJvZ3Jlc3NUcmFja2luZygpO1xuICAgIH1cbiAgICBsaXN0ZW5lckNvdW50Kys7XG5cbiAgICBjb25zdCBpbml0aWFsUGxheWVyU3RhdGUgPSBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9zdGF0ZTtcbiAgICB1cGRhdGVQbGF5ZXJEYXRhKGluaXRpYWxQbGF5ZXJTdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGVMaXN0ZW5lciA9IChldmVudDogeyBkYXRhOiBQbGF5ZXJTdGF0ZSB9KTogdm9pZCA9PiB1cGRhdGVQbGF5ZXJEYXRhKGV2ZW50LmRhdGEpO1xuICAgIGNvbnN0IHByb2dyZXNzTGlzdGVuZXIgPSAoZXZlbnQ6IHsgZGF0YTogUGxheWVyU3RhdGUgfSk6IHZvaWQgPT5cbiAgICAgIHVwZGF0ZVBsYXllckRhdGEoZXZlbnQuZGF0YSwgdHJ1ZSk7XG5cbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuYWRkTGlzdGVuZXIoXCJ1cGRhdGVcIiwgdXBkYXRlTGlzdGVuZXIsIHt9KTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuYWRkTGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBwcm9ncmVzc0xpc3RlbmVyLCB7fSk7XG5cbiAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgbGlzdGVuZXJDb3VudC0tO1xuICAgICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICAgc3RvcFByb2dyZXNzVHJhY2tpbmcoKTtcbiAgICAgIH1cbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVMaXN0ZW5lciwge30pO1xuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgcHJvZ3Jlc3NMaXN0ZW5lciwge30pO1xuICAgIH07XG4gIH0sIFt1cGRhdGVQbGF5ZXJEYXRhXSk7XG5cbiAgY29uc3QgdG9nZ2xlUGxheSA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50UGxheWluZ1RyYWNrID0gcGxheWVyU3RhdGUuaXRlbT8udXJpO1xuICAgIGlmIChjdXJyZW50UGxheWluZ1RyYWNrID09PSB0cmFja1VyaSkge1xuICAgICAgcGxheWVyU3RhdGUuaXNQYXVzZWRcbiAgICAgICAgPyBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnJlc3VtZSh7fSlcbiAgICAgICAgOiBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBhdXNlKHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5wbGF5KFxuICAgICAgICB7XG4gICAgICAgICAgdXJpOiB0cmFja1VyaSxcbiAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApO1xuICAgIH1cbiAgfSwgW3BsYXllclN0YXRlLCB0cmFja1VyaV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNsaWRlckNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdQb3NpdGlvbjogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gICAgc2Vla1Bvc2l0aW9uUmVmLmN1cnJlbnQgPSBuZXdQb3NpdGlvbjtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNsaWRlclJlbGVhc2UgPSB1c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XG4gICAgaWYgKGlzU2xpZGVyRHJhZ2dpbmcuY3VycmVudCkge1xuICAgICAgY29uc3QgaXNTYW1lVHJhY2tJblBsYXllciA9IHBsYXllclN0YXRlLml0ZW0/LnVyaSA9PT0gdHJhY2tVcmk7XG5cbiAgICAgIGlmICghaXNTYW1lVHJhY2tJblBsYXllcikge1xuICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJpOiB0cmFja1VyaSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHt9LFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5zZWVrVG8ocG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuICB9LCBbcG9zaXRpb24sIHRyYWNrVXJpLCBwbGF5ZXJTdGF0ZV0pO1xuXG4gIGNvbnN0IGlzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayA9IHVzZU1lbW8oXG4gICAgKCk6IGJvb2xlYW4gPT4gIXBsYXllclN0YXRlLmlzUGF1c2VkICYmIHBsYXllclN0YXRlLml0ZW0/LnVyaSA9PT0gdHJhY2tVcmksXG4gICAgW3BsYXllclN0YXRlLCB0cmFja1VyaV0sXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbixcbiAgICBkdXJhdGlvbixcbiAgICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2ssXG4gICAgdG9nZ2xlUGxheSxcbiAgICBoYW5kbGVTbGlkZXJDaGFuZ2UsXG4gICAgaGFuZGxlU2xpZGVyUmVsZWFzZSxcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc2xpZGVyLnRzeFwiO1xuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2VQbGF5ZXIudHNcIjtcblxuaW50ZXJmYWNlIFRyYWNrIHtcbiAgdXJpOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZHVyYXRpb25fbXM6IG51bWJlcjtcbiAgYWxidW06IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2VzOiBBcnJheTx7IHVybDogc3RyaW5nIH0+O1xuICB9O1xuICBhcnRpc3RzOiBBcnJheTx7IG5hbWU6IHN0cmluZyB9Pjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXJ0aXN0VXJpOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgZm9ybWF0RHVyYXRpb24gPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBzZWNvbmRzICUgNjA7XG4gIHJldHVybiBgJHttaW51dGVzfToke3JlbWFpbmluZ1NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbn07XG5cbmNvbnN0IGZvcm1hdFRpbWUgPSAobXM6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4ge1xuICBpZiAobXMgPT0gbnVsbCB8fCBtcyA8IDApIHJldHVybiBcIi0tOi0tXCI7XG4gIGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gIHJldHVybiBgJHtNYXRoLmZsb29yKHMgLyA2MCl9OiR7KHMgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbn07XG5cbmNvbnN0IFRyYWNrUGxheWJhY2tDb250cm9sID0gKHsgdXJpLCBkdXJhdGlvbiB9OiB7IHVyaTogc3RyaW5nOyBkdXJhdGlvbjogbnVtYmVyIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uLFxuICAgIGR1cmF0aW9uOiBwbGF5ZXJEdXJhdGlvbixcbiAgICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2ssXG4gICAgdG9nZ2xlUGxheSxcbiAgICBoYW5kbGVTbGlkZXJDaGFuZ2UsXG4gICAgaGFuZGxlU2xpZGVyUmVsZWFzZSxcbiAgfSA9IHVzZVBsYXllcih1cmksIGR1cmF0aW9uKTtcblxuICBjb25zdCBkaXNwbGF5RHVyYXRpb24gPSBwbGF5ZXJEdXJhdGlvbiB8fCBkdXJhdGlvbiB8fCAwO1xuXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAobXM6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGlmIChtcyA9PSBudWxsIHx8IG1zIDwgMCkgcmV0dXJuIFwiLS06LS1cIjtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xuICAgIHJldHVybiBgJHtNYXRoLmZsb29yKHMgLyA2MCl9OiR7KHMgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1wbGF5YmFjay1jb250cm9sc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9PlxuICAgICAgICB7aXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrID8gPEljb25zLlJlYWN0LnBhdXNlIHNpemU9ezE2fSAvPiA6IDxJY29ucy5SZWFjdC5wbGF5IHNpemU9ezE2fSAvPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1zbGlkZXItdGltZVwiPntmb3JtYXRUaW1lKHBvc2l0aW9uKX08L3NwYW4+XG4gICAgICA8U2xpZGVyXG4gICAgICAgIG1heD17ZGlzcGxheUR1cmF0aW9ufVxuICAgICAgICBtaW49ezB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2V9XG4gICAgICAgIG9uUmVsZWFzZT17aGFuZGxlU2xpZGVyUmVsZWFzZX1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgdmFsdWU9e3Bvc2l0aW9uIHx8IDB9XG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1zbGlkZXItdGltZVwiPntmb3JtYXRUaW1lKGRpc3BsYXlEdXJhdGlvbil9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdFNlYXJjaE1vZGFsKHsgYXJ0aXN0VXJpLCBhcnRpc3ROYW1lIH06IFByb3BzKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0cmFja3MsIHNldFRyYWNrc10gPSB1c2VTdGF0ZTxUcmFja1tdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkVHJhY2ssIHNldFNlbGVjdGVkVHJhY2tdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50UGxheWluZ1VyaSwgc2V0Q3VycmVudFBsYXlpbmdVcmldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1BhdXNlZCwgc2V0SXNQYXVzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgc2VhcmNoVGltZW91dFJlZiA9IHVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgZmV0Y2hBbGJ1bVRyYWNrcyA9IGFzeW5jIChhbGJ1bVVyaTogc3RyaW5nLCBhbGJ1bU5hbWU6IHN0cmluZywgY292ZXJBcnQ6IGFueVtdKTogUHJvbWlzZTxUcmFja1tdPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5HcmFwaFFMTG9hZGVyKFxuICAgICAgICBTcGljZXRpZnkuR3JhcGhRTC5EZWZpbml0aW9ucy5xdWVyeUFsYnVtVHJhY2tzLFxuICAgICAgICB7XG4gICAgICAgICAgdXJpOiBhbGJ1bVVyaSxcbiAgICAgICAgICBsb2NhbGU6IFNwaWNldGlmeS5Mb2NhbGUuZ2V0TG9jYWxlKCksXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIGxpbWl0OiA1MDAwLFxuICAgICAgICB9LFxuICAgICAgKSkgYXMgeyBkYXRhOiBhbnkgfTtcblxuICAgICAgY29uc3QgYWxidW1EYXRhID0gcmVzcG9uc2U/LmRhdGE/LmFsYnVtVW5pb247XG4gICAgICBjb25zdCB0cmFja3NWMiA9IGFsYnVtRGF0YT8udHJhY2tzVjI7XG4gICAgICBpZiAoIXRyYWNrc1YyPy5pdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgICBjb25zdCBpdGVtcyA9IHRyYWNrc1YyLml0ZW1zO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkgcmV0dXJuIFtdO1xuXG4gICAgICBjb25zdCByZXN1bHRzOiBUcmFja1tdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBpdGVtPy50cmFjaztcbiAgICAgICAgaWYgKCF0cmFjaykgY29udGludWU7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGNvdmVyQXJ0IHx8IHRyYWNrPy5hbGJ1bT8uY292ZXJBcnQ/LnNvdXJjZXMgfHwgW107XG4gICAgICAgIGNvbnN0IGFydGlzdHMgPSBBcnJheS5pc0FycmF5KHRyYWNrPy5hcnRpc3RzKSA/IHRyYWNrLmFydGlzdHMgOiBbXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICB1cmk6IHRyYWNrPy51cmkgfHwgXCJcIixcbiAgICAgICAgICBuYW1lOiB0cmFjaz8ubmFtZSB8fCBcIlwiLFxuICAgICAgICAgIGR1cmF0aW9uX21zOiB0cmFjaz8uZHVyYXRpb24/LnRvdGFsTXMgfHwgMCxcbiAgICAgICAgICBhbGJ1bToge1xuICAgICAgICAgICAgbmFtZTogYWxidW1OYW1lLFxuICAgICAgICAgICAgaW1hZ2VzOiBpbWFnZXMubWFwKChpbWc6IGFueSkgPT4gKHsgdXJsOiBpbWc/LnVybCB8fCBcIlwiIH0pKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFydGlzdHM6IGFydGlzdHMubWFwKChhOiBhbnkpID0+ICh7IG5hbWU6IGE/LnByb2ZpbGU/Lm5hbWUgfHwgYT8ubmFtZSB8fCBcIlwiIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gRXJyb3IgZmV0Y2hpbmcgYWxidW0gdHJhY2tzOlwiLCBhbGJ1bVVyaSwgZXJyKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hBcnRpc3RUcmFja3MgPSBhc3luYyAob25UcmFja0FkZDogKHRyYWNrczogVHJhY2tbXSkgPT4gdm9pZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uR3JhcGhRTExvYWRlcihcbiAgICAgICAgU3BpY2V0aWZ5LkdyYXBoUUwuRGVmaW5pdGlvbnMucXVlcnlBcnRpc3REaXNjb2dyYXBoeUFsbCxcbiAgICAgICAge1xuICAgICAgICAgIHVyaTogYXJ0aXN0VXJpLFxuICAgICAgICAgIGxvY2FsZTogU3BpY2V0aWZ5LkxvY2FsZS5nZXRMb2NhbGUoKSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDUwLFxuICAgICAgICB9LFxuICAgICAgKSkgYXMgeyBkYXRhOiBhbnkgfTtcblxuICAgICAgY29uc3QgZGlzY29ncmFwaHkgPSByZXNwb25zZT8uZGF0YT8uYXJ0aXN0VW5pb24/LmRpc2NvZ3JhcGh5O1xuICAgICAgaWYgKCFkaXNjb2dyYXBoeT8uYWxsPy5pdGVtcykgcmV0dXJuO1xuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGlzY29ncmFwaHkuYWxsLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VzID0gaXRlbT8ucmVsZWFzZXM/Lml0ZW1zO1xuICAgICAgICBpZiAoIXJlbGVhc2VzKSBjb250aW51ZTtcblxuICAgICAgICBmb3IgKGNvbnN0IHJlbGVhc2Ugb2YgcmVsZWFzZXMpIHtcbiAgICAgICAgICBpZiAoIXJlbGVhc2U/LnVyaSkgY29udGludWU7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgYWxidW1VcmkgPSByZWxlYXNlLnVyaTtcbiAgICAgICAgICBjb25zdCBhbGJ1bU5hbWUgPSByZWxlYXNlLm5hbWUgfHwgXCJcIjtcbiAgICAgICAgICBjb25zdCBjb3ZlckFydCA9IHJlbGVhc2UuY292ZXJBcnQ/LnNvdXJjZXMgfHwgW107XG5cbiAgICAgICAgICBjb25zdCBhbGJ1bVRyYWNrcyA9IGF3YWl0IGZldGNoQWxidW1UcmFja3MoYWxidW1VcmksIGFsYnVtTmFtZSwgY292ZXJBcnQpO1xuICAgICAgICAgIGlmIChhbGJ1bVRyYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBvblRyYWNrQWRkKGFsYnVtVHJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gRXJyb3IgZmV0Y2hpbmcgYXJ0aXN0IHRyYWNrczpcIiwgZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZFRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgIHNldFRyYWNrcyhbXSk7XG4gICAgICBhd2FpdCBmZXRjaEFydGlzdFRyYWNrcygobmV3VHJhY2tzKSA9PiB7XG4gICAgICAgIHNldFRyYWNrcygocHJldikgPT4gWy4uLnByZXYsIC4uLm5ld1RyYWNrc10pO1xuICAgICAgfSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGxvYWRUcmFja3MoKTtcbiAgfSwgW2FydGlzdFVyaV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5LnRyaW0oKSkge1xuICAgICAgc2VhcmNoVGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbcXVlcnldKTtcblxuICBjb25zdCBmaWx0ZXJlZFRyYWNrcyA9IHF1ZXJ5LnRyaW0oKVxuICAgID8gdHJhY2tzLmZpbHRlcihcbiAgICAgICAgKHRyYWNrKSA9PlxuICAgICAgICAgIHRyYWNrLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHRyYWNrLmFsYnVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgIClcbiAgICA6IHRyYWNrcztcblxuICBjb25zdCBwbGF5VHJhY2sgPSAodHJhY2tVcmk6IHN0cmluZykgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWluZ1VyaSA9PT0gdHJhY2tVcmkgJiYgIWlzUGF1c2VkKSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBhdXNlKHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5wbGF5KHsgdXJpOiB0cmFja1VyaSB9LCB7fSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFRvUXVldWUgPSBhc3luYyAodHJhY2tVcmk6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuYWRkVG9RdWV1ZShbeyB1cmk6IHRyYWNrVXJpIH1dKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQbGF5ZXJTdGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3N0YXRlO1xuICAgIGlmIChzdGF0ZT8uaXRlbT8udXJpKSB7XG4gICAgICBzZXRDdXJyZW50UGxheWluZ1VyaShzdGF0ZS5pdGVtLnVyaSk7XG4gICAgICBzZXRJc1BhdXNlZChzdGF0ZS5pc1BhdXNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRQbGF5aW5nVXJpKG51bGwpO1xuICAgICAgc2V0SXNQYXVzZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVQbGF5ZXJTdGF0ZSgpO1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVQbGF5ZXJTdGF0ZSwge30pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIoXCJ1cGRhdGVcIiwgdXBkYXRlUGxheWVyU3RhdGUsIHt9KTtcbiAgICB9O1xuICB9LCBbdXBkYXRlUGxheWVyU3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1tb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWljb25cIj5cbiAgICAgICAgICA8SWNvbnMuUmVhY3Quc2VhcmNoIHNpemU9ezIwfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaW5wdXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoIGluICR7YXJ0aXN0TmFtZX0ncyB0cmFja3MuLi5gfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgLz5cbiAgICAgICAge3F1ZXJ5ICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtY2xlYXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeShcIlwiKX0+XG4gICAgICAgICAgICA8SWNvbnMuUmVhY3QuY2xvc2Ugc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXJlc3VsdHNcIj5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkxvYWRpbmcgdHJhY2tzLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWVycm9yXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICApIDogIXF1ZXJ5LnRyaW0oKSAmJiBmaWx0ZXJlZFRyYWNrcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWhpbnRcIj5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZWFyY2ggZmlsbD1cInZhcigtLXNwaWNlLXN1YnRleHQpXCIgc2l6ZT17NDh9IC8+XG4gICAgICAgICAgICA8cD5Gb3VuZCB7ZmlsdGVyZWRUcmFja3MubGVuZ3RofSB0cmFja3MgZnJvbSB7YXJ0aXN0TmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBmaWx0ZXJlZFRyYWNrcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLW5vLXJlc3VsdHNcIj5cbiAgICAgICAgICAgIDxwPk5vIHRyYWNrcyBmb3VuZCBtYXRjaGluZyBcIntxdWVyeX1cIjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWNvdW50XCI+XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFRyYWNrcy5sZW5ndGh9IHRyYWNre2ZpbHRlcmVkVHJhY2tzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm91bmRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWxpc3RcIj5cbiAgICAgICAgICAgICAge2ZpbHRlcmVkVHJhY2tzLm1hcCgodHJhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXJ0aXN0LXNlYXJjaC10cmFjayAke3NlbGVjdGVkVHJhY2sgPT09IHRyYWNrLnVyaSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgIGtleT17dHJhY2sudXJpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUcmFjayh0cmFjay51cmkpfVxuICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4gcGxheVRyYWNrKHRyYWNrLnVyaSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFjay51cmkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1wbGF5aW5nLWluZGljYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dHJhY2suYWxidW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzJdPy51cmwgfHwgdHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2staW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWVcIj57dHJhY2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stYXJ0aXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFjay5hcnRpc3RzLm1hcCgoYSkgPT4gYS5uYW1lKS5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hbGJ1bVwiPnt0cmFjay5hbGJ1bS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1wbGF5YmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhY2tQbGF5YmFja0NvbnRyb2wgdXJpPXt0cmFjay51cml9IGR1cmF0aW9uPXt0cmFjay5kdXJhdGlvbl9tc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYXJ0aXN0LXNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtYnV0dG9uKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWJ1dHRvbi1hY3RpdmUpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1pbnB1dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNwaWNlLXN0cm9rZSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246XG4gICAgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSxcbiAgICBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1tYWluKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjE1cyBlYXNlLFxuICAgIGNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNsZWFyOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtcmVzdWx0cyB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZGluZyxcbi5hcnRpc3Qtc2VhcmNoLWhpbnQsXG4uYXJ0aXN0LXNlYXJjaC1uby1yZXN1bHRzLFxuLmFydGlzdC1zZWFyY2gtZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLWVycm9yKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtc3Bpbm5lciB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNwaWNlLXN0cm9rZSk7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBhcnRpc3Qtc2VhcmNoLXNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYXJ0aXN0LXNlYXJjaC1zcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmFydGlzdC1zZWFyY2gtY291bnQge1xuICBwYWRkaW5nOiAwIDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IDQ4cHggMWZyIGF1dG8gMjAwcHg7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tc3BpY2UtcmdiLXN0cm9rZSksIDAuMyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2suc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1jYXJkKSwgMC42KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbnVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXBsYXlpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZWQ3NjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2staW1hZ2Uge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stYXJ0aXN0cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stYWxidW0ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWR1cmF0aW9uIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3ZlciAuYXJ0aXN0LXNlYXJjaC10cmFjay1hY3Rpb25zIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFydGlzdC1zZWFyY2gtYWN0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjpcbiAgICBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsXG4gICAgY29sb3IgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZC1oaWdobGlnaHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkLW1vcmUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWQtbW9yZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZC1tb3JlOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1wbGF5YmFjay1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stcGxheWJhY2sgLmFydGlzdC1zZWFyY2gtcGxheWJhY2stY29udHJvbHMge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1wbGF5YmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFydGlzdC1zZWFyY2gtcGxheWJhY2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtc2xpZGVyLXRpbWUge1xuICBtaW4td2lkdGg6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHBhcnNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzXCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3hcIjtcbmltcG9ydCB7IFBvcHVwTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvcG9wdXBNb2RhbC50c3hcIjtcbmltcG9ydCB7IEFydGlzdFNlYXJjaE1vZGFsIH0gZnJvbSBcIi4vc2VhcmNoTW9kYWwudHN4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5jb25zb2xlLmxvZyhcIltBcnRpc3QgU2VhcmNoXSBTdGFydGluZyBleHRlbnNpb24gaW5pdGlhbGl6YXRpb24uLi5cIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGUpID0+IHtcbiAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBHbG9iYWwgZXJyb3I6XCIsIGUuZXJyb3IpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5oYW5kbGVkcmVqZWN0aW9uXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoXCJbQXJ0aXN0IFNlYXJjaF0gVW5oYW5kbGVkIHJlamVjdGlvbjpcIiwgZS5yZWFzb24pO1xufSk7XG5cbnRyeSB7XG4gIGNvbnN0IHNlYXJjaEFydGlzdE1lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICAgIGNoaWxkcmVuOiBcIlNlYXJjaCBBcnRpc3QgVHJhY2tzXCIsXG4gICAgbGVhZGluZ0ljb246IEljb25zLkhUTUwuc2VhcmNoLFxuICAgIG9uQ2xpY2s6IGFzeW5jIChfY29udGV4dDogYW55LCBfaXRlbTogYW55LCBfZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IF9jb250ZXh0IGFzIHsgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9O1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhjb250ZXh0LnByb3BzKTtcbiAgICAgIGNvbnN0IHVyaSA9IHBhcnNlZC51cmkgYXMgc3RyaW5nO1xuXG4gICAgICBpZiAoIXVyaSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIE5vIFVSSSBmb3VuZCBpbiBjb250ZXh0XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFydGlzdFVyaSA9IHVyaTtcbiAgICAgIGxldCBhcnRpc3ROYW1lID0gKHBhcnNlZC5uYW1lIGFzIHN0cmluZykgfHwgKHBhcnNlZC50aXRsZSBhcyBzdHJpbmcpIHx8IFwiXCI7XG5cbiAgICAgIGlmICghYXJ0aXN0TmFtZSB8fCBhcnRpc3ROYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgICAgICBTcGljZXRpZnkuR3JhcGhRTC5EZWZpbml0aW9ucy5xdWVyeUFydGlzdERpc2NvZ3JhcGh5QWxsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmk6IGFydGlzdFVyaSxcbiAgICAgICAgICAgICAgbG9jYWxlOiBTcGljZXRpZnkuTG9jYWxlLmdldExvY2FsZSgpLFxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGFydGlzdE5hbWUgPSByZXNwb25zZT8uZGF0YT8uYXJ0aXN0VW5pb24/LnByb2ZpbGU/Lm5hbWUgfHwgXCJcIjtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIltBcnRpc3QgU2VhcmNoXSBFcnJvciBmZXRjaGluZyBhcnRpc3QgbmFtZTpcIiwgZXJyKTtcbiAgICAgICAgICBhcnRpc3ROYW1lID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBQb3B1cE1vZGFsKHtcbiAgICAgICAgdGl0bGU6IGBTZWFyY2g6ICR7YXJ0aXN0TmFtZSB8fCBcIkFydGlzdFwifWAsXG4gICAgICAgIGNvbnRlbnQ6IDxBcnRpc3RTZWFyY2hNb2RhbCBhcnRpc3ROYW1lPXthcnRpc3ROYW1lIHx8IFwiQXJ0aXN0XCJ9IGFydGlzdFVyaT17YXJ0aXN0VXJpfSAvPixcbiAgICAgICAgaXNMYXJnZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNob3VsZEFkZDogKHByb3BzOiBhbnksIF90cmlnZ2VyOiBhbnksIF90YXJnZXQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhwcm9wcyk7XG4gICAgICBjb25zdCB1cmkgPSBwYXJzZWQudXJpIGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghdXJpKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk/LnR5cGU7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLkFSVElTVDtcbiAgICB9LFxuICB9KTtcblxuICBzZWFyY2hBcnRpc3RNZW51SXRlbS5yZWdpc3RlcigpO1xuXG4gIGNvbnNvbGUubG9nKFwiW0FydGlzdCBTZWFyY2hdIEV4dGVuc2lvbiBsb2FkZWQgLSBSaWdodC1jbGljayBvbiBhbiBhcnRpc3QgdG8gc2VhcmNoIHRoZWlyIHRyYWNrc1wiKTtcbn0gY2F0Y2ggKGVycikge1xuICBjb25zb2xlLmVycm9yKFwiW0FydGlzdCBTZWFyY2hdIEVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbjpcIiwgZXJyKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQU9PLFNBQVMsV0FBVyxPQUFvRDtBQUM3RSxNQUFJLENBQUMsTUFBTyxRQUFPLENBQUM7QUFFcEIsUUFBTSxTQUF1QixDQUFDO0FBRTlCLFFBQU0sYUFBYSxDQUFDLFFBQXlDLFdBQXlCO0FBQ3BGLFFBQUksQ0FBQyxVQUFVLE9BQU8sV0FBVyxTQUFVO0FBQzNDLGVBQVcsT0FBTyxRQUFRO0FBQ3hCLFVBQUksT0FBTyxPQUFPLFFBQVEsR0FBRyxHQUFHO0FBQzlCLFlBQUksT0FBTyxHQUFHLE1BQU0sUUFBVztBQUM3QixpQkFBTyxHQUFHLElBQUksT0FBTyxHQUFHO0FBQUEsUUFDMUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxhQUFXLE9BQU8sTUFBTTtBQUN4QixhQUFXLE1BQU0sTUFBTSxNQUFNO0FBQzdCLGFBQVcsTUFBTSxXQUFXLE1BQU07QUFFbEMsU0FBTztBQUNUOzs7QUM1Qk8sSUFBTSxFQUFFLFVBQVUsS0FBSyxLQUFLLElBQUksVUFBVTs7O0FDV2pELElBQU0sV0FBVztBQUFBLEVBQ2YsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUdBLElBQU0sdUJBQXVCLENBQUMsU0FBdUM7QUFDbkUsUUFBTSxFQUFFLE1BQU0sTUFBTSxZQUFZLElBQUksU0FBUyxJQUFJO0FBQ2pELFFBQU1BLGFBQWdDLENBQUMsRUFBRSxPQUFPLGFBQWEsT0FBTyxlQUFlLE1BQ2pGO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQztBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsTUFBSztBQUFBLE1BQ0wsU0FBUyxPQUFPLFdBQVcsSUFBSSxXQUFXO0FBQUEsTUFDMUMsT0FBTztBQUFBLE1BRVAsOEJBQUMsVUFBSyxHQUFHLE1BQU07QUFBQTtBQUFBLEVBQ2pCO0FBRUYsRUFBQUEsV0FBVSxlQUFlO0FBQUEsSUFDdkIsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDQSxTQUFPQTtBQUNUO0FBUUEsSUFBTSxFQUFFLEtBQUssT0FBTyxLQUFLLElBQUssT0FBTyxLQUFLLFFBQVEsRUFBaUI7QUFBQSxFQUNqRSxDQUFDLEtBQUssU0FBUztBQUNiLFFBQUksSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEVBQUU7QUFDL0IsUUFBSSxNQUFNLElBQUksSUFBSSxxQkFBcUIsSUFBSTtBQUMzQyxRQUFJLEtBQUssSUFBSSxJQUFJLFlBQVksU0FBUyxJQUFJLEVBQUUsSUFBSTtBQUNoRCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxJQUNFLEtBQUssQ0FBQztBQUFBLElBQ04sT0FBTyxDQUFDO0FBQUEsSUFDUixNQUFNLENBQUM7QUFBQSxFQUNUO0FBQ0Y7QUFFTyxJQUFNLFFBQVE7QUFBQSxFQUNuQixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixLQUFLO0FBQ1A7OztBQ3ZGTyxJQUFNO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUNBLFVBQUFDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyxxQkFBUSxVQUFVOzs7QUN2Q2xCLElBQU07QUFBQSxFQUNYLG9EQUFBQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQUFDO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyx5QkFBUSxVQUFVOzs7QUNkZixJQUFNLFFBQVEsSUFBSSxjQUFjO0FBQ2hDLE1BQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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OVRVLElBQU1DLFNBQVEsSUFBSSxjQUFjO0FBQ2hDQSxPQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBMFQzQjtBQUNTLElBQU8saUJBQVFBOzs7QUN2VHpCLFNBQVMsbUJBQW1CLEtBQUssY0FBTTtBQUV2QyxRQUFRLElBQUksc0RBQXNEO0FBRWxFLE9BQU8saUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLFVBQVEsTUFBTSxpQ0FBaUMsRUFBRSxLQUFLO0FBQ3hELENBQUM7QUFFRCxPQUFPLGlCQUFpQixzQkFBc0IsQ0FBQyxNQUFNO0FBQ25ELFVBQVEsTUFBTSx3Q0FBd0MsRUFBRSxNQUFNO0FBQ2hFLENBQUM7QUFFRCxJQUFJO0FBQ0YsUUFBTSx1QkFBdUIsSUFBSSxVQUFVLGNBQWMsS0FBSztBQUFBLElBQzVELFVBQVU7QUFBQSxJQUNWLGFBQWEsTUFBTSxLQUFLO0FBQUEsSUFDeEIsU0FBUyxPQUFPLFVBQWUsT0FBWSxXQUFnQjtBQUN6RCxZQUFNLFVBQVU7QUFDaEIsWUFBTSxTQUFTLFdBQVcsUUFBUSxLQUFLO0FBQ3ZDLFlBQU0sTUFBTSxPQUFPO0FBRW5CLFVBQUksQ0FBQyxLQUFLO0FBQ1IsZ0JBQVEsTUFBTSx5Q0FBeUM7QUFDdkQ7QUFBQSxNQUNGO0FBRUEsWUFBTSxZQUFZO0FBQ2xCLFVBQUksYUFBYyxPQUFPLFFBQW9CLE9BQU8sU0FBb0I7QUFFeEUsVUFBSSxDQUFDLGNBQWMsV0FBVyxLQUFLLE1BQU0sSUFBSTtBQUMzQyxZQUFJO0FBQ0YsZ0JBQU0sV0FBVyxNQUFNLFVBQVUsU0FBUztBQUFBLFlBQ3hDLFVBQVUsUUFBUSxZQUFZO0FBQUEsWUFDOUI7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLFFBQVEsVUFBVSxPQUFPLFVBQVU7QUFBQSxjQUNuQyxRQUFRO0FBQUEsY0FDUixPQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFDQSx1QkFBYSxVQUFVLE1BQU0sYUFBYSxTQUFTLFFBQVE7QUFBQSxRQUM3RCxTQUFTLEtBQUs7QUFDWixrQkFBUSxNQUFNLCtDQUErQyxHQUFHO0FBQ2hFLHVCQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFFQSxpQkFBVztBQUFBLFFBQ1QsT0FBTyxXQUFXLGNBQWMsUUFBUTtBQUFBLFFBQ3hDLFNBQVMsb0JBQUMscUJBQWtCLFlBQVksY0FBYyxVQUFVLFdBQXNCO0FBQUEsUUFDdEYsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFdBQVcsQ0FBQyxPQUFZLFVBQWUsWUFBaUI7QUFDdEQsWUFBTSxTQUFTLFdBQVcsS0FBSztBQUMvQixZQUFNLE1BQU0sT0FBTztBQUNuQixVQUFJLENBQUMsSUFBSyxRQUFPO0FBQ2pCLFlBQU0sT0FBTyxVQUFVLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDdEMsYUFBTyxTQUFTLFVBQVUsSUFBSSxLQUFLO0FBQUEsSUFDckM7QUFBQSxFQUNGLENBQUM7QUFFRCx1QkFBcUIsU0FBUztBQUU5QixVQUFRLElBQUksb0ZBQW9GO0FBQ2xHLFNBQVMsS0FBSztBQUNaLFVBQVEsTUFBTSxnREFBZ0QsR0FBRztBQUNuRTsiLAogICJuYW1lcyI6IFsiQ29tcG9uZW50IiwgIkZyYWdtZW50IiwgIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwgInZlcnNpb24iLCAic2hlZXQiLCAic2hlZXQiXQp9Cg==
