/* -----------------------------------------------------------------------------
 * Derive correctly-sized image variants — MASTER PROMPT §23 (oversized images).
 *
 * The fetched assets were sized generously, and the QA harness flagged 9 images
 * served at more than twice their rendered box — up to 4.9x for one reused
 * full-bleed file. Serving 2x the rendered size covers high-DPI displays;
 * beyond that is wasted bytes on the page's dominant payload.
 *
 * This runs entirely offline using macOS `sips`, so it needs no network. It is
 * idempotent: every output is written from an original that it never overwrites.
 *
 * It also gives blog cards 4-6 their own images. They previously reused an
 * attorney portrait and the 1920px-wide pre-footer band, which was both visibly
 * repetitive and the single worst oversizing case on the page.
 *
 * Usage: node tools/derive-assets.mjs
 * -------------------------------------------------------------------------- */

import { execFile } from "node:child_process";
import { mkdir, copyFile, rm, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const IMG = path.resolve("public/images");
const ORIG = path.join(IMG, "_originals");

/* `from` is resolved against _originals (falling back to the live file the first
   time). `w`/`h` are the intrinsic dimensions to store; when both are given the
   image is scaled to width and then centre-cropped to height. */
const DERIVED = [
  /* Testimonial avatars render in a 44px circle. 160px was 3.6x. */
  { out: "reviewer-1.jpg", from: "reviewer-1.jpg", w: 88, h: 88 },
  { out: "reviewer-2.jpg", from: "reviewer-2.jpg", w: 88, h: 88 },
  { out: "reviewer-3.jpg", from: "reviewer-3.jpg", w: 88, h: 88 },
  { out: "reviewer-4.jpg", from: "reviewer-4.jpg", w: 88, h: 88 },

  /* Intro collage — the reference pairs two portrait tiles (architecture and
     bookshelves) above one wide tile (a gavel). Built from assets already
     fetched for other slots so the collage needs no extra downloads.
     Tiles render around 276px wide inside the intro grid. */
  { out: "intro-primary.jpg", from: "blog-1.jpg", w: 550, h: 733 },
  { out: "intro-secondary.jpg", from: "form-background.jpg", w: 550, h: 733 },

  /* The wide collage tile renders around 605px at 16:9. */
  { out: "intro-wide.jpg", from: "blog-featured.jpg", w: 800, h: 450 },

  /* The history column is narrower than the collage, so the portrait needs its
     own smaller variant rather than sharing the 800px collage file. */
  { out: "history-portrait.jpg", from: "justice-statue.jpg", w: 590, h: 787 },

  /* Blog cards render around 390px wide at 4:3. */
  { out: "blog-1.jpg", from: "blog-1.jpg", w: 700, h: 525 },
  { out: "blog-2.jpg", from: "blog-2.jpg", w: 700, h: 525 },
  { out: "blog-3.jpg", from: "blog-3.jpg", w: 700, h: 525 },
  { out: "blog-4.jpg", from: "justice-statue.jpg", w: 700, h: 525 },
  { out: "blog-5.jpg", from: "attorney-2.jpg", w: 700, h: 525 },
  { out: "blog-6.jpg", from: "hero-background.jpg", w: 700, h: 525 },

  /* Full-bleed backgrounds render at viewport width; 1920 is only ~1.1x at the
     reference viewport, but the form background was 325kB, the heaviest file on
     the page, so it is trimmed. */
  { out: "form-background.jpg", from: "form-background.jpg", w: 1600, h: 1067 },
];

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function dimensions(file) {
  const { stdout } = await run("/usr/bin/sips", ["-g", "pixelWidth", "-g", "pixelHeight", file]);
  const w = Number(/pixelWidth:\s*(\d+)/.exec(stdout)?.[1]);
  const h = Number(/pixelHeight:\s*(\d+)/.exec(stdout)?.[1]);
  return { w, h };
}

/* Scale-to-COVER, then centre-crop.
 *
 * `sips -c` pads with black when the source aspect does not match the requested
 * crop, so resampling on the wrong axis first produces letterboxed images. That
 * bug put black bars on the portrait variants. Resampling on the axis that needs
 * the MORE aggressive scale guarantees both dimensions end up >= the target, so
 * the crop only ever removes pixels. */
async function coverCrop(file, targetW, targetH) {
  const { w: sw, h: sh } = await dimensions(file);
  const scale = Math.max(targetW / sw, targetH / sh);

  if (targetW / sw >= targetH / sh) {
    await run("/usr/bin/sips", ["--resampleWidth", String(Math.ceil(sw * scale)), file, "--out", file]);
  } else {
    await run("/usr/bin/sips", ["--resampleHeight", String(Math.ceil(sh * scale)), file, "--out", file]);
  }

  await run("/usr/bin/sips", ["-c", String(targetH), String(targetW), file, "--out", file]);
}

async function main() {
  await mkdir(ORIG, { recursive: true });

  /* Preserve one pristine copy of each source before any in-place derivation,
     so re-running never compounds resampling artefacts. */
  for (const src of new Set(DERIVED.map((d) => d.from))) {
    const keep = path.join(ORIG, src);
    if (!(await exists(keep))) await copyFile(path.join(IMG, src), keep);
  }

  const tmp = path.join(IMG, ".tmp.jpg");
  const report = [];

  for (const d of DERIVED) {
    const src = path.join(ORIG, d.from);
    const dest = path.join(IMG, d.out);

    await copyFile(src, tmp);
    await coverCrop(tmp, d.w, d.h);
    await copyFile(tmp, dest);

    const { size } = await stat(dest);
    report.push({ file: d.out, from: d.from, w: d.w, h: d.h, kb: Math.round(size / 1024) });
    console.log(`${d.out.padEnd(24)} ${String(d.w).padStart(4)}x${String(d.h).padEnd(4)} from ${d.from.padEnd(24)} ${Math.round(size / 1024)}kB`);
  }

  await rm(tmp, { force: true });

  /* Fold the derived dimensions back into the manifest so it stays the single
     description of what is actually on disk. */
  const manifestPath = path.join(IMG, "MANIFEST.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const byFile = new Map(report.map((r) => [`/images/${r.file}`, r]));

  for (const asset of manifest.assets) {
    const d = byFile.get(asset.file);
    if (!d) continue;
    asset.width = d.w;
    asset.height = d.h;
    asset.bytes = d.kb * 1024;
    asset.derivedFrom = d.from;
  }

  /* Variants that had no fetch entry of their own. */
  for (const r of report) {
    if (manifest.assets.some((a) => a.file === `/images/${r.file}`)) continue;
    manifest.assets.push({
      file: `/images/${r.file}`,
      role: "derived variant",
      width: r.w,
      height: r.h,
      bytes: r.kb * 1024,
      origin: "derived",
      derivedFrom: r.from,
      rationale: "sized to its rendered box; see tools/derive-assets.mjs",
    });
  }

  manifest.derivedBy = "tools/derive-assets.mjs";
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  const total = manifest.assets.reduce((n, a) => n + (a.bytes ?? 0), 0) / 1024;
  console.log(`\n${report.length} derived. Manifest updated. Total image payload ~${total.toFixed(0)}kB`);
}

main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
