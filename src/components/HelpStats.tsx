/* -----------------------------------------------------------------------------
 * Help / stats / partners — spec §B section 5. Corrections H-10, L-2, C-3, M-7.
 *
 * This is a LIGHT section, so it carries `on-light`, which switches --accent to
 * --gold-on-light. That is what prevents the observed #CFAF71 (2.10:1 on white)
 * from being used for text here — deviation J-5.
 *
 * It is also where the Stage 0 baseline's accessibility defect lived: the
 * forensic CSS set the stat boxes to `background:#fff` while the text colour
 * inherited white from the body, rendering 36px numerals at 1.05:1 contrast.
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";
import { lightStats, partners } from "@/content/home";

export default function HelpStats() {
  return (
    <section className="section section--light on-light" aria-labelledby="help-title">
      <div className="container">
        <div className="help__head section-head--center">
          <h2 className="section-heading" id="help-title">
            If you're in trouble
            <br />
            we can help.
          </h2>
          <OrnamentalDivider variant="center" />
          <p className="section-lead">
            There are of Lorem Ipsum available, but the majority have su alteration in some form, by
            injected humour, or which don't look even slightly believable.
          </p>
        </div>

        {/* Hairline below the stats row — hairline 4 of 7, spec §C.5. */}
        <div className="stats-row-wrap hairline-bottom">
          <div className="stats-row">
            {lightStats.map((stat) =>
              stat.variant === "photo" ? (
                /* Correction L-2: left-aligned, where the forensic centred it.
                   No icon, and a photographic background under a scrim strong
                   enough for the composited text to clear 4.5:1 (J-9). */
                <div className="stat-box stat-box--photo on-dark" key={stat.label}>
                  <img src={stat.image} alt="" loading="lazy" width={800} height={533} decoding="async" />
                  <div>
                    <p className="stat-box__value numeral">{stat.value}</p>
                    <p className="stat-box__label">{stat.label}</p>
                  </div>
                </div>
              ) : (
                /* Correction H-10: the number sits INSIDE a gold ring badge with
                   a small gold icon above it, beside a SERIF label and a small
                   muted line. The forensic put a 40px icon beside a bare number
                   in a bordered, shadowed white box. */
                <div className="stat-box stat-box--light" key={stat.label}>
                  <div className="stat-box__ring">
                    {stat.Icon && (
                      <stat.Icon className="stat-box__ring-icon" size={16} strokeWidth={1.5} aria-hidden="true" />
                    )}
                    <span className="stat-box__value numeral">{stat.value}</span>
                  </div>
                  <div>
                    <p className="stat-box__label">{stat.label}</p>
                    {stat.note && <p className="stat-box__note">{stat.note}</p>}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Correction M-7: ornaments flank the title on BOTH sides. The forensic
            placed a single separator below it. */}
        <div className="partners">
          <div className="partners__head">
            <OrnamentalDivider variant="flank-left" />
            <h3 className="partners__title">Meet The Partners</h3>
            <OrnamentalDivider variant="flank-right" />
          </div>

          {/* Partner logotypes are text stand-ins for logo artwork we do not
              have. Exempt from contrast requirements (spec §H.6). */}
          <ul className="partner-logos">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
