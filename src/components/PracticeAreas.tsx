/* -----------------------------------------------------------------------------
 * Practice areas — spec §B section 4. Corrections M-3, M-4, M-5, H-13, H-14, H-15.
 *
 * OBSERVED: a split heading with a VERTICAL hairline between heading and
 * paragraph, gold-highlighted phrases inside that paragraph, and six cards in a
 * 3 x 2 grid. Card fill is the primary tone on the deep section tone, giving
 * deliberately near-invisible contrast — spec §C.7 is explicit that this is the
 * design and must not be "fixed".
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";
import { practiceAreas } from "@/content/home";

export default function PracticeAreas() {
  return (
    <section className="section section--deep on-dark" aria-labelledby="practice-title">
      <div className="container">
        <div className="practice__head">
          <div>
            <h2 className="section-heading" id="practice-title">
              Explore
              <br />
              Our Practice Areas
            </h2>
            <OrnamentalDivider />
          </div>

          {/* Correction M-5: the vertical hairline is applied by CSS on this
              element (the only vertical rule in the reference), and the gold
              highlight phrases below were absent from the forensic report. */}
          <p className="practice__head-text">
            There are <span className="gold-phrase">many variations of passages</span> of Lorem Ipsum
            available, but the majority have su alteration in some form, by injected humour, or{" "}
            <span className="gold-phrase">randomised worlds</span> which don't look even slightly
            believable.
          </p>
        </div>

        {/* Correction M-3: gap is 0.020 x container (25px). The forensic used 30px. */}
        <div className="practice__grid" data-qa="grid-3">
          {practiceAreas.map(({ title, body, Icon }, i) => (
            <article
              className="practice-card reveal"
              data-qa="practice-card"
              key={title}
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <h3 className="practice-card__title">{title}</h3>
              <p className="practice-card__body">{body}</p>

              {/* Correction M-4: hairline rule above the footer row. */}
              <div className="practice-card__footer">
                {/* Correction H-14: thin-stroke line icon, not a solid glyph. */}
                <Icon className="practice-card__icon" size={30} strokeWidth={1.25} aria-hidden="true" />

                {/* Correction H-13: the REST state is a dark fill with white text
                    and no border; gold fill is the HOVER state. The forensic
                    rendered the hover appearance permanently. */}
                <a className="btn btn--learn" href="#consultation">
                  Learn More
                  <span className="visually-hidden"> about {title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
