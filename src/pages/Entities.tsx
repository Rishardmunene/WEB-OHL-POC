import PageHero from "@/components/PageHero";
import SmartLink from "@/components/SmartLink";
import { entities, pageCopy } from "@/content/group";

export default function EntitiesPage() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.entities.eyebrow}
        title={pageCopy.entities.title}
        lead={pageCopy.entities.lead}
      />

      <section className="section section--dark on-dark">
        <div className="container entity-directory">
          {entities.map((entity) => (
            <article className="entity-profile reveal" key={entity.id}>
              <p className="entity-card__category">{entity.category}</p>
              <h2 className="entity-profile__name">{entity.name}</h2>
              {entity.legalName ? <p className="entity-card__legal">{entity.legalName}</p> : null}
              <p className="entity-profile__relation">{entity.relation}</p>

              <dl className="entity-profile__dl">
                <div>
                  <dt>What it does</dt>
                  <dd>{entity.description}</dd>
                </div>
                <div>
                  <dt>Who it serves</dt>
                  <dd>{entity.audience}</dd>
                </div>
                <div>
                  <dt>Specialist focus</dt>
                  <dd>{entity.focus}</dd>
                </div>
                <div>
                  <dt>Why engage this entity</dt>
                  <dd>{entity.why}</dd>
                </div>
              </dl>

              <SmartLink className="btn btn--gold" href={entity.href} external={entity.external}>
                {entity.cta}
              </SmartLink>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
