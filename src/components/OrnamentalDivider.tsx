/* The reference's signature motif, used in 8+ places.
   Stage 0 reproduces the baseline's line-diamond-line approximation.
   M-6: evidence shows paired hairlines crossed by a vertical tick carrying a
   slim four-point star, asymmetric in section headings. Corrected in Stage 2. */
export default function OrnamentalDivider({ center = false }: { center?: boolean }) {
  return (
    <div className={center ? "separator center" : "separator"} aria-hidden="true">
      <div className="diamond" />
    </div>
  );
}
