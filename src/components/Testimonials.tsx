import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { entities, entityGateway } from "@/content/group";

export default function Testimonials() {
  return (
    <section className="section section--dark on-dark" id="entities" aria-labelledby="entities-title">
      <div className="container">
        <div className="section-head--center reveal">
          <h2 className="section-heading" id="entities-title">
            {entityGateway.heading}
          </h2>
          <OrnamentalDivider variant="center" />
          <p className="section-lead" style={{ marginInline: "auto" }}>
            {entityGateway.lead}
          </p>
        </div>

        <div className="entity-grid">
          {entities.map((entity, i) => (
            <article
              className="entity-card reveal"
              key={entity.id}
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            >
              <p className="entity-card__category">{entity.category}</p>
              <h3 className="entity-card__name">{entity.name}</h3>
              <p className="entity-card__legal" aria-hidden={entity.legalName ? undefined : true}>
                {entity.legalName || "\u00a0"}
              </p>
              <p className="entity-card__body">{entity.description}</p>
              <p className="entity-card__focus">
                <span>Focus.</span> {entity.focus}
              </p>
              <div className="entity-card__actions">
                <SmartLink className="btn btn--learn entity-card__cta" href={entity.href} external={entity.external}>
                  {entity.cta}
                </SmartLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
