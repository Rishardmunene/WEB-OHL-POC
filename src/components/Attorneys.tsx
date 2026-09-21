import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { leadership } from "@/content/group";

const pathways = [
  {
    name: "Ojijo HR Law",
    role: "Employment, labour and HR consulting",
    href: "https://ojijohrlaw.com/",
    external: true,
    cta: "Meet the specialist practice",
  },
  {
    name: "Ojijo Senaji Advocates",
    role: "Full-service legal practice",
    href: "https://ojijosenaji.com/",
    external: true,
    cta: "Visit the law firm",
  },
];

export default function Attorneys() {
  return (
    <section className="section section--light on-light" aria-labelledby="attorneys-title">
      <div className="container">
        <div className="section-head--center">
          <h2 className="section-heading" id="attorneys-title">
            Group leadership
            <br />
            and specialist pathways
          </h2>
          <OrnamentalDivider variant="center" />
        </div>

        <div className="attorneys__grid" data-qa="grid-attorneys">
          <article className="leader-card reveal">
            <p className="leader-card__kicker">Group leadership</p>
            <h3 className="attorney-card__name">{leadership.name}</h3>
            <p className="attorney-card__role">{leadership.role}</p>
            <p className="leader-card__also">{leadership.also}</p>
            <p className="leader-card__note">{leadership.note}</p>
          </article>

          {pathways.map((item, i) => (
            <article
              className="pathway-card reveal"
              key={item.name}
              style={{ ["--reveal-delay" as string]: `${(i + 1) * 80}ms` }}
            >
              <p className="leader-card__kicker">Specialist pathway</p>
              <h3 className="attorney-card__name">{item.name}</h3>
              <p className="attorney-card__role">{item.role}</p>
              <p className="leader-card__note">
                Team profiles belong on the specialist site, not as invented portraits here.
              </p>
              <SmartLink className="btn btn--outline-dark" href={item.href} external={item.external}>
                {item.cta}
              </SmartLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
