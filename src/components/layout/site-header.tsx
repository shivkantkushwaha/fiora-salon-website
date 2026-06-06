"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { business, siteNav } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--luxury-black)]/95 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <span className="relative block h-12 w-36 sm:h-14 sm:w-44">
            <Image
              src="/logo.png"
              alt={business.name}
              fill
              priority
              sizes="176px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {siteNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white/80 transition hover:text-[var(--luxury-gold)]",
                  isActive && "text-[var(--luxury-gold)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[var(--luxury-gold)] hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)] lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[var(--luxury-black)] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 text-base font-medium text-white/85 transition last:border-b-0 hover:text-[var(--luxury-gold)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
