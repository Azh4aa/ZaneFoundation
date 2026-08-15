# Zane Foundation website

A bilingual English/Kurdish institutional website for Zane Foundation, based on the foundation strategy, internal bylaws and supplied brand system.

## Included

- English and Sorani Kurdish routes with correct text direction
- Programs, institutional profile, impact framework, transparency register, partnerships and family resources
- Volunteer registration and careers expressions of interest
- Privacy, safeguarding, complaints and accessibility notices
- File-based news and insight publishing—no database or CMS subscription
- Search metadata, sitemap, social image, responsive navigation, keyboard focus and reduced-motion support
- Vercel-compatible form backend using Resend

## Local use

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. English is at `/en`; Kurdish is at `/ku`.

Before publishing:

```bash
npm test
npm run lint
npm run build
```

## The first file to edit

All public placeholders are centralized in `lib/site.ts`:

- Website address
- General, partnership, volunteer, careers, privacy, safeguarding and feedback emails
- Legal name
- Registration status and number
- Location

The current `zanefoundation.org` addresses and `REGISTRATION PENDING` status are deliberate placeholders. Replace them in that one file as soon as the domain and certificate are confirmed.

## Volunteer and careers forms

Forms post to `app/api/applications/route.ts`. They validate input, reject cross-site requests, use a hidden bot field, limit all field sizes and do not accept attachments or health information.

To activate delivery on Vercel:

1. Create a Resend account and verify the foundation’s real domain.
2. Create an API key.
3. Add the three values from `.env.example` in **Vercel → Project → Settings → Environment Variables**.
4. Redeploy and submit one test from each form.

If these variables are missing, the website remains usable but form delivery returns a clear error and the direct volunteer/careers email remains visible.

## Publishing news and insight

Edit `content/stories.json`. The workflow and consent rules are in `content/README.md`.

Use **case study** only after the work has happened, results have been checked and every identifiable person has given informed consent. Before then, publish institutional briefs, program updates, learning briefs and reports.

## Publishing a vacancy

Vacancies live in `content/opportunities.json`. It is intentionally empty now, so the careers page honestly says there are no open roles.

Add objects using this structure:

```json
{
  "slug": "program-manager",
  "title": { "en": "Program Manager", "ku": "بەڕێوەبەری بەرنامە" },
  "type": { "en": "Full-time", "ku": "تەواوی کات" },
  "location": { "en": "Sulaymaniyah", "ku": "سلێمانی" },
  "deadline": "2026-10-01",
  "summary": { "en": "Short public summary.", "ku": "پوختەیەکی کورت." }
}
```

## Kurdish font

The site already self-hosts **Noto Sans Arabic Variable**, so Kurdish renders consistently without contacting Google or depending on a visitor’s device.

To replace it with an approved Kurdish brand font:

1. Add `public/fonts/ZaneKurdish.woff2`.
2. Uncomment the `@font-face` block at the top of `app/globals.css`.

The `--font-ku` variable already checks for `Zane Kurdish` first. No component changes are required. More detail is in `public/fonts/README.md`.

## Logo

Replace `public/brand/zane-mark.png` with the approved transparent logo export while keeping the filename. The brand board is preserved at `public/brand/zane-brand-kit.png`. See `public/brand/README.md`.

## Donation decision

There is no donation checkout in this release. During registration, institutional partnership is the appropriate route. Add public donations only after the organization has:

- Final legal registration and a verified bank account
- A receipting and donor-record process
- Published privacy, refund and financial controls
- A payment provider approved for the organization and jurisdiction

## Required before formal public launch

- Replace registration placeholders with the certificate number, date and issuing authority
- Confirm board and leadership profiles
- Complete human Kurdish editing on every public page
- Approve full safeguarding, privacy, complaints, conflict-of-interest and whistleblowing policies
- Confirm a public visit address or explicitly remain appointment-only
- Verify all published health, development and family resources with qualified local experts
- Activate, test and assign owners for each form mailbox
- Complete an accessibility and mobile-device review

## Vercel deployment

Import `Azh4aa/ZaneFoundation` in Vercel. Vercel detects Next.js automatically. Keep the default build command (`npm run build`) and add the custom domain only after DNS and email ownership are confirmed.
