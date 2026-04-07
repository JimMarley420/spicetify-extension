# 🎵 Spicetify Extensions

Collection of Spicetify extensions for Spotify.

## Extensions

| Extension | Description | Marketplace | Status |
|-----------|-------------|-------------|--------|
| [Artist Search](extensions/artistSearch/README.md) | Browse an artist's entire discography from context menu | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Add to Multiple Playlists](extensions/addToPlaylistMulti/README.md) | Add tracks to multiple playlists at once | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Bulk Delete Playlist](extensions/bulkDeletePlaylist/README.md) | Delete multiple tracks from a playlist at once | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |

---

For extension-specific documentation, see each extension's README in `extensions/<extensionName>/README.md`.

## Quick Start

### Prerequisites

- [Spicetify CLI](https://spicetify.app/docs/advanced-usage/spicetify-cli) installed
- [Deno](https://deno.land/) runtime

### Build

```bash
deno task build
```

Each extension outputs to `dist/<extensionName>.mjs`.

### Installation

Copy the desired extension from `dist/` to your Spicetify extensions folder:

| OS | Path |
|---|---|
| Windows | `%APPDATA%\spicetify\Extensions\` |
| macOS / Linux | `~/.config/spicetify/Extensions/` |

Enable:
```bash
spicetify config extensions <extension-name>.mjs
spicetify apply
```

## Development

```bash
# Build all extensions
deno task build

# Watch mode (rebuilds on changes)
deno task watch

# Dev build (auto-deploys to Spotify)
deno task dev-build
deno task dev-watch

# Lint
deno task check
deno task format
```

## Contributing

Contributions are welcome! Here's how you can help:

### Issues

Found a bug or have a feature request? Open an issue:
1. Go to [Issues](https://github.com/JimMarley420/spicetify-extension/issues)
2. Click "New issue"
3. Describe the problem or feature

### Pull Requests

Want to contribute code? Follow these steps:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b my-feature`)
3. **Make** your changes
4. **Push** to your fork (`git push origin my-feature`)
5. **Create** a Pull Request

### Development

- Follow the existing code style
- Run `deno task check` and `deno task format` before submitting
- Test your changes locally with `deno task dev-build`

---

## Project Structure

```
├── extensions/
│   └── <extensionName>/
│       ├── assets/
│       │   └── preview.png
│       ├── src/
│       │   ├── app.tsx         # Entry point
│       │   ├── *.tsx           # Components
│       │   └── styles.css      # Styles
│       └── README.md           # Extension docs
├── shared/                     # Shared utilities
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── styles/                 # Shared CSS
│   └── utils/                  # Utility functions
├── tasks/                      # Build scripts
├── dist/                       # Built extensions
├── manifest.json               # Extensions manifest
└── README.md                   # This file
```

## License

Copyright (c) 2026 JimMarley420

All rights reserved. Extensions are provided for personal use only.

**You are NOT allowed to:**
- Republish or redistribute on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)

---

Made by [JimMarley420](https://github.com/JimMarley420/spicetify-extension)
