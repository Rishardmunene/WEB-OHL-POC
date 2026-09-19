import { Link } from "react-router-dom";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { skills, timeline } from "@/content/home";

/* H-6: evidence shows this section on a full-bleed BLURRED photograph with a
   container-width translucent panel on top. The baseline has neither.
   H-7: the timeline has no connector line and no markers.
   M-8: each skill bar ends in a gold circular knob.
   C-6: the centre image has square corners, not radius 20px. */
export default function HistorySkills() {
  return (
    <section className="section">
      <div className="container history-skills-grid">
        <div>
          <h2 className="section-title">
            We Are Top Lawyers
            <br />
            And History
          </h2>
          <OrnamentalDivider />
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <h4>{item.year}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1618055535359-55cb8584852e?auto=format&fit=crop&w=400&q=80"
            alt="Bronze statue of Lady Justice holding scales"
            style={{ borderRadius: "20px" }}
          />
        </div>

        <div>
          <h2 className="section-title">
            We Are Specialised
            <br />
            And Experienced
          </h2>
          <OrnamentalDivider />
          <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            deleniti atque corrupti quos molestias excepturi odio dignissimos ducimus qui blanditiis
            sint occaecati.
          </p>

          {skills.map((skill, i) => (
            <div key={`${skill.label}-${i}`} className="skill-item">
              <div className="skill-header">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}

          <Link to="/contact" className="btn btn-gold" style={{ marginTop: "20px" }}>
            Free Consulting
          </Link>
        </div>
      </div>
    </section>
  );
}
