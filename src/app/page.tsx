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
  "Grade 6 to A/L — Fully Covered",
];

const WA_BASE = "https://wa.me/+94704401729?text=";
const WA_LINKS = {
  grade69: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your Grade 6–9 home study plan for my child."),
  ol: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your GCE O/L home study plan for my child."),
  al: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your GCE A/L home study plan for my child."),
  general: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to know more about your services."),
};

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
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
  const [activeGrade, setActiveGrade] = useState<"grade69" | "ol" | "al" | null>(null);

  const scrollToCategories = (grade: "grade69" | "ol" | "al") => {
    setActiveGrade(grade);
    setTimeout(() => {
      const el = document.getElementById("who-is-this-for");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    // gap-10 on mobile (40px), gap-16 on tablet, gap-20 on desktop
    <div className="flex flex-col items-center justify-center py-4 md:py-8 gap-10 md:gap-16 lg:gap-20 w-full relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="hero-gradient opacity-70"></div>
      </div>

      {/* ── Hero Section ── */}
      <section className="text-center mt-4 md:mt-12 max-w-5xl w-full mx-auto relative z-10">

        {/* Service badge — quick orientation */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border mb-4 animate-slide-up"
          style={{ background: "hsl(243 75% 60% / 0.08)", borderColor: "hsl(243 75% 60% / 0.25)", color: "hsl(243 75% 55%)" }}
        >
          🏠 Home Visit Study Guidance · Grade 6 to A/L
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground animate-slide-up leading-[1.1]">
          Your Child&apos;s Dream.{" "}
          <span className="shimmer-text">Our Ultimate Guidance.</span>
        </h1>

        {/* Bold one-liner — immediately scannable on mobile */}
        <p
          className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-2 animate-slide-up px-1"
          style={{ animationDelay: "0.08s" }}
        >
          We send a Study Guide to your home — they sit with your child and make sure they actually study.
        </p>

        <p
          className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed animate-slide-up max-w-2xl mx-auto font-medium px-1"
          style={{ animationDelay: "0.1s" }}
        >
          No travel. No new tuition class. A dedicated person at your child&apos;s desk — keeping them focused, clearing doubts, and reporting to you after every session.
        </p>

        {/* ── Grade Selector — always 3-col horizontal grid on mobile ── */}
        <div className="animate-slide-up mb-6" style={{ animationDelay: "0.15s" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "hsl(243 75% 60%)" }}>
            My child is in →
          </p>
          {/* 3 compact cards in a row — always horizontal, even on phone */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto">
            {[
              { key: "grade69" as const, label: "Grade 6–9", icon: "🏫", color: "hsl(243 75% 60%)", bg: "hsl(243 75% 60% / 0.10)", border: "hsl(243 75% 60% / 0.35)", price: "10,000/wk" },
              { key: "ol" as const, label: "GCE O/L", icon: "📘", color: "hsl(38 95% 45%)", bg: "hsl(38 95% 50% / 0.10)", border: "hsl(38 95% 50% / 0.40)", price: "15,000/wk" },
              { key: "al" as const, label: "GCE A/L", icon: "🎓", color: "hsl(22 90% 52%)", bg: "hsl(22 90% 52% / 0.10)", border: "hsl(22 90% 52% / 0.40)", price: "30,000/wk" },
            ].map((g) => (
              <button
                key={g.key}
                onClick={() => scrollToCategories(g.key)}
                className="flex flex-col items-center gap-0.5 px-2 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 font-bold transition-all duration-200 active:scale-95 cursor-pointer"
                style={{
                  background: activeGrade === g.key ? g.bg : "hsl(0 0% 100% / 0.7)",
                  borderColor: activeGrade === g.key ? g.color : "hsl(38 30% 88%)",
                  color: activeGrade === g.key ? g.color : "hsl(25 40% 10%)",
                  boxShadow: activeGrade === g.key ? `0 4px 20px ${g.border}` : undefined,
                }}
              >
                <span className="text-xl sm:text-2xl">{g.icon}</span>
                <span className="text-xs sm:text-sm font-extrabold leading-tight text-center">{g.label}</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-70 leading-tight">LKR {g.price}</span>
              </button>
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

      {/* ── Core Concept — Position 2 ── */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.22s" }}>
        <div className="bg-muted/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border text-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
            They Learn At Tuition.{" "}
            <span className="text-gradient-warm">We Ensure They Study At Home.</span>
          </h2>
          <p className="text-muted-foreground font-medium text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-5">
            The biggest gap in education isn&apos;t teaching — it&apos;s execution. Your child learns the syllabus at school and tuition, but memorizing and practicing must happen at home. Without proper focus, they waste hours on their phone or give up too early.
          </p>
          {/* Solution pill — bold and scannable */}
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
            { number: "3–4×", sub: "per week", label: "Home Visit Sessions", icon: "🏠" },
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

      {/* ── Who Is This For — 3 Category Cards ── */}
      <section id="who-is-this-for" className="w-full relative z-10 animate-fade-in scroll-mt-20" style={{ animationDelay: "0.28s" }}>
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "hsl(243 75% 60%)" }}>
            Who Is This For?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Every Stage. <span className="text-gradient-warm">Every Child.</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">Tap your child&apos;s level above to highlight the right plan</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              key: "grade69" as const,
              icon: "🏫",
              label: "Grade 6 – 9",
              title: "Term Tests Matter More Than You Think",
              desc: "Your child looks like they're studying — but the marks tell a different story. Our Study Guide keeps them focused and turns every hour into real results.",
              tags: ["📄 Paper Practice", "🔁 Recap Lessons", "💡 Study Assistance"],
              price: "LKR 10,000/week",
              sessions: "3 sessions × 2 hrs",
              color: "hsl(243 75% 60%)",
              bg: "hsl(243 75% 60% / 0.07)",
              border: "hsl(243 75% 60% / 0.25)",
              activeBorder: "hsl(243 75% 60%)",
            },
            {
              key: "ol" as const,
              icon: "📘",
              label: "GCE O/L",
              title: "A Turning Point They Can't Afford To Waste",
              desc: "O/L is a national turning point. We sit with your child, enforce discipline, and structure every session so they're fully prepared when it matters most.",
              tags: ["📄 Paper Practice", "🔁 Recap Lessons", "💡 Study Assistance"],
              price: "LKR 15,000/week",
              sessions: "3 sessions × 3 hrs",
              color: "hsl(38 95% 50%)",
              bg: "hsl(38 95% 50% / 0.07)",
              border: "hsl(38 95% 50% / 0.3)",
              activeBorder: "hsl(38 95% 50%)",
            },
            {
              key: "al" as const,
              icon: "🎓",
              label: "GCE A/L",
              title: "9 A's at O/L Doesn't Guarantee A/L Success",
              desc: "A/L is a completely different game. Our Guide sits beside your child the entire session — keeping them focused, planning their work, and driving results.",
              tags: ["🎯 Dedicated Focus", "📅 Strategic Planning", "🏆 Results-Driven"],
              price: "LKR 30,000/week",
              sessions: "4 sessions × 6 hrs",
              color: "hsl(22 90% 52%)",
              bg: "hsl(22 90% 52% / 0.07)",
              border: "hsl(22 90% 52% / 0.3)",
              activeBorder: "hsl(22 90% 52%)",
            },
          ].map((cat) => {
            const isActive = activeGrade === cat.key;
            return (
              <div
                key={cat.key}
                className="glass-card-hover p-5 sm:p-7 flex flex-col gap-3 cursor-default group relative overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isActive ? cat.activeBorder : undefined,
                  boxShadow: isActive ? `0 0 0 2px ${cat.activeBorder}, 0 8px 32px ${cat.bg}` : undefined,
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl pointer-events-none opacity-30" style={{ background: cat.bg }} />

                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}>
                    <span>{cat.icon}</span> {cat.label}
                  </div>
                  {isActive && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0" style={{ background: cat.color, color: "#fff" }}>
                      ✓ Your child
                    </div>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium flex-1">{cat.desc}</p>

                {/* Tags — wrap nicely on mobile */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag, t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="mt-1 pt-3 border-t flex items-center justify-between gap-2" style={{ borderColor: cat.border }}>
                  <div>
                    <div className="text-sm font-black" style={{ color: cat.color }}>{cat.price}</div>
                    <div className="text-xs text-muted-foreground font-semibold">{cat.sessions}</div>
                  </div>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                    style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}
                  >
                    See Plan <ArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── What Happens In A Session? (Grade 6-9 & O/L) ── */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.29s" }}>
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "hsl(243 75% 60%)" }}>
            For Grade 6–9 &amp; O/L
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What Happens <span className="text-gradient-warm">In A Session?</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-xl mx-auto font-medium">
            Every session is tailored to what your child needs most that day — one of three focused modes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "📄",
              title: "Paper Practice",
              steps: ["Guide sets up the paper", "Child works alone under exam conditions", "Discuss every answer together after"],
              color: "hsl(243 75% 60%)",
              bg: "hsl(243 75% 60% / 0.07)",
              border: "hsl(243 75% 60% / 0.22)",
              href: "/our-service/how-we-help#paper-practice",
            },
            {
              icon: "🔁",
              title: "Recap Lessons",
              steps: ["Review today's school/tuition notes", "Guide tests understanding with questions", "Fill the gaps before they're forgotten"],
              color: "hsl(38 95% 45%)",
              bg: "hsl(38 95% 50% / 0.07)",
              border: "hsl(38 95% 50% / 0.22)",
              href: "/our-service/how-we-help#recap-lessons",
            },
            {
              icon: "💡",
              title: "Study Assistance",
              steps: ["Child self-studies with guide present", "Guide clears doubts instantly", "Child continues — no lost momentum"],
              color: "hsl(22 90% 52%)",
              bg: "hsl(22 90% 52% / 0.07)",
              border: "hsl(22 90% 52% / 0.22)",
              href: "/our-service/how-we-help#study-assistance",
            },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="glass-card-hover p-5 sm:p-6 flex flex-col gap-3 group relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border flex-shrink-0" style={{ background: item.bg, borderColor: item.border }}>
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground">{item.title}</h3>
              </div>
              <ol className="flex flex-col gap-2 mt-1">
                {item.steps.map((step, s) => (
                  <li key={s} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground font-medium">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: item.bg, color: item.color }}>
                      {s + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <span className="inline-flex items-center gap-1 text-xs font-bold mt-auto" style={{ color: item.color }}>
                See how it works <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── A/L Session Breakdown ── */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.30s" }}>
        <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border overflow-hidden relative" style={{ background: "hsl(22 90% 52% / 0.04)", borderColor: "hsl(22 90% 52% / 0.20)" }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: "hsl(22 90% 52% / 0.5)" }} />

          <div className="text-center mb-6 sm:mb-10 relative z-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "hsl(22 90% 52%)" }}>
              For GCE A/L Students
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              What Happens In <span style={{ color: "hsl(22 90% 52%)" }}>An A/L Session?</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl mx-auto font-medium">
              A/L is not just harder — it&apos;s a completely different game. Our approach for A/L is built around sustained, high-intensity focused work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto relative z-10">
            {[
              { icon: "📅", title: "Strategic Daily Study Planning", desc: "Before every session, the Guide maps out the day's workload — which subjects to cover, how long each gets, and what order to tackle them." },
              { icon: "🎯", title: "Full-Session Focus Enforcement", desc: "The Guide stays with your child for the entire 6-hour session — actively watching, redirecting attention, and keeping intensity high throughout." },
              { icon: "💪", title: "Motivation & Accountability Coaching", desc: "A/L students often feel overwhelmed. When your child says \"I can't do this\" — the Guide pushes through it with them. Mental resilience matters." },
              { icon: "📊", title: "Progress Reporting After Every Session", desc: "After each visit you receive a detailed update: what was studied, how long they stayed focused, what's planned next." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border bg-background/60" style={{ borderColor: "hsl(22 90% 52% / 0.20)" }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 border" style={{ background: "hsl(22 90% 52% / 0.10)", borderColor: "hsl(22 90% 52% / 0.25)" }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border font-bold text-xs sm:text-sm" style={{ background: "hsl(22 90% 52% / 0.08)", borderColor: "hsl(22 90% 52% / 0.25)", color: "hsl(22 90% 45%)" }}>
              <span>⏱️</span> 4 sessions/week · 6 hours/session · LKR 30,000/week
            </div>
          </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { title: "Execution Over Theory", desc: "We focus on the hardest part of education: sitting down and doing the work. We ensure they actually study the material." },
            { title: "1-on-1 Focus At Home", desc: "Your child gets completely dedicated attention right at their own desk. Safe, comfortable, and highly effective." },
            { title: "Paced To Your Child", desc: "We move at exactly the speed your child needs to fully grasp the concepts before moving on." },
            { title: "Enforced Discipline", desc: "We build their daily study plan and actively keep them accountable. No phone checking, no distractions, no excuses." },
            { title: "Total Transparency", desc: "After every single session, you receive an update on exactly what they did, how long they focused, and how they are progressing." },
            { title: "Confidence Building", desc: "By clearing doubts instantly and securing small daily wins, we help your child rebuild their confidence in their own abilities." },
          ].map((item, i) => (
            <div key={i} className="p-4 sm:p-6 rounded-2xl border transition-all hover:bg-muted/10" style={{ background: "hsl(0 0% 100% / 0.6)", borderColor: "hsl(38 30% 88%)" }}>
              <div className="w-7 h-7 rounded-full mb-3 flex items-center justify-center flex-shrink-0" style={{ background: "hsl(38 95% 50% / 0.15)", color: "hsl(38 95% 45%)" }}>
                <CheckIcon />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section — Grade-Specific ── */}
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

            {/* Grade-specific CTAs — stacked on mobile for easy tapping */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 flex-wrap mb-4 max-w-sm sm:max-w-none mx-auto">
              {[
                { label: "Book for Grade 6–9", href: WA_LINKS.grade69, color: "hsl(243 75% 60%)", bg: "hsl(243 75% 60% / 0.12)", border: "hsl(243 75% 60% / 0.35)" },
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
