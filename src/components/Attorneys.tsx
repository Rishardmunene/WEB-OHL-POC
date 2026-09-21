import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { leadership, specialistPractices } from "@/content/group";

const cards = [
  {
    key: "leadership",
    variant: "dark" as const,
    eyebrow: leadership.eyebrow,
    title: leadership.name,
    tagline: leadership.role,
    body: leadership.body,
    cta: leadership.cta,
    href: leadership.href,
    external: false,
  },
  ...specialistPractices.map((item) => ({
    key: item.name,
    variant: "light" as const,
    eyebrow: item.eyebrow,
    title: item.name,
    tagline: item.role,
    body: item.body,
    cta: item.cta,
    href: item.href,
    external: item.external,
  })),
];

export default function Attorneys() {
  return (
    <section className="section section--light on-light" aria-labelledby="attorneys-title">
      <div className="container">
        <div className="section-head--center reveal">
          <h2 className="section-heading" id="attorneys-title">
            Group leadership
            <br />
            and specialist pathways
          </h2>
          <OrnamentalDivider variant="center" />
        </div>

        <div className="attorneys__grid" data-qa="grid-attorneys">
          {cards.map((card, i) => (
            <article
              className={`leader-card${card.variant === "dark" ? " leader-card--dark" : ""} reveal`}
              key={card.key}
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <p className="leader-card__kicker">{card.eyebrow}</p>
              <h3 className="leader-card__title">{card.title}</h3>
              <p className="leader-card__tagline">{card.tagline}</p>
              <p className="leader-card__body">{card.body}</p>
              <div className="leader-card__actions">
                <SmartLink
                  className={`btn ${card.variant === "dark" ? "btn--outline-gold" : "btn--outline-dark"} leader-card__cta`}
                  href={card.href}
                  external={card.external}
                >
                  {card.cta}
                </SmartLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
