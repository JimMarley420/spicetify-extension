/**
 * Every user-facing English string of the extension, centralized to keep a
 * future i18n pass trivial. Components never hard-code display text.
 */
export const strings = {
  menu: {
    itemLabel: "Find Duplicates",
  },
  modal: {
    title: "Playlist Duplicate Finder",
    close: "Close",
  },
  badges: {
    editable: "Editable",
    editableHint:
      "You have edit permission on this playlist (owner or collaborator), so you can remove tracks from it.",
    readOnly: "Read-only",
    readOnlyHint:
      "You don't have edit permission on this playlist (neither owner nor collaborator), so removal is disabled.",
  },
  states: {
    loadingTracks: "Loading playlist…",
    loadedCount: (n: number) => `Loading playlist… ${n} tracks`,
    loadingDetails: "Fetching track details (ISRC)",
    scanning: "Scanning for duplicates…",
    emptyPlaylist: "This playlist is empty, there is nothing to scan.",
    noDuplicates: "No duplicates found in this playlist.",
    noDuplicatesHint: "Try the lower-confidence levels — or the playlist may simply be clean.",
    networkError: "Something went wrong while loading the playlist.",
    retry: "Retry",
    readOnlyNotice:
      "This playlist is read-only: you don't have edit permission on it (you are neither its owner nor a collaborator), so removing tracks is disabled. You can still review every group.",
    noUidNotice:
      "Spotify did not return an occurrence id for this row, so it cannot be removed precisely. It stays visible for review but cannot be selected.",
  },
  levels: {
    exact: {
      label: "Identical Tracks",
      hint: "The exact same Spotify track added several times to the playlist.",
    },
    isrc: {
      label: "Same Recording",
      hint: "Different Spotify entries sharing the same ISRC — identical audio, different releases.",
    },
    probable: {
      label: "Same Title & Artist",
      hint: "Same title and at least one shared artist. Almost always real duplicates.",
    },
    likely: {
      label: "Title & Length Match",
      hint: "Same title and durations within 5 seconds.",
    },
    possible: {
      label: "Similar Songs",
      hint: "Similar titles and similar durations — may include remixes and covers.",
    },
    maybe: {
      label: "Possible Matches",
      hint: "Low-confidence title similarity only. Review very carefully.",
    },
  },
  levelMeta: {
    groupsCount: (n: number) => `${n} group${n === 1 ? "" : "s"}`,
    emptyLevel: "No matches for this level.",
  },
  panel: {
    selectAll: "Select all",
    selectAllHint:
      "Checks every duplicate of this level, except one entry per group — you never wipe out a song entirely.",
    deselectAll: "Deselect all",
  },
  row: {
    noAddedDate: "",
    unknownAlbum: "Unknown album",
    noArtists: "",
    play: "Play this track to compare it",
    pause: "Pause",
  },
  footer: {
    selection: (n: number) => `${n} track${n === 1 ? "" : "s"} selected`,
    warning: "Removal is permanent and cannot be undone.",
    cancel: "Cancel",
    remove: (n: number) => `Remove ${n} track${n === 1 ? "" : "s"}`,
    confirmTitle: "Confirm removal",
    confirmBody: (n: number, playlist: string) =>
      `Remove ${n} track${n === 1 ? "" : "s"} from "${playlist}"? This action is irreversible.`,
    confirmRemove: (n: number) => `Yes, remove ${n}`,
    keepEditing: "Keep editing",
    removing: (done: number, total: number) => `Removing ${done}/${total}…`,
  },
  summary: {
    allRemoved: (n: number) => `${n} track${n === 1 ? "" : "s"} removed from the playlist.`,
    partialFailure: (removed: number, failed: number) =>
      `${removed} removed, ${failed} failed. Retry the remaining ones below.`,
    allFailed: (failed: number) => `Removal failed, no track was removed (${failed} attempted).`,
  },
} as const;
