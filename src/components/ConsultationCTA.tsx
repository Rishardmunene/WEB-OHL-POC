import { Link } from "react-router-dom";

/* H-16: evidence shows the white card carrying an INSET GREY FRAME (double-frame
   effect) and a SOLID GOLD SQUARE icon tile — not a circular gold-tinted one.
   C-5: the tile's glyph must be dark, since white on gold measures 2.10:1. */
export default function ConsultationCTA() {
  return (
    <section className="section cta-section">
      <div className="container cta-grid">
        <div className="cta-content">
          <h2 className="section-title">
            Our Expert professional law team
            <br />
            is always ready to serve you the
            <br />
            best solution!
          </h2>
          <p>
            There are of Lorem Ipsum available, but the majority have in alteration in some form, by
            injected, or which don't look even slightly believable.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Contact Us
          </Link>
        </div>

        <div className="consult-box">
          <h3>Get a Free Consultation</h3>
          <p>
            There are of Lorem Ipsum available, but the majority by injected humour, which don't look
            even.
          </p>
          <div className="phone-large">
            <div className="icon">
              <i className="fa-solid fa-phone" aria-hidden="true" />
            </div>
            <div>
              <small>Call Us On:</small>
              <h4>911-987654321</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
