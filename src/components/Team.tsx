"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { teamMembers, type TeamMember } from "@/data/team";

const BOOKING_URL = "https://www.phorest.com/salon/ballardsbarbershop";

function TeamCard({
  member,
  onSelect,
}: {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}) {
  return (
    <div className="text-center group">
      {/* Photo with luxury hover treatment */}
      <div className="relative aspect-square mb-6 overflow-hidden team-photo">
        {/* Subtle gold border that appears on hover */}
        <div className="absolute inset-0 z-10 border border-transparent group-hover:border-gold/30 transition-colors duration-700" />
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Cinematic bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-deep/30 to-transparent" />
      </div>

      {/* Name & title */}
      <h3 className="font-[family-name:var(--font-heading)] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] mb-1">
        {member.name}
      </h3>
      <p className="font-[family-name:var(--font-serif)] text-gold italic text-sm mb-5">
        {member.title}
      </p>

      {/* Pricing button - opens modal */}
      <button
        onClick={() => onSelect(member)}
        className="inline-flex items-center gap-2.5 text-gold font-[family-name:var(--font-heading)] text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.25em] border border-gold/30 px-6 py-2.5 hover:bg-gold hover:text-white hover:border-gold transition-all duration-500"
      >
        Pricing
        <svg
          className="w-2.5 h-2.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function PricingModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    // Focus the close button on mount
    const closeBtn = panelRef.current?.querySelector<HTMLElement>("button");
    closeBtn?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [handleKeyDown]);

  // Separate cuts from packages
  const cuts = member.services.filter((s) => !s.name.startsWith("The "));
  const packages = member.services.filter((s) => s.name.startsWith("The "));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.25s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative bg-navy-deep w-full max-w-[420px] p-8 md:p-10 shadow-2xl animate-[scaleIn_0.25s_ease-out]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-300"
          aria-label="Close pricing"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Barber identity */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gold/30 mb-4">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="80px"
            />
          </div>
          <h3
            id="pricing-modal-title"
            className="font-[family-name:var(--font-heading)] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] mb-1"
          >
            {member.name}
          </h3>
          <p className="font-[family-name:var(--font-serif)] text-gold italic text-sm">
            {member.title}
          </p>
        </div>

        {/* Ornamental divider */}
        <div className="ornament ornament-wide mb-8">
          <span className="text-gold text-xs">&#9670;</span>
        </div>

        {/* Services list - cuts */}
        <div className="space-y-3 mb-6">
          {cuts.map((service) => (
            <div key={service.name} className="flex items-baseline text-sm">
              <span className="text-white/90 font-medium text-[12px] tracking-wide">
                {service.name}
              </span>
              <span className="dotted-leader !border-white/20" />
              <span className="font-[family-name:var(--font-accent)] text-white/70 text-base font-light">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        {/* Separator */}
        {packages.length > 0 && (
          <>
            <div className="h-px bg-white/10 mb-6" />
            <p className="font-[family-name:var(--font-serif)] text-gold/80 italic text-xs tracking-wide text-center mb-4">
              Packages
            </p>
            <div className="space-y-3 mb-8">
              {packages.map((service) => (
                <div key={service.name} className="flex items-baseline text-sm">
                  <span className="text-white/90 font-medium text-[12px] tracking-wide">
                    {service.name}
                  </span>
                  <span className="dotted-leader !border-white/20" />
                  <span className="font-[family-name:var(--font-accent)] text-white/70 text-base font-light">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-28 md:py-40 relative section-lighter">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section heading */}
        <div className="reveal text-center mb-20 heading-glow parallax-layer" data-speed="0.02">
          <span className="font-[family-name:var(--font-serif)] text-gold-light italic text-sm md:text-base tracking-wide block mb-4">
            Meet the Craftsmen
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl md:text-[44px] font-bold uppercase tracking-[0.2em] mb-6">
            Our Team
          </h2>
          <div className="ornament ornament-wide">
            <span className="text-gold text-xs">&#9670;</span>
          </div>
        </div>

        {/* Team grid - 4 top, 3 bottom centered */}
        <div className="stagger-children grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {teamMembers.slice(0, 4).map((member) => (
            <TeamCard key={member.name} member={member} onSelect={setSelectedMember} />
          ))}
        </div>
        <div className="stagger-children flex flex-wrap justify-center gap-8 lg:gap-10 mb-20">
          {teamMembers.slice(4).map((member) => (
            <div key={member.name} className="w-[calc(50%-16px)] md:w-[calc(25%-30px)]">
              <TeamCard member={member} onSelect={setSelectedMember} />
            </div>
          ))}
        </div>

      </div>

      {/* Pricing modal - rendered outside the grid */}
      {selectedMember && (
        <PricingModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
