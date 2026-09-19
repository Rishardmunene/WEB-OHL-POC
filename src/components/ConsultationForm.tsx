/* -----------------------------------------------------------------------------
 * Consultation form — spec §B section 10. Corrections H-12, M-9; deviation J-8.
 *
 * OBSERVED: a full-bleed photograph, only lightly darkened so the photo stays
 * clearly legible, with a panel at CONTAINER width on top. Underline-only fields
 * in a 2 x 2 arrangement, then a full-width message field, then a centred white
 * submit button.
 *
 * The forensic reconstruction capped the panel at 900px, centred it, gave it a
 * heavy drop shadow, and buried the photograph under an 85% overlay.
 *
 * Deviation J-8 is the most visible accessibility departure on the page: the
 * reference labels its fields with placeholders only (failing WCAG 3.3.2) and
 * draws boundaries at roughly 0.05 alpha (failing WCAG 1.4.11's 3:1). Both are
 * corrected here, which means the form legibly differs from the reference.
 * -------------------------------------------------------------------------- */

const FIELDS = [
  { id: "full-name", label: "Full Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { id: "subject", label: "Subject", type: "text", autoComplete: "off" },
];

export default function ConsultationForm() {
  return (
    <section className="form-section on-dark" id="consultation" aria-labelledby="form-title">
      <div className="form-section__media">
        <img src="/images/form-background.jpg" alt="" loading="lazy" width={1600} height={1067} decoding="async" />
      </div>

      {/* Correction H-12: container width, container-aligned. */}
      <div className="container">
        <div className="form-panel">
          <h2 className="visually-hidden" id="form-title">
            Request an appointment
          </h2>

          {/* Inert in this reconstruction: no backend exists, and inventing a
              submission endpoint would be outside the evidence. */}
          <form className="form-grid" noValidate>
            {FIELDS.map(({ id, label, type, autoComplete }) => (
              <div className="field" key={id}>
                {/* J-8: a real <label>, not a placeholder. */}
                <label htmlFor={id}>
                  {label} <span className="required" aria-hidden="true">*</span>
                </label>
                <input id={id} name={id} type={type} autoComplete={autoComplete} required />
              </div>
            ))}

            <div className="field field--full">
              <label htmlFor="message">
                Your Message <span className="required" aria-hidden="true">*</span>
              </label>
              <textarea id="message" name="message" rows={3} required />
            </div>

            <div className="form-panel__actions field--full">
              <button className="btn btn--white" type="submit">
                Get An Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
