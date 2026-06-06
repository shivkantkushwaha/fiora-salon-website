import type { SVGProps } from "react";

export type SocialIconName = "Instagram" | "Facebook" | "YouTube" | "LinkedIn";

export function SocialIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: SocialIconName }) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-7.999.001A4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 8.4V6.8c0-.7.5-1.3 1.3-1.3H17V2.2c-.9-.1-1.8-.2-2.7-.2-2.8 0-4.7 1.7-4.7 4.8v1.6H6.5V12h3.1v9.8h3.8V12h3.1l.5-3.6h-3Z" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1C2 8.9 2 12 2 12s0 3.1.4 4.9A3 3 0 0 0 4.5 19c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.4-1.8.4-4.9.4-4.9s0-3.1-.4-4.9ZM10 15.3V8.7l5.8 3.3L10 15.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.1 8.8H1.8V22h3.3V8.8ZM3.4 2.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM22.2 14.7c0-4-2.1-5.9-4.9-5.9-2.2 0-3.2 1.2-3.8 2.1V8.8h-3.2V22h3.3v-6.5c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V22h3.3v-7.3h.7Z" />
    </svg>
  );
}
