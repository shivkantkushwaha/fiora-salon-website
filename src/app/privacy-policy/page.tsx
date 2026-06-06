import type { Metadata } from "next";
import { EmptyPage } from "@/components/sections/empty-page";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
};

export default function PrivacyPolicyPage() {
  return <EmptyPage eyebrow="Privacy Policy" title="Privacy policy content will be added soon." />;
}
