import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("every story has complete bilingual content and a unique safe slug", async () => {
  const stories = JSON.parse(await readFile(new URL("content/stories.json", root), "utf8"));
  assert.ok(stories.length >= 3);
  const slugs = new Set();
  for (const story of stories) {
    assert.match(story.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(!slugs.has(story.slug), `duplicate slug: ${story.slug}`);
    slugs.add(story.slug);
    for (const locale of ["en", "ku"]) {
      assert.ok(story.title[locale]?.trim());
      assert.ok(story.excerpt[locale]?.trim());
      assert.ok(story.kind[locale]?.trim());
      assert.ok(story.sections.length > 0);
      for (const section of story.sections) {
        assert.ok(section.heading[locale]?.trim());
        assert.ok(section.body[locale]?.length > 0);
      }
    }
  }
});

test("required brand and publishing guidance are present", async () => {
  await Promise.all([
    access(new URL("public/brand/zane-mark-v2.png", root)),
    access(new URL("public/brand/README.md", root)),
    access(new URL("public/og.png", root)),
    access(new URL("public/fonts/README.md", root)),
    access(new URL("content/README.md", root)),
    access(new URL("WEBSITE-GUIDE.md", root)),
  ]);
});

test("the homepage film, art-directed photography and source credits are present", async () => {
  for (const path of [
    "film/workshop-wide.mp4", "film/workshop-mobile.mp4", "film/workshop.webm",
    "images/workshop-poster.webp", "images/workshop-mobile-poster.webp", "images/classroom-painting.webp",
    "images/family-painting.webp", "images/table-conversation.webp",
  ]) await access(new URL(`public/${path}`, root));
  const credits = await readFile(new URL("app/[locale]/about/page.tsx", root), "utf8");
  assert.match(credits, /cottonbro studio/);
  assert.match(credits, /Antoni Shkraba/);
  assert.match(credits, /pexels\.com\/license/);
});

test("active brand system uses the approved navy, gold, mark and typography", async () => {
  const [brand, logo, globals] = await Promise.all([
    readFile(new URL("app/brand-v2.css", root), "utf8"),
    readFile(new URL("components/Logo.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);
  assert.match(brand, /#0d1b3d/i);
  assert.match(brand, /#d4a72c/i);
  assert.match(brand, /#f6f3e7/i);
  assert.match(brand, /Montserrat Variable/);
  assert.match(brand, /UniSIRWAN Montserrat/);
  assert.match(logo, /zane-mark-v2\.png/);
  assert.match(globals, /@fontsource-variable\/montserrat/);
  for (const weight of ["regular", "medium", "semibold", "bold"]) {
    const path = `fonts/unisirwan-montserrat-${weight}.woff2`;
    assert.ok(globals.includes(path));
    const font = await readFile(new URL(`public/${path}`, root));
    assert.equal(font.toString("ascii", 0, 4), "wOF2");
  }
});

test("public site contains no internal strategy targets, budgets or risk register", async () => {
  const files = await Promise.all([
    readFile(new URL("app/[locale]/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/programs/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/transparency/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/partner/page.tsx", root), "utf8"),
    readFile(new URL("content/stories.json", root), "utf8"),
    readFile(new URL("lib/site.ts", root), "utf8"),
  ]);
  for (const copy of files) {
    assert.doesNotMatch(copy, /year-one|year two|planning target|proposed target|planned budget|risk & mitigation|2,000|800K|65%|25%|10%/i);
  }
});

test("public institutional copy contains no private daughter narrative", async () => {
  const files = await Promise.all([
    readFile(new URL("app/[locale]/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/about/page.tsx", root), "utf8"),
    readFile(new URL("content/stories.json", root), "utf8"),
  ]);
  for (const copy of files) {
    assert.doesNotMatch(copy, /my daughter|founder.s daughter|کچەکەم/i);
  }
});

test("the homepage opens with the organization and keeps article choices and film controls accessible", async () => {
  const home = await readFile(new URL("app/[locale]/page.tsx", root), "utf8");
  const film = await readFile(new URL("components/HomeFilm.tsx", root), "utf8");
  const reader = await readFile(new URL("components/GuideReader.tsx", root), "utf8");
  assert.doesNotMatch(home + film, /images\/launch|launch campaign|location-dot|cover__location|images\/cafe/);
  assert.match(film, /site\.localName\[locale\]/);
  assert.match(film, /prefers-reduced-motion: reduce/);
  assert.match(film, /aria-controls="homepage-film"/);
  assert.match(reader, /type="radio"/);
  assert.match(reader, /aria-controls=/);
});

test("institutional copy states governance facts without trust-seeking language", async () => {
  const files = await Promise.all([
    readFile(new URL("app/[locale]/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/about/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/transparency/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/partner/page.tsx", root), "utf8"),
    readFile(new URL("components/SiteHeader.tsx", root), "utf8"),
    readFile(new URL("components/SiteFooter.tsx", root), "utf8"),
  ]);
  for (const copy of files) {
    assert.doesNotMatch(copy, /Governance & trust|Trust should be|depends on trust|بەڕێوەبردن و متمانە|متمانە دەبێت|متمانە بنەمای/i);
  }
});

test("the public contact links use the official profiles", async () => {
  const settings = await readFile(new URL("lib/site.ts", root), "utf8");
  assert.ok(settings.includes("https://www.linkedin.com/company/zane-organization/"));
  assert.ok(settings.includes("https://www.facebook.com/profile.php?id=61595047065509&sk=followers"));
  assert.ok(settings.includes("https://www.instagram.com/zaneorg.krd/"));
  assert.ok(settings.includes("info@zanefoundation.org"));
});

test("registration information uses the issuing authority and date", async () => {
  const facts = await readFile(new URL("app/[locale]/transparency/page.tsx", root), "utf8");
  assert.match(facts, /site\.registration\.authority/);
  assert.match(facts, /site\.registration\.dateTime/);
  assert.doesNotMatch(facts, /registrationNumber|certificateNumber/);
});
