import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import {
  projects,
  getProject,
  getFeaturedProjects,
  getSupportingProjects,
  getRelatedProjects,
  projectTypeLabels,
} from "../content/work.ts";
import { solutions } from "../content/solutions.ts";
import { products } from "../content/products.ts";
import { labs, articles } from "../content/labs-insights.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicPath = (src) => join(root, "public", src.replace(/^\//, ""));

test("every content type has unique slugs", () => {
  for (const [label, items] of [
    ["projects", projects],
    ["solutions", solutions],
    ["products", products],
    ["labs", labs],
    ["articles", articles],
  ]) {
    const slugs = items.map((i) => i.slug);
    const unique = new Set(slugs);
    assert.equal(unique.size, slugs.length, `${label} has duplicate slugs`);
  }
});

test("Zernons is present, classified as client work and featured first", () => {
  const z = getProject("zernons");
  assert.ok(z, "zernons project is missing");
  assert.equal(z.type, "client", "zernons must be typed as client work");
  assert.equal(z.featured, true, "zernons must be featured");
  assert.equal(z.featuredRank, 1, "zernons must rank first");
  assert.equal(z.liveUrl, "https://www.zernons.lk/");
  assert.ok(z.gallery && z.gallery.length >= 3, "zernons needs real screenshots");
  assert.ok(z.caseStudy && z.caseStudy.length >= 3, "zernons needs long-form sections");
});

test("featured ordering is deterministic and excludes concept builds", () => {
  const featured = getFeaturedProjects();
  assert.deepEqual(
    featured.map((p) => p.slug),
    ["zernons", "orikma"]
  );
  for (const p of featured) {
    assert.equal(p.type, "client", `${p.slug} is featured but is not client work`);
  }
});

test("featured and supporting slots never overlap", () => {
  const featured = new Set(getFeaturedProjects().map((p) => p.slug));
  const supporting = getSupportingProjects().map((p) => p.slug);
  for (const slug of supporting) {
    assert.ok(!featured.has(slug), `${slug} appears in both featured and supporting`);
  }
  assert.equal(featured.size + supporting.length, projects.length);
});

test("related projects never include the current project and respect the limit", () => {
  for (const p of projects) {
    const related = getRelatedProjects(p.slug, 2);
    assert.ok(related.length <= 2);
    assert.ok(!related.some((r) => r.slug === p.slug), `${p.slug} relates to itself`);
  }
});

test("every project type has a public label", () => {
  for (const p of projects) {
    assert.ok(projectTypeLabels[p.type], `${p.slug} has an unlabelled type: ${p.type}`);
    assert.ok(["client", "demo", "internal"].includes(p.type));
  }
});

test("concept projects are labelled as concepts in their industry", () => {
  for (const p of projects.filter((x) => x.type === "demo")) {
    assert.match(p.industry, /\(concept\)/, `${p.slug} is a concept but not labelled as one`);
  }
});

test("gallery screenshots exist on disk and carry alt text", () => {
  for (const p of projects) {
    for (const shot of p.gallery ?? []) {
      assert.ok(shot.alt && shot.alt.length > 20, `${p.slug} shot missing meaningful alt`);
      assert.ok(shot.width > 0 && shot.height > 0, `${p.slug} shot missing dimensions`);
      assert.ok(shot.src.endsWith(".webp"), `${shot.src} should be webp`);
      const file = publicPath(shot.src);
      assert.ok(existsSync(file), `missing screenshot file ${shot.src}`);
      assert.ok(statSync(file).size > 1000, `${shot.src} looks empty`);
    }
  }
});

test("titles and descriptions are non-empty and unique where they matter", () => {
  const seenTitles = new Set();
  for (const p of projects) {
    assert.ok(p.title.trim());
    assert.ok(p.description.trim().length > 40, `${p.slug} description too short`);
    assert.ok(!seenTitles.has(p.title), `duplicate project title: ${p.title}`);
    seenTitles.add(p.title);
  }
  const seenArticles = new Set();
  for (const a of articles) {
    assert.ok(!seenArticles.has(a.title), `duplicate article title: ${a.title}`);
    seenArticles.add(a.title);
  }
});

test("no project claims unverified metrics, prices or testimonials", () => {
  const banned = [
    /\b\d+\s?%\s?(increase|growth|boost|uplift|conversion)/i,
    /\b(testimonial|client said|feedback from the client)/i,
    /\b(revenue|ROI|conversion rate)\b/i,
  ];
  for (const p of projects) {
    const blob = [
      p.description,
      p.problem,
      p.objective,
      p.solution,
      ...(p.caseStudy ?? []).map((s) => `${s.body} ${(s.bullets ?? []).join(" ")}`),
      ...p.features,
    ].join(" ");
    for (const rule of banned) {
      assert.ok(!rule.test(blob), `${p.slug} contains a banned claim pattern: ${rule}`);
    }
  }
});

test("Zernons copy stays quote-first — no invented checkout or payment", () => {
  const z = getProject("zernons");
  const blob = [z.solution, ...z.features, ...(z.caseStudy ?? []).map((s) => `${s.body} ${(s.bullets ?? []).join(" ")}`)].join(" ");
  assert.match(blob, /no (online )?checkout/i, "zernons must state there is no checkout");
  assert.match(blob, /no online payment|no .*payment/i, "zernons must state there is no online payment");
});

test("solutions reference only projects that exist", () => {
  const slugs = new Set(projects.map((p) => p.slug));
  for (const s of solutions) {
    for (const slug of s.relatedWork) {
      assert.ok(slugs.has(slug), `${s.slug} references unknown project ${slug}`);
    }
  }
});
