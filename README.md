# 🎵 Artist Search - Spicetify extension

Access an artist's entire discography instantly from a single menu. Browse, play, and queue all tracks without navigating albums.

<table>
  <tr>
    <td><img width="500" src="https://github.com/user-attachments/assets/700755a3-69b2-457d-a883-6c993051b5ac" /></td>
    <td><img width="350" src="https://github.com/user-attachments/assets/6ebb9b8c-a2c2-429d-af5e-f7b5702268a8" /></td>
  </tr>
</table>

## ✨ Features

- **Instant Search** - Browse all tracks from an artist's discography in seconds
- **Lazy Loading** - Tracks appear as they load, no waiting around
- **Playback Controls** - Play, pause, and seek through any track
- **Queue Support** - Add tracks to your queue with one click
- **Now Playing Indicator** - Green dot shows what's currently playing

## 🚀 Quick Start

### Prerequisites

- [Spicetify CLI](https://spicetify.app/docs/advanced-usage/spicetify-cli) installed
- [Deno](https://deno.land/) runtime

### Installation

```bash
# Build the extension
deno task build
```

Then copy `dist/artistSearch.mjs` to your Spicetify extensions folder:

| OS | Path |
|---|---|
| Windows | `%APPDATA%\spicetify\Extensions\` |
| macOS / Linux | `~/.config/spicetify/Extensions/` |

Enable the extension:

```bash
spicetify config custom_apps artist-search
spicetify apply
```

## 📖 Usage

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

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Issues

Found a bug or have a feature request? [Open an issue](https://github.com/JimMarley420/artistsSearch/issues) and let me know.

### Pull Requests

Want to contribute code? Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a [Pull Request](https://github.com/JimMarley420/artistsSearch/pulls)

## 🛠️ Development

```bash
# Build
deno task build

# Watch mode (rebuilds on changes)
deno task watch

# Dev build (auto-deploys to Spotify)
deno task dev-build
deno task dev-watch
```

## 📁 Project Structure

```
artist-search/
├── extensions/artistSearch/
│   └── src/
│       ├── app.tsx         # Context menu entry point
│       ├── searchModal.tsx # Main UI component
│       └── styles.css      # Component styles
├── shared/                 # Shared utilities
│   ├── components/         # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   └── styles/            # Shared CSS
├── tasks/                 # Build scripts
└── dist/                  # Built extension
```

### Suggestions

Have ideas for improvements? Check the [existing issues](https://github.com/JimMarley420/artistsSearch/issues) or start a new discussion.

## 📜 License

MIT License - feel free to use, modify, and distribute as you please.

---

Made by [JimMarley420](https://github.com/JimMarley420)
