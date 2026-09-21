import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { hero } from "@/content/group";

export default function Hero() {
  return (
    <section className="hero on-dark" data-qa="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="/images/hero-background.jpg"
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" />

      <div className="container">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title" id="hero-title">
            {hero.titleLines.map((line) => (
              <span className="hero__title-line" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <OrnamentalDivider />
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__actions">
            <SmartLink className="btn btn--gold" href={hero.primary.to}>
              {hero.primary.label}
            </SmartLink>
            <SmartLink className="btn btn--outline-light" href={hero.secondary.to}>
              {hero.secondary.label}
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
