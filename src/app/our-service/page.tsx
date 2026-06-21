import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Service | PathwayLK — Home Visit Study Guidance",
  description:
    "We send a trained study guide to your home to sit with your child while they study. They stay focused. You stay informed.",
};

export default function OurServicePage() {
  return (
    <div className="flex flex-col items-center gap-20 w-full relative py-8">

      {/* ══════════════════════════════════════════
          HERO — Simple, Clear Statement
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-slide-up mt-2">
        <div className="relative z-10 max-w-3xl mx-auto text-center">


          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            We Send A Study Guide To Your Home.{" "}
            <br className="hidden md:block" />
            <span className="shimmer-text">
              They Sit With Your Child And Make Sure They Study.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
            Reclaim your peace of mind. We provide a trained Study Guide who visits
            your home, sits beside your child, keeps them focused, clears their
            doubts, and makes sure not a single minute is wasted.
          </p>
        </div>
      </section>




      {/* ══════════════════════════════════════════
          STEP BY STEP — How The Process Works
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
              desc: "Fill in a simple form with your child's name, exam level (O/L or A/L), subjects, and your contact details. This takes less than 5 minutes.",
            },
            {
              step: "2",
              title: "We Assign A Dedicated Study Guide",
              desc: "Based on your child's subjects and exam level, we pick the right Study Guide for them. This person is trained by us and will be dedicated to your child.",
            },
            {
              step: "3",
              title: "We Agree On A Schedule",
              desc: "We work with you to set the days and times that suit your family. Morning, afternoon, or evening — you decide what works best.",
            },
            {
              step: "4",
              title: "The Study Guide Visits Your Home",
              desc: "On scheduled days, your child's Study Guide arrives at your home. They sit with your child at their study desk and the session begins.",
            },
            {
              step: "5",
              title: "Your Child Studies — Properly",
              desc: "The Study Guide organizes their school and tuition workload into an actionable daily study plan, keeps your child focused the entire time, breaks laziness immediately, and clears any doubts on the spot. No phone checking. No excuses.",
            },
            {
              step: "6",
              title: "We Keep You Updated After Every Session",
              desc: "After every single visit, we share a quick update with you: what was studied, how long they focused, and what's planned next.",
            },
            {
              step: "7",
              title: "Every Week — A Progress Review",
              desc: "Once a week, we discuss your child's overall progress with you. You'll always know exactly where they stand and what we are doing to improve their results.",
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
                {i < 6 && (
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

      {/* ══════════════════════════════════════════
          WHAT YOU GET — Clear Parent Benefits
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Benefits */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "hsl(38 95% 50%)" }}
            >
              For You As A Parent
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              What You Get When You{" "}
              <span className="text-gradient">Choose PathwayLK</span>
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "✅",
                  title: "Your child actually studies",
                  desc: "Not pretending. Not sitting at the desk doing nothing. Actually studying — with someone making sure of it.",
                },
                {
                  icon: "✅",
                  title: "You don't have to be there",
                  desc: "Go to work, handle your responsibilities. We are sitting with your child so you don't have to.",
                },
                {
                  icon: "✅",
                  title: "You know what's happening",
                  desc: "Session reports after every visit. Weekly progress summaries. You're never in the dark.",
                },
                {
                  icon: "✅",
                  title: "No travel or transport needed",
                  desc: "We come to your home. Your child studies in their own room, at their own desk. Safe and comfortable.",
                },
                {
                  icon: "✅",
                  title: "A real person dedicated to your child",
                  desc: "Not an app. Not a video. A real human being who knows your child, understands their weaknesses, and pushes them forward.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl border"
                  style={{
                    background: "hsl(38 95% 50% / 0.04)",
                    borderColor: "hsl(38 95% 50% / 0.18)",
                  }}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What your child gets */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "hsl(38 95% 50%)" }}
            >
              For Your Child
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              What Your Child Gets{" "}
              <span className="text-gradient-warm">Every Single Session</span>
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "📋",
                  title: "A study plan for the day",
                  desc: "The Study Guide organizes their school and tuition workload so they never waste time guessing what to study.",
                },
                {
                  icon: "👁️",
                  title: "Someone watching over them",
                  desc: "A real person sitting beside them making sure they don't touch their phone, daydream, or give up.",
                },
                {
                  icon: "💡",
                  title: "Instant help when they're stuck",
                  desc: "If they don't understand something, the Study Guide explains it right there. No waiting until the next tuition class.",
                },
                {
                  icon: "💪",
                  title: "Motivation when they want to quit",
                  desc: "When your child says \"I can't do this\" — the Study Guide pushes them through. That's what we're here for.",
                },
                {
                  icon: "📈",
                  title: "Steady, visible improvement",
                  desc: "Day by day, session by session, your child builds better habits and starts seeing real results.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl border"
                  style={{
                    background: "hsl(0 0% 100% / 0.6)",
                    borderColor: "hsl(38 30% 88%)",
                  }}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          THE VETTING PROCESS
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.32s" }}>
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "hsl(243 75% 60%)" }}>
                Safety & Quality
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
                { title: "Top Undergraduates", desc: "Most of our guides are undergraduates from top local universities who recently excelled in O/L and A/L." },
                { title: "Strict Background Checks", desc: "Every guide passes a comprehensive identity and background verification before joining us." },
                { title: "Methodology Training", desc: "They don't just teach; they are trained in our specific 'study enforcement' methodology." },
                { title: "Continuous Monitoring", desc: "We track their session reports and parent feedback to ensure top quality every single day." }
              ].map((vet, i) => (
                <div key={i} className="bg-background rounded-2xl p-5 border shadow-sm">
                  <h4 className="font-bold text-foreground mb-1">{vet.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{vet.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST — Common Questions
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in" style={{ animationDelay: "0.35s" }}>
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "hsl(38 95% 50%)" }}
          >
            Your Questions
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            What Parents Usually Ask Us
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {[
            {
              q: "Who are these Study Guides? Can I trust them?",
              a: "Every Study Guide is carefully selected, background-checked, and trained by us. Many are top university undergraduates. They go through a strict vetting process and follow professional guidelines before they ever visit a student.",
            },
            {
              q: "Will I always get the same person for my child?",
              a: "Yes. Your child gets one dedicated Study Guide. The same person visits every time. This helps build a bond and the Study Guide learns exactly how your child studies best.",
            },
            {
              q: "What if my child doesn't like the Study Guide?",
              a: "Tell us and we'll change them. Your child's comfort matters. We want them to respect the Study Guide and enjoy the process.",
            },
            {
              q: "How will I know if this is actually working?",
              a: "You'll receive a report after every single session. Plus a full weekly progress report. You'll see the difference in their study habits within the first two weeks.",
            },
            {
              q: "Is this only for O/L and A/L students?",
              a: "No. We cover Grade 6 all the way through A/L. Grade 6-9 students benefit hugely from structured study sessions, especially for term tests where parents often notice low marks despite apparent effort.",
            },
            {
              q: "My child is only in Grade 7. Is it too early to start?",
              a: "Not at all. Building good study habits early is the best investment you can make. Term tests matter, and the discipline and structure we build now carries directly into O/L and A/L performance later.",
            },
            {
              q: "Do your guides teach specific subjects?",
              a: "No, we do not teach the syllabus. We cover ALL subjects by ensuring your child actually studies what they learned at school or tuition. Whether they need to practice Mathematics or memorize Science notes, our Guide sits beside them to ensure they stay completely focused on the task.",
            },
            {
              q: "How long is a typical session?",
              a: "A typical session lasts for 2 to 3 hours, depending on the child's grade level and the chosen plan. We ensure the time is used effectively without burning them out.",
            },
            {
              q: "How many days per week does the Study Guide visit?",
              a: "That depends on the plan you choose. We offer different schedules to fit your needs and budget. You can discuss this when you register.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6"
              style={{
                background: "hsl(0 0% 100% / 0.6)",
                borderColor: "hsl(38 30% 88%)",
              }}
            >
              <p className="text-sm font-bold text-foreground mb-2">
                {item.q}
              </p>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — Simple Next Step
      ══════════════════════════════════════════ */}
      <section className="w-full relative z-10 animate-fade-in text-center" style={{ animationDelay: "0.4s" }}>
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, hsl(38 95% 50% / 0.12) 0%, hsl(22 90% 52% / 0.08) 100%)",
            boxShadow: "0 0 0 1px hsl(38 95% 50% / 0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, hsl(38 95% 50% / 0.12), transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-foreground tracking-tight">
              Ready To Get Started?
            </h2>
            <p className="text-base text-muted-foreground font-medium mb-8 max-w-lg mx-auto">
              Message us today. We'll chat about your needs,
              assign a Study Guide, and set everything up. It's that simple.
            </p>
            <a
              href="https://wa.me/+94704401729?text=Hi%20PathwayLK,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank" 
              rel="noopener noreferrer"
              id="our-service-cta-btn"
              className="btn-primary text-lg px-10 py-4 inline-flex justify-center items-center gap-2 shadow-lg w-full sm:w-auto"
              style={{
                boxShadow: "0 4px 24px hsl(38 95% 50% / 0.35)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


