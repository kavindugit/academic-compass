"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "glass border-b border-border shadow-md px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row md:justify-between md:items-center sticky top-0 z-50 transition-all duration-300"
    : "bg-transparent border-b border-transparent px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row md:justify-between md:items-center sticky top-0 z-50 transition-all duration-300 backdrop-blur-0";

  const whatsappLink = "https://wa.me/+94704401729?text=Hi%20PathwayLK,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  if (!mounted) {
    return (
      <nav className={navClass}>
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" className="text-2xl font-bold text-gradient tracking-tight">
            PathwayLK
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center font-medium text-muted-foreground">
          <div className="w-64"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navClass}>
      {/* Top Row for Mobile (Logo + WhatsApp), Left on Desktop */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="text-2xl font-bold text-gradient tracking-tight">
          PathwayLK
        </Link>
        
        {/* Mobile WhatsApp Button */}
        <div className="md:hidden">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold btn-primary px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Chat
          </a>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center font-medium text-muted-foreground">
        <Link href="/" className={pathname === "/" ? "text-primary font-bold text-sm transition-colors" : "hover:text-foreground transition-colors text-sm"}>Home</Link>
        <Link href="/our-service" className={pathname === "/our-service" ? "text-primary font-bold text-sm transition-colors" : "hover:text-foreground transition-colors text-sm"}>Our Service</Link>
        <Link href="/pricing" className={pathname === "/pricing" ? "text-primary font-bold text-sm transition-colors" : "hover:text-foreground transition-colors text-sm"}>Pricing</Link>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl btn-primary text-sm flex items-center gap-2 shadow-sm font-bold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Chat on WhatsApp
        </a>
      </div>

      {/* Mobile Navigation Tabs */}
      <div className="flex md:hidden w-full justify-center items-center gap-6 mt-3 pt-2 text-sm font-semibold text-muted-foreground">
        <Link href="/" className={pathname === "/" ? "text-primary border-b-2 border-primary pb-1 transition-colors" : "hover:text-primary border-b-2 border-transparent pb-1 transition-colors"}>Home</Link>
        <Link href="/our-service" className={pathname === "/our-service" ? "text-primary border-b-2 border-primary pb-1 transition-colors" : "hover:text-primary border-b-2 border-transparent pb-1 transition-colors"}>Service</Link>
        <Link href="/pricing" className={pathname === "/pricing" ? "text-primary border-b-2 border-primary pb-1 transition-colors" : "hover:text-primary border-b-2 border-transparent pb-1 transition-colors"}>Pricing</Link>
      </div>
    </nav>
  );
}
