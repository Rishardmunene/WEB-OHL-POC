import OrnamentalDivider from "@/components/OrnamentalDivider";

/* H-11: evidence shows a THREE-image collage, not one image.
   C-6: the baseline's border-bottom-right-radius: 40px is contradicted.
   M-10: the author name is set in a calligraphic script face, not the serif. */
export default function IntroSection() {
  return (
    <section className="section">
      <div className="container intro-grid">
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
            alt="A judge's gavel resting on a wooden bench"
          />
        </div>

        <div className="intro-content">
          <h2 className="section-title">
            The Simple Choice
            <br />
            for Complex Litigation
          </h2>
          <OrnamentalDivider />
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have in
            alteration in some form, by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything.
          </p>
          <div className="author-profile">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
              alt="Portrait of Peeter Ocal"
            />
            <div>
              <h4>Peeter Ocal</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
