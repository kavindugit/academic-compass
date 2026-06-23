import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pathwaylk.com"), // Placeholder domain
  title: {
    default: "PathwayLK | Home Visit Study Guidance",
    template: "%s | PathwayLK",
  },
  description:
    "Sri Lanka's premium home visit study guidance service. A trained Study Guide sits with your child, enforces focus, clears doubts, and reports to you. Grade 6 to A/L.",
  keywords: [
    "home visit study guide",
    "tuition Sri Lanka",
    "A/L tuition",
    "O/L tuition",
    "home tutor Colombo",
    "study focus",
    "PathwayLK",
    "exam preparation Sri Lanka",
  ],
  authors: [{ name: "PathwayLK" }],
  creator: "PathwayLK",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pathwaylk.com",
    title: "PathwayLK | Home Visit Study Guidance",
    description: "Reclaim your peace of mind. We send a trained Study Guide to your home to ensure your child actually studies.",
    siteName: "PathwayLK",
  },
  twitter: {
    card: "summary_large_image",
    title: "PathwayLK | Home Visit Study Guidance",
    description: "Reclaim your peace of mind. We send a trained Study Guide to your home to ensure your child actually studies.",
    creator: "@pathwaylk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased h-full overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col items-center relative z-10">
          {/* Reduced horizontal padding on mobile for breathing room */}
          <div className="w-full max-w-7xl px-3 sm:px-5 md:px-6 lg:px-8 py-4 md:py-8">
            {children}
          </div>
        </main>
        {/* Floating WhatsApp button — mobile only, appears on scroll */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
