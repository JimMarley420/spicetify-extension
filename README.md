<div align="center">

# Spicetify Extensions & Themes

A curated collection of **Spicetify** extensions and themes for Spotify by Jimmy Marley.

[![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/JimMarley420/spicetify-extension?utm_source=oss&utm_medium=github&utm_campaign=JimMarley420%2Fspicetify-extension&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)](https://coderabbit.ai)

[![Latest Release](https://img.shields.io/github/v/release/JimMarley420/spicetify-extension?sort=date&label=Latest%20Release&style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/releases/latest)
[![Stars](https://img.shields.io/github/stars/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/stargazers)
[![Forks](https://img.shields.io/github/forks/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/network)
[![Open Issues](https://img.shields.io/github/issues/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/issues?q=is%3Aissue+is%3Aclosed)
[![Pull Requests](https://img.shields.io/github/issues-pr/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/pulls)
[![Contributors](https://img.shields.io/github/contributors/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/commits/master)
[![Repo Size](https://img.shields.io/github/repo-size/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension)

[![Deno](https://img.shields.io/badge/Built%20With-Deno-black?style=flat-square&logo=deno&logoColor=white)](https://deno.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/JimMarley420/spicetify-extension/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/JimMarley420/spicetify-extension/tree/master)

</div>

---

## Contents

- [What's Inside](#whats-inside)
- [Installation](#installation)
- [Install via Marketplace](#install-via-marketplace)
- [Development](#development)
- [Continuous Integration](#continuous-integration)
- [Versioning](#versioning)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

---

## What's Inside

| Name | Type | Description | Docs | Status |
|------|------|-------------|------|--------|
| [CustomNight](themes/CustomNight/README.md) | Theme | Customizable night sky with user background support | [docs](themes/CustomNight/README.md) | ✓ Active |
| [Artist Search](extensions/artistSearch/README.md) | Extension | Browse an artist's entire discography from context menu | [docs](extensions/artistSearch/README.md) | ✓ Active |
| [Add to Multiple Playlists](extensions/addToPlaylistMulti/README.md) | Extension | Add tracks to multiple playlists at once | [docs](extensions/addToPlaylistMulti/README.md) | ✓ Active |
| [Bulk Delete Tracks](extensions/bulkDeleteTracks/README.md) | Extension | Delete multiple tracks from a playlist at once | [docs](extensions/bulkDeleteTracks/README.md) | ✓ Active |
| [Playlist Duplicate Finder](extensions/playlistDuplicateFinder/README.md) | Extension | Find and remove duplicate tracks in playlists, grouped by confidence level | [docs](extensions/playlistDuplicateFinder/README.md) | ✓ Active |
| [Copy YouTube Link](extensions/copyYoutube/README.md) | Extension | Copy the YouTube link of any track from the context menu | [docs](extensions/copyYoutube/README.md) | ✓ Active |
| [Play Without Context](extensions/playWithoutContext/README.md) | Extension | Play a track without playlist or album context from the context menu | [docs](extensions/playWithoutContext/README.md) | ✓ Active |

---

## Installation

> Requires [Spicetify](https://spicetify.app/) 2.x.

### Themes

1. Copy the `CustomNight` folder to your Themes directory:
   - **Windows:** `%APPDATA%\spicetify\Themes\`
   - **Linux / macOS:** `~/.config/spicetify/Themes/`

2. Apply the theme:

   ```bash
   spicetify config current_theme CustomNight
   spicetify apply
   ```

### Extensions

Copy the desired extension from `dist/` to your Spicetify extensions folder:

| OS | Path |
|----|------|
| Windows | `%APPDATA%\spicetify\Extensions\` |
| macOS / Linux | `~/.config/spicetify/Extensions/` |

Enable it:

```bash
spicetify config extensions <extension-name>.mjs
spicetify apply
```

---

## Install via Marketplace

All extensions and themes are also available on the [Spicetify Marketplace](https://github.com/spicetify/marketplace) — search for "JimMarley420" and install with one click.

[![Open in Marketplace](https://img.shields.io/badge/Spicetify-Marketplace-1DB954?style=for-the-badge&logo=spotify&logoColor=white)](https://github.com/spicetify/marketplace)

---

## Development

```bash
# Build all extensions
deno task build

# Release build (build + lint + validate manifest)
deno task release

# Dev build / watch mode
deno task dev-build
deno task dev-watch

# Theme check & lint
deno task theme:check
deno task theme:lint

# Lint and run the configured typechecks
deno task check

# Format files
deno task format

# Tests (JUnit results and raw coverage profiles)
deno eval -A "await Deno.mkdir('test-results', { recursive: true })"
deno task test

# Generate the coverage report and apply the 20% CI floor
deno coverage --lcov --output=coverage.lcov coverage/
deno task coverage:check
```

### Continuous Integration

CircleCI runs lint, typechecks all extension TypeScript and TSX files plus shared code and build tooling, runs tests, checks themes and the manifest, and builds extensions for pull requests. Test results appear in CircleCI's Tests tab; the LCOV coverage report is available as a job artifact. CI requires at least 20% line, branch, and function coverage.

When extension build inputs change in a same-repository pull request, CircleCI rebuilds `dist/` and commits the update to the pull request branch. Fork pull requests receive a build artifact but are not updated automatically. See [CONTRIBUTING.md](CONTRIBUTING.md#testing-and-ci) for local checks and CI behavior.

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/) (`vMAJOR.MINOR.PATCH`).

| Commit prefix | Meaning | Version bump |
|---------------|---------|--------------|
| `fix:` | Bug fix | patch (`v1.2.0 → v1.2.1`) |
| `feat:` | New feature | minor (`v1.1.0 → v1.2.0`) |
| `feat!:`, `BREAKING CHANGE:` | Breaking change | major (`v1.x → v2.0.0`) |

CircleCI publishes a semantic version release for eligible pushes to `master`. A release is skipped when there are no commits since the latest tag. To run the release workflow manually, trigger a pipeline on `master` with `run_release=true`.

No label is required for CI/CD changes; the focused `ci-cd-check` runs automatically when relevant files change.

---

## Resources

Repository links:

- Issues — [open new](https://github.com/JimMarley420/spicetify-extension/issues/new/choose) / [browse all](https://github.com/JimMarley420/spicetify-extension/issues)
- Pull requests — [open](https://github.com/JimMarley420/spicetify-extension/pulls)/propose
- [Releases](https://github.com/JimMarley420/spicetify-extension/releases)
- [Commit history](https://github.com/JimMarley420/spicetify-extension/commits/master)
- [Contributing guide](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Discussions](https://github.com/JimMarley420/spicetify-extension/discussions)

---

## Contributing

Want to help? There are plenty of ways:

- Star the repo to show your support
- Open an issue when you find a bug
- Propose a feature
- Submit a pull request

All contributions are welcome — please read [CONTRIBUTING.md](CONTRIBUTING.md) first, and respect the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

Copyright (c) 2026 JimMarley420

**You are NOT allowed to:**

- Republish or redistribute on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)

---

<div align="center">

Made by [JimMarley420](https://github.com/JimMarley420)

[![GitHub followers](https://img.shields.io/github/followers/JimMarley420?style=social)](https://github.com/JimMarley420)

</div>
