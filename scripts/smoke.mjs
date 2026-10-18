/**
 * Production-build smoke test.
 *
 * Runs against a real `next start` server (default http://localhost:3000) and
 * asserts the things a browser/Googlebot actually needs: every sitemap route
 * returns 200, every route has a unique non-empty title, a canonical URL that
 * matches the sitemap, and parseable JSON-LD.
 *
 * Usage:
 *   npm run build
 *   npm run start &            # or: npm run start in another shell
 *   npm run smoke
 */

const BASE = (process.env.SMOKE_BASE || "http://localhost:3000").replace(/\/$/, "");
const SITE = (process.env.SMOKE_SITE || "https://msbee.dpdns.org").replace(/\/$/, "");

let failures = 0;
let checks = 0;

function check(ok, label, detail = "") {
  checks += 1;
  if (ok) {
    console.log(`  PASS  ${label}`);
  } else {
    failures += 1;
    console.error(`  FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
  }
}

async function get(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  const body = res.status === 200 || res.headers.get("content-type")?.includes("text") ? await res.text() : "";
  return { status: res.status, headers: res.headers, body };
}

function title(body) {
  return (body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").replace(/\s+/g, " ").trim();
}

function canonical(body) {
  const m = body.match(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/i);
  return m?.[1] ?? "";
}

function metaDescription(body) {
  const m = body.match(/<meta[^>]+name="description"[^>]*content="([^"]*)"/i);
  return m?.[1] ?? "";
}

function jsonLdBodies(body) {
  const out = [];
  const re = /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(body))) out.push(m[1]);
  return out;
}

async function main() {
  console.log(`\nSmoke test → ${BASE}\n`);

  const robots = await get("/robots.txt");
  check(robots.status === 200, "GET /robots.txt → 200", `got ${robots.status}`);
  check(/sitemap:/i.test(robots.body), "robots.txt advertises a sitemap");

  const sitemap = await get("/sitemap.xml");
  check(sitemap.status === 200, "GET /sitemap.xml → 200", `got ${sitemap.status}`);
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check(locs.length > 10, `sitemap lists ${locs.length} URLs`);
  check(
    locs.some((u) => u === `${SITE}/work/zernons`),
    "sitemap includes /work/zernons"
  );
  check(
    locs.every((u) => u.startsWith(SITE)),
    "every sitemap URL is absolute on the canonical host"
  );

  const llms = await get("/llms.txt");
  check(llms.status === 200, "GET /llms.txt → 200", `got ${llms.status}`);

  const og = await get("/work/zernons/opengraph-image");
  check(
    og.status === 200 && (og.headers.get("content-type") || "").includes("image"),
    "GET /work/zernons/opengraph-image → image",
    `got ${og.status} ${og.headers.get("content-type")}`
  );

  const ogRoot = await get("/opengraph-image");
  check(
    ogRoot.status === 200 && (ogRoot.headers.get("content-type") || "").includes("image"),
    "GET /opengraph-image → image",
    `got ${ogRoot.status} ${ogRoot.headers.get("content-type")}`
  );

  const titles = new Map();
  const paths = [...new Set(locs.map((u) => u.replace(SITE, "") || "/"))];

  for (const path of paths) {
    const res = await get(path);
    check(res.status === 200, `GET ${path} → 200`, `got ${res.status}`);

    const t = title(res.body);
    check(t.length > 0, `${path} has a <title>`);
    check(t.length <= 75, `${path} title is not over-long (${t.length} chars)`, t);
    check(metaDescription(res.body).length > 0, `${path} has a meta description`);

    const canon = canonical(res.body);
    const expected = path === "/" ? [`${SITE}`, `${SITE}/`] : [`${SITE}${path}`];
    check(expected.includes(canon), `${path} canonical is correct`, canon);

    const ld = jsonLdBodies(res.body);
    check(ld.length > 0, `${path} ships JSON-LD`);
    for (const block of ld) {
      let parsed = false;
      try {
        JSON.parse(block);
        parsed = true;
      } catch {
        parsed = false;
      }
      check(parsed, `${path} JSON-LD block parses`);
    }

    if (titles.has(t)) {
      check(false, `${path} title is unique`, `duplicates ${titles.get(t)}`);
    } else {
      titles.set(t, path);
    }
  }

  console.log(`\n${checks - failures}/${checks} checks passed.\n`);
  if (failures) {
    console.error(`${failures} smoke check(s) failed.\n`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("\nSmoke test crashed:", err);
  process.exit(1);
});
