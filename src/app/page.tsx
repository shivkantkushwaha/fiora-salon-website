import { HomeAbout } from "@/components/sections/home-about";
import { HomeHero } from "@/components/sections/home-hero";
import { ServicesPricing } from "@/components/sections/services-pricing";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
//import { Gallery } from "@/components/sections/gallery";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <ServicesPricing />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
