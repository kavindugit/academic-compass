import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Service",
  description:
    "We send a trained study guide to your home to sit with your child while they study. They stay focused. You stay informed. Covering Grade 6 through A/L.",
  openGraph: {
    title: "Our Service | PathwayLK",
    description: "We send a trained study guide to your home to sit with your child while they study. Covering Grade 6 through A/L.",
    url: "https://www.pathwaylk.com/our-service",
  },
};

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function OurServicePage() {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 w-full relative py-4 md:py-8">

      {/* ══════════════════════════════════════════
          HERO - Simple, Clear Statement
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-slide-up mt-1 md:mt-2">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border mb-4" style={{ background: "hsl(243 75% 60% / 0.08)", borderColor: "hsl(243 75% 60% / 0.25)", color: "hsl(243 75% 55%)" }}>
            🏫 Grade 6-9 &nbsp;·&nbsp; 📘 GCE O/L &nbsp;·&nbsp; 🎓 GCE A/L - All Levels Covered
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
            We Send A Study Guide To Your Home.{" "}
            <br className="hidden md:block" />
            <span className="shimmer-text">
              They Sit With Your Child And Make Sure They Study.
            </span>
          </h1>

          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto mb-6">
            Reclaim your peace of mind. We provide a trained Study Guide who visits
            your home, sits beside your child, keeps them focused, clears their
            doubts, and makes sure not a single minute is wasted.
          </p>

          {/* Clean Pill CTAs linking to How We Help tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up mt-8" style={{ animationDelay: "0.15s" }}>
            {[
              { label: "I have a Grade 6-9 Child", href: "/our-service/how-we-help#grade69", color: "hsl(243 75% 60%)", bg: "hsl(243 75% 60% / 0.12)", border: "hsl(243 75% 60% / 0.3)" },
              { label: "I have a O/L Child", href: "/our-service/how-we-help#ol", color: "hsl(38 95% 45%)", bg: "hsl(38 95% 50% / 0.12)", border: "hsl(38 95% 50% / 0.3)" },
              { label: "I have a A/L Child", href: "/our-service/how-we-help#al", color: "hsl(22 90% 52%)", bg: "hsl(22 90% 52% / 0.12)", border: "hsl(22 90% 52% / 0.3)" },
            ].map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
                style={{
                  background: btn.bg,
                  color: btn.color,
                  borderColor: btn.border,
                }}
              >
                <PhoneIcon size={16} />
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE PROBLEM - Why We Exist
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.18s" }}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "hsl(38 95% 50%)" }}>
              The Missing Link
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tuition Classes Teach. <br/>But Who Ensures They Study?
            </h2>
            <div className="space-y-4 text-muted-foreground font-medium text-sm leading-relaxed">
              <p>
                Parents spend thousands on tuition classes every month. The tutors do a great job covering the syllabus. But learning doesn't happen just by listening in class.
              </p>
              <p>
                Real learning happens at home, when the child sits down, does past papers, and recaps the lesson. Unfortunately, this is where the system breaks down. When left alone in their room, most students get distracted by phones, lose focus, or just give up when they hit a difficult question.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">The Result?</h3>
            <ul className="space-y-4">
              {[
                "You constantly have to nag them to study.",
                "They say they are studying, but the marks don't improve.",
                "You feel stressed because you don't have the time to sit with them and check their work."
              ].map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-destructive font-bold">✕</span>
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRIDGE TO "HOW WE HELP" - The Solution
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="rounded-3xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, hsl(243 75% 60% / 0.08) 0%, hsl(38 95% 50% / 0.05) 100%)", border: "1px solid hsl(243 75% 60% / 0.2)" }}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-foreground tracking-tight">
            We Are The Missing Link.
          </h2>
          <p className="text-base text-muted-foreground font-medium mb-8 max-w-2xl mx-auto">
            We don't replace tuition. We ensure the tuition actually pays off. Our Study Guides sit right next to your child in your home, removing distractions and forcing focused execution.
          </p>
          <div className="bg-background rounded-2xl p-6 max-w-3xl mx-auto border shadow-sm mb-8">
            <p className="text-sm font-bold text-foreground mb-2">Curious what happens during a 2-hour visit?</p>
            <p className="text-xs text-muted-foreground mb-4">See exactly how our Guides run Paper Practice, Recap Lessons, and handle A/L focus enforcement.</p>
            <Link href="/our-service/how-we-help" className="btn-primary text-sm px-6 py-2.5 inline-flex items-center justify-center gap-2">
              View Detailed Session Breakdowns <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VETTING - Safety & Trust
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.22s" }}>
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "hsl(243 75% 60%)" }}>
                Safety &amp; Quality
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Who Is Coming To Your Home?
              </h2>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                We know you are inviting someone into your home to sit with your child. We take this responsibility extremely seriously.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Top Undergraduates", desc: "Most of our guides are undergraduates from top local universities who recently excelled in O/L and A/L.", icon: "🎓" },
                { title: "Strict Background Checks", desc: "Every guide passes a comprehensive identity and background verification before joining us.", icon: "🔍" },
                { title: "Methodology Training", desc: "They don't just teach; they are trained in our specific 'study enforcement' methodology.", icon: "📋" },
                { title: "Continuous Monitoring", desc: "We track their session reports and parent feedback to ensure top quality every single day.", icon: "📊" }
              ].map((vet, i) => (
                <div key={i} className="bg-background rounded-2xl p-5 border shadow-sm">
                  <div className="text-2xl mb-2">{vet.icon}</div>
                  <h4 className="font-bold text-foreground mb-1">{vet.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{vet.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STEP BY STEP - How The Process Works
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "hsl(38 95% 50%)" }}
          >
            Step By Step
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            How It Works From Start To Finish
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto font-medium">
            Here is exactly what happens when you register your child with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-0">
          {[
            {
              step: "1",
              title: "You Register Your Child",
              desc: "Select your child's grade level above and message us. We'll ask a few quick questions about their subjects and schedule.",
            },
            {
              step: "2",
              title: "We Assign A Dedicated Study Guide",
              desc: "Based on your child's specific needs, we select a vetted and trained Study Guide to be dedicated to your child.",
            },
            {
              step: "3",
              title: "The Study Guide Visits Your Home",
              desc: "On scheduled days, the Guide arrives at your home, sits beside your child at their desk, and the focused study session begins.",
            },
            {
              step: "4",
              title: "We Keep You Updated After Every Session",
              desc: "After every single visit, we share a quick update with you: what was studied, how long they focused, and what's planned next.",
            },
            {
              step: "5",
              title: "Weekly Progress Review",
              desc: "Once a week, we discuss your child's overall progress. You'll always know exactly where they stand.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 relative">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold border-2 z-10"
                  style={{
                    background: "hsl(38 95% 50% / 0.15)",
                    borderColor: "hsl(38 95% 50% / 0.5)",
                    color: "hsl(38 95% 35%)",
                  }}
                >
                  {item.step}
                </div>
                {i < 4 && (
                  <div
                    className="w-0.5 flex-1 my-1"
                    style={{
                      background: "hsl(38 95% 50% / 0.2)",
                      minHeight: "20px",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1 flex-1">
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
