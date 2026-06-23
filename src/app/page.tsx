import Link from "next/link";
// Ticker items duplicated for seamless infinite loop
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

export default function Home() {
  const allTickers = [...tickerItems, ...tickerItems]; // duplicate for seamless loop

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-20 w-full relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="hero-gradient opacity-70"></div>
      </div>

      {/* ── Hero Section ── */}
      <section className="text-center mt-12 animate-float max-w-5xl w-full mx-auto relative z-10 px-4">


        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground animate-slide-up">
          Your Child's Dream. <span className="shimmer-text">Our Ultimate Guidance.</span>
        </h1>
        <p
          className="text-base md:text-xl text-muted-foreground mb-10 leading-relaxed animate-slide-up max-w-3xl mx-auto font-medium px-2"
          style={{ animationDelay: "0.1s" }}
        >
          We send a dedicated Study Guide to your home to sit beside your child and keep them focused. We don't replace their teachers - we enforce the discipline needed to actually study and practice the syllabus. From Grade 6 term tests to GCE A/L preparation, we ensure your child's study time is never wasted.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a 
            href="https://wa.me/+94704401729?text=Hi%20PathwayLK,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-lg w-full sm:w-auto justify-center flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Book via WhatsApp
          </a>
          <Link href="/our-service" className="btn-secondary text-lg w-full sm:w-auto justify-center flex items-center">
            How It Works
          </Link>
        </div>

        {/* ── Keyword Ticker Strip ── */}
        <div
          className="mt-12 w-full overflow-hidden relative animate-slide-up"
          style={{ animationDelay: "0.35s" }}
        >
          <div
            className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--color-background), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--color-background), transparent)",
            }}
          />
          <div className="ticker-track animate-ticker">
            {allTickers.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-3 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border"
                style={{
                  borderColor: "hsl(243 75% 60% / 0.25)",
                  background: "hsl(243 75% 60% / 0.07)",
                  color: "hsl(243 75% 55%)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "hsl(243 75% 60%)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This For — 3 Categories ── */}
      <section
        className="w-full relative z-10 animate-fade-in"
        style={{ animationDelay: "0.28s" }}
      >
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "hsl(243 75% 60%)" }}
          >
            Who Is This For?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Every Stage. <span className="text-gradient-warm">Every Child.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🏫",
              label: "Grade 6 – 9",
              title: "Term Tests Matter More Than You Think",
              desc: "Your child looks like they're studying — but the marks tell a different story. Our Study Guide sits with them, keeps them focused, and can run paper practice, recap lessons, or clear doubts on the spot — turning every hour into real results.",
              tags: ["📄 Paper Practice", "🔁 Recap Lessons", "💡 Study Assistance"],
              color: "hsl(243 75% 60%)",
              bg: "hsl(243 75% 60% / 0.07)",
              border: "hsl(243 75% 60% / 0.25)",
            },
            {
              icon: "📘",
              label: "GCE O/L",
              title: "A Turning Point They Can't Afford To Waste",
              desc: "O/L is a national turning point. We sit with your child, enforce discipline, and structure every session — including exam-condition paper practice and lesson recaps — so they're fully prepared when it matters most.",
              tags: ["📄 Paper Practice", "🔁 Recap Lessons", "💡 Study Assistance"],
              color: "hsl(38 95% 50%)",
              bg: "hsl(38 95% 50% / 0.07)",
              border: "hsl(38 95% 50% / 0.3)",
            },
            {
              icon: "🎓",
              label: "GCE A/L",
              title: "9 A's at O/L Doesn't Guarantee A/L Success",
              desc: "A/L is a completely different game. The workload is massive and demands 12–15 hours of focused study near exams. Our Guide sits beside your child the entire session — keeping them focused, planning their work, and driving them toward the results they need.",
              tags: ["🎯 Dedicated Focus", "📅 Strategic Planning", "🏆 Results-Driven"],
              color: "hsl(22 90% 52%)",
              bg: "hsl(22 90% 52% / 0.07)",
              border: "hsl(22 90% 52% / 0.3)",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="glass-card-hover p-7 flex flex-col gap-4 cursor-default group relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{ background: cat.bg }}
              />
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}
              >
                <span>{cat.icon}</span> {cat.label}
              </div>
              <h3 className="text-base font-bold text-foreground leading-snug">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1">{cat.desc}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {cat.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Happens In A Session? (Grade 6-9 & O/L) ── */}
      <section
        className="w-full relative z-10 animate-fade-in"
        style={{ animationDelay: "0.29s" }}
      >
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "hsl(243 75% 60%)" }}
          >
            For Grade 6–9 & O/L
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Happens{" "}
            <span className="text-gradient-warm">In A Session?</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto font-medium">
            Every session is tailored to what your child needs most that day — one of three focused modes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              steps: ["Child self-studies with guide present", "Guide clears doubts the moment they arise", "Child continues — no lost momentum"],
              color: "hsl(22 90% 52%)",
              bg: "hsl(22 90% 52% / 0.07)",
              border: "hsl(22 90% 52% / 0.22)",
              href: "/our-service/how-we-help#study-assistance",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="glass-card-hover p-6 flex flex-col gap-4 group relative overflow-hidden"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border flex-shrink-0"
                style={{ background: item.bg, borderColor: item.border }}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <ol className="flex flex-col gap-2">
                {item.steps.map((step, s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: item.bg, color: item.color }}
                    >
                      {s + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <span
                className="inline-flex items-center gap-1 text-xs font-bold mt-auto"
                style={{ color: item.color }}
              >
                See how it works
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── The Problem & Solution ── */}
      <section
        className="w-full relative z-10 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            They Learn At Tuition. <span className="text-gradient-warm">We Ensure They Study At Home.</span>
          </h2>
          <p className="text-muted-foreground font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            The biggest gap in education isn't teaching - it's execution. Your child learns the syllabus at school and tuition, but memorizing and practicing must happen at home. Without proper focus, they waste hours checking phones or giving up too early.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-background border shadow-sm font-bold text-sm">
            <span className="text-primary text-xl">💡</span>
            Our Solution: A trained Guide who visits your home and actively keeps them focused while they study.
          </div>
        </div>
      </section>

      {/* ── The PathwayLK Difference ── */}
      <section
        className="w-full relative z-10 animate-fade-in"
        style={{ animationDelay: "0.35s" }}
      >
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "hsl(243 75% 60%)" }}
          >
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Parents Choose <span className="text-gradient">PathwayLK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Execution Over Theory",
              desc: "We focus on the hardest part of education: sitting down and doing the work. We ensure they actually study the material.",
            },
            {
              title: "1-on-1 Focus At Home",
              desc: "Your child gets completely dedicated attention right at their own desk. Safe, comfortable, and highly effective.",
            },
            {
              title: "Paced To Your Child",
              desc: "We move at exactly the speed your child needs to fully grasp the concepts before moving on.",
            },
            {
              title: "Enforced Discipline",
              desc: "We build their daily study plan and actively keep them accountable. No phone checking, no distractions, no excuses.",
            },
            {
              title: "Total Transparency",
              desc: "After every single session, you receive an update on exactly what they did, how long they focused, and how they are progressing.",
            },
            {
              title: "Confidence Building",
              desc: "By clearing doubts instantly and securing small daily wins, we help your child rebuild their confidence in their own abilities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-all hover:bg-muted/10"
              style={{
                background: "hsl(0 0% 100% / 0.6)",
                borderColor: "hsl(38 30% 88%)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full mb-4 flex items-center justify-center"
                style={{ background: "hsl(38 95% 50% / 0.15)", color: "hsl(38 95% 45%)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── CTA Section ── */}
      <section
        className="w-full relative z-10 animate-fade-in text-center"
        style={{ animationDelay: "0.5s" }}
      >
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-foreground tracking-tight">
              Ready To Give Your Child{" "}
              <span className="text-gradient">The Focus They Need?</span>
            </h2>
            <p className="text-base text-muted-foreground font-medium mb-8 max-w-lg mx-auto">
              Message us today. We'll assign a Study Guide, set up a schedule, and
              your child's first session can begin within days.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/+94704401729?text=Hi%20PathwayLK,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-flex justify-center items-center gap-2 shadow-lg w-full sm:w-auto"
                style={{
                  boxShadow: "0 4px 24px hsl(38 95% 50% / 0.35)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Book via WhatsApp
              </a>
              <Link
                href="/our-service"
                className="btn-secondary text-lg px-8 py-4 inline-flex justify-center items-center gap-2 w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
