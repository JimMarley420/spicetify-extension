# Add to Multiple Playlists

Add tracks to multiple playlists at once from the context menu.

<table>
  <tr>
    <td><img src="assets/preview.png" width="400" /></td>
    <td><img src="assets/modal.png" width="400" /></td>
  </tr>
</table>

## Features

- **Multiple Selection** - Select multiple playlists and add tracks to all of them at once
- **Appears in "Add to Playlist"** - Integrates into the existing context menu under "Add to Playlist"
- **"Select Multiple..."** - Opens a modal to select multiple playlists at once
- **Duplicate Detection** - Warns if tracks are already in selected playlists

## Usage

1. **Right-click** on one or more tracks in Spotify
2. Navigate to **"Add to Playlist"** in the context menu
3. Select **"Select Multiple..."** to choose multiple playlists
4. Check the playlists you want to add the tracks to
5. Click **"Add"** to confirm

Or directly click on a playlist name to add tracks to that single playlist.

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

MIT License - Copyright (c) 2026 JimMarley420

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, and distribute it, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

**You are NOT allowed to:**
- Republish or redistribute this extension on Spicetify Marketplace
- Claim authorship of the original work

Forking and modifying for personal use is allowed, but it must not be redistributed.
