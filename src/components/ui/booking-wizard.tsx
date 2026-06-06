"use client";

import { useState } from "react";
import { ArrowRight, Calendar, CheckCircle, Clock, Phone, Sparkles, User } from "lucide-react";
import { business } from "@/data/site";
import { pricingCategories } from "@/data/pricing";

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = business.phoneInternational.replace(/[^0-9]/g, "");
    const message = `Hello! I would like to book an appointment:\n\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const isStepValid = () => {
    if (step === 1) return formData.service.length > 0;
    if (step === 2) return formData.date.length > 0 && formData.time.length > 0;
    if (step === 3) return formData.name.length > 0 && formData.phone.length > 0;
    return false;
  };

  return (
    <div className="flex flex-col">
      {/* Steps indicator */}
      <div className="relative mb-8 flex items-center justify-between">
        <div className="absolute left-0 top-1/2 -z-10 h-0.5 w-full -translate-y-1/2 bg-black/10"></div>
        <div className="absolute left-0 top-1/2 -z-10 h-0.5 -translate-y-1/2 bg-[var(--luxury-gold)] transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
        
        {[1, 2, 3].map((s) => (
          <div key={s} className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${step >= s ? "bg-[var(--luxury-gold)] text-[var(--luxury-black)]" : "border border-black/10 bg-white text-black/40"}`}>
            {s}
          </div>
        ))}
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="luxury-heading mb-4 text-2xl font-semibold text-[var(--luxury-black)]">What service are you looking for?</h3>
            <div className="grid gap-3">
              {pricingCategories.map((cat) => (
                <label key={cat.id} className={`flex cursor-pointer items-center gap-3 border p-4 transition-all hover:border-[var(--luxury-gold)] ${formData.service === cat.title ? "border-[var(--luxury-gold)] bg-[var(--luxury-gold)]/5" : "border-black/10 bg-white"}`}>
                  <input
                    type="radio"
                    name="service"
                    value={cat.title}
                    checked={formData.service === cat.title}
                    onChange={(e) => updateForm("service", e.target.value)}
                    className="sr-only"
                  />
                  <div className={`flex size-5 items-center justify-center rounded-full border ${formData.service === cat.title ? "border-[var(--luxury-gold)]" : "border-black/20"}`}>
                    {formData.service === cat.title && <div className="size-2.5 rounded-full bg-[var(--luxury-gold)]" />}
                  </div>
                  <span className="font-medium text-[var(--luxury-black)]">{cat.title}</span>
                </label>
              ))}
              <label className={`flex cursor-pointer items-center gap-3 border p-4 transition-all hover:border-[var(--luxury-gold)] ${formData.service === "Other / Not Sure" ? "border-[var(--luxury-gold)] bg-[var(--luxury-gold)]/5" : "border-black/10 bg-white"}`}>
                <input
                  type="radio"
                  name="service"
                  value="Other / Not Sure"
                  checked={formData.service === "Other / Not Sure"}
                  onChange={(e) => updateForm("service", e.target.value)}
                  className="sr-only"
                />
                <div className={`flex size-5 items-center justify-center rounded-full border ${formData.service === "Other / Not Sure" ? "border-[var(--luxury-gold)]" : "border-black/20"}`}>
                  {formData.service === "Other / Not Sure" && <div className="size-2.5 rounded-full bg-[var(--luxury-gold)]" />}
                </div>
                <span className="font-medium text-[var(--luxury-black)]">Other / Not Sure</span>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="luxury-heading mb-4 text-2xl font-semibold text-[var(--luxury-black)]">When would you like to visit?</h3>
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-black/70">
                <span className="flex items-center gap-2"><Calendar className="size-4" /> Date</span>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={(e) => updateForm("date", e.target.value)}
                  className="min-h-12 w-full border border-black/12 bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-black/70">
                <span className="flex items-center gap-2"><Clock className="size-4" /> Preferred Time</span>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => updateForm("time", e.target.value)}
                  className="min-h-12 w-full border border-black/12 bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)]"
                />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="luxury-heading mb-4 text-2xl font-semibold text-[var(--luxury-black)]">Your Details</h3>
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-black/70">
                <span className="flex items-center gap-2"><User className="size-4" /> Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  className="min-h-12 w-full border border-black/12 bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-black/70">
                <span className="flex items-center gap-2"><Phone className="size-4" /> Phone Number</span>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  className="min-h-12 w-full border border-black/12 bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)]"
                />
              </label>
            </div>
            <div className="mt-6 border border-[var(--luxury-gold)]/20 bg-[var(--luxury-gold)]/10 p-4 text-sm text-[var(--luxury-black)]">
              <p className="mb-1 flex items-center gap-2 font-semibold"><Sparkles className="size-4 text-[var(--luxury-gold-deep)]"/> Booking Summary</p>
              <p>{formData.service} on {formData.date} at {formData.time}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex min-h-12 items-center justify-center border border-black/20 bg-white px-6 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--luxury-black)] transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={!isStepValid()}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-[var(--luxury-black)] bg-[var(--luxury-black)] px-6 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-transparent hover:text-[var(--luxury-black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)] disabled:opacity-50 disabled:hover:bg-[var(--luxury-black)] disabled:hover:text-white"
          >
            {step === 3 ? "Book via WhatsApp" : "Continue"}
            {step < 3 && <ArrowRight className="size-4" />}
            {step === 3 && <CheckCircle className="size-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}