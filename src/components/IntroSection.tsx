import { Globe, MapPin } from "lucide-react";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { intro } from "@/content/group";

export default function IntroSection() {
  const [location, reach] = intro.presence;

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

          <ul className="presence-strip">
            <li className="presence-strip__item">
              <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
              <span>
                {location.lead}
                <span className="presence-strip__em">{location.emphasis}</span>
              </span>
            </li>
            <li className="presence-strip__rule" aria-hidden="true" />
            <li className="presence-strip__item">
              <Globe size={22} strokeWidth={1.5} aria-hidden="true" />
              <span>
                {reach.lead}
                <span className="presence-strip__em">{reach.emphasis}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
