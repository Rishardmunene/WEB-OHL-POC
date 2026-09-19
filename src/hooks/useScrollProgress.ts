/* -----------------------------------------------------------------------------
 * Header scroll progress — refinement J-2.
 *
 * Produces a 0..1 value over the first `distance` pixels so the header's
 * translucency, blur and compression can be interpolated CONTINUOUSLY rather
 * than swapped at a threshold (MASTER PROMPT §13 Stage 3 asks for a continuous
 * transition, not an abrupt state change).
 *
 * Performance constraints from spec §G:
 *   - exactly ONE passive scroll listener for the whole page
 *   - rAF-throttled, so at most one write per frame
 *   - the value is written to a CSS custom property, NOT to React state, so
 *     scrolling triggers zero re-renders
 * -------------------------------------------------------------------------- */

import { useEffect, type RefObject } from "react";

export function useScrollProgress(ref: RefObject<HTMLElement | null>, distance = 180) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let last = -1;

    const apply = () => {
      frame = 0;
      const next = Math.min(1, Math.max(0, window.scrollY / distance));
      /* Quantised to 1/100 so tiny scroll deltas don't cause style churn. */
      const rounded = Math.round(next * 100) / 100;
      if (rounded === last) return;
      last = rounded;
      el.style.setProperty("--scroll-progress", String(rounded));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref, distance]);
}
