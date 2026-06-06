import Link from "next/link";
import { type SVGProps } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, socialLinks } from "@/data/site";
import { CountUpStat } from "@/components/sections/count-up-stat";

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.999.001A4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.4V6.8c0-.7.5-1.3 1.3-1.3H17V2.2c-.9-.1-1.8-.2-2.7-.2-2.8 0-4.7 1.7-4.7 4.8v1.6H6.5V12h3.1v9.8h3.8V12h3.1l.5-3.6h-3Z" />
    </svg>
  );
}

function YouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1C2 8.9 2 12 2 12s0 3.1.4 4.9A3 3 0 0 0 4.5 19c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.4-1.8.4-4.9.4-4.9s0-3.1-.4-4.9ZM10 15.3V8.7l5.8 3.3L10 15.3Z" />
    </svg>
  );
}

function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.1 8.8H1.8V22h3.3V8.8ZM3.4 2.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM22.2 14.7c0-4-2.1-5.9-4.9-5.9-2.2 0-3.2 1.2-3.8 2.1V8.8h-3.2V22h3.3v-6.5c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V22h3.3v-7.3h.7Z" />
    </svg>
  );
}

const serviceItems = [
  {
    title: "Haircuts & Styling",
    text: "From classic cuts to the latest trends, our skilled stylists are experts in creating looks that enhance your natural beauty.",
  },
  {
    title: "Blow Dry",
    text: "Achieve a polished, salon-finish look with our professional blow-dry services.",
  },
  {
    title: "Balayage & Color Treatments",
    text: "Whether you are looking for subtle highlights or a bold new color, our color specialists use top-quality products to ensure stunning results.",
  },
  {
    title: "Keratin & Smoothening",
    text: "Tame frizz and achieve silky, smooth hair with our keratin and smoothening treatments.",
  },
  {
    title: "Manicures & Pedicures",
    text: "Treat your hands and feet to luxurious care with our range of manicures and pedicures.",
  },
  {
    title: "Facials & Skin Care",
    text: "Rejuvenate your skin with our customized facial treatments designed to leave you glowing.",
  },
  {
    title: "Waxing",
    text: "Experience smooth, hair-free skin with our professional waxing services.",
  },
];

const reasons = [
  {
    title: "Experienced Professionals",
    text: "Our team of experienced and certified professionals is dedicated to providing you with the highest standard of service. We continuously update our skills to stay abreast of the latest trends and techniques in the beauty industry.",
  },
  {
    title: "Quality Products",
    text: "We use only the best quality products from leading brands to ensure that you receive the best possible results from every treatment.",
  },
  {
    title: "Luxurious Ambience",
    text: "Step into a serene and luxurious environment where you can relax and unwind while we take care of your beauty needs.",
  },
  {
    title: "Personalized Attention",
    text: "We believe in personalized service. Our team takes the time to understand your preferences and needs to deliver a tailored experience that leaves you looking and feeling your best.",
  },
];

const icons = {
  Instagram,
  Facebook,
  YouTube,
  LinkedIn,
};

export function AboutPage() {
  return (
    <main className="bg-[var(--warm-white)] text-[var(--luxury-black)]">
      <section className="relative isolate flex min-h-[42vh] items-center justify-center overflow-hidden px-5 py-20 text-center sm:px-8 lg:px-12">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-50 brightness-65"
          style={{ backgroundImage: "url('/aboutbg.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <h1 className="luxury-heading text-6xl font-semibold text-[var(--luxury-gold)] sm:text-7xl lg:text-8xl">
          About Us
        </h1>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <CountUpStat value={8} label="Year Experience" suffix="+" />
          <CountUpStat value={2000} label="Happy Clients" suffix="+" />
          <CountUpStat value={226} label="Positive Feedback" suffix="+" />
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <aside className="border border-[var(--luxury-gold)]/30 bg-[var(--luxury-black)] p-8 text-white lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold)]">
                Our Story
              </p>
              <h2 className="luxury-heading mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                A polished unisex salon experience in Indore.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                Located at Scheme No 140, Fiora Unisex Salon brings hair, beauty, grooming, and
                self-care services together in a welcoming space for women and men.
              </p>
            </aside>

            <div className="space-y-8">
              <article className="border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:p-10">
                <h2 className="luxury-heading text-4xl font-semibold">Our Story</h2>
                <p className="mt-5 text-base leading-8 text-black/70">
                  Fiora Unisex Salon is built around simple, thoughtful care: understand the look
                  you want, suggest what suits you, and deliver a salon experience that feels calm,
                  clean, and confident from the moment you walk in. Whether it is a regular grooming
                  visit or a complete beauty refresh, the focus stays on comfort, detail, and results
                  you can carry with ease.
                </p>
              </article>

              <article className="border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:p-10">
                <h2 className="luxury-heading text-4xl font-semibold">Our Services</h2>
                <p className="mt-5 text-base leading-8 text-black/70">
                  At Fiora Unisex Salon, we offer a wide range of hair, grooming, skin, nail, and
                  beauty services designed for everyday upkeep as well as special occasions.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {serviceItems.map((item) => (
                    <div key={item.title} className="border-l-2 border-[var(--luxury-gold)] bg-[#fbfaf7] p-5">
                      <h3 className="font-semibold text-[var(--luxury-black)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-black/70">{item.text}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:p-10">
                <h2 className="luxury-heading text-4xl font-semibold">Why Choose Us?</h2>
                <div className="mt-8 grid gap-5">
                  {reasons.map((item) => (
                    <section key={item.title} className="border-b border-black/10 pb-5 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold text-[var(--luxury-gold-deep)]">{item.title}</h3>
                      <p className="mt-2 text-base leading-8 text-black/70">{item.text}</p>
                    </section>
                  ))}
                </div>
              </article>

              <article className="border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:p-10">
                <h2 className="luxury-heading text-4xl font-semibold">Our Commitment</h2>
                <p className="mt-5 text-base leading-8 text-black/70">
                  At Fiora Unisex Salon, every appointment is handled with care, hygiene, and
                  attention to personal preference. Our goal is to make every client feel heard,
                  looked after, and ready to leave with a finish that feels naturally theirs.
                </p>
              </article>

              <article className="border border-[var(--luxury-gold)]/35 bg-[var(--luxury-black)] p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:p-10">
                <h2 className="luxury-heading text-4xl font-semibold text-[var(--luxury-gold)]">
                  Book Your Appointment
                </h2>
                <p className="mt-5 text-base leading-8 text-white/80">
                  Ready for your next haircut, grooming session, facial, nail service, or beauty
                  treatment? Book your appointment with Fiora Unisex Salon and visit us in Indore
                  for a polished salon experience made around your style, comfort, and confidence.
                </p>

                <div className="mt-8 grid gap-4 text-sm text-white/80">
                  {business.email ? (
                    <a className="flex gap-3 hover:text-[var(--luxury-gold)]" href={`mailto:${business.email}`}>
                      <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {business.email}
                    </a>
                  ) : null}
                  <a
                    className="flex gap-3 hover:text-[var(--luxury-gold)]"
                    href={`tel:${business.phoneInternational.replace(/\s/g, "")}`}
                  >
                    <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {business.phoneInternational}
                  </a>
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--luxury-gold)]" aria-hidden="true" />
                    {business.fullAddress}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = icons[item.label as keyof typeof icons];
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex size-11 items-center justify-center border border-white/20 text-white transition hover:border-[var(--luxury-gold)] hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
                        aria-label={item.label}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </article>

              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center border border-[var(--luxury-black)] bg-[var(--luxury-black)] px-8 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-transparent hover:text-[var(--luxury-black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
