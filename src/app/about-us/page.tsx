import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about-page";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${business.name} and its premium salon experience in ${business.city}, ${business.state}.`,
};

export default function AboutUsPage() {
  return <AboutPage />;
}
