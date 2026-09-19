import { contactDetails, footerColumns } from "@/content/home";

/* H-17: evidence shows background #1E2833 (identical to the sections, not darker),
   the logo flanked by long double-hairline gold rules ending in a four-point star,
   hairline rules under each column heading, and the first column split into TWO
   sub-columns. Corrected in Stage 6. */
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <i className="fa-solid fa-building-columns" aria-hidden="true" /> Attorneyster
        </div>

        <div className="footer-grid">
          {footerColumns.map((column) => (
            <div key={column.heading} className="footer-col">
              <h4>{column.heading}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 2 }}>
              <li>
                {contactDetails.address.split("\n").map((line, i, all) => (
                  <span key={line}>
                    {line}
                    {i < all.length - 1 ? <br /> : null}
                  </span>
                ))}
              </li>
              <li>Phone: {contactDetails.phone}</li>
              <li>Email: {contactDetails.email}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>Copyright © Attorney Law Designed by VictorFlow Templates - Powered by Webflow</div>
          <div className="footer-social">
            Follow:
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
