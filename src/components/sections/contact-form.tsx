"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitInquiry, type InquiryData } from "@/lib/inquiry-handler";

export function ContactForm() {
  const [formData, setFormData] = useState<InquiryData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else {
      // Basic check for digits (typically 10-15 digits globally)
      const digitsOnly = formData.phone.replace(/[^0-9]/g, "");
      if (digitsOnly.length < 10) {
        newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
      }
    }

    if (formData.email?.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please tell us a bit more (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user types
    if (errors[name as keyof InquiryData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitInquiry(formData);
      
      if (result.success) {
        setSubmitSuccess(true);
        
        if (result.redirectUrl) {
          setRedirectUrl(result.redirectUrl);
          // Attempt to open in a new tab
          const newTab = window.open(result.redirectUrl, "_blank", "noopener,noreferrer");
          // If popup is blocked by browser, redirect current window as fallback
          if (!newTab) {
            window.location.href = result.redirectUrl;
          }
        }
        
        // Reset form data on success
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to submit enquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6">
      {submitSuccess ? (
        <div className="border border-[var(--luxury-gold)] bg-[var(--warm-white)] p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.06)] animate-fadeIn">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--luxury-gold)]/10 text-[var(--luxury-gold-deep)]">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[var(--luxury-black)] luxury-heading">
            Enquiry Initiated!
          </h3>
          <p className="mt-2 text-sm text-black/70">
            We are redirecting you to WhatsApp to complete your enquiry.
          </p>
          {redirectUrl && (
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-[var(--luxury-black)] bg-[var(--luxury-black)] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-transparent hover:text-[var(--luxury-black)]"
            >
              Click here if not redirected
            </a>
          )}
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setRedirectUrl(null);
            }}
            className="mt-4 block w-full text-xs font-semibold uppercase tracking-[0.12em] text-[var(--luxury-gold-deep)] hover:underline"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="border border-[var(--luxury-gold)]/30 bg-[var(--warm-white)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:p-8"
        >
          {submitError && (
            <div className="mb-6 flex gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
              <span>{submitError}</span>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-black/70">
              Name *
              <input
                className={`min-h-12 border bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)] ${
                  errors.name ? "border-red-400" : "border-black/12"
                }`}
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              />
              {errors.name && (
                <span className="text-xs font-medium text-red-600 animate-slideDown">{errors.name}</span>
              )}
            </label>

            <label className="grid gap-2 text-sm font-semibold text-black/70">
              Phone *
              <input
                className={`min-h-12 border bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)] ${
                  errors.phone ? "border-red-400" : "border-black/12"
                }`}
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              />
              {errors.phone && (
                <span className="text-xs font-medium text-red-600 animate-slideDown">{errors.phone}</span>
              )}
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-semibold text-black/70">
            Email (Optional)
            <input
              className={`min-h-12 border bg-white px-4 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)] ${
                errors.email ? "border-red-400" : "border-black/12"
              }`}
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="text-xs font-medium text-red-600 animate-slideDown">{errors.email}</span>
            )}
          </label>

          <label className="mt-5 grid gap-2 text-sm font-semibold text-black/70">
            Message *
            <textarea
              className={`min-h-32 resize-y border bg-white px-4 py-3 font-normal text-black outline-none transition focus:border-[var(--luxury-gold)] ${
                errors.message ? "border-red-400" : "border-black/12"
              }`}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />
            {errors.message && (
              <span className="text-xs font-medium text-red-600 animate-slideDown">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[var(--luxury-black)] bg-[var(--luxury-black)] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-transparent hover:text-[var(--luxury-black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                Sending...
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              </>
            ) : (
              <>
                Send Enquiry
                <Send className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
