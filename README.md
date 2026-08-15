# Zane Foundation website

A bilingual English/Kurdish public website for Zane Foundation, based on the
foundation strategy, internal bylaws, and supplied brand kit.

## What is included

- English and Kurdish routes with correct reading direction
- Mission, origin story, programs, impact framework, transparency roadmap,
  partnership pathways, family resources, contact, and editorial notes
- Honest separation between proposed targets and verified achievements
- Search metadata, sitemap, robots file, social metadata, responsive navigation,
  keyboard focus states, reduced-motion support, and security headers
- A file-based story system that needs no database or paid CMS
- Vercel-ready Next.js setup

## Local use

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to the English site. Kurdish is
available at `/ku`.

Before publishing a change:

```bash
npm test
npm run lint
npm run build
```

## Editing articles and learning notes

Edit `content/stories.json`. The detailed copy-and-paste workflow and consent
rules are in `content/README.md`.

The editorial section is intentionally called **Stories & learning**. A new
foundation should publish founding notes, program design notes, and learning
briefs. Use the label **case study** only after work has been delivered, results
have been verified, and the person or family has provided informed consent.

## Replacing the Kurdish font

Add the approved WOFF2 font at:

`public/fonts/ZaneKurdish.woff2`

Then uncomment the `@font-face` block at the top of `app/globals.css`. The full
note is in `public/fonts/README.md`.

## Replacing the logo

Replace `public/brand/zane-mark.png` with the approved transparent export while
keeping the filename. The current image is a provisional crop from the supplied
brand board. See `public/brand/README.md`.

## Content that must be confirmed before launch

- Legal registration name, number, date, and issuing authority
- Confirmed board and leadership profiles
- Working ownership of `zanefoundation.iq` and `info@zanefoundation.iq`
- Visit address and response-time commitment
- Safeguarding, consent, privacy, complaints, conflict-of-interest, and
  whistleblowing policies
- Bank or regulated donation pathway before adding a public donate button
- Expert review of Kurdish terminology and every family/health resource

The current site does not collect visitor or health information and does not
need a backend. This is deliberate: there is no reason to create sensitive-data
risk before the family line and its safeguarding protocols are operational.

## Vercel deployment

Import this GitHub repository in Vercel. Vercel will detect Next.js. Keep the
default build command (`npm run build`) and output settings. Add the custom
domain only after DNS and email ownership have been confirmed.

