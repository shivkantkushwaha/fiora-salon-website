import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeAbout() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--luxury-black)] px-5 py-24 text-white sm:px-8 lg:px-12"
      aria-labelledby="home-about-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-55 brightness-65" //change opacrity & brightness to incease "aboutbg" image opacirty brightness
        style={{ backgroundImage: "url('/aboutbg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(200,161,74,0.16),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.88))]" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="luxury-heading text-5xl font-semibold text-[var(--luxury-gold)] sm:text-6xl">
          About Us
        </p>
        <h2
          id="home-about-heading"
          className="luxury-heading mt-8 text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Welcome to Fiora Unisex Salon
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
          where luxury meets affordability in the heart of Indore. We are your ultimate
          destination for premium hair and beauty services, committed to providing an exceptional
          salon experience tailored to your unique needs.
        </p>
        <Link
          href="/about-us"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--luxury-gold)] bg-[var(--luxury-gold)] px-8 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--luxury-black)] transition hover:bg-transparent hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
        >
          Read More
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
