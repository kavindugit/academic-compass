import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Help | PathwayLK — Paper Practice, Recap & Study Assistance",
  description:
    "During every home-visit session, our Study Guide can run paper practice, recap lessons, or help your child through doubts — all for Grade 6–9 and O/L students. A/L students get dedicated full-session focus enforcement.",
};

const WA_BASE = "https://wa.me/+94704401729?text=";
const WA_LINKS = {
  grade69: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your Grade 6–9 home study plan for my child."),
  ol: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your GCE O/L home study plan for my child."),
  al: WA_BASE + encodeURIComponent("Hi PathwayLK, I would like to enquire about your GCE A/L home study plan for my child."),
};

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const sessionModes = [
  {
    id: "paper-practice",
    badge: "Grade 6–9 & O/L",
    badgeColor: "hsl(243 75% 60%)",
    badgeBg: "hsl(243 75% 60% / 0.10)",
    badgeBorder: "hsl(243 75% 60% / 0.30)",
    accentColor: "hsl(243 75% 60%)",
    accentBg: "hsl(243 75% 60% / 0.07)",
    accentBorder: "hsl(243 75% 60% / 0.20)",
    icon: "📄",
    title: "Paper Practice",
    tagline: "We Watch. They Work. We Discuss Together.",
    description:
      "The Study Guide sets up the paper in proper exam conditions — timed, no phone, no help. Your child completes the entire paper on their own. Only after the last question is answered do we sit together and go through every answer, explaining what went wrong and why.",
    why: "Students learn far more from correcting their own mistakes than from watching someone else solve problems. This builds real exam confidence.",
    steps: [
      {
        icon: "📋",
        title: "Set Up The Paper",
        desc: "The Study Guide selects or provides the paper — past paper, term test, or practice paper — and sets the timer. Exam conditions apply.",
      },
      {
        icon: "👁️",
        title: "Watch In Silence",
        desc: "Your child works through every question completely on their own. The guide stays present to prevent distractions but does not interfere or give hints.",
      },
      {
        icon: "✅",
        title: "Student Completes The Paper",
        desc: "Not one question skipped. The guide makes sure they attempt every section to the best of their ability — no giving up allowed.",
      },
      {
        icon: "💬",
        title: "Discuss Together",
        desc: "Once the paper is done, the guide goes through every answer with the student — explaining errors, confirming correct thinking, and flagging weak areas.",
      },
    ],
  },
  {
    id: "recap-lessons",
    badge: "Grade 6–9 & O/L",
    badgeColor: "hsl(38 95% 45%)",
    badgeBg: "hsl(38 95% 50% / 0.10)",
    badgeBorder: "hsl(38 95% 50% / 0.30)",
    accentColor: "hsl(38 95% 45%)",
    accentBg: "hsl(38 95% 50% / 0.07)",
    accentBorder: "hsl(38 95% 50% / 0.20)",
    icon: "🔁",
    title: "Recap Lessons",
    tagline: "Not Re-Teaching. Locking In What Was Already Taught.",
    description:
      "After school or tuition, your child has learned something — but did it actually stick? The Study Guide does a structured recap of the day's lesson: reviewing the notes, asking questions, testing understanding, and filling the gaps. We don't re-teach the entire lesson. We reinforce what's already there.",
    why: "Without revision the same day, most students forget 70% of what they learned. A focused 20–30 minute recap turns a forgotten lesson into a permanent memory.",
    steps: [
      {
        icon: "📖",
        title: "Review The Notes",
        desc: "The guide and student go through the school or tuition notes together to identify what was covered in the lesson.",
      },
      {
        icon: "❓",
        title: "Quick Concept Check",
        desc: "The guide asks targeted questions — 'Explain this in your own words', 'What happens when...?' — to test what actually stuck.",
      },
      {
        icon: "🔍",
        title: "Identify The Gaps",
        desc: "Wherever the student hesitates or gives a wrong answer, the guide pinpoints the exact gap — without wasting time on what they already know.",
      },
      {
        icon: "💪",
        title: "Lock It In",
        desc: "The guide works through only the weak points, ensuring the student fully understands before moving to the next subject or task.",
      },
    ],
  },
  {
    id: "study-assistance",
    badge: "Grade 6–9 & O/L",
    badgeColor: "hsl(22 90% 52%)",
    badgeBg: "hsl(22 90% 52% / 0.10)",
    badgeBorder: "hsl(22 90% 52% / 0.30)",
    accentColor: "hsl(22 90% 52%)",
    accentBg: "hsl(22 90% 52% / 0.07)",
    accentBorder: "hsl(22 90% 52% / 0.20)",
    icon: "💡",
    title: "Study Assistance",
    tagline: "Help When They're Stuck — Then Back To Work.",
    description:
      "Your child is self-studying. They hit a problem they don't understand and normally they'd give up or move on. With a Study Guide right beside them, they get help immediately on that specific doubt — then get right back to their own studying. We don't teach the whole lesson. We clear the block so they can keep going.",
    why: "Most study sessions derail not from laziness but from getting stuck. One unanswered doubt can kill an entire session. Instant, targeted help keeps momentum going.",
    steps: [
      {
        icon: "📚",
        title: "Student Self-Studies",
        desc: "Your child works through their notes, exercises, or revision material independently. The guide is present, keeping them focused and on track.",
      },
      {
        icon: "🚧",
        title: "They Hit A Block",
        desc: "The student gets stuck on a concept, a calculation, or a question. Instead of giving up or skipping it, they flag it to the guide immediately.",
      },
      {
        icon: "💡",
        title: "Guide Clears The Doubt",
        desc: "The guide explains just enough to resolve that specific block — not the full chapter, not a new lesson. Targeted, efficient, and clear.",
      },
      {
        icon: "🔄",
        title: "Back To Work",
        desc: "The student immediately continues their own study. The guide returns to monitoring and keeping them on task. No disruption to the flow.",
      },
    ],
  },
];

export default function HowWeHelpPage() {
  return (
    <div className="flex flex-col items-center gap-20 w-full relative py-8">

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
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto mb-6">
          Our Study Guide doesn't just watch your child study — they actively shape
          how that study time is used. Here's exactly what they can do during a
          home-visit session.
        </p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border"
          style={{
            background: "hsl(243 75% 60% / 0.08)",
            borderColor: "hsl(243 75% 60% / 0.25)",
            color: "hsl(243 75% 55%)",
          }}
        >
          <span>🏫</span> Available for Grade 6–9 and GCE O/L students only
        </div>
      </section>

      {/* ── SESSION MODE SECTIONS ── */}
      {sessionModes.map((mode, index) => (
        <section
          key={mode.id}
          id={mode.id}
          className="w-full relative z-10 animate-fade-in"
          style={{ animationDelay: `${0.15 * (index + 1)}s` }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border"
                  style={{
                    background: mode.badgeBg,
                    color: mode.badgeColor,
                    borderColor: mode.badgeBorder,
                  }}
                >
                  <span>{mode.icon}</span> {mode.badge}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight">
                {mode.title}
              </h2>
              <p
                className="text-base md:text-lg font-bold mt-1"
                style={{ color: mode.accentColor }}
              >
                {mode.tagline}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Description + Why it works */}
            <div className="flex flex-col gap-6">
              <div
                className="p-6 rounded-2xl border"
                style={{
                  background: mode.accentBg,
                  borderColor: mode.accentBorder,
                }}
              >
                <p className="text-foreground font-medium leading-relaxed text-base">
                  {mode.description}
                </p>
              </div>
              <div className="p-6 rounded-2xl border bg-background/60" style={{ borderColor: "hsl(38 30% 88%)" }}>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: mode.accentColor }}
                >
                  Why It Works
                </p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {mode.why}
                </p>
              </div>
            </div>

            {/* Right: Step-by-step */}
            <div className="flex flex-col gap-0">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: mode.accentColor }}
              >
                How It Works
              </p>
              {mode.steps.map((step, i) => (
                <div key={i} className="flex gap-4 relative">
                  {/* Timeline */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 border-2 z-10"
                      style={{
                        background: mode.accentBg,
                        borderColor: mode.badgeBorder,
                      }}
                    >
                      {step.icon}
                    </div>
                    {i < mode.steps.length - 1 && (
                      <div
                        className="w-0.5 flex-1 my-1"
                        style={{
                          background: mode.accentBorder,
                          minHeight: "20px",
                        }}
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-7 pt-1 flex-1">
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider (not after last) */}
          {index < sessionModes.length - 1 && (
            <div
              className="mt-16 h-px w-full"
              style={{ background: "hsl(38 30% 88%)" }}
            />
          )}
        </section>
      ))}

      {/* ══ A/L FULL SESSION BREAKDOWN ══ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div
          className="rounded-3xl p-8 md:p-12 border overflow-hidden relative"
          style={{ background: "hsl(22 90% 52% / 0.04)", borderColor: "hsl(22 90% 52% / 0.20)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: "hsl(22 90% 52% / 0.5)" }} />

          <div className="text-center mb-10 relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border mb-4"
              style={{ background: "hsl(22 90% 52% / 0.10)", color: "hsl(22 90% 45%)", borderColor: "hsl(22 90% 52% / 0.25)" }}
            >
              <span>🎓</span> GCE A/L Students
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">
              A/L Sessions: Full-Intensity, <span style={{ color: "hsl(22 90% 52%)" }}>All Day.</span>
            </h2>
            <p
              className="text-base md:text-lg font-bold mt-1"
              style={{ color: "hsl(22 90% 52%)" }}
            >
              It&apos;s All About Sustained Focus & Execution.
            </p>
            <p className="text-sm text-muted-foreground font-medium mt-3 max-w-2xl mx-auto leading-relaxed">
              A/L is a completely different challenge. The volume of work is massive and the stakes are the highest they&apos;ll ever be.
              Our Study Guide for A/L students sits beside your child for the entire session — keeping them locked in, preventing distractions, planning strategically, and driving results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
            {[
              {
                icon: "📅",
                title: "Strategic Daily Study Planning",
                tagline: "No guessing. No wasted time.",
                desc: "Before every session, the Guide maps out the entire day's workload — which subjects to cover, how long each gets, and what order to tackle them. Your child starts every session with a clear roadmap.",
              },
              {
                icon: "🎯",
                title: "Full-Session Focus Enforcement",
                tagline: "Intensity from minute one to the last.",
                desc: "The Guide stays with your child for the entire 6-hour session — actively watching, redirecting attention the moment it drifts, breaking distractions, and maintaining high-intensity focus throughout.",
              },
              {
                icon: "💪",
                title: "Motivation & Accountability Coaching",
                tagline: "When they want to quit, we push through.",
                desc: "A/L students often feel overwhelmed. When your child says &quot;I can&apos;t do this&quot; — the Guide pushes through it with them. Mental resilience is as important as subject knowledge at this level.",
              },
              {
                icon: "📊",
                title: "Session Report After Every Visit",
                tagline: "You always know exactly where they stand.",
                desc: "After each visit you receive a detailed update: what subjects were covered, how long your child stayed focused, what challenges arose, and what's planned for the next session.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background/70 rounded-2xl p-6 border"
                style={{ borderColor: "hsl(22 90% 52% / 0.20)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border mb-4"
                  style={{ background: "hsl(22 90% 52% / 0.10)", borderColor: "hsl(22 90% 52% / 0.25)" }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs font-bold mb-2" style={{ color: "hsl(22 90% 52%)" }}>{item.tagline}</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 relative z-10">
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border font-bold text-sm mb-6"
              style={{ background: "hsl(22 90% 52% / 0.08)", borderColor: "hsl(22 90% 52% / 0.25)", color: "hsl(22 90% 45%)" }}
            >
              <span>⏱️</span>
              4 sessions per week &middot; 6 hours per session &middot; LKR 30,000/week
            </div>
            <div>
              <a
                href={WA_LINKS.al}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5"
                style={{ background: "hsl(22 90% 52% / 0.12)", color: "hsl(22 90% 52%)", borderColor: "hsl(22 90% 52% / 0.35)" }}
              >
                <WhatsAppIcon size={16} />
                Book A/L Plan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="w-full relative z-10 animate-fade-in text-center" style={{ animationDelay: "0.55s" }}>
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16"
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
            <p className="text-base text-muted-foreground font-medium mb-8 max-w-lg mx-auto">
              Select your child&apos;s level and message us on WhatsApp. We&apos;ll assign the right Study Guide and get started within 3 days.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap mb-5">
              {[
                { label: "Book for Grade 6–9 Child", href: WA_LINKS.grade69, color: "hsl(243 75% 60%)", bg: "hsl(243 75% 60% / 0.12)", border: "hsl(243 75% 60% / 0.35)" },
                { label: "Book for O/L Child", href: WA_LINKS.ol, color: "hsl(38 95% 45%)", bg: "hsl(38 95% 50% / 0.12)", border: "hsl(38 95% 50% / 0.35)" },
                { label: "Book for A/L Child", href: WA_LINKS.al, color: "hsl(22 90% 52%)", bg: "hsl(22 90% 52% / 0.12)", border: "hsl(22 90% 52% / 0.35)" },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  style={{ background: btn.bg, color: btn.color, borderColor: btn.border }}
                >
                  <WhatsAppIcon size={16} />
                  {btn.label}
                </a>
              ))}
            </div>
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
