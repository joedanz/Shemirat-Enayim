# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static site project. The project name "shemiratenayim" is currently using the default Astro starter template.

## Commands

All commands run from the project root:

- `npm install` - Install dependencies
- `npm run dev` - Start dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

## Architecture

### Project Structure

- `src/pages/` - File-based routing (each `.astro` file becomes a page)
- `src/layouts/` - Reusable page layouts
- `src/components/` - Astro components
- `src/assets/` - Images and static assets processed by Astro
- `public/` - Static files served as-is (e.g., `favicon.svg`)

### Key Files

- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript config (extends `astro/tsconfigs/strict`)
- `src/layouts/Layout.astro` - Base HTML layout with global styles
- `src/pages/index.astro` - Homepage

### Astro Patterns

- Components use `.astro` extension with frontmatter (code between `---`) and template
- Layouts use `<slot />` for content injection
- Static assets imported in frontmatter return objects with `src` property
- Styles are scoped by default when using `<style>` tags in components
