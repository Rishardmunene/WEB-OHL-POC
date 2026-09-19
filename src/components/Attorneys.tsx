/* -----------------------------------------------------------------------------
 * Attorneys — spec §B section 8. Corrections H-8, H-9, M-3.
 *
 * OBSERVED: three tall portraits at aspect 0.678, each with a WHITE bar inset
 * from the photo's edges overlapping the image bottom, holding FOUR social icons
 * and finished with a thin gold underline. Name in dark serif below, role in gold.
 *
 * The forensic reconstruction pinned the portrait to a fixed 350px height and put
 * three dark icons below the name with no bar at all.
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";
import { attorneys } from "@/content/home";
import { socialLinks } from "@/components/icons/SocialIcons";

export default function Attorneys() {
  return (
    <section className="section section--light on-light" aria-labelledby="attorneys-title">
      <div className="container">
        <div className="section-head--center">
          <h2 className="section-heading" id="attorneys-title">
            Our Experienced Attorney Are Ready
            <br />
            To answer any questions
          </h2>
          <OrnamentalDivider variant="center" />
        </div>

        {/* Correction M-3: gap is 0.018 x container (23px). The forensic used
            40px, roughly 75% too wide. */}
        <div className="attorneys__grid" data-qa="grid-attorneys">
          {attorneys.map(({ name, role, photo }, i) => (
            <article
              className="attorney-card reveal"
              data-qa="attorney-card"
              key={name}
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <div className="attorney-card__media">
                {/* Correction H-9: aspect 0.678 via the intrinsic 600x885 crop,
                    so the ratio is correct with no layout shift. */}
                <img
                  src={photo}
                  alt={`${name}, ${role}`}
                  data-qa="attorney-portrait"
                  loading="lazy"
                  width={600}
                  height={885}
                  decoding="async"
                />

                {/* Correction H-8: white bar, inset, overlapping the image
                    bottom, four icons, thin gold underline. */}
                <div className="attorney-card__social">
                  {socialLinks.map(({ label, Icon, href }) => (
                    <a key={label} href={href} aria-label={`${name} on ${label}`}>
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="attorney-card__name">{name}</h3>
              {/* Gold role text on a white surface resolves to --gold-on-light
                  through the .on-light context. The observed #CFAF71 would be
                  2.10:1 here and fails AA at every size (J-5). */}
              <p className="attorney-card__role">{role}</p>
            </article>
          ))}
        </div>

        <div className="attorneys__cta">
          <a className="btn btn--outline-dark" href="#consultation">
            Meet Attorney
          </a>
        </div>
      </div>
    </section>
  );
}
