import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/data/site";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-5 py-24 sm:px-8 lg:px-12" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold-deep)]">
              Contact Us
            </p>
            <h2 id="contact-heading" className="luxury-heading text-5xl font-semibold leading-tight text-[var(--luxury-black)] sm:text-6xl">
              Reserve your next salon experience.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-black/70">
              Visit Fiora Unisex Salon in Indore or send an enquiry and the salon team
              will help you choose the right service.
            </p>

            <div className="mt-9 grid gap-4">
              <a href={`tel:${business.phoneInternational.replace(/\s/g, "")}`} className="flex gap-4 border border-black/10 p-5 transition hover:border-[var(--luxury-gold)]">
                <Phone className="size-5 shrink-0 text-[var(--luxury-gold-deep)]" aria-hidden="true" />
                <span>{business.phoneInternational}</span>
              </a>
              {business.email ? (
                <a href={`mailto:${business.email}`} className="flex gap-4 border border-black/10 p-5 transition hover:border-[var(--luxury-gold)]">
                  <Mail className="size-5 shrink-0 text-[var(--luxury-gold-deep)]" aria-hidden="true" />
                  <span>{business.email}</span>
                </a>
              ) : null}
              <p className="flex gap-4 border border-black/10 p-5">
                <a href={`https://maps.app.goo.gl/6oC8b1UtsoyQK3XX7`} target="_blank" rel="noreferrer" className="flex gap-4">
                  <MapPin className="size-5 shrink-0 text-[var(--luxury-gold-deep)]" aria-hidden="true" />
                  <span>{business.fullAddress}</span>
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <ContactForm />
            <iframe
              title="Fiora Unisex Salon location map"
              src="https://www.google.com/maps?q=Fiora%20Unisex%20Salon%20PW67%2B3MX%20140%20Scheme%20No%20140%20Indore%20Madhya%20Pradesh%20452016&output=embed"
              className="h-80 w-full border border-black/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
