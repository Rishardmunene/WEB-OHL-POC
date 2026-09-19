/* -----------------------------------------------------------------------------
 * Testimonials — spec §B section 7. Correction H-3, the largest structural error
 * in the forensic reconstruction.
 *
 * OBSERVED: FOUR cards in a staggered 4-column grid, each holding ONE quote,
 * with the reviewer block floating OUTSIDE the card and overlapping it.
 *
 * The forensic reconstruction had two cards in a `1fr 1fr` grid with two
 * reviewers each, inside a `border-top` footer — wrong in card count, column
 * count, reviewer grouping and reviewer placement.
 *
 * Stagger direction follows the screenshots: columns 1 and 3 sit raised with the
 * reviewer below them, columns 2 and 4 sit lowered with the reviewer above. Spec
 * §C.7's prose states the opposite; screenshot evidence outranks it (spec §A).
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";
import { testimonials } from "@/content/home";

export default function Testimonials() {
  return (
    <section className="section section--dark on-dark" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head--center">
          <h2 className="section-heading" id="testimonials-title">
            Client Opinions &amp; Reviews
          </h2>
          <OrnamentalDivider variant="center" />
        </div>

        <div className="testimonials__grid" data-qa="grid-testimonials">
          {testimonials.map(({ quote, lift, reviewer }, i) => (
            <div
              className={`testimonial-col testimonial-col--${lift} reveal`}
              key={`${reviewer.name}-${i}`}
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            >
              <figure className="testimonial-card" data-qa="testimonial-card">
                <span className="testimonial-card__quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="testimonial-card__quote">{quote}</blockquote>
              </figure>

              {/* The reviewer block sits outside the card and overlaps it. It is
                  the figure's caption semantically, but it cannot live inside
                  .testimonial-card without inheriting the card surface, so the
                  association is made with aria-describedby-free plain markup and
                  the visual order is handled in CSS. */}
              <div className="reviewer">
                <img src={reviewer.photo} alt="" loading="lazy" width={88} height={88} decoding="async" />
                <div>
                  <p className="reviewer__name">{reviewer.name}</p>
                  <p className="reviewer__role">{reviewer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
