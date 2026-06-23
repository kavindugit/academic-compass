import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Help",
  description:
    "During every home-visit session, our Study Guide can run paper practice, recap lessons, or help your child through doubts - all for Grade 6-9 and O/L students. A/L students get dedicated full-session focus enforcement.",
  openGraph: {
    title: "How We Help | PathwayLK",
    description: "Detailed breakdown of our home visit sessions. Paper practice, recap lessons, study assistance, and A/L focus enforcement.",
    url: "https://www.pathwaylk.com/our-service/how-we-help",
  },
};

import HowWeHelpTabs from "./HowWeHelpTabs";

export default function HowWeHelpPage() {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-20 w-full relative py-4 md:py-8">
      {/* ── HERO ── */}
      <section className="w-full relative z-10 animate-slide-up mt-2 text-center">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "hsl(243 75% 60%)" }}
        >
          Session Modes
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
          Three Ways We Help Your Child{" "}
          <span className="shimmer-text">During Every Session.</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto mb-6 px-4">
          Our Study Guide doesn't just watch your child study - they actively shape
          how that study time is used. Select your child's grade below to see exactly what they can do during a
          home-visit session.
        </p>
      </section>

      {/* ── TABS UI ── */}
      <HowWeHelpTabs />

      {/* ── CTA ── */}
      <section className="w-full relative z-10 animate-fade-in text-center px-2 sm:px-4" style={{ animationDelay: "0.55s" }}>
        <div
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-16 max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(135deg, hsl(243 75% 60% / 0.10) 0%, hsl(38 95% 50% / 0.08) 100%)",
            boxShadow: "0 0 0 1px hsl(243 75% 60% / 0.18)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, hsl(243 75% 60% / 0.10), transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-foreground tracking-tight">
              Ready To Book A Session?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-medium mb-8 max-w-lg mx-auto">
              Message us on WhatsApp. We'll assign the right Study Guide and get started within 3 days.
            </p>
            <Link
              href="/our-service"
              className="btn-secondary text-base px-6 py-3 inline-flex justify-center items-center gap-2 w-full sm:w-auto"
            >
              Back to Our Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
