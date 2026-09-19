import OrnamentalDivider from "@/components/OrnamentalDivider";
import { lightStats, partners } from "@/content/home";

/* H-10: evidence shows the number INSIDE a gold ring badge with the icon above it,
   a serif label, and an extra muted line. C-1: section is pure white and the box is
   the near-white. L-2: the dark box left-aligns its text. M-7: "Meet The Partners"
   is flanked by separators on both sides. */
export default function HelpStats() {
  return (
    <section className="section section-light help-section">
      <div className="container">
        <h2 className="section-title">
          If you're in trouble
          <br />
          we can help.
        </h2>
        <OrnamentalDivider center />
        <p className="help-text">
          There are of Lorem Ipsum available, but the majority have in alteration in some form, by
          injected humour, or which don't look even slightly believable.
        </p>

        <div className="stats-row">
          {lightStats.map((stat) => (
            <div key={stat.label} className={stat.variant === "dark" ? "stat-box dark" : "stat-box"}>
              {stat.faIcon ? <i className={stat.faIcon} aria-hidden="true" /> : null}
              <div>
                <h3>{stat.value}</h3>
                <p>
                  {stat.label.split("\n").map((line, i, all) => (
                    <span key={line}>
                      {line}
                      {i < all.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="partners">
          <h4>Meet The Partners</h4>
          <OrnamentalDivider center />
          <div className="partner-logos">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
