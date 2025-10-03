# Testing Checklist

## Visual Refresh Summary
✅ **Completed:**
- Modernized typography (larger headings, better spacing, improved font stack)
- Updated color scheme (vibrant blues with better contrast)
- Added smooth animations and transitions throughout
- Enhanced card designs with gradient accents and hover effects
- Upgraded hero section with gradient text, floating orb animation, and grid pattern
- Improved navigation with glassmorphism backdrop blur and better hover states

## Cross-Browser Testing

### Desktop Browsers
Test on the following browsers to ensure consistent experience:

#### Chrome/Edge (Chromium-based)
- [ ] Homepage loads correctly
- [ ] Navigation dropdowns work
- [ ] Search functionality (Cmd/Ctrl+K)
- [ ] Theme toggle works
- [ ] Hero gradient and animations display
- [ ] Card hover effects work smoothly
- [ ] Typography renders correctly
- [ ] Backdrop blur on header works

#### Firefox
- [ ] Homepage loads correctly
- [ ] Navigation dropdowns work
- [ ] Search functionality
- [ ] Theme toggle works
- [ ] CSS gradient text displays correctly
- [ ] Backdrop filter fallback if not supported
- [ ] All animations work
- [ ] Print styles work

#### Safari (macOS)
- [ ] Homepage loads correctly
- [ ] Webkit-specific prefixes work (-webkit-backdrop-filter, -webkit-background-clip)
- [ ] Gradient text displays correctly
- [ ] Navigation works
- [ ] Theme toggle persists
- [ ] Mobile Safari viewport handling
- [ ] Touch interactions on iOS

### Mobile Testing

#### Responsive Breakpoints
Test at these viewport sizes:
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12/13/14)
- [ ] 414px (iPhone Plus models)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)

#### Mobile Browsers
- [ ] Safari iOS (iPhone & iPad)
- [ ] Chrome Android
- [ ] Samsung Internet
- [ ] Firefox Mobile

#### Mobile-Specific Features
- [ ] Mobile menu opens/closes smoothly
- [ ] Dropdown submenus work on mobile
- [ ] Touch targets are 44x44px minimum
- [ ] Viewport meta tag prevents horizontal scroll
- [ ] Hero section responsive on all sizes
- [ ] Cards stack properly on mobile
- [ ] Typography scales appropriately
- [ ] Search modal works on mobile

## Accessibility Audit

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Skip links work
- [ ] Dropdowns accessible via keyboard
- [ ] Search opens with Cmd/Ctrl+K
- [ ] Theme toggle accessible
- [ ] Mobile menu accessible
- [ ] All buttons have focus indicators
- [ ] Escape key closes modals/dropdowns

### Screen Reader Testing
- [ ] VoiceOver (macOS/iOS) - test major pages
- [ ] NVDA (Windows) - test major pages
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Alt text on all images
- [ ] ARIA labels on icon buttons
- [ ] Form labels properly associated
- [ ] Link text is descriptive

### Color Contrast
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Large text meets WCAG AA (3:1)
- [ ] High contrast mode works
- [ ] Dark mode has sufficient contrast
- [ ] Focus indicators visible
- [ ] Error messages visible

### Tools to Use
Run these automated tools:
```bash
# Lighthouse
npm install -g @lhci/cli
lighthouse http://localhost:4321 --view

# axe DevTools (browser extension)
# Install: Chrome Web Store or Firefox Add-ons

# WAVE (browser extension)
# Install: https://wave.webaim.org/extension/
```

## Performance Testing

### Core Web Vitals
Target metrics:
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### Page Speed
- [ ] Homepage loads < 3s on 4G
- [ ] All pages score 90+ on Lighthouse
- [ ] Images are optimized
- [ ] No render-blocking resources
- [ ] JavaScript lazy-loaded where appropriate

### Tools
```bash
# WebPageTest
# https://www.webpagetest.org/

# Chrome DevTools
# Network tab - throttle to Fast 3G
# Lighthouse - run audit
# Performance - record page load

# PageSpeed Insights
# https://pagespeed.web.dev/
```

## Functionality Testing

### Critical User Paths
- [ ] Homepage → Parents → Guide → Back
- [ ] Search for "DNS" → Click result
- [ ] Methods page → Filter by category
- [ ] Contact form submission
- [ ] Feedback form submission
- [ ] Newsletter signup
- [ ] Print a guide (print styles)
- [ ] Share a page (share buttons)

### Interactive Features
- [ ] Search works (fuzzy matching)
- [ ] Theme toggle (light/dark/high-contrast)
- [ ] Theme persists on page reload
- [ ] Mobile menu toggles
- [ ] Dropdown menus (desktop)
- [ ] Dropdown menus (mobile)
- [ ] Accordion components
- [ ] Table of contents scroll highlighting
- [ ] Breadcrumb navigation
- [ ] Copy link button

### Forms
- [ ] Contact form validation
- [ ] Feedback form validation
- [ ] Newsletter signup validation
- [ ] Error messages display
- [ ] Success messages display
- [ ] Required fields enforced

## Browser DevTools Checks

### Console
- [ ] No JavaScript errors
- [ ] No 404s (failed resources)
- [ ] No CORS errors
- [ ] No mixed content warnings (http/https)

### Network
- [ ] All resources load successfully
- [ ] Fonts load correctly
- [ ] Images optimized (WebP if supported)
- [ ] No duplicate requests
- [ ] Caching headers set correctly

### Performance
- [ ] No layout shifts (CLS)
- [ ] Smooth animations (60fps)
- [ ] No memory leaks
- [ ] Efficient JavaScript execution

## Platform-Specific Testing

### macOS
- [ ] Safari latest version
- [ ] Chrome latest version
- [ ] Firefox latest version
- [ ] Font rendering
- [ ] Backdrop blur effects

### Windows
- [ ] Edge latest version
- [ ] Chrome latest version
- [ ] Firefox latest version
- [ ] Font rendering (ClearType)
- [ ] High DPI displays

### iOS
- [ ] iPhone (various sizes)
- [ ] iPad
- [ ] Safari mobile
- [ ] Standalone mode (add to home screen)

### Android
- [ ] Chrome
- [ ] Samsung Internet
- [ ] Various screen sizes

## Pre-Deployment Checks

### Content
- [x] All pages proofread
- [x] Links verified (no broken links)
- [x] Images have alt text
- [x] Meta descriptions on all pages
- [x] Legal pages (Terms, Privacy)

### SEO
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Open Graph tags
- [x] Twitter cards
- [ ] Google Search Console setup (post-launch)
- [ ] Submit sitemap to Google

### Analytics
- [x] Plausible script added
- [x] Sentry configured
- [ ] Create Plausible account
- [ ] Create Sentry account
- [ ] Set environment variables

### Security
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Content Security Policy
- [ ] No sensitive data in repo
- [ ] Environment variables for secrets

## Notes
- Test in incognito/private mode to avoid caching issues
- Clear browser cache between tests
- Test both logged-in and logged-out states (if applicable)
- Take screenshots of any issues
- Document browser version numbers

## Issues Found
Document any issues here with:
- Browser & version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots
