# Deployment Guide

## Overview
This guide covers deploying the Shemirat Enayim site to production.

## Recommended Hosting Platforms

### Option 1: Netlify (Recommended)
**Pros:**
- Free tier with generous limits
- Automatic HTTPS
- CDN included
- Form handling
- Easy custom domain setup
- Automatic deploy previews

**Deployment Steps:**
1. Push code to GitHub (if not already)
2. Sign up at https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
6. Add environment variables (if using analytics):
   - `PUBLIC_PLAUSIBLE_DOMAIN`
   - `PUBLIC_SENTRY_DSN`
   - `PUBLIC_ENV=production`
7. Click "Deploy site"

**Custom Domain:**
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records at your registrar:
   - Add A record: `75.2.60.5`
   - Or CNAME: `[your-site].netlify.app`
4. SSL will be provisioned automatically

### Option 2: Vercel
**Pros:**
- Excellent performance
- Edge network
- Zero-config deployments
- Free tier available

**Deployment Steps:**
1. Push code to GitHub
2. Sign up at https://vercel.com
3. Click "Add New" → "Project"
4. Import from GitHub
5. Vercel auto-detects Astro
6. Add environment variables
7. Click "Deploy"

### Option 3: Cloudflare Pages
**Pros:**
- Free unlimited bandwidth
- Cloudflare CDN
- Fast global distribution
- DDoS protection

**Deployment Steps:**
1. Push code to GitHub
2. Sign up at https://pages.cloudflare.com
3. Create a new project
4. Connect to GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Add environment variables
7. Deploy

## Pre-Deployment Checklist

### 1. Environment Variables
Create `.env.production` file (DO NOT commit to Git):
```bash
PUBLIC_ENV=production
PUBLIC_PLAUSIBLE_DOMAIN=shemiratenayim.com
PUBLIC_SENTRY_DSN=your-sentry-dsn-here
```

Add to `.gitignore`:
```
.env.production
.env.local
.env
```

### 2. Build Verification
Test production build locally:
```bash
npm run build
npm run preview
```
Open http://localhost:4321 and verify:
- [ ] All pages load
- [ ] No console errors
- [ ] Images display correctly
- [ ] Styles load correctly
- [ ] JavaScript works

### 3. Analytics Setup

#### Plausible Analytics
1. Sign up at https://plausible.io
2. Add your domain
3. Copy the domain name
4. Add to environment variables:
   ```
   PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```
5. Verify tracking in Plausible dashboard after deployment

#### Sentry Error Monitoring (Optional)
1. Sign up at https://sentry.io
2. Create new project (JavaScript)
3. Copy the DSN
4. Add to environment variables:
   ```
   PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
   ```
5. Test by triggering an error

### 4. Domain Setup

#### Purchase Domain
Recommended registrars:
- Namecheap
- Google Domains
- Cloudflare Registrar
- Hover

#### DNS Configuration
For Netlify/Vercel/Cloudflare Pages:

**A Records:**
Point apex domain (@) to platform IP

**CNAME Record:**
Point www to platform subdomain
```
www → [your-site].netlify.app
```

**Common DNS Settings:**
```
Type    Name    Value
A       @       75.2.60.5 (Netlify)
CNAME   www     [site].netlify.app
```

Wait 24-48 hours for DNS propagation.

### 5. SSL Certificate
All recommended platforms provide free SSL via Let's Encrypt.
- Netlify: Automatic
- Vercel: Automatic
- Cloudflare: Automatic

### 6. Headers Configuration
The `public/_headers` file is already configured with:
- Security headers
- Cache control
- CORS settings

Verify headers after deployment:
```bash
curl -I https://yourdomain.com
```

### 7. Performance Optimization

Already configured:
- [x] Image optimization
- [x] CSS minification
- [x] JavaScript code splitting
- [x] Lazy loading
- [x] CDN caching

Additional optimizations:
- [ ] Enable Brotli compression (platform setting)
- [ ] Configure CDN caching rules
- [ ] Set up asset versioning

### 8. SEO Post-Deployment

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property for your domain
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap

#### robots.txt Verification
Check `https://yourdomain.com/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap-index.xml
```

### 9. Monitoring Setup

#### Uptime Monitoring
Free options:
- UptimeRobot: https://uptimerobot.com
- StatusCake: https://www.statuscake.com
- Pingdom: https://www.pingdom.com

Setup:
1. Create account
2. Add monitor for your domain
3. Set check interval (5 minutes)
4. Configure alert emails

#### Performance Monitoring
- Google PageSpeed Insights
- WebPageTest.org
- Lighthouse CI

### 10. Backup Strategy

#### Code Backups
- [x] GitHub repository (primary backup)
- [ ] Mirror to GitLab/Bitbucket (optional)

#### Database Backups
N/A - Static site (no database)

#### Content Backups
- All content is in Git
- Platform handles deployment artifacts

## Deployment Workflow

### Automatic Deployment (Recommended)
1. Push to `main` branch
2. Platform auto-detects push
3. Runs build
4. Deploys to production
5. Invalidates CDN cache

### Manual Deployment
If needed:
```bash
# Build locally
npm run build

# Upload dist/ folder to hosting
# (Platform-specific instructions)
```

## Post-Deployment Verification

### Smoke Tests
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Search works
- [ ] Theme toggle works
- [ ] Forms submit correctly
- [ ] Analytics tracking (check dashboard)
- [ ] No console errors
- [ ] SSL certificate valid
- [ ] All resources over HTTPS
- [ ] Favicon displays
- [ ] Social sharing works (test Open Graph)

### Performance Checks
```bash
# Lighthouse
npx lighthouse https://yourdomain.com --view

# Load time
curl -o /dev/null -s -w "%{time_total}\n" https://yourdomain.com
```

### SEO Checks
- [ ] Meta tags present (view source)
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] Structured data valid (Google Rich Results Test)
- [ ] Social sharing previews (Facebook Debugger, Twitter Card Validator)

## Maintenance

### Regular Tasks

**Weekly:**
- [ ] Check analytics
- [ ] Review error logs (Sentry)
- [ ] Check uptime status

**Monthly:**
- [ ] Update dependencies
- [ ] Review performance metrics
- [ ] Check for broken links
- [ ] Backup content changes

**Quarterly:**
- [ ] Security audit
- [ ] Accessibility review
- [ ] Content refresh
- [ ] SEO review

### Updates
```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update Astro
npm install astro@latest

# Test build
npm run build

# Deploy
git push
```

## Rollback Procedure

### Netlify/Vercel
1. Go to Deploys
2. Find last working deploy
3. Click "Publish deploy"
4. Site instantly rolls back

### Manual Rollback
```bash
# Revert to previous commit
git revert HEAD
git push

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force
```

## Support Resources

### Platform Docs
- Astro: https://docs.astro.build
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs

### Community
- Astro Discord: https://astro.build/chat
- Stack Overflow: Tag `astro`

## Troubleshooting

### Build Fails
1. Check build logs
2. Verify Node version (20.x)
3. Clear cache and rebuild
4. Test locally first

### 404 Errors
1. Check `dist/` folder structure
2. Verify publish directory setting
3. Check routing configuration

### Assets Not Loading
1. Verify asset paths (use relative paths)
2. Check CORS headers
3. Verify CDN cache

### Forms Not Working
1. Check platform form handling docs
2. Verify action URLs
3. Test in incognito mode

## Security Checklist

- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] No secrets in code
- [ ] Dependencies up to date
- [ ] CSP configured (if needed)
- [ ] Rate limiting (platform feature)
- [ ] DDoS protection (CDN)

## Launch Day Checklist

### Final Checks
- [ ] All testing complete
- [ ] Analytics configured
- [ ] Error monitoring active
- [ ] Uptime monitoring configured
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] DNS propagated
- [ ] Social sharing tested
- [ ] Forms tested
- [ ] Team notified

### Announce Launch
- [ ] Social media posts
- [ ] Email announcement
- [ ] Update email signatures
- [ ] Add to directory listings
- [ ] Submit to search engines

### Monitor First 24 Hours
- [ ] Watch analytics in real-time
- [ ] Monitor error rates
- [ ] Check server response times
- [ ] Review user feedback
- [ ] Fix any critical issues immediately

## Estimated Timeline

- **Platform setup:** 30 minutes
- **Domain configuration:** 2-48 hours (DNS)
- **SSL provisioning:** 5-60 minutes
- **Analytics setup:** 15 minutes
- **Testing:** 2-4 hours
- **Total:** 1-3 days

## Next Steps

1. Choose hosting platform
2. Create account
3. Connect repository
4. Configure environment variables
5. Deploy
6. Configure custom domain
7. Set up analytics
8. Test thoroughly
9. Monitor and optimize

Good luck with your launch! 🚀
