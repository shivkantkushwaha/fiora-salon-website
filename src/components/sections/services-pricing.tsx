"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Crown, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { business } from "@/data/site";
import { pricingCategories } from "@/data/pricing";
import { cn } from "@/lib/utils";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export function ServicesPricing() {
  const [activeCategoryId, setActiveCategoryId] = useState(pricingCategories[1]?.id ?? "women");
  const activeCategory =
    pricingCategories.find((category) => category.id === activeCategoryId) ?? pricingCategories[0];

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[var(--warm-white)] px-5 py-24 sm:px-8 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[var(--luxury-black)] sm:h-[32rem] lg:h-[30rem]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-24 -z-10 h-72 w-[min(68rem,88vw)] -translate-x-1/2 border border-[var(--luxury-gold)]/20"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 text-white lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold)]">
              <Sparkles className="size-4" aria-hidden="true" />
              Our Services
            </p>
            <h2
              id="services-heading"
              className="luxury-heading max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
            >
              Premium packages crafted for visible results.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/75 lg:ml-auto">
            Clear, curated salon packages make it easy to choose the right experience and book with
            confidence. No clutter, no confusing tables, just polished options for men, women, and
            beauty care.
          </p>
        </div>

        <div className="mt-16 border border-[var(--luxury-gold)]/25 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.14)] sm:mt-14">
          <div className="grid gap-3 md:grid-cols-3" role="tablist" aria-label="Pricing categories">
            {pricingCategories.map((category) => {
              const isActive = category.id === activeCategory.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${category.id}-pricing-panel`}
                  className={cn(
                    "group border px-5 py-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]",
                    isActive
                      ? "border-[var(--luxury-gold)] bg-[var(--luxury-black)] text-white"
                      : "border-black/10 bg-[#fbfaf7] text-[var(--luxury-black)] hover:border-[var(--luxury-gold)]/50"
                  )}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.16em]",
                      isActive ? "text-[var(--luxury-gold)]" : "text-[var(--luxury-gold-deep)]"
                    )}
                  >
                    {category.eyebrow}
                  </span>
                  <span className="luxury-heading mt-2 block text-3xl font-semibold">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeCategory.id}
            id={`${activeCategory.id}-pricing-panel`}
            role="tabpanel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-3 bg-[#fbfaf7] p-5 sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="border border-[var(--luxury-gold)]/30 bg-[var(--luxury-black)] p-7 text-white lg:sticky lg:top-28">
                <Crown className="size-9 text-[var(--luxury-gold)]" aria-hidden="true" />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold)]">
                  {activeCategory.accent}
                </p>
                <h3 className="luxury-heading mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  {activeCategory.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-white/75">{activeCategory.description}</p>
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--luxury-gold)] bg-[var(--luxury-gold)] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--luxury-black)] transition hover:bg-transparent hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Book Now
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {activeCategory.packages.map((item, index) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                    className={cn(
                      "relative overflow-hidden border bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.07)]",
                      item.featured
                        ? "border-[var(--luxury-gold)] ring-1 ring-[var(--luxury-gold)]/40"
                        : "border-black/10"
                    )}
                  >
                    {item.featured ? (
                      <div className="absolute right-0 top-0 bg-[var(--luxury-gold)] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--luxury-black)]">
                        Best Value
                      </div>
                    ) : null}

                    <div className="pr-20">
                      <h4 className="luxury-heading text-3xl font-semibold leading-tight text-[var(--luxury-black)]">
                        {item.name}
                      </h4>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--luxury-gold-deep)]">
                        Package Includes
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-end gap-3">
                      <span className="luxury-heading text-5xl font-semibold text-[var(--luxury-black)]">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice ? (
                        <span className="pb-2 text-sm font-medium text-black/45 line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                      ) : null}
                    </div>

                    <ul className="mt-6 grid gap-3">
                      {item.services.map((service) => (
                        <li key={service} className="flex gap-3 text-sm leading-6 text-black/70">
                          <BadgeCheck className="mt-0.5 size-4 shrink-0 text-[var(--luxury-gold-deep)]" aria-hidden="true" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`tel:${business.phone.replace(/\s/g, "")}`}
                      className="mt-7 inline-flex w-full min-h-11 items-center justify-center gap-2 border border-[var(--luxury-black)] bg-transparent px-5 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--luxury-black)] transition hover:bg-[var(--luxury-black)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
                    >
                      Choose Package
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
