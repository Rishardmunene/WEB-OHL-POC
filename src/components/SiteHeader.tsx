/* -----------------------------------------------------------------------------
 * Site header — spec §B section 1. Corrections M-1, M-2, L-1; refinement J-2.
 *
 * OBSERVED structure, two rows:
 *   Row 1  logo                        | Cart (0) + "Book a Consultation"
 *   Row 2  Home About Us Pages Contact | gold-ring Call Us / Email Us items
 *
 * Transparent at rest, overlaying the hero. Heights 0.077 and 0.158 (total) of
 * page width.
 * -------------------------------------------------------------------------- */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Landmark, Mail, Menu, Phone, ShoppingCart, X } from "lucide-react";
import { brand, contactDetails, navLinks } from "@/content/home";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollProgress(headerRef);

  return (
    <header className="site-header on-dark" ref={headerRef} data-qa="header">
      {/* Row 1 — OBSERVED height 0.077 x page width. Carries the hairline that
          separates the two rows (hairline 1 of 7, spec §C.5). */}
      <div className="container site-header__row site-header__row--1" data-qa="header-row-1">
        <Link to="/" className="site-brand" aria-label={`${brand.name} — home`}>
          <Landmark className="site-brand__mark" size={26} strokeWidth={1.5} aria-hidden="true" />
          {brand.name}
        </Link>

        <div className="site-header__actions">
          {/* The reference shows "Cart (0)" on a law firm site. Its purpose is
              UNCERTAIN (spec §K) so it is reproduced verbatim and inert. */}
          <a className="cart-link" href="#cart">
            <ShoppingCart size={17} strokeWidth={1.5} aria-hidden="true" />
            Cart (0)
          </a>
          <a className="btn btn--gold" href="#consultation">
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Row 2 — nav and contact details. */}
      <div className="container site-header__row site-header__row--2">
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="main-nav" className="main-nav" data-open={menuOpen} aria-label="Main">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              /* The "Pages" disclosure needs keyboard operability (spec §H.10).
                 Rendered as a real button so it is focusable and announces its
                 expanded state, rather than a hover-only anchor. */
              <button key={link.label} type="button" className="main-nav__link" aria-expanded="false">
                {link.label}
                <ChevronDown size={14} strokeWidth={1.75} aria-hidden="true" />
              </button>
            ) : (
              <Link key={link.label} to={link.to} className="main-nav__link">
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Correction M-2: gold ring and gold label. The forensic used a
            white-alpha ring and a muted grey label. */}
        <div className="header-contact">
          <div className="contact-item">
            <span className="contact-item__icon">
              <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              <small className="contact-item__label">Call Us On:</small>
              <a className="contact-item__value numeral" href={`tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`}>
                {contactDetails.phone}
              </a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-item__icon">
              <Mail size={15} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              <small className="contact-item__label">Email Us:</small>
              <a className="contact-item__value" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
