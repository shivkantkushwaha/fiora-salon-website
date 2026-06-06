import Image from "next/image";
import Link from "next/link";
import { business, socialLinks } from "@/data/site";
import { workingHours } from "@/data/hours";
import { SocialIcon, type SocialIconName } from "@/components/ui/social-icon";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--luxury-black)] px-5 pt-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="relative block h-16 w-48" aria-label={`${business.name} home`}>
              <Image src="/logo.png" alt={business.name} fill sizes="192px" className="object-contain object-left" />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-8 text-white/70">
              Premium hair and beauty experiences in Indore, crafted with expert care, refined
              ambience, and luxury without the luxury price tag.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/60">{business.fullAddress}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--luxury-gold)]">Info</h2>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {workingHours.map((item) => (
                <li key={item.day} className="flex justify-between gap-5">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--luxury-gold)]">Company</h2>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/#services">Our Services</Link></li>
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/about-us">About Us</Link></li>
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/#gallery">Gallery</Link></li>
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/blog">Blog</Link></li>
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/contact-us">Contact Us</Link></li>
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link className="transition hover:text-[var(--luxury-gold)]" href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--luxury-gold)]">Socials</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center border border-white/20 text-white transition hover:border-[var(--luxury-gold)] hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
                  aria-label={item.label}
                >
                  <SocialIcon name={item.label as SocialIconName} className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-7 grid gap-2 text-sm text-white/70">
              <a className="transition hover:text-[var(--luxury-gold)]" href={`tel:${business.phoneInternational.replace(/\s/g, "")}`}>{business.phoneInternational}</a>
              {business.email ? (
                <a className="transition hover:text-[var(--luxury-gold)]" href={`mailto:${business.email}`}>{business.email}</a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a className="text-[var(--luxury-gold)] transition hover:text-white" href="https://www.linkedin.com/in/shivkantkushwaha/" target="_blank" rel="noreferrer">
              Shivkant Kushwaha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
