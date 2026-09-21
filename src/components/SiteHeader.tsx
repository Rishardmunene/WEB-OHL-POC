import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
import { brand, contactDetails, navLinks } from "@/content/group";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/";

  useScrollProgress(headerRef);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="site-header on-dark"
      ref={headerRef}
      data-qa="header"
      data-solid={overHero ? undefined : "true"}
    >
      <div className="container site-header__row site-header__row--1" data-qa="header-row-1">
        <Link to="/" className="site-brand" aria-label={`${brand.name} — home`} onClick={() => setMenuOpen(false)}>
          <img className="site-brand__logo" src={brand.logo} alt="" width={160} height={160} />
          <span className="visually-hidden">{brand.name}</span>
        </Link>

        <div className="site-header__actions">
          <Link className="btn btn--gold" to="/contact">
            Talk to Ojijo Group
          </Link>
        </div>
      </div>

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

        <nav id="main-nav" className="main-nav" data-open={menuOpen ? "true" : "false"} aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "main-nav__link active" : "main-nav__link")}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-contact">
          <div className="contact-item">
            <span className="contact-item__icon">
              <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              <small className="contact-item__label">Call Us On:</small>
              <a className="contact-item__value numeral" href={contactDetails.phones[0].href}>
                {contactDetails.phones[0].display}
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
