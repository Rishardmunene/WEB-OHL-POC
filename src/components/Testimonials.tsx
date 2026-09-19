import OrnamentalDivider from "@/components/OrnamentalDivider";
import { testimonials } from "@/content/home";

/* H-3 — the largest structural error in the baseline.
   Evidence shows FOUR quote cards in a staggered 4-column grid, with reviewer
   blocks floating OUTSIDE and overlapping the cards: above the raised ones,
   below the lowered ones. The baseline groups two reviewers into a bordered
   footer row inside each of two cards. Rebuilt in Stage 6. */
export default function Testimonials() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="section-title">Client Opinions &amp; Reviews</h2>
        <OrnamentalDivider center />

        <div className="reviews-grid" style={{ textAlign: "left" }}>
          {testimonials.map((item, i) => (
            <div key={i} className="review-card">
              <i className="fa-solid fa-quote-left quote-icon" aria-hidden="true" />
              <p className="quote">{item.quote}</p>
              <div className="reviewers">
                {item.reviewers.map((reviewer) => (
                  <div key={reviewer.name} className="reviewer">
                    <img src={reviewer.photo} alt={`Portrait of ${reviewer.name}`} />
                    <div>
                      <h5>{reviewer.name}</h5>
                      <span>{reviewer.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
