import PageHero from "@/components/PageHero";
import SmartLink from "@/components/SmartLink";
import { trainingEvents, trainingIntro } from "@/content/group";

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title={trainingIntro.titleLines.join(" ")}
        lead={trainingIntro.body}
      />

      <section className="section section--light on-light">
        <div className="container">
          <p className="training-note">
            Selecting <strong>Register on Luma</strong> opens the official registration page in a new
            tab. Ticketing, approval and payment — including any mobile-money options Luma offers —
            are handled there. This Group site does not collect payment.
          </p>

          <div className="training-list">
            {trainingEvents.map((event) => (
              <article className="training-card reveal on-dark" key={event.id}>
                <p className="entity-card__category">
                  {event.format} · {event.dateLabel}
                </p>
                <h2 className="training-card__title">{event.title}</h2>
                <p>{event.summary}</p>
                <ul className="training-card__meta">
                  <li>{event.location}</li>
                  {event.fee ? <li>{event.fee}</li> : null}
                  {event.cpd ? <li>{event.cpd}</li> : null}
                  {event.audience ? <li>{event.audience}</li> : null}
                </ul>
                <SmartLink className="btn btn--gold" href={event.href} external>
                  Register on Luma
                </SmartLink>
              </article>
            ))}
          </div>

          <p className="section-foot section-foot--light">
            <SmartLink className="btn btn--outline-dark" href={trainingIntro.calendarHref} external>
              {trainingIntro.calendarLabel}
            </SmartLink>
          </p>
        </div>
      </section>
    </>
  );
}
