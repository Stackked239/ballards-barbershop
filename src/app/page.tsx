"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Atmosphere from "@/components/Atmosphere";
import Team from "@/components/Team";
import Story from "@/components/Story";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-line, .stagger-children")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Subtle parallax depth on scroll
  useEffect(() => {
    const layers = document.querySelectorAll<HTMLElement>(".parallax-layer");
    if (!layers.length) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        layers.forEach((el) => {
          const speed = parseFloat(el.dataset.speed || "0.03");
          const rect = el.getBoundingClientRect();
          const offset = (rect.top + scrollY - scrollY) * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div
          className="page-bg parallax-bg"
          style={{ backgroundImage: "url(/images/history-bg.png)" }}
        >
          <div className="relative z-[3]">
            <Services />
            <div className="section-divider">
              <span className="text-gold/60 text-[10px]">&#9670;</span>
            </div>
            <Atmosphere />
            <div className="section-divider">
              <span className="text-gold/60 text-[10px]">&#9670;</span>
            </div>
            <Team />
            <div className="section-divider">
              <span className="text-gold/60 text-[10px]">&#9670;</span>
            </div>
            <Story />
            <div className="section-divider">
              <span className="text-gold/60 text-[10px]">&#9670;</span>
            </div>
            <Location />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
