"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Scissors } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { business, heroSlides } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  const slideCount = heroSlides.length;
  const nextSlide = useMemo(
    () => () => setActiveSlide((current) => (current + 1) % slideCount),
    [slideCount]
  );
  const previousSlide = () => setActiveSlide((current) => (current - 1 + slideCount) % slideCount);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 5200);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[var(--luxury-black)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#050505_0%,#1a1510_45%,#050505_100%)]" />
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide.src}
          initial={{ x: "100%", opacity: 0.55 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0.45 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            priority={activeSlide === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.38)_48%,rgba(0,0,0,0.3))]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--luxury-gold)]">
            Premium salon experience in Indore
          </p>
          <h1 className="luxury-heading text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {business.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            A refined beauty destination for hair, grooming, and self-care, designed around
            elegance, comfort, and confident transformations.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" className="gap-2">
                  <Phone className="size-4" aria-hidden="true" />
                  Book Appointment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="luxury-heading pr-8 text-3xl font-semibold leading-tight">
                  Book your appointment
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-7 text-black/70">
                  Call {business.name} now to reserve your preferred time and speak directly
                  with the salon team.
                </DialogDescription>
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--luxury-black)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call {business.phone}
                </a>
              </DialogContent>
            </Dialog>

            <Button type="button" variant="secondary" className="gap-2" onClick={scrollToServices}>
              <Scissors className="size-4" aria-hidden="true" />
              Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-6 z-20 mx-auto flex max-w-7xl items-center justify-between sm:inset-x-8 lg:inset-x-12">
        <div className="flex gap-2" aria-label="Hero slide position">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide ? "w-10 bg-[var(--luxury-gold)]" : "w-4 bg-white/45"
              }`}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white backdrop-blur transition hover:border-[var(--luxury-gold)] hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
            aria-label="Show previous salon image"
            onClick={previousSlide}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white backdrop-blur transition hover:border-[var(--luxury-gold)] hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
            aria-label="Show next salon image"
            onClick={nextSlide}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
