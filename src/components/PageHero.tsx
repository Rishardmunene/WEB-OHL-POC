import OrnamentalDivider from "@/components/OrnamentalDivider";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="page-hero on-dark">
      <div className="container">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        <OrnamentalDivider />
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
      </div>
    </header>
  );
}
