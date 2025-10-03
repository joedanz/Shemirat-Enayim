# CSS Custom Properties → Tailwind Config Mapping

This document maps the original CSS custom properties to Tailwind CSS configuration for the AstroWind migration.

## Colors

### Primary (Sky Blue)
```js
// tailwind.config.js
colors: {
  primary: {
    50:  '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  }
}
```

### Secondary (Green)
```js
secondary: {
  50:  '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
}
```

### Neutrals (Gray)
**Note**: These match Tailwind's default `gray` scale exactly.

### Semantic Colors
```js
colors: {
  success: '#22c55e',  // green-500
  warning: '#f59e0b',  // amber-500
  error:   '#ef4444',  // red-500
  info:    '#3b82f6',  // blue-500
}
```

## Typography

### Font Families
```js
fontFamily: {
  sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
  serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
}
```

### Font Sizes (Custom larger scale)
```js
fontSize: {
  xs:   '0.75rem',   // 12px
  sm:   '0.875rem',  // 14px
  base: '1rem',      // 16px
  lg:   '1.125rem',  // 18px
  xl:   '1.25rem',   // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '2rem',     // 32px (increased)
  '4xl': '2.5rem',   // 40px (increased)
  '5xl': '3.5rem',   // 56px (increased)
  '6xl': '4.5rem',   // 72px (increased)
  '7xl': '5.5rem',   // 88px (new)
}
```

### Line Heights
```js
lineHeight: {
  none: '1',
  tight: '1.2',
  snug: '1.375',
  normal: '1.6',
  relaxed: '1.75',
  loose: '2',
}
```

## Spacing

Uses Tailwind's default spacing scale (matches exactly):
- 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

## Border Radius

```js
borderRadius: {
  sm:   '0.125rem',  // 2px
  DEFAULT: '0.25rem',  // 4px
  md:   '0.375rem',  // 6px
  lg:   '0.5rem',    // 8px
  xl:   '0.75rem',   // 12px
  '2xl': '1rem',     // 16px
  full: '9999px',
}
```

## Shadows

```js
boxShadow: {
  sm:   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md:   '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg:   '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl:   '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
}
```

## Transitions

```js
transitionDuration: {
  fast: '150ms',
  DEFAULT: '200ms',
  slow: '300ms',
  slower: '500ms',
}
```

## Z-Index

```js
zIndex: {
  dropdown: '1000',
  sticky: '1100',
  fixed: '1200',
  modal: '1300',
  popover: '1400',
  tooltip: '1500',
}
```

## Complete Tailwind Config

```javascript
// tailwind.config.js for AstroWind migration
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4.5rem',
        '7xl': '5.5rem',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.6',
        relaxed: '1.75',
      },
      transitionDuration: {
        fast: '150ms',
        slow: '300ms',
        slower: '500ms',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1100',
        fixed: '1200',
        modal: '1300',
        popover: '1400',
        tooltip: '1500',
      },
    },
  },
  plugins: [],
  darkMode: 'class',  // Use class-based dark mode
}
```

## Usage Examples

### Before (CSS Variables)
```html
<div class="card">
  <h2 style="color: var(--color-primary-600)">Title</h2>
  <p style="font-size: var(--text-lg)">Text</p>
</div>
```

### After (Tailwind)
```html
<div class="rounded-2xl bg-white p-8 shadow-sm">
  <h2 class="text-2xl font-bold text-primary-600">Title</h2>
  <p class="text-lg text-gray-700">Text</p>
</div>
```

## Dark Mode

### Before
```css
[data-theme="dark"] {
  background-color: var(--color-gray-900);
  color: var(--color-gray-50);
}
```

### After
```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">
  Content
</div>
```
