export type PricingCategory = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  packages: PricingPackage[];
};

export type PricingPackage = {
  name: string;
  price: number;
  originalPrice?: number;
  services: string[];
  featured?: boolean;
};
