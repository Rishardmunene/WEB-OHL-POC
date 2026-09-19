import { Link } from "react-router-dom";
import { introStats } from "@/content/home";

/* H-2: the stat cards belong to the Intro section in normal flow, NOT overlapping
   the hero. Stage 0 reproduces the baseline's absolute positioning; moved in Stage 4.
   Also missing here: the ornamental separator above the H1 (evidence). */
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Deeper Understanding
            <br />
            Better Solutions
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of
            a looking at its layout.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Get In Touch
          </Link>
        </div>

        <div className="hero-stats">
          {introStats.map((stat) => (
            <div key={stat.label} className={`stat-card ${stat.variant}`}>
              <i className={stat.faIcon} aria-hidden="true" />
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
