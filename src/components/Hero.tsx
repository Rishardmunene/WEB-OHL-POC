/* -----------------------------------------------------------------------------
 * Hero — spec §B section 2. Corrections H-2, M-11; refinement J-9.
 *
 * OBSERVED: full-bleed photograph with a left gradient scrim, ornament above a
 * two-line H1, lead paragraph, single gold CTA. Height 0.566 x page width.
 *
 * The forensic prose described a "50/50 split" but its CSS implemented the
 * full-bleed-plus-scrim treatment, which is what the screenshots show. The CSS
 * was right and the prose was wrong.
 *
 * Correction H-2: the two stat tiles the forensic absolutely-positioned out of
 * the hero (`bottom:-50px; right:20%`) belong to the Intro section. See
 * IntroSection.tsx.
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";

export default function Hero() {
  return (
    <section className="hero on-dark" data-qa="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        {/* The hero image is the largest above-the-fold asset, so it is eager
            with high fetch priority; every other image on the page is lazy. */}
        <img
          src="/images/hero-background.jpg"
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" />

      <div className="container">
        <div className="hero__content">
          <OrnamentalDivider />
          <h1 className="hero__title" id="hero-title">
            Deeper Understanding
            <br />
            Better Solutions
          </h1>
          <p className="hero__lead">
            It is a long established fact that a reader will be distracted by the readable content of a
            looking at its layout.
          </p>
          <a className="btn btn--gold" href="#consultation">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
