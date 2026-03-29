# Publishing to Spicetify Marketplace

This guide explains how to publish the Artist Search extension to the official Spicetify Marketplace.

## Prerequisites

- A public GitHub repository
- Your extension must be built and ready to use (`.mjs` file)
- A preview/screenshot image

## Step 1: Prepare Your Repository

### 1.1 Add the GitHub Topic Tag

Add the topic `spicetify-extensions` to your repository:

1. Go to your GitHub repository
2. Click **Settings** → **General**
3. Under "Topics", add: `spicetify-extensions`

### 1.2 Create manifest.json

Create a `manifest.json` file in the root of your repository:

```json
{
  "name": "Artist Search",
  "description": "Search through any artist's entire discography directly from Spotify. Browse, play, and queue tracks with ease.",
  "preview": "preview.png",
  "main": "dist/artistSearch.mjs",
  "readme": "README.md",
  "authors": [
    {
      "name": "JimMarley420",
      "url": "https://github.com/JimMarley420"
    }
  ],
  "tags": ["search", "discography", "artist", "utility"]
}
```

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Your extension name | ✅ |
| `description` | Short description | ✅ |
| `preview` | Path to screenshot (relative or URL) | ✅ |
| `main` | Path to built `.mjs` file | ✅ |
| `readme` | Path to README | ✅ |
| `branch` | Branch to use (default: main) | Optional |
| `authors` | Array of author objects | Optional |
| `tags` | Searchable tags | Optional |

### 1.3 Add a Preview Image

Add a screenshot of your extension in action:

- Recommended size: 1200x800px
- Save as `preview.png` (or any common image format)
- Update the `preview` field in manifest.json

## Step 2: Test Locally

Before submitting, verify everything works:

```bash
# Build the extension
deno task build

# Test in Spotify
deno task dev-build
```

## Step 3: Submit to Marketplace

### Option A: Automatic Discovery

Once your repository has:
- The `spicetify-extensions` topic
- A valid `manifest.json` with required fields
- A built `.mjs` file in the specified path

The Marketplace will automatically detect it within ~24 hours.

### Option B: Manual Request

If your extension doesn't appear automatically:

1. Open the [Spicetify Marketplace issues](https://github.com/spicetify/marketplace/issues)
2. Create a new issue with:
   - Title: "Request: Artist Search"
   - Description: Link to your GitHub repo
   - Mention that it has the `spicetify-extensions` tag

## Step 4: Keep It Updated

When you push updates to your repository:

1. Rebuild the extension: `deno task build`
2. Commit and push changes
3. The Marketplace will pull the latest version automatically

## Troubleshooting

### Extension Not Appearing?

- ✅ Verify `manifest.json` is valid JSON
- ✅ Check the `spicetify-extensions` topic is set
- ✅ Ensure the `main` path points to an existing file
- ✅ Make sure repository is **public**

### Preview Not Loading?

- ✅ Use direct image URLs or relative paths from repo root
- ✅ Supported formats: png, jpg, gif

### Build Errors?

- ✅ Check Deno is installed: `deno --version`
- ✅ Run `deno task build` locally first
- ✅ Ensure all dependencies are available

## Useful Links

- [Spicetify Marketplace Wiki](https://github.com/spicetify/marketplace/wiki)
- [Publishing Guide](https://github.com/spicetify/marketplace/wiki/Publishing-to-Marketplace)
- [Spicetify Discord](https://discord.gg/spicetify)

---

Good luck! 🎵
