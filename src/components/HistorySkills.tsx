/* -----------------------------------------------------------------------------
 * History & skills — spec §B section 6. Corrections H-6, H-7, M-8.
 *
 * One of three sections that BREAK the container: a full-bleed blurred
 * photograph with a translucent panel at container width on top. The forensic
 * reconstruction had neither the backdrop nor the panel.
 * -------------------------------------------------------------------------- */

import { useEffect, useRef } from "react";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { skills, timeline } from "@/content/home";

export default function HistorySkills() {
  const panelRef = useRef<HTMLDivElement>(null);

  /* Skill bars animate from 0 to their value on first entry — refinement.
     Driven by scaleX so it composites and never triggers layout (spec §D.2). */
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const bars = Array.from(panel.querySelectorAll<HTMLElement>(".skill__fill"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const settle = () => {
      for (const bar of bars) bar.style.setProperty("--skill-scale", "1");
    };

    if (reduced || typeof IntersectionObserver === "undefined") {
      settle();
      return;
    }

    for (const bar of bars) bar.style.setProperty("--skill-scale", "0");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        settle();
        observer.disconnect();
      },
      { threshold: 0.25 },
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="history on-dark" aria-labelledby="history-title">
      {/* Correction H-6. Spec §G requires this to be a PRE-BLURRED asset rather
          than a runtime filter: blur() on a full-bleed layer, which would cost a
          full-size GPU blur on every paint. Blurred server-side, so it is also
          only 15kB. */}
      <div className="history__backdrop">
        <img src="/images/history-backdrop.jpg" alt="" loading="lazy" width={1200} height={700} decoding="async" />
      </div>

      <div className="container">
        <div className="history__panel" ref={panelRef}>
          <div className="history__grid">
            <div>
              <h2 className="section-heading" id="history-title">
                We Are Top Lawyers
                <br />
                And History
              </h2>
              <OrnamentalDivider />

              {/* Correction H-7: no connector line, no markers, flush left. The
                  forensic added a 2px left border, gold dots and a 20px inset. */}
              <div className="timeline">
                {timeline.map(({ year, body }) => (
                  <div key={year}>
                    <h3 className="timeline__year">{year}</h3>
                    <p className="timeline__body">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="history__portrait">
              <img
                src="/images/history-portrait.jpg"
                alt="A statue of Lady Justice holding scales"
                loading="lazy"
                width={590}
                height={787}
                decoding="async"
              />
            </div>

            <div>
              <h2 className="section-heading">
                We Are Specialised
                <br />
                And Experienced
              </h2>
              <OrnamentalDivider />

              <p style={{ color: "var(--fg-muted)" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                deleniti atque corrupti quos molestias excepturi odio dignissimos.
              </p>

              <div className="skills">
                {skills.map(({ label, value }) => (
                  <div className="skill" key={label}>
                    <div className="skill__header">
                      <span>{label}</span>
                      <span className="numeral">{value}%</span>
                    </div>
                    {/* Exposed to assistive tech as a real progress bar; the
                        visual track and knob are decorative. */}
                    <div
                      className="skill__track"
                      role="meter"
                      aria-valuenow={value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={label}
                    >
                      <div className="skill__fill" style={{ width: `${value}%` }} />
                      {/* Correction M-8: gold circular knob at the fill
                          terminus, which the forensic omitted. */}
                      <span className="skill__knob" style={{ left: `${value}%` }} aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>

              <a className="btn btn--gold" href="#consultation">
                Free Consulting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
