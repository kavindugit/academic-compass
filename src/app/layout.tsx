import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
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
  title: "PathwayLK | Personal Academic Manager for O/L & A/L",
  description: "Sri Lanka's premium academic management program. We manage your child's O/L and A/L journey — tuition auditing, custom study systems, and guaranteed results.",
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
          <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
