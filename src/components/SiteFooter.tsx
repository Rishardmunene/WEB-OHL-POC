/* -----------------------------------------------------------------------------
 * Footer — spec §B section 13. Correction H-17.
 *
 * OBSERVED: surface #1E2833, the SAME tone as the other dark sections. The logo
 * is centred and flanked by long double-hairline gold rules ending in the
 * four-point star. Four columns with hairline-ruled serif headings, and the FIRST
 * column holds two sub-columns.
 *
 * The forensic reconstruction darkened the surface to #16181d (inventing a
 * hierarchy the reference does not have), centred a plain logo with no flanking
 * rules, and used a single six-link column.
 * -------------------------------------------------------------------------- */

import { Landmark } from "lucide-react";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { brand, contactDetails, footerColumns } from "@/content/home";
import { socialLinks } from "@/components/icons/SocialIcons";

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        {/* Correction H-17: flanking ornamental rules at container scale. */}
        <div className="site-footer__brand">
          <OrnamentalDivider variant="wide" />
          <span className="site-brand">
            <Landmark className="site-brand__mark" size={32} strokeWidth={1.5} aria-hidden="true" />
            {brand.name}
          </span>
          <OrnamentalDivider variant="wide" />
        </div>

        <div className="site-footer__grid">
          {footerColumns.map(({ heading, links, split }) => (
            <div className="footer-col" key={heading}>
              {/* Hairline under each heading — hairline 5 of 7, spec §C.5. */}
              <h2 className="footer-col__heading">{heading}</h2>
              <ul className={split ? "footer-col__links footer-col__links--split" : "footer-col__links"}>
                {links.map((label) => (
                  <li key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Reference reads "Conaetct Us" — corrected under deviation J-13. */}
          <div className="footer-col footer-col--contact">
            <h2 className="footer-col__heading">Contact Us</h2>
            <address>
              {contactDetails.addressLabel} {contactDetails.address}
            </address>
            <address style={{ marginTop: "var(--stack-sm)" }}>
              Phone:{" "}
              <a href={`tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`}>{contactDetails.phone}</a>
              {"\n"}
              Email: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          {/* Gold-accented copyright segments — OBSERVED, and absent from the
              forensic report. */}
          <p>
            Copyright <span aria-hidden="true">©</span>{" "}
            <span style={{ color: "var(--accent)" }}>{brand.name}</span> — {brand.tagline}
          </p>

          <div className="site-footer__social">
            <span>Follow :</span>
            {socialLinks.map(({ label, Icon, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
