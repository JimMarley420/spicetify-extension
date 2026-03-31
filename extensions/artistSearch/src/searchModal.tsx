import { useEffect, useRef, useState, useCallback } from "react";
import { Icons } from "../../../shared/components/icons.tsx";
import { Slider } from "../../../shared/components/slider.tsx";
import { usePlayer } from "../../../shared/hooks/usePlayer.ts";

interface Track {
  uri: string;
  name: string;
  duration_ms: number;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  artists: Array<{ name: string }>;
}

interface Props {
  artistUri: string;
  artistName: string;
}

const formatDuration = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const TrackPlaybackControl = ({ uri, duration }: { uri: string; duration: number }) => {
  const {
    position,
    duration: playerDuration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease,
  } = usePlayer(uri, duration);

  const displayDuration = playerDuration || duration || 0;

  const formatTime = (ms: number | undefined) => {
    if (ms == null || ms < 0) return "--:--";
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="artist-search-playback-controls">
      <button className="artist-search-playback-button" onClick={togglePlay}>
        {isCurrentlyPlayingThisTrack ? <Icons.React.pause size={16} /> : <Icons.React.play size={16} />}
      </button>
      <span className="artist-search-slider-time">{formatTime(position)}</span>
      <Slider
        max={displayDuration}
        min={0}
        onChange={handleSliderChange}
        onRelease={handleSliderRelease}
        step={1}
        value={position || 0}
      />
      <span className="artist-search-slider-time">{formatTime(displayDuration)}</span>
    </div>
  );
};

export function ArtistSearchModal({ artistUri, artistName }: Props) {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [currentPlayingUri, setCurrentPlayingUri] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(true);

  const searchTimeoutRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchAlbumTracks = async (albumUri: string, albumName: string, coverArt: any[]): Promise<Track[]> => {
    try {
      const response = (await Spicetify.Platform.GraphQLLoader(
        Spicetify.GraphQL.Definitions.queryAlbumTracks,
        {
          uri: albumUri,
          locale: Spicetify.Locale.getLocale(),
          offset: 0,
          limit: 5000,
        },
      )) as { data: any };

      const albumData = response?.data?.albumUnion;
      const tracksV2 = albumData?.tracksV2;
      if (!tracksV2?.items) return [];

      const items = tracksV2.items;
      if (!Array.isArray(items)) return [];

      const results: Track[] = [];
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
            images: images.map((img: any) => ({ url: img?.url || "" })),
          },
          artists: artists.map((a: any) => ({ name: a?.profile?.name || a?.name || "" })),
        });
      }
      return results;
    } catch {
      return [];
    }
  };

  const fetchArtistTracks = async (onTrackAdd: (tracks: Track[]) => void) => {
    try {
      const response = (await Spicetify.Platform.GraphQLLoader(
        Spicetify.GraphQL.Definitions.queryArtistDiscographyAll,
        {
          uri: artistUri,
          locale: Spicetify.Locale.getLocale(),
          offset: 0,
          limit: 50,
        },
      )) as { data: any };

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
        await fetchArtistTracks((newTracks) => {
          if (cancelled) return;
          setTracks((prev) => [...prev, ...newTracks]);
        });
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
    
    return () => { cancelled = true; };
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

  const filteredTracks = query.trim()
    ? tracks.filter(
        (track) =>
          track.name.toLowerCase().includes(query.toLowerCase()) ||
          track.album.name.toLowerCase().includes(query.toLowerCase()),
      )
    : tracks;

  const playTrack = (trackUri: string) => {
    if (currentPlayingUri === trackUri && !isPaused) {
      Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {});
    }
  };

  const addToQueue = async (trackUri: string) => {
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

  return (
    <div className="artist-search-modal">
      <div className="artist-search-input-container">
        <span className="artist-search-icon">
          <Icons.React.search size={20} />
        </span>
        <input
          className="artist-search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search in ${artistName}'s tracks...`}
          ref={inputRef}
          type="text"
          value={query}
        />
        {query && (
          <button className="artist-search-clear" onClick={() => setQuery("")}>
            <Icons.React.close size={16} />
          </button>
        )}
      </div>

      <div className="artist-search-results">
        {loading && filteredTracks.length === 0 ? (
          <div className="artist-search-loading">
            <div className="artist-search-spinner" />
            <span>Loading tracks...</span>
          </div>
        ) : error ? (
          <div className="artist-search-error">{error}</div>
        ) : !query.trim() && filteredTracks.length === 0 ? (
          <div className="artist-search-hint">
            <Icons.React.search fill="var(--spice-subtext)" size={48} />
            <p>Found {filteredTracks.length} tracks from {artistName}</p>
          </div>
        ) : filteredTracks.length === 0 ? (
          <div className="artist-search-no-results">
            <p>No tracks found matching "{query}"</p>
          </div>
        ) : (
          <>
            <div className="artist-search-count">
              {filteredTracks.length} track{filteredTracks.length !== 1 ? "s" : ""} found
            </div>
              <div className="artist-search-track-list">
              {filteredTracks.map((track, index) => (
                <div
                  className={`artist-search-track ${selectedTrack === track.uri ? "selected" : ""}`}
                  key={track.uri}
                  onClick={() => setSelectedTrack(track.uri)}
                  onDoubleClick={() => playTrack(track.uri)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedTrack(track.uri);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${track.name} by ${track.artists.map((a) => a.name).join(", ")}${currentPlayingUri === track.uri ? " - now playing" : ""}`}
                >
                  <span className="artist-search-track-number">
                    {currentPlayingUri === track.uri ? (
                      <span className="artist-search-playing-indicator" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <img
                    alt={track.album.name}
                    className="artist-search-track-image"
                    src={track.album.images[2]?.url || track.album.images[0]?.url || ""}
                  />
                  <div className="artist-search-track-info">
                    <span className="artist-search-track-name">{track.name}</span>
                    <span className="artist-search-track-artists">
                      {track.artists.map((a) => a.name).join(", ")}
                    </span>
                  </div>
                  <span className="artist-search-track-album">{track.album.name}</span>
                  <div className="artist-search-track-playback">
                    <TrackPlaybackControl uri={track.uri} duration={track.duration_ms} />
                  </div>
                </div>
              ))}
            </div>
            {isLoadingMore && (
              <div className="artist-search-loading-more">
                <div className="artist-search-spinner" />
                <span>Loading more...</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
