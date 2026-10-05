import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PlanCards, CTA, FAQ, ContactButton } from "@/components/SiteUI";

export const metadata: Metadata = { title: "Pricing & plans", description: "Compare weekly PathwayLK home study guidance prices, visits, session durations and inclusions." };

export default function Pricing() {
  return (
    <>
      <div className="page-hero-band"><section className="container page-hero">
        <p className="eyebrow">WEEKLY PRICES IN SRI LANKAN RUPEES</p><h1>Home-visit plans for your child’s stage.</h1>
        <p>Compare the price, number of visits and hours per session. Each plan includes one-to-one study support, a parent discussion after the visit and a weekly progress review.</p>
        <div className="hero-checks centered">{["Weekly plans", "One-to-one home visits", "Parent updates"].map(item => <span key={item}><Check size={16} aria-hidden="true" />{item}</span>)}</div>
      </section></div>
      <section className="container section section-topless">
        <PlanCards />
        <div className="pricing-note"><strong>A/L session duration</strong><p>The standard A/L plan includes 24 scheduled hours each week. Discuss how this fits around school, tuition and rest, including breaks and parent discussion within each visit. Ask about a shorter schedule if needed.</p></div>
        <div className="intro-visit"><div><p className="eyebrow">INTRODUCTORY VISITS AND ADJUSTED SCHEDULES</p><h3>Discuss a first visit or fewer weekly sessions.</h3><p>Confirm the guide, visit duration and quoted price before choosing a regular plan.</p></div><ContactButton secondary message="Hi PathwayLK, can you tell me about an introductory home study visit, its price and guide availability?">Ask about a first visit</ContactButton></div>
        <p className="section-footnote">Four-week totals assume all standard visits take place. Payment and missed-session arrangements are agreed before booking.</p>
      </section>
      <section className="tinted section"><div className="container two-column faq-section"><div><p className="eyebrow">BILLING AND BOOKING DETAILS</p><h2>Confirm the schedule and price before paying.</h2><p className="section-intro">Discuss changes to the standard plan, subject support and session arrangements in your enquiry.</p></div><FAQ pricing /></div></section>
      <CTA />
    </>
  );
}
