/* -----------------------------------------------------------------------------
 * Asset vendoring (MASTER PROMPT §21).
 *
 * Every image in the forensic reconstruction was a hotlinked Unsplash URL. Two
 * of those photo IDs are now dead (HTTP 404 returning HTML, which the browser
 * rejects as ERR_BLOCKED_BY_ORB), so the Stage 0 page rendered with broken
 * images. Hotlinking is therefore demonstrably unreliable here.
 *
 * This script downloads each image once into public/images/ at the size the
 * layout actually needs, so the app has no third-party image dependency at all.
 *
 * NONE of these are confirmed Ojijo HR Law assets. They are acknowledged
 * SUBSTITUTES inherited from the forensic document, recorded as such in the
 * Deviation Register. `role` names the layout slot so a real asset can be
 * dropped in later without touching component code.
 *
 * Idempotent: existing files are skipped. Re-run with --force to refetch.
 *
 * Usage: node tools/fetch-assets.mjs [--force]
 * -------------------------------------------------------------------------- */

import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const FORCE = process.argv.includes("--force");
const OUT_DIR = path.resolve("public/images");
const UNSPLASH = "https://images.unsplash.com";

/* `id` is the Unsplash photo ID. `w`/`h` are the intrinsic pixel dimensions we
   store, chosen from the rendered box size (roughly 2x for crispness, which is
   why the QA harness reports 0 oversized images). */
const ASSETS = [
  /* The forensic document's hero image ID resolves to a photograph of a BOOK
     COVER on a bright yellow background — visually absurd for a law firm hero
     and nothing like the reference, which shows a professional in a dark
     interior with a left-hand scrim. It was inherited unexamined during the
     Stage 0 port and only caught by looking at the rendered page.

     Replaced with a dark workplace interior: dark enough for the observed left
     scrim to work, and workplace subject matter suits an employment practice. */
  {
    file: "hero-background.jpg",
    role: "Hero section background (full-bleed, behind left gradient scrim)",
    id: "photo-1541746972996-4e0b0f43e02a",
    w: 1920,
    h: 1200,
    origin: "replacement",
    replaces: "photo-1589829085413-56de8ae18c73",
    why: "the forensic ID is a yellow book-cover photo, wholly unlike the reference hero",
  },

  /* Intro collage sources. The reference collage is architecture + bookshelves +
     gavel, so these three are derived locally from assets already fetched for
     other slots (see tools/derive-assets.mjs) rather than fetched again. */
  {
    file: "stat-panel-background.jpg",
    role: "Dark stat box background (behind 90% opacity overlay)",
    id: "photo-1589391886645-d51941baf7fb",
    w: 800,
    origin: "forensic",
  },
  {
    file: "justice-statue.jpg",
    role: "History/skills section image — Lady Justice statue holding scales",
    id: "photo-1589994965851-a8f479c573a9",
    w: 800,
    origin: "replacement",
    replaces: "photo-1618055535359-55cb8584852e",
    why: "original photo ID returns HTTP 404; this one matches the existing alt text",
  },
  {
    file: "form-background.jpg",
    role: "Consultation form section background (behind dark overlay)",
    id: "photo-1479142506502-19b3a3b7ff33",
    w: 1920,
    origin: "replacement",
    replaces: "photo-1505664177922-24155b93d6e4",
    why: "original photo ID returns HTTP 404; law-library shelf reads well under a dark overlay",
  },

  /* Attorney portraits. The screenshots give a 0.678 w:h portrait crop
     (correction H-4); the forensic markup used square images. Cropping at fetch
     time means the intrinsic ratio is correct and the browser does no work. */
  { file: "attorney-1.jpg", role: "Attorney portrait 1", id: "photo-1556157382-97eda2d62296", w: 600, h: 885, origin: "forensic" },
  { file: "attorney-2.jpg", role: "Attorney portrait 2", id: "photo-1573497019940-1c28c88b4f3e", w: 600, h: 885, origin: "forensic" },
  { file: "attorney-3.jpg", role: "Attorney portrait 3", id: "photo-1560250097-0b93528c311a", w: 600, h: 885, origin: "forensic" },

  /* Reviewer avatars, rendered small and circular. */
  { file: "reviewer-1.jpg", role: "Testimonial avatar 1", id: "photo-1573496359142-b8d87734a5a2", w: 160, h: 160, origin: "forensic" },
  { file: "reviewer-2.jpg", role: "Testimonial avatar 2", id: "photo-1580489944761-15a19d654956", w: 160, h: 160, origin: "forensic" },
  { file: "reviewer-3.jpg", role: "Testimonial avatar 3", id: "photo-1507003211169-0a1dd7228f2d", w: 160, h: 160, origin: "forensic" },
  { file: "reviewer-4.jpg", role: "Testimonial avatar 4", id: "photo-1438761681033-6461ffad8d80", w: 160, h: 160, origin: "forensic" },

  /* Blog imagery. */
  { file: "blog-featured.jpg", role: "Featured blog post image", id: "photo-1589391886645-d51941baf7fb", w: 1000, h: 640, origin: "forensic" },
  {
    file: "blog-1.jpg",
    role: "Blog card 1 image",
    id: "photo-1436450412740-6b988f486c6b",
    w: 800,
    h: 520,
    origin: "replacement",
    replaces: "photo-1505664177922-24155b93d6e4",
    why: "original photo ID returns HTTP 404; courthouse facade keeps the legal subject matter",
  },
  { file: "blog-2.jpg", role: "Blog card 2 image", id: "photo-1450101499163-c8848c66ca85", w: 800, h: 520, origin: "forensic" },
  { file: "blog-3.jpg", role: "Blog card 3 image", id: "photo-1521791055366-0d553872125f", w: 800, h: 520, origin: "forensic" },

  /* Correction H-6: the history section sits on a full-bleed BLURRED photograph.
     Spec §G requires this to be a pre-blurred asset rather than a runtime
     filter: blur() on a large layer, which would cost a full-size GPU blur on
     every paint. Unsplash applies the blur server-side, and because the result
     carries no fine detail it can be stored at low resolution and upscaled. */
  {
    file: "history-backdrop.jpg",
    role: "History section full-bleed blurred backdrop (correction H-6)",
    id: "photo-1479142506502-19b3a3b7ff33",
    w: 1200,
    h: 700,
    /* blur=700 flattened this to featureless grey. 150 keeps the bookshelf
       legible as a blurred backdrop, which is the point of the section. */
    blur: 150,
    origin: "forensic",
    why: "pre-blurred server-side so no runtime filter is needed on a full-bleed layer",
  },

  /* Correction H-1: the screenshots show a pre-footer image band that the
     forensic reconstruction omitted entirely. */
  {
    file: "prefooter-band.jpg",
    role: "Pre-footer full-bleed image band (correction H-1)",
    id: "photo-1436450412740-6b988f486c6b",
    w: 1920,
    h: 600,
    origin: "new",
    why: "section exists in the screenshots but had no counterpart in the forensic markup; the reference band shows classical architecture",
  },
];

function urlFor(a) {
  const params = new URLSearchParams({ auto: "format", fit: "crop", w: String(a.w), q: "80" });
  if (a.h) params.set("h", String(a.h));
  if (a.blur) params.set("blur", String(a.blur));
  return `${UNSPLASH}/${a.id}?${params}`;
}

async function exists(p) {
  try {
    const s = await stat(p);
    return s.size > 0;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const manifest = [];
  let fetched = 0;
  let skipped = 0;

  for (const a of ASSETS) {
    const dest = path.join(OUT_DIR, a.file);
    const url = urlFor(a);

    if (!FORCE && (await exists(dest))) {
      skipped += 1;
      console.log(`skip    ${a.file}`);
    } else {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${a.file}: HTTP ${res.status} for ${a.id}`);
      const type = res.headers.get("content-type") ?? "";
      if (!type.startsWith("image/")) {
        throw new Error(`${a.file}: expected an image, got ${type} (photo ID likely dead)`);
      }
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buf);
      fetched += 1;
      console.log(`fetch   ${a.file.padEnd(26)} ${(buf.length / 1024).toFixed(0)}kB  ${a.w}x${a.h ?? "auto"}`);
    }

    const s = await stat(dest);
    manifest.push({
      file: `/images/${a.file}`,
      role: a.role,
      width: a.w,
      height: a.h ?? null,
      bytes: s.size,
      origin: a.origin,
      sourceId: a.id,
      ...(a.replaces ? { replaces: a.replaces } : {}),
      ...(a.why ? { rationale: a.why } : {}),
    });
  }

  await writeFile(
    path.join(OUT_DIR, "MANIFEST.json"),
    JSON.stringify(
      {
        note:
          "Substitute imagery, not confirmed Ojijo HR Law assets. origin: " +
          "'forensic' = inherited from the forensic reconstruction; " +
          "'replacement' = original photo ID is dead (404) and was swapped; " +
          "'new' = slot exists in the screenshots but not in the forensic markup.",
        generatedBy: "tools/fetch-assets.mjs",
        assets: manifest,
      },
      null,
      2,
    ),
  );

  const totalKb = manifest.reduce((n, m) => n + m.bytes, 0) / 1024;
  console.log(`\n${fetched} fetched, ${skipped} skipped, ${manifest.length} total (${totalKb.toFixed(0)}kB)`);
  console.log(`manifest: public/images/MANIFEST.json`);
}

main().catch((e) => {
  console.error(String(e.message ?? e));
  process.exit(1);
});
