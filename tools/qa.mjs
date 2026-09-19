/* -----------------------------------------------------------------------------
 * Visual QA harness — ratio-based, per PROMPT_AUDIT.md CONFLICT 7 / patch P9.
 *
 * MASTER PROMPT.md §32 asks for screenshots "at the same viewport dimensions as
 * the supplied references". That is impossible: the references are downscaled
 * full-page captures from an unknown viewport. Comparing at a guessed pixel size
 * produces false confidence.
 *
 * So this harness measures RATIOS from live element geometry and compares them
 * against the table in CONSOLIDATED_UI_SPEC.md §C.1, which was derived from the
 * screenshots. Ratios are viewport-independent, so they are directly comparable.
 *
 * Usage:  node tools/qa.mjs [--url=http://localhost:5173] [--out=qa] [--label=stage0]
 * -------------------------------------------------------------------------- */

import puppeteer from "puppeteer-core";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const URL_BASE = args.url ?? "http://localhost:5173";
const OUT = args.out ?? "qa";
const LABEL = args.label ?? "current";

/* Expected ratios, measured from the reference screenshots.
   `of` names the denominator: "page" = page width, "container" = container width. */
const EXPECTED = [
  { id: "container",        label: "Content container",        of: "page",      value: 0.737,  tol: 0.010 },
  { id: "grid3-col",        label: "3-col grid column",        of: "container", value: 0.320,  tol: 0.012 },
  { id: "grid3-gap",        label: "3-col grid gap",           of: "container", value: 0.020,  tol: 0.006 },
  { id: "testimonial-col",  label: "Testimonial column",       of: "container", value: 0.241,  tol: 0.015 },
  { id: "testimonial-gap",  label: "Testimonial gap",          of: "container", value: 0.013,  tol: 0.006 },
  { id: "attorney-gap",     label: "Attorney grid gap",        of: "container", value: 0.018,  tol: 0.006 },
  { id: "hero-height",      label: "Hero height",              of: "page",      value: 0.566,  tol: 0.030 },
  { id: "header-row1",      label: "Header row 1 height",      of: "page",      value: 0.077,  tol: 0.012 },
  { id: "header-total",     label: "Header total height",      of: "page",      value: 0.158,  tol: 0.018 },
  { id: "attorney-aspect",  label: "Attorney portrait w:h",    of: "self",      value: 0.678,  tol: 0.030 },
  { id: "band-height",      label: "Pre-footer band height",   of: "page",      value: 0.172,  tol: 0.020 },
];

/* Colors that must appear, and combinations that must not. */
const EXPECTED_COLORS = {
  "--surface-dark": "#1E2833",
  "--surface-deep": "#161D28",
  "--surface-raised": "#2F3A48",
  "--surface-light": "#FFFFFF",
  "--gold": "#CFAF71",
  "--gold-on-light": "#877249",
};

const VIEWPORTS = [
  { name: "1920", width: 1920, height: 1080 },
  { name: "1440", width: 1440, height: 900 },
  { name: "1280", width: 1280, height: 800 },
  { name: "1024", width: 1024, height: 768 },
  { name: "768", width: 768, height: 1024 },
  { name: "480", width: 480, height: 800 },
  { name: "390", width: 390, height: 844 },
  { name: "375", width: 375, height: 812 },
];

/* Runs in the page. Returns raw pixel geometry; ratios are computed outside. */
function measure() {
  const px = (el) => (el ? el.getBoundingClientRect() : null);
  const q = (s) => document.querySelector(s);
  const qa = (s) => Array.from(document.querySelectorAll(s));

  const pageWidth = document.documentElement.clientWidth;
  const out = { pageWidth, measured: {}, notes: [] };

  const container = q("[data-qa='container'], .container");
  if (container) out.measured.container = px(container).width;
  else out.notes.push("no container element found");

  const grid3 = q("[data-qa='grid-3'], .practice-grid");
  if (grid3) {
    const kids = Array.from(grid3.children).map(px);
    if (kids.length >= 2) {
      out.measured["grid3-col"] = kids[0].width;
      out.measured["grid3-gap"] = kids[1].left - kids[0].right;
    }
  }

  const tGrid = q("[data-qa='grid-testimonials'], .reviews-grid");
  if (tGrid) {
    const kids = Array.from(tGrid.children).map(px);
    if (kids.length >= 2) {
      out.measured["testimonial-col"] = kids[0].width;
      out.measured["testimonial-gap"] = kids[1].left - kids[0].right;
      out.measured["testimonial-count"] = kids.length;
    }
  }

  const aGrid = q("[data-qa='grid-attorneys'], .attorneys-grid");
  if (aGrid) {
    const kids = Array.from(aGrid.children).map(px);
    if (kids.length >= 2) out.measured["attorney-gap"] = kids[1].left - kids[0].right;
  }

  const hero = q("[data-qa='hero'], .hero");
  if (hero) out.measured["hero-height"] = px(hero).height;

  const row1 = q("[data-qa='header-row-1'], .header-top");
  if (row1) out.measured["header-row1"] = px(row1).height;
  const header = q("[data-qa='header'], .header");
  if (header) out.measured["header-total"] = px(header).height;

  const portrait = q("[data-qa='attorney-portrait'], .attorney-card img");
  if (portrait) {
    const r = px(portrait);
    out.measured["attorney-aspect"] = r.height > 0 ? r.width / r.height : null;
  }

  const band = q("[data-qa='prefooter-band']");
  out.measured["band-height"] = band ? px(band).height : null;
  if (!band) out.notes.push("pre-footer image band absent (gap analysis H-1)");

  /* Surface audit: any non-zero radius or shadow on a rectangular surface is a
     deviation that must be logged in the register. */
  const radiusOffenders = [];
  const shadowOffenders = [];
  for (const el of qa("div, section, article, button, a, input, textarea, img, header, footer")) {
    const cs = getComputedStyle(el);
    const r = cs.borderRadius;
    const isCircle = r.includes("50%") || parseFloat(r) >= 999;
    if (!isCircle && parseFloat(r) > 0) {
      radiusOffenders.push({ tag: el.tagName.toLowerCase(), cls: el.className?.toString().slice(0, 48), radius: r });
    }
    if (cs.boxShadow && cs.boxShadow !== "none") {
      shadowOffenders.push({ tag: el.tagName.toLowerCase(), cls: el.className?.toString().slice(0, 48), shadow: cs.boxShadow.slice(0, 60) });
    }
  }
  out.radiusOffenders = radiusOffenders.slice(0, 40);
  out.radiusOffenderCount = radiusOffenders.length;
  out.shadowOffenders = shadowOffenders.slice(0, 40);
  out.shadowOffenderCount = shadowOffenders.length;

  /* Structural counts that the gap analysis tracks. */
  out.counts = {
    practiceCards: qa("[data-qa='practice-card'], .practice-card").length,
    testimonialCards: qa("[data-qa='testimonial-card'], .review-card").length,
    blogCards: qa("[data-qa='blog-card'], .blog-card").length,
    attorneyCards: qa("[data-qa='attorney-card'], .attorney-card").length,
    sections: qa("main > section, main > * > section").length,
    h1: qa("h1").length,
  };

  /* Asset audit (MASTER PROMPT §21) + alt text (§24) + lazy loading (§23).
     naturalWidth === 0 on a complete image means it failed to decode. */
  out.images = qa("img").map((img) => ({
    src: (img.currentSrc || img.src || "").slice(0, 90),
    broken: img.complete && img.naturalWidth === 0,
    alt: img.getAttribute("alt"),
    loading: img.getAttribute("loading"),
    hasDims: img.hasAttribute("width") && img.hasAttribute("height"),
    renderedW: Math.round(px(img).width),
    naturalW: img.naturalWidth,
  }));
  out.imageIssues = {
    broken: out.images.filter((i) => i.broken).length,
    missingAlt: out.images.filter((i) => i.alt === null).length,
    notLazy: out.images.filter((i) => i.loading !== "lazy").length,
    missingDims: out.images.filter((i) => !i.hasDims).length,
    /* Serving >2x the rendered box wastes bytes (§23 oversized images). */
    oversized: out.images.filter((i) => i.naturalW > 0 && i.renderedW > 0 && i.naturalW > i.renderedW * 2).length,
  };

  /* Icon-family audit (§16): FontAwesome <i> vs lucide <svg>. */
  out.icons = {
    fontAwesome: qa("i[class*='fa-'], i.fas, i.far, i.fab").length,
    svg: qa("svg").length,
  };

  /* Design tokens actually resolved at the root. */
  const rootStyle = getComputedStyle(document.documentElement);
  out.tokens = {};
  for (const name of ["--surface-dark", "--surface-deep", "--surface-raised", "--surface-light", "--gold", "--gold-on-light", "--container-max", "--radius-surface"]) {
    const v = rootStyle.getPropertyValue(name).trim();
    if (v) out.tokens[name] = v;
  }

  return out;
}

/* WCAG relative luminance + contrast, computed on rendered colors. */
function contrastAudit() {
  const lin = (c) => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const parse = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(",").map((x) => parseFloat(x));
    return { rgb: [p[0], p[1], p[2]], a: p[3] ?? 1 };
  };
  /* Walk up for the first opaque background. */
  const bgOf = (el) => {
    let n = el;
    while (n && n !== document.documentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a >= 0.95) return c.rgb;
      n = n.parentElement;
    }
    return [255, 255, 255];
  };

  const failures = [];
  const textish = "p, span, a, h1, h2, h3, h4, h5, h6, li, small, strong, label, button, input, textarea, div";
  for (const el of Array.from(document.querySelectorAll(textish))) {
    const hasOwnText = Array.from(el.childNodes).some(
      (n) => n.nodeType === 3 && n.textContent.trim().length > 0,
    );
    if (!hasOwnText) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.1) continue;
    const fg = parse(cs.color);
    if (!fg) continue;
    const ratio = (() => {
      const a = lum(fg.rgb), b = lum(bgOf(el));
      const hi = Math.max(a, b), lo = Math.min(a, b);
      return (hi + 0.05) / (lo + 0.05);
    })();
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const isLarge = size >= 24 || (size >= 18.66 && bold);
    const required = isLarge ? 3.0 : 4.5;
    if (ratio < required) {
      failures.push({
        text: el.textContent.trim().slice(0, 44),
        color: cs.color,
        size: Math.round(size),
        ratio: Math.round(ratio * 100) / 100,
        required,
      });
    }
  }
  /* Dedupe by colour+size+required. */
  const seen = new Set();
  return failures.filter((f) => {
    const k = `${f.color}|${f.size}|${f.required}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

async function run() {
  await mkdir(OUT, { recursive: true });
  /* Profile must live inside the workspace: the agent sandbox blocks writes to
     ~/Library/Application Support, which is where Chrome puts crashpad. */
  const profileDir = path.resolve(".qa-chrome-profile");
  await mkdir(profileDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    userDataDir: profileDir,
    args: [
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--no-sandbox",
      "--disable-crash-reporter",
      "--disable-breakpad",
      "--no-first-run",
      "--no-default-browser-check",
      `--crash-dumps-dir=${path.join(profileDir, "crashes")}`,
    ],
  });

  const report = { label: LABEL, url: URL_BASE, when: new Date().toISOString(), viewports: {} };

  try {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();

      /* §25 requires "no console errors", and a failed image request is the
         difference between a real asset and a dead hotlink. Collect both. */
      const consoleErrors = [];
      const failedRequests = [];
      page.on("console", (m) => {
        if (m.type() === "error") consoleErrors.push(m.text().slice(0, 160));
      });
      page.on("pageerror", (e) => consoleErrors.push(`pageerror: ${String(e.message).slice(0, 160)}`));
      page.on("requestfailed", (r) =>
        failedRequests.push({
          url: r.url().slice(0, 100),
          type: r.resourceType(),
          reason: r.failure()?.errorText ?? "unknown",
        }),
      );
      page.on("response", (r) => {
        if (r.status() >= 400) {
          failedRequests.push({ url: r.url().slice(0, 100), type: r.request().resourceType(), reason: `HTTP ${r.status()}` });
        }
      });

      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
      await page.goto(URL_BASE, { waitUntil: "networkidle2", timeout: 60000 });
      /* Images can still be decoding after networkidle2. */
      await page.evaluate(() =>
        Promise.all(
          Array.from(document.images)
            .filter((i) => !i.complete)
            .map((i) => new Promise((res) => { i.onload = i.onerror = res; })),
        ),
      );
      await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => r())));

      const raw = await page.evaluate(measure);
      const denom = { page: raw.pageWidth, container: raw.measured.container ?? raw.pageWidth, self: 1 };

      const checks = EXPECTED.map((e) => {
        const m = raw.measured[e.id];
        if (m == null) return { ...e, actual: null, ratio: null, status: "MISSING" };
        const ratio = e.of === "self" ? m : m / denom[e.of];
        const delta = ratio - e.value;
        return {
          ...e,
          actual: Math.round(m * 10) / 10,
          ratio: Math.round(ratio * 10000) / 10000,
          delta: Math.round(delta * 10000) / 10000,
          status: Math.abs(delta) <= e.tol ? "PASS" : "FAIL",
        };
      });

      const contrast = await page.evaluate(contrastAudit);

      /* Horizontal overflow: the single most common responsive failure, and the
         reason a 390px capture comes back 920px wide. */
      const overflow = await page.evaluate(() => {
        const docW = document.documentElement.clientWidth;
        const scrollW = document.documentElement.scrollWidth;
        const culprits = [];
        if (scrollW > docW + 1) {
          for (const el of Array.from(document.querySelectorAll("body *"))) {
            const r = el.getBoundingClientRect();
            if (r.width > 0 && r.right > docW + 1) {
              culprits.push({
                tag: el.tagName.toLowerCase(),
                cls: el.className?.toString().slice(0, 40),
                right: Math.round(r.right),
                width: Math.round(r.width),
              });
            }
          }
        }
        return { docW, scrollW, overflowPx: Math.max(0, scrollW - docW), culprits: culprits.slice(0, 10) };
      });

      report.viewports[vp.name] = {
        viewport: vp,
        pageWidth: raw.pageWidth,
        containerPx: raw.measured.container ?? null,
        checks,
        counts: raw.counts,
        tokens: raw.tokens,
        radiusOffenderCount: raw.radiusOffenderCount,
        radiusOffenders: raw.radiusOffenders,
        shadowOffenderCount: raw.shadowOffenderCount,
        shadowOffenders: raw.shadowOffenders,
        contrastFailures: contrast,
        overflow,
        imageIssues: raw.imageIssues,
        brokenImages: raw.images.filter((i) => i.broken),
        icons: raw.icons,
        consoleErrors,
        failedRequests: failedRequests.slice(0, 20),
        notes: raw.notes,
      };

      if (vp.name === "1440" || vp.name === "390") {
        await page.screenshot({
          path: path.join(OUT, `${LABEL}-${vp.name}-full.png`),
          fullPage: true,
        });
      }
      await page.close();
    }

    /* Scrolled-header state at the primary desktop width (refinement J-2). */
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(URL_BASE, { waitUntil: "networkidle2", timeout: 60000 });
    await page.screenshot({ path: path.join(OUT, `${LABEL}-header-top.png`), clip: { x: 0, y: 0, width: 1440, height: 260 } });
    await page.evaluate(() => window.scrollTo(0, 900));
    await new Promise((r) => setTimeout(r, 700));
    await page.screenshot({ path: path.join(OUT, `${LABEL}-header-scrolled.png`), clip: { x: 0, y: 0, width: 1440, height: 260 } });
    await page.close();
  } finally {
    await browser.close();
  }

  await writeFile(path.join(OUT, `${LABEL}-report.json`), JSON.stringify(report, null, 2));

  /* Console summary. */
  const d = report.viewports["1440"];
  console.log(`\n=== RATIO QA @1440 (${LABEL}) ===`);
  console.log(`page ${d.pageWidth}px   container ${d.containerPx}px\n`);
  console.log("check                        expected   actual    delta   status");
  for (const c of d.checks) {
    const r = c.ratio == null ? "  --  " : String(c.ratio).padEnd(7);
    const dl = c.delta == null ? "  --  " : (c.delta >= 0 ? "+" : "") + String(c.delta);
    console.log(`${c.label.padEnd(28)} ${String(c.value).padEnd(9)} ${r} ${String(dl).padEnd(8)} ${c.status}`);
  }
  console.log("\ncounts:", JSON.stringify(d.counts));
  console.log("tokens:", JSON.stringify(d.tokens));
  console.log("icons:", JSON.stringify(d.icons));
  console.log(`radius offenders: ${d.radiusOffenderCount}   shadow offenders: ${d.shadowOffenderCount}`);
  console.log("images:", JSON.stringify(d.imageIssues));
  for (const b of d.brokenImages.slice(0, 8)) console.log(`   BROKEN  ${b.src}`);
  console.log(`contrast failures (unique fg/size): ${d.contrastFailures.length}`);
  for (const f of d.contrastFailures.slice(0, 12)) {
    console.log(`   ${f.ratio}:1 (needs ${f.required}) ${f.color} ${f.size}px  "${f.text}"`);
  }
  if (d.consoleErrors.length) {
    console.log(`console errors: ${d.consoleErrors.length}`);
    for (const e of d.consoleErrors.slice(0, 6)) console.log(`   ${e}`);
  }
  if (d.failedRequests.length) {
    console.log(`failed requests: ${d.failedRequests.length}`);
    for (const r of d.failedRequests.slice(0, 6)) console.log(`   ${r.reason}  ${r.type}  ${r.url}`);
  }
  if (d.notes.length) console.log("notes:", d.notes.join(" | "));

  /* Overflow across every tested width — §22 responsive validation. */
  console.log("\n=== HORIZONTAL OVERFLOW BY VIEWPORT ===");
  for (const [name, v] of Object.entries(report.viewports)) {
    const flag = v.overflow.overflowPx > 1 ? `OVERFLOW +${v.overflow.overflowPx}px` : "ok";
    console.log(`  ${name.padEnd(5)} client=${String(v.overflow.docW).padEnd(5)} scroll=${String(v.overflow.scrollW).padEnd(5)} ${flag}`);
    if (v.overflow.overflowPx > 1) {
      for (const c of v.overflow.culprits.slice(0, 3)) {
        console.log(`          ${c.tag}.${c.cls} right=${c.right} w=${c.width}`);
      }
    }
  }

  const failed = d.checks.filter((c) => c.status === "FAIL").length;
  const missing = d.checks.filter((c) => c.status === "MISSING").length;
  console.log(`\nSUMMARY  pass=${d.checks.length - failed - missing}  fail=${failed}  missing=${missing}\n`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
