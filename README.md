# 🎵 Spicetify Extensions

Collection of Spicetify extensions for Spotify.

## Extensions

| Extension | Description | Marketplace | Status |
|-----------|-------------|-------------|--------|
| [Artist Search](extensions/artistSearch/README.md) | Browse an artist's entire discography from context menu | [Spicetify Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |

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

MIT License - Copyright (c) 2026 JimMarley420

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, and distribute it, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

**You are NOT allowed to:**
- Republish or redistribute this extension on Spicetify Marketplace
- Claim authorship of the original work

Forking and modifying for personal use is allowed, but it must not be redistributed.

---

Made by [JimMarley420](https://github.com/JimMarley420)
