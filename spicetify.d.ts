declare namespace Spicetify {
  type Icon =
    | "album" | "artist" | "block" | "check" | "chevron-left" | "chevron-right"
    | "clock" | "copy" | "download" | "edit" | "external-link" | "follow"
    | "fullscreen" | "grid-view" | "heart" | "heart-active" | "library"
    | "list-view" | "lock" | "locked" | "locked-active" | "lyrics" | "menu"
    | "minimize" | "minus" | "more" | "pause" | "play" | "playlist"
    | "playlist-folder" | "plus-alt" | "plus2px" | "queue" | "repeat"
    | "repeat-once" | "search" | "search-active" | "shuffle" | "skip-back"
    | "skip-back15" | "skip-forward" | "skip-forward15" | "speaker" | "spotify"
    | "subtitles" | "trash" | "trashbin" | "volume" | "volume-off" | "volume-one-wave" | "volume-two-wave"
    | "x";

  const SVGIcons: Record<Icon, string>;

  type Variant =
    | "viola" | "violaBold" | "alto" | "altoBrio" | "brio" | "canon"
    | "cello" | "celloCanon" | "bass" | "forte" | "mesto" | "mestoBold"
    | "metronome" | "ballad" | "balladBold" | "finale" | "finaleBold"
    | "minuet" | "minuetBold";

  type SemanticColor =
    | "textBase" | "textSubdued" | "textBrightAccent" | "textNegative"
    | "textWarning" | "textPositive" | "essentialBase" | "essentialSubdued"
    | "essentialBrightAccent" | "essentialNegative" | "essentialWarning"
    | "essentialPositive" | "backgroundBase" | "backgroundHighlight"
    | "backgroundPress" | "backgroundElevatedBase" | "backgroundElevatedHighlight"
    | "backgroundElevatedPress" | "backgroundTintedBase" | "backgroundTintedHighlight"
    | "backgroundTintedPress";

  namespace Player {
    function addEventListener(type: string, callback: (event?: Event) => void): void;
    function removeEventListener(type: string, callback: (event?: Event) => void): void;
    function dispatchEvent(event: Event): void;
    const data: PlayerState;
    const eventListeners: Record<string, Array<(event?: Event) => void>>;

    function play(): void;
    function pause(): void;
    function togglePlay(): void;
    function next(): void;
    function back(): void;
    function seek(position: number): void;
    function getProgress(): number;
    function getProgressPercent(): number;
    function getDuration(): number;
    function isPlaying(): boolean;
    function getVolume(): number;
    function setVolume(level: number): void;
    function getMute(): boolean;
    function setMute(state: boolean): void;
    function toggleMute(): void;
    function increaseVolume(): void;
    function decreaseVolume(): void;
    function getRepeat(): number;
    function setRepeat(mode: number): void;
    function toggleRepeat(): void;
    function getShuffle(): boolean;
    function setShuffle(state: boolean): void;
    function toggleShuffle(): void;
    function getHeart(): boolean;
    function toggleHeart(): void;
    function formatTime(milisecond: number): string;
    function skipBack(amount?: number): void;
    function skipForward(amount?: number): void;
    function playUri(uri: string, context?: any, options?: any): Promise<void>;
  }

  type PlayerState = {
    timestamp: number;
    context: PlayerContext;
    index: PlayerIndex;
    item: PlayerTrack;
    shuffle: boolean;
    repeat: number;
    speed: number;
    positionAsOfTimestamp: number;
    duration: number;
    hasContext: boolean;
    isPaused: boolean;
    isBuffering: boolean;
    restrictions: Restrictions;
    playbackQuality: PlaybackQuality;
    playbackId: string;
    sessionId: string;
  };

  type PlayerContext = { uri: string; url: string; metadata: Record<string, string> };
  type PlayerIndex = { pageURI?: string | null; pageIndex: number; itemIndex: number };

  type PlayerTrack = {
    type: string;
    uri: string;
    uid: string;
    name: string;
    mediaType: string;
    duration: { milliseconds: number };
    album: Album;
    artists?: ArtistsEntity[];
    isLocal: boolean;
    isExplicit: boolean;
    metadata: Record<string, string>;
    images?: ImagesEntity[];
  };

  type Album = { type: string; uri: string; name: string; images?: ImagesEntity[] };
  type ImagesEntity = { url: string; label: string };
  type ArtistsEntity = { type: string; uri: string; name: string };

  type Restrictions = {
    canPause: boolean; canResume: boolean; canSeek: boolean;
    canSkipPrevious: boolean; canSkipNext: boolean;
    canToggleRepeatContext: boolean; canToggleRepeatTrack: boolean;
    canToggleShuffle: boolean;
  };

  type PlaybackQuality = {
    bitrateLevel: number; strategy: number;
    targetBitrateLevel: number; targetBitrateAvailable: boolean;
    hifiStatus: number;
  };

  namespace CosmosAsync {
    type Method = "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "SUB";
    type Headers = Record<string, string>;
    type Body = Record<string, any>;

    interface Response {
      body: any; headers: Headers; status: number; uri?: string;
    }

    function get(url: string, body?: Body, headers?: Headers): Promise<Response["body"]>;
    function post(url: string, body?: Body, headers?: Headers): Promise<Response["body"]>;
    function put(url: string, body?: Body, headers?: Headers): Promise<Response["body"]>;
    function del(url: string, body?: Body, headers?: Headers): Promise<Response["body"]>;
    function patch(url: string, body?: Body, headers?: Headers): Promise<Response["body"]>;
    function request(method: Method, url: string, body?: Body, headers?: Headers): Promise<Response>;
  }

  const BridgeAPI: any;
  const CosmosAPI: any;
  const LiveAPI: any;
  const Queue: any;
  const Tippy: any;
  const TippyProps: any;
  const React: any;
  const ReactDOM: any;
  const ReactDOMServer: any;

  namespace Platform {
    namespace LibraryAPI {
      function isFollowed(uri: string): Promise<boolean>;
      function follow(uri: string): Promise<boolean>;
      function unfollow(uri: string): Promise<boolean>;
      function getAll(): Promise<any[]>;
    }
    namespace PlaylistAPI {
      function get(id: string): Promise<any>;
      function create(name: string, description?: string): Promise<any>;
      function addTracks(id: string, uris: string[]): Promise<any>;
      function removeTracks(id: string, uris: string[]): Promise<any>;
      function setDetails(id: string, name: string, description?: string): Promise<any>;
      function reorder(id: string, rangeStart: number, insertBefore: number): Promise<any>;
      function getContents(uri: string, options?: { offset?: number; limit?: number }): Promise<{ items?: any[] }>;
      function remove(uri: string, tracks: { uri: string; uid: string }[]): Promise<any>;
      function add(uri: string, trackUris: string[], options?: Record<string, unknown>): Promise<any>;
    }
  }

  namespace GraphQL {
    function query<T = any>(operationName: string, variables?: Record<string, any>): Promise<T>;
  }

  namespace ContextMenuV2 {
    class Item {
      constructor(options: {
        name?: string;
        children?: React.ReactNode;
        leadingIcon?: Icon | string;
        onClick: (context: any, item: any, event: any) => void;
        shouldAdd?: (props: any) => boolean;
        disabled?: boolean;
      });
      register(): void;
      deregister(): void;
    }
  }

  function showNotification(message: any, isError?: boolean, msTimeout?: number): void;
  function addToQueue(uri: ContextTrack[]): Promise<void>;
  function removeFromQueue(uri: ContextTrack[]): Promise<void>;
  function colorExtractor(uri: string): Promise<any>;
  function getAudioData(uri?: string): Promise<any>;

  type ContextTrack = { uri: string; uid?: string; metadata?: Record<string, string> };

  class URI {
    type: string;
    id: string;
    constructor(type: string, props: any);
    static Type: Record<string, string>;
    static fromString(str: string): URI;
    static from(value: any): URI | null;
    static isSameIdentity(baseUri: URI | string, refUri: URI | string): boolean;
    static idToHex(id: string): string;
    static hexToId(hex: string): string;
    static albumURI(id: string, disc: number): URI;
    static artistURI(id: string): URI;
    static trackURI(id: string, anchor?: string, context?: string, play?: boolean): URI;
    static playlistV2URI(id: string): URI;
    static searchURI(query: string): URI;
    static isAd(uri: URI | string): boolean;
    static isAlbum(uri: URI | string): boolean;
    static isArtist(uri: URI | string): boolean;
    static isTrack(uri: URI | string): boolean;
    static isPlaylist(uri: URI | string): boolean;
    static isPlaylistV1OrV2(uri: URI | string): boolean;
    toString(): string;
    toURI(): string;
    toURLPath(opt_leadingSlash: boolean): string;
    toURL(origin?: string): string;
    clone(): URI | null;
    getPath(): string;
  }

  namespace Menu {
    class Item {
      constructor(name: string, isEnabled: boolean, onClick: (self: Item) => void, icon?: Icon | string);
      name: string; isEnabled: boolean;
      setName(name: string): void;
      setState(isEnabled: boolean): void;
      setIcon(icon: Icon | string): void;
      register(): void;
      deregister(): void;
    }
    class SubMenu {
      constructor(name: string, subItems: Item[]);
      name: string;
      addItem(item: Item): void;
      removeItem(item: Item): void;
      register(): void;
      deregister(): void;
    }
  }

  namespace ContextMenu {
    type OnClickCallback = (uris: string[], uids?: string[], contextUri?: string) => void;
    type ShouldAddCallback = (uris: string[], uids?: string[], contextUri?: string) => boolean;

    class Item {
      static readonly iconList: Icon[];
      constructor(name: string, onClick: OnClickCallback, shouldAdd?: ShouldAddCallback, icon?: Icon, disabled?: boolean);
      name: string; icon: Icon | string; disabled: boolean; shouldAdd: ShouldAddCallback; onClick: OnClickCallback;
      register: () => void;
      deregister: () => void;
    }

    class SubMenu {
      constructor(name: string, subItems: Iterable<Item>, shouldAdd?: ShouldAddCallback, disabled?: boolean);
      name: string; disabled: boolean; shouldAdd: ShouldAddCallback;
      addItem(item: Item): void;
      removeItem(item: Item): void;
      register: () => void;
      deregister: () => void;
    }
  }

  namespace PopupModal {
    interface Content {
      title: string;
      content: string | Element;
      isLarge?: boolean;
    }
    function display(e: Content): void;
    function hide(): void;
  }

  namespace Keyboard {
    type ValidKey = string;
    type KeysDefine = string | { key: string; ctrl?: boolean; shift?: boolean; alt?: boolean; meta?: boolean };
    const KEYS: Record<ValidKey, string>;
    function registerShortcut(keys: KeysDefine, callback: (event: KeyboardEvent) => void): void;
    function registerIsolatedShortcut(keys: KeysDefine, callback: (event: KeyboardEvent) => void): void;
    function registerImportantShortcut(keys: KeysDefine, callback: (event: KeyboardEvent) => void): void;
    function deregisterShortcut(keys: KeysDefine): void;
    function deregisterImportantShortcut(keys: KeysDefine): void;
    function changeShortcut(keys: KeysDefine, newKeys: KeysDefine): void;
  }

  namespace Locale {
    function getLocale(): string;
    function getAcceptedLanguages(): string[];
  }

  namespace AppTitle {
    function set(title: string): Promise<{ clear: () => void }>;
    function reset(): Promise<void>;
    function get(): Promise<string>;
    function sub(callback: (title: string) => void): { clear: () => void };
  }

  function getFontStyle(font: Variant): string;
  function Mousetrap(element?: any): void;
}

interface Window {
  Spicetify: typeof Spicetify;
}