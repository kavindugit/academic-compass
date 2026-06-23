"use client";
import Link from "next/link";
import { useState } from "react";

const tickerItems = [
  "We Come To Your Home",
  "We Sit With Your Child",
  "We Report To You",
  "No Travel Needed",
  "A Dedicated Study Guide",
  "Weekly Progress Reports",
  "Instant Doubt Clearing",
  "Grade 6 to A/L - Fully Covered",
];

const WA_BASE = "https://wa.me/+94704401729?text=";
const WA_LINKS = {
  grade69: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your Grade 6-9 home study plan for my child."),
  ol: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your GCE O/L home study plan for my child."),
  al: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your GCE A/L home study plan for my child."),
  general: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to know more about your services."),
};

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowRight = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Home() {
  const allTickers = [...tickerItems, ...tickerItems];

  return (
    // gap-10 on mobile (40px), gap-16 on tablet, gap-20 on desktop
    <div className="flex flex-col items-center justify-center py-4 md:py-8 gap-10 md:gap-16 lg:gap-20 w-full relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="hero-gradient opacity-70"></div>
      </div>

      {/* ── Hero Section ── */}
      <section className="text-center mt-4 md:mt-12 max-w-5xl w-full mx-auto relative z-10">


        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground animate-slide-up leading-[1.1]">
          Your Child&apos;s Dream.{" "}
          <span className="shimmer-text">Our Ultimate Guidance.</span>
        </h1>

        {/* Bold one-liner - immediately scannable on mobile */}
        <p
          className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-6 sm:mb-8 animate-slide-up px-1"
          style={{ animationDelay: "0.08s" }}
        >
          We send a Study Guide to your home - they sit with your child and make sure they actually study.
        </p>

        {/* ── Grade Selector - always 3-col horizontal grid on mobile ── */}
        <div className="animate-slide-up mb-6" style={{ animationDelay: "0.15s" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "hsl(243 75% 60%)" }}>
            My child is in →
          </p>
          {/* 3 Premium interactive cards - stacked on mobile, row on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4 sm:px-0">
            {[
              { key: "grade69", label: "Grade 6-9", icon: "🏫", color: "hsl(243 75% 60%)", price: "10,000 / week", href: "/our-service/how-we-help#grade69" },
              { key: "ol", label: "GCE O/L", icon: "📘", color: "hsl(38 95% 45%)", price: "15,000 / week", href: "/our-service/how-we-help#ol" },
              { key: "al", label: "GCE A/L", icon: "🎓", color: "hsl(22 90% 52%)", price: "30,000 / week", href: "/our-service/how-we-help#al" },
            ].map((g) => (
              <Link
                key={g.key}
                href={g.href}
                className="group relative flex flex-col items-center justify-center py-4 sm:py-6 px-1 sm:px-4 rounded-2xl sm:rounded-3xl border border-border/60 bg-background/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                style={{
                  boxShadow: "0 8px 30px -10px rgba(0,0,0,0.08)"
                }}
              >
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${g.color.replace('hsl', 'hsla').replace(')', ' / 0.08)')} 0%, transparent 70%)` }}
                />

                {/* Glowing border effect */}
                <div
                  className="absolute inset-0 border-2 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ borderColor: g.color }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-2 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-md">
                    <span className="text-3xl sm:text-5xl">{g.icon}</span>
                  </div>

                  <h3 className="text-[11px] sm:text-lg font-extrabold text-foreground tracking-tight text-center mb-1.5 sm:mb-2 transition-colors duration-300" style={{ '--hover-color': g.color } as React.CSSProperties}>
                    {g.label}
                  </h3>

                  <span className="text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all duration-300 group-hover:scale-105 mb-2 sm:mb-3" style={{ color: g.color, background: `${g.color.replace('hsl', 'hsla').replace(')', ' / 0.1)')}` }}>
                    LKR {g.price}
                  </span>

                  {/* Click affordance */}
                  <div className="flex items-center gap-1 text-[10px] sm:text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{ color: g.color }}>
                    See Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Main CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg w-full sm:w-auto justify-center flex items-center gap-2 py-3 sm:py-3"
          >
            <WhatsAppIcon size={18} />
            Book via WhatsApp
          </a>
          <Link href="/our-service" className="btn-secondary text-base sm:text-lg w-full sm:w-auto justify-center flex items-center py-3 sm:py-3">
            How It Works
          </Link>
        </div>

        {/* ── Ticker Strip ── */}
        <div className="mt-8 w-full overflow-hidden relative animate-slide-up" style={{ animationDelay: "0.35s" }}>
          <div className="absolute left-0 top-0 h-full w-10 sm:w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--color-background), transparent)" }} />
          <div className="absolute right-0 top-0 h-full w-10 sm:w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--color-background), transparent)" }} />
          <div className="ticker-track animate-ticker">
            {allTickers.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-2 sm:mx-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap border"
                style={{ borderColor: "hsl(243 75% 60% / 0.25)", background: "hsl(243 75% 60% / 0.07)", color: "hsl(243 75% 55%)" }}
              >
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "hsl(243 75% 60%)", display: "inline-block", flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Concept - Position 2 ── */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.22s" }}>
        <div className="bg-muted/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border text-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
            They Learn At Tuition.{" "}
            <span className="text-gradient-warm">We Ensure They Study At Home.</span>
          </h2>
          <p className="text-muted-foreground font-medium text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-5">
            The biggest gap in education isn&apos;t teaching - it&apos;s execution. Your child learns the syllabus at school and tuition, but memorizing and practicing must happen at home. Without proper focus, they waste hours on their phone or give up too early.
          </p>
          {/* Solution pill - bold and scannable */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-background border shadow-sm font-bold text-xs sm:text-sm text-left">
            <span className="text-primary text-lg flex-shrink-0">💡</span>
            <span>A trained Guide visits your home and keeps them focused while they study.</span>
          </div>
        </div>
      </section>

      {/* ── Social Proof Numbers ── */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { number: "Grade 6", sub: "to A/L", label: "All Levels Covered", icon: "📚" },
            { number: "3-4×", sub: "per week", label: "Home Visit Sessions", icon: "🏠" },
            { number: "100%", sub: "transparent", label: "Report After Every Session", icon: "📊" },
            { number: "3 days", sub: "to start", label: "First Session Turnaround", icon: "⚡" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl border text-center"
              style={{ background: "hsl(0 0% 100% / 0.6)", borderColor: "hsl(38 30% 88%)" }}
            >
              <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
              <div className="text-lg sm:text-2xl font-black text-gradient">{stat.number}</div>
              <div className="text-[10px] sm:text-xs font-bold text-muted-foreground">{stat.sub}</div>
              <div className="text-[10px] sm:text-xs font-semibold text-foreground mt-0.5 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>



      {/* ── The PathwayLK Difference ── */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.35s" }}>
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "hsl(243 75% 60%)" }}>
            The Difference
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Why Parents Choose <span className="text-gradient">PathwayLK</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {[
            { title: "Execution Over Theory", desc: "We ensure they actually sit down and study the material." },
            { title: "1-on-1 Focus At Home", desc: "Complete attention right at their own desk. Safe and effective." },
            { title: "Enforced Discipline", desc: "No phone checking, no distractions, no giving up early." },
            { title: "Total Transparency", desc: "A detailed progress report sent to you after every single session." },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border bg-background/50">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsl(38 95% 50% / 0.15)", color: "hsl(38 95% 45%)" }}>
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section - Grade-Specific ── */}
      <section className="w-full relative z-10 animate-fade-in text-center pb-20 md:pb-0" style={{ animationDelay: "0.5s" }}>
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16"
          style={{
            background: "linear-gradient(135deg, hsl(38 95% 50% / 0.12) 0%, hsl(22 90% 52% / 0.08) 100%)",
            boxShadow: "0 0 0 1px hsl(38 95% 50% / 0.2)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(38 95% 50% / 0.12), transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-foreground tracking-tight">
              Ready To Give Your Child{" "}
              <span className="text-gradient">The Focus They Need?</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium mb-6 max-w-lg mx-auto">
              Message us on WhatsApp. We&apos;ll assign a Study Guide and your child&apos;s first session can begin within 3 days.
            </p>

            {/* Grade-specific CTAs - stacked on mobile for easy tapping */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 flex-wrap mb-4 max-w-sm sm:max-w-none mx-auto">
              {[
                { label: "Book for Grade 6-9", href: WA_LINKS.grade69, color: "hsl(243 75% 60%)", bg: "hsl(243 75% 60% / 0.12)", border: "hsl(243 75% 60% / 0.35)" },
                { label: "Book for O/L Child", href: WA_LINKS.ol, color: "hsl(38 95% 45%)", bg: "hsl(38 95% 50% / 0.12)", border: "hsl(38 95% 50% / 0.35)" },
                { label: "Book for A/L Child", href: WA_LINKS.al, color: "hsl(22 90% 52%)", bg: "hsl(22 90% 52% / 0.12)", border: "hsl(22 90% 52% / 0.35)" },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all active:scale-95 w-full sm:w-auto"
                  style={{ background: btn.bg, color: btn.color, borderColor: btn.border }}
                >
                  <WhatsAppIcon size={15} />
                  {btn.label}
                </a>
              ))}
            </div>

            <Link href="/our-service" className="btn-secondary text-sm px-5 py-2.5 inline-flex justify-center items-center gap-2 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
              Learn More First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
