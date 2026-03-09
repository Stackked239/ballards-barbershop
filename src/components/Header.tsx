"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home", section: "home" },
  { label: "Services", href: "#services", section: "services" },
  { label: "Our Team", href: "#team", section: "team" },
  { label: "Our Story", href: "#story", section: "story" },
  { label: "Location", href: "#location", section: "location" },
  { label: "Contact Us", href: "#contact", section: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "services", "team", "story", "location", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between relative z-10">
          <a href="#home" className="flex-shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Ballard's Barbershop"
              width={50}
              height={50}
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-9 md:h-10" : "h-10 md:h-12"
              } group-hover:brightness-110`}
            />
          </a>

          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-[family-name:var(--font-heading)] text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gold after:transition-all after:duration-500 ${
                  activeSection === link.section
                    ? "text-gold after:w-full"
                    : "text-white/90 hover:text-gold after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`w-full h-px bg-white transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-full h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-navy-deep backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-[0.35em] transition-all duration-300 ${
                activeSection === link.section ? "text-gold" : "text-white hover:text-gold"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
