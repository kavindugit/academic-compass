import Link from "next/link";
import { PLANS, formatCurrency } from "@/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | PathwayLK — Home Visit Study Guidance Plans",
  description:
    "Transparent weekly pricing for PathwayLK home visit study guidance. Grade 6–9 from LKR 10,000/week. O/L from LKR 15,000/week. A/L from LKR 30,000/week. No contracts.",
};

const WA_BASE = "https://wa.me/+94704401729?text=";
const planMessages: Record<string, string> = {
  "grade-6-9": WA_BASE + encodeURIComponent("Hi PathwayLK, I am interested in the Grade 6–9 home study plan for my child."),
  "ol": WA_BASE + encodeURIComponent("Hi PathwayLK, I am interested in the GCE O/L home study plan for my child."),
  "al": WA_BASE + encodeURIComponent("Hi PathwayLK, I am interested in the GCE A/L home study plan for my child."),
};

const planMeta: Record<string, { context: string; badge?: string; badgeColor?: string; note?: string; color: string; bg: string; border: string }> = {
  "grade-6-9": {
    context: "For students in Grade 6 to Grade 9 — building study discipline and scoring better in term tests.",
    color: "hsl(243 75% 60%)",
    bg: "hsl(243 75% 60% / 0.07)",
    border: "hsl(243 75% 60% / 0.30)",
  },
  "ol": {
    context: "For students preparing for the GCE Ordinary Level national examination — the most important turning point.",
    badge: "Most Popular",
    badgeColor: "hsl(38 95% 45%)",
    color: "hsl(38 95% 50%)",
    bg: "hsl(38 95% 50% / 0.07)",
    border: "hsl(38 95% 50% / 0.30)",
  },
  "al": {
    context: "For students preparing for the GCE Advanced Level — the highest-intensity, highest-stakes exam in the Sri Lankan system.",
    note: "A/L students require 12–15 hours of focused study per week near exams. Our 6-hour sessions match that intensity.",
    color: "hsl(22 90% 52%)",
    bg: "hsl(22 90% 52% / 0.07)",
    border: "hsl(22 90% 52% / 0.30)",
  },
};

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Pricing() {
  return (
    <div className="flex flex-col items-center pt-4 md:pt-6 pb-2 w-full relative overflow-hidden">
      <div className="hero-gradient opacity-40"></div>

      {/* ── HERO ── */}
      <div className="text-center mb-6 sm:mb-10 relative z-10 animate-slide-up px-2">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "hsl(38 95% 50%)" }}>
          Simple, Transparent Pricing
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-foreground">
          Invest In Your Child&apos;s <span className="text-gradient">Future</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-medium mb-4">
          Premium home visit study guidance, billed weekly in Sri Lankan Rupees (LKR).
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 border shadow-sm text-xs sm:text-sm font-bold text-foreground">
            <span>🔒</span> No contracts. Pause or cancel anytime.
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 border shadow-sm text-xs sm:text-sm font-bold text-foreground">
            <span>🏠</span> We come to your home — no travel.
          </div>
        </div>
      </div>

      {/* ── PRICING CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl relative z-10 px-4 sm:px-0 mb-10 sm:mb-16">
        {PLANS.map((plan, index) => {
          const meta = planMeta[plan.id];
          return (
            <div
              key={plan.id}
              className="p-5 sm:p-6 flex flex-col relative overflow-hidden transition-transform duration-300 animate-slide-up glass-card-hover bg-background/60 border"
              style={{ animationDelay: `${0.2 + (index * 0.1)}s`, borderColor: meta.border }}
            >
              {/* Most Popular Badge */}
              {meta.badge && (
                <div
                  className="-mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-4 px-5 sm:px-6 py-2 text-xs font-black text-center"
                  style={{ background: meta.color, color: "#fff" }}
                >
                  ⭐ {meta.badge}
                </div>
              )}

              {/* Plan header with color accent */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold self-start mb-3 border"
                style={{ background: meta.bg, color: meta.color, borderColor: meta.border }}
              >
                {plan.id === "grade-6-9" && "🏫"}
                {plan.id === "ol" && "📘"}
                {plan.id === "al" && "🎓"}
                <span>{plan.name}</span>
              </div>

              {/* Context sentence */}
              <p className="text-xs text-muted-foreground font-semibold mb-4 leading-relaxed">{meta.context}</p>

              <h2 className="text-xl sm:text-2xl font-bold mb-1.5 capitalize text-foreground">{plan.name}</h2>

              <div className="text-2xl sm:text-3xl font-black mb-1 flex items-end gap-1">
                <span style={{ color: meta.color }}>{formatCurrency(plan.price)}</span>
                <span className="text-xs font-black text-muted-foreground mb-1.5">LKR</span>
                <span className="text-sm text-muted-foreground font-medium mb-1 ml-1">/ week</span>
              </div>
              <p className="text-xs text-muted-foreground font-medium mb-4 pb-3 border-b border-border/50">
                Billed weekly. Cancel anytime.
              </p>

              {/* A/L hours note */}
              {meta.note && (
                <div
                  className="mb-4 p-3 rounded-xl text-xs font-semibold leading-relaxed"
                  style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}
                >
                  💡 {meta.note}
                </div>
              )}

              <ul className="flex-1 space-y-2.5 mb-5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-foreground font-medium">
                    <span className="font-bold text-base leading-none mt-0.5 flex-shrink-0" style={{ color: meta.color }}>✓</span>
                    <span className="text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={planMessages[plan.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 mt-auto rounded-xl font-bold text-center transition-all text-sm flex justify-center items-center gap-2 active:scale-95"
                style={{
                  background: meta.color,
                  color: "#fff",
                }}
              >
                <WhatsAppIcon />
                Book {plan.name} Plan
              </a>
            </div>
          );
        })}
      </div>

      {/* ── TRUST + FAQ SECTION ── */}
      <div className="w-full max-w-4xl relative z-10 px-0 flex flex-col gap-8 sm:gap-10 mb-10 pb-16 sm:pb-0">

        {/* Trust pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: "🏠", label: "We come to your home" },
            { icon: "👤", label: "Same guide every session" },
            { icon: "📋", label: "Report after every visit" },
            { icon: "📅", label: "Weekly progress review" },
          ].map((t, i) => (
            <div key={i} className="p-4 rounded-2xl border bg-background/60 flex flex-col items-center gap-2" style={{ borderColor: "hsl(38 30% 88%)" }}>
              <span className="text-2xl">{t.icon}</span>
              <span className="text-xs font-bold text-foreground text-center">{t.label}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-center" style={{ color: "hsl(38 95% 50%)" }}>
            Common Questions About Pricing
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Before You Decide</h2>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "Is this weekly billing or monthly?",
                a: "We bill weekly. You only pay for the sessions that happen. If a session doesn't take place, you are not charged for it.",
              },
              {
                q: "Can I change the number of sessions per week?",
                a: "Yes. The plans show standard session frequencies. You can discuss adjusting sessions up or down based on your child's needs when you contact us.",
              },
              {
                q: "Why is the A/L plan 6 hours per session?",
                a: "A/L students need 12–15 hours of focused study per week near their exams. Six-hour sessions allow for deep, sustained work — covering multiple subjects and maintaining intensity. Shorter sessions don't build the endurance A/L demands.",
              },
              {
                q: "Are there any hidden fees?",
                a: "No. The price you see is all-inclusive: the Study Guide's time, session reports, weekly progress reviews, and all coordination. No extra charges.",
              },
              {
                q: "Can I pause the service if my child has school exams or holidays?",
                a: "Absolutely. There are no long-term contracts. You can pause or cancel anytime by messaging us.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6"
                style={{ background: "hsl(0 0% 100% / 0.6)", borderColor: "hsl(38 30% 88%)" }}
              >
                <p className="text-sm font-bold text-foreground mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(38 95% 50% / 0.12) 0%, hsl(22 90% 52% / 0.08) 100%)",
            boxShadow: "0 0 0 1px hsl(38 95% 50% / 0.2)",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-foreground">Not Sure Which Plan?</h2>
          <p className="text-sm text-muted-foreground font-medium mb-6 max-w-md mx-auto">
            Message us on WhatsApp. Tell us your child&apos;s grade and what they need — we&apos;ll recommend the right plan and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/+94704401729?text=Hi%20PathwayLK,%20I%20need%20help%20choosing%20the%20right%20study%20plan%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3 inline-flex justify-center items-center gap-2 w-full sm:w-auto"
              style={{ boxShadow: "0 4px 24px hsl(38 95% 50% / 0.35)" }}
            >
              <WhatsAppIcon />
              Help me choose a plan
            </a>
            <Link
              href="/our-service"
              className="btn-secondary text-base px-8 py-3 inline-flex justify-center items-center gap-2 w-full sm:w-auto"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
