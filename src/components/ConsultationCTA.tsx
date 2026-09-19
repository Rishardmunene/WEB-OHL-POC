/* -----------------------------------------------------------------------------
 * Consultation CTA — spec §B section 9. Correction H-16; deviation J-5.
 *
 * OBSERVED: copy on the left with a gold button; on the right a white card with
 * an INSET GREY FRAME (a double-frame effect) containing a heading, paragraph and
 * a SOLID GOLD SQUARE tile holding a phone glyph.
 *
 * The forensic reconstruction rendered a plain white box with a circular
 * gold-tinted icon.
 * -------------------------------------------------------------------------- */

import { Phone } from "lucide-react";
import { contactDetails } from "@/content/home";

export default function ConsultationCTA() {
  return (
    <section className="section section--dark on-dark" aria-labelledby="cta-title">
      <div className="container cta__grid">
        <div className="reveal">
          <h2 className="cta__title" id="cta-title">
            Our Expert professional law team is always ready to serve you the best solution!
          </h2>
          <p className="cta__body">
            There are of Lorem Ipsum available, but the majority have su alteration in some form, by
            injected or which don't look even.
          </p>
          <a className="btn btn--gold" href="#consultation">
            Contact Us
          </a>
        </div>

        {/* Correction H-16: the outer white padding plus the inner grey border
            produce the observed double frame. */}
        <div className="consult-card on-light reveal" style={{ ["--reveal-delay" as string]: "90ms" }}>
          <div className="consult-card__inner">
            <h3 className="consult-card__title">Get a Free Consultation</h3>
            <p className="consult-card__body">
              There are of Lorem Ipsum available, but the majority by injected humour which don't look
              even.
            </p>

            <div className="consult-card__phone">
              {/* Correction H-16 + J-5: a solid gold SQUARE tile, and the glyph
                  must be DARK. White on gold measures 2.10:1 and fails AA at
                  every size. */}
              <span className="consult-card__tile">
                <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <small className="consult-card__label">Call Us On:</small>
                <a
                  className="consult-card__number numeral"
                  href={`tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`}
                >
                  911-987654321
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
