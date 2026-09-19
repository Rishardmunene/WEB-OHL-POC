/* -----------------------------------------------------------------------------
 * Pre-footer image band — spec §B section 12. Correction H-1.
 *
 * This section is MISSING ENTIRELY from the forensic reconstruction, despite
 * being plainly visible in the screenshots. Full-bleed, height 0.172 x page width.
 *
 * Purely decorative, so it is hidden from assistive technology and carries empty
 * alt text rather than a description.
 * -------------------------------------------------------------------------- */

export default function PreFooterBand() {
  return (
    <div className="prefooter-band" data-qa="prefooter-band" aria-hidden="true">
      <img src="/images/prefooter-band.jpg" alt="" loading="lazy" width={1920} height={600} decoding="async" />
    </div>
  );
}
