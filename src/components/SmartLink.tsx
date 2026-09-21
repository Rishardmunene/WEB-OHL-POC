import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export default function SmartLink({ href, children, className, external }: Props) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}
