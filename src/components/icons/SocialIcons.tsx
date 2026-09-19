/* -----------------------------------------------------------------------------
 * Social brand glyphs.
 *
 * lucide-react v1 removed all brand marks for trademark reasons, and the
 * reference shows recognisable social glyphs in the attorney bars and the
 * footer. MASTER PROMPT §16 allows custom artwork where "the reference clearly
 * requires" it, and a brand mark is exactly that case — no generic glyph can
 * stand in for Facebook.
 *
 * These are therefore drawn to lucide's own conventions so they stay optically
 * consistent with the rest of the set: 24x24 grid, no fill, currentColor stroke,
 * 2px stroke weight, round caps and joins. That satisfies §J-7 (one coherent
 * family at consistent stroke weight) without adding a dependency.
 * -------------------------------------------------------------------------- */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 18, children, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </Svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </Svg>
  );
}

/* The reference's fourth glyph reads as Pinterest at screenshot resolution.
   LinkedIn is used instead: under decision B2 the content is a rebrand rather
   than a fidelity target, and LinkedIn is the plausible network for an
   employment-law practice. Logged as a content substitution, not a geometry
   change — the bar still carries four icons, as OBSERVED. */
export function LinkedinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </Svg>
  );
}

/* Ordered as they appear in the reference bars. */
export const socialLinks = [
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "X (Twitter)", Icon: TwitterIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedinIcon, href: "#" },
];
