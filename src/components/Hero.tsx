"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const BOOKING_URL = "https://www.phorest.com/salon/ballardsbarbershop";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Ensure video plays on mount (some browsers need a nudge)
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-bg.png"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Blue tint overlay — cinematic, matches brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/65 via-navy/70 to-navy-deep/85" />

      {/* Vignette */}
      <div className="vignette absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo with entrance animation */}
        <div
          className="flex justify-center mb-6 transition-all duration-[1.5s] ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.95)",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Ballard's Barbershop"
            width={340}
            height={340}
            className="h-56 md:h-80 w-auto drop-shadow-[0_0_60px_rgba(180,161,118,0.25)]"
            priority
          />
        </div>

        {/* Subtitle ornament */}
        <div
          className="flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="font-[family-name:var(--font-serif)] text-gold-light text-sm md:text-base italic tracking-[0.15em]">
            Est. 1949
          </span>
          <span className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* CTA */}
        <div
          className="transition-all duration-1000 delay-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(15px)",
          }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline"
          >
            Book an Appointment
          </a>
        </div>

        {/* Visually hidden h1 for SEO */}
        <h1 className="sr-only">Ballard&apos;s Barbershop - Premium Barbershop in Belmont, NC</h1>
      </div>

      {/* Bottom edge — thin gold accent line + shadow for depth */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
}
