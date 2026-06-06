import type { Metadata } from "next";
import { EmptyPage } from "@/components/sections/empty-page";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for ${business.name}.`,
};

export default function TermsAndConditionsPage() {
  return (
    <EmptyPage eyebrow="Terms and Conditions" title="Terms and conditions will be added soon." />
  );
}
