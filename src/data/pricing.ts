import type { PricingCategory } from "@/types/pricing";

export const pricingCategories: PricingCategory[] = [
  {
    id: "men",
    title: "Men Packages",
    eyebrow: "Men Special Offer",
    description:
      "Curated grooming combinations for sharp cuts, relaxed care, and polished everyday confidence.",
    accent: "For refined grooming",
    packages: [
      {
        name: "Essential Groom",
        price: 4900,
        services: ["Haircut", "Beard/Shave", "Hair Wash", "D-Tan", "Facial"],
      },
      {
        name: "Style Refresh",
        price: 4500,
        services: ["Haircut", "Hair Color", "Foot Massage", "Hair Spa", "D-Tan/Bleach"],
      },
      {
        name: "Luxury Grooming Ritual",
        price: 8850,
        services: ["Facial", "Senior Stylist Haircut", "Luxury Pedicure", "Beard/Shave", "Premium Hair Spa"],
        featured: true,
      },
      {
        name: "Clean Classic",
        price: 4100,
        services: ["Haircut", "Head Massage", "Clean Up", "Pedicure/Manicure"],
      },
    ],
  },
  {
    id: "women",
    title: "Women Packages",
    eyebrow: "Women Special Offer",
    description:
      "Beauty bundles designed for glow, polish, smooth skin, and salon-fresh finishing.",
    accent: "Most loved combinations",
    packages: [
      {
        name: "Nail & Glow Edit",
        price: 4500,
        services: ["Nail Extensions", "Gel Nail Paint", "Manicure", "Nail Removal", "D-Tan/Bleach"],
      },
      {
        name: "Polished Beauty",
        price: 4500,
        services: ["Touch Up", "Pedicure/Manicure", "D-Tan/Bleach", "Eyebrows & Upper Lips", "Haircut/Trim"],
      },
      {
        name: "Signature Glow Ritual",
        price: 8300,
        services: ["Facial", "D-Tan/Bleach", "Haircut", "Pedicure/Manicure", "Olaplex Ritual"],
        featured: true,
      },
      {
        name: "Smooth & Sculpt",
        price: 7600,
        services: ["Bikini Wax", "Full Body Wax", "D-Tan/Bleach", "Eyebrows", "Upper Lips", "Forehead"],
      },
      {
        name: "Everyday Glow",
        price: 5600,
        services: ["Facial", "D-Tan", "Full Arms & Legs Wax", "Eyebrows", "Upper Lips", "Forehead"],
      },
    ],
  },
  {
    id: "beauty",
    title: "Beauty Packages",
    eyebrow: "Beauty Packages",
    description:
      "Focused facial and cleanup packages for glow, freshness, and a well-kept beauty routine.",
    accent: "Your perfect beauty routine",
    packages: [
      {
        name: "Classic Facial Routine",
        price: 3499,
        services: ["Classic Facial", "Shampoo", "Manicure"],
      },
      {
        name: "Premium Facial",
        price: 4499,
        services: ["Premium Facial", "Skin Consultation", "Glow Finish"],
        featured: true,
      },
      {
        name: "Basic Cleanup",
        price: 1499,
        services: ["Basic Cleanup", "Skin Freshening", "Quick Glow Care"],
      },
      {
        name: "Premium Cleanup",
        price: 2499,
        services: ["Premium Cleanup", "D-Tan", "Face Bleach"],
      },
    ],
  },
];
