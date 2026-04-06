# 🎵 Search Artist Tracks

Access an artist's entire discography instantly from a single menu. Browse, play, and queue all tracks without navigating albums.

**Available on Spicetify Marketplace:** [spicetify-extension](https://github.com/JimMarley420/spicetify-extension)

<table>
  <tr>
    <td><img width="500" src="https://github.com/user-attachments/assets/3aa9a759-47e1-4727-9780-eeaa03be65e1" /></td>
    <td><img width="350" src="https://github.com/user-attachments/assets/6ebb9b8c-a2c2-429d-af5e-f7b5702268a8" /></td>
  </tr>
</table>

## Features

- **Instant Search** - Browse all tracks from an artist's discography in seconds
- **Lazy Loading** - Tracks appear as they load, no waiting around
- **Playback Controls** - Play, pause, and seek through any track
- **Queue Support** - Add tracks to your queue with one click
- **Now Playing Indicator** - Green dot shows what's currently playing

## Usage

1. **Right-click** on any artist in Spotify
2. Select **"Search Artist Tracks"** from the context menu
3. Browse their entire discography
4. **Click** a track to play, **double-click** to add to queue

### Controls

| Action | How |
|---|---|
| Play/Pause | Click the ▶/⏸ button |
| Seek | Drag the progress slider |
| Add to Queue | Click the + button |
| Search | Type in the search bar |

## Development

```bash
# Build
deno task build

# Watch mode (rebuilds on changes)
deno task watch

# Dev build (auto-deploys to Spotify)
deno task dev-build
deno task dev-watch
```

## License

Copyright (c) 2026 JimMarley420

All rights reserved. This extension is provided for personal use only.

**You are NOT allowed to:**
- Republish or redistribute this extension on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)