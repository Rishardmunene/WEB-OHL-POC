/* -----------------------------------------------------------------------------
 * Intro — spec §B section 3. Corrections H-11, H-2, M-10, C-6, C-3.
 *
 * OBSERVED: a three-image collage (two portraits above, one wide below) beside
 * the heading, body copy, a script signature, and TWO stat tiles in normal flow.
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";
import { introStats } from "@/content/home";

export default function IntroSection() {
  return (
    <section className="section section--dark on-dark" aria-labelledby="intro-title">
      <div className="container intro__grid">
        {/* Correction H-11: three-image collage. The forensic rendered a single
            image, and correction C-6 removes the 40px corner radius it carried —
            the reference is square on every rectangular surface. */}
        <div className="collage reveal">
          <div className="collage__item collage__item--tall">
            <img src="/images/intro-primary.jpg" alt="Sculpture in the firm's reception" loading="lazy" width={550} height={733} decoding="async" />
          </div>
          <div className="collage__item collage__item--tall">
            <img src="/images/intro-secondary.jpg" alt="The firm's law library" loading="lazy" width={550} height={733} decoding="async" />
          </div>
          <div className="collage__item collage__item--wide">
            <img src="/images/intro-wide.jpg" alt="A statue of Lady Justice holding scales" loading="lazy" width={800} height={450} decoding="async" />
          </div>
        </div>

        <div className="reveal" style={{ ["--reveal-delay" as string]: "80ms" }}>
          <h2 className="section-heading" id="intro-title">
            The Simple Choice
            <br />
            for Complex Litigation
          </h2>
          <OrnamentalDivider />

          <p className="intro__body">
            There are many variations of passages of Lorem Ipsum available, but the majority have su
            alteration in some form, by injected humour, or randomised worlds which don't look even
            slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything.
          </p>

          {/* Correction M-10: the signature is set in a calligraphic script face.
              The forensic report missed this face entirely and used its serif. */}
          <div className="signature">
            <img src="/images/reviewer-3.jpg" alt="" loading="lazy" width={88} height={88} decoding="async" />
            <p className="signature__name">Dexter Devid</p>
          </div>

          {/* Correction H-2: in normal flow here, not floated out of the hero.
              Correction C-3: no shadow — the forensic gave these a 30px drop. */}
          <div className="stat-tiles">
            {introStats.map(({ value, label, variant, Icon }) => (
              <div key={label} className={`stat-tile stat-tile--${variant}`}>
                {variant === "gold" ? (
                  /* The gold tile puts its number inside a dark square badge —
                     OBSERVED. Dark on gold is 7.13:1; white would be 2.10:1 and
                     is forbidden (J-5). */
                  <span className="stat-tile__badge numeral">{value}</span>
                ) : (
                  Icon && <Icon className="stat-tile__icon" size={30} strokeWidth={1.25} aria-hidden="true" />
                )}
                <span>
                  {variant !== "gold" && <span className="stat-tile__value numeral">{value}</span>}
                  <span className="stat-tile__label" style={{ whiteSpace: "pre-line", display: "block" }}>
                    {label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
