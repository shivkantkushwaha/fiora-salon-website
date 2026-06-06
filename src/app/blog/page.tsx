import type { Metadata } from "next";
import { EmptyPage } from "@/components/sections/empty-page";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read updates, beauty insights, and salon stories from {business.name}.",
};

export default function BlogPage() {
  return <EmptyPage eyebrow="Blog" title="No blog available as of now." />;
}
