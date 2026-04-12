# 🎵 Spicetify Extensions & Themes

Collection of Spicetify extensions and themes for Spotify.

## All Extensions & Themes

| Name | Type | Description | Marketplace | Status |
|------|------|-------------|-------------|--------|
| [CustomNight](themes/CustomNight/README.md) | Theme | Customizable night sky with user background support | - | ✅ Active |
| [Artist Search](extensions/artistSearch/README.md) | Extension | Browse an artist's entire discography from context menu | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Add to Multiple Playlists](extensions/addToPlaylistMulti/README.md) | Extension | Add tracks to multiple playlists at once | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Bulk Delete Playlist](extensions/bulkDeletePlaylist/README.md) | Extension | Delete multiple tracks from a playlist at once | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |

---

## Installation

### Themes

1. Copy the `CustomNight` folder to your Themes directory:
   - Windows: `%appdata%\spicetify\Themes\`
   - Linux/MacOS: `~/.config/spicetify/Themes/`

2. Apply the theme:
   ```bash
   spicetify config theme CustomNight
   spicetify apply
   ```

### Extensions

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
# Build all
deno task build

# Theme check
deno task theme:check
deno task theme:lint

# Lint
deno task check
deno task format
```

## License

Copyright (c) 2026 JimMarley420

**You are NOT allowed to:**
- Republish or redistribute on Spicetify Marketplace
- Claim authorship of the original work

---

Made by [JimMarley420](https://github.com/JimMarley420/spicetify-extension)
