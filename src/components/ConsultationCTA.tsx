import { Phone } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { consultationCta, contactDetails } from "@/content/group";

export default function ConsultationCTA() {
  return (
    <section className="section section--dark on-dark" aria-labelledby="cta-title">
      <div className="container cta__grid">
        <div className="reveal">
          <h2 className="cta__title" id="cta-title">
            {consultationCta.titleLines.map((line, i) => (
              <span key={line}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h2>
          <p className="cta__body">{consultationCta.body}</p>
          <SmartLink className="btn btn--gold" href="/contact">
            {consultationCta.button}
          </SmartLink>
        </div>

        <div className="consult-card on-light reveal" style={{ ["--reveal-delay" as string]: "90ms" }}>
          <div className="consult-card__inner">
            <h3 className="consult-card__title">{consultationCta.cardTitle}</h3>
            <p className="consult-card__body">{consultationCta.cardBody}</p>

            <div className="consult-card__phone">
              <span className="consult-card__tile">
                <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <small className="consult-card__label">Call Us On:</small>
                <a className="consult-card__number numeral" href={contactDetails.phones[0].href}>
                  {contactDetails.phones[0].display}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
