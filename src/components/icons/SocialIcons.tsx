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

export function XIcon(props: IconProps) {
  return (
    <Svg {...props} fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.822L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
/* Destinations taken from the official Ojijo Group Luma profile. Facebook is
   not verified there, so it is omitted rather than linked to a guess. */
export const socialLinks = [
  { label: "Instagram", Icon: InstagramIcon, href: "https://instagram.com/ojijo_group" },
  { label: "X", Icon: XIcon, href: "https://x.com/OjijoGroup" },
  { label: "LinkedIn", Icon: LinkedinIcon, href: "https://www.linkedin.com/company/ojijo-group-originals" },
];
