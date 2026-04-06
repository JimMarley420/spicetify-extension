await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// tasks/shims/react-shim.ts
var {
  Children,
  Component,
  Fragment,
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

// tasks/shims/jsx-runtime-shim.ts
var { Fragment: Fragment2, jsx, jsxs } = Spicetify.ReactJSX;

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
  github: {
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    size: 24
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
      "aria-label": name,
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
    const size = iconData[name].size;
    acc.raw[name] = iconData[name].path;
    acc.react[name] = createReactComponent(name);
    acc.html[name] = `<svg class="artist-search-icon" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="currentColor"><path d="${iconData[name].path}"/></svg>`;
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

// shared/webpack/schema.ts
var metadataSchema = {
  "spotify.metadata.Track": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "album", type: "spotify.metadata.Album" },
      4: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      5: { name: "number", type: "sint32" },
      6: { name: "disc_number", type: "sint32" },
      7: { name: "duration", type: "sint32" },
      8: { name: "popularity", type: "sint32" },
      9: { name: "explicit", type: "bool" },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      12: { name: "file", type: "spotify.metadata.AudioFile", repeated: true },
      13: { name: "alternative", type: "spotify.metadata.Track", repeated: true },
      14: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      15: { name: "preview", type: "spotify.metadata.AudioFile", repeated: true },
      16: { name: "tags", type: "string", repeated: true },
      17: { name: "earliest_live_timestamp", type: "int64" },
      18: { name: "has_lyrics", type: "bool" },
      19: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      21: { name: "licensor", type: "spotify.metadata.Licensor" },
      22: { name: "language_of_performance", type: "string", repeated: true },
      24: { name: "original_audio", type: "spotify.metadata.Audio" },
      27: { name: "original_title", type: "string" },
      28: { name: "version_title", type: "string" },
      32: { name: "artist_with_role", type: "spotify.metadata.ArtistWithRole", repeated: true },
      36: { name: "canonical_uri", type: "string" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" },
      39: {
        name: "content_authorization_attributes",
        type: "spotify.metadata.ContentAuthorizationAttributes"
      },
      40: { name: "track_content_rating", type: "spotify.metadata.ContentRating", repeated: true },
      41: { name: "audio_formats", type: "spotify.metadata.TrackAudioFormat", repeated: true },
      43: { name: "unknown_field", type: "int32" },
      44: { name: "implementation_details", type: "spotify.metadata.ImplementationDetails" },
      47: { name: "test", type: "spotify.metadata.TestCategory" },
      129: { name: "media_type", type: "enum", enumType: "MediaType" }
    },
    enums: { MediaType: { 0: "MIXED", 1: "AUDIO", 2: "VIDEO" } }
  },
  "spotify.metadata.Album": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      4: { name: "type", type: "enum", enumType: "Type" },
      5: { name: "label", type: "string" },
      6: { name: "date", type: "spotify.metadata.Date" },
      7: { name: "popularity", type: "sint32" },
      8: { name: "genre", type: "string", repeated: true },
      9: { name: "cover", type: "spotify.metadata.Image", repeated: true },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "disc", type: "spotify.metadata.Disc", repeated: true },
      12: { name: "review", type: "string", repeated: true },
      13: { name: "copyright", type: "spotify.metadata.Copyright", repeated: true },
      14: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      15: { name: "related", type: "spotify.metadata.Album", repeated: true },
      16: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      17: { name: "cover_group", type: "spotify.metadata.ImageGroup" },
      18: { name: "original_title", type: "string" },
      19: { name: "version_title", type: "string" },
      20: { name: "type_str", type: "string" },
      23: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      25: { name: "licensor", type: "spotify.metadata.Licensor" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" }
    },
    enums: {
      Type: { 1: "ALBUM", 2: "SINGLE", 3: "COMPILATION", 4: "EP", 5: "AUDIOBOOK", 6: "PODCAST" }
    }
  },
  "spotify.metadata.ContentRating": {
    fields: {
      1: { name: "tag", type: "enum", enumType: "ContentRatingTag" },
      2: { name: "label", type: "string", repeated: true }
    },
    enums: { ContentRatingTag: { 0: "UNKNOWN", 1: "EXPLICIT" } }
  },
  "spotify.metadata.Date": {
    fields: {
      1: { name: "year", type: "sint32" },
      2: { name: "month", type: "sint32" },
      3: { name: "day", type: "sint32" }
    }
  },
  "spotify.metadata.Image": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "size", type: "enum", enumType: "Size" },
      3: { name: "width", type: "sint32" },
      4: { name: "height", type: "sint32" }
    },
    enums: { Size: { 0: "UNKNOWN", 1: "SMALL", 2: "MEDIUM", 3: "LARGE", 4: "EXTRA_LARGE" } }
  },
  "spotify.metadata.AudioFile": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "format", type: "enum", enumType: "Format" },
      3: { name: "bitrate", type: "sint32" },
      4: { name: "preview", type: "bytes" }
    },
    enums: {
      Format: { 1: "MP4", 2: "OGG", 3: "WEBM", 4: "UNKNOWN" }
    }
  },
  "spotify.metadata.Artist": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "image", type: "spotify.metadata.Image", repeated: true },
      4: { name: "genre", type: "string", repeated: true },
      5: { name: "profile", type: "spotify.metadata.ArtistProfile" }
    }
  },
  "spotify.metadata.ArtistProfile": {
    fields: {
      1: { name: "name", type: "string" },
      2: { name: "biography", type: "string" },
      3: { name: "image", type: "spotify.metadata.Image", repeated: true },
      4: { name: "artist_name", type: "spotify.metadata.LocalizedString", repeated: true }
    }
  },
  "spotify.metadata.LocalizedString": {
    fields: {
      1: { name: "locale", type: "string" },
      2: { name: "string", type: "string" }
    }
  },
  "spotify.metadata.ExternalId": {
    fields: {
      1: { name: "type", type: "string" },
      2: { name: "id", type: "string" }
    }
  },
  "spotify.metadata.Restriction": {
    fields: {
      1: { name: "countries", type: "string", repeated: true },
      2: { name: "catalogues", type: "string", repeated: true },
      3: { name: "reason", type: "enum", enumType: "Reason" }
    },
    enums: { Reason: { 0: "UNKNOWN", 1: "NOT_AVAILABLE_IN_COUNTRY", 2: "NOT_AVAILABLE_FOR_CURRENCY", 3: "NOT_AVAILABLE_FOR_USER" } }
  },
  "spotify.metadata.Availability": {
    fields: {
      1: { name: "start_time", type: "int64" },
      2: { name: "after_start_time", type: "bool" },
      3: { name: "is_available", type: "bool" }
    }
  },
  "spotify.metadata.TrackAudioFormat": {
    fields: {
      1: { name: "codec", type: "enum", enumType: "Codec" },
      2: { name: "bitrate", type: "sint32" }
    },
    enums: {
      Codec: { 0: "UNKNOWN", 1: "MP3", 2: "AAC", 3: "OGG_VORBIS", 4: "FLAC", 5: "WEBMA_OPUS", 6: "WEBMA_VORBIS" }
    }
  },
  "spotify.metadata.Audio": {
    fields: {
      1: { name: "gain", type: "sint32" },
      2: { name: "sample_offset", type: "sint32" }
    }
  },
  "spotify.metadata.Disc": {
    fields: {
      1: { name: "number", type: "sint32" },
      2: { name: "name", type: "string" }
    }
  },
  "spotify.metadata.ArtistWithRole": {
    fields: {
      1: { name: "artist", type: "spotify.metadata.Artist" },
      2: { name: "role", type: "spotify.metadata.ArtistRole", repeated: true },
      3: { name: "has_saving_rights", type: "bool" }
    }
  },
  "spotify.metadata.ArtistRole": {
    fields: {
      1: { name: "id", type: "enum", enumType: "RoleId" }
    },
    enums: {
      RoleId: { 0: "MAIN", 1: "FEATURED", 2: "REMIX", 3: "PRODUCER", 4: "COMPOSER", 5: "LYRICIST" }
    }
  },
  "spotify.metadata.SalePeriod": {
    fields: {
      1: { name: "start", type: "spotify.metadata.Date" },
      2: { name: "end", type: "spotify.metadata.Date" }
    }
  },
  "spotify.metadata.ImageGroup": {
    fields: {
      1: { name: "backing_type", type: "enum", enumType: "BackingType" },
      2: { name: "image", type: "spotify.metadata.Image", repeated: true }
    },
    enums: { BackingType: { 0: "UNKNOWN", 1: "DEFAULT", 2: "VIDEO_FRAME" } }
  },
  "spotify.metadata.Copyright": {
    fields: {
      1: { name: "type", type: "enum", enumType: "Type" },
      2: { name: "text", type: "string" }
    },
    enums: { Type: { 0: "P", 1: "C" } }
  },
  "spotify.metadata.VideoFile": {
    fields: { 1: { name: "file_id", type: "bytes" } }
  },
  "spotify.metadata.Licensor": {
    fields: {
      1: { name: "licensor_id", type: "string" }
    }
  },
  "spotify.metadata.ContentAuthorizationAttributes": {
    fields: {
      1: { name: "cat_id", type: "string" },
      2: { name: "content_rights", type: "string" },
      3: { name: "rights_owner_id", type: "string" }
    }
  },
  "spotify.metadata.ImplementationDetails": {
    fields: {
      1: { name: "impl_id", type: "string" },
      2: { name: "description", type: "string" }
    }
  },
  "spotify.metadata.PrereleaseConfig": {
    fields: {
      1: { name: "is_premium_only", type: "bool" },
      2: { name: "release_date", type: "int64" }
    }
  },
  "spotify.metadata.TestCategory": {
    fields: {
      1: { name: "category", type: "string" },
      2: { name: "is_enabled", type: "bool" }
    }
  }
};

// shared/webpack/protobuf.ts
function warn(reason, ctxOrThunk) {
  if (reason.includes("Decode error") || reason.includes("Schema not found")) {
    const ctx = typeof ctxOrThunk === "function" ? ctxOrThunk() : ctxOrThunk;
    console.warn("[Protobuf]", reason, ctx);
  }
}
var ProtobufReader = class _ProtobufReader {
  view;
  bytes;
  offset = 0;
  constructor(data) {
    if (data instanceof Uint8Array) {
      this.bytes = data;
    } else if (Array.isArray(data) || "length" in data) {
      this.bytes = new Uint8Array(Array.from(data));
    } else {
      this.bytes = new Uint8Array(Object.values(data));
    }
    this.view = new DataView(this.bytes.buffer, this.bytes.byteOffset, this.bytes.byteLength);
  }
  get isExhausted() {
    return this.offset >= this.bytes.length;
  }
  readVarint() {
    if (this.isExhausted) return null;
    let result = 0n;
    let shift = 0n;
    while (!this.isExhausted) {
      const byte = BigInt(this.bytes[this.offset++]);
      result |= (byte & 0x7fn) << shift;
      if (!(byte & 0x80n)) return result;
      shift += 7n;
      if (shift > 70n) {
        warn("Varint too long", {
          offset: this.offset,
          shift: shift.toString()
        });
        break;
      }
    }
    return null;
  }
  readZigZagVarint() {
    const n = this.readVarint();
    if (n === null) {
      warn("Invalid zigzag varint", { offset: this.offset });
      return 0n;
    }
    return n >> 1n ^ -(n & 1n);
  }
  readBytes(length) {
    const actualLength = Math.min(length, this.bytes.length - this.offset);
    const result = this.bytes.slice(this.offset, this.offset + actualLength);
    this.offset += actualLength;
    return result;
  }
  skip(wireType) {
    switch (wireType) {
      case 0:
        this.readVarint();
        break;
      case 1:
        this.offset += 8;
        break;
      case 2: {
        const len = this.readVarint();
        if (len !== null) this.offset += Number(len);
        break;
      }
      case 3:
        while (true) {
          const tag = this.readVarint();
          if (tag === null || (Number(tag) & 7) === 4) break;
          this.skip(Number(tag) & 7);
        }
        break;
      case 5:
        this.offset += 4;
        break;
      default:
        warn("Unknown wire type", {
          wireType,
          offset: this.offset
        });
    }
  }
  decode(schemaName) {
    const schema = metadataSchema[schemaName];
    if (!schema) {
      warn("Schema not found", { schemaName });
      return {};
    }
    const result = {};
    while (!this.isExhausted) {
      const tag = this.readVarint();
      if (tag === null || tag === 0n) break;
      const fieldNumber = Number(tag >> 3n);
      const wireType = Number(tag & 7n);
      const field = schema.fields[fieldNumber];
      if (!field) {
        if (wireType === 2) {
          const len = Number(this.readVarint() ?? 0n);
          const raw2 = this.readBytes(len);
          warn("Unknown field", () => ({
            schema: schemaName,
            fieldNumber,
            wireType,
            length: len,
            hex: Array.from(raw2).map((b) => b.toString(16).padStart(2, "0")).join(" "),
            ascii: new TextDecoder().decode(raw2).replace(/[^\x20-\x7E]/g, ".")
          }));
        } else {
          warn("Unknown field", {
            schema: schemaName,
            fieldNumber,
            wireType
          });
          this.skip(wireType);
        }
        continue;
      }
      let value;
      try {
        switch (field.type) {
          case "string": {
            const len = Number(this.readVarint() ?? 0n);
            value = new TextDecoder().decode(this.readBytes(len));
            break;
          }
          case "bytes": {
            const len = Number(this.readVarint() ?? 0n);
            value = Array.from(
              this.readBytes(len),
              (b) => (b < 16 ? "0" : "") + b.toString(16)
            ).join("");
            break;
          }
          case "bool":
            value = (this.readVarint() ?? 0n) !== 0n;
            break;
          case "int32":
          case "uint32":
            value = Number(this.readVarint() ?? 0n);
            break;
          case "int64":
          case "uint64": {
            const v = this.readVarint() ?? 0n;
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "sint32":
            value = Number(this.readZigZagVarint());
            break;
          case "sint64": {
            const v = this.readZigZagVarint();
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) && v >= BigInt(Number.MIN_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "fixed32":
            value = this.view.getUint32(this.offset, true);
            this.offset += 4;
            break;
          case "fixed64":
            value = this.view.getBigUint64(this.offset, true).toString();
            this.offset += 8;
            break;
          case "float":
            value = this.view.getFloat32(this.offset, true);
            this.offset += 4;
            break;
          case "double":
            value = this.view.getFloat64(this.offset, true);
            this.offset += 8;
            break;
          case "enum": {
            const enumVal = Number(this.readVarint() ?? 0n);
            value = (field.enumType && schema.enums?.[field.enumType]?.[enumVal]) ?? enumVal;
            break;
          }
          default: {
            const len = Number(this.readVarint() ?? 0n);
            value = new _ProtobufReader(this.readBytes(len)).decode(field.type);
            break;
          }
        }
      } catch (err) {
        warn("Decode error", {
          schema: schemaName,
          field: field.name,
          fieldNumber,
          wireType,
          offset: this.offset,
          error: err
        });
        continue;
      }
      if (value === void 0) continue;
      if (field.repeated) {
        if (!result[field.name]) result[field.name] = [];
        result[field.name].push(value);
      } else {
        result[field.name] = value;
      }
    }
    return result;
  }
};
function decodeProtobuf(data, schemaName) {
  const result = new ProtobufReader(data).decode(schemaName);
  return result;
}

// shared/webpack/webpack.ts
var GLOBAL_KEY = "__cached_webpack_modules";
if (!globalThis[GLOBAL_KEY]) {
  globalThis[GLOBAL_KEY] = {
    require: null,
    modules: null,
    lastModuleCount: 0,
    serviceCache: /* @__PURE__ */ new Map(),
    searchCache: /* @__PURE__ */ new Map(),
    componentCache: /* @__PURE__ */ new Map()
  };
}
var shared = globalThis[GLOBAL_KEY];
var SpotifyWebpack = {
  getModules() {
    if (!shared.require) {
      const webpack = globalThis.webpackChunkclient_web;
      if (!webpack) return shared.modules ?? [];
      shared.require = webpack.push([[/* @__PURE__ */ Symbol()], {}, (re) => re]);
    }
    if (!shared.require || !shared.require.m) return shared.modules ?? [];
    const currentKeys = Object.keys(shared.require.m);
    if (shared.modules && shared.lastModuleCount === currentKeys.length) {
      return shared.modules;
    }
    shared.modules = currentKeys.map((id) => () => {
      try {
        const module = shared.require(id);
        if (typeof module === "object" && module !== null) {
          try {
            return Object.values(module);
          } catch {
            return [module];
          }
        }
        return [module];
      } catch {
        return [];
      }
    });
    shared.lastModuleCount = currentKeys.length;
    return shared.modules;
  },
  getModuleById(id) {
    if (!shared.modules) return null;
    const index = Number(id);
    if (!isNaN(index) && shared.modules[index]) {
      return shared.modules[index]();
    }
    if (!shared.require) {
      SpotifyWebpack.getModules();
    }
    try {
      const module = shared.require?.(id);
      if (typeof module === "object" && module !== null) {
        try {
          return Object.values(module);
        } catch {
          return [module];
        }
      }
      return [module];
    } catch {
      return null;
    }
  },
  findModuleByContent(keywords) {
    const cacheKey = keywords.join(",");
    if (shared.searchCache.has(cacheKey)) {
      return shared.searchCache.get(cacheKey);
    }
    if (!shared.require || !shared.require.m) {
      try {
        SpotifyWebpack.getModules();
      } catch {
        shared.searchCache.set(cacheKey, null);
        return null;
      }
    }
    if (!shared.require?.m) return null;
    const modules = shared.require.m;
    for (const id in modules) {
      const moduleFactory = modules[id];
      if (typeof moduleFactory !== "function") continue;
      const str = Function.prototype.toString.call(moduleFactory);
      if (keywords.every((k) => str.includes(k))) {
        try {
          const mod = shared.require(id);
          shared.searchCache.set(cacheKey, mod);
          return mod;
        } catch (err) {
          console.warn(`Failed to require module ${id}:`, err);
          return null;
        }
      }
    }
    shared.searchCache.set(cacheKey, null);
    return null;
  },
  findComponentByKeywords(keywords) {
    const cacheKey = keywords.join(",");
    if (shared.componentCache.has(cacheKey)) {
      return shared.componentCache.get(cacheKey);
    }
    if (!shared.require || !shared.require.m) {
      try {
        SpotifyWebpack.getModules();
      } catch {
        shared.componentCache.set(cacheKey, null);
        return null;
      }
    }
    if (!shared.require?.m) return null;
    const modules = shared.require.m;
    let foundModuleId = null;
    for (const id in modules) {
      const moduleFactory = modules[id];
      if (typeof moduleFactory !== "function") continue;
      try {
        const str = Function.prototype.toString.call(moduleFactory);
        if (keywords.every((k) => str.includes(k))) {
          foundModuleId = id;
          break;
        }
      } catch (_e) {
      }
    }
    if (!foundModuleId) return null;
    let exports;
    try {
      exports = shared.require(foundModuleId);
    } catch {
      shared.componentCache.set(cacheKey, null);
      return null;
    }
    const isLikelyComponent = (value) => {
      if (!value) return false;
      if (value.$$typeof && Symbol.keyFor(value.$$typeof)?.includes("react")) {
        return true;
      }
      return typeof value === "function";
    };
    let result = null;
    if (isLikelyComponent(exports)) {
      result = exports;
    } else if (typeof exports === "object") {
      for (const key in exports) {
        const value = exports[key];
        if (isLikelyComponent(value)) {
          result = value;
          break;
        }
      }
    }
    shared.componentCache.set(cacheKey, result);
    return result;
  },
  findService(serviceName) {
    const modules = SpotifyWebpack.getModules();
    for (const moduleGetter of modules) {
      if (!moduleGetter || typeof moduleGetter !== "function") continue;
      const module = moduleGetter();
      if (!module) continue;
      const exports = Array.isArray(module) ? module : [module];
      for (const m of exports) {
        if (m && typeof m === "function" && m.SERVICE_ID === serviceName) return m;
      }
    }
    return null;
  },
  getClient(serviceName) {
    if (shared.serviceCache.has(serviceName)) {
      return shared.serviceCache.get(serviceName);
    }
    const ServiceClass = SpotifyWebpack.findService(serviceName);
    if (!ServiceClass) {
      throw new Error(`Spotify Service not found: ${serviceName}`);
    }
    let client;
    if (typeof ServiceClass === "function") {
      const transport = globalThis.Spicetify?.Platform?.Registry?.resolve(/* @__PURE__ */ Symbol.for("EsperantoTransport"));
      if (transport) {
        client = new ServiceClass(transport);
      } else {
        throw new Error("EsperantoTransport not available");
      }
    } else {
      client = ServiceClass;
    }
    shared.serviceCache.set(serviceName, client);
    return client;
  }
};
globalThis.SpotifyWebpack = SpotifyWebpack;

// shared/api/fetchMetadataForTracks.ts
var MetadataService = "spotify.mdata_esperanto.proto.MetadataService";
var TRACK_V4 = 10;
async function fetchMetadataForTracks(trackURIs) {
  const MetadataClient = SpotifyWebpack.getClient(MetadataService);
  const uniqueURIs = [...new Set(trackURIs)];
  const response = await MetadataClient.fetch({
    extensionQuery: [{ extensionKind: TRACK_V4, entityUri: uniqueURIs }]
  });
  const resultMap = /* @__PURE__ */ new Map();
  if (response?.extension?.[0]?.entityExtension) {
    for (const entity of response.extension[0].entityExtension) {
      const byteObject = entity.extensionData?.value;
      if (byteObject) {
        const decoded = decodeProtobuf(byteObject, "spotify.metadata.Track");
        resultMap.set(entity.entityUri, decoded);
      } else {
        resultMap.set(entity.entityUri, null);
      }
    }
  }
  return resultMap;
}

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
  const [fetchedDuration, setFetchedDuration] = useState(0);
  const effectiveDuration = duration > 0 ? duration : playerDuration > 0 ? playerDuration : fetchedDuration;
  const handleTogglePlay = async () => {
    if (effectiveDuration === 0) {
      try {
        const metadata = await fetchMetadataForTracks([uri]);
        const meta = metadata.get(uri);
        if (meta?.duration) {
          setFetchedDuration(meta.duration);
          Spicetify.Platform.PlayerAPI.seekTo(0);
        }
      } catch (e) {
        console.error("Failed to fetch duration:", e);
      }
    }
    togglePlay();
  };
  const formatTime = (ms) => {
    if (ms == null || ms <= 0) return "0:00";
    const s = Math.floor(ms / 1e3);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "artist-search-playback-controls", children: [
    /* @__PURE__ */ jsx("button", { className: "artist-search-playback-button", onClick: handleTogglePlay, children: isCurrentlyPlayingThisTrack ? /* @__PURE__ */ jsx(Icons.React.pause, { size: 16 }) : /* @__PURE__ */ jsx(Icons.React.play, { size: 16 }) }),
    /* @__PURE__ */ jsx("span", { className: "artist-search-slider-time", children: formatTime(position) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        max: effectiveDuration > 0 ? effectiveDuration : 1,
        min: 0,
        onChange: handleSliderChange,
        onRelease: handleSliderRelease,
        step: 1,
        value: position || 0
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "artist-search-slider-time", children: formatTime(effectiveDuration) })
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
  const [viewMode, setViewMode] = useState("tracks");
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
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  useEffect(() => {
    setTracks([]);
    setLoading(true);
    setError(null);
    setIsLoadingMore(false);
    let cancelled = false;
    const loadTracks = async () => {
      try {
        const allTracks = [];
        await fetchArtistTracks((newTracks) => {
          if (cancelled) return;
          allTracks.push(...newTracks);
          setTracks([...allTracks]);
        });
        if (cancelled) return;
        const batchSize = 50;
        for (let i = 0; i < allTracks.length; i += batchSize) {
          if (cancelled) break;
          const batch = allTracks.slice(i, i + batchSize);
          const uris = batch.filter((t) => t.uri && t.duration_ms === 0).map((t) => t.uri);
          if (uris.length === 0) continue;
          try {
            const metadata = await fetchMetadataForTracks(uris);
            const updatedBatch = allTracks.slice(i, i + batchSize).map((track) => {
              if (track.duration_ms === 0) {
                const meta = metadata.get(track.uri);
                if (meta?.duration) {
                  return { ...track, duration_ms: meta.duration };
                }
              }
              return track;
            });
            if (!cancelled) {
              setTracks((prev) => {
                const newTracks = [...prev];
                for (let j = 0; j < updatedBatch.length; j++) {
                  const originalIndex = i + j;
                  if (newTracks[originalIndex]) {
                    newTracks[originalIndex] = updatedBatch[j];
                  }
                }
                return newTracks;
              });
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
          } catch (e) {
            console.error("Failed to fetch batch metadata:", e);
          }
        }
        if (cancelled) return;
        setIsLoadingMore(true);
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        if (cancelled) return;
        setLoading(false);
        setIsLoadingMore(false);
      }
    };
    loadTracks();
    return () => {
      cancelled = true;
    };
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
  const albumsView = useMemo(() => {
    const albumMap = /* @__PURE__ */ new Map();
    for (const track of filteredTracks) {
      const album = track.album;
      const albumKey = album.albumUri || album.uri || album.name;
      if (!albumMap.has(albumKey)) {
        albumMap.set(albumKey, { album: track.album, tracks: [] });
      }
      albumMap.get(albumKey).tracks.push(track);
    }
    return Array.from(albumMap.values()).sort((a, b) => a.album.name.localeCompare(b.album.name));
  }, [filteredTracks]);
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
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/JimMarley420/artistsSearch",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "artist-search-github",
          "aria-label": "Open GitHub repository",
          children: /* @__PURE__ */ jsx(Icons.React.github, { size: 18 })
        }
      ),
      query && /* @__PURE__ */ jsx("button", { className: "artist-search-clear", onClick: () => setQuery(""), children: /* @__PURE__ */ jsx(Icons.React.close, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "artist-search-view-toggle", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `artist-search-view-btn ${viewMode === "tracks" ? "active" : ""}`,
          onClick: () => setViewMode("tracks"),
          children: "Tracks"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `artist-search-view-btn ${viewMode === "albums" ? "active" : ""}`,
          onClick: () => setViewMode("albums"),
          children: "Albums"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "artist-search-results", children: loading && filteredTracks.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "artist-search-loading", children: [
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
    ] }) }) : /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx("div", { className: "artist-search-count", children: viewMode === "tracks" ? `${filteredTracks.length} track${filteredTracks.length !== 1 ? "s" : ""} found` : `${albumsView.length} album${albumsView.length !== 1 ? "s" : ""} found` }),
      viewMode === "tracks" ? /* @__PURE__ */ jsx("div", { className: "artist-search-track-list", children: filteredTracks.map((track, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `artist-search-track ${selectedTrack === track.uri ? "selected" : ""}`,
          onClick: () => setSelectedTrack(track.uri),
          onDoubleClick: () => playTrack(track.uri),
          onKeyDown: (e) => {
            if (e.currentTarget === e.target && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setSelectedTrack(track.uri);
            }
          },
          tabIndex: 0,
          role: "button",
          "aria-label": `${track.name} by ${track.artists.map((a) => a.name).join(", ")}${currentPlayingUri === track.uri ? " - now playing" : ""}`,
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
      )) }) : /* @__PURE__ */ jsx("div", { className: "artist-search-album-list", children: albumsView.map((albumGroup) => /* @__PURE__ */ jsxs("div", { className: "artist-search-album-group", children: [
        /* @__PURE__ */ jsxs("div", { className: "artist-search-album-header", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: albumGroup.album.name,
              className: "artist-search-album-image",
              src: albumGroup.album.images[2]?.url || albumGroup.album.images[0]?.url || ""
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "artist-search-album-name", children: albumGroup.album.name }),
          /* @__PURE__ */ jsxs("span", { className: "artist-search-album-track-count", children: [
            albumGroup.tracks.length,
            " track",
            albumGroup.tracks.length !== 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "artist-search-album-tracks", children: albumGroup.tracks.map((track, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `artist-search-track ${selectedTrack === track.uri ? "selected" : ""}`,
            onClick: () => setSelectedTrack(track.uri),
            onDoubleClick: () => playTrack(track.uri),
            onKeyDown: (e) => {
              if (e.currentTarget !== e.target) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedTrack(track.uri);
              }
            },
            tabIndex: 0,
            role: "button",
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
              /* @__PURE__ */ jsx("div", { className: "artist-search-track-playback", children: /* @__PURE__ */ jsx(TrackPlaybackControl, { uri: track.uri, duration: track.duration_ms }) })
            ]
          },
          track.uri
        )) })
      ] }, albumGroup.album.name)) }),
      isLoadingMore && /* @__PURE__ */ jsxs("div", { className: "artist-search-loading-more", children: [
        /* @__PURE__ */ jsx("div", { className: "artist-search-spinner" }),
        /* @__PURE__ */ jsx("span", { children: "Loading more..." })
      ] })
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

.artist-search-icon {
  display: flex;
  align-items: center;
}

.artist-search-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--spice-text);
  cursor: pointer;
  background: linear-gradient(135deg, var(--spice-button) 0%, var(--spice-button-active) 100%);
  border: none;
  border-radius: 500px;
  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;
}

.artist-search-button:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
}

.artist-search-button:active {
  transform: scale(0.98);
}

.artist-search-modal {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: auto;
  overflow: hidden;
}

.artist-search-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.artist-search-view-toggle {
  display: flex;
  gap: 4px;
  padding: 4px;
  background: var(--spice-card);
  border-radius: 8px;
  margin-bottom: 8px;
}

.artist-search-view-btn {
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--spice-subtext);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.artist-search-view-btn:hover {
  color: var(--spice-text);
}

.artist-search-view-btn.active {
  color: var(--spice-text);
  background: var(--spice-highlight);
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
  padding: 12px 80px;
  font-size: 14px;
  color: var(--spice-text);
  outline: none;
  background: var(--spice-input);
  border: 1px solid transparent;
  border-radius: 24px;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.artist-search-input:focus {
  background: var(--spice-main);
  border-color: var(--spice-highlight);
  box-shadow: 0 0 0 3px rgba(var(--spice-rgb-highlight), 0.2);
}

.artist-search-input::placeholder {
  color: var(--spice-subtext);
}

.artist-search-clear {
  position: absolute;
  right: 12px;
  display: flex;
  padding: 6px;
  color: var(--spice-subtext);
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 50%;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;
}

.artist-search-clear:hover {
  color: var(--spice-text);
  background: var(--spice-card);
  transform: scale(1.1);
}

.artist-search-github {
  right: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  position: absolute;
  color: var(--spice-subtext);
  text-decoration: none;
  border-radius: 50%;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;
}

.artist-search-github:hover {
  color: var(--spice-text);
  background: var(--spice-card);
  transform: scale(1.1);
}

.artist-search-github:focus-visible {
  color: var(--spice-text);
  background: var(--spice-card);
  transform: scale(1.1);
  outline: 2px solid var(--spice-accent);
  outline-offset: 2px;
}

.artist-search-results {
  flex: 1;
  overflow-y: auto;
  scrollbar-gutter: stable;
  max-height: min(90vh, 600px);
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

.artist-search-loading-more {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  font-size: 12px;
  color: var(--spice-subtext);
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
  border-radius: 8px;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
  position: relative;
}

.artist-search-track::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.artist-search-track:hover {
  background: rgba(var(--spice-rgb-card), 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.artist-search-track:hover::before {
  opacity: 1;
}

.artist-search-track:focus-visible {
  outline: 2px solid var(--spice-highlight);
  outline-offset: 2px;
}

.artist-search-track.selected {
  background: rgba(var(--spice-rgb-card), 0.8);
  box-shadow: 0 0 0 1px var(--spice-highlight);
}

.artist-search-track-number {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--spice-subtext);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  text-align: center;
  transition: color 0.2s ease;
}

.artist-search-track:hover .artist-search-track-number {
  color: var(--spice-text);
}

.artist-search-playing-indicator {
  width: 12px;
  height: 12px;
  background-color: #1ed760;
  border-radius: 50%;
  box-shadow: 0 0 8px #1ed760;
  animation: artist-search-pulse 1.2s ease-in-out infinite;
}

@keyframes artist-search-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .artist-search-playing-indicator {
    animation: none;
    transform: none;
  }
}

.artist-search-track-image {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.artist-search-track:hover .artist-search-track-image {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.artist-search-track-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.artist-search-track-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  color: var(--spice-text);
  white-space: nowrap;
  max-width: 144px;
}

.artist-search-track-artists {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: var(--spice-subtext);
  white-space: nowrap;
}

.artist-search-track-album {
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
  gap: 2px;
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.artist-search-track:hover .artist-search-track-actions {
  opacity: 1;
  transform: translateX(0);
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
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}

.artist-search-playback-button:hover {
  background: rgba(var(--spice-rgb-selected-row), 0.2);
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.artist-search-slider-time {
  min-width: 38px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--spice-subtext);
  text-align: center;
}

.artist-search-album-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.artist-search-album-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.artist-search-album-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: rgba(var(--spice-rgb-card), 0.4);
  border-radius: 8px;
}

.artist-search-album-image {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
}

.artist-search-album-name {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: var(--spice-text);
}

.artist-search-album-track-count {
  font-size: 12px;
  color: var(--spice-subtext);
}

.artist-search-album-tracks {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 12px;
}

.artist-search-album-tracks .artist-search-track {
  display: grid;
  grid-template-columns: 32px 48px 1fr auto auto;
  gap: 12px;
  align-items: center;
  padding: 8px;
}

.artist-search-album-tracks .artist-search-track-playback {
  display: flex;
  width: 200px;
}
`);
var styles_default = sheet3;

// extensions/artistSearch/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
var searchArtistMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Search Artist Tracks",
  leadingIcon: Spicetify.SVGIcons.search,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdGFza3Mvc2hpbXMvcmVhY3Qtc2hpbS50cyIsICIuLi90YXNrcy9zaGltcy9yZWFjdC1kb20tc2hpbS50cyIsICIuLi9zaGFyZWQvc3R5bGVzL3BvcHVwTW9kYWwuY3NzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4IiwgIi4uL3NoYXJlZC9zdHlsZXMvc2xpZGVyLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9zbGlkZXIudHN4IiwgIi4uL3NoYXJlZC9ob29rcy91c2VQbGF5ZXIudHMiLCAiLi4vc2hhcmVkL3dlYnBhY2svc2NoZW1hLnRzIiwgIi4uL3NoYXJlZC93ZWJwYWNrL3Byb3RvYnVmLnRzIiwgIi4uL3NoYXJlZC93ZWJwYWNrL3dlYnBhY2sudHMiLCAiLi4vc2hhcmVkL2FwaS9mZXRjaE1ldGFkYXRhRm9yVHJhY2tzLnRzIiwgIi4uL2V4dGVuc2lvbnMvYXJ0aXN0U2VhcmNoL3NyYy9zZWFyY2hNb2RhbC50c3giLCAiLi4vZXh0ZW5zaW9ucy9hcnRpc3RTZWFyY2gvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9hcnRpc3RTZWFyY2gvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCB7XG4gIENoaWxkcmVuLFxuICBDb21wb25lbnQsXG4gIEZyYWdtZW50LFxuICBQcm9maWxlcixcbiAgUHVyZUNvbXBvbmVudCxcbiAgU3RyaWN0TW9kZSxcbiAgU3VzcGVuc2UsXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFxuICBhY3QsXG4gIGNsb25lRWxlbWVudCxcbiAgY3JlYXRlQ29udGV4dCxcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlRmFjdG9yeSxcbiAgY3JlYXRlUmVmLFxuICBmb3J3YXJkUmVmLFxuICBpc1ZhbGlkRWxlbWVudCxcbiAgbGF6eSxcbiAgbWVtbyxcbiAgc3RhcnRUcmFuc2l0aW9uLFxuICB1bnN0YWJsZV9hY3QsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VEZWJ1Z1ZhbHVlLFxuICB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUlkLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VJbnNlcnRpb25FZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVkdWNlcixcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUsXG4gIHVzZVRyYW5zaXRpb24sXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3Q7XG4iLCAiZXhwb3J0IGNvbnN0IHtcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGNyZWF0ZVBvcnRhbCxcbiAgY3JlYXRlUm9vdCxcbiAgZmluZERPTU5vZGUsXG4gIGZsdXNoU3luYyxcbiAgaHlkcmF0ZSxcbiAgaHlkcmF0ZVJvb3QsXG4gIHJlbmRlcixcbiAgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxcbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsXG4gIHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyLFxuICB2ZXJzaW9uLFxufSA9IFNwaWNldGlmeS5SZWFjdERPTTtcblxuZXhwb3J0IGRlZmF1bHQgU3BpY2V0aWZ5LlJlYWN0RE9NO1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjUpO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLWNhcmQpLCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCkgc2F0dXJhdGUoMS40KSBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5tb2RhbF9fY29udGFpbmVyLS1sYXJnZSB7XG4gIHdpZHRoOiBjbGFtcCg1NTBweCwgNjB2dywgNjUwcHgpO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xufVxuXG4ubW9kYWxfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzJweCAzMnB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMSk7XG59XG5cbi5tb2RhbF9fdGl0bGVDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLm1vZGFsX19pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5tb2RhbF9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xufVxuXG4ubW9kYWxfX2NvbnRlbnQgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImV4cG9ydCBjb25zdCB7IEZyYWdtZW50LCBqc3gsIGpzeHMgfSA9IFNwaWNldGlmeS5SZWFjdEpTWDtcbiIsICJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZmlsbD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVhY3RJY29uQ29tcG9uZW50ID0gRkM8SWNvblByb3BzPiAmIHtcbiAgZGVmYXVsdFByb3BzPzogUGFydGlhbDxJY29uUHJvcHM+O1xufTtcblxuY29uc3QgaWNvbkRhdGEgPSB7XG4gIHNlYXJjaDoge1xuICAgIHBhdGg6IFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAwMTYgOS41IDYuNSA2LjUgMCAxMDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBsYXk6IHtcbiAgICBwYXRoOiBcIk04IDV2MTRsMTEtN3pcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgcGF1c2U6IHtcbiAgICBwYXRoOiBcIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgZWRpdEJ1dHRvbjoge1xuICAgIHBhdGg6IFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICBwYXRoOiBcIk03Ljk2IDUuMzNhMi42NyAyLjY3IDAgMTE1LjM0IDIuNjcgMi42NyAyLjY3IDAgMDEtNS4zNC0yLjY3Wk02LjY3IDhBMS4zMyAxLjMzIDAgMTA5LjMzIDggMS4zMyAxLjMzIDAgMDA2LjY3IDhabTQuODItNC44MWEuOTUuOTQgMCAwMS0xLjEtLjc1TDEwLjA1LjU1QS40Ny40NyAwIDAwOS42OC4xNyA4LjEgOC4xIDAgMDA2LjMyLjE3LjQ3LjQ3IDAgMDA1Ljk2LjU1TDUuNjEgMi40NGEuOTUuOTUgMCAwMS0xLjI1LjcxTDIuNTUgMi41MWEuNDcuNDcgMCAwMC0uNTEuMTNDMS4yOCAzLjQ3LjcxIDQuNDYuMzYgNS41M2EuNDcuNDcgMCAwMC4xNC41MUwxLjk3IDcuMjhhLjk0Ljk0IDAgMDEwIDEuNDNMLjUgOS45NWEuNDcuNDcgMCAwMC0uMTQuNTEgNy45OCA3Ljk4IDAgMDAxLjY4IDIuOS40Ny40NyAwIDAwLjUxLjEzbDEuODEtLjY1YS45NC45NCAwIDAxMS4yNS43MmwuMzQgMS44OWMuMDQuMTguMTguMzMuMzcuMzdhOC4xIDguMSAwIDAwMy4zNiAwIC40Ny40NyAwIDAwLjM3LS4zN2wuMzQtMS44OWEuOTUuOTUgMCAwMTEuMjUtLjcybDEuODEuNjVjLjE4LjA2LjM4LjAxLjUxLS4xMy43Ni0uODQgMS4zNC0xLjgyIDEuNjgtMi45YS40Ny40NyAwIDAwLS4xNC0uNUwxNC4wMyA4LjcyYS45NC45NCAwIDAxMC0xLjQ0TDE1LjUgNi4wNGEuNDcuNDcgMCAwMC4xNC0uNSA3Ljk4IDcuOTggMCAwMC0xLjY4LTIuOS40Ny40NyAwIDAwLS41MS0uMTNsLTEuODEuNjVhLjk1Ljk1IDAgMDEtLjE1LjA0Wm0tOC44Mi43OCAxLjI1LjQ0YTIuMjggMi4yOCAwIDAwMy0xLjczbC4yNC0xLjNhNi44MSA2LjgxIDAgMDExLjY4IDBsLjI0IDEuM2EyLjI4IDIuMjggMCAwMDMuMDEgMS43M2wxLjI0LS40NGMuMzQuNDQuNjMuOTMuODQgMS40NGwtMSAuODVhMi4yNyAyLjI3IDAgMDAwIDMuNDhsMSAuODVhNi42NSA2LjY1IDAgMDEtLjg0IDEuNDRsLTEuMjQtLjQ0QTIuMjggMi4yOCAwIDAwOS4wOCAxMy4zMmwtLjI0IDEuMjlhNi44IDYuOCAwIDAxLTEuNjkgMGwtLjIzLTEuMjlBMi4yOCAyLjI4IDAgMDAzLjkxIDExLjU5bC0xLjI0LjQ0YTYuNjUgNi42NSAwIDAxLS44NC0xLjQ0bDEtLjg2YTIuMjcgMi4yNyAwIDAwMC0zLjQ3bC0xLS44NWMuMjEtLjUxLjUtMSAuODQtMS40NFpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBwYXRoOiBcIk0zMS4wOTggMjkuNzk0IDE2Ljk1NSAxNS42NSAzMS4wOTcgMS41MSAyOS42ODMuMDkzIDE1LjU0IDE0LjIzNyAxLjQuMDk0LS4wMTYgMS41MDggMTQuMTI2IDE1LjY1LS4wMTYgMjkuNzk1bDEuNDE0IDEuNDE0TDE1LjU0IDE3LjA2NWwxNC4xNDQgMTQuMTQzXCIsXG4gICAgc2l6ZTogMzIsXG4gIH0sXG4gIGdpdGh1Yjoge1xuICAgIHBhdGg6IFwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgZHVwbGljYXRlOiB7XG4gICAgcGF0aDogXCJNMTUgMy41YzAtLjUtLjUtMS0xLTFIMTFWMWMwLS41LS41LTEtMS0xSDJDMS41IDAgMSAuNSAxIDFWMTEuNWMwIC41LjUgMSAxIDFINC41VjE1YzAgLjUuNSAxIDEgMUgxNGMuNSAwIDEtLjUgMS0xWk0yLjUgMmMwLS4yNS4yNS0uNS41LS41SDljLjI1IDAgLjUuMjUuNS41djguNWMwIC4yNS0uMjUuNS0uNS41SDNjLS4yNSAwLS41LS4yNS0uNS0uNVptNCAxMi41Yy0uMjUgMC0uNS0uMjUtLjUtLjVWMTIuNWg0Yy41IDAgMS0uNSAxLTFWNGgyYy4yNSAwIC41LjI1LjUuNVYxNGMwIC4yNS0uMjUuNS0uNS41WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEljb25OYW1lID0ga2V5b2YgdHlwZW9mIGljb25EYXRhO1xuXG5jb25zdCBjcmVhdGVSZWFjdENvbXBvbmVudCA9IChuYW1lOiBJY29uTmFtZSk6IFJlYWN0SWNvbkNvbXBvbmVudCA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgc2l6ZTogZGVmYXVsdFNpemUgfSA9IGljb25EYXRhW25hbWVdO1xuICBjb25zdCBDb21wb25lbnQ6IFJlYWN0SWNvbkNvbXBvbmVudCA9ICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB2aWV3Qm94PXtgMCAwICR7ZGVmYXVsdFNpemV9ICR7ZGVmYXVsdFNpemV9YH1cbiAgICAgIHdpZHRoPXtzaXplfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogZGVmYXVsdFNpemUsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgfTtcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmludGVyZmFjZSBJY29uQ29sbGVjdGlvbiB7XG4gIHJhdzogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xuICByZWFjdDogUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+O1xuICBodG1sOiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG59XG5cbmNvbnN0IHsgcmF3LCByZWFjdCwgaHRtbCB9ID0gKE9iamVjdC5rZXlzKGljb25EYXRhKSBhcyBJY29uTmFtZVtdKS5yZWR1Y2U8SWNvbkNvbGxlY3Rpb24+KFxuICAoYWNjLCBuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IGljb25EYXRhW25hbWVdLnNpemU7XG4gICAgYWNjLnJhd1tuYW1lXSA9IGljb25EYXRhW25hbWVdLnBhdGg7XG4gICAgYWNjLnJlYWN0W25hbWVdID0gY3JlYXRlUmVhY3RDb21wb25lbnQobmFtZSk7XG4gICAgYWNjLmh0bWxbbmFtZV0gPSBgPHN2ZyBjbGFzcz1cImFydGlzdC1zZWFyY2gtaWNvblwiIHdpZHRoPVwiJHtzaXplfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwICR7c2l6ZX0gJHtzaXplfVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiJHtpY29uRGF0YVtuYW1lXS5wYXRofVwiLz48L3N2Zz5gO1xuICAgIHJldHVybiBhY2M7XG4gIH0sXG4gIHtcbiAgICByYXc6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgICByZWFjdDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+LFxuICAgIGh0bWw6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBJY29ucyA9IHtcbiAgUmVhY3Q6IHJlYWN0LFxuICBIVE1MOiBodG1sLFxuICBSQVc6IHJhdyxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRUeXBlLCBGQywgS2V5Ym9hcmRFdmVudCwgTW91c2VFdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QsIHR5cGUgUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9wdXBNb2RhbC5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi9pY29ucy50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3B1cE1vZGFsUHJvcHMge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudDogUmVhY3ROb2RlIHwgQ29tcG9uZW50VHlwZTxhbnk+O1xuICBpc0xhcmdlPzogYm9vbGVhbjtcbiAgYnV0dG9ucz86IFJlYWN0Tm9kZTtcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdGVtcGxhdGU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTW9kYWxDb21wb25lbnRQcm9wcyBleHRlbmRzIFBvcHVwTW9kYWxQcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmxldCBtb2RhbFJvb3Q6IFJvb3QgfCBudWxsID0gbnVsbDtcbmNvbnN0IG1vZGFsQ29udGFpbmVySWQgPSBcInBvcHVwLW1vZGFsLWNvbnRhaW5lclwiO1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbENvbnRhaW5lcklkKTtcbiAgaWYgKG1vZGFsUm9vdCkge1xuICAgIG1vZGFsUm9vdC51bm1vdW50KCk7XG4gICAgbW9kYWxSb290ID0gbnVsbDtcbiAgfVxuICBpZiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbn07XG5cbmNvbnN0IE1vZGFsQ29tcG9uZW50OiBGQzxNb2RhbENvbXBvbmVudFByb3BzPiA9IG1lbW8oXG4gICh7IHRpdGxlLCBjb250ZW50LCBpc0xhcmdlLCBidXR0b25zLCBpY29uLCB0ZW1wbGF0ZSwgb25DbG9zZSB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93biBhcyBhbnkpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duIGFzIGFueSk7XG4gICAgICB9O1xuICAgIH0sIFtvbkNsb3NlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQmFja2Ryb3BDbGljayA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpOiBSZWFjdE5vZGUgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgQ29udGVudENvbXBvbmVudCA9IGNvbnRlbnQgYXMgQ29tcG9uZW50VHlwZTtcbiAgICAgICAgcmV0dXJuIDxDb250ZW50Q29tcG9uZW50IC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWxfX2NvbnRhaW5lciR7aXNMYXJnZSA/IFwiIG1vZGFsX19jb250YWluZXItLWxhcmdlXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2ljb24gJiYgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faWNvblwiPntpY29ufTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7dGl0bGUgJiYgPGgxIGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPnt0aXRsZX08L2gxPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXIgbGFiZWw9XCJDbG9zZVwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uIG1vZGFsX19idXR0b24tLWNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QuY2xvc2Ugc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2NvbnRlbnRcIj57cmVuZGVyQ29udGVudCgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBvbkNsaWNrPXtoYW5kbGVCYWNrZHJvcENsaWNrfSByZWY9e21vZGFsUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IFBvcHVwTW9kYWwgPSAocHJvcHM6IFBvcHVwTW9kYWxQcm9wcyk6IHZvaWQgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxDb250YWluZXJJZCkpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gbW9kYWxDb250YWluZXJJZDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIG1vZGFsUm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgbW9kYWxSb290LnJlbmRlcig8TW9kYWxDb21wb25lbnQgey4uLnByb3BzfSBvbkNsb3NlPXtjbG9zZU1vZGFsfSAvPik7XG59O1xuXG5Qb3B1cE1vZGFsLmhpZGUgPSBjbG9zZU1vZGFsO1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLnNsaWRlciB7XG4gIC0tZmlsbC1jb2xvcjogdmFyKC0tc3BpY2UtYnV0dG9uLWFjdGl2ZSwgIzFlZDc2MCk7XG4gIC0tdHJhY2stY29sb3I6IHZhcigtLXNwaWNlLWJ1dHRvbi1kaXNhYmxlZCwgIzUzNTM1Myk7XG4gIC0tdGh1bWItY29sb3I6IHZhcigtLXNwaWNlLXRleHQsICNmZmZmZmYpO1xuICAtLXRleHQtY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQsICNiM2IzYjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuc2xpZGVyX190aHVtYiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5zbGlkZXJfX2ZpbGwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlci10aW1lIHtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnNsaWRlcl9fdHJhY2sge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYWNrLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgLnNsaWRlcl9fZmlsbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuXG4gICAgICAuc2xpZGVyX190aHVtYiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHR5cGUgRkMsIG1lbW8sIHR5cGUgUG9pbnRlckV2ZW50IGFzIFJlYWN0UG9pbnRlckV2ZW50LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2xpZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNsaWRlclN0eWxlcyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJvcHMge1xuICB2YWx1ZTogbnVtYmVyO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgc3RlcD86IG51bWJlcjtcbiAgZGVmYXVsdFZhbHVlPzogbnVtYmVyO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uUmVsZWFzZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNsaWRlcjogRkM8U2xpZGVyUHJvcHM+ID0gbWVtbyhcbiAgKHsgdmFsdWUsIG1pbiA9IDAsIG1heCA9IDEwMCwgc3RlcCA9IDEsIGRlZmF1bHRWYWx1ZSwgb25DaGFuZ2UsIG9uUmVsZWFzZSwgZGlzYWJsZWQgfSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgaXNEcmFnZ2luZyA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVkVmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPVxuICAgICAgbWF4ID4gbWluICYmIGNvbnRyb2xsZWRWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKChjb250cm9sbGVkVmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyYWN0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghc2xpZGVyUmVmLmN1cnJlbnQgfHwgZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCByZWN0ID0gc2xpZGVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBlLmNsaWVudFg7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNsaWVudFggLSByZWN0LmxlZnQsIHJlY3Qud2lkdGgpKTtcblxuICAgICAgICBsZXQgbmV3VmFsdWUgPSAobmV3WCAvIHJlY3Qud2lkdGgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5yb3VuZChuZXdWYWx1ZSAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG5ld1ZhbHVlLCBtYXgpKTtcblxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB9LFxuICAgICAgW21pbiwgbWF4LCBzdGVwLCBvbkNoYW5nZSwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyRG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChkaXNhYmxlZCB8fCAhc2xpZGVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICBpc0RyYWdnaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG5cbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZS5uYXRpdmVFdmVudCBhcyBQb2ludGVyRXZlbnQpO1xuICAgICAgfSxcbiAgICAgIFtoYW5kbGVJbnRlcmFjdGlvbiwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyTW92ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9uKGUubmF0aXZlRXZlbnQgYXMgUG9pbnRlckV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBbaGFuZGxlSW50ZXJhY3Rpb25dLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50IHx8ICFzbGlkZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgIGlzRHJhZ2dpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuXG4gICAgICAgIG9uUmVsZWFzZT8uKCk7XG4gICAgICB9LFxuICAgICAgW29uUmVsZWFzZV0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e2hhbmRsZVBvaW50ZXJSZWxlYXNlfVxuICAgICAgICAgIG9uUG9pbnRlckRvd249e2hhbmRsZVBvaW50ZXJEb3dufVxuICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2hhbmRsZVBvaW50ZXJNb3ZlfVxuICAgICAgICAgIG9uUG9pbnRlclVwPXtoYW5kbGVQb2ludGVyUmVsZWFzZX1cbiAgICAgICAgICByZWY9e3NsaWRlclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190cmFja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2ZpbGxcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190aHVtYlwiIHN0eWxlPXt7IGxlZnQ6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgbGlzdGVuZXJDb3VudCA9IDA7XG5sZXQgaW50ZXJ2YWxJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IHN0YXJ0UHJvZ3Jlc3NUcmFja2luZyA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKGludGVydmFsSWQpIHJldHVybjtcbiAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9zdGF0ZTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuZW1pdChcInByb2dyZXNzXCIsIGN1cnJlbnRTdGF0ZSk7XG4gIH0sIDEwMCk7XG59O1xuXG5jb25zdCBzdG9wUHJvZ3Jlc3NUcmFja2luZyA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKGludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIGludGVydmFsSWQgPSBudWxsO1xuICB9XG59O1xuXG5pbnRlcmZhY2UgUGxheWVyU3RhdGVJdGVtIHtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQbGF5ZXJTdGF0ZSB7XG4gIGl0ZW0/OiBQbGF5ZXJTdGF0ZUl0ZW07XG4gIGlzUGF1c2VkOiBib29sZWFuO1xuICBwb3NpdGlvbkFzT2ZUaW1lc3RhbXA6IG51bWJlcjtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBVc2VQbGF5ZXJSZXR1cm4ge1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2s6IGJvb2xlYW47XG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XG4gIGhhbmRsZVNsaWRlckNoYW5nZTogKG5ld1Bvc2l0aW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIGhhbmRsZVNsaWRlclJlbGVhc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAodHJhY2tVcmk6IHN0cmluZywgdHJhY2tEdXJhdGlvbjogbnVtYmVyKTogVXNlUGxheWVyUmV0dXJuID0+IHtcbiAgY29uc3QgW3BsYXllclN0YXRlLCBzZXRQbGF5ZXJTdGF0ZV0gPSB1c2VTdGF0ZTxQbGF5ZXJTdGF0ZT4oU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGUpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPih0cmFja0R1cmF0aW9uKTtcblxuICBjb25zdCBpc1NsaWRlckRyYWdnaW5nID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgc2Vla1Bvc2l0aW9uUmVmID0gdXNlUmVmPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgdXBkYXRlUGxheWVyRGF0YSA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdQbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUsIGlzUHJvZ3Jlc3NVcGRhdGUgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICAgICAgc2V0UGxheWVyU3RhdGUobmV3UGxheWVyU3RhdGUpO1xuXG4gICAgICBjb25zdCBpc1BsYXlpbmdUaGlzVHJhY2sgPSBuZXdQbGF5ZXJTdGF0ZS5pdGVtPy51cmkgPT09IHRyYWNrVXJpO1xuXG4gICAgICBpZiAoaXNQbGF5aW5nVGhpc1RyYWNrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNQcm9ncmVzc1VwZGF0ZSAmJlxuICAgICAgICAgIHNlZWtQb3NpdGlvblJlZi5jdXJyZW50ICE9PSAwICYmXG4gICAgICAgICAgbmV3UGxheWVyU3RhdGUucG9zaXRpb25Bc09mVGltZXN0YW1wIDwgNTAwXG4gICAgICAgICkge1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuc2Vla1RvKHNlZWtQb3NpdGlvblJlZi5jdXJyZW50KTtcbiAgICAgICAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzU2xpZGVyRHJhZ2dpbmcuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQb3NpdGlvbiA9XG4gICAgICAgICAgICBpc1Byb2dyZXNzVXBkYXRlICYmICFuZXdQbGF5ZXJTdGF0ZS5pc1BhdXNlZFxuICAgICAgICAgICAgICA/IG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcCArIChEYXRlLm5vdygpIC0gbmV3UGxheWVyU3RhdGUudGltZXN0YW1wKVxuICAgICAgICAgICAgICA6IG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcDtcblxuICAgICAgICAgIHNldFBvc2l0aW9uKE1hdGgubWluKGNhbGN1bGF0ZWRQb3NpdGlvbiwgbmV3UGxheWVyU3RhdGUuZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldER1cmF0aW9uKG5ld1BsYXllclN0YXRlLmR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBvc2l0aW9uKDApO1xuICAgICAgICBzZXREdXJhdGlvbih0cmFja0R1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt0cmFja1VyaSwgdHJhY2tEdXJhdGlvbl0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgc3RhcnRQcm9ncmVzc1RyYWNraW5nKCk7XG4gICAgfVxuICAgIGxpc3RlbmVyQ291bnQrKztcblxuICAgIGNvbnN0IGluaXRpYWxQbGF5ZXJTdGF0ZSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3N0YXRlO1xuICAgIHVwZGF0ZVBsYXllckRhdGEoaW5pdGlhbFBsYXllclN0YXRlKTtcblxuICAgIGNvbnN0IHVwZGF0ZUxpc3RlbmVyID0gKGV2ZW50OiB7IGRhdGE6IFBsYXllclN0YXRlIH0pOiB2b2lkID0+IHVwZGF0ZVBsYXllckRhdGEoZXZlbnQuZGF0YSk7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaXN0ZW5lciA9IChldmVudDogeyBkYXRhOiBQbGF5ZXJTdGF0ZSB9KTogdm9pZCA9PlxuICAgICAgdXBkYXRlUGxheWVyRGF0YShldmVudC5kYXRhLCB0cnVlKTtcblxuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVMaXN0ZW5lciwge30pO1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHByb2dyZXNzTGlzdGVuZXIsIHt9KTtcblxuICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICBsaXN0ZW5lckNvdW50LS07XG4gICAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgICBzdG9wUHJvZ3Jlc3NUcmFja2luZygpO1xuICAgICAgfVxuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZUxpc3RlbmVyLCB7fSk7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBwcm9ncmVzc0xpc3RlbmVyLCB7fSk7XG4gICAgfTtcbiAgfSwgW3VwZGF0ZVBsYXllckRhdGFdKTtcblxuICBjb25zdCB0b2dnbGVQbGF5ID0gdXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5aW5nVHJhY2sgPSBwbGF5ZXJTdGF0ZS5pdGVtPy51cmk7XG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nVHJhY2sgPT09IHRyYWNrVXJpKSB7XG4gICAgICBwbGF5ZXJTdGF0ZS5pc1BhdXNlZFxuICAgICAgICA/IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucmVzdW1lKHt9KVxuICAgICAgICA6IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2Uoe30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IHRyYWNrVXJpLFxuICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgICk7XG4gICAgfVxuICB9LCBbcGxheWVyU3RhdGUsIHRyYWNrVXJpXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1Bvc2l0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCA9IG5ld1Bvc2l0aW9uO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpc1NhbWVUcmFja0luUGxheWVyID0gcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaTtcblxuICAgICAgaWYgKCFpc1NhbWVUcmFja0luUGxheWVyKSB7XG4gICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGxheShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmk6IHRyYWNrVXJpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnNlZWtUbyhwb3NpdGlvbik7XG4gICAgICB9XG4gICAgICBpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIFtwb3NpdGlvbiwgdHJhY2tVcmksIHBsYXllclN0YXRlXSk7XG5cbiAgY29uc3QgaXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrID0gdXNlTWVtbyhcbiAgICAoKTogYm9vbGVhbiA9PiAhcGxheWVyU3RhdGUuaXNQYXVzZWQgJiYgcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaSxcbiAgICBbcGxheWVyU3RhdGUsIHRyYWNrVXJpXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGlzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayxcbiAgICB0b2dnbGVQbGF5LFxuICAgIGhhbmRsZVNsaWRlckNoYW5nZSxcbiAgICBoYW5kbGVTbGlkZXJSZWxlYXNlLFxuICB9O1xufTtcbiIsICIvLyBzb21lIHByb3RvYnVmIGRlZnMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGV2Z2lhbmx1L2dvLWxpYnJlc3BvdC90cmVlL21hc3Rlci9wcm90by9zcG90aWZ5L21ldGFkYXRhL21ldGFkYXRhLnByb3RvXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRJbmZvIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHJlcGVhdGVkPzogYm9vbGVhbjtcbiAgZW51bVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVNjaGVtYSB7XG4gIGZpZWxkczogUmVjb3JkPG51bWJlciwgRmllbGRJbmZvPjtcbiAgZW51bXM/OiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+Pjtcbn1cblxuZXhwb3J0IHR5cGUgTWV0YWRhdGFTY2hlbWEgPSBSZWNvcmQ8c3RyaW5nLCBNZXNzYWdlU2NoZW1hPjtcblxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhU2NoZW1hOiBNZXRhZGF0YVNjaGVtYSA9IHtcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiYWxidW1cIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFsYnVtXCIgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJhcnRpc3RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNTogeyBuYW1lOiBcIm51bWJlclwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA2OiB7IG5hbWU6IFwiZGlzY19udW1iZXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgNzogeyBuYW1lOiBcImR1cmF0aW9uXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDg6IHsgbmFtZTogXCJwb3B1bGFyaXR5XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDk6IHsgbmFtZTogXCJleHBsaWNpdFwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMTA6IHsgbmFtZTogXCJleHRlcm5hbF9pZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuRXh0ZXJuYWxJZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTE6IHsgbmFtZTogXCJyZXN0cmljdGlvblwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUmVzdHJpY3Rpb25cIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEyOiB7IG5hbWU6IFwiZmlsZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9GaWxlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMzogeyBuYW1lOiBcImFsdGVybmF0aXZlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5UcmFja1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTQ6IHsgbmFtZTogXCJzYWxlX3BlcmlvZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuU2FsZVBlcmlvZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTU6IHsgbmFtZTogXCJwcmV2aWV3XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb0ZpbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE2OiB7IG5hbWU6IFwidGFnc1wiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTc6IHsgbmFtZTogXCJlYXJsaWVzdF9saXZlX3RpbWVzdGFtcFwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICAgIDE4OiB7IG5hbWU6IFwiaGFzX2x5cmljc1wiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMTk6IHsgbmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkF2YWlsYWJpbGl0eVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMjE6IHsgbmFtZTogXCJsaWNlbnNvclwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuTGljZW5zb3JcIiB9LFxuICAgICAgMjI6IHsgbmFtZTogXCJsYW5ndWFnZV9vZl9wZXJmb3JtYW5jZVwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMjQ6IHsgbmFtZTogXCJvcmlnaW5hbF9hdWRpb1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9cIiB9LFxuICAgICAgMjc6IHsgbmFtZTogXCJvcmlnaW5hbF90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyODogeyBuYW1lOiBcInZlcnNpb25fdGl0bGVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzI6IHsgbmFtZTogXCJhcnRpc3Rfd2l0aF9yb2xlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RXaXRoUm9sZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMzY6IHsgbmFtZTogXCJjYW5vbmljYWxfdXJpXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM3OiB7IG5hbWU6IFwicHJlcmVsZWFzZV9jb25maWdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIiB9LFxuICAgICAgMzk6IHtcbiAgICAgICAgbmFtZTogXCJjb250ZW50X2F1dGhvcml6YXRpb25fYXR0cmlidXRlc1wiLFxuICAgICAgICB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudEF1dGhvcml6YXRpb25BdHRyaWJ1dGVzXCIsXG4gICAgICB9LFxuICAgICAgNDA6IHsgbmFtZTogXCJ0cmFja19jb250ZW50X3JhdGluZ1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudFJhdGluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNDE6IHsgbmFtZTogXCJhdWRpb19mb3JtYXRzXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5UcmFja0F1ZGlvRm9ybWF0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0MzogeyBuYW1lOiBcInVua25vd25fZmllbGRcIiwgdHlwZTogXCJpbnQzMlwiIH0sXG4gICAgICA0NDogeyBuYW1lOiBcImltcGxlbWVudGF0aW9uX2RldGFpbHNcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltcGxlbWVudGF0aW9uRGV0YWlsc1wiIH0sXG4gICAgICA0NzogeyBuYW1lOiBcInRlc3RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRlc3RDYXRlZ29yeVwiIH0sXG4gICAgICAxMjk6IHsgbmFtZTogXCJtZWRpYV90eXBlXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJNZWRpYVR5cGVcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgTWVkaWFUeXBlOiB7IDA6IFwiTUlYRURcIiwgMTogXCJBVURJT1wiLCAyOiBcIlZJREVPXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdpZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJhcnRpc3RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNDogeyBuYW1lOiBcInR5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIlR5cGVcIiB9LFxuICAgICAgNTogeyBuYW1lOiBcImxhYmVsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDY6IHsgbmFtZTogXCJkYXRlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICAgIDc6IHsgbmFtZTogXCJwb3B1bGFyaXR5XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDg6IHsgbmFtZTogXCJnZW5yZVwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgOTogeyBuYW1lOiBcImNvdmVyXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTA6IHsgbmFtZTogXCJleHRlcm5hbF9pZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuRXh0ZXJuYWxJZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTE6IHsgbmFtZTogXCJkaXNjXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EaXNjXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMjogeyBuYW1lOiBcInJldmlld1wiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTM6IHsgbmFtZTogXCJjb3B5cmlnaHRcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkNvcHlyaWdodFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTQ6IHsgbmFtZTogXCJyZXN0cmljdGlvblwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUmVzdHJpY3Rpb25cIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE1OiB7IG5hbWU6IFwicmVsYXRlZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE2OiB7IG5hbWU6IFwic2FsZV9wZXJpb2RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlNhbGVQZXJpb2RcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE3OiB7IG5hbWU6IFwiY292ZXJfZ3JvdXBcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlR3JvdXBcIiB9LFxuICAgICAgMTg6IHsgbmFtZTogXCJvcmlnaW5hbF90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAxOTogeyBuYW1lOiBcInZlcnNpb25fdGl0bGVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjA6IHsgbmFtZTogXCJ0eXBlX3N0clwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyMzogeyBuYW1lOiBcImF2YWlsYWJpbGl0eVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXZhaWxhYmlsaXR5XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyNTogeyBuYW1lOiBcImxpY2Vuc29yXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5MaWNlbnNvclwiIH0sXG4gICAgICAzNzogeyBuYW1lOiBcInByZXJlbGVhc2VfY29uZmlnXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5QcmVyZWxlYXNlQ29uZmlnXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBUeXBlOiB7IDE6IFwiQUxCVU1cIiwgMjogXCJTSU5HTEVcIiwgMzogXCJDT01QSUxBVElPTlwiLCA0OiBcIkVQXCIsIDU6IFwiQVVESU9CT09LXCIsIDY6IFwiUE9EQ0FTVFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvbnRlbnRSYXRpbmdcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInRhZ1wiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiQ29udGVudFJhdGluZ1RhZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IENvbnRlbnRSYXRpbmdUYWc6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiRVhQTElDSVRcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJ5ZWFyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJtb250aFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiZGF5XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImZpbGVfaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwic2l6ZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiU2l6ZVwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwid2lkdGhcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgNDogeyBuYW1lOiBcImhlaWdodFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBTaXplOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIlNNQUxMXCIsIDI6IFwiTUVESVVNXCIsIDM6IFwiTEFSR0VcIiwgNDogXCJFWFRSQV9MQVJHRVwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvRmlsZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJmb3JtYXRcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIkZvcm1hdFwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiYml0cmF0ZVwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA0OiB7IG5hbWU6IFwicHJldmlld1wiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBGb3JtYXQ6IHsgMTogXCJNUDRcIiwgMjogXCJPR0dcIiwgMzogXCJXRUJNXCIsIDQ6IFwiVU5LTk9XTlwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZ2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImltYWdlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNDogeyBuYW1lOiBcImdlbnJlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA1OiB7IG5hbWU6IFwicHJvZmlsZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0UHJvZmlsZVwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFByb2ZpbGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImJpb2dyYXBoeVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiYXJ0aXN0X25hbWVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkxvY2FsaXplZFN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5Mb2NhbGl6ZWRTdHJpbmdcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImxvY2FsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwic3RyaW5nXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuRXh0ZXJuYWxJZFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiY291bnRyaWVzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiY2F0YWxvZ3Vlc1wiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMzogeyBuYW1lOiBcInJlYXNvblwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiUmVhc29uXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IFJlYXNvbjogeyAwOiBcIlVOS05PV05cIiwgMTogXCJOT1RfQVZBSUxBQkxFX0lOX0NPVU5UUllcIiwgMjogXCJOT1RfQVZBSUxBQkxFX0ZPUl9DVVJSRU5DWVwiLCAzOiBcIk5PVF9BVkFJTEFCTEVfRk9SX1VTRVJcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BdmFpbGFiaWxpdHlcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInN0YXJ0X3RpbWVcIiwgdHlwZTogXCJpbnQ2NFwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYWZ0ZXJfc3RhcnRfdGltZVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImlzX2F2YWlsYWJsZVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5UcmFja0F1ZGlvRm9ybWF0XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjb2RlY1wiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiQ29kZWNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImJpdHJhdGVcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIENvZGVjOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIk1QM1wiLCAyOiBcIkFBQ1wiLCAzOiBcIk9HR19WT1JCSVNcIiwgNDogXCJGTEFDXCIsIDU6IFwiV0VCTUFfT1BVU1wiLCA2OiBcIldFQk1BX1ZPUkJJU1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnYWluXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzYW1wbGVfb2Zmc2V0XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuRGlzY1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibnVtYmVyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0V2l0aFJvbGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJyb2xlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RSb2xlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaGFzX3NhdmluZ19yaWdodHNcIiwgdHlwZTogXCJib29sXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0Um9sZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiaWRcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIlJvbGVJZFwiIH0sXG4gICAgfSxcbiAgICBlbnVtczoge1xuICAgICAgUm9sZUlkOiB7IDA6IFwiTUFJTlwiLCAxOiBcIkZFQVRVUkVEXCIsIDI6IFwiUkVNSVhcIiwgMzogXCJQUk9EVUNFUlwiLCA0OiBcIkNPTVBPU0VSXCIsIDU6IFwiTFlSSUNJU1RcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5TYWxlUGVyaW9kXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJzdGFydFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuRGF0ZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiZW5kXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VHcm91cFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiYmFja2luZ190eXBlXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJCYWNraW5nVHlwZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBCYWNraW5nVHlwZTogeyAwOiBcIlVOS05PV05cIiwgMTogXCJERUZBVUxUXCIsIDI6IFwiVklERU9fRlJBTUVcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5Db3B5cmlnaHRcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInR5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIlR5cGVcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInRleHRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgVHlwZTogeyAwOiBcIlBcIiwgMTogXCJDXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuVmlkZW9GaWxlXCI6IHtcbiAgICBmaWVsZHM6IHsgMTogeyBuYW1lOiBcImZpbGVfaWRcIiwgdHlwZTogXCJieXRlc1wiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkxpY2Vuc29yXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJsaWNlbnNvcl9pZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvbnRlbnRBdXRob3JpemF0aW9uQXR0cmlidXRlc1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiY2F0X2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJjb250ZW50X3JpZ2h0c1wiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwicmlnaHRzX293bmVyX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuSW1wbGVtZW50YXRpb25EZXRhaWxzXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJpbXBsX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJkZXNjcmlwdGlvblwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImlzX3ByZW1pdW1fb25seVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInJlbGVhc2VfZGF0ZVwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuVGVzdENhdGVnb3J5XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjYXRlZ29yeVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiaXNfZW5hYmxlZFwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG59OyIsICJpbXBvcnQgeyBtZXRhZGF0YVNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS50c1wiO1xuXG5mdW5jdGlvbiB3YXJuKHJlYXNvbjogc3RyaW5nLCBjdHhPclRodW5rOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgKCgpID0+IFJlY29yZDxzdHJpbmcsIGFueT4pKSB7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoXCJEZWNvZGUgZXJyb3JcIikgfHwgcmVhc29uLmluY2x1ZGVzKFwiU2NoZW1hIG5vdCBmb3VuZFwiKSkge1xuICAgIGNvbnN0IGN0eCA9IHR5cGVvZiBjdHhPclRodW5rID09PSBcImZ1bmN0aW9uXCIgPyBjdHhPclRodW5rKCkgOiBjdHhPclRodW5rO1xuICAgIGNvbnNvbGUud2FybihcIltQcm90b2J1Zl1cIiwgcmVhc29uLCBjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm90b2J1ZlJlYWRlciB7XG4gIHByaXZhdGUgdmlldzogRGF0YVZpZXc7XG4gIHByaXZhdGUgYnl0ZXM6IFVpbnQ4QXJyYXk7XG4gIHB1YmxpYyBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUmVjb3JkPHN0cmluZyB8IG51bWJlciwgbnVtYmVyPiB8IEFycmF5TGlrZTxudW1iZXI+IHwgVWludDhBcnJheSkge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgdGhpcy5ieXRlcyA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IFwibGVuZ3RoXCIgaW4gZGF0YSkge1xuICAgICAgdGhpcy5ieXRlcyA9IG5ldyBVaW50OEFycmF5KEFycmF5LmZyb20oZGF0YSBhcyBBcnJheUxpa2U8bnVtYmVyPikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoT2JqZWN0LnZhbHVlcyhkYXRhKSk7XG4gICAgfVxuICAgIHRoaXMudmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJ5dGVzLmJ1ZmZlciwgdGhpcy5ieXRlcy5ieXRlT2Zmc2V0LCB0aGlzLmJ5dGVzLmJ5dGVMZW5ndGgpO1xuICB9XG5cbiAgZ2V0IGlzRXhoYXVzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCA+PSB0aGlzLmJ5dGVzLmxlbmd0aDtcbiAgfVxuXG4gIHJlYWRWYXJpbnQoKTogYmlnaW50IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaXNFeGhhdXN0ZWQpIHJldHVybiBudWxsO1xuICAgIGxldCByZXN1bHQgPSAwbjtcbiAgICBsZXQgc2hpZnQgPSAwbjtcbiAgICB3aGlsZSAoIXRoaXMuaXNFeGhhdXN0ZWQpIHtcbiAgICAgIGNvbnN0IGJ5dGUgPSBCaWdJbnQodGhpcy5ieXRlc1t0aGlzLm9mZnNldCsrXSk7XG4gICAgICByZXN1bHQgfD0gKGJ5dGUgJiAweDdmbikgPDwgc2hpZnQ7XG4gICAgICBpZiAoIShieXRlICYgMHg4MG4pKSByZXR1cm4gcmVzdWx0O1xuICAgICAgc2hpZnQgKz0gN247XG4gICAgICBpZiAoc2hpZnQgPiA3MG4pIHtcbiAgICAgICAgd2FybihcIlZhcmludCB0b28gbG9uZ1wiLCB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICBzaGlmdDogc2hpZnQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlYWRaaWdaYWdWYXJpbnQoKTogYmlnaW50IHtcbiAgICBjb25zdCBuID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgaWYgKG4gPT09IG51bGwpIHtcbiAgICAgIHdhcm4oXCJJbnZhbGlkIHppZ3phZyB2YXJpbnRcIiwgeyBvZmZzZXQ6IHRoaXMub2Zmc2V0IH0pO1xuICAgICAgcmV0dXJuIDBuO1xuICAgIH1cbiAgICByZXR1cm4gKG4gPj4gMW4pIF4gLShuICYgMW4pO1xuICB9XG5cbiAgcmVhZEJ5dGVzKGxlbmd0aDogbnVtYmVyKTogVWludDhBcnJheSB7XG4gICAgY29uc3QgYWN0dWFsTGVuZ3RoID0gTWF0aC5taW4obGVuZ3RoLCB0aGlzLmJ5dGVzLmxlbmd0aCAtIHRoaXMub2Zmc2V0KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmJ5dGVzLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIGFjdHVhbExlbmd0aCk7XG4gICAgdGhpcy5vZmZzZXQgKz0gYWN0dWFsTGVuZ3RoO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBza2lwKHdpcmVUeXBlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHdpcmVUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICAgIGlmIChsZW4gIT09IG51bGwpIHRoaXMub2Zmc2V0ICs9IE51bWJlcihsZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgICBpZiAodGFnID09PSBudWxsIHx8IChOdW1iZXIodGFnKSAmIDcpID09PSA0KSBicmVhaztcbiAgICAgICAgICB0aGlzLnNraXAoTnVtYmVyKHRhZykgJiA3KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB3YXJuKFwiVW5rbm93biB3aXJlIHR5cGVcIiwge1xuICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlY29kZShzY2hlbWFOYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHNjaGVtYSA9IG1ldGFkYXRhU2NoZW1hW3NjaGVtYU5hbWVdO1xuICAgIGlmICghc2NoZW1hKSB7XG4gICAgICB3YXJuKFwiU2NoZW1hIG5vdCBmb3VuZFwiLCB7IHNjaGVtYU5hbWUgfSk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICB3aGlsZSAoIXRoaXMuaXNFeGhhdXN0ZWQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgaWYgKHRhZyA9PT0gbnVsbCB8fCB0YWcgPT09IDBuKSBicmVhaztcblxuICAgICAgY29uc3QgZmllbGROdW1iZXIgPSBOdW1iZXIodGFnID4+IDNuKTtcbiAgICAgIGNvbnN0IHdpcmVUeXBlID0gTnVtYmVyKHRhZyAmIDduKTtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLmZpZWxkc1tmaWVsZE51bWJlcl07XG5cbiAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgaWYgKHdpcmVUeXBlID09PSAyKSB7XG4gICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICBjb25zdCByYXcgPSB0aGlzLnJlYWRCeXRlcyhsZW4pO1xuXG4gICAgICAgICAgd2FybihcIlVua25vd24gZmllbGRcIiwgKCkgPT4gKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hTmFtZSxcbiAgICAgICAgICAgIGZpZWxkTnVtYmVyLFxuICAgICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgICBsZW5ndGg6IGxlbixcbiAgICAgICAgICAgIGhleDogQXJyYXkuZnJvbShyYXcpXG4gICAgICAgICAgICAgIC5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSlcbiAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgYXNjaWk6IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShyYXcpLnJlcGxhY2UoL1teXFx4MjAtXFx4N0VdL2csIFwiLlwiKSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybihcIlVua25vd24gZmllbGRcIiwge1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgICB3aXJlVHlwZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuc2tpcCh3aXJlVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZSh0aGlzLnJlYWRCeXRlcyhsZW4pKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiYnl0ZXNcIjoge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgdGhpcy5yZWFkQnl0ZXMobGVuKSxcbiAgICAgICAgICAgICAgKGIpID0+IChiIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgYi50b1N0cmluZygxNiksXG4gICAgICAgICAgICApLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcImJvb2xcIjpcbiAgICAgICAgICAgIHZhbHVlID0gKHRoaXMucmVhZFZhcmludCgpID8/IDBuKSAhPT0gMG47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaW50MzJcIjpcbiAgICAgICAgICBjYXNlIFwidWludDMyXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaW50NjRcIjpcbiAgICAgICAgICBjYXNlIFwidWludDY0XCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbjtcbiAgICAgICAgICAgIHZhbHVlID0gdiA8PSBCaWdJbnQoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpID8gTnVtYmVyKHYpIDogdi50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJzaW50MzJcIjpcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHRoaXMucmVhZFppZ1phZ1ZhcmludCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzaW50NjRcIjoge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMucmVhZFppZ1phZ1ZhcmludCgpO1xuICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICB2IDw9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgJiYgdiA+PSBCaWdJbnQoTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgICAgICAgPyBOdW1iZXIodilcbiAgICAgICAgICAgICAgICA6IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiZml4ZWQzMlwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0VWludDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZml4ZWQ2NFwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0QmlnVWludDY0KHRoaXMub2Zmc2V0LCB0cnVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJmbG9hdFwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0RmxvYXQzMih0aGlzLm9mZnNldCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImRvdWJsZVwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0RmxvYXQ2NCh0aGlzLm9mZnNldCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImVudW1cIjoge1xuICAgICAgICAgICAgY29uc3QgZW51bVZhbCA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IChmaWVsZC5lbnVtVHlwZSAmJiBzY2hlbWEuZW51bXM/LltmaWVsZC5lbnVtVHlwZV0/LltlbnVtVmFsXSkgPz8gZW51bVZhbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJvdG9idWZSZWFkZXIodGhpcy5yZWFkQnl0ZXMobGVuKSkuZGVjb2RlKGZpZWxkLnR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgd2FybihcIkRlY29kZSBlcnJvclwiLCB7XG4gICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIGZpZWxkTnVtYmVyLFxuICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgaWYgKGZpZWxkLnJlcGVhdGVkKSB7XG4gICAgICAgIGlmICghcmVzdWx0W2ZpZWxkLm5hbWVdKSByZXN1bHRbZmllbGQubmFtZV0gPSBbXTtcbiAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlUHJvdG9idWYoZGF0YTogYW55LCBzY2hlbWFOYW1lOiBzdHJpbmcpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSBuZXcgUHJvdG9idWZSZWFkZXIoZGF0YSkuZGVjb2RlKHNjaGVtYU5hbWUpO1xuICByZXR1cm4gcmVzdWx0O1xufSIsICJjb25zdCBHTE9CQUxfS0VZID0gXCJfX2NhY2hlZF93ZWJwYWNrX21vZHVsZXNcIjtcblxuaWYgKCEoZ2xvYmFsVGhpcyBhcyBhbnkpW0dMT0JBTF9LRVldKSB7XG4gIChnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV0gPSB7XG4gICAgcmVxdWlyZTogbnVsbCxcbiAgICBtb2R1bGVzOiBudWxsLFxuICAgIGxhc3RNb2R1bGVDb3VudDogMCxcbiAgICBzZXJ2aWNlQ2FjaGU6IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCksXG4gICAgc2VhcmNoQ2FjaGU6IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCksXG4gICAgY29tcG9uZW50Q2FjaGU6IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCksXG4gIH07XG59XG5cbmNvbnN0IHNoYXJlZCA9IChnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV07XG5cbmV4cG9ydCBjb25zdCBTcG90aWZ5V2VicGFjayA9IHtcbiAgZ2V0TW9kdWxlcygpIHtcbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlKSB7XG4gICAgICBjb25zdCB3ZWJwYWNrID0gKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJwYWNrQ2h1bmtjbGllbnRfd2ViO1xuICAgICAgaWYgKCF3ZWJwYWNrKSByZXR1cm4gc2hhcmVkLm1vZHVsZXMgPz8gW107XG4gICAgICBzaGFyZWQucmVxdWlyZSA9IHdlYnBhY2sucHVzaChbW1N5bWJvbCgpXSwge30sIChyZTogYW55KSA9PiByZV0pO1xuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmUgfHwgIXNoYXJlZC5yZXF1aXJlLm0pIHJldHVybiBzaGFyZWQubW9kdWxlcyA/PyBbXTtcblxuICAgIGNvbnN0IGN1cnJlbnRLZXlzID0gT2JqZWN0LmtleXMoc2hhcmVkLnJlcXVpcmUubSk7XG5cbiAgICBpZiAoc2hhcmVkLm1vZHVsZXMgJiYgc2hhcmVkLmxhc3RNb2R1bGVDb3VudCA9PT0gY3VycmVudEtleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLm1vZHVsZXM7XG4gICAgfVxuXG4gICAgc2hhcmVkLm1vZHVsZXMgPSBjdXJyZW50S2V5cy5tYXAoKGlkKSA9PiAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBzaGFyZWQucmVxdWlyZShpZCk7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb2R1bGUpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIFttb2R1bGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2hhcmVkLmxhc3RNb2R1bGVDb3VudCA9IGN1cnJlbnRLZXlzLmxlbmd0aDtcblxuICAgIHJldHVybiBzaGFyZWQubW9kdWxlcztcbiAgfSxcblxuICBnZXRNb2R1bGVCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAoIXNoYXJlZC5tb2R1bGVzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihpZCk7XG4gICAgaWYgKCFpc05hTihpbmRleCkgJiYgc2hhcmVkLm1vZHVsZXNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLm1vZHVsZXNbaW5kZXhdKCk7XG4gICAgfVxuICAgIGlmICghc2hhcmVkLnJlcXVpcmUpIHtcbiAgICAgIFNwb3RpZnlXZWJwYWNrLmdldE1vZHVsZXMoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IHNoYXJlZC5yZXF1aXJlPy4oaWQpO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlICE9PSBudWxsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMobW9kdWxlKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcmV0dXJuIFttb2R1bGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZmluZE1vZHVsZUJ5Q29udGVudChrZXl3b3Jkczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGtleXdvcmRzLmpvaW4oXCIsXCIpO1xuICAgIGlmIChzaGFyZWQuc2VhcmNoQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgcmV0dXJuIHNoYXJlZC5zZWFyY2hDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmUgfHwgIXNoYXJlZC5yZXF1aXJlLm0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFNwb3RpZnlXZWJwYWNrLmdldE1vZHVsZXMoKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBzaGFyZWQuc2VhcmNoQ2FjaGUuc2V0KGNhY2hlS2V5LCBudWxsKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZT8ubSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBtb2R1bGVzID0gc2hhcmVkLnJlcXVpcmUubTtcblxuICAgIGZvciAoY29uc3QgaWQgaW4gbW9kdWxlcykge1xuICAgICAgY29uc3QgbW9kdWxlRmFjdG9yeSA9IG1vZHVsZXNbaWRdO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGVGYWN0b3J5ICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBzdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb2R1bGVGYWN0b3J5KTtcblxuICAgICAgaWYgKGtleXdvcmRzLmV2ZXJ5KChrKSA9PiBzdHIuaW5jbHVkZXMoaykpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbW9kID0gc2hhcmVkLnJlcXVpcmUoaWQpO1xuICAgICAgICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG1vZCk7XG4gICAgICAgICAgcmV0dXJuIG1vZDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gcmVxdWlyZSBtb2R1bGUgJHtpZH06YCwgZXJyKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGZpbmRDb21wb25lbnRCeUtleXdvcmRzKGtleXdvcmRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0ga2V5d29yZHMuam9pbihcIixcIik7XG4gICAgaWYgKHNoYXJlZC5jb21wb25lbnRDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLmNvbXBvbmVudENhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNoYXJlZC5jb21wb25lbnRDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlPy5tKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBzaGFyZWQucmVxdWlyZS5tO1xuICAgIGxldCBmb3VuZE1vZHVsZUlkID0gbnVsbDtcblxuICAgIGZvciAoY29uc3QgaWQgaW4gbW9kdWxlcykge1xuICAgICAgY29uc3QgbW9kdWxlRmFjdG9yeSA9IG1vZHVsZXNbaWRdO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGVGYWN0b3J5ICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb2R1bGVGYWN0b3J5KTtcbiAgICAgICAgaWYgKGtleXdvcmRzLmV2ZXJ5KChrKSA9PiBzdHIuaW5jbHVkZXMoaykpKSB7XG4gICAgICAgICAgZm91bmRNb2R1bGVJZCA9IGlkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfZSkge31cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kTW9kdWxlSWQpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IGV4cG9ydHM6IGFueTtcbiAgICB0cnkge1xuICAgICAgZXhwb3J0cyA9IHNoYXJlZC5yZXF1aXJlKGZvdW5kTW9kdWxlSWQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0xpa2VseUNvbXBvbmVudCA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodmFsdWUuJCR0eXBlb2YgJiYgU3ltYm9sLmtleUZvcih2YWx1ZS4kJHR5cGVvZik/LmluY2x1ZGVzKFwicmVhY3RcIikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKGlzTGlrZWx5Q29tcG9uZW50KGV4cG9ydHMpKSB7XG4gICAgICByZXN1bHQgPSBleHBvcnRzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGV4cG9ydHMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBleHBvcnRzW2tleV07XG4gICAgICAgIGlmIChpc0xpa2VseUNvbXBvbmVudCh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNoYXJlZC5jb21wb25lbnRDYWNoZS5zZXQoY2FjaGVLZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBmaW5kU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kdWxlcyA9IFNwb3RpZnlXZWJwYWNrLmdldE1vZHVsZXMoKTtcblxuICAgIGZvciAoY29uc3QgbW9kdWxlR2V0dGVyIG9mIG1vZHVsZXMpIHtcbiAgICAgIGlmICghbW9kdWxlR2V0dGVyIHx8IHR5cGVvZiBtb2R1bGVHZXR0ZXIgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG4gICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVHZXR0ZXIoKTtcbiAgICAgIGlmICghbW9kdWxlKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGV4cG9ydHMgPSBBcnJheS5pc0FycmF5KG1vZHVsZSkgPyBtb2R1bGUgOiBbbW9kdWxlXTtcbiAgICAgIGZvciAoY29uc3QgbSBvZiBleHBvcnRzKSB7XG4gICAgICAgIGlmIChtICYmIHR5cGVvZiBtID09PSBcImZ1bmN0aW9uXCIgJiYgbS5TRVJWSUNFX0lEID09PSBzZXJ2aWNlTmFtZSkgcmV0dXJuIG07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZ2V0Q2xpZW50PFQgPSBhbnk+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoc2hhcmVkLnNlcnZpY2VDYWNoZS5oYXMoc2VydmljZU5hbWUpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLnNlcnZpY2VDYWNoZS5nZXQoc2VydmljZU5hbWUpO1xuICAgIH1cbiAgICBjb25zdCBTZXJ2aWNlQ2xhc3MgPSBTcG90aWZ5V2VicGFjay5maW5kU2VydmljZShzZXJ2aWNlTmFtZSk7XG4gICAgaWYgKCFTZXJ2aWNlQ2xhc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3BvdGlmeSBTZXJ2aWNlIG5vdCBmb3VuZDogJHtzZXJ2aWNlTmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2xpZW50OiBhbnk7XG4gICAgaWYgKHR5cGVvZiBTZXJ2aWNlQ2xhc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgdHJhbnNwb3J0ID0gKGdsb2JhbFRoaXMgYXMgYW55KS5TcGljZXRpZnk/LlBsYXRmb3JtPy5SZWdpc3RyeT8ucmVzb2x2ZShTeW1ib2wuZm9yKFwiRXNwZXJhbnRvVHJhbnNwb3J0XCIpKTtcbiAgICAgIGlmICh0cmFuc3BvcnQpIHtcbiAgICAgICAgY2xpZW50ID0gbmV3IFNlcnZpY2VDbGFzcyh0cmFuc3BvcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXNwZXJhbnRvVHJhbnNwb3J0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWVudCA9IFNlcnZpY2VDbGFzcztcbiAgICB9XG5cbiAgICBzaGFyZWQuc2VydmljZUNhY2hlLnNldChzZXJ2aWNlTmFtZSwgY2xpZW50KTtcbiAgICByZXR1cm4gY2xpZW50O1xuICB9LFxufTtcblxuKGdsb2JhbFRoaXMgYXMgYW55KS5TcG90aWZ5V2VicGFjayA9IFNwb3RpZnlXZWJwYWNrOyIsICJpbXBvcnQgeyBkZWNvZGVQcm90b2J1ZiB9IGZyb20gXCIuLi93ZWJwYWNrL3Byb3RvYnVmLnRzXCI7XG5pbXBvcnQgeyBTcG90aWZ5V2VicGFjayB9IGZyb20gXCIuLi93ZWJwYWNrL3dlYnBhY2sudHNcIjtcblxuY29uc3QgTWV0YWRhdGFTZXJ2aWNlID0gXCJzcG90aWZ5Lm1kYXRhX2VzcGVyYW50by5wcm90by5NZXRhZGF0YVNlcnZpY2VcIjtcbmNvbnN0IFRSQUNLX1Y0ID0gMTA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1ldGFkYXRhRm9yVHJhY2tzKHRyYWNrVVJJczogc3RyaW5nW10pOiBQcm9taXNlPE1hcDxzdHJpbmcsIGFueT4+IHtcbiAgY29uc3QgTWV0YWRhdGFDbGllbnQgPSBTcG90aWZ5V2VicGFjay5nZXRDbGllbnQoTWV0YWRhdGFTZXJ2aWNlKTtcbiAgY29uc3QgdW5pcXVlVVJJcyA9IFsuLi5uZXcgU2V0KHRyYWNrVVJJcyldO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTWV0YWRhdGFDbGllbnQuZmV0Y2goe1xuICAgIGV4dGVuc2lvblF1ZXJ5OiBbeyBleHRlbnNpb25LaW5kOiBUUkFDS19WNCwgZW50aXR5VXJpOiB1bmlxdWVVUklzIH1dLFxuICB9KTtcblxuICBjb25zdCByZXN1bHRNYXAgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuXG4gIGlmIChyZXNwb25zZT8uZXh0ZW5zaW9uPy5bMF0/LmVudGl0eUV4dGVuc2lvbikge1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHJlc3BvbnNlLmV4dGVuc2lvblswXS5lbnRpdHlFeHRlbnNpb24pIHtcbiAgICAgIGNvbnN0IGJ5dGVPYmplY3QgPSBlbnRpdHkuZXh0ZW5zaW9uRGF0YT8udmFsdWU7XG4gICAgICBpZiAoYnl0ZU9iamVjdCkge1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlUHJvdG9idWYoYnl0ZU9iamVjdCwgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCIpO1xuICAgICAgICByZXN1bHRNYXAuc2V0KGVudGl0eS5lbnRpdHlVcmksIGRlY29kZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0TWFwLnNldChlbnRpdHkuZW50aXR5VXJpLCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0TWFwO1xufSIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3hcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zbGlkZXIudHN4XCI7XG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2hvb2tzL3VzZVBsYXllci50c1wiO1xuaW1wb3J0IHsgZmV0Y2hNZXRhZGF0YUZvclRyYWNrcyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL2ZldGNoTWV0YWRhdGFGb3JUcmFja3MudHNcIjtcblxuaW50ZXJmYWNlIFRyYWNrIHtcbiAgdXJpOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZHVyYXRpb25fbXM6IG51bWJlcjtcbiAgYWxidW06IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2VzOiBBcnJheTx7IHVybDogc3RyaW5nIH0+O1xuICB9O1xuICBhcnRpc3RzOiBBcnJheTx7IG5hbWU6IHN0cmluZyB9Pjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXJ0aXN0VXJpOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgZm9ybWF0RHVyYXRpb24gPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBzZWNvbmRzICUgNjA7XG4gIHJldHVybiBgJHttaW51dGVzfToke3JlbWFpbmluZ1NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbn07XG5cbmNvbnN0IFRyYWNrUGxheWJhY2tDb250cm9sID0gKHsgdXJpLCBkdXJhdGlvbiB9OiB7IHVyaTogc3RyaW5nOyBkdXJhdGlvbjogbnVtYmVyIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uLFxuICAgIGR1cmF0aW9uOiBwbGF5ZXJEdXJhdGlvbixcbiAgICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2ssXG4gICAgdG9nZ2xlUGxheSxcbiAgICBoYW5kbGVTbGlkZXJDaGFuZ2UsXG4gICAgaGFuZGxlU2xpZGVyUmVsZWFzZSxcbiAgfSA9IHVzZVBsYXllcih1cmksIGR1cmF0aW9uKTtcblxuICBjb25zdCBbZmV0Y2hlZER1cmF0aW9uLCBzZXRGZXRjaGVkRHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBlZmZlY3RpdmVEdXJhdGlvbiA9IGR1cmF0aW9uID4gMCA/IGR1cmF0aW9uIDogcGxheWVyRHVyYXRpb24gPiAwID8gcGxheWVyRHVyYXRpb24gOiBmZXRjaGVkRHVyYXRpb247XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlUGxheSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZWZmZWN0aXZlRHVyYXRpb24gPT09IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgZmV0Y2hNZXRhZGF0YUZvclRyYWNrcyhbdXJpXSk7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBtZXRhZGF0YS5nZXQodXJpKTtcbiAgICAgICAgaWYgKG1ldGE/LmR1cmF0aW9uKSB7XG4gICAgICAgICAgc2V0RmV0Y2hlZER1cmF0aW9uKG1ldGEuZHVyYXRpb24pO1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuc2Vla1RvKDApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZHVyYXRpb246XCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVQbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9IChtczogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgaWYgKG1zID09IG51bGwgfHwgbXMgPD0gMCkgcmV0dXJuIFwiMDowMFwiO1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IocyAvIDYwKX06JHsocyAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWNvbnRyb2xzXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtcGxheWJhY2stYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlUGxheX0+XG4gICAgICAgIHtpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2sgPyA8SWNvbnMuUmVhY3QucGF1c2Ugc2l6ZT17MTZ9IC8+IDogPEljb25zLlJlYWN0LnBsYXkgc2l6ZT17MTZ9IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNsaWRlci10aW1lXCI+e2Zvcm1hdFRpbWUocG9zaXRpb24pfTwvc3Bhbj5cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgbWF4PXtlZmZlY3RpdmVEdXJhdGlvbiA+IDAgPyBlZmZlY3RpdmVEdXJhdGlvbiA6IDF9XG4gICAgICAgIG1pbj17MH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cbiAgICAgICAgb25SZWxlYXNlPXtoYW5kbGVTbGlkZXJSZWxlYXNlfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICB2YWx1ZT17cG9zaXRpb24gfHwgMH1cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXNsaWRlci10aW1lXCI+e2Zvcm1hdFRpbWUoZWZmZWN0aXZlRHVyYXRpb24pfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RTZWFyY2hNb2RhbCh7IGFydGlzdFVyaSwgYXJ0aXN0TmFtZSB9OiBQcm9wcykge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGU8VHJhY2tbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY3VycmVudFBsYXlpbmdVcmksIHNldEN1cnJlbnRQbGF5aW5nVXJpXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdmlld01vZGUsIHNldFZpZXdNb2RlXSA9IHVzZVN0YXRlPFwidHJhY2tzXCIgfCBcImFsYnVtc1wiPihcInRyYWNrc1wiKTtcblxuICBjb25zdCBzZWFyY2hUaW1lb3V0UmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmZXRjaEFsYnVtVHJhY2tzID0gYXN5bmMgKGFsYnVtVXJpOiBzdHJpbmcsIGFsYnVtTmFtZTogc3RyaW5nLCBjb3ZlckFydDogYW55W10pOiBQcm9taXNlPFRyYWNrW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICAgIFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zLnF1ZXJ5QWxidW1UcmFja3MsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IGFsYnVtVXJpLFxuICAgICAgICAgIGxvY2FsZTogU3BpY2V0aWZ5LkxvY2FsZS5nZXRMb2NhbGUoKSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDUwMDAsXG4gICAgICAgIH0sXG4gICAgICApKSBhcyB7IGRhdGE6IGFueSB9O1xuXG4gICAgICBjb25zdCBhbGJ1bURhdGEgPSByZXNwb25zZT8uZGF0YT8uYWxidW1VbmlvbjtcbiAgICAgIGNvbnN0IHRyYWNrc1YyID0gYWxidW1EYXRhPy50cmFja3NWMjtcbiAgICAgIGlmICghdHJhY2tzVjI/Lml0ZW1zKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdHJhY2tzVjIuaXRlbXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gW107XG5cbiAgICAgIGNvbnN0IHJlc3VsdHM6IFRyYWNrW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCB0cmFjayA9IGl0ZW0/LnRyYWNrO1xuICAgICAgICBpZiAoIXRyYWNrKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gY292ZXJBcnQgfHwgdHJhY2s/LmFsYnVtPy5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcbiAgICAgICAgY29uc3QgYXJ0aXN0cyA9IEFycmF5LmlzQXJyYXkodHJhY2s/LmFydGlzdHMpID8gdHJhY2suYXJ0aXN0cyA6IFtdO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHVyaTogdHJhY2s/LnVyaSB8fCBcIlwiLFxuICAgICAgICAgIG5hbWU6IHRyYWNrPy5uYW1lIHx8IFwiXCIsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IHRyYWNrPy5kdXJhdGlvbj8udG90YWxNcyB8fCAwLFxuICAgICAgICAgIGFsYnVtOiB7XG4gICAgICAgICAgICBuYW1lOiBhbGJ1bU5hbWUsXG4gICAgICAgICAgICBpbWFnZXM6IGltYWdlcy5tYXAoKGltZzogYW55KSA9PiAoeyB1cmw6IGltZz8udXJsIHx8IFwiXCIgfSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJ0aXN0czogYXJ0aXN0cy5tYXAoKGE6IGFueSkgPT4gKHsgbmFtZTogYT8ucHJvZmlsZT8ubmFtZSB8fCBhPy5uYW1lIHx8IFwiXCIgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaEFydGlzdFRyYWNrcyA9IGFzeW5jIChvblRyYWNrQWRkOiAodHJhY2tzOiBUcmFja1tdKSA9PiB2b2lkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5HcmFwaFFMTG9hZGVyKFxuICAgICAgICBTcGljZXRpZnkuR3JhcGhRTC5EZWZpbml0aW9ucy5xdWVyeUFydGlzdERpc2NvZ3JhcGh5QWxsLFxuICAgICAgICB7XG4gICAgICAgICAgdXJpOiBhcnRpc3RVcmksXG4gICAgICAgICAgbG9jYWxlOiBTcGljZXRpZnkuTG9jYWxlLmdldExvY2FsZSgpLFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogNTAsXG4gICAgICAgIH0sXG4gICAgICApKSBhcyB7IGRhdGE6IGFueSB9O1xuXG4gICAgICBjb25zdCBkaXNjb2dyYXBoeSA9IHJlc3BvbnNlPy5kYXRhPy5hcnRpc3RVbmlvbj8uZGlzY29ncmFwaHk7XG4gICAgICBpZiAoIWRpc2NvZ3JhcGh5Py5hbGw/Lml0ZW1zKSByZXR1cm47XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkaXNjb2dyYXBoeS5hbGwuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgcmVsZWFzZXMgPSBpdGVtPy5yZWxlYXNlcz8uaXRlbXM7XG4gICAgICAgIGlmICghcmVsZWFzZXMpIGNvbnRpbnVlO1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVsZWFzZSBvZiByZWxlYXNlcykge1xuICAgICAgICAgIGlmICghcmVsZWFzZT8udXJpKSBjb250aW51ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBhbGJ1bVVyaSA9IHJlbGVhc2UudXJpO1xuICAgICAgICAgIGNvbnN0IGFsYnVtTmFtZSA9IHJlbGVhc2UubmFtZSB8fCBcIlwiO1xuICAgICAgICAgIGNvbnN0IGNvdmVyQXJ0ID0gcmVsZWFzZS5jb3ZlckFydD8uc291cmNlcyB8fCBbXTtcblxuICAgICAgICAgIGNvbnN0IGFsYnVtVHJhY2tzID0gYXdhaXQgZmV0Y2hBbGJ1bVRyYWNrcyhhbGJ1bVVyaSwgYWxidW1OYW1lLCBjb3ZlckFydCk7XG4gICAgICAgICAgaWYgKGFsYnVtVHJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG9uVHJhY2tBZGQoYWxidW1UcmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgW2lzTG9hZGluZ01vcmUsIHNldElzTG9hZGluZ01vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VHJhY2tzKFtdKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHNldElzTG9hZGluZ01vcmUoZmFsc2UpO1xuICAgIFxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBsb2FkVHJhY2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsVHJhY2tzOiBUcmFja1tdID0gW107XG4gICAgICAgIFxuICAgICAgICBhd2FpdCBmZXRjaEFydGlzdFRyYWNrcygobmV3VHJhY2tzKSA9PiB7XG4gICAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFsbFRyYWNrcy5wdXNoKC4uLm5ld1RyYWNrcyk7XG4gICAgICAgICAgc2V0VHJhY2tzKFsuLi5hbGxUcmFja3NdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUcmFja3MubGVuZ3RoOyBpICs9IGJhdGNoU2l6ZSkge1xuICAgICAgICAgIGlmIChjYW5jZWxsZWQpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGJhdGNoID0gYWxsVHJhY2tzLnNsaWNlKGksIGkgKyBiYXRjaFNpemUpO1xuICAgICAgICAgIGNvbnN0IHVyaXMgPSBiYXRjaC5maWx0ZXIodCA9PiB0LnVyaSAmJiB0LmR1cmF0aW9uX21zID09PSAwKS5tYXAodCA9PiB0LnVyaSk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHVyaXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICBcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBmZXRjaE1ldGFkYXRhRm9yVHJhY2tzKHVyaXMpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEJhdGNoID0gYWxsVHJhY2tzLnNsaWNlKGksIGkgKyBiYXRjaFNpemUpLm1hcCh0cmFjayA9PiB7XG4gICAgICAgICAgICAgIGlmICh0cmFjay5kdXJhdGlvbl9tcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBtZXRhZGF0YS5nZXQodHJhY2sudXJpKTtcbiAgICAgICAgICAgICAgICBpZiAobWV0YT8uZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnRyYWNrLCBkdXJhdGlvbl9tczogbWV0YS5kdXJhdGlvbiB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdHJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgc2V0VHJhY2tzKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RyYWNrcyA9IFsuLi5wcmV2XTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwZGF0ZWRCYXRjaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxJbmRleCA9IGkgKyBqO1xuICAgICAgICAgICAgICAgICAgaWYgKG5ld1RyYWNrc1tvcmlnaW5hbEluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdUcmFja3Nbb3JpZ2luYWxJbmRleF0gPSB1cGRhdGVkQmF0Y2hbal07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdUcmFja3M7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBiYXRjaCBtZXRhZGF0YTpcIiwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm47XG4gICAgICAgIHNldElzTG9hZGluZ01vcmUodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpO1xuICAgICAgICBzZXRFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVybjtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldElzTG9hZGluZ01vcmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgbG9hZFRyYWNrcygpO1xuICAgIFxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWU7IH07XG4gIH0sIFthcnRpc3RVcmldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeS50cmltKCkpIHtcbiAgICAgIHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzZWFyY2hUaW1lb3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlYXJjaFRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgY29uc3QgZmlsdGVyZWRUcmFja3MgPSBxdWVyeS50cmltKClcbiAgICA/IHRyYWNrcy5maWx0ZXIoXG4gICAgICAgICh0cmFjaykgPT5cbiAgICAgICAgICB0cmFjay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICB0cmFjay5hbGJ1bS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSksXG4gICAgICApXG4gICAgOiB0cmFja3M7XG5cbiAgY29uc3QgYWxidW1zVmlldyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFsYnVtTWFwID0gbmV3IE1hcDxzdHJpbmcsIHsgYWxidW06IFRyYWNrW1wiYWxidW1cIl07IHRyYWNrczogVHJhY2tbXSB9PigpO1xuICAgIGZvciAoY29uc3QgdHJhY2sgb2YgZmlsdGVyZWRUcmFja3MpIHtcbiAgICAgIGNvbnN0IGFsYnVtID0gdHJhY2suYWxidW0gYXMgYW55O1xuICAgICAgY29uc3QgYWxidW1LZXkgPSBhbGJ1bS5hbGJ1bVVyaSB8fCBhbGJ1bS51cmkgfHwgYWxidW0ubmFtZTtcbiAgICAgIGlmICghYWxidW1NYXAuaGFzKGFsYnVtS2V5KSkge1xuICAgICAgICBhbGJ1bU1hcC5zZXQoYWxidW1LZXksIHsgYWxidW06IHRyYWNrLmFsYnVtLCB0cmFja3M6IFtdIH0pO1xuICAgICAgfVxuICAgICAgYWxidW1NYXAuZ2V0KGFsYnVtS2V5KSEudHJhY2tzLnB1c2godHJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShhbGJ1bU1hcC52YWx1ZXMoKSkuc29ydCgoYSwgYikgPT4gYS5hbGJ1bS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5hbGJ1bS5uYW1lKSk7XG4gIH0sIFtmaWx0ZXJlZFRyYWNrc10pO1xuXG4gIGNvbnN0IHBsYXlUcmFjayA9ICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFja1VyaSAmJiAhaXNQYXVzZWQpIHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2Uoe30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoeyB1cmk6IHRyYWNrVXJpIH0sIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9RdWV1ZSA9IGFzeW5jICh0cmFja1VyaTogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5hZGRUb1F1ZXVlKFt7IHVyaTogdHJhY2tVcmkgfV0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVBsYXllclN0YXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlPy5pdGVtPy51cmkpIHtcbiAgICAgIHNldEN1cnJlbnRQbGF5aW5nVXJpKHN0YXRlLml0ZW0udXJpKTtcbiAgICAgIHNldElzUGF1c2VkKHN0YXRlLmlzUGF1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFBsYXlpbmdVcmkobnVsbCk7XG4gICAgICBzZXRJc1BhdXNlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVBsYXllclN0YXRlKCk7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZVBsYXllclN0YXRlLCB7fSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVQbGF5ZXJTdGF0ZSwge30pO1xuICAgIH07XG4gIH0sIFt1cGRhdGVQbGF5ZXJTdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtaWNvblwiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZWFyY2ggc2l6ZT17MjB9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggaW4gJHthcnRpc3ROYW1lfSdzIHRyYWNrcy4uLmB9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmltTWFybGV5NDIwL2FydGlzdHNTZWFyY2hcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1naXRodWJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIEdpdEh1YiByZXBvc2l0b3J5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5naXRodWIgc2l6ZT17MTh9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAge3F1ZXJ5ICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtY2xlYXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeShcIlwiKX0+XG4gICAgICAgICAgICA8SWNvbnMuUmVhY3QuY2xvc2Ugc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXZpZXctdG9nZ2xlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BhcnRpc3Qtc2VhcmNoLXZpZXctYnRuICR7dmlld01vZGUgPT09IFwidHJhY2tzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpZXdNb2RlKFwidHJhY2tzXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgVHJhY2tzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYXJ0aXN0LXNlYXJjaC12aWV3LWJ0biAke3ZpZXdNb2RlID09PSBcImFsYnVtc1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3TW9kZShcImFsYnVtc1wiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEFsYnVtc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtcmVzdWx0c1wiPlxuICAgICAgICB7bG9hZGluZyAmJiBmaWx0ZXJlZFRyYWNrcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkxvYWRpbmcgdHJhY2tzLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWVycm9yXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICApIDogIXF1ZXJ5LnRyaW0oKSAmJiBmaWx0ZXJlZFRyYWNrcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWhpbnRcIj5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZWFyY2ggZmlsbD1cInZhcigtLXNwaWNlLXN1YnRleHQpXCIgc2l6ZT17NDh9IC8+XG4gICAgICAgICAgICA8cD5Gb3VuZCB7ZmlsdGVyZWRUcmFja3MubGVuZ3RofSB0cmFja3MgZnJvbSB7YXJ0aXN0TmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBmaWx0ZXJlZFRyYWNrcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLW5vLXJlc3VsdHNcIj5cbiAgICAgICAgICAgIDxwPk5vIHRyYWNrcyBmb3VuZCBtYXRjaGluZyBcIntxdWVyeX1cIjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWNvdW50XCI+XG4gICAgICAgICAgICAgIHt2aWV3TW9kZSA9PT0gXCJ0cmFja3NcIiBcbiAgICAgICAgICAgICAgICA/IGAke2ZpbHRlcmVkVHJhY2tzLmxlbmd0aH0gdHJhY2ske2ZpbHRlcmVkVHJhY2tzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm91bmRgXG4gICAgICAgICAgICAgICAgOiBgJHthbGJ1bXNWaWV3Lmxlbmd0aH0gYWxidW0ke2FsYnVtc1ZpZXcubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3VuZGBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dmlld01vZGUgPT09IFwidHJhY2tzXCIgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1saXN0XCI+XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFRyYWNrcy5tYXAoKHRyYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFydGlzdC1zZWFyY2gtdHJhY2sgJHtzZWxlY3RlZFRyYWNrID09PSB0cmFjay51cmkgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLnVyaX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVHJhY2sodHJhY2sudXJpKX1cbiAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHBsYXlUcmFjayh0cmFjay51cmkpfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBlLnRhcmdldCAmJiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVHJhY2sodHJhY2sudXJpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgJHt0cmFjay5uYW1lfSBieSAke3RyYWNrLmFydGlzdHMubWFwKChhKSA9PiBhLm5hbWUpLmpvaW4oXCIsIFwiKX0ke2N1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFjay51cmkgPyBcIiAtIG5vdyBwbGF5aW5nXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFjay51cmkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1wbGF5aW5nLWluZGljYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dHJhY2suYWxidW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzJdPy51cmwgfHwgdHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2staW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWVcIj57dHJhY2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stYXJ0aXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFjay5hcnRpc3RzLm1hcCgoYSkgPT4gYS5uYW1lKS5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hbGJ1bVwiPnt0cmFjay5hbGJ1bS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1wbGF5YmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhY2tQbGF5YmFja0NvbnRyb2wgdXJpPXt0cmFjay51cml9IGR1cmF0aW9uPXt0cmFjay5kdXJhdGlvbl9tc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtYWxidW0tbGlzdFwiPlxuICAgICAgICAgICAgICAgIHthbGJ1bXNWaWV3Lm1hcCgoYWxidW1Hcm91cCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFsYnVtLWdyb3VwXCIga2V5PXthbGJ1bUdyb3VwLmFsYnVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtYWxidW0taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbGJ1bUdyb3VwLmFsYnVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFsYnVtLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YWxidW1Hcm91cC5hbGJ1bS5pbWFnZXNbMl0/LnVybCB8fCBhbGJ1bUdyb3VwLmFsYnVtLmltYWdlc1swXT8udXJsIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFsYnVtLW5hbWVcIj57YWxidW1Hcm91cC5hbGJ1bS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFsYnVtLXRyYWNrLWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWxidW1Hcm91cC50cmFja3MubGVuZ3RofSB0cmFja3thbGJ1bUdyb3VwLnRyYWNrcy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLWFsYnVtLXRyYWNrc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHthbGJ1bUdyb3VwLnRyYWNrcy5tYXAoKHRyYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcnRpc3Qtc2VhcmNoLXRyYWNrICR7c2VsZWN0ZWRUcmFjayA9PT0gdHJhY2sudXJpID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLnVyaX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUcmFjayh0cmFjay51cmkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBwbGF5VHJhY2sodHJhY2sudXJpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgIT09IGUudGFyZ2V0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRyYWNrKHRyYWNrLnVyaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2stbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFjay51cmkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXBsYXlpbmctaW5kaWNhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0cmFjay5hbGJ1bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtdHJhY2staW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzJdPy51cmwgfHwgdHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3Qtc2VhcmNoLXRyYWNrLW5hbWVcIj57dHJhY2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1hcnRpc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhY2suYXJ0aXN0cy5tYXAoKGEpID0+IGEubmFtZSkuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC10cmFjay1wbGF5YmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFja1BsYXliYWNrQ29udHJvbCB1cmk9e3RyYWNrLnVyaX0gZHVyYXRpb249e3RyYWNrLmR1cmF0aW9uX21zfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXNMb2FkaW5nTW9yZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LXNlYXJjaC1sb2FkaW5nLW1vcmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1zZWFyY2gtc3Bpbm5lclwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TG9hZGluZyBtb3JlLi4uPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC5hcnRpc3Qtc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXNwaWNlLWJ1dHRvbikgMCUsIHZhcigtLXNwaWNlLWJ1dHRvbi1hY3RpdmUpIDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB0cmFuc2l0aW9uOlxuICAgIHRyYW5zZm9ybSAwLjE1cyBlYXNlLFxuICAgIGJveC1zaGFkb3cgMC4ycyBlYXNlLFxuICAgIGZpbHRlciAwLjJzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGlzdC1zZWFyY2gtdmlldy10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXZpZXctYnRuIHtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjpcbiAgICBjb2xvciAwLjJzIGVhc2UsXG4gICAgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXZpZXctYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC12aWV3LWJ0bi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggODBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWlucHV0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRyYW5zaXRpb246XG4gICAgYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UsXG4gICAgYmFja2dyb3VuZCAwLjI1cyBlYXNlLFxuICAgIGJveC1zaGFkb3cgMC4yNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1tYWluKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSh2YXIoLS1zcGljZS1yZ2ItaGlnaGxpZ2h0KSwgMC4yKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1jbGVhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDZweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQgMC4ycyBlYXNlLFxuICAgIGNvbG9yIDAuMnMgZWFzZSxcbiAgICB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtY2xlYXI6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWdpdGh1YiB7XG4gIHJpZ2h0OiA0NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQgMC4ycyBlYXNlLFxuICAgIGNvbG9yIDAuMnMgZWFzZSxcbiAgICB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtZ2l0aHViOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1naXRodWI6Zm9jdXMtdmlzaWJsZSB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXNwaWNlLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXJlc3VsdHMge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XG4gIG1heC1oZWlnaHQ6IG1pbig5MHZoLCA2MDBweCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWRpbmcsXG4uYXJ0aXN0LXNlYXJjaC1oaW50LFxuLmFydGlzdC1zZWFyY2gtbm8tcmVzdWx0cyxcbi5hcnRpc3Qtc2VhcmNoLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1lcnJvcik7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWRpbmctbW9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXNwaW5uZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zcGljZS1zdHJva2UpO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYXJ0aXN0LXNlYXJjaC1zcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFydGlzdC1zZWFyY2gtc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWNvdW50IHtcbiAgcGFkZGluZzogMCA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCA0OHB4IDFmciBhdXRvIDIwMHB4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjJzIGVhc2UsXG4gICAgdHJhbnNmb3JtIDAuMTVzIGVhc2UsXG4gICAgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4wMykgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zcGljZS1yZ2ItY2FyZCksIDAuNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjazpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3BpY2UtcmdiLWNhcmQpLCAwLjgpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stbnVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6aG92ZXIgLmFydGlzdC1zZWFyY2gtdHJhY2stbnVtYmVyIHtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1wbGF5aW5nLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZWQ3NjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAjMWVkNzYwO1xuICBhbmltYXRpb246IGFydGlzdC1zZWFyY2gtcHVsc2UgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBhcnRpc3Qtc2VhcmNoLXB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmFydGlzdC1zZWFyY2gtcGxheWluZy1pbmRpY2F0b3Ige1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2staW1hZ2Uge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2s6aG92ZXIgLmFydGlzdC1zZWFyY2gtdHJhY2staW1hZ2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2staW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXgtd2lkdGg6IDE0NHB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1hcnRpc3RzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC10cmFjay1hbGJ1bSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stZHVyYXRpb24ge1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFydGlzdC1zZWFyY2gtdHJhY2stYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSwgdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrOmhvdmVyIC5hcnRpc3Qtc2VhcmNoLXRyYWNrLWFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjE1cyBlYXNlLFxuICAgIGNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFjdGlvbi1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWNhcmQtaGlnaGxpZ2h0KTtcbn1cblxuLmFydGlzdC1zZWFyY2gtbG9hZC1tb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1sb2FkLW1vcmU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkLWhpZ2hsaWdodCk7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWxvYWQtbW9yZTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmFydGlzdC1zZWFyY2gtcGxheWJhY2stY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXRyYWNrLXBsYXliYWNrIC5hcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWNvbnRyb2xzIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFydGlzdC1zZWFyY2gtcGxheWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjJzIGVhc2UsXG4gICAgdHJhbnNmb3JtIDAuMTVzIGVhc2UsXG4gICAgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLXBsYXliYWNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmFydGlzdC1zZWFyY2gtc2xpZGVyLXRpbWUge1xuICBtaW4td2lkdGg6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFsYnVtLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFsYnVtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFsYnVtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3BpY2UtcmdiLWNhcmQpLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5hcnRpc3Qtc2VhcmNoLWFsYnVtLWltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmFydGlzdC1zZWFyY2gtYWxidW0tbmFtZSB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1hbGJ1bS10cmFjay1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1hbGJ1bS10cmFja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4uYXJ0aXN0LXNlYXJjaC1hbGJ1bS10cmFja3MgLmFydGlzdC1zZWFyY2gtdHJhY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggNDhweCAxZnIgYXV0byBhdXRvO1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmFydGlzdC1zZWFyY2gtYWxidW0tdHJhY2tzIC5hcnRpc3Qtc2VhcmNoLXRyYWNrLXBsYXliYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgeyBQb3B1cE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4XCI7XG5pbXBvcnQgeyBBcnRpc3RTZWFyY2hNb2RhbCB9IGZyb20gXCIuL3NlYXJjaE1vZGFsLnRzeFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuY29uc3Qgc2VhcmNoQXJ0aXN0TWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIlNlYXJjaCBBcnRpc3QgVHJhY2tzXCIsXG4gIGxlYWRpbmdJY29uOiBTcGljZXRpZnkuU1ZHSWNvbnMuc2VhcmNoLFxuICBvbkNsaWNrOiAoX2NvbnRleHQ6IGFueSwgX2l0ZW06IGFueSwgX2V2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCB1cmkgPSBfY29udGV4dD8ucHJvcHM/LnVyaTtcbiAgICBpZiAoIXVyaSkgcmV0dXJuO1xuXG4gICAgUG9wdXBNb2RhbCh7XG4gICAgICB0aXRsZTogXCJTZWFyY2ggQXJ0aXN0IFRyYWNrc1wiLFxuICAgICAgY29udGVudDogPEFydGlzdFNlYXJjaE1vZGFsIGFydGlzdE5hbWU9XCJBcnRpc3RcIiBhcnRpc3RVcmk9e3VyaX0gLz4sXG4gICAgICBpc0xhcmdlOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IHRydWUsXG4gICAgfSk7XG4gIH0sXG4gIHNob3VsZEFkZDogKHByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCB1cmkgPSBwcm9wcz8udXJpO1xuICAgIGlmICghdXJpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpPy50eXBlO1xuICAgIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuQVJUSVNUO1xuICB9LFxufSk7XG5cbnNlYXJjaEFydGlzdE1lbnVJdGVtLnJlZ2lzdGVyKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBTyxJQUFNO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyxxQkFBUSxVQUFVOzs7QUN2Q2xCLElBQU07QUFBQSxFQUNYLG9EQUFBQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQUFDO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyx5QkFBUSxVQUFVOzs7QUNkZixJQUFNLFFBQVEsSUFBSSxjQUFjO0FBQ2hDLE1BQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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d0I7QUFBQSxRQUN2QyxvQkFBQyxVQUFLLDZCQUFlO0FBQUEsU0FDdkI7QUFBQSxPQUVKLEdBRUo7QUFBQSxLQUNGO0FBRUo7OztBQy9mVSxJQUFNQyxTQUFRLElBQUksY0FBYztBQUNoQ0EsT0FBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FvaEIzQjtBQUNTLElBQU8saUJBQVFBOzs7QUNuaEJ6QixTQUFTLG1CQUFtQixLQUFLLGNBQU07QUFFdkMsSUFBTSx1QkFBdUIsSUFBSSxVQUFVLGNBQWMsS0FBSztBQUFBLEVBQzVELFVBQVU7QUFBQSxFQUNWLGFBQWEsVUFBVSxTQUFTO0FBQUEsRUFDaEMsU0FBUyxDQUFDLFVBQWUsT0FBWSxXQUFnQjtBQUNuRCxVQUFNLE1BQU0sVUFBVSxPQUFPO0FBQzdCLFFBQUksQ0FBQyxJQUFLO0FBRVYsZUFBVztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsU0FBUyxvQkFBQyxxQkFBa0IsWUFBVyxVQUFTLFdBQVcsS0FBSztBQUFBLE1BQ2hFLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxXQUFXLENBQUMsVUFBZTtBQUN6QixVQUFNLE1BQU0sT0FBTztBQUNuQixRQUFJLENBQUMsSUFBSyxRQUFPO0FBQ2pCLFVBQU0sT0FBTyxVQUFVLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDdEMsV0FBTyxTQUFTLFVBQVUsSUFBSSxLQUFLO0FBQUEsRUFDckM7QUFDRixDQUFDO0FBRUQscUJBQXFCLFNBQVM7IiwKICAibmFtZXMiOiBbIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwgInZlcnNpb24iLCAiRnJhZ21lbnQiLCAiQ29tcG9uZW50IiwgInNoZWV0IiwgInJhdyIsICJGcmFnbWVudCIsICJzaGVldCJdCn0K
