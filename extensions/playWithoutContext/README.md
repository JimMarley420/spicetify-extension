# Play Without Context

<img width="1734" height="907" alt="logo" src="https://github.com/user-attachments/assets/615a0e6f-6a5a-473f-bbff-95e0913ce2a0" />


Play a Spotify track independently of the playlist or album you opened it from. Use the context menu to start a track without retaining the current collection context, allowing Spotify to choose its own follow-up playback recommendations.

**Available on Spicetify Marketplace:** [spicetify-extension](https://github.com/JimMarley420/spicetify-extension)

## Features

- **Context menu integration** - Adds a **Play Without Context** action to track menus
- **Independent playback** - Starts the selected track without playlist or album context
- **One-click access** - Play a track directly without navigating to its album or playlist

## Usage

1. Right-click a track in Spotify.
2. Select **Play Without Context**.
3. The track starts without the surrounding playlist or album context.

## Requirements

- Spicetify CLI 2.x
- A Spotify client with extension support

## Installation

Copy `dist/playWithoutContext.mjs` to your Spicetify extensions folder:

```bash
# Windows
copy dist\playWithoutContext.mjs %APPDATA%\spicetify\Extensions\

# macOS / Linux
cp dist/playWithoutContext.mjs ~/.config/spicetify/Extensions/
```

Then enable it:

```bash
spicetify config extensions playWithoutContext.mjs
spicetify apply
```

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

## Contributing

Found a bug or want to contribute? Here's how you can help:

- **Issues**: [Open an issue](https://github.com/JimMarley420/spicetify-extension/issues/new/choose)
- **Pull Requests**: [Create a PR](https://github.com/JimMarley420/spicetify-extension/compare)
- **Discussion**: [Start a discussion](https://github.com/JimMarley420/spicetify-extension/discussions)

## License

Copyright (c) 2026 JimMarley420

All rights reserved. This extension is provided for personal use only.

**You are NOT allowed to:**
- Republish or redistribute this extension on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)
