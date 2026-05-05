# Analytics Setup: Google Analytics 4 + Microsoft Clarity

## Overview

Greyquill.io uses two complementary analytics tools:

- **Google Analytics 4 (GA4)** -- traffic, page views, session duration, user journeys, acquisition channels
- **Microsoft Clarity** -- heatmaps, scroll maps, click maps, session recordings, mouse movement tracking

Both are loaded via `next/script` with the `afterInteractive` strategy in `next/app/layout.tsx`, so they fire on every page automatically without any per-page setup.

The two tools are also connected: Clarity has a native GA4 integration (already configured during setup), which lets you filter Clarity sessions by GA4 segments and vice versa.

---

## Implementation Details

**File changed:** `next/app/layout.tsx`

Both trackers are injected as `<Script>` blocks placed inside the root `<html>` element, before `<body>`. Next.js defers them until after the page is interactive so they never block page load.

```
GA4 Measurement ID : G-Y2872QPYKZ
Clarity Project ID : wmggh15wj5
```

The scripts fire on every route change automatically because Next.js re-runs the layout on navigation. No additional event wiring is needed for basic page-view tracking.

---

## What Each Tool Tracks

### Google Analytics 4

| Signal | Detail |
|---|---|
| Page views | Every page, with path and title |
| Session duration | Time between first and last event |
| Scroll depth | How far down each page users scroll |
| Engagement rate | Sessions with meaningful interaction |
| Traffic sources | Organic search, direct, referral, social |
| Device and browser | Mobile vs desktop, OS, browser |
| Geography | Country, city |
| User flow | Which pages users visit in sequence |

### Microsoft Clarity

| Signal | Detail |
|---|---|
| Heatmaps (click) | Where users click on each page |
| Heatmaps (scroll) | How far down users scroll |
| Heatmaps (mouse move) | Where the cursor lingers |
| Session recordings | Full video replay of user sessions |
| Dead clicks | Clicks on non-interactive elements |
| Rage clicks | Repeated frustrated clicks in one spot |
| Excessive scrolling | Users scrolling back and forth |
| JavaScript errors | JS errors that occurred during sessions |

---

## Where to Check Results

### Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select the **Greyquill** property (ID: G-Y2872QPYKZ)

Key reports to use:

| What you want to know | Where to find it |
|---|---|
| Which pages get the most traffic | Reports > Engagement > Pages and screens |
| Where visitors come from | Reports > Acquisition > Traffic acquisition |
| How long people stay | Reports > Engagement > Overview (Engagement rate, Session duration) |
| What device/location | Reports > User > Tech / Demographics |
| Real-time who is on site now | Reports > Realtime |
| User journey across pages | Explore > Path exploration |

### Microsoft Clarity

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Select the **Greyquill** project (ID: wmggh15wj5)

Key features to use:

| What you want to know | Where to find it |
|---|---|
| Where people click on a specific page | Heatmaps > Filter by URL > Click tab |
| How far people scroll | Heatmaps > Filter by URL > Scroll tab |
| Where the mouse lingers | Heatmaps > Filter by URL > Mouse move tab |
| Watch an individual session | Recordings > click any session |
| Find sessions with rage clicks | Recordings > Filter > Rage clicks |
| Find sessions with JS errors | Recordings > Filter > JavaScript errors |
| Compare desktop vs mobile heatmaps | Heatmaps > Device filter (top right) |

---

## Data Lag

- **GA4**: Data appears in Realtime reports instantly. Standard reports (Engagement, Acquisition) have a 24-48 hour processing delay.
- **Clarity**: Heatmaps and recordings typically appear within 1-2 hours of the first sessions. Recordings are retained for 30 days on the free plan.

---

## Verification

To confirm both trackers are firing:

1. Open any page on greyquill.io in Chrome
2. Open DevTools > Network tab > filter by `google-analytics` or `gtag` -- you should see requests to `google-analytics.com`
3. Filter by `clarity.ms` -- you should see requests to `www.clarity.ms/collect`
4. In GA4, go to Reports > Realtime -- your visit should appear within seconds
5. In Clarity, go to Recordings -- your session should appear within a few minutes

---

## Privacy Notes

- GA4 data is anonymized by default (IP addresses are not stored)
- Clarity automatically masks text inputs and sensitive fields in recordings
- Both tools use cookies; if you add a cookie consent banner in the future, the scripts should be conditionally loaded based on user consent
