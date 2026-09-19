/* -----------------------------------------------------------------------------
 * The signature ornamental separator — spec §C.6, corrections M-6 and M-12.
 *
 * Geometry is OBSERVED at pixel level from two independent occurrences (the hero
 * on dark, the attorneys heading on light). Both resolve to the same motif:
 *
 *   - two CONTINUOUS parallel gold hairlines running the full width
 *   - two short vertical gold hairlines that CROSS them and overhang top/bottom
 *   - one saturated gold node filling the cell at the intersection
 *
 * Correction M-12: the earlier build broke the horizontals into a short rule and
 * a long rule separated by a star. The rules are not broken — they run through,
 * and the verticals cross over them. The cross sits centred in section headings
 * and offset to roughly 22% in the hero.
 *
 * Measured bounding box: 38 x 18 px at a 744px-wide capture of the 1728px
 * reference, i.e. 0.051 x 0.024 of page width -> 88 x 42px at 1728.
 * -------------------------------------------------------------------------- */

type Variant = "default" | "center" | "flank-left" | "flank-right" | "wide";

const CLASS: Record<Variant, string> = {
  default: "ornament",
  center: "ornament ornament--center",
  "flank-left": "ornament ornament--flank ornament--flank-left",
  "flank-right": "ornament ornament--flank",
  wide: "ornament ornament--wide",
};

export default function OrnamentalDivider({ variant = "default" }: { variant?: Variant }) {
  return (
    <div className={CLASS[variant]} aria-hidden="true">
      <span className="ornament__rules" />
      <span className="ornament__cross" />
    </div>
  );
}
