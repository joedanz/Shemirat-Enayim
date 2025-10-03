# AstroWind Migration Assets

This directory contains extracted content, components, and documentation from the original Shemirat Enayim site to facilitate migration to AstroWind.

## Directory Structure

```
MIGRATION_ASSETS/
├── content/           # All page content extracted to Markdown
├── components/        # Component logic and documentation
├── scripts/           # JavaScript functionality (search, analytics)
├── styles/            # CSS custom properties values
└── docs/              # Migration notes and documentation
```

## Backup Information

- **Backup Branch**: `backup-before-astrowind-migration`
- **Backup Archive**: `shemiratenayim-backup-20251002.tar.gz` (54MB)
- **Backup Date**: October 2, 2025
- **Original Completion**: 91% (57 pages, 81 Astro files)

## Original Project Statistics

- **Total Pages**: 57
- **Guide Pages**: 33
- **Components**: 20+
- **Astro Files**: 81
- **Source Size**: 1.3MB
- **Design System**: CSS Custom Properties
- **Dependencies**: Minimal (Astro, Sentry, fuse.js, web-vitals)

## Key Features to Preserve

### Components

- [x] Search functionality (fuse.js)
- [x] Theme toggle (light/dark/system)
- [x] Navigation with dropdowns
- [x] Breadcrumb navigation
- [x] Table of Contents with scroll highlighting
- [x] Share buttons
- [x] Newsletter signup
- [x] Custom infographics

### Functionality

- [x] Analytics (Plausible, Sentry, Web Vitals)
- [x] Contact form
- [x] Feedback form
- [x] Print-friendly styles
- [x] SEO optimization
- [x] Accessibility features

### Content Structure

- Homepage with hero and feature sections
- Three main audiences: Parents, Organizations, Individuals
- Methods catalog page
- 33 detailed guide pages
- FAQ (36+ questions)
- Troubleshooting (5 guides)
- Resources hub
- Legal pages (Terms, Privacy)

## CSS Custom Properties Values

See `styles/css-variables.md` for complete list of color, typography, and spacing values to replicate in Tailwind config.

## Migration Progress

Track progress in main README and todo list.

## Rollback Instructions

If migration fails or needs to be abandoned:

```bash
# Return to backup branch
git checkout backup-before-astrowind-migration

# Or restore from archive
cd /Users/danziger/code
tar -xzf shemiratenayim-backup-20251002.tar.gz
```

## Contact

Original site URL: https://shemiratenayim.org
GitHub Repository: https://github.com/joedanz/Shemirat-Enayim
