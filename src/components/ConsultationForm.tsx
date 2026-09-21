import { useState, type FormEvent } from "react";
import { contactDetails, enquiryTopics } from "@/content/group";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="form-section on-dark" id="consultation" aria-labelledby="form-title">
      <div className="form-section__media">
        <img src="/images/form-background.jpg" alt="" loading="lazy" width={1600} height={1067} decoding="async" />
      </div>

      <div className="container">
        <div className="form-panel">
          <h2 className="form-panel__title" id="form-title">
            Send a Group enquiry
          </h2>
          <p className="form-panel__lede">
            There is no submission backend on this site yet. Use the form to prepare the message, then
            email {contactDetails.email} or call. Choosing a topic helps us route you to the right
            specialist destination.
          </p>

          {submitted ? (
            <p className="form-panel__notice" role="status">
              This form is a display prototype. Please email{" "}
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> or call{" "}
              {contactDetails.phones[0].display}.
            </p>
          ) : (
            <form className="form-grid" noValidate onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="full-name">
                  Full Name <span className="required" aria-hidden="true">*</span>
                </label>
                <input id="full-name" name="full-name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">
                  Email Address <span className="required" aria-hidden="true">*</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="topic">
                  What can we help you with? <span className="required" aria-hidden="true">*</span>
                </label>
                <select id="topic" name="topic" required defaultValue="">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {enquiryTopics.map((topic) => (
                    <option key={topic.value} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field field--full">
                <label htmlFor="message">
                  Your Message <span className="required" aria-hidden="true">*</span>
                </label>
                <textarea id="message" name="message" rows={3} required />
              </div>

              <div className="form-panel__actions field--full">
                <button className="btn btn--white" type="submit">
                  Send enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
