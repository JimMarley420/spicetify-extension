# Artist Search - Spicetify Extension

Search for songs directly from an artist's page.

## Features

- Adds a search button on artist pages
- Searches through all tracks visible on the artist's discography
- Displays results with track name, album, and duration
- Click on any track to play it

## Installation

### Prerequisites

- [Spicetify CLI](https://spicetify.app/docs/advanced-usage/spicetify-cli)
- [Deno](https://deno.land/)

### Build

```bash
# Build the extension
deno task build

# Build and deploy to Spotify (dev mode - restarts Spotify)
deno task dev-build
```

### Manual Installation

1. Build the extension: `deno task build`
2. Copy `dist/artistSearch.mjs` to your Spicetify extensions folder:
   - Windows: `%APPDATA%\spicetify\Extensions\`
   - macOS: `~/.config/spicetify/Extensions/`
   - Linux: `~/.config/spicetify/Extensions/`

3. Enable the extension:
   ```bash
   spicetify config custom_apps artist-search
   spicetify apply
   ```

## Usage

1. Navigate to any artist's page on Spotify
2. Click the "Search tracks" button at the top
3. Type to filter through the artist's discography
4. Click on a track to play it

## Project Structure

```
artist-search/
├── extensions/
│   └── artistSearch/
│       ├── src/
│       │   ├── app.ts      # Main extension entry
│       │   └── styles.css  # Extension styles
│       └── README.md
├── shared/                  # Shared utilities
│   ├── api/
│   ├── components/
│   ├── styles/
│   └── utils/
├── tasks/                   # Build scripts
├── dist/                    # Built extensions
├── manifest.json
└── deno.json
```

## Development

```bash
# Watch for changes and rebuild
deno task watch

# Watch and deploy to Spotify
deno task dev-watch
```

## License

MIT
