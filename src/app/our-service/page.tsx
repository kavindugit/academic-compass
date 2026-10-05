import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, GraduationCap, Users, ClipboardCheck } from "lucide-react";
import { Benefits, CTA, ContactButton, SampleReport, SectionHeading } from "@/components/SiteUI";

export const metadata: Metadata = { title: "Our service", description: "Understand PathwayLK home study visits, guide matching, revision support and parent updates." };

const guideDetails = [
  { icon: GraduationCap, title: "Subject and language match", text: "Discuss the guide’s relevant studies and experience, your child’s curriculum, and the language and subjects that need support." },
  { icon: Users, title: "Meet your proposed guide", text: "Ask to speak with the guide and discuss identity and reference verification before confirming the booking. Your child should feel comfortable with the match." },
  { icon: ClipboardCheck, title: "Agree on visit arrangements", text: "Confirm the study space, parent or guardian contact, breaks, and how to raise a concern or request a change of guide." },
];

export default function Service() {
  return (
    <>
      <div className="page-hero-band"><section className="container page-hero">
        <p className="eyebrow">ONE-TO-ONE STUDY SUPPORT AT HOME</p><h1>What a Study Guide does during a home visit.</h1>
        <p>The guide sits beside your child, organises their study tasks, supports revision and practice, and discusses the session with you afterwards.</p><ContactButton />
      </section></div>
      <section className="container section section-topless"><Benefits /></section>

      <section className="tinted section"><div className="container two-column">
        <div><p className="eyebrow">SUPPORT FOR SCHOOL AND TUITION WORK</p><h2>Help your child complete their study at home.</h2><p className="section-intro">Your child attempts the work. The guide helps them follow an agreed plan, review mistakes and identify topics that need another attempt.</p><Link className="text-link" href="/our-service/how-we-help">View the session activities <ArrowRight size={16} aria-hidden="true" /></Link><Image className="service-photo" src="/study-visit.webp" alt="Illustrative Study Guide helping a student practise at home" width={1448} height={1086} sizes="(max-width: 850px) 100vw, 50vw" /><p className="image-caption">Illustrative home study scene</p></div>
        <div className="scope-card"><h3>Included in the visit</h3><ul className="plain-checks">
          <li><Check size={18} aria-hidden="true" />Specific study targets for the session.</li>
          <li><Check size={18} aria-hidden="true" />Focused work blocks with planned breaks.</li>
          <li><Check size={18} aria-hidden="true" />Question review within the guide’s subject expertise.</li>
          <li><Check size={18} aria-hidden="true" />Unresolved doubts recorded for the subject teacher.</li>
          <li><Check size={18} aria-hidden="true" />A parent discussion about completed work and next steps.</li>
        </ul><p className="scope-note">Agree on subject support before booking. Visits complement the lessons covered at school and tuition.</p></div>
      </div></section>

      <section className="container section"><div className="section-shell">
        <SectionHeading eyebrow="CHOOSING THE RIGHT GUIDE" title="Confirm the match before the first visit.">Discuss your child’s needs, the guide’s experience and the practical arrangements before inviting them into your home.</SectionHeading>
        <div className="trust-grid">{guideDetails.map(({ icon: Icon, title, text }) => <article className="trust-item" key={title}><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section id="parent-updates" className="tinted section"><div className="container two-column report-section">
        <div><p className="eyebrow">PARENT DISCUSSION AND WEEKLY REVIEW</p><h2>Track completed work and areas that need revision.</h2><p className="section-intro">After each session, the guide discusses what your child worked on, the difficulties they encountered and the next study targets. A weekly review helps you follow the routine and adjust the plan.</p><p className="section-intro">This illustrative report shows how those details can be recorded.</p></div><SampleReport />
      </div></section>

      <section className="container section"><div className="section-shell">
        <SectionHeading eyebrow="BOOKING A HOME VISIT" title="From your enquiry to the first study session." />
        <ol className="journey-list">{[
          ["Tell us what your child needs", "Send the grade, subjects, curriculum, language, location and preferred times."],
          ["Discuss the guide and schedule", "Confirm the proposed guide, available subject support, weekly visits and session length."],
          ["Agree on the booking details", "Confirm the price, breaks, parent discussion, materials and cancellation arrangements."],
          ["Begin and review the work", "Use the first session to set realistic targets, then discuss each visit and review the week."],
        ].map(([title, text], i) => <li key={title}><span className="journey-number">{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
      </div></section>
      <CTA />
    </>
  );
}
