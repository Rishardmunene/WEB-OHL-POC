import { Link } from "react-router-dom";
import { navLinks } from "@/content/home";

/* M-1: evidence shows the header fully transparent over the hero, with no blur
   and no gold top border. M-2: gold ring + gold label. L-1: no gold active state.
   Stage 0 reproduces the baseline; corrected in Stage 3. */
export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row header-top">
          <div className="logo">
            <i className="fa-solid fa-building-columns" aria-hidden="true" /> Attorneyster
          </div>
          <div className="header-actions">
            <div className="cart-icon">
              <i className="fa-solid fa-cart-shopping" aria-hidden="true" /> Cart (0)
            </div>
            <Link to="/contact" className="btn btn-outline">
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="header-row header-bottom">
          <nav className="main-nav" aria-label="Primary">
            {navLinks.map((link, i) => (
              <Link key={link.label} to={link.to} className={i === 0 ? "active" : undefined}>
                {link.label}
                {link.hasDropdown ? " \u25be" : null}
              </Link>
            ))}
          </nav>

          <div className="header-contact">
            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-phone" aria-hidden="true" />
              </div>
              <div className="contact-text">
                <small>Call Us On:</small>
                <strong>911-987654321</strong>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </div>
              <div className="contact-text">
                <small>Email Us:</small>
                <strong>yourmail@mail.com</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
