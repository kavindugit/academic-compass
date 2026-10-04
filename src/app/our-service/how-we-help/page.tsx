import type { Metadata } from "next";
import HowWeHelpTabs from "./HowWeHelpTabs";
import { CTA, SectionHeading } from "@/components/SiteUI";

export const metadata: Metadata = { title: "How we help", description: "Explore paper practice, lesson recaps, study assistance and a sample two-hour home study visit." };

export default function HowWeHelp() {
  return <><div className="page-hero-band"><section className="container page-hero"><p className="eyebrow">INSIDE A HOME STUDY VISIT</p><h1>A plan. A paper.<br /><span className="highlight">A clearer next step.</span></h1><p>See how your child’s home visit can combine question practice, lesson recaps and help when they get stuck. Choose their stage below to explore the support.</p></section></div><section className="container section section-topless"><HowWeHelpTabs /></section>
    <section className="tinted section"><div className="container"><SectionHeading eyebrow="A SAMPLE TWO-HOUR VISIT" title="Two hours. A simple structure.">An illustrative Grade 6–9 session. Actual timings depend on the tasks and student.</SectionHeading><div className="session-timeline">{[["10 min", "Plan together", "Review the last visit and agree on today’s tasks."], ["40 min", "Focused practice", "Work independently on an agreed exercise or question set."], ["10 min", "Take a break", "Step away, have some water and reset."], ["40 min", "Review and retry", "Discuss mistakes, recap a topic and try another example."], ["20 min", "Close the loop", "Set the next target and share a short update with the parent."]].map(([time, title, text]) => <article key={title}><span className="time-badge">{time}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="center-note">This example includes breaks and the parent update within the two-hour visit. Confirm timings for your booking.</p></div></section><CTA /></>;
}
