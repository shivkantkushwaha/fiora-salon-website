"use client";

import { useEffect, useState } from "react";
import { Gift, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { business } from "@/data/site";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup was already shown in the current browser session
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (hasShown) return;

    const handleMouseOut = (e: MouseEvent) => {
      // Detect if the mouse is moving towards the top of the screen (e.g., to close the tab)
      if (e.clientY <= 0) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
        document.removeEventListener("mouseout", handleMouseOut);
      }
    };

    // Add a slight delay before arming the trigger so it doesn't fire immediately on page load
    const timeoutId = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseOut);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const phoneNumber = business.phoneInternational.replace(/[^0-9]/g, "");
  const message = "Hello! I saw the popup and would like to claim my 10% discount on my first visit.";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="text-center sm:max-w-md">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-[var(--luxury-gold)]/10 text-[var(--luxury-gold-deep)]">
          <Gift className="size-6" aria-hidden="true" />
        </div>
        <DialogTitle className="luxury-heading text-3xl font-semibold leading-tight">
          Wait! Before you go...
        </DialogTitle>
        <DialogDescription className="mt-3 text-base leading-7 text-black/70">
          Claim <span className="font-semibold text-[var(--luxury-black)]">10% off</span> your first visit. Book your appointment now and experience premium salon care.
        </DialogDescription>
        <div className="mt-8 flex flex-col gap-4">
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.25)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-[0_8px_20px_rgba(37,211,102,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]">
            <Phone className="size-4" aria-hidden="true" />
            Chat on WhatsApp to Claim
          </a>
          <button type="button" onClick={() => setIsOpen(false)} className="mt-2 cursor-pointer p-2 text-xs font-semibold uppercase tracking-[0.1em] text-black/40 transition hover:text-[var(--luxury-black)]">
            No thanks, I'll pay full price
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}