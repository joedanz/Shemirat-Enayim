# Shemirat Enayim → AstroWind Migration Plan

**Branch**: `fresh-astrowind-setup`
**Date**: October 3, 2025
**Status**: ✅ Fresh AstroWind installation complete

---

## ✅ Phase 1: Setup Complete

### Completed Tasks
- ✅ Created new branch `fresh-astrowind-setup`
- ✅ Backed up existing site to `OLD_SITE_BACKUP/`
- ✅ Installed fresh AstroWind template from https://github.com/arthelokyo/astrowind
- ✅ Installed dependencies (816 packages)
- ✅ Verified dev server works at `localhost:4321`

### Backup Locations
1. **Git branch**: `backup-before-astrowind-migration` (previous backup)
2. **Directory**: `OLD_SITE_BACKUP/` (current site, 81 Astro files)
3. **Archive**: `/Users/danziger/code/shemiratenayim-backup-20251002.tar.gz`

---

## 📋 Content Inventory (From OLD_SITE_BACKUP)

### Pages (57 total)
```
Core Pages (5):
├── index.astro (Homepage)
├── parents.astro
├── leaders.astro
├── individuals.astro
└── methods.astro

Guides (33):
├── Network-level (4):
│   ├── dns-filtering.astro
│   ├── opendns-tutorial.astro
│   ├── cleanbrowsing-tutorial.astro
│   └── router-config.astro
├── Device-level (6):
│   ├── ios-screen-time.astro
│   ├── android-family-link.astro
│   ├── windows-family.astro
│   ├── macos-controls.astro
│   ├── gaming-consoles.astro
│   └── smart-tv.astro
├── Software Solutions (5):
│   ├── filtering-software.astro
│   ├── browser-extensions.astro
│   ├── accountability-apps.astro
│   ├── safe-search.astro
│   └── youtube-filtering.astro
├── Parent Guides (6):
│   ├── age-appropriate-internet.astro
│   ├── social-media-safety.astro
│   ├── gaming-safety.astro
│   ├── cyberbullying.astro
│   ├── screen-time-management.astro
│   └── education-entertainment-balance.astro
├── Leader Guides (6):
│   ├── supporting-families.astro
│   ├── computer-lab-management.astro
│   ├── community-education.astro
│   ├── balancing-access-protection.astro
│   ├── public-wifi-setup.astro
│   └── policies-guidelines.astro
└── Technical Tutorials (6):
    ├── apple-screen-time-tutorial.astro
    ├── google-family-link-tutorial.astro
    ├── microsoft-family-accounts.astro
    ├── router-firmware-updates.astro
    ├── firewall.astro
    └── guest-networks.astro

Troubleshooting (6):
├── index.astro
├── dns-not-working.astro
├── slow-internet.astro
├── sites-blocked-incorrectly.astro
├── child-bypassed-filter.astro
└── password-recovery.astro

Printables (3):
├── index.astro
├── dns-servers.astro
└── screen-time-limits.astro

Resources (2):
├── resources.astro
└── emergency.astro

Support & Legal (10):
├── about.astro
├── contact.astro
├── feedback.astro
├── faq.astro
├── terms.astro
├── privacy.astro
├── changelog.astro
└── 404.astro
```

### Components (20)
```
UI Components:
├── Header.astro
├── Footer.astro
├── Hero.astro
├── Card.astro
├── Button.astro
├── Alert.astro
├── Breadcrumb.astro
├── Accordion.astro
├── SearchBar.astro
├── ThemeToggle.astro
├── Icon.astro
├── ShareButtons.astro
├── NewsletterSignup.astro
├── Stats.astro
├── TableOfContents.astro
├── LoadingSpinner.astro
├── EmptyState.astro
├── ErrorMessage.astro
└── infographics/
    ├── DNSFlowDiagram.astro
    ├── LayeredProtection.astro
    └── AgeProgression.astro
```

### Layouts (3)
```
├── Layout.astro (Base layout)
├── GuideLayout.astro (For guides)
└── ContentLayout.astro (For content pages)
```

### Utils/Scripts (2)
```
├── utils/analytics.ts
└── scripts/performance-monitor.ts
```

---

## 🎯 Phase 2: Configuration (Day 1 - October 3)

### 2.1: Configure AstroWind Base Settings
Edit `src/config.yaml`:
```yaml
site:
  name: Shemirat Enayim
  site: 'https://shemiratenayim.org'
  base: '/'
  trailingSlash: false

metadata:
  title:
    default: Shemirat Enayim
    template: '%s — Shemirat Enayim'
  description: "Comprehensive guides for internet safety, content filtering, and digital protection for families and communities."
  robots:
    index: true
    follow: true
  openGraph:
    site_name: Shemirat Enayim
    type: website

apps:
  blog:
    isEnabled: false  # ← DISABLE BLOG

ui:
  theme: 'system'
```

### 2.2: Install Additional Dependencies
```bash
npm install fuse.js           # Search functionality
npm install @sentry/astro     # Error tracking (optional)
npm install web-vitals        # Performance monitoring (optional)
```

### 2.3: Update astro.config.ts
Add configurations from old `astro.config.mjs`:
- Sitemap generation
- Build optimizations
- Performance settings

**Estimated Time**: 4 hours

---

## 🧩 Phase 3: Component Migration (Days 2-3 - October 4-5)

### Strategy
AstroWind already has many components. Compare and adapt rather than rebuild from scratch.

### Priority 1: Core Layout Components (Day 2)
- [ ] **Header**: Adapt AstroWind's Header widget with custom navigation
  - Source: `OLD_SITE_BACKUP/src/components/Header.astro`
  - Target: `src/components/widgets/Header.astro` (modify existing)
  - Add: Parents, Leaders, Individuals, Methods navigation

- [ ] **Footer**: Adapt AstroWind's Footer widget
  - Source: `OLD_SITE_BACKUP/src/components/Footer.astro`
  - Target: `src/components/widgets/Footer.astro` (modify existing)
  - Add: Links to guides, resources, legal pages

- [ ] **Layouts**: Create custom layouts based on AstroWind's
  - Base Layout: Use `src/layouts/PageLayout.astro`
  - Guide Layout: Create new based on PageLayout
  - Content Layout: Adapt for simple content pages

### Priority 2: Feature Components (Day 3)
- [ ] **SearchBar**: Integrate fuse.js for full-text search
  - Build Tailwind modal
  - Index all pages
  - Keyboard shortcut (Cmd/Ctrl+K)

- [ ] **ThemeToggle**: Use AstroWind's existing implementation
  - Already in `src/components/common/ToggleTheme.astro`

- [ ] **Breadcrumb**: Create with Tailwind
  - Important for guide navigation

- [ ] **Alert/Card/Button**: Use AstroWind's existing UI components
  - `src/components/ui/Button.astro` (already exists)

### Priority 3: Custom Components (If time permits)
- [ ] TableOfContents
- [ ] ShareButtons
- [ ] Accordion
- [ ] Stats
- [ ] Infographics (may need SVG conversion)

**Estimated Time**: 16 hours (2 days)

---

## 📄 Phase 4: Page Migration (Days 4-9 - October 6-11)

### Strategy: Progressive Migration
Convert pages in order of importance. Each page:
1. Copy content from old page
2. Convert CSS variables to Tailwind classes
3. Update imports to use new components
4. Test layout and functionality

### Day 4: Core Pages (5 pages)
- [ ] Homepage (`index.astro`)
- [ ] Parents page
- [ ] Leaders page
- [ ] Individuals page
- [ ] Methods catalog

**Time**: 8 hours (1.5 hrs/page)

### Days 5-6: Priority Guides (12 pages)
Top guides based on traffic/importance:
- [ ] DNS Filtering
- [ ] iOS Screen Time
- [ ] Android Family Link
- [ ] OpenDNS Tutorial
- [ ] CleanBrowsing Tutorial
- [ ] Browser Extensions
- [ ] Safe Search
- [ ] YouTube Filtering
- [ ] Windows Family
- [ ] macOS Controls
- [ ] Router Config
- [ ] Filtering Software

**Time**: 16 hours (1.3 hrs/page)

### Days 7-8: Remaining Guides (21 pages)
All other guides from the backup
**Time**: 16 hours

### Day 9: Support & Legal Pages (13 pages)
- [ ] FAQ
- [ ] About
- [ ] Contact
- [ ] Feedback
- [ ] Resources
- [ ] Emergency Resources
- [ ] Terms
- [ ] Privacy
- [ ] Changelog
- [ ] Troubleshooting hub + 5 guides
- [ ] Printables (3 pages)

**Time**: 8 hours

**Total Phase Time**: 48 hours (6 days)

---

## ⚡ Phase 5: Features & Functionality (Days 10-11 - October 12-13)

### 5.1: Search Implementation
- [ ] Create search index (all 57 pages)
- [ ] Build search modal with Tailwind
- [ ] Integrate fuse.js fuzzy matching
- [ ] Add keyboard shortcuts
- [ ] Test search relevance

### 5.2: Forms
- [ ] Contact form
- [ ] Feedback form with ratings
- [ ] Newsletter signup (if needed)
- [ ] Form validation
- [ ] Success/error states

### 5.3: Navigation
- [ ] Dropdown menus for guides
- [ ] Breadcrumbs on all pages
- [ ] Mobile menu
- [ ] Footer links

### 5.4: SEO & Meta
- [ ] Update all meta descriptions
- [ ] Open Graph images
- [ ] Sitemap configuration
- [ ] Robots.txt

### 5.5: Analytics (Optional)
- [ ] Plausible integration
- [ ] Sentry error tracking
- [ ] Web Vitals monitoring

**Estimated Time**: 16 hours (2 days)

---

## 🧪 Phase 6: Testing & QA (Days 12-13 - October 14-15)

### Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Functionality Testing
- [ ] All 57 pages load
- [ ] Navigation works
- [ ] Search works
- [ ] Theme toggle
- [ ] Forms submit
- [ ] Mobile responsive
- [ ] Print styles (printables)

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast
- [ ] Focus indicators
- [ ] ARIA labels

### Performance
- [ ] Lighthouse scores (target 90+)
- [ ] Core Web Vitals
- [ ] PageSpeed Insights
- [ ] Bundle size
- [ ] Load time

**Estimated Time**: 16 hours (2 days)

---

## 🚀 Phase 7: Deployment (Day 14 - October 16)

### Pre-Deployment
- [ ] Final content review
- [ ] Link checking
- [ ] SEO verification
- [ ] Analytics testing

### Staging Deployment
- [ ] Deploy to Netlify preview
- [ ] Full QA on staging
- [ ] Get approvals

### Production
- [ ] Deploy to production
- [ ] Monitor analytics
- [ ] Watch for errors
- [ ] Performance monitoring

### Post-Launch (24-48 hours)
- [ ] Monitor analytics
- [ ] Check error logs
- [ ] Performance metrics
- [ ] User feedback

**Estimated Time**: 8 hours (1 day)

---

## 📊 Timeline Summary

| Phase | Days | Hours | Status |
|-------|------|-------|--------|
| 1. Setup | 0.5 | 4 | ✅ Complete |
| 2. Configuration | 0.5 | 4 | Pending |
| 3. Components | 2 | 16 | Pending |
| 4. Pages (57) | 6 | 48 | Pending |
| 5. Features | 2 | 16 | Pending |
| 6. Testing | 2 | 16 | Pending |
| 7. Deployment | 1 | 8 | Pending |
| **TOTAL** | **14** | **112** | **4% Complete** |

### Work Schedule Options
- **Full-time (8 hrs/day)**: 14 days → Completion October 16, 2025
- **Part-time (4 hrs/day)**: 28 days → Completion October 30, 2025
- **Weekend only (16 hrs/week)**: 7 weeks → Completion November 21, 2025

---

## 🎨 CSS Variables → Tailwind Conversion

Reference the mapping in `MIGRATION_ASSETS/styles/css-variables.md` for converting old styles to Tailwind classes.

### Common Conversions
```css
/* Old CSS Variables */
--primary-color: #2563eb → bg-blue-600 text-blue-600
--text-color: #1f2937 → text-gray-800
--bg-light: #f9fafb → bg-gray-50
--border-radius: 0.5rem → rounded-lg
--shadow: 0 1px 3px → shadow-md

/* Old */
color: var(--primary-color);
background: var(--bg-light);
border-radius: var(--border-radius);

/* New Tailwind */
class="text-blue-600 bg-gray-50 rounded-lg"
```

---

## 🔄 Migration Workflow (Per Page)

For each page in `OLD_SITE_BACKUP/src/pages/`:

1. **Create new page** in `src/pages/` with same filename
2. **Copy frontmatter** (title, description, etc.)
3. **Update layout** import to use new layouts
4. **Convert content**:
   - Replace component imports with new AstroWind components
   - Convert CSS variables to Tailwind classes
   - Update any custom components to new versions
5. **Test locally**: Check in browser
6. **Commit**: `git commit -m "Migrate: [page name]"`

### Example: Converting a Guide Page

**Before** (`OLD_SITE_BACKUP/src/pages/guides/dns-filtering.astro`):
```astro
---
import GuideLayout from '../../layouts/GuideLayout.astro';
import Card from '../../components/Card.astro';
import Alert from '../../components/Alert.astro';
---

<GuideLayout title="DNS Filtering Guide">
  <div class="content" style="background: var(--bg-light)">
    <Alert type="info">DNS filtering is effective...</Alert>
    <Card>...</Card>
  </div>
</GuideLayout>

<style>
  .content {
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
  }
</style>
```

**After** (`src/pages/guides/dns-filtering.astro`):
```astro
---
import PageLayout from '~/layouts/PageLayout.astro';
import Note from '~/components/widgets/Note.astro';
import Content from '~/components/widgets/Content.astro';
---

<PageLayout metadata={{ title: "DNS Filtering Guide" }}>
  <div class="bg-gray-50 p-8 rounded-lg">
    <Note>DNS filtering is effective...</Note>
    <Content>...</Content>
  </div>
</PageLayout>
```

---

## ⚠️ Risks & Mitigation

### High-Risk Items
1. **⚠️ Time Estimates**: 14 days is aggressive
   - **Mitigation**: Prioritize core pages, defer nice-to-haves

2. **⚠️ Component Complexity**: Some custom components may be hard to replicate
   - **Mitigation**: Use AstroWind's components where possible, simplify if needed

3. **⚠️ Content Accuracy**: 57 pages is a lot to migrate without errors
   - **Mitigation**: Systematic testing, link checking, peer review

4. **⚠️ SEO Impact**: URL changes or missing content could hurt rankings
   - **Mitigation**: Keep same URL structure, 301 redirects if needed

### Recovery Plan
If migration fails or takes too long:
1. `git checkout backup-before-astrowind-migration`
2. Or restore from archive: `tar -xzf shemiratenayim-backup-20251002.tar.gz`
3. Original site is 100% intact

---

## 🎯 Success Criteria

### Must-Have (MVP)
- ✅ All 57 pages migrated and functional
- ✅ Navigation works (header, footer, menus)
- ✅ Mobile responsive
- ✅ Core Web Vitals: Good (green)
- ✅ Lighthouse score: 85+ on all metrics
- ✅ Search functionality works
- ✅ Theme toggle (light/dark) works
- ✅ All links work (no 404s)

### Nice-to-Have
- 📊 Advanced analytics (Plausible, Sentry)
- 📊 Full accessibility (WCAG AA)
- 📊 Perfect Lighthouse (95+)
- 📊 Fancy infographics/animations
- 📊 Newsletter integration

---

## 📝 Next Steps

1. **Review this plan** with stakeholders
2. **Decide on timeline**: Full-time vs. part-time
3. **Start Phase 2**: Configure `src/config.yaml`
4. **Set up daily standups** to track progress
5. **Create a Kanban board** (optional) for task tracking

---

## 📚 Resources

- **AstroWind Docs**: https://github.com/arthelokyo/astrowind
- **Astro Docs**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Old Site Reference**: `OLD_SITE_BACKUP/`
- **CSS Mapping**: `MIGRATION_ASSETS/styles/css-variables.md`
- **Previous Migration Status**: `MIGRATION_STATUS.md`

---

**Last Updated**: October 3, 2025
**Migration Lead**: Claude Code
**Version**: 2.0 (Fresh Start)
