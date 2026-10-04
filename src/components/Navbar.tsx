"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { whatsapp } from "./SiteUI";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [["/", "Home"], ["/our-service", "Our service"], ["/our-service/how-we-help", "How we help"], ["/pricing", "Pricing"]];
  return <header className="site-header"><div className="container nav-inner">
    <Link href="/" className="brand" aria-label="PathwayLK home" onClick={() => setOpen(false)}><span className="brand-mark"><BookOpen size={21} aria-hidden="true" /></span><span>Pathway<span className="brand-lk">LK</span></span></Link>
    <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>{links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href || pathname === href + "/" ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<a className="button button-small" href={whatsapp("Hi PathwayLK, I would like to discuss study support for my child.")} target="_blank" rel="noopener noreferrer">Let’s talk</a></nav>
  </div></header>;
}
