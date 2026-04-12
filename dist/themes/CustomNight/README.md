# CustomNight

A customizable Spicetify theme with a beautiful animated night sky background. Users can set their own custom background image.

## Features

- Beautiful animated night sky background (stars, twinkling, clouds, moon)
- Custom background support - set your own image
- Multiple color schemes
- Transparent UI elements
- Resizable playbar panel
- Animated cover art when playing

## Custom Background

By default, the theme displays an animated night sky. You can set your own custom background image using JavaScript in the Spotify console:

```javascript
// Set a custom background image
setCustomNightBackground('https://example.com/your-image.jpg');

// Get the current custom background URL
getCustomNightBackground();

// Reset to default night sky background
resetCustomNightBackground();
```

### Supported Image Formats
- JPG/JPEG
- PNG
- GIF (animated)
- WebP

### Tips for Custom Backgrounds
- Use high-resolution images for best quality
- Avoid very dark images as they may clash with UI elements
- Consider using images with some transparency or gradients

## Installation

1. Copy the `CustomNight` folder to your Themes directory:
   - Windows: `%appdata%\spicetify\Themes\`
   - Linux/MacOS: `~/.config/spicetify/Themes/`

2. Apply the theme:
   ```bash
   spicetify config theme CustomNight
   spicetify apply
   ```

## Color Schemes

The theme includes 8 color schemes:
- **Base** - Classic dark blue night sky
- **Cotton Candy** - Pink and blue gradient
- **Forest** - Deep green tones
- **Galaxy** - Purple and pink
- **Orange** - Warm sunset orange
- **Sky** - Light blue daytime sky
- **Sunrise** - Golden morning colors

Switch color schemes using Spicetify config:
```bash
spicetify config color_scheme <scheme-name>
spicetify apply
```

## Credits

- Default background inspired by [StarryNight](https://github.com/b-chen00/spicetify-themes)
- Background assets from [CodePen](https://codepen.io)
- Animated night sky effect created using pure CSS

## License

MIT License - Feel free to use and modify!
