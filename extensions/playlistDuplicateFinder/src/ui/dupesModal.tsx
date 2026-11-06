import { type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { Icons } from "../../../../shared/components/icons.tsx";
import {
  fetchPlaylistEditability,
  fetchPlaylistEntries,
  hydrateIsrcs,
  notices,
  notifyFailure,
  notifySuccess,
  type PlaylistIdentity,
  REMOVAL_BATCH_SIZE,
  type RemovalSummary,
  removeEntries,
} from "../adapter.ts";
import { detectDuplicates } from "../detection/dedup.ts";
import {
  type DuplicateGroup,
  GROUP_ORDER,
  GROUP_RELIABILITY,
  type GroupId,
  type PlaylistEntry,
} from "../detection/types.ts";
import { strings } from "../strings.ts";

/* ------------------------------------------------------------- formaters */

/** `m:ss` for a duration, or `--:--` when Spotify gave us nothing usable. */
function formatDuration(ms: number | null): string {
  if (ms == null || ms <= 0) return "--:--";
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}

/** Human-readable "added" date; the raw string when it is not parseable. */
function formatAddedDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

/** Segment color per reliability score (1 = warm red, 6 = Spotify green). */
const RELIABILITY_COLORS: Record<number, string> = {
  1: "#e0745c",
  2: "#d99e4a",
  3: "#bfba50",
  4: "#8dbd51",
  5: "#4bc05e",
  6: "#1db954",
};

/* -------------------------------------------------------------- modal root */

const MODAL_CONTAINER_ID = "duplicate-finder-modal-container";
let modalRoot: Root | null = null;

/** Close and fully unmount the duplicate finder modal. */
export function closeDuplicateFinder(): void {
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  document.getElementById(MODAL_CONTAINER_ID)?.remove();
  document.body.style.overflow = "auto";
}

/** Open the duplicate finder for the given playlist. Replaces an open one. */
export function showDuplicateFinderModal(playlist: PlaylistIdentity): void {
  closeDuplicateFinder();
  const container = document.createElement("div");
  container.id = MODAL_CONTAINER_ID;
  document.body.appendChild(container);
  document.body.style.overflow = "hidden";

  modalRoot = createRoot(container);
  modalRoot.render(<DuplicateFinderModal playlist={playlist} />);
}

/* ------------------------------------------------------------- components */

type Phase = "loading" | "ready" | "error" | "empty";

interface TrackRowProps {
  track: PlaylistEntry;
  checked: boolean;
  canEdit: boolean;
  nowPlaying: NowPlaying;
  onToggle: (position: number) => void;
}

/* ---------------------------------------------------------- now playing */

interface NowPlaying {
  uri: string | null;
  isPaused: boolean;
}

/** Extract just what the rows care about from a player state (or nothing). */
function readNowPlaying(state: Spicetify.PlayerState | undefined): NowPlaying {
  return { uri: state?.item?.uri ?? null, isPaused: state?.isPaused ?? true };
}

/** Single modal-wide subscription to play/pause/track changes. Deliberately
 *  NOT the 10 Hz progress stream: the rows only need to know which track is
 *  playing — subscribing every row to that stream floods React with re-renders
 *  and tears the panel's paint on large playlists. */
function useNowPlaying(): NowPlaying {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>(() =>
    readNowPlaying(Spicetify.Platform.PlayerAPI._state),
  );

  useEffect(() => {
    /** Update the shared state for one player "update" event. */
    const onChange = (event: { data: Spicetify.PlayerState }) => {
      const next = readNowPlaying(event.data);
      // Position ticks also emit "update": keep the same object while neither
      // the track nor the pause state changed, so React skips the re-render.
      setNowPlaying((prev) =>
        prev.uri === next.uri && prev.isPaused === next.isPaused ? prev : next,
      );
    };
    Spicetify.Platform.PlayerAPI._events.addListener("update", onChange, {});
    return () => Spicetify.Platform.PlayerAPI._events.removeListener("update", onChange, {});
  }, []);

  return nowPlaying;
}

/** Audition button: play this candidate to compare it by ear. */
function RowPlayButton({ uri, nowPlaying }: { uri: string; nowPlaying: NowPlaying }) {
  const isThisTrack = nowPlaying.uri === uri;
  const isPlayingThis = isThisTrack && !nowPlaying.isPaused;
  const label = isPlayingThis ? strings.row.pause : strings.row.play;

  /** Toggle this track: play it, pause it, or resume it in place. */
  const onClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (isThisTrack) {
      if (nowPlaying.isPaused) Spicetify.Platform.PlayerAPI.resume({});
      else Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play({ uri }, {});
    }
  };

  return (
    <button
      aria-label={label}
      className={`dupfind-row__play${isPlayingThis ? " dupfind-row__play--on" : ""}`}
      onClick={onClick}
      title={label}
      type="button"
    >
      {isPlayingThis ? <Icons.React.pause size={14} /> : <Icons.React.play size={14} />}
    </button>
  );
}

/** One playlist row: checkbox, artwork, metadata and the audition button. */
function TrackRow({ track, checked, canEdit, nowPlaying, onToggle }: TrackRowProps) {
  const canPlay = track.uri.startsWith("spotify:track:");
  // Removal targets an occurrence id, so rows without one stay visible for
  // review but are locked — and the hover text names the actual reason.
  const disabled = !canEdit || !track.uid;
  const disabledTitle = !canEdit ? strings.states.readOnlyNotice : strings.states.noUidNotice;

  return (
    <div
      className={`dupfind-row${checked ? " dupfind-row--checked" : ""}${disabled ? " dupfind-row--disabled" : ""}`}
      onClick={disabled ? undefined : () => onToggle(track.position)}
    >
      {/* The checkbox stops the event so the row handler does not toggle twice. */}
      <input
        aria-label={track.name}
        checked={checked}
        className="dupfind-row__checkbox"
        disabled={disabled}
        onChange={() => onToggle(track.position)}
        onClick={(event) => event.stopPropagation()}
        title={disabled ? disabledTitle : undefined}
        type="checkbox"
      />
      <img
        alt=""
        className="dupfind-row__art"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.visibility = "hidden";
        }}
        src={track.imageUrl}
      />
      <div className="dupfind-row__info">
        <div className="dupfind-row__titleline">
          <span className="dupfind-row__title">{track.name}</span>
          <span className="dupfind-row__duration">{formatDuration(track.durationMs)}</span>
        </div>
        <span className="dupfind-row__meta">
          {track.artists.length > 0 ? track.artists.join(", ") : strings.row.noArtists}
          {" · "}
          {track.albumName || strings.row.unknownAlbum}
        </span>
        <span className="dupfind-row__where">
          {`#${track.position + 1}`}
          {track.addedAt ? ` · added ${formatAddedDate(track.addedAt)}` : ""}
        </span>
      </div>
      {canPlay && <RowPlayButton nowPlaying={nowPlaying} uri={track.uri} />}
    </div>
  );
}

/** Card holding every occurrence of one duplicate group. */
function GroupCard({
  group,
  selected,
  canEdit,
  nowPlaying,
  onToggle,
}: {
  group: DuplicateGroup;
  selected: ReadonlySet<number>;
  canEdit: boolean;
  nowPlaying: NowPlaying;
  onToggle: (position: number) => void;
}) {
  if (group.members.length < 2) return null;
  return (
    <div className="dupfind-group">
      {group.members.map((member) => (
        <div className="dupfind-group__row" key={member.position}>
          <TrackRow
            canEdit={canEdit}
            checked={selected.has(member.position)}
            nowPlaying={nowPlaying}
            onToggle={onToggle}
            track={member}
          />
        </div>
      ))}
    </div>
  );
}

/** Confidence meter: `value` of `GROUP_ORDER.length` segments lit up. */
function Gauge({ value }: { value: number }) {
  const total = GROUP_ORDER.length;
  const color = RELIABILITY_COLORS[value] ?? RELIABILITY_COLORS[1];
  return (
    <div aria-label={`Confidence ${value} of ${total}`} className="dupfind-gauge" role="img">
      {Array.from({ length: total }, (_, index) => (
        <span
          className={`dupfind-gauge__seg${index < value ? " dupfind-gauge__seg--on" : ""}`}
          key={index}
          style={index < value ? { backgroundColor: color } : undefined}
        />
      ))}
    </div>
  );
}

/** The whole finder: scan lifecycle, selection state, review and removal. */
function DuplicateFinderModal({ playlist }: { playlist: PlaylistIdentity }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progressText, setProgressText] = useState<string>(strings.states.loadingTracks);
  const [entries, setEntries] = useState<PlaylistEntry[]>([]);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [activeLevel, setActiveLevel] = useState<GroupId>("exact");
  const [selected, setSelected] = useState<ReadonlySet<number>>(new Set());
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [removalProgress, setRemovalProgress] = useState<{ done: number; total: number } | null>(
    null,
  );
  const [summary, setSummary] = useState<string | null>(null);

  // One player subscription for the whole modal (see `useNowPlaying`).
  const nowPlaying = useNowPlaying();

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    /** Escape closes the window — never while a removal is in flight. */
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      // Never drop the window while a deletion is running.
      if (removalProgress) return;
      event.preventDefault();
      closeDuplicateFinder();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [removalProgress]);

  /** Load the playlist, show it, then hydrate ISRCs in the background. */
  const scan = useCallback(async () => {
    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;

    setPhase("loading");
    setProgressText(strings.states.loadingTracks);
    setSelected(new Set());
    setConfirmOpen(false);
    setSummary(null);
    setCanEdit(false);

    try {
      const editability = await fetchPlaylistEditability(playlist.uri);
      if (abort.signal.aborted) return;
      setCanEdit(editability.canEdit);

      const loaded = await fetchPlaylistEntries(playlist.uri, {
        signal: abort.signal,
        onProgress: (loadedCount) => setProgressText(strings.states.loadedCount(loadedCount)),
      });
      if (abort.signal.aborted) return;

      if (loaded.length === 0) {
        setEntries([]);
        setPhase("empty");
        return;
      }

      setEntries(loaded);
      setPhase("ready");

      hydrateIsrcs(loaded, {
        signal: abort.signal,
        onProgress: (done, total) =>
          setProgressText(`${strings.states.loadingDetails} ${done}/${total}`),
      }).then(
        () => {
          if (abort.signal.aborted) return;
          // Re-copy whatever is current — a removal may have replaced the list
          // while hydration ran — so detection reruns with the ISRCs but
          // resurrected entries never come back. New identity ⇒ memo reruns.
          setEntries((prev) => [...prev]);
        },
        (error) => {
          if (abort.signal.aborted) return;
          console.warn("[playlistDuplicateFinder] ISRC hydration stopped:", error);
          setProgressText(strings.states.loadingDetails);
        },
      );
    } catch (error) {
      if (abort.signal.aborted) return;
      console.warn("[playlistDuplicateFinder] scan failed:", error);
      setPhase("error");
    }
  }, [playlist.uri]);

  useEffect(() => {
    void scan();
  }, [scan]);

  const results = useMemo(() => detectDuplicates(entries), [entries]);
  const groupCounts = useMemo(
    () =>
      Object.fromEntries(GROUP_ORDER.map((id) => [id, results[id].length])) as Record<
        GroupId,
        number
      >,
    [results],
  );
  const anyDuplicates = GROUP_ORDER.some((id) => groupCounts[id] > 0);

  useEffect(() => {
    // Jump to the most confident level that has matches once scanning is done
    // and re-run this when a removal empties the active level.
    if (phase !== "ready") return;
    if (GROUP_ORDER.some((id) => groupCounts[id] > 0) && groupCounts[activeLevel] === 0) {
      const firstWithGroups = GROUP_ORDER.find((id) => groupCounts[id] > 0);
      if (firstWithGroups) setActiveLevel(firstWithGroups);
    }
  }, [phase, groupCounts, activeLevel]);

  /** Add or remove one playlist position from the selection. */
  const toggleRow = useCallback((position: number) => {
    setSummary(null);
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(position)) next.delete(position);
      else next.add(position);
      return next;
    });
  }, []);

  /** Select/deselect the duplicate entries of the level currently displayed.
   *  "Select all" only checks duplicates: the first member of each group (its
   *  earliest occurrence) is left out so the group does not lose every copy,
   *  and rows without an occurrence id are never selected. */
  const setLevelSelection = (mode: "all" | "none") => {
    setSummary(null);
    setSelected((prev) => {
      const next = new Set(prev);
      for (const group of results[activeLevel]) {
        group.members.forEach((member, index) => {
          if (mode === "none") next.delete(member.position);
          else if (index > 0 && member.uid) next.add(member.position);
        });
      }
      return next;
    });
  };

  /** Run the confirmed removal in batches; failed rows stay selectable. */
  const startRemoval = async () => {
    if (!canEdit) return;
    // Defensive: only rows with an occurrence id can be targeted precisely,
    // whatever managed to reach the selection set.
    const snapshot = entries.filter((e) => selected.has(e.position) && e.uid);
    if (snapshot.length === 0) return;
    setConfirmOpen(false);
    setRemovalProgress({ done: 0, total: snapshot.length });

    let outcome: RemovalSummary | null = null;
    try {
      outcome = await removeEntries(
        playlist.uri,
        snapshot.map((e) => ({ uri: e.uri, uid: e.uid })),
        (done, total) => setRemovalProgress({ done, total }),
      );
    } catch (error) {
      console.warn("[playlistDuplicateFinder] removal crashed:", error);
      setRemovalProgress(null);
      setSummary(strings.states.networkError);
      return;
    }

    // Occurrences covered by successful batches disappear from the view;
    // failed ones stay selectable so they can be retried without a rescan.
    const keepFailed = new Set<number>();
    let cursor = 0;
    for (const ok of outcome.batchResults) {
      const end = Math.min(cursor + REMOVAL_BATCH_SIZE, snapshot.length);
      if (!ok) {
        for (let index = cursor; index < end; index++) keepFailed.add(snapshot[index].position);
      }
      cursor = end;
    }

    const removedPositions = new Set<number>();
    for (const entry of snapshot) {
      if (!keepFailed.has(entry.position)) removedPositions.add(entry.position);
    }

    setEntries((prev) => prev.filter((e) => !removedPositions.has(e.position)));
    setSelected(keepFailed);

    if (outcome.failed === 0) {
      notifySuccess(notices.allRemoved(outcome.removed));
      setSummary(null);
    } else if (outcome.removed === 0) {
      notifyFailure(notices.allFailed(outcome.failed));
      setSummary(notices.allFailed(outcome.failed));
    } else {
      notifyFailure(notices.partialFailure(outcome.removed, outcome.failed));
      setSummary(notices.partialFailure(outcome.removed, outcome.failed));
    }

    setRemovalProgress(null);
  };

  const activeGroups = results[activeLevel];
  const selectionCount = selected.size;
  const busy = removalProgress != null;
  // The name lookup can fail on some clients: fall back to the URI so the
  // header and the confirmation sentence never disagree (or say `""`).
  const playlistLabel = playlist.name || playlist.uri;

  return (
    <div className="dupfind-overlay">
      <div
        className={`dupfind-window${busy ? " dupfind-window--busy" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget && !busy) closeDuplicateFinder();
        }}
      >
        {/* --------------------------------------------------- header */}
        <div className="dupfind-header">
          <div className="dupfind-header__titles">
            <h1 className="dupfind-header__title">{strings.modal.title}</h1>
            <div className="dupfind-header__playlist">
              <span className="dupfind-header__playlist-name">{playlistLabel}</span>
              <span
                className={`dupfind-badge${canEdit ? " dupfind-badge--editable" : " dupfind-badge--readonly"}`}
                title={canEdit ? strings.badges.editableHint : strings.badges.readOnlyHint}
              >
                {canEdit ? strings.badges.editable : strings.badges.readOnly}
              </span>
            </div>
          </div>
          <button
            aria-label={strings.modal.close}
            className="dupfind-header__close"
            disabled={busy}
            onClick={() => closeDuplicateFinder()}
            type="button"
          >
            <Icons.React.close size={18} />
          </button>
        </div>

        {/* --------------------------------------------------- content */}
        <div className="dupfind-body">
          {phase === "loading" && (
            <div className="dupfind-state dupfind-state--loading">
              <div className="dupfind-spinner" />
              <span>{progressText}</span>
            </div>
          )}

          {phase === "error" && (
            <div className="dupfind-state dupfind-state--error">
              <span>{strings.states.networkError}</span>
              <button
                className="dupfind-button dupfind-button--ghost"
                onClick={() => void scan()}
                type="button"
              >
                {strings.states.retry}
              </button>
            </div>
          )}

          {phase === "empty" && (
            <div className="dupfind-state">
              <span>{strings.states.emptyPlaylist}</span>
            </div>
          )}

          {phase === "ready" && (
            <>
              <aside className="dupfind-rail">
                {/* Only levels that actually found matches are listed. */}
                {GROUP_ORDER.filter((id) => groupCounts[id] > 0).map((id) => (
                  <button
                    className={`dupfind-rail__item${activeLevel === id ? " dupfind-rail__item--active" : ""}`}
                    key={id}
                    onClick={() => {
                      setActiveLevel(id);
                      setConfirmOpen(false);
                    }}
                    title={strings.levels[id].hint}
                    type="button"
                  >
                    <span className="dupfind-rail__label">{strings.levels[id].label}</span>
                    <span className="dupfind-rail__count">
                      {strings.levelMeta.groupsCount(groupCounts[id])}
                    </span>
                    <Gauge value={GROUP_RELIABILITY[id]} />
                  </button>
                ))}
              </aside>

              <main className="dupfind-panel">
                {activeGroups.length > 0 && (
                  <div className="dupfind-panel__head">
                    <span className="dupfind-panel__level">
                      {strings.levels[activeLevel].label}
                    </span>
                    {canEdit && (
                      <div className="dupfind-panel__actions">
                        <button
                          className="dupfind-button dupfind-button--ghost dupfind-button--small"
                          onClick={() => setLevelSelection("all")}
                          title={strings.panel.selectAllHint}
                          type="button"
                        >
                          {strings.panel.selectAll}
                        </button>
                        <button
                          className="dupfind-button dupfind-button--ghost dupfind-button--small"
                          onClick={() => setLevelSelection("none")}
                          type="button"
                        >
                          {strings.panel.deselectAll}
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {!anyDuplicates && (
                  <div className="dupfind-state">
                    <span className="dupfind-state__title">{strings.states.noDuplicates}</span>
                    <span className="dupfind-muted">{strings.states.noDuplicatesHint}</span>
                  </div>
                )}
                {anyDuplicates && activeGroups.length === 0 && (
                  <div className="dupfind-state">
                    <span>{strings.levelMeta.emptyLevel}</span>
                  </div>
                )}
                {activeGroups.map((group) => (
                  <GroupCard
                    canEdit={canEdit}
                    group={group}
                    key={`g${group.members[0]?.position ?? ""}`}
                    nowPlaying={nowPlaying}
                    onToggle={toggleRow}
                    selected={selected}
                  />
                ))}
              </main>
            </>
          )}
        </div>

        {/* --------------------------------------------------- footer */}
        {phase === "ready" && (
          <div className="dupfind-footer">
            {!canEdit ? (
              <div className="dupfind-footer__readonly">{strings.states.readOnlyNotice}</div>
            ) : (
              <>
                {summary && <div className="dupfind-footer__summary">{summary}</div>}
                {!busy && !confirmOpen && (
                  <div className="dupfind-footer__row">
                    <span className="dupfind-footer__count">
                      {strings.footer.selection(selectionCount)}
                    </span>
                    <span className="dupfind-footer__warning">{strings.footer.warning}</span>
                    <div className="dupfind-footer__buttons">
                      <button
                        className="dupfind-button dupfind-button--ghost"
                        onClick={() => closeDuplicateFinder()}
                        type="button"
                      >
                        {strings.footer.cancel}
                      </button>
                      <button
                        className="dupfind-button dupfind-button--danger"
                        disabled={selectionCount === 0}
                        onClick={() => setConfirmOpen(true)}
                        type="button"
                      >
                        {strings.footer.remove(selectionCount)}
                      </button>
                    </div>
                  </div>
                )}
                {!busy && confirmOpen && (
                  <div className="dupfind-footer__row">
                    <span className="dupfind-footer__confirm">
                      {strings.footer.confirmBody(selectionCount, playlistLabel)}
                    </span>
                    <div className="dupfind-footer__buttons">
                      <button
                        className="dupfind-button dupfind-button--ghost"
                        onClick={() => setConfirmOpen(false)}
                        type="button"
                      >
                        {strings.footer.keepEditing}
                      </button>
                      <button
                        className="dupfind-button dupfind-button--danger"
                        onClick={() => void startRemoval()}
                        type="button"
                      >
                        {strings.footer.confirmRemove(selectionCount)}
                      </button>
                    </div>
                  </div>
                )}
                {busy && removalProgress && (
                  <div className="dupfind-footer__busy">
                    <span>
                      {strings.footer.removing(removalProgress.done, removalProgress.total)}
                    </span>
                    <div className="dupfind-progress">
                      <div
                        className="dupfind-progress__bar"
                        style={{
                          width: `${Math.round((removalProgress.done / Math.max(removalProgress.total, 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
