import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Check, Clock3, MessageCircle, CalendarDays, ClipboardCheck, Target } from "lucide-react";
import { PLANS } from "@/shared";

export const whatsapp = (message: string) => "https://wa.me/94704401729?text=" + encodeURIComponent(message);

export function ContactButton({ children = "Chat on WhatsApp", message = "Hi PathwayLK, I would like to discuss home study support for my child.", secondary = false }: { children?: React.ReactNode; message?: string; secondary?: boolean }) {
  return <a className={secondary ? "button button-outline" : "button"} href={whatsapp(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{children}</a>;
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

export function Benefits() {
  const benefits = [
    { icon: Target, title: "Planned study targets", text: "Agree on a subject and specific tasks so your child knows what to work on during the visit." },
    { icon: ClipboardCheck, title: "Practice and review", text: "Attempt the work, discuss mistakes and record the topics that need further revision." },
    { icon: MessageCircle, title: "Updates for parents", text: "Discuss completed work, difficulties and the next targets after every session." },
  ];
  return <div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="benefit" key={title}><div className="icon-box"><Icon size={25} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div>;
}

export function SampleReport() {
  return (
    <article className="report-card" aria-label="Illustrative parent progress report">
      <div className="report-top"><span className="report-icon"><ClipboardCheck size={23} aria-hidden="true" /></span><div><span className="small-label">PARENT UPDATE</span><h3>Session summary</h3></div><span className="sample-badge">Sample</span></div>
      <div className="report-meta"><span>Grade 8 · Mathematics</span><span><Clock3 size={14} aria-hidden="true" /> 2-hour visit</span></div>
      <dl className="report-details">
        <div><dt>Study target</dt><dd>Revise fractions and attempt 15 practice questions.</dd></div>
        <div><dt>Completed</dt><dd><strong>12 of 15 questions</strong> attempted. Mistakes reviewed together.</dd></div>
        <div><dt>Needs revision</dt><dd>Adding fractions with different denominators.</dd></div>
        <div><dt>Next session</dt><dd>Review the method, then finish the remaining questions.</dd></div>
      </dl>
      <p className="report-note">Illustrative report using sample study details.</p>
    </article>
  );
}

const planDetails: Record<string, { description: string; visits: number; hours: number; label: string }> = {
  "grade-6-9": { description: "Revision, study habits and term-test practice.", visits: 3, hours: 2, label: "Grade 6–9" },
  ol: { description: "Structured revision and O/L paper practice.", visits: 3, hours: 3, label: "GCE O/L" },
  al: { description: "Study planning, focused work and accountability.", visits: 4, hours: 6, label: "GCE A/L" },
};

export function PlanCards({ brief = false }: { brief?: boolean }) {
  return <div className="plan-grid">{PLANS.map(plan => {
    const d = planDetails[plan.id];
    const inclusions = brief ? ["One-to-one support at home", "Post-session parent discussion", "Weekly progress review"] : plan.features.slice(2);
    return (
      <article className={plan.id === "ol" ? "plan-card featured" : "plan-card"} key={plan.id} id={plan.id}>
        <div className="plan-title"><BookOpen size={21} aria-hidden="true" /><h3>{d.label}</h3></div>
        <p className="plan-description">{d.description}</p>
        <div className="price"><span className="currency">LKR</span><strong>{plan.price.toLocaleString("en-LK")}</strong><span>/ week</span></div>
        <div className="plan-schedule"><span><CalendarDays size={17} aria-hidden="true" />{d.visits} visits / week</span><span><Clock3 size={17} aria-hidden="true" />{d.hours} hours / visit</span></div>
        <ul className="check-list">{inclusions.map(feature => <li key={feature}><Check size={17} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
        {!brief && <p className="plan-footnote">{d.visits * d.hours} scheduled hours per week · LKR {(plan.price * 4).toLocaleString("en-LK")} for four full weeks.</p>}
        <a className={plan.id === "ol" ? "button" : "button button-outline"} href={whatsapp(`Hi PathwayLK, I would like to discuss the ${d.label} plan for my child. Please confirm availability and subject support.`)} target="_blank" rel="noopener noreferrer">Enquire about {d.label}<ArrowRight size={16} aria-hidden="true" /></a>
      </article>
    );
  })}</div>;
}

export function CTA() {
  return <section className="container section cta-section"><div className="contact-panel"><div><p className="eyebrow">DISCUSS YOUR CHILD’S STUDY NEEDS</p><h2>Check home-visit availability in your area.</h2><p>Send your child’s grade, subjects and location. We’ll discuss a suitable guide, session schedule and price with you.</p></div><div className="contact-actions"><ContactButton>Chat on WhatsApp</ContactButton><a href="tel:+94704401729">070 440 1729</a></div></div></section>;
}

export function FAQ({ pricing = false }: { pricing?: boolean }) {
  const questions = [
    ["Where are home visits available?", "Send us your town or neighbourhood on WhatsApp. We’ll confirm whether a suitable guide can travel to your home before you book."],
    ["Who will be assigned to my child?", "The match depends on your child’s subjects, curriculum, language, location and schedule. Discuss the proposed guide’s relevant experience and verification before confirming the booking."],
    ["Does this replace tuition classes?", "Visits support revision, practice and study habits using the work your child brings home from school and tuition. Discuss the subjects your child needs help with so we can arrange suitable support."],
    ["Which subjects can the guide help with?", "Subject support depends on the guide’s knowledge and your child’s curriculum and language. Agree on the subjects before booking. Questions outside that expertise are recorded for the relevant subject teacher."],
    ["Can we arrange a first visit before a weekly plan?", "Ask about an introductory visit. Confirm the guide, session duration and price before deciding on a regular schedule."],
    ["Can we change, pause or cancel the schedule?", "You can discuss fewer or more visits and contact us to pause or cancel. Agree on notice, rescheduling and missed-session arrangements before the first booking."],
    ...(pricing ? [
      ["Are prices weekly or monthly?", "The listed prices are weekly in LKR. Four-week totals show the cost of four complete weeks of standard visits. Confirm booked sessions and payment timing before paying."],
      ["What should we confirm before paying?", "Agree on your guide, subjects, session duration including breaks and parent discussion, materials, travel arrangements and the final price. Confirm any adjustments to the standard schedule in your quote."],
    ] : []),
  ];
  return <div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand" href="/"><span className="brand-mark"><Image src="/icon.png" alt="" width={21} height={21} /></span><span>Pathway<span className="brand-lk">LK</span></span></Link><p>One-to-one home study guidance for Grade 6–9, O/L and A/L students in Sri Lanka.</p></div><div><span className="small-label">SERVICE INFORMATION</span><Link href="/our-service">Our service</Link><Link href="/our-service/how-we-help">Session activities</Link><Link href="/pricing">Prices and schedules</Link></div><div><span className="small-label">CONTACT PATHWAYLK</span><a href={whatsapp("Hi PathwayLK, I would like to know more about your home study guidance.")} target="_blank" rel="noopener noreferrer">WhatsApp · 070 440 1729</a><p>Contact us to check your area, subjects and preferred session times.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} PathwayLK</span><span>Home study guidance · Sri Lanka</span></div></footer>;
}
