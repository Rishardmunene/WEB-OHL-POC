/* -----------------------------------------------------------------------------
 * Scroll reveal — refinement J-4.
 *
 * Spec §G requires IntersectionObserver rather than scroll listeners, and
 * requires revealing ONCE rather than on every re-entry. A single observer is
 * shared by every `.reveal` element on the page instead of one per element,
 * which keeps the observer count flat as sections are added.
 *
 * Elements unobserve themselves on reveal, so the observer drains to empty.
 *
 * Reduced motion: the CSS already renders `.reveal` fully visible under
 * `prefers-reduced-motion: reduce`, and this hook then skips observing entirely.
 * That also makes it fail safe — if the observer never runs, content is visible
 * rather than permanently transparent.
 * -------------------------------------------------------------------------- */

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const targets = document.querySelectorAll(".reveal:not(.is-visible)");
    for (const t of targets) observer.observe(t);

    return () => observer.disconnect();
  }, []);
}
