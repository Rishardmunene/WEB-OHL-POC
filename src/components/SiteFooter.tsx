import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { brand, contactDetails, footerColumns } from "@/content/group";
import { socialLinks } from "@/components/icons/SocialIcons";

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="site-footer__brand">
          <OrnamentalDivider variant="wide" />
          <span className="site-brand">
            <img className="site-brand__logo" src={brand.logo} alt="" width={160} height={160} />
            <span className="visually-hidden">{brand.name}</span>
          </span>
          <OrnamentalDivider variant="wide" />
        </div>

        <div className="site-footer__grid">
          {footerColumns.map(({ heading, links, split }) => (
            <div className="footer-col" key={heading}>
              <h2 className="footer-col__heading">{heading}</h2>
              <ul className={split ? "footer-col__links footer-col__links--split" : "footer-col__links"}>
                {links.map((link) => (
                  <li key={link.label}>
                    <SmartLink href={link.to} external={link.external} className="footer-col__link">
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col footer-col--contact">
            <h2 className="footer-col__heading">Contact</h2>
            <address>
              {contactDetails.locality}
            </address>
            <address style={{ marginTop: "var(--stack-sm)" }}>
              {contactDetails.phones.map((p, i) => (
                <span key={p.href}>
                  {i === 0 ? "Phone: " : " / "}
                  <a href={p.href}>{p.display}</a>
                </span>
              ))}
              {"\n"}
              Email: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            Copyright <span aria-hidden="true">©</span>{" "}
            <span style={{ color: "var(--accent)" }}>{brand.name}</span>
            <span className="site-footer__philosophy">{brand.philosophy}</span>
          </p>

          <div className="site-footer__social">
            <span>Follow</span>
            {socialLinks.map(({ label, Icon, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
