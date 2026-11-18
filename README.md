# Zane Organization website

A bilingual Sorani Kurdish and English public website for Zane Organization in Sulaymaniyah. It presents the organization’s mission, explains why inclusion matters and gives institutions a way to start a partnership conversation.

## Run locally

Use Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/ku`.

```sh
npm test
npm run lint
npm run build
```

Set `SITE_URL` to the verified custom origin if the project uses one. On Vercel, the assigned production origin is used automatically when available. The website uses local assets and does not require a data store or mail provider.

See [the website guide](WEBSITE-GUIDE.md) for editing routes and content.
