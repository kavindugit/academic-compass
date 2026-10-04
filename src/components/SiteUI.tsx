import Link from "next/link";
import { BookOpen, Check, Clock3, MessageCircle, CalendarDays, ClipboardCheck, Target } from "lucide-react";
import { PLANS } from "@/shared";

export const whatsapp = (message: string) => "https://wa.me/94704401729?text=" + encodeURIComponent(message);

export function ContactButton({ children = "Let’s discuss your child’s needs", message = "Hi PathwayLK, I would like to discuss home study support for my child.", secondary = false }: { children?: React.ReactNode; message?: string; secondary?: boolean }) {
  return <a className={secondary ? "button button-outline" : "button"} href={whatsapp(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{children}</a>;
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

export function Benefits() {
  const benefits = [
    { icon: Target, title: "A clear target for today", text: "Choose a subject, agree on manageable tasks and give each visit a clear purpose.", label: "STRUCTURE" },
    { icon: ClipboardCheck, title: "Practice with a next step", text: "Attempt the work, discuss mistakes and identify the topics that need another try.", label: "PROGRESS" },
    { icon: MessageCircle, title: "You know what was done", text: "Get a short parent discussion after the visit, with completed work and a plan for what comes next.", label: "PEACE OF MIND" },
  ];
  return <div className="benefit-grid">{benefits.map(({ icon: Icon, title, text, label }) => <article className="benefit" key={title}><div className="icon-box"><Icon size={25} aria-hidden="true" /></div><span className="small-label">{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>;
}

export function SampleReport() {
  return <article className="report-card" aria-label="Illustrative parent progress report"><div className="report-top"><span className="report-icon"><ClipboardCheck size={23} aria-hidden="true" /></span><div><span className="small-label">PARENT UPDATE</span><h3>Here’s what we worked on.</h3></div><span className="sample-badge">Sample</span></div>
    <div className="report-meta"><span>Grade 8 · Mathematics</span><span><Clock3 size={14} aria-hidden="true" /> 2-hour visit</span></div>
    <dl className="report-details"><div><dt>Today’s goal</dt><dd>Revise fractions and attempt 15 practice questions.</dd></div><div><dt>Completed</dt><dd><strong>12 of 15 questions</strong> attempted. Mistakes reviewed together.</dd></div><div><dt>Needs practice</dt><dd>Adding fractions with different denominators.</dd></div><div><dt>Next visit</dt><dd>Review the method, then finish the remaining questions.</dd></div></dl>
    <p className="report-note">Illustrative example of a session update. This is not a real student record or a promise of results.</p>
  </article>;
}

const planDetails: Record<string, { tag: string; description: string; visits: number; hours: number; label: string }> = {
  "grade-6-9": { tag: "BUILD THE HABIT", description: "A regular rhythm for revision, homework and term-test practice.", visits: 3, hours: 2, label: "Grade 6–9" },
  ol: { tag: "MAKE PRACTICE COUNT", description: "Structured revision and paper practice ahead of O/L exams.", visits: 3, hours: 3, label: "GCE O/L" },
  al: { tag: "EXTENDED STUDY SUPPORT", description: "Longer study visits for planning, revision and accountability.", visits: 4, hours: 6, label: "GCE A/L" },
};

export function PlanCards({ brief = false }: { brief?: boolean }) {
  return <div className="plan-grid">{PLANS.map(plan => { const d = planDetails[plan.id]; return <article className={plan.id === "ol" ? "plan-card featured" : "plan-card"} key={plan.id} id={plan.id}>
    <span className="small-label">{d.tag}</span><h3>{d.label}</h3><p className="plan-description">{d.description}</p><div className="price"><span className="currency">LKR</span><strong>{plan.price.toLocaleString("en-LK")}</strong><span>/ week</span></div>
    <div className="plan-schedule"><span><CalendarDays size={17} aria-hidden="true" />{d.visits} visits / week</span><span><Clock3 size={17} aria-hidden="true" />{d.hours} hours / visit</span></div>
    <ul className="check-list">{(brief ? plan.features.slice(2, 5) : plan.features.slice(2)).map(feature => <li key={feature}><Check size={17} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
    {!brief && <p className="plan-footnote">{d.visits * d.hours} scheduled hours per week · LKR {(plan.price * 4).toLocaleString("en-LK")} for four full weeks.</p>}
    <a className={plan.id === "ol" ? "button" : "button button-outline"} href={whatsapp(`Hi PathwayLK, I would like to discuss the ${d.label} plan for my child. Please confirm availability and subject support.`)} target="_blank" rel="noopener noreferrer">Ask about {d.label}</a>
  </article>; })}</div>;
}

export function CTA() {
  return <section className="container section"><div className="contact-panel"><div><p className="eyebrow">A SMALL FIRST STEP</p><h2>Let’s make home study<br />work for your child.</h2><p>Send us your child’s grade, subjects and location. Let’s talk about the right guide and a schedule that fits.</p></div><div className="contact-actions"><ContactButton>Chat on WhatsApp</ContactButton><span>No long-term commitment.</span></div></div></section>;
}

export function FAQ({ pricing = false }: { pricing?: boolean }) {
  const questions = [
    ["Does this replace tuition classes?", "PathwayLK supports the work your child brings home from school and tuition. Visits focus on revision, practice and study habits. Tell us which subjects need support so we can discuss a suitable guide."],
    ["Can the guide explain every subject?", "Support depends on the guide’s subject knowledge and your child’s curriculum and language. Confirm the subjects before booking. Questions outside the guide’s expertise should be recorded for the relevant subject teacher."],
    ["Where are home visits available?", "Message us with your town or neighbourhood. We’ll confirm whether a suitable guide can travel to your home before you make a booking."],
    ["Can we try a visit first?", "Ask us about an introductory visit. Confirm its duration, price and guide availability before committing to a weekly schedule."],
    ["Can we adjust, pause or cancel the plan?", "The plans show standard schedules. You can discuss fewer or more visits and pause or cancel by contacting us. Agree on notice, rescheduling and missed-session arrangements before your first booking."],
    ...(pricing ? [["Is the price weekly or monthly?", "Prices are weekly in LKR. The four-week figures are examples, not fixed calendar-month bills. Confirm your booked visits, payment timing and any adjustments before paying."], ["What should we confirm before paying?", "Confirm your location, subjects and language, your guide, total session duration including breaks and parent discussion, materials, travel arrangements, and the final price. Your agreed quote should make any additional costs clear."]] : []),
  ];
  return <div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand" href="/"><span className="brand-mark"><BookOpen size={21} aria-hidden="true" /></span><span>Pathway<span className="brand-lk">LK</span></span></Link><p>A Study Guide at home.<br />A plan for study time.</p></div><div><span className="small-label">EXPLORE</span><Link href="/our-service">Our service</Link><Link href="/our-service/how-we-help">How we help</Link><Link href="/pricing">Pricing & plans</Link></div><div><span className="small-label">LET’S TALK</span><a href={whatsapp("Hi PathwayLK, I would like to know more about your home study guidance.")} target="_blank" rel="noopener noreferrer">WhatsApp · 070 440 1729</a><p>Ask about your area, subjects<br />and preferred study times.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} PathwayLK</span><span>Home study guidance · Sri Lanka</span></div></footer>;
}
