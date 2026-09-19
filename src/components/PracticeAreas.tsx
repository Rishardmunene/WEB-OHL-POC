import { Link } from "react-router-dom";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { practiceAreas } from "@/content/home";

/* Corrections due here:
   H-13 rest state is a dark fill with white text, not a gold outline
   H-14 icons are thin-stroke line icons; glyphs differ (building, truck)
   H-15 hovered card shows no lift and no gold bottom border
   M-4  a hairline rule sits above the card footer row
   M-5  a vertical rule divides the heading from the paragraph, which itself
        carries gold-highlighted phrases
   M-3  grid gap ~25px, not 30px */
export default function PracticeAreas() {
  return (
    <section className="section">
      <div className="container">
        <div className="practice-header">
          <div>
            <h2 className="section-title">
              Explore
              <br />
              Our Practice Areas
            </h2>
            <OrnamentalDivider />
          </div>
          <p className="text">
            There are many variations of passages of Lorem Ipsum available, but the majority have in
            alteration in some form, by injected humour, or randomised words which don't look even
            slightly believable.
          </p>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article key={area.title} className="practice-card">
              <h3>{area.title}</h3>
              <p>{area.body}</p>
              <div className="card-footer">
                <i className={`${area.faIcon} icon`} aria-hidden="true" />
                <Link to="#" className="btn btn-outline-gold">
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
