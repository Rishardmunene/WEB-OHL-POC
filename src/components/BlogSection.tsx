import OrnamentalDivider from "@/components/OrnamentalDivider";
import SmartLink from "@/components/SmartLink";
import { trainingEvents, trainingIntro } from "@/content/group";

function Meta({ format, date }: { format: string; date: string }) {
  return (
    <p className="blog-meta">
      <span className="blog-meta__category">{format}</span>
      <span aria-hidden="true">|</span>
      <span>{date}</span>
    </p>
  );
}

export default function BlogSection() {
  const [featured, ...rest] = trainingEvents;

  return (
    <section className="section section--dark on-dark" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-head--center reveal">
          <h2 className="section-heading" id="blog-title">
            Upcoming training
          </h2>
          <OrnamentalDivider variant="center" />
          <p className="section-lead" style={{ marginInline: "auto" }}>
            Training that builds awareness and tighter organisational practice. Discovery here.
            Registration on Luma.
          </p>
        </div>

        <article className="blog__featured reveal">
          <div className="blog__featured-media">
            <img src="/images/blog-featured.jpg" alt="" loading="lazy" width={1000} height={640} decoding="async" />
          </div>
          <div>
            <Meta format={featured.format} date={featured.dateLabel} />
            <h3 className="blog__featured-title">{featured.title}</h3>
            <p className="blog-card__excerpt">{featured.summary}</p>
            <p className="event-meta">
              {featured.location}
              {featured.fee ? ` · ${featured.fee}` : ""}
              {featured.cpd ? ` · ${featured.cpd}` : ""}
            </p>
            <SmartLink className="read-more" href={featured.href} external>
              Register on Luma
            </SmartLink>
          </div>
        </article>

        <div className="blog__grid blog__grid--sparse">
          {rest.map((event, i) => (
            <article
              className="blog-card reveal"
              data-qa="blog-card"
              key={event.id}
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <div className="blog-card__media">
                <img
                  src={i === 0 ? "/images/blog-1.jpg" : "/images/blog-6.jpg"}
                  alt=""
                  loading="lazy"
                  width={700}
                  height={525}
                  decoding="async"
                />
              </div>
              <Meta format={event.format} date={event.dateLabel} />
              <h3 className="blog-card__title">{event.title}</h3>
              <p className="blog-card__excerpt">{event.summary}</p>
              <SmartLink className="read-more" href={event.href} external>
                Register on Luma
              </SmartLink>
            </article>
          ))}
        </div>

        <p className="section-foot">
          <SmartLink className="btn btn--outline-light" href="/training">
            All Group training
          </SmartLink>
          <SmartLink className="btn btn--learn" href={trainingIntro.calendarHref} external>
            {trainingIntro.calendarLabel}
          </SmartLink>
        </p>
      </div>
    </section>
  );
}
