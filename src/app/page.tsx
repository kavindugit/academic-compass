import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, House, MessageCircle, Check, FileText, Lightbulb, CalendarDays } from "lucide-react";
import { ContactButton, SectionHeading, SampleReport, PlanCards, FAQ, CTA } from "@/components/SiteUI";
import { PLANS } from "@/shared";

// Replace the existing WebP with your own photo, then update its description and caption.
const studyPhoto = {
  src: "/study-visit.webp",
  alt: "Illustrative home study scene: a guide supports a student working through mathematics exercises",
  caption: "Illustrative home study scene",
};

const sessionModes = [
  {
    icon: FileText,
    title: "Paper practice",
    text: "Your child attempts a paper or question set independently. The guide then reviews the answers with them and identifies topics to practise again.",
    detail: "Past papers, term tests and practice questions",
  },
  {
    icon: BookOpen,
    title: "Lesson revision",
    text: "The guide revisits school and tuition notes with your child, checks understanding through questions, and works through areas that need revision.",
    detail: "Revision of lessons already covered",
  },
  {
    icon: Lightbulb,
    title: "Study assistance",
    text: "When your child gets stuck, the guide helps with that specific question in agreed subjects, so they can continue their own work.",
    detail: "Subject support agreed before booking",
  },
];

const visitSteps = [
  { icon: CalendarDays, title: "Set the study targets", text: "Choose the subject, agree on specific tasks and plan work blocks with breaks." },
  { icon: BookOpen, title: "Complete and review the work", text: "Support focused study, review attempted questions and record difficulties that need further attention." },
  { icon: MessageCircle, title: "Discuss progress with you", text: "Explain what was completed, where your child needed help and what to work on next." },
];

export default function Home() {
  const startingPlan = PLANS.find(plan => plan.id === "grade-6-9");

  return (
    <>
      <div className="hero-band">
        <section className="container hero" aria-labelledby="home-heading">
          <div className="hero-copy">
            <p className="hero-kicker"><House size={17} aria-hidden="true" /> Home study guidance · Sri Lanka</p>
            <h1 id="home-heading">We send a <span className="highlight">Study Guide</span> to your home.</h1>
            <p className="hero-description">They sit beside your child, keep revision and practice on track, and update you after every session.</p>
            <p className="hero-context">For parents who want regular, supported study time after school and tuition.</p>
            <div className="button-row hero-actions">
              <ContactButton message="Hi PathwayLK, I would like a Study Guide for my child. Can we discuss availability in my area?">Check availability on WhatsApp</ContactButton>
              <Link className="hero-secondary-link" href="/our-service/how-we-help">See how a visit works <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <p className="hero-availability">Send your child’s grade, subjects and location.</p>
            <div className="hero-details">
              <nav className="hero-grade-links" aria-label="Explore support by grade">
                <span>Study support for</span>
                <Link href="/our-service/how-we-help#grade69">Grade 6–9</Link>
                <Link href="/our-service/how-we-help#ol">GCE O/L</Link>
                <Link href="/our-service/how-we-help#al">GCE A/L</Link>
              </nav>
              {startingPlan && <Link className="hero-price-link" href="/pricing">Grade 6–9: LKR {startingPlan.price.toLocaleString("en-LK")} / week · See all plans <ArrowRight size={15} aria-hidden="true" /></Link>}
            </div>
          </div>
          <figure className="hero-visual">
            <div className="photo-frame"><Image src={studyPhoto.src} alt={studyPhoto.alt} width={1448} height={1086} priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
            <figcaption className="image-caption">{studyPhoto.caption}</figcaption>
            <div className="hero-photo-note"><BookOpen size={20} aria-hidden="true" /><p><strong>Your child does the work.</strong> The guide provides structure, support and feedback.</p></div>
          </figure>
        </section>
      </div>

      <section className="service-strip" aria-label="What the service includes">
        <div className="container service-strip-inner">
          <div><span className="strip-icon"><House size={24} aria-hidden="true" /></span><div><strong>One-to-one home visits</strong><span>A guide works with your child in their own study space.</span></div></div>
          <div><span className="strip-icon"><FileText size={24} aria-hidden="true" /></span><div><strong>Structured study sessions</strong><span>Agreed tasks, focused practice and time to review.</span></div></div>
          <div><span className="strip-icon"><MessageCircle size={24} aria-hidden="true" /></span><div><strong>Updates after each visit</strong><span>Completed work, difficulties and the next study targets.</span></div></div>
        </div>
      </section>

      <section className="container section">
        <div className="section-shell">
          <SectionHeading eyebrow="WHAT YOUR CHILD WORKS ON" title="Revision and practice, with support beside them.">
            School and tuition cover the lessons. Our visits help your child revise that material, attempt questions and complete their planned study at home.
          </SectionHeading>
          <div className="learning-grid">
            {sessionModes.map(({ icon: Icon, title, text, detail }) => (
              <article className="learning-card" key={title}>
                <span className="learning-icon"><Icon size={25} aria-hidden="true" /></span>
                <h3>{title}</h3><p>{text}</p>
                <p className="learning-detail">{detail}</p>
                <Link className="card-link" href="/our-service/how-we-help">View session details <ArrowRight size={15} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
          <p className="section-footnote">Grade 6–9 and O/L sessions can combine these activities. A/L visits focus on study planning, focused work blocks and accountability.</p>
        </div>
      </section>

      <section className="session-section">
        <div className="container section">
          <div className="section-heading heading-row"><div><p className="eyebrow">SESSION STRUCTURE</p><h2>What happens during each home visit.</h2></div><Link className="text-link" href="/our-service/how-we-help">View a sample two-hour session <ArrowRight size={16} aria-hidden="true" /></Link></div>
          <div className="visit-steps">
            {visitSteps.map(({ icon: Icon, title, text }, i) => (
              <article className="visit-step" key={title}><span className="visit-step-number">{i + 1}</span><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-shell parent-section">
          <div className="parent-photo-column">
            <p className="eyebrow">PARENT DISCUSSION AND WEEKLY REVIEW</p>
            <h2>Know what was studied and what needs attention.</h2>
            <p className="section-intro">After each visit, the guide discusses completed work and difficulties with you. A weekly review helps identify repeated gaps and adjust the study plan.</p>
            <figure className="parent-photo"><Image src="/parent-update.webp" alt="Illustrative scene of a parent and Study Guide discussing work after a home study visit" width={1536} height={1024} sizes="(max-width: 850px) 100vw, 50vw" /><figcaption>Illustrative parent discussion</figcaption></figure>
          </div>
          <div className="parent-report-column"><SampleReport /><div className="parent-takeaway"><Check size={19} aria-hidden="true" /><p>Weekly reviews help identify topics that need repeated practice.</p></div></div>
        </div>
      </section>

      <section className="plans-section"><div className="container section">
        <SectionHeading eyebrow="PRICES AND SESSION SCHEDULES" title="Compare weekly home-visit plans.">Choose your child’s stage to see the weekly price, number of visits and hours per session.</SectionHeading>
        <PlanCards brief />
        <div className="center-action"><Link className="text-link" href="/pricing">View all inclusions and billing details <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div></section>

      <section className="container section"><div className="section-shell two-column faq-section">
        <div><p className="eyebrow">BEFORE YOU BOOK</p><h2>Availability, subject support and guide matching.</h2><p className="section-intro">Confirm your area, the subjects your child needs and the proposed guide before choosing a schedule.</p><Link className="text-link" href="/our-service">Read about the service <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <FAQ />
      </div></section>
      <CTA />
    </>
  );
}
