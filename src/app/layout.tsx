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
  title: "PathwayLK | Home Visit Study Guide for Grade 6–9, O/L & A/L",
  description:
    "Sri Lanka's home visit study guidance service. A trained Study Guide comes to your home, sits with your child, keeps them focused, and reports to you after every session. Covering Grade 6 through A/L.",
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
