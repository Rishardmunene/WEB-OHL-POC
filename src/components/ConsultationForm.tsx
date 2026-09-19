/* H-12: evidence shows a CONTAINER-WIDTH panel, container-aligned and offset
   downward, with no detectable shadow — not a centred 900px box.
   M-9: the photographic backdrop is only lightly darkened.
   J-8: placeholder-as-label fails WCAG 3.3.2, and the ~0.05-alpha underline fails
   the 1.4.11 3:1 minimum for form-control boundaries. Both fixed in Stage 6. */
export default function ConsultationForm() {
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-container">
          <form>
            <div className="form-grid">
              <div className="form-group">
                <input type="text" placeholder="Full Name *" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address *" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number *" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject *" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message *" />
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button type="submit" className="btn" style={{ backgroundColor: "#fff", color: "#1b1e25" }}>
                Get An Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
