import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { expertise, expertiseHead } from "@/content/group";

export default function PracticeAreas() {
  return (
    <section className="section section--deep on-dark" id="expertise" aria-labelledby="practice-title">
      <div className="container">
        <div className="practice__head reveal">
          <div>
            <h2 className="section-heading" id="practice-title">
              {expertiseHead.titleLines[0]}
              <br />
              {expertiseHead.titleLines[1]}
            </h2>
            <OrnamentalDivider />
          </div>

          <p className="practice__head-text">{expertiseHead.body}</p>
        </div>

        <div className="practice__grid" data-qa="grid-3">
          {expertise.map(({ lens, title, body, Icon, routeLabel, to, external }, i) => (
            <article
              className="practice-card reveal"
              data-qa="practice-card"
              key={title}
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <p className="practice-card__lens">{lens}</p>
              <h3 className="practice-card__title">{title}</h3>
              <p className="practice-card__body">{body}</p>
              <div className="practice-card__footer">
                <Icon className="practice-card__icon" size={22} strokeWidth={1.4} aria-hidden="true" />
                <SmartLink className="btn btn--learn" href={to} external={external}>
                  {routeLabel}
                </SmartLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
