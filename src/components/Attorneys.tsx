import { Link } from "react-router-dom";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { attorneys } from "@/content/home";

/* H-8: evidence shows FOUR social icons inside a white bar that overlaps the image
   bottom, inset from its edges and finished with a thin gold underline.
   H-9: portraits are aspect 0.678 (w:h), not a fixed 350px height.
   M-3: grid gap ~23px, not 40px. Role text is gold, not #666. */
export default function Attorneys() {
  return (
    <section className="section section-light help-section">
      <div className="container">
        <h2 className="section-title">
          Our Experienced Attorney Are Ready
          <br />
          To answer any questions
        </h2>
        <OrnamentalDivider center />

        <div className="attorneys-grid">
          {attorneys.map((attorney) => (
            <article key={attorney.name} className="attorney-card">
              <img src={attorney.photo} alt={`Portrait of ${attorney.name}`} />
              <h3>{attorney.name}</h3>
              <p>{attorney.role}</p>
              <div className="social-icons">
                <a href="#" aria-label={`${attorney.name} on Facebook`}>
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </a>
                <a href="#" aria-label={`${attorney.name} on Twitter`}>
                  <i className="fa-brands fa-twitter" aria-hidden="true" />
                </a>
                <a href="#" aria-label={`${attorney.name} on LinkedIn`}>
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <Link
          to="/lawyers"
          className="btn btn-outline"
          style={{ borderColor: "#333", color: "#333", marginTop: "20px" }}
        >
          Meet Attorney
        </Link>
      </div>
    </section>
  );
}
