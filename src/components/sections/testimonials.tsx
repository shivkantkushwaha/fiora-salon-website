import { ExternalLink, Quote, Star } from "lucide-react";
import { googleReviewsUrl, testimonials } from "@/data/testimonials";
import { business } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-[var(--luxury-black)] px-5 py-24 text-white sm:px-8 lg:px-12" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold)]">
              Client Words
            </p>
            <h2 id="testimonials-heading" className="luxury-heading max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
              What our clients say about {business.name}.
            </h2>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--luxury-gold)] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--luxury-gold)] transition hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
          >
            View All Reviews
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
              <div className="flex items-start justify-between gap-4">
                <Quote className="size-8 text-[var(--luxury-gold)]" aria-hidden="true" />
                <div className="flex gap-1 text-[var(--luxury-gold)]" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="mt-6 min-h-28 text-base leading-8 text-white/80">{review.content}</p>
              <div className="mt-7 border-t border-white/10 pt-5">
                <h3 className="font-semibold text-white">{review.name}</h3>
                <p className="mt-1 text-sm text-[var(--luxury-gold)]">{review.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
