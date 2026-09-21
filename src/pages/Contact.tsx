import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import { contactDetails, pageCopy } from "@/content/group";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.contact.eyebrow}
        title={pageCopy.contact.title}
        lead={pageCopy.contact.lead}
      />

      <section className="section section--light on-light">
        <div className="container contact-strip">
          <div>
            <h2 className="contact-strip__label">Location</h2>
            <p>{contactDetails.locality}</p>
          </div>
          <div>
            <h2 className="contact-strip__label">Telephone</h2>
            <p>
              {contactDetails.phones.map((p) => (
                <a key={p.href} href={p.href} style={{ display: "block" }}>
                  {p.display}
                </a>
              ))}
            </p>
          </div>
          <div>
            <h2 className="contact-strip__label">Email</h2>
            <p>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </p>
          </div>
        </div>
      </section>

      <ConsultationForm />
    </>
  );
}
