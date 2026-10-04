import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/SiteUI";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://academic-compass-az3yfwidp-kavindus-projects-a09fba5a.vercel.app"),
  title: { default: "PathwayLK | A Study Guide, at your home", template: "%s | PathwayLK" },
  description: "Home visit study guidance for Grade 6–9, O/L and A/L students in Sri Lanka. Structured revision, paper practice and updates for parents.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /><a className="mobile-contact" href="https://wa.me/94704401729?text=Hi%20PathwayLK%2C%20can%20we%20discuss%20study%20support%20for%20my%20child%3F" target="_blank" rel="noopener noreferrer">Let’s talk on WhatsApp</a></body></html>;
}
