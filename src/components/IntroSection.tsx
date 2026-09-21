import OrnamentalDivider from "@/components/OrnamentalDivider";
import { intro } from "@/content/group";

export default function IntroSection() {
  return (
    <section className="section section--dark on-dark" id="group-intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div className="collage reveal">
          <div className="collage__item collage__item--tall">
            <img src="/images/intro-primary.jpg" alt="" loading="lazy" width={550} height={733} decoding="async" />
          </div>
          <div className="collage__item collage__item--tall">
            <img src="/images/intro-secondary.jpg" alt="" loading="lazy" width={550} height={733} decoding="async" />
          </div>
          <div className="collage__item collage__item--wide">
            <img src="/images/intro-wide.jpg" alt="" loading="lazy" width={800} height={450} decoding="async" />
          </div>
        </div>

        <div className="reveal" style={{ ["--reveal-delay" as string]: "80ms" }}>
          <h2 className="section-heading" id="intro-title">
            {intro.titleLines.map((line, i) => (
              <span key={line}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h2>
          <OrnamentalDivider />

          <p className="intro__body">{intro.body}</p>

          <div className="signature">
            <p className="signature__name">{intro.signatureName}</p>
            <p className="signature__role">{intro.signatureRole}</p>
          </div>

          <div className="stat-tiles">
            {intro.tiles.map((tile) => (
              <div key={tile.label} className="stat-tile stat-tile--dark">
                <span>
                  <span className="stat-tile__value">{tile.value}</span>
                  <span className="stat-tile__label" style={{ whiteSpace: "pre-line", display: "block" }}>
                    {tile.label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
