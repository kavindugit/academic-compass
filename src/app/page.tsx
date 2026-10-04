import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, House, Users, MessageCircle, Check, FileText, Lightbulb, CalendarDays } from "lucide-react";
import { ContactButton, SectionHeading, SampleReport, PlanCards, FAQ, CTA } from "@/components/SiteUI";
import { PLANS } from "@/shared";

// When using a real, permissioned photo, update its alt text and caption here.
const studyPhoto = {
  src: "/study-visit.webp",
  alt: "Illustrative home study scene: a guide supports a student working through mathematics exercises",
  caption: "Illustrative home study scene",
};

const sessionModes = [
  { icon: FileText, number: "01", title: "Practise the paper.", text: "Your child attempts the questions. The guide helps review mistakes and identify what needs another try.", tag: "PAPER PRACTICE", className: "practice-card" },
  { icon: BookOpen, number: "02", title: "Revisit the lesson.", text: "Go back to school and tuition notes. Use questions and short exercises to check what your child understands.", tag: "LESSON RECAPS", className: "recap-card" },
  { icon: Lightbulb, number: "03", title: "Get past the block.", text: "Get help in agreed subjects when a question feels difficult, then return to the work with a clearer next step.", tag: "STUDY ASSISTANCE", className: "assist-card" },
];

export default function Home() {
  const startingPlan = PLANS.find(plan => plan.id === "grade-6-9");

  return <>
    <div className="hero-band">
      <section className="container hero">
        <div className="hero-copy">
          <p className="hero-kicker">One-to-one study guidance at home</p>
          <h1>Help your child build a steady study routine.</h1>
          <p className="hero-description">A Study Guide visits your home, helps your child stay focused on revision and practice, and discusses progress with you after each session.</p>
          <div className="button-row hero-actions">
            <ContactButton message="Hi PathwayLK, I would like to discuss a Study Guide for my child. Can we check availability in my area?">Chat on WhatsApp</ContactButton>
            <Link className="hero-secondary-link" href="/our-service/how-we-help">See how a visit works <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <p className="hero-availability">Send your child’s grade and location. We’ll confirm availability.</p>
          <div className="hero-details">
            <nav className="hero-grade-links" aria-label="Explore support by grade"><span>For</span><Link href="/our-service/how-we-help#grade69">Grade 6–9</Link><Link href="/our-service/how-we-help#ol">GCE O/L</Link><Link href="/our-service/how-we-help#al">GCE A/L</Link></nav>
            {startingPlan && <Link className="hero-price-link" href="/pricing">Grade 6–9 from LKR {startingPlan.price.toLocaleString("en-LK")} / week <ArrowRight size={15} aria-hidden="true" /></Link>}
          </div>
        </div>
        <figure className="hero-visual">
          <div className="photo-frame"><Image src={studyPhoto.src} alt={studyPhoto.alt} width={1448} height={1086} priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
          <figcaption className="image-caption">{studyPhoto.caption}</figcaption>
        </figure>
      </section>
    </div>

    <div className="service-strip"><div className="container service-strip-inner">
      <div><span className="strip-icon"><House size={25} aria-hidden="true" /></span><div><strong>A guide visits your home</strong><span>Study support in your child’s own space.</span></div></div>
      <div><span className="strip-icon"><Users size={25} aria-hidden="true" /></span><div><strong>They work beside your child</strong><span>Clear tasks, practice and encouragement.</span></div></div>
      <div><span className="strip-icon"><MessageCircle size={25} aria-hidden="true" /></span><div><strong>You get a parent update</strong><span>Completed work, difficulties and next steps.</span></div></div>
    </div></div>

    <section className="container section">
      <div className="section-heading heading-row"><div><p className="eyebrow">REVISION, PRACTICE AND STUDY HABITS</p><h2>Support for the work<br />they bring home.</h2></div><p className="heading-aside">Your child brings the lessons from school and tuition. We help them make time to revise and practise.</p></div>
      <div className="learning-grid">{sessionModes.map(({ icon: Icon, number, title, text, tag, className }) => <article className={"learning-card " + className} key={number}><div className="learning-card-top"><span className="learning-icon"><Icon size={29} aria-hidden="true" /></span><span className="learning-number">{number}</span></div><span className="small-label">{tag}</span><h3>{title}</h3><p>{text}</p><Link className="card-link" href="/our-service/how-we-help">Explore this support</Link></article>)}</div>
      <p className="center-note">Grade 6–9 and O/L visits can combine these modes. A/L support focuses on study planning and accountability.</p>
    </section>

    <section className="session-section"><div className="container section">
      <div className="section-heading heading-row"><div><p className="eyebrow">DURING A HOME VISIT</p><h2>Every session has<br />a clear plan.</h2></div><Link className="text-link" href="/our-service/how-we-help">See a sample 2-hour visit</Link></div>
      <div className="visit-steps">{[
        { icon: CalendarDays, title: "Make a small plan", text: "Agree on the subject, the tasks and a realistic target for the visit.", label: "PLAN" },
        { icon: BookOpen, title: "Work, then review", text: "Use focused work blocks, planned breaks and time to review mistakes.", label: "PRACTISE" },
        { icon: MessageCircle, title: "Keep you in the loop", text: "Discuss what was completed, what was difficult and what comes next.", label: "UPDATE" },
      ].map(({ icon: Icon, title, text, label }, i) => <article className="visit-step" key={title}><span className="visit-step-number">{i + 1}</span><Icon size={27} aria-hidden="true" /><span className="small-label">{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="container section parent-section">
      <div className="parent-photo-column"><p className="eyebrow">UPDATES FOR PARENTS</p><h2>Understand what your<br />child worked on.</h2><p className="section-intro">After each visit, the guide discusses your child’s work with you. A weekly review helps you follow the routine and adjust the plan.</p><figure className="parent-photo"><Image src="/parent-update.webp" alt="Illustrative scene of a parent and Study Guide discussing the work after a home study visit" width={1536} height={1024} sizes="(max-width: 850px) 100vw, 50vw" /><figcaption>Illustrative image</figcaption></figure></div>
      <div className="parent-report-column"><span className="example-label">WHAT A USEFUL UPDATE CAN LOOK LIKE</span><SampleReport /><div className="parent-takeaway"><Check size={19} aria-hidden="true" /><p>Progress means completed work and clearer next steps—not just time spent at a desk.</p></div></div>
    </section>

    <section className="plans-section"><div className="container section"><SectionHeading eyebrow="WEEKLY PLANS" title="Choose a plan for your child’s stage.">Compare the weekly price, visit frequency and session length.</SectionHeading><PlanCards brief /><p className="center-note">Need a lighter schedule? Ask about fewer visits and an introductory session.</p><div className="center-action"><Link className="text-link" href="/pricing">Compare everything included</Link></div></div></section>

    <section className="container section"><div className="two-column faq-section"><div><p className="eyebrow">COMMON QUESTIONS</p><h2>Before you book.</h2><p className="section-intro">Check the subjects, language, location and guide match before choosing your schedule.</p><div className="little-note"><House size={24} aria-hidden="true" /><p>Your child studies at home. We bring the structure and support.</p></div></div><FAQ /></div></section><CTA />
  </>;
}
