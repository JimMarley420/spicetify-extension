await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

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
    } catch {
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
    } catch {
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
var searchArtistMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Search Artist Tracks",
  leadingIcon: Icons.HTML.search,
  onClick: (_context, _item, _event) => {
    const uri = _context?.props?.uri;
    if (!uri) return;
    PopupModal({
      title: "Search Artist Tracks",
      content: /* @__PURE__ */ jsx(ArtistSearchModal, { artistName: "Artist", artistUri: uri }),
      isLarge: true,
      template: true
    });
  },
  shouldAdd: (props) => {
    const uri = props?.uri;
    if (!uri) return false;
    const type = Spicetify.URI.from(uri)?.type;
    return type === Spicetify.URI.Type.ARTIST;
  }
});
searchArtistMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdGFza3Mvc2hpbXMvanN4LXJ1bnRpbWUtc2hpbS50cyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3giLCAiLi4vdGFza3Mvc2hpbXMvcmVhY3Qtc2hpbS50cyIsICIuLi90YXNrcy9zaGltcy9yZWFjdC1kb20tc2hpbS50cyIsICIuLi9zaGFyZWQvc3R5bGVzL3BvcHVwTW9kYWwuY3NzIiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4IiwgIi4uL3NoYXJlZC9zdHlsZXMvc2xpZGVyLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9zbGlkZXIudHN4IiwgIi4uL3NoYXJlZC9ob29rcy91c2VQbGF5ZXIudHMiLCAiLi4vZXh0ZW5zaW9ucy9hcnRpc3RTZWFyY2gvc3JjL3NlYXJjaE1vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2FydGlzdFNlYXJjaC9zcmMvc3R5bGVzLmNzcyIsICIuLi9leHRlbnNpb25zL2FydGlzdFNlYXJjaC9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeCwganN4cyB9ID0gU3BpY2V0aWZ5LlJlYWN0SlNYO1xuIiwgImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJvcHMge1xuICBzaXplPzogbnVtYmVyO1xuICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZWFjdEljb25Db21wb25lbnQgPSBGQzxJY29uUHJvcHM+ICYge1xuICBkZWZhdWx0UHJvcHM/OiBQYXJ0aWFsPEljb25Qcm9wcz47XG59O1xuXG5jb25zdCBpY29uRGF0YSA9IHtcbiAgc2VhcmNoOiB7XG4gICAgcGF0aDogXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgcGxheToge1xuICAgIHBhdGg6IFwiTTggNXYxNGwxMS03elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBwYXVzZToge1xuICAgIHBhdGg6IFwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBlZGl0QnV0dG9uOiB7XG4gICAgcGF0aDogXCJNMTcuMzE4IDEuOTc1YTMuMzI5IDMuMzI5IDAgMTE0LjcwNyA0LjcwN0w4LjQ1MSAyMC4yNTZjLS40OS40OS0xLjA4Mi44NjctMS43MzUgMS4xMDNMMi4zNCAyMi45NGExIDEgMCAwMS0xLjI4LTEuMjhsMS41ODEtNC4zNzZhNC43MjYgNC43MjYgMCAwMTEuMTAzLTEuNzM1TDE3LjMxOCAxLjk3NXptMy4yOTMgMS40MTRhMS4zMjkgMS4zMjkgMCAwMC0xLjg4IDBMNS4xNTkgMTYuOTYzYy0uMjgzLjI4My0uNS42MjQtLjYzNiAxbC0uODU3IDIuMzcyIDIuMzcxLS44NTdhMi43MjYgMi43MjYgMCAwMDEuMDAxLS42MzZMMjAuNjExIDUuMjY4YTEuMzI5IDEuMzI5IDAgMDAwLTEuODc5elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBzZXR0aW5nczoge1xuICAgIHBhdGg6IFwiTTcuOTYgNS4zM2EyLjY3IDIuNjcgMCAxMTUuMzQgMi42NyAyLjY3IDIuNjcgMCAwMS01LjM0LTIuNjdaTTYuNjcgOEExLjMzIDEuMzMgMCAxMDkuMzMgOCAxLjMzIDEuMzMgMCAwMDYuNjcgOFptNC44Mi00LjgxYS45NS45NCAwIDAxLTEuMS0uNzVMMTAuMDUuNTVBLjQ3LjQ3IDAgMDA5LjY4LjE3IDguMSA4LjEgMCAwMDYuMzIuMTcuNDcuNDcgMCAwMDUuOTYuNTVMNS42MSAyLjQ0YS45NS45NSAwIDAxLTEuMjUuNzFMMi41NSAyLjUxYS40Ny40NyAwIDAwLS41MS4xM0MxLjI4IDMuNDcuNzEgNC40Ni4zNiA1LjUzYS40Ny40NyAwIDAwLjE0LjUxTDEuOTcgNy4yOGEuOTQuOTQgMCAwMTAgMS40M0wuNSA5Ljk1YS40Ny40NyAwIDAwLS4xNC41MSA3Ljk4IDcuOTggMCAwMDEuNjggMi45LjQ3LjQ3IDAgMDAuNTEuMTNsMS44MS0uNjVhLjk0Ljk0IDAgMDExLjI1LjcybC4zNCAxLjg5Yy4wNC4xOC4xOC4zMy4zNy4zN2E4LjEgOC4xIDAgMDAzLjM2IDAgLjQ3LjQ3IDAgMDAuMzctLjM3bC4zNC0xLjg5YS45NS45NSAwIDAxMS4yNS0uNzJsMS44MS42NWMuMTguMDYuMzguMDEuNTEtLjEzLjc2LS44NCAxLjM0LTEuODIgMS42OC0yLjlhLjQ3LjQ3IDAgMDAtLjE0LS41TDE0LjAzIDguNzJhLjk0Ljk0IDAgMDEwLTEuNDRMMTUuNSA2LjA0YS40Ny40NyAwIDAwLjE0LS41IDcuOTggNy45OCAwIDAwLTEuNjgtMi45LjQ3LjQ3IDAgMDAtLjUxLS4xM2wtMS44MS42NWEuOTUuOTUgMCAwMS0uMTUuMDRabS04LjgyLjc4IDEuMjUuNDRhMi4yOCAyLjI4IDAgMDAzLTEuNzNsLjI0LTEuM2E2LjgxIDYuODEgMCAwMTEuNjggMGwuMjQgMS4zYTIuMjggMi4yOCAwIDAwMy4wMSAxLjczbDEuMjQtLjQ0Yy4zNC40NC42My45My44NCAxLjQ0bC0xIC44NWEyLjI3IDIuMjcgMCAwMDAgMy40OGwxIC44NWE2LjY1IDYuNjUgMCAwMS0uODQgMS40NGwtMS4yNC0uNDRBMi4yOCAyLjI4IDAgMDA5LjA4IDEzLjMybC0uMjQgMS4yOWE2LjggNi44IDAgMDEtMS42OSAwbC0uMjMtMS4yOUEyLjI4IDIuMjggMCAwMDMuOTEgMTEuNTlsLTEuMjQuNDRhNi42NSA2LjY1IDAgMDEtLjg0LTEuNDRsMS0uODZhMi4yNyAyLjI3IDAgMDAwLTMuNDdsLTEtLjg1Yy4yMS0uNTEuNS0xIC44NC0xLjQ0WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBjbG9zZToge1xuICAgIHBhdGg6IFwiTTMxLjA5OCAyOS43OTQgMTYuOTU1IDE1LjY1IDMxLjA5NyAxLjUxIDI5LjY4My4wOTMgMTUuNTQgMTQuMjM3IDEuNC4wOTQtLjAxNiAxLjUwOCAxNC4xMjYgMTUuNjUtLjAxNiAyOS43OTVsMS40MTQgMS40MTRMMTUuNTQgMTcuMDY1bDE0LjE0NCAxNC4xNDNcIixcbiAgICBzaXplOiAzMixcbiAgfSxcbiAgZHVwbGljYXRlOiB7XG4gICAgcGF0aDogXCJNMTUgMy41YzAtLjUtLjUtMS0xLTFIMTFWMWMwLS41LS41LTEtMS0xSDJDMS41IDAgMSAuNSAxIDFWMTEuNWMwIC41LjUgMSAxIDFINC41VjE1YzAgLjUuNSAxIDEgMUgxNGMuNSAwIDEtLjUgMS0xWk0yLjUgMmMwLS4yNS4yNS0uNS41LS41SDljLjI1IDAgLjUuMjUuNS41djguNWMwIC4yNS0uMjUuNS0uNS41SDNjLS4yNSAwLS41LS4yNS0uNS0uNVptNCAxMi41Yy0uMjUgMC0uNS0uMjUtLjUtLjVWMTIuNWg0Yy41IDAgMS0uNSAxLTFWNGgyYy4yNSAwIC41LjI1LjUuNVYxNGMwIC4yNS0uMjUuNS0uNS41WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEljb25OYW1lID0ga2V5b2YgdHlwZW9mIGljb25EYXRhO1xuXG5jb25zdCBjcmVhdGVSZWFjdENvbXBvbmVudCA9IChuYW1lOiBJY29uTmFtZSk6IFJlYWN0SWNvbkNvbXBvbmVudCA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgc2l6ZTogZGVmYXVsdFNpemUgfSA9IGljb25EYXRhW25hbWVdO1xuICBjb25zdCBDb21wb25lbnQ6IFJlYWN0SWNvbkNvbXBvbmVudCA9ICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHZpZXdCb3g9e2AwIDAgJHtkZWZhdWx0U2l6ZX0gJHtkZWZhdWx0U2l6ZX1gfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPHBhdGggZD17cGF0aH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiBkZWZhdWx0U2l6ZSxcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICB9O1xuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuaW50ZXJmYWNlIEljb25Db2xsZWN0aW9uIHtcbiAgcmF3OiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG4gIHJlYWN0OiBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD47XG4gIGh0bWw6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbn1cblxuY29uc3QgeyByYXcsIHJlYWN0LCBodG1sIH0gPSAoT2JqZWN0LmtleXMoaWNvbkRhdGEpIGFzIEljb25OYW1lW10pLnJlZHVjZTxJY29uQ29sbGVjdGlvbj4oXG4gIChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2MucmF3W25hbWVdID0gaWNvbkRhdGFbbmFtZV0ucGF0aDtcbiAgICBhY2MucmVhY3RbbmFtZV0gPSBjcmVhdGVSZWFjdENvbXBvbmVudChuYW1lKTtcbiAgICBhY2MuaHRtbFtuYW1lXSA9IGA8cGF0aCBkPVwiJHtpY29uRGF0YVtuYW1lXS5wYXRofVwiLz5gO1xuICAgIHJldHVybiBhY2M7XG4gIH0sXG4gIHtcbiAgICByYXc6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgICByZWFjdDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+LFxuICAgIGh0bWw6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBJY29ucyA9IHtcbiAgUmVhY3Q6IHJlYWN0LFxuICBIVE1MOiBodG1sLFxuICBSQVc6IHJhdyxcbn07XG4iLCAiZXhwb3J0IGNvbnN0IHtcbiAgQ2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIFByb2ZpbGVyLFxuICBQdXJlQ29tcG9uZW50LFxuICBTdHJpY3RNb2RlLFxuICBTdXNwZW5zZSxcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGFjdCxcbiAgY2xvbmVFbGVtZW50LFxuICBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGZvcndhcmRSZWYsXG4gIGlzVmFsaWRFbGVtZW50LFxuICBsYXp5LFxuICBtZW1vLFxuICBzdGFydFRyYW5zaXRpb24sXG4gIHVuc3RhYmxlX2FjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZURlYnVnVmFsdWUsXG4gIHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlSWQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUluc2VydGlvbkVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdDtcbiIsICJleHBvcnQgY29uc3Qge1xuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgY3JlYXRlUG9ydGFsLFxuICBjcmVhdGVSb290LFxuICBmaW5kRE9NTm9kZSxcbiAgZmx1c2hTeW5jLFxuICBoeWRyYXRlLFxuICBoeWRyYXRlUm9vdCxcbiAgcmVuZGVyLFxuICB1bm1vdW50Q29tcG9uZW50QXROb2RlLFxuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxcbiAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIsXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0RE9NO1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3RET007XG4iLCAiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XG59XG5cbi5tb2RhbF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2ItY2FyZCksIDAuOTUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxLjQpIGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLm1vZGFsX19jb250YWluZXItLWxhcmdlIHtcbiAgd2lkdGg6IGNsYW1wKDU1MHB4LCA2MHZ3LCA2NTBweCk7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG59XG5cbi5tb2RhbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMnB4IDMycHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcbn1cblxuLm1vZGFsX190aXRsZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4ubW9kYWxfX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLm1vZGFsX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlIGJvdGgtZWRnZXM7XG59XG5cbi5tb2RhbF9fY29udGVudCA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRUeXBlLCBGQywgS2V5Ym9hcmRFdmVudCwgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QsIHR5cGUgUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9wdXBNb2RhbC5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi9pY29ucy50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3B1cE1vZGFsUHJvcHMge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudDogUmVhY3ROb2RlIHwgQ29tcG9uZW50VHlwZTxhbnk+O1xuICBpc0xhcmdlPzogYm9vbGVhbjtcbiAgYnV0dG9ucz86IFJlYWN0Tm9kZTtcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdGVtcGxhdGU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTW9kYWxDb21wb25lbnRQcm9wcyBleHRlbmRzIFBvcHVwTW9kYWxQcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmxldCBtb2RhbFJvb3Q6IFJvb3QgfCBudWxsID0gbnVsbDtcbmNvbnN0IG1vZGFsQ29udGFpbmVySWQgPSBcInBvcHVwLW1vZGFsLWNvbnRhaW5lclwiO1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbENvbnRhaW5lcklkKTtcbiAgaWYgKG1vZGFsUm9vdCkge1xuICAgIG1vZGFsUm9vdC51bm1vdW50KCk7XG4gICAgbW9kYWxSb290ID0gbnVsbDtcbiAgfVxuICBpZiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbn07XG5cbmNvbnN0IE1vZGFsQ29tcG9uZW50OiBGQzxNb2RhbENvbXBvbmVudFByb3BzPiA9IG1lbW8oXG4gICh7IHRpdGxlLCBjb250ZW50LCBpc0xhcmdlLCBidXR0b25zLCBpY29uLCB0ZW1wbGF0ZSwgb25DbG9zZSB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93biBhcyBhbnkpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duIGFzIGFueSk7XG4gICAgICB9O1xuICAgIH0sIFtvbkNsb3NlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQmFja2Ryb3BDbGljayA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpOiBSZWFjdE5vZGUgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgQ29udGVudENvbXBvbmVudCA9IGNvbnRlbnQgYXMgQ29tcG9uZW50VHlwZTtcbiAgICAgICAgcmV0dXJuIDxDb250ZW50Q29tcG9uZW50IC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWxfX2NvbnRhaW5lciR7aXNMYXJnZSA/IFwiIG1vZGFsX19jb250YWluZXItLWxhcmdlXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2ljb24gJiYgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faWNvblwiPntpY29ufTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7dGl0bGUgJiYgPGgxIGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPnt0aXRsZX08L2gxPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXIgbGFiZWw9XCJDbG9zZVwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uIG1vZGFsX19idXR0b24tLWNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QuY2xvc2Ugc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2NvbnRlbnRcIj57cmVuZGVyQ29udGVudCgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBvbkNsaWNrPXtoYW5kbGVCYWNrZHJvcENsaWNrfSByZWY9e21vZGFsUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IFBvcHVwTW9kYWwgPSAocHJvcHM6IFBvcHVwTW9kYWxQcm9wcyk6IHZvaWQgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxDb250YWluZXJJZCkpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gbW9kYWxDb250YWluZXJJZDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIG1vZGFsUm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgbW9kYWxSb290LnJlbmRlcig8TW9kYWxDb21wb25lbnQgey4uLnByb3BzfSBvbkNsb3NlPXtjbG9zZU1vZGFsfSAvPik7XG59O1xuXG5Qb3B1cE1vZGFsLmhpZGUgPSBjbG9zZU1vZGFsO1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLnNsaWRlciB7XG4gIC0tZmlsbC1jb2xvcjogdmFyKC0tc3BpY2UtYnV0dG9uLWFjdGl2ZSwgIzFlZDc2MCk7XG4gIC0tdHJhY2stY29sb3I6IHZhcigtLXNwaWNlLWJ1dHRvbi1kaXNhYmxlZCwgIzUzNTM1Myk7XG4gIC0tdGh1bWItY29sb3I6IHZhcigtLXNwaWNlLXRleHQsICNmZmZmZmYpO1xuICAtLXRleHQtY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQsICNiM2IzYjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuc2xpZGVyX190aHVtYiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5zbGlkZXJfX2ZpbGwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlci10aW1lIHtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnNsaWRlcl9fdHJhY2sge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYWNrLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgLnNsaWRlcl9fZmlsbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuXG4gICAgICAuc2xpZGVyX190aHVtYiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHR5cGUgRkMsIG1lbW8sIHR5cGUgUG9pbnRlckV2ZW50IGFzIFJlYWN0UG9pbnRlckV2ZW50LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2xpZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNsaWRlclN0eWxlcyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJvcHMge1xuICB2YWx1ZTogbnVtYmVyO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgc3RlcD86IG51bWJlcjtcbiAgZGVmYXVsdFZhbHVlPzogbnVtYmVyO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uUmVsZWFzZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNsaWRlcjogRkM8U2xpZGVyUHJvcHM+ID0gbWVtbyhcbiAgKHsgdmFsdWUsIG1pbiA9IDAsIG1heCA9IDEwMCwgc3RlcCA9IDEsIGRlZmF1bHRWYWx1ZSwgb25DaGFuZ2UsIG9uUmVsZWFzZSwgZGlzYWJsZWQgfSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgaXNEcmFnZ2luZyA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVkVmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPVxuICAgICAgbWF4ID4gbWluICYmIGNvbnRyb2xsZWRWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKChjb250cm9sbGVkVmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyYWN0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghc2xpZGVyUmVmLmN1cnJlbnQgfHwgZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCByZWN0ID0gc2xpZGVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBlLmNsaWVudFg7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNsaWVudFggLSByZWN0LmxlZnQsIHJlY3Qud2lkdGgpKTtcblxuICAgICAgICBsZXQgbmV3VmFsdWUgPSAobmV3WCAvIHJlY3Qud2lkdGgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5yb3VuZChuZXdWYWx1ZSAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG5ld1ZhbHVlLCBtYXgpKTtcblxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB9LFxuICAgICAgW21pbiwgbWF4LCBzdGVwLCBvbkNoYW5nZSwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyRG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChkaXNhYmxlZCB8fCAhc2xpZGVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICBpc0RyYWdnaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG5cbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZS5uYXRpdmVFdmVudCBhcyBQb2ludGVyRXZlbnQpO1xuICAgICAgfSxcbiAgICAgIFtoYW5kbGVJbnRlcmFjdGlvbiwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyTW92ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9uKGUubmF0aXZlRXZlbnQgYXMgUG9pbnRlckV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBbaGFuZGxlSW50ZXJhY3Rpb25dLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50IHx8ICFzbGlkZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgIGlzRHJhZ2dpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuXG4gICAgICAgIG9uUmVsZWFzZT8uKCk7XG4gICAgICB9LFxuICAgICAgW29uUmVsZWFzZV0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e2hhbmRsZVBvaW50ZXJSZWxlYXNlfVxuICAgICAgICAgIG9uUG9pbnRlckRvd249e2hhbmRsZVBvaW50ZXJEb3dufVxuICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2hhbmRsZVBvaW50ZXJNb3ZlfVxuICAgICAgICAgIG9uUG9pbnRlclVwPXtoYW5kbGVQb2ludGVyUmVsZWFzZX1cbiAgICAgICAgICByZWY9e3NsaWRlclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190cmFja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2ZpbGxcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190aHVtYlwiIHN0eWxlPXt7IGxlZnQ6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgbGlzdGVuZXJDb3VudCA9IDA7XG5sZXQgaW50ZXJ2YWxJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IHN0YXJ0UHJvZ3Jlc3NUcmFja2luZyA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKGludGVydmFsSWQpIHJldHVybjtcbiAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9zdGF0ZTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuZW1pdChcInByb2dyZXNzXCIsIGN1cnJlbnRTdGF0ZSk7XG4gIH0sIDEwMCk7XG59O1xuXG5jb25zdCBzdG9wUHJvZ3Jlc3NUcmFja2luZyA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKGludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIGludGVydmFsSWQgPSBudWxsO1xuICB9XG59O1xuXG5pbnRlcmZhY2UgUGxheWVyU3RhdGVJdGVtIHtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQbGF5ZXJTdGF0ZSB7XG4gIGl0ZW0/OiBQbGF5ZXJTdGF0ZUl0ZW07XG4gIGlzUGF1c2VkOiBib29sZWFuO1xuICBwb3NpdGlvbkFzT2ZUaW1lc3RhbXA6IG51bWJlcjtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBVc2VQbGF5ZXJSZXR1cm4ge1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2s6IGJvb2xlYW47XG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XG4gIGhhbmRsZVNsaWRlckNoYW5nZTogKG5ld1Bvc2l0aW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIGhhbmRsZVNsaWRlclJlbGVhc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAodHJhY2tVcmk6IHN0cmluZywgdHJhY2tEdXJhdGlvbjogbnVtYmVyKTogVXNlUGxheWVyUmV0dXJuID0+IHtcbiAgY29uc3QgW3BsYXllclN0YXRlLCBzZXRQbGF5ZXJTdGF0ZV0gPSB1c2VTdGF0ZTxQbGF5ZXJTdGF0ZT4oU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGUpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPih0cmFja0R1cmF0aW9uKTtcblxuICBjb25zdCBpc1NsaWRlckRyYWdnaW5nID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgc2Vla1Bvc2l0aW9uUmVmID0gdXNlUmVmPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgdXBkYXRlUGxheWVyRGF0YSA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdQbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUsIGlzUHJvZ3Jlc3NVcGRhdGUgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICAgICAgc2V0UGxheWVyU3RhdGUobmV3UGxheWVyU3RhdGUpO1xuXG4gICAgICBjb25zdCBpc1BsYXlpbmdUaGlzVHJhY2sgPSBuZXdQbGF5ZXJTdGF0ZS5pdGVtPy51cmkgPT09IHRyYWNrVXJpO1xuXG4gICAgICBpZiAoaXNQbGF5aW5nVGhpc1RyYWNrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNQcm9ncmVzc1VwZGF0ZSAmJlxuICAgICAgICAgIHNlZWtQb3NpdGlvblJlZi5jdXJyZW50ICE9PSAwICYmXG4gICAgICAgICAgbmV3UGxheWVyU3RhdGUucG9zaXRpb25Bc09mVGltZXN0YW1wIDwgNTAwXG4gICAgICAgICkge1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuc2Vla1RvKHNlZWtQb3NpdGlvblJlZi5jdXJyZW50KTtcbiAgICAgICAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzU2xpZGVyRHJhZ2dpbmcuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQb3NpdGlvbiA9XG4gICAgICAgICAgICBpc1Byb2dyZXNzVXBkYXRlICYmICFuZXdQbGF5ZXJTdGF0ZS5pc1BhdXNlZFxuICAgICAgICAgICAgICA/IG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcCArIChEYXRlLm5vdygpIC0gbmV3UGxheWVyU3RhdGUudGltZXN0YW1wKVxuICAgICAgICAgICAgICA6IG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcDtcblxuICAgICAgICAgIHNldFBvc2l0aW9uKE1hdGgubWluKGNhbGN1bGF0ZWRQb3NpdGlvbiwgbmV3UGxheWVyU3RhdGUuZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldER1cmF0aW9uKG5ld1BsYXllclN0YXRlLmR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBvc2l0aW9uKDApO1xuICAgICAgICBzZXREdXJhdGlvbih0cmFja0R1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt0cmFja1VyaSwgdHJhY2tEdXJhdGlvbl0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgc3RhcnRQcm9ncmVzc1RyYWNraW5nKCk7XG4gICAgfVxuICAgIGxpc3RlbmVyQ291bnQrKztcblxuICAgIGNvbnN0IGluaXRpYWxQbGF5ZXJTdGF0ZSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3N0YXRlO1xuICAgIHVwZGF0ZVBsYXllckRhdGEoaW5pdGlhbFBsYXllclN0YXRlKTtcblxuICAgIGNvbnN0IHVwZGF0ZUxpc3RlbmVyID0gKGV2ZW50OiB7IGRhdGE6IFBsYXllclN0YXRlIH0pOiB2b2lkID0+IHVwZGF0ZVBsYXllckRhdGEoZXZlbnQuZGF0YSk7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaXN0ZW5lciA9IChldmVudDogeyBkYXRhOiBQbGF5ZXJTdGF0ZSB9KTogdm9pZCA9PlxuICAgICAgdXBkYXRlUGxheWVyRGF0YShldmVudC5kYXRhLCB0cnVlKTtcblxuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVMaXN0ZW5lciwge30pO1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHByb2dyZXNzTGlzdGVuZXIsIHt9KTtcblxuICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICBsaXN0ZW5lckNvdW50LS07XG4gICAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgICBzdG9wUHJvZ3Jlc3NUcmFja2luZygpO1xuICAgICAgfVxuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZUxpc3RlbmVyLCB7fSk7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBwcm9ncmVzc0xpc3RlbmVyLCB7fSk7XG4gICAgfTtcbiAgfSwgW3VwZGF0ZVBsYXllckRhdGFdKTtcblxuICBjb25zdCB0b2dnbGVQbGF5ID0gdXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5aW5nVHJhY2sgPSBwbGF5ZXJTdGF0ZS5pdGVtPy51cmk7XG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nVHJhY2sgPT09IHRyYWNrVXJpKSB7XG4gICAgICBwbGF5ZXJTdGF0ZS5pc1BhdXNlZFxuICAgICAgICA/IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucmVzdW1lKHt9KVxuICAgICAgICA6IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2Uoe30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IHRyYWNrVXJpLFxuICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgICk7XG4gICAgfVxuICB9LCBbcGxheWVyU3RhdGUsIHRyYWNrVXJpXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1Bvc2l0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCA9IG5ld1Bvc2l0aW9uO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpc1NhbWVUcmFja0luUGxheWVyID0gcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaTtcblxuICAgICAgaWYgKCFpc1NhbWVUcmFja0luUGxheWVyKSB7XG4gICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGxheShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmk6IHRyYWNrVXJpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnNlZWtUbyhwb3NpdGlvbik7XG4gICAgICB9XG4gICAgICBpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIFtwb3NpdGlvbiwgdHJhY2tVcmksIHBsYXllclN0YXRlXSk7XG5cbiAgY29uc3QgaXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrID0gdXNlTWVtbyhcbiAgICAoKTogYm9vbGVhbiA9PiAhcGxheWVyU3RhdGUuaXNQYXVzZWQgJiYgcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaSxcbiAgICBbcGxheWVyU3RhdGUsIHRyYWNrVXJpXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGlzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayxcbiAgICB0b2dnbGVQbGF5LFxuICAgIGhhbmRsZVNsaWRlckNoYW5nZSxcbiAgICBoYW5kbGVTbGlkZXJSZWxlYXNlLFxuICB9O1xufTtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3hcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zbGlkZXIudHN4XCI7XG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2hvb2tzL3VzZVBsYXllci50c1wiO1xuXG5pbnRlcmZhY2UgVHJhY2sge1xuICB1cmk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkdXJhdGlvbl9tczogbnVtYmVyO1xuICBhbGJ1bToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbWFnZXM6IEFycmF5PHsgdXJsOiBzdHJpbmcgfT47XG4gIH07XG4gIGFydGlzdHM6IEFycmF5PHsgbmFtZTogc3RyaW5nIH0+O1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcnRpc3RVcmk6IHN0cmluZztcbiAgYXJ0aXN0TmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBmb3JtYXREdXJhdGlvbiA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcbiAgcmV0dXJuIGAke21pbnV0ZXN9OiR7cmVtYWluaW5nU2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xufTtcblxuY29uc3QgZm9ybWF0VGltZSA9IChtczogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmIChtcyA9PSBudWxsIHx8IG1zIDwgMCkgcmV0dXJuIFwiLS06LS1cIjtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwKTtcbiAgcmV0dXJuIGAke01hdGguZmxvb3IocyAvIDYwKX06JHsocyAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xufTtcblxuY29uc3QgVHJhY2tQbGF5YmFja0NvbnRyb2wgPSAoeyB1cmksIGR1cmF0aW9uIH06IHsgdXJpOiBzdHJpbmc7IGR1cmF0aW9uOiBudW1iZXIgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcG9zaXRpb24sXG4gICAgZHVyYXRpb246IHBsYXllckR1cmF0aW9uLFxuICAgIGlzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayxcbiAgICB0b2dnbGVQbGF5LFxuICAgIGhhbmRsZVNsaWRlckNoYW5nZSxcbiAgICBoYW5kbGVTbGlkZXJSZWxlYXNlLFxuICB9ID0gdXNlUGxheWVyKHVyaSwgZHVyYXRpb24pO1xuXG4gIGNvbnN0IGRpc3BsYXlEdXJhdGlvbiA9IHBsYXllckR1cmF0aW9uIHx8IGR1cmF0aW9uIHx8IDA7XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9IChtczogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgaWYgKG1zID09IG51bGwgfHwgbXMgPCAwKSByZXR1cm4gXCItLTotLVwiO1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IocyAvIDYwKX06JHsocyAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWNvbnRyb2xzXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtcGxheWJhY2stYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlUGxheX0+XG4gICAgICAgIHtpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2sgPyA8SWNvbnMuUmVhY3QucGF1c2Ugc2l6ZT17MTZ9IC8+IDogPEljb25zLlJlYWN0LnBsYXkgc2l6ZT17MTZ9IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNsaWRlci10aW1lXCI+e2Zvcm1hdFRpbWUocG9zaXRpb24pfTwvc3Bhbj5cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgbWF4PXtkaXNwbGF5RHVyYXRpb259XG4gICAgICAgIG1pbj17MH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cbiAgICAgICAgb25SZWxlYXNlPXtoYW5kbGVTbGlkZXJSZWxlYXNlfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICB2YWx1ZT17cG9zaXRpb24gfHwgMH1cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNsaWRlci10aW1lXCI+e2Zvcm1hdFRpbWUoZGlzcGxheUR1cmF0aW9uKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0U2VhcmNoTW9kYWwoeyBhcnRpc3RVcmksIGFydGlzdE5hbWUgfTogUHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlPFRyYWNrW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRUcmFjaywgc2V0U2VsZWN0ZWRUcmFja10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nVXJpLCBzZXRDdXJyZW50UGxheWluZ1VyaV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBzZWFyY2hUaW1lb3V0UmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmZXRjaEFsYnVtVHJhY2tzID0gYXN5bmMgKGFsYnVtVXJpOiBzdHJpbmcsIGFsYnVtTmFtZTogc3RyaW5nLCBjb3ZlckFydDogYW55W10pOiBQcm9taXNlPFRyYWNrW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgIFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zLnF1ZXJ5QWxidW1UcmFja3MsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IGFsYnVtVXJpLFxuICAgICAgICAgIGxvY2FsZTogU3BpY2V0aWZ5LkxvY2FsZS5nZXRMb2NhbGUoKSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDUwMDAsXG4gICAgICAgIH0sXG4gICAgICApKSBhcyB7IGRhdGE6IGFueSB9O1xuXG4gICAgICBjb25zdCBhbGJ1bURhdGEgPSByZXNwb25zZT8uZGF0YT8uYWxidW1VbmlvbjtcbiAgICAgIGNvbnN0IHRyYWNrc1YyID0gYWxidW1EYXRhPy50cmFja3NWMjtcbiAgICAgIGlmICghdHJhY2tzVjI/Lml0ZW1zKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdHJhY2tzVjIuaXRlbXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IHJlc3VsdHM6IFRyYWNrW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCB0cmFjayA9IGl0ZW0/LnRyYWNrO1xuICAgICAgICBpZiAoIXRyYWNrKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gY292ZXJBcnQgfHwgdHJhY2s/LmFsYnVtPy5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcbiAgICAgICAgY29uc3QgYXJ0aXN0cyA9IEFycmF5LmlzQXJyYXkodHJhY2s/LmFydGlzdHMpID8gdHJhY2suYXJ0aXN0cyA6IFtdO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHVyaTogdHJhY2s/LnVyaSB8fCBcIlwiLFxuICAgICAgICAgIG5hbWU6IHRyYWNrPy5uYW1lIHx8IFwiXCIsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IHRyYWNrPy5kdXJhdGlvbj8udG90YWxNcyB8fCAwLFxuICAgICAgICAgIGFsYnVtOiB7XG4gICAgICAgICAgICBuYW1lOiBhbGJ1bU5hbWUsXG4gICAgICAgICAgICBpbWFnZXM6IGltYWdlcy5tYXAoKGltZzogYW55KSA9PiAoeyB1cmw6IGltZz8udXJsIHx8IFwiXCIgfSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJ0aXN0czogYXJ0aXN0cy5tYXAoKGE6IGFueSkgPT4gKHsgbmFtZTogYT8ucHJvZmlsZT8ubmFtZSB8fCBhPy5uYW1lIHx8IFwiXCIgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaEFydGlzdFRyYWNrcyA9IGFzeW5jIChvblRyYWNrQWRkOiAodHJhY2tzOiBUcmFja1tdKSA9PiB2b2lkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5HcmFwaFFMTG9hZGVyKFxuICAgICAgICBTcGljZXRpZnkuR3JhcGhRTC5EZWZpbml0aW9ucy5xdWVyeUFydGlzdERpc2NvZ3JhcGh5QWxsLFxuICAgICAgICB7XG4gICAgICAgICAgdXJpOiBhcnRpc3RVcmksXG4gICAgICAgICAgbG9jYWxlOiBTcGljZXRpZnkuTG9jYWxlLmdldExvY2FsZSgpLFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogNTAsXG4gICAgICAgIH0sXG4gICAgICApKSBhcyB7IGRhdGE6IGFueSB9O1xuXG4gICAgICBjb25zdCBkaXNjb2dyYXBoeSA9IHJlc3BvbnNlPy5kYXRhPy5hcnRpc3RVbmlvbj8uZGlzY29ncmFwaHk7XG4gICAgICBpZiAoIWRpc2NvZ3JhcGh5Py5hbGw/Lml0ZW1zKSByZXR1cm47XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkaXNjb2dyYXBoeS5hbGwuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgcmVsZWFzZXMgPSBpdGVtPy5yZWxlYXNlcz8uaXRlbXM7XG4gICAgICAgIGlmICghcmVsZWFzZXMpIGNvbnRpbnVlO1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVsZWFzZSBvZiByZWxlYXNlcykge1xuICAgICAgICAgIGlmICghcmVsZWFzZT8udXJpKSBjb250aW51ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBhbGJ1bVVyaSA9IHJlbGVhc2UudXJpO1xuICAgICAgICAgIGNvbnN0IGFsYnVtTmFtZSA9IHJlbGVhc2UubmFtZSB8fCBcIlwiO1xuICAgICAgICAgIGNvbnN0IGNvdmVyQXJ0ID0gcmVsZWFzZS5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcblxuICAgICAgICAgIGNvbnN0IGFsYnVtVHJhY2tzID0gYXdhaXQgZmV0Y2hBbGJ1bVRyYWNrcyhhbGJ1bVVyaSwgYWxidW1OYW1lLCBjb3ZlckFydCk7XG4gICAgICAgICAgaWYgKGFsYnVtVHJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG9uVHJhY2tBZGQoYWxidW1UcmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkVHJhY2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgc2V0VHJhY2tzKFtdKTtcbiAgICAgIGF3YWl0IGZldGNoQXJ0aXN0VHJhY2tzKChuZXdUcmFja3MpID0+IHtcbiAgICAgICAgc2V0VHJhY2tzKChwcmV2KSA9PiBbLi4ucHJldiwgLi4ubmV3VHJhY2tzXSk7XG4gICAgICB9KTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgbG9hZFRyYWNrcygpO1xuICB9LCBbYXJ0aXN0VXJpXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkudHJpbSgpKSB7XG4gICAgICBzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoVGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gcXVlcnkudHJpbSgpXG4gICAgPyB0cmFja3MuZmlsdGVyKFxuICAgICAgICAodHJhY2spID0+XG4gICAgICAgICAgdHJhY2submFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgdHJhY2suYWxidW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgKVxuICAgIDogdHJhY2tzO1xuXG4gIGNvbnN0IHBsYXlUcmFjayA9ICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFja1VyaSAmJiAhaXNQYXVzZWQpIHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2Uoe30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoeyB1cmk6IHRyYWNrVXJpIH0sIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9RdWV1ZSA9IGFzeW5jICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5hZGRUb1F1ZXVlKFt7IHVyaTogdHJhY2tVcmkgfV0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVBsYXllclN0YXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlPy5pdGVtPy51cmkpIHtcbiAgICAgIHNldEN1cnJlbnRQbGF5aW5nVXJpKHN0YXRlLml0ZW0udXJpKTtcbiAgICAgIHNldElzUGF1c2VkKHN0YXRlLmlzUGF1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFBsYXlpbmdVcmkobnVsbCk7XG4gICAgICBzZXRJc1BhdXNlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVBsYXllclN0YXRlKCk7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZVBsYXllclN0YXRlLCB7fSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVQbGF5ZXJTdGF0ZSwge30pO1xuICAgIH07XG4gIH0sIFt1cGRhdGVQbGF5ZXJTdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaWNvblwiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZWFyY2ggc2l6ZT17MjB9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggaW4gJHthcnRpc3ROYW1lfSdzIHRyYWNrcy4uLmB9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgICB7cXVlcnkgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1jbGVhclwiIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KFwiXCIpfT5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxNn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtcmVzdWx0c1wiPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNwaW5uZXJcIiAvPlxuICAgICAgICAgICAgPHNwYW4+TG9hZGluZyB0cmFja3MuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtZXJyb3JcIj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICkgOiAhcXVlcnkudHJpbSgpICYmIGZpbHRlcmVkVHJhY2tzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaGludFwiPlxuICAgICAgICAgICAgPEljb25zLlJlYWN0LnNlYXJjaCBmaWxsPVwidmFyKC0tc3BpY2Utc3VidGV4dClcIiBzaXplPXs0OH0gLz5cbiAgICAgICAgICAgIDxwPkZvdW5kIHtmaWx0ZXJlZFRyYWNrcy5sZW5ndGh9IHRyYWNrcyBmcm9tIHthcnRpc3ROYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtbm8tcmVzdWx0c1wiPlxuICAgICAgICAgICAgPHA+Tm8gdHJhY2tzIGZvdW5kIG1hdGNoaW5nIFwie3F1ZXJ5fVwiPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtY291bnRcIj5cbiAgICAgICAgICAgICAge2ZpbHRlcmVkVHJhY2tzLmxlbmd0aH0gdHJhY2t7ZmlsdGVyZWRUcmFja3MubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3VuZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbGlzdFwiPlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRUcmFja3MubWFwKCh0cmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcnRpc3Qtc2VhcmNoLXRyYWNrICR7c2VsZWN0ZWRUcmFjayA9PT0gdHJhY2sudXJpID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAga2V5PXt0cmFjay51cml9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRyYWNrKHRyYWNrLnVyaSl9XG4gICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBwbGF5VHJhY2sodHJhY2sudXJpKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBsYXlpbmdVcmkgPT09IHRyYWNrLnVyaSA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXBsYXlpbmctaW5kaWNhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PXt0cmFjay5hbGJ1bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0cmFjay5hbGJ1bS5pbWFnZXNbMl0/LnVybCB8fCB0cmFjay5hbGJ1bS5pbWFnZXNbMF0/LnVybCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbmFtZVwiPnt0cmFjay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hcnRpc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFydGlzdHMubWFwKChhKSA9PiBhLm5hbWUpLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWFsYnVtXCI+e3RyYWNrLmFsYnVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLXBsYXliYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFja1BsYXliYWNrQ29udHJvbCB1cmk9e3RyYWNrLnVyaX0gZHVyYXRpb249e3RyYWNrLmR1cmF0aW9uX21zfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC5hcnRpc3Qtc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1idXR0b24pO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtYnV0dG9uLWFjdGl2ZSk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWlucHV0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3BpY2Utc3Ryb2tlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjpcbiAgICBib3JkZXItY29sb3IgMC4ycyBlYXNlLFxuICAgIGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLW1haW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtY2xlYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjpcbiAgICBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsXG4gICAgY29sb3IgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtY2xlYXI6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1yZXN1bHRzIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkaW5nLFxuLmFydGlzdC1zZWFyY2gtaGludCxcbi5hcnRpc3Qtc2VhcmNoLW5vLXJlc3VsdHMsXG4uYXJ0aXN0LXNlYXJjaC1lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFydGlzdC1zZWFyY2gtZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tc3BpY2UtZXJyb3IpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1zcGlubmVyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3BpY2Utc3Ryb2tlKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGFydGlzdC1zZWFyY2gtc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBhcnRpc3Qtc2VhcmNoLXNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uYXJ0aXN0LXNlYXJjaC1jb3VudCB7XG4gIHBhZGRpbmc6IDAgNHB4IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggNDhweCAxZnIgYXV0byAyMDBweDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc3Ryb2tlKSwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3BpY2UtcmdiLWNhcmQpLCAwLjYpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFydGlzdC1zZWFyY2gtcGxheWluZy1pbmRpY2F0b3Ige1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlZDc2MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1pbWFnZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1hcnRpc3RzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1hbGJ1bSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stZHVyYXRpb24ge1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrOmhvdmVyIC5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQgMC4xNXMgZWFzZSxcbiAgICBjb2xvciAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkLWhpZ2hsaWdodCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWQtbW9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZC1tb3JlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZC1oaWdobGlnaHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkLW1vcmU6ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1wbGF5YmFjayAuYXJ0aXN0LXNlYXJjaC1wbGF5YmFjay1jb250cm9scyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1wbGF5YmFjay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1zbGlkZXItdGltZSB7XG4gIG1pbi13aWR0aDogMzhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5pbXBvcnQgeyBQb3B1cE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4XCI7XG5pbXBvcnQgeyBBcnRpc3RTZWFyY2hNb2RhbCB9IGZyb20gXCIuL3NlYXJjaE1vZGFsLnRzeFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuY29uc3Qgc2VhcmNoQXJ0aXN0TWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIlNlYXJjaCBBcnRpc3QgVHJhY2tzXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnNlYXJjaCxcbiAgb25DbGljazogKF9jb250ZXh0OiBhbnksIF9pdGVtOiBhbnksIF9ldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgdXJpID0gX2NvbnRleHQ/LnByb3BzPy51cmk7XG4gICAgaWYgKCF1cmkpIHJldHVybjtcblxuICAgIFBvcHVwTW9kYWwoe1xuICAgICAgdGl0bGU6IFwiU2VhcmNoIEFydGlzdCBUcmFja3NcIixcbiAgICAgIGNvbnRlbnQ6IDxBcnRpc3RTZWFyY2hNb2RhbCBhcnRpc3ROYW1lPVwiQXJ0aXN0XCIgYXJ0aXN0VXJpPXt1cml9IC8+LFxuICAgICAgaXNMYXJnZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuICBzaG91bGRBZGQ6IChwcm9wczogYW55KSA9PiB7XG4gICAgY29uc3QgdXJpID0gcHJvcHM/LnVyaTtcbiAgICBpZiAoIXVyaSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHR5cGUgPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKT8udHlwZTtcbiAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLkFSVElTVDtcbiAgfSxcbn0pO1xuXG5zZWFyY2hBcnRpc3RNZW51SXRlbS5yZWdpc3RlcigpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQU8sSUFBTSxFQUFFLFVBQVUsS0FBSyxLQUFLLElBQUksVUFBVTs7O0FDV2pELElBQU0sV0FBVztBQUFBLEVBQ2YsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUdBLElBQU0sdUJBQXVCLENBQUMsU0FBdUM7QUFDbkUsUUFBTSxFQUFFLE1BQU0sTUFBTSxZQUFZLElBQUksU0FBUyxJQUFJO0FBQ2pELFFBQU1BLGFBQWdDLENBQUMsRUFBRSxPQUFPLGFBQWEsT0FBTyxlQUFlLE1BQ2pGO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQztBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsTUFBSztBQUFBLE1BQ0wsU0FBUyxPQUFPLFdBQVcsSUFBSSxXQUFXO0FBQUEsTUFDMUMsT0FBTztBQUFBLE1BRVAsOEJB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQTBUM0I7QUFDUyxJQUFPLGlCQUFRQTs7O0FDeFR6QixTQUFTLG1CQUFtQixLQUFLLGNBQU07QUFFdkMsSUFBTSx1QkFBdUIsSUFBSSxVQUFVLGNBQWMsS0FBSztBQUFBLEVBQzVELFVBQVU7QUFBQSxFQUNWLGFBQWEsTUFBTSxLQUFLO0FBQUEsRUFDeEIsU0FBUyxDQUFDLFVBQWUsT0FBWSxXQUFnQjtBQUNuRCxVQUFNLE1BQU0sVUFBVSxPQUFPO0FBQzdCLFFBQUksQ0FBQyxJQUFLO0FBRVYsZUFBVztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsU0FBUyxvQkFBQyxxQkFBa0IsWUFBVyxVQUFTLFdBQVcsS0FBSztBQUFBLE1BQ2hFLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxXQUFXLENBQUMsVUFBZTtBQUN6QixVQUFNLE1BQU0sT0FBTztBQUNuQixRQUFJLENBQUMsSUFBSyxRQUFPO0FBQ2pCLFVBQU0sT0FBTyxVQUFVLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDdEMsV0FBTyxTQUFTLFVBQVUsSUFBSSxLQUFLO0FBQUEsRUFDckM7QUFDRixDQUFDO0FBRUQscUJBQXFCLFNBQVM7IiwKICAibmFtZXMiOiBbIkNvbXBvbmVudCIsICJGcmFnbWVudCIsICJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsICJ2ZXJzaW9uIiwgInNoZWV0IiwgInNoZWV0Il0KfQo=
