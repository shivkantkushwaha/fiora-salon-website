import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";
import { business } from "@/data/site";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Premium Salon in Indore`,
    template: `%s | ${business.name}`,
  },
  description:
    `${business.name} in ${business.city}, ${business.state} offers premium beauty, hair, grooming, and salon experiences with elegant service and trusted expertise.`,
  metadataBase: new URL(`${business.domain.startsWith("http") ? business.domain : `https://${business.domain}`}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} antialiased`} suppressHydrationWarning>
        <SiteHeader />
        {children}
        <WhatsAppWidget />
        <SiteFooter />
      </body>
    </html>
  );
}
