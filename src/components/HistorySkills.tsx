import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { capabilityAside, capabilityLines, philosophy } from "@/content/group";

export default function HistorySkills() {
  return (
    <section className="history on-dark" aria-labelledby="history-title">
      <div className="history__backdrop">
        <img src="/images/history-backdrop.jpg" alt="" loading="lazy" width={1200} height={700} decoding="async" />
      </div>

      <div className="container">
        <div className="history__panel">
          <div className="history__grid">
            <div>
              <h2 className="section-heading" id="history-title">
                {philosophy.headingLines[0]}
              </h2>
              <OrnamentalDivider />
              <p className="history__lead">{philosophy.lead}</p>

              <div className="timeline">
                {philosophy.steps.map(({ title, body }) => (
                  <div key={title}>
                    <h3 className="timeline__year">{title}</h3>
                    <p className="timeline__body">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="history__portrait">
              <img
                src="/images/history-portrait.jpg"
                alt=""
                loading="lazy"
                width={590}
                height={787}
                decoding="async"
              />
            </div>

            <div>
              <h2 className="section-heading">
                {capabilityAside.headingLines[0]}
                <br />
                {capabilityAside.headingLines[1]}
              </h2>
              <OrnamentalDivider />

              <p style={{ color: "var(--fg-muted)" }}>{capabilityAside.body}</p>

              <ul className="capability-list">
                {capabilityLines.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>

              <SmartLink className="btn btn--gold" href="/entities">
                Explore Our Entities
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
