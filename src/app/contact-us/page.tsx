import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${business.name} for appointments and salon enquiries.`,
};

export default function ContactUsPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
