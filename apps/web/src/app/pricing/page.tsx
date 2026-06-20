import Link from "next/link";
import { PLANS, formatCurrency } from "@pathwaylk/shared";

export default function Pricing() {

  return (
    <div className="flex flex-col items-center pt-6 pb-2 w-full relative min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="hero-gradient opacity-40"></div>

      {/* ── HERO ── */}
      <div className="text-center mb-8 relative z-10 animate-slide-up px-4">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "hsl(38 95% 50%)" }}
        >
          Simple, Transparent Pricing
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          Invest In Your Child's <span className="text-gradient">Future</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium mb-4">
          Premium home visit study guidance, billed weekly.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border shadow-sm text-sm font-bold text-foreground">
          <span>🔒</span> No long-term contracts. Pause or cancel anytime.
        </div>
      </div>

      {/* ── PRICING CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl relative z-10 px-4">
        {PLANS.map((plan, index) => (
          <div 
            key={plan.id} 
            className="p-6 flex flex-col relative overflow-hidden transition-transform duration-300 animate-slide-up glass-card-hover bg-background/60 border-border/60"
            style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
          >

            
            <h2 className="text-2xl font-bold mb-2 capitalize text-foreground">{plan.name}</h2>
            
            <div className="text-3xl font-black mb-1 text-gradient flex items-end">
              {formatCurrency(plan.price)}
              <span className="text-base text-muted-foreground font-medium mb-1 ml-2">/ week</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium mb-6 pb-4 border-b border-border/50">
              Billed weekly. Cancel anytime.
            </p>
            
            <ul className="flex-1 space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground font-medium">
                  <span className="text-primary font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-base leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href={`https://wa.me/+94704401729?text=Hi%20PathwayLK,%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20study%20plan.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 mt-auto rounded-xl font-bold text-center transition-colors shadow-sm text-sm bg-foreground text-background hover:bg-foreground/90 flex justify-center items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Select Plan
            </a>
          </div>
        ))}
      </div>


    </div>
  );
}
