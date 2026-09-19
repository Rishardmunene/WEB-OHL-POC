/* -----------------------------------------------------------------------------
 * Blog — spec §B section 11. Corrections H-4, H-5, L-3.
 *
 * OBSERVED: a featured post (image left, content right), a hairline beneath it,
 * then SIX cards in a 3 x 2 grid. Critically, NO card in this section has a
 * surface — the section background is visible inside every card.
 *
 * The forensic reconstruction rendered three cards and gave both the featured
 * post and every card a raised `background: var(--bg-card)`.
 * -------------------------------------------------------------------------- */

import OrnamentalDivider from "@/components/OrnamentalDivider";
import { blogPosts, featuredPost } from "@/content/home";

function Meta({ category, date }: { category: string; date: string }) {
  return (
    <p className="blog-meta">
      <span className="blog-meta__category">{category}</span>
      <span aria-hidden="true">|</span>
      <span>{date}</span>
    </p>
  );
}

export default function BlogSection() {
  return (
    <section className="section section--dark on-dark" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-head--center">
          <h2 className="section-heading" id="blog-title">
            Recent Blogs
          </h2>
          <OrnamentalDivider variant="center" />
        </div>

        {/* Correction H-5: no card surface. The hairline beneath is hairline 6
            of 7 in spec §C.5. */}
        <article className="blog__featured reveal">
          <div className="blog__featured-media">
            <img src={featuredPost.image} alt="" loading="lazy" width={1000} height={640} decoding="async" />
          </div>
          <div>
            <Meta category={featuredPost.category} date={featuredPost.date} />
            <h3 className="blog__featured-title" style={{ whiteSpace: "pre-line" }}>
              {featuredPost.title}
            </h3>
            <p className="blog-card__excerpt">{featuredPost.excerpt}</p>
            {/* Correction L-3: underlined in the reference. The forensic used
                uppercase letterspacing with no underline; casing is not legible
                at screenshot resolution, so sentence case remains an inference. */}
            <a className="read-more" href="#blog">
              Read More
              <span className="visually-hidden">: {featuredPost.title.replace("\n", " ")}</span>
            </a>
          </div>
        </article>

        {/* Correction H-4: six cards, 3 x 2. */}
        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <article
              className="blog-card reveal"
              data-qa="blog-card"
              key={post.title}
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <div className="blog-card__media">
                <img src={post.image} alt="" loading="lazy" width={700} height={525} decoding="async" />
              </div>
              <Meta category={post.category} date={post.date} />
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <a className="read-more" href="#blog">
                Read More
                <span className="visually-hidden">: {post.title}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
