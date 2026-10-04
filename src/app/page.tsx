import Link from "next/link";
import { BookOpen, House, Users, MessageCircle, Check, ClipboardCheck, FileText, Lightbulb, CalendarDays } from "lucide-react";
import { ContactButton, SectionHeading, SampleReport, PlanCards, FAQ, CTA } from "@/components/SiteUI";

const sessionModes = [
  { icon: FileText, number: "01", title: "Practise the paper.", text: "Your child attempts the questions. The guide helps review mistakes and identify what needs another try.", tag: "PAPER PRACTICE", className: "practice-card" },
  { icon: BookOpen, number: "02", title: "Revisit the lesson.", text: "Go back to school and tuition notes. Use questions and short exercises to check what your child understands.", tag: "LESSON RECAPS", className: "recap-card" },
  { icon: Lightbulb, number: "03", title: "Get past the block.", text: "Get help in agreed subjects when a question feels difficult, then return to the work with a clearer next step.", tag: "STUDY ASSISTANCE", className: "assist-card" },
];

export default function Home() {
  return <>
    <div className="hero-band">
      <section className="container hero">
        <div className="hero-copy">
          <p className="hero-kicker"><House size={16} aria-hidden="true" /> HOME VISIT STUDY GUIDANCE · SRI LANKA</p>
          <h1>A Study Guide.<br /><span className="headline-blue">At your home.</span><br />By their side.</h1>
          <p className="hero-description">We send a Study Guide to your home to sit with your child, organise revision, work through practice questions and update you after every visit.</p>
          <div className="button-row"><ContactButton>Find a Study Guide</ContactButton><Link className="button button-outline" href="/our-service/how-we-help">What happens in a visit?</Link></div>
          <div className="hero-grade-links"><span>Support for</span><Link href="/our-service/how-we-help#grade69">Grade 6–9</Link><Link href="/our-service/how-we-help#ol">GCE O/L</Link><Link href="/our-service/how-we-help#al">GCE A/L</Link></div>
          <p className="hero-availability">Tell us your area, subjects and preferred study times.</p>
        </div>
        <div className="hero-visual">
          <div className="visit-sticker"><House size={22} aria-hidden="true" /><div><span>WE COME TO YOU</span><strong>One guide. One student.</strong></div></div>
          <div className="photo-frame"><img src="/study-visit.webp" alt="Illustrative home visit: a Study Guide sits beside a student as she completes mathematics exercises" width="1448" height="1086" fetchPriority="high" /></div>
          <div className="study-sticker"><ClipboardCheck size={25} aria-hidden="true" /><div><strong>Their work. Our support.</strong><span>A plan for every study visit.</span></div></div>
          <p className="image-caption">Illustrative image</p>
        </div>
      </section>
    </div>

    <div className="service-strip"><div className="container service-strip-inner">
      <div><span className="strip-icon"><House size={25} aria-hidden="true" /></span><div><strong>A guide visits your home</strong><span>Study support in your child’s own space.</span></div></div>
      <div><span className="strip-icon"><Users size={25} aria-hidden="true" /></span><div><strong>They work beside your child</strong><span>Clear tasks, practice and encouragement.</span></div></div>
      <div><span className="strip-icon"><MessageCircle size={25} aria-hidden="true" /></span><div><strong>You get a parent update</strong><span>Completed work, difficulties and next steps.</span></div></div>
    </div></div>

    <section className="container section">
      <div className="section-heading heading-row"><div><p className="eyebrow">THE PART THAT HAPPENS AT HOME</p><h2>Tuition teaches the lesson.<br /><span className="headline-blue">We help put it into practice.</span></h2></div><p className="heading-aside">Notes need revising. Questions need attempting. A Study Guide helps your child follow through.</p></div>
      <div className="learning-grid">{sessionModes.map(({ icon: Icon, number, title, text, tag, className }) => <article className={"learning-card " + className} key={number}><div className="learning-card-top"><span className="learning-icon"><Icon size={29} aria-hidden="true" /></span><span className="learning-number">{number}</span></div><span className="small-label">{tag}</span><h3>{title}</h3><p>{text}</p><Link className="card-link" href="/our-service/how-we-help">Explore this support</Link></article>)}</div>
      <p className="center-note">Grade 6–9 and O/L visits can combine these modes. A/L support focuses on study planning and accountability.</p>
    </section>

    <section className="session-section"><div className="container section">
      <div className="section-heading heading-row"><div><p className="eyebrow">A VISIT WITH A PURPOSE</p><h2>Here’s what happens<br /><span className="headline-blue">when we sit down together.</span></h2></div><Link className="button button-outline" href="/our-service/how-we-help">See a sample 2-hour visit</Link></div>
      <div className="visit-steps">{[
        { icon: CalendarDays, title: "Make a small plan", text: "Agree on the subject, the tasks and a realistic target for the visit.", label: "PLAN" },
        { icon: BookOpen, title: "Work, then review", text: "Use focused work blocks, planned breaks and time to review mistakes.", label: "PRACTISE" },
        { icon: MessageCircle, title: "Keep you in the loop", text: "Discuss what was completed, what was difficult and what comes next.", label: "UPDATE" },
      ].map(({ icon: Icon, title, text, label }, i) => <article className="visit-step" key={title}><span className="visit-step-number">{i + 1}</span><Icon size={27} aria-hidden="true" /><span className="small-label">{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="container section parent-section">
      <div className="parent-photo-column"><p className="eyebrow">LESS GUESSING. MORE UNDERSTANDING.</p><h2>See what happened.<br /><span className="headline-blue">Know what’s next.</span></h2><p className="section-intro">After each visit, the guide discusses your child’s work with you. A weekly review helps you follow the routine and adjust the plan.</p><figure className="parent-photo"><img src="/parent-update.webp" alt="Illustrative scene of a parent and Study Guide discussing the work after a home study visit" width="1536" height="1024" loading="lazy" /><figcaption>Illustrative image</figcaption></figure></div>
      <div className="parent-report-column"><span className="example-label">WHAT A USEFUL UPDATE CAN LOOK LIKE</span><SampleReport /><div className="parent-takeaway"><Check size={19} aria-hidden="true" /><p>Progress means completed work and clearer next steps—not just time spent at a desk.</p></div></div>
    </section>

    <section className="plans-section"><div className="container section"><SectionHeading eyebrow="CHOOSE YOUR STARTING POINT" title="A regular rhythm. A clear weekly price.">One-to-one home visits, with a schedule suited to your child’s stage.</SectionHeading><PlanCards brief /><p className="center-note">Need a lighter schedule? Ask about fewer visits and an introductory session.</p><div className="center-action"><Link className="text-link" href="/pricing">Compare everything included</Link></div></div></section>

    <section className="container section"><div className="two-column faq-section"><div><p className="eyebrow">LET’S CLEAR THINGS UP</p><h2>A good fit starts<br /><span className="headline-blue">with good questions.</span></h2><p className="section-intro">Confirm the subjects, language, location and guide match before booking.</p><div className="little-note"><House size={24} aria-hidden="true" /><p>Your child studies at home. We bring the structure and support.</p></div></div><FAQ /></div></section><CTA />
  </>;
}
