import OrnamentalDivider from "@/components/OrnamentalDivider";
import { blogPosts, featuredPost } from "@/content/home";

/* H-4: evidence shows SIX cards (3x2), not three.
   H-5: neither the featured post nor the cards have a card surface — the section
   background was sampled directly inside every card text area.
   L-3: "Read More" is underlined. */
export default function BlogSection() {
  return (
    <section className="section help-section" style={{ paddingBottom: "80px" }}>
      <div className="container">
        <h2 className="section-title">Recent Blogs</h2>
        <OrnamentalDivider center />

        <div className="blogs-grid-top">
          <article className="blog-featured">
            <img src={featuredPost.image} alt="" />
            <div className="blog-featured-content" style={{ textAlign: "left" }}>
              <div className="blog-meta">
                <span>{featuredPost.category}</span> | {featuredPost.date}
              </div>
              <h3 className="blog-title">
                {featuredPost.title.split("\n").map((line, i, all) => (
                  <span key={line}>
                    {line}
                    {i < all.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h3>
              <p className="blog-excerpt">{featuredPost.excerpt}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </article>
        </div>

        <div className="blogs-grid" style={{ textAlign: "left" }}>
          {blogPosts.map((post) => (
            <article key={post.title} className="blog-card">
              <img src={post.image} alt="" />
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{post.category}</span> | {post.date}
                </div>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-excerpt" style={{ fontSize: "14px", marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
