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
    access(new URL("public/brand/zane-mark.png", root)),
    access(new URL("public/brand/zane-brand-kit.png", root)),
    access(new URL("public/fonts/README.md", root)),
    access(new URL("content/README.md", root)),
  ]);
});

test("public site contains no internal strategy targets, budgets or risk register", async () => {
  const files = await Promise.all([
    readFile(new URL("app/[locale]/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/programs/page.tsx", root), "utf8"),
    readFile(new URL("app/[locale]/impact/page.tsx", root), "utf8"),
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

test("homepage keeps a single calm reading path", async () => {
  const home = await readFile(new URL("app/[locale]/page.tsx", root), "utf8");
  assert.doesNotMatch(home, /manifesto-marquee|symbol-orbit|program-bento|participation-grid|trust-matrix/);
  assert.match(home, /clarity-hero/);
  assert.match(home, /audience-paths/);
  assert.match(home, /work-index/);
});

test("volunteer and careers publishing files are present", async () => {
  await Promise.all([
    access(new URL("app/[locale]/get-involved/page.tsx", root)),
    access(new URL("app/[locale]/careers/page.tsx", root)),
    access(new URL("app/api/applications/route.ts", root)),
    access(new URL("content/opportunities.json", root)),
    access(new URL(".env.example", root)),
  ]);
});
