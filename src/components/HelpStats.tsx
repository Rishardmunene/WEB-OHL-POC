import OrnamentalDivider from "@/components/OrnamentalDivider";
import { audiences, sectors } from "@/content/group";

export default function HelpStats() {
  return (
    <section className="section section--light on-light" aria-labelledby="help-title">
      <div className="container">
        <div className="help__head section-head--center">
          <h2 className="section-heading" id="help-title">
            Who the Group
            <br />
            is built to serve.
          </h2>
          <OrnamentalDivider variant="center" />
          <p className="section-lead">
            Ojijo Group’s public materials address employers, HR departments, NGOs and institutions —
            organisations, people and processes, not a consumer high-street legal shopfront.
          </p>
        </div>

        <div className="stats-row-wrap hairline-bottom">
          <div className="stats-row">
            {audiences.map((item) => (
              <div className="stat-box stat-box--light" key={item.title}>
                <div>
                  <p className="stat-box__label">{item.title}</p>
                  <p className="stat-box__note">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners">
          <div className="partners__head">
            <OrnamentalDivider variant="flank-left" />
            <h3 className="partners__title">Sectors named publicly</h3>
            <OrnamentalDivider variant="flank-right" />
          </div>
          <ul className="partner-logos">
            {sectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
