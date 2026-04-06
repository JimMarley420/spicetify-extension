# Bulk Delete from Playlist

Delete multiple tracks from a playlist at once via right-click context menu.

## Features

- **Context Menu Integration**: Select tracks in any playlist and delete them all at once
- **Playlist Selector**: Dropdown to choose which playlist to delete from
- **Permission Check**: Only shows playlists where you have delete permission (`canDelete`)
- **Search/Filter**: Filter tracks within the selected playlist by name, artist, or album
- **Multi-Select**: Checkbox system to select multiple tracks
- **Select All**: Quick select/deselect all visible tracks
- **Confirmation Modal**: Warns before permanent deletion with track count

## Usage

1. Right-click on one or more tracks in a playlist
2. Select "Bulk Delete from Playlist"
3. Choose the playlist to delete from (must have delete permission)
4. Select the tracks you want to delete (or use search to filter)
5. Click "Delete" and confirm

## Requirements

- Spicetify CLI installed
- Delete permission on the playlist(s)

## Installation

Copy `dist/bulkDeletePlaylist.mjs` to your Spicetify extensions folder:

```bash
# Windows
copy dist\bulkDeletePlaylist.mjs %APPDATA%\spicetify\Extensions\

# macOS / Linux
cp dist/bulkDeletePlaylist.mjs ~/.config/spicetify/Extensions/
```

Then enable:

```bash
spicetify config extensions bulkDeletePlaylist.mjs
spicetify apply
```

## Preview

![Modal](assets/modal.png)

## License

Copyright (c) 2026 JimMarley420

All rights reserved. This extension is provided for personal use only.

**You are NOT allowed to:**
- Republish or redistribute this extension on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)