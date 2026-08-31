# Apurva & Ayush — Wedding Website

A mobile-first wedding website for December 8–9, 2026 at Swarnabhumi Banquets, Ranchi.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173/ABAP/](http://localhost:5173/ABAP/) in your browser.

## Edit Content

All wedding details live in one file:

**`src/content/wedding.ts`**

Update names, schedule, venue, FAQs, dress code, RSVP link, and contact info there — no component changes needed.

### Add Your Google Form RSVP

Set `rsvp.googleFormUrl` in `wedding.ts` to your Google Form embed URL.

### Add Gallery Photos

1. Drop photos into `public/gallery/` (e.g. `photo-1.jpg`)
2. Update the `gallery` array in `wedding.ts` with image paths

## Deploy to GitHub Pages

1. Push this repo to GitHub (repo name: `ABAP`)
2. Run:

```bash
npm run deploy
```

3. In GitHub repo settings → Pages → Source: deploy from **`gh-pages`** branch
4. Site will be live at: `https://<your-username>.github.io/ABAP/`

## Sections

- Hero with countdown to Pheras (Dec 9, 7:30 PM)
- Two-day event schedule (Sangeet + Wedding)
- Venue & travel info (Swarnabhumi, Ranchi)
- Dress code guidance
- Photo gallery
- FAQ (attire, ceremonies, practical info)
- RSVP form
