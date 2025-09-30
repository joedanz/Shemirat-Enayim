# Analytics & Monitoring Setup Guide

This document explains how to set up analytics and error monitoring for the Shemirat Enayim website. All analytics infrastructure has been implemented - you just need to create accounts and configure the environment variables.

## Overview

The site uses:
- **Plausible Analytics** - Privacy-respecting website analytics (no cookies, GDPR-compliant)
- **Sentry** - Error monitoring and performance tracking
- **Web Vitals** - Core Web Vitals monitoring (sent to Plausible)

## Phase 7 Completion Status

✅ **Completed (10/12 tasks):**
1. Set up Plausible Analytics infrastructure ✓
2. Set up Sentry Error Monitoring infrastructure ✓
3. Create analytics utility helper (src/utils/analytics.ts) ✓
4. Add conversion tracking to components ✓
5. Add scroll depth tracking to GuideLayout ✓
6. Install and configure web-vitals ✓
7. Create performance monitoring script ✓
8. Add custom page properties to layouts ✓
9. Create .env.example with configuration ✓
10. Create analytics setup documentation ✓

⏳ **Remaining (2/12 tasks):**
11. Set up Plausible and Sentry accounts + configure environment
12. Update plan.md to mark Phase 7 as complete

---

## 1. Plausible Analytics Setup

### Step 1: Create Plausible Account

1. Go to [https://plausible.io/register](https://plausible.io/register)
2. Choose a plan:
   - **Free Trial**: 30-day trial (no credit card required)
   - **Growth Plan**: $9/month for up to 10k monthly pageviews
   - **Business Plan**: $19/month for up to 100k monthly pageviews

### Step 2: Add Your Website

1. After signup, click "**+ Add a website**"
2. Enter your domain: `shemiratenayim.org` (or your actual domain)
3. Set timezone (e.g., `America/New_York`, `Asia/Jerusalem`)
4. Click "**Add snippet**" - you can skip this since the code is already integrated

### Step 3: Configure Environment Variable

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your domain:
```bash
PUBLIC_PLAUSIBLE_DOMAIN=shemiratenayim.org
PUBLIC_ENV=production
```

### Step 4: Verify Tracking

1. Deploy your site or set `PUBLIC_ENV=production` locally
2. Visit your website
3. In Plausible dashboard, you should see your visit appear within a few seconds
4. Check that custom events are firing:
   - Click share buttons (should track "Share" event)
   - Scroll through a guide (should track "Scroll Depth" events)
   - Submit newsletter signup (should track "Newsletter Signup")

### Step 5: Configure Dashboard (Recommended)

In your Plausible dashboard:

1. **Goals** - Set up custom event goals:
   - Click "⚙️ Settings" > "Goals" > "+ Add goal"
   - Add these custom events:
     - `Guide Complete`
     - `Share`
     - `Newsletter Signup`
     - `Feedback Submit`
     - `CTA Click`
     - `Web Vitals`

2. **Properties** - Enable custom properties:
   - Go to Settings > "Custom properties"
   - Enable properties for segmentation:
     - `pageType` (home, guide, resource, support, general)
     - `audience` (parents, leaders, individuals, general)
     - `category` (network, device, software, education)

3. **Email Reports** - Set up weekly/monthly reports:
   - Go to Settings > "Email reports"
   - Add your email
   - Choose frequency (weekly or monthly)

4. **Shared Links** - Create shareable dashboard (optional):
   - Go to Settings > "Visibility"
   - Toggle "Public dashboard" or create a shared link
   - Share with stakeholders

---

## 2. Sentry Error Monitoring Setup

### Step 1: Create Sentry Account

1. Go to [https://sentry.io/signup/](https://sentry.io/signup/)
2. Sign up (free tier includes 5k errors/month)
3. Choose "**Astro**" as your platform

### Step 2: Create Project

1. Click "**Create Project**"
2. Select platform: **Astro**
3. Set alert frequency: **Alert me on every new issue** (recommended)
4. Name your project: `shemiratenayim`
5. Click "**Create Project**"

### Step 3: Get Your DSN

After creating the project, Sentry will show you a DSN (Data Source Name). It looks like:
```
https://abc123def456@o000000.ingest.sentry.io/0000000
```

Copy this DSN.

### Step 4: Configure Environment Variables

Add to your `.env` file:

```bash
# Sentry Error Monitoring
PUBLIC_SENTRY_DSN=https://your-key@o000000.ingest.sentry.io/0000000
SENTRY_AUTH_TOKEN=your-auth-token
SENTRY_ORG=your-organization-slug
SENTRY_PROJECT=shemiratenayim
```

### Step 5: Create Auth Token (for Source Maps)

1. Go to [https://sentry.io/settings/account/api/auth-tokens/](https://sentry.io/settings/account/api/auth-tokens/)
2. Click "**Create New Token**"
3. Name: `Astro Build`
4. Scopes: Check `project:write` and `project:releases`
5. Click "**Create Token**"
6. Copy the token and add to `.env` as `SENTRY_AUTH_TOKEN`

### Step 6: Get Organization and Project Slugs

1. Go to your Sentry project settings
2. The URL will look like: `https://sentry.io/organizations/YOUR-ORG/projects/YOUR-PROJECT/`
3. Your org slug is the part after `/organizations/`
4. Your project slug is the part after `/projects/`

### Step 7: Test Error Tracking

1. Deploy your site with environment variables configured
2. Trigger a test error (you can add a button that throws an error)
3. Check Sentry dashboard to see the error appear

### Step 8: Configure Alerts

1. Go to **Alerts** > "**Create Alert**"
2. Recommended alerts:
   - **All Unresolved Issues** - Get notified of every new error
   - **High Error Rate** - Alert when error rate spikes
   - **Performance Issues** - Alert on slow page loads

---

## 3. Tracking Events Reference

Here's what's being tracked automatically:

### Pageviews
- Automatic tracking of all page visits
- Custom properties: `pageType`, `audience`, `category`

### Custom Events
1. **Guide Complete** - When user scrolls to 90% of a guide
   - Props: `guide`, `category`

2. **Scroll Depth** - At 25%, 50%, 75%, 90% scroll milestones
   - Props: `guide`, `depth`

3. **Share** - Social sharing actions
   - Props: `platform` (copy, email, whatsapp, facebook, twitter), `page`

4. **Newsletter Signup** - Newsletter form submissions
   - Props: `source` (inline, card, footer)

5. **Feedback Submit** - Feedback form submissions
   - Props: `type` (bug, feature, content, general, question), `rating`

6. **CTA Click** - Call-to-action button clicks
   - Props: `text`, `location`, `type`

7. **External Link** - Clicks to external resources
   - Props: `url`, `text`, `category`

8. **Web Vitals** - Core Web Vitals metrics
   - Props: `metric` (LCP, FID, CLS, TTFB, FCP), `value`, `rating`, `page`

9. **Print** - When user prints a page
   - Props: `page`, `type`

10. **Download** - File downloads
    - Props: `file`, `type`

---

## 4. Dashboard Setup & Reports

### Monthly Dashboard Widgets (Plausible)

Create a custom dashboard with these widgets:

1. **Overview**
   - Total visitors
   - Pageviews
   - Bounce rate
   - Visit duration

2. **Top Pages**
   - Most visited pages
   - Filter by `pageType=guide` to see top guides

3. **Conversions**
   - Guide completions
   - Newsletter signups
   - Social shares

4. **User Segments**
   - Filter by `audience` to see parent vs. leader traffic
   - Filter by `category` to see interest areas

5. **Performance**
   - Web Vitals average scores
   - Pages with poor performance

### Example Filters for Insights

- **Most popular guides**: Filter `pageType=guide`, sort by pageviews
- **Parent content**: Filter `audience=parents`
- **Network guides**: Filter `category=network`
- **Guide engagement**: Look at "Guide Complete" events vs pageviews

---

## 5. Testing Checklist

Before marking Phase 7 complete, test:

- [ ] Plausible tracking appears in dashboard
- [ ] Custom events fire correctly (check browser network tab for `plausible` requests)
- [ ] Page properties are included in pageview events
- [ ] Sentry captures errors (test with intentional error)
- [ ] Web Vitals metrics appear in Plausible
- [ ] Scroll depth tracking works on guides
- [ ] Share button tracking works
- [ ] Newsletter signup tracking works
- [ ] Feedback form tracking works
- [ ] Performance monitoring is active

---

## 6. Production Deployment

When deploying to production:

1. **Set Environment Variables** in your hosting platform:
   ```bash
   PUBLIC_ENV=production
   PUBLIC_PLAUSIBLE_DOMAIN=shemiratenayim.org
   PUBLIC_SENTRY_DSN=your-sentry-dsn
   SENTRY_AUTH_TOKEN=your-token
   SENTRY_ORG=your-org
   SENTRY_PROJECT=your-project
   ```

2. **Verify** in browser console (production build):
   - Plausible script should load from `plausible.io`
   - No analytics errors in console
   - Sentry should initialize without errors

3. **First Week Monitoring**:
   - Check Plausible daily for data accuracy
   - Monitor Sentry for any unexpected errors
   - Review Web Vitals scores and identify slow pages

---

## 7. Privacy & Compliance

Both Plausible and Sentry are privacy-respecting:

✅ **Plausible:**
- No cookies
- No personal data collection
- GDPR, CCPA, PECR compliant
- All data stored in EU

✅ **Sentry:**
- Only collects error data and stack traces
- No PII in error reports
- Can be configured for data scrubbing
- Compliant with privacy regulations

**No cookie consent banner needed** - These tools don't use cookies or track personal information.

---

## 8. Cost Estimate

### Plausible
- **Growth Plan**: $9/month (up to 10k visitors/month)
- **Business Plan**: $19/month (up to 100k visitors/month)
- **Enterprise**: Custom pricing for higher volume

### Sentry
- **Free Tier**: 5,000 errors/month, 10k performance units/month
- **Team Plan**: $26/month for 50k errors/month
- Most sites stay within free tier

**Estimated Monthly Cost**: $9-19 (Plausible) + $0-26 (Sentry) = **$9-45/month**

For a new site, start with Plausible Growth ($9/mo) + Sentry Free = **$9/month total**

---

## 9. Next Steps

After completing setup:

1. ✅ Create Plausible account and add domain
2. ✅ Create Sentry account and configure error tracking
3. ✅ Set environment variables in `.env`
4. ✅ Test all tracking events work correctly
5. ✅ Configure Plausible dashboard with goals and properties
6. ✅ Set up email reports in Plausible
7. ✅ Configure Sentry alerts
8. ✅ Update `plan.md` to mark Phase 7 as 100% complete
9. ✅ Proceed to **Phase 8: Launch Preparation**

---

## Support & Resources

- **Plausible Docs**: https://plausible.io/docs
- **Sentry Docs**: https://docs.sentry.io/platforms/javascript/guides/astro/
- **Web Vitals**: https://web.dev/vitals/
- **Analytics Utils**: See `src/utils/analytics.ts` for all tracking functions

For questions about implementation, check the code comments in:
- `src/layouts/Layout.astro` - Main analytics setup
- `src/utils/analytics.ts` - Tracking utility functions
- `src/scripts/performance-monitor.ts` - Web Vitals tracking
- `src/layouts/GuideLayout.astro` - Scroll depth tracking
