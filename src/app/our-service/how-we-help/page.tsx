import type { Metadata } from "next";
import HowWeHelpTabs from "./HowWeHelpTabs";
import { CTA, SectionHeading } from "@/components/SiteUI";

export const metadata: Metadata = { title: "How we help", description: "Explore revision, paper practice, study assistance and the structure of a PathwayLK home visit." };

const timeline = [
  ["10 min", "Set the study targets", "Review the previous session and agree on today’s tasks."],
  ["40 min", "Practise independently", "Attempt the agreed exercise or question set with the guide present."],
  ["10 min", "Take a planned break", "Step away from the work before the next study block."],
  ["40 min", "Review and revise", "Discuss mistakes, recap a topic and attempt another example."],
  ["20 min", "Plan the next work", "Set the next target and discuss the session with the parent."],
];

export default function HowWeHelp() {
  return (
    <>
      <div className="page-hero-band"><section className="container page-hero">
        <p className="eyebrow">ACTIVITIES DURING A HOME VISIT</p><h1>How the guide supports your child’s study.</h1>
        <p>Select your child’s stage to see the session activities. Grade 6–9 and O/L visits focus on revision, paper practice and study assistance. A/L visits focus on planning and accountability.</p>
      </section></div>
      <section className="container section section-topless"><div className="section-shell"><HowWeHelpTabs /></div></section>
      <section className="tinted section"><div className="container">
        <SectionHeading eyebrow="ILLUSTRATIVE GRADE 6–9 SESSION" title="How a two-hour visit can be organised.">This example includes study blocks, a break, question review and the parent discussion within the booked two hours.</SectionHeading>
        <div className="session-timeline">{timeline.map(([time, title, text]) => <article key={title}><span className="time-badge">{time}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="section-footnote">Actual timings depend on the student and tasks. Agree on the session structure when booking.</p>
      </div></section>
      <CTA />
    </>
  );
}
