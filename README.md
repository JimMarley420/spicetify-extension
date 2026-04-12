# 🎵 Spicetify Extensions & Themes

Collection of Spicetify extensions and themes for Spotify.

## Themes

| Theme | Description |
|-------|-------------|
| [CustomNight](themes/CustomNight/README.md) | Customizable night sky with user background support |

### CustomNight Installation

1. Copy the `CustomNight` folder to your Themes directory:
   - Windows: `%appdata%\spicetify\Themes\`
   - Linux/MacOS: `~/.config/spicetify/Themes/`

2. Apply the theme:
   ```bash
   spicetify config theme CustomNight
   spicetify apply
   ```

### Custom Background

By default, the theme displays an animated night sky. You can set your own custom background image using JavaScript in the Spotify console:

```javascript
// Set a custom background image
setCustomNightBackground('https://example.com/your-image.jpg');

// Get the current custom background URL
getCustomNightBackground();

// Reset to default night sky background
resetCustomNightBackground();
```

### Color Schemes

Switch color schemes using Spicetify config:
```bash
spicetify config color_scheme <scheme-name>
spicetify apply
```

Available schemes: Base, Cotton-candy, Forest, Galaxy, Orange, Sky, Sunrise

## Extensions

| Extension | Description | Marketplace | Status |
|-----------|-------------|-------------|--------|
| [Artist Search](extensions/artistSearch/README.md) | Browse an artist's entire discography from context menu | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Add to Multiple Playlists](extensions/addToPlaylistMulti/README.md) | Add tracks to multiple playlists at once | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Bulk Delete Playlist](extensions/bulkDeletePlaylist/README.md) | Delete multiple tracks from a playlist at once | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |

---

For extension-specific documentation, see each extension's README in `extensions/<extensionName>/README.md`.

For theme-specific documentation, see each theme's README in `themes/<themeName>/README.md`.

## Quick Start

### Prerequisites

- [Spicetify CLI](https://spicetify.app/docs/advanced-usage/spicetify-cli) installed
- [Deno](https://deno.land/) runtime (version 1.37.0 or higher required for CSS import assertions)

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

# Theme check
deno task theme:check
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
├── themes/
│   └── CustomNight/
│       ├── assets/
│       │   └── *.png
│       ├── color.ini
│       ├── user.css
│       ├── theme.js
│       └── README.md
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

All rights reserved. Extensions and themes are provided for personal use only.

**You are NOT allowed to:**
- Republish or redistribute on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)

---

Made by [JimMarley420](https://github.com/JimMarley420/spicetify-extension)
