const BOOKING_URL = "https://www.phorest.com/salon/ballardsbarbershop";

const services = [
  { name: "Classic Cut", price: "$30+" },
  { name: "Buzz Cut", price: "$25+" },
  { name: "Head Shave", price: "$40+" },
  { name: "Lineups", price: "$20+" },
];

const packages = [
  {
    name: "The Refiner",
    subtitle: "Cut & Shave",
    price: "$45",
    description:
      "Precision cut & hot lather shave. The Gentleman with a full beard.",
  },
  {
    name: "The Classic",
    subtitle: "Cut & Shave",
    price: "$55",
    description: "Precision Cut & full hot lather shave.",
  },
  {
    name: "The Signature",
    subtitle: "Cut & Shave",
    price: "$65",
    description:
      "Precision Cut & full hot lather shave with a relaxing facial.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40 relative section-lighter">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section heading */}
        <div className="reveal text-center mb-20 heading-glow parallax-layer" data-speed="0.02">
          <span className="font-[family-name:var(--font-serif)] text-gold-light italic text-sm md:text-base tracking-wide block mb-4">
            Crafted with Precision
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl md:text-[44px] font-bold uppercase tracking-[0.2em] mb-6">
            Our Services
          </h2>
          <div className="ornament ornament-wide">
            <span className="text-gold text-xs">&#9670;</span>
          </div>
          <p className="text-white/50 text-sm italic mt-6">
            *Prices vary by barber
          </p>
        </div>

        {/* Price list */}
        <div className="reveal max-w-lg mx-auto space-y-6 mb-24 glass-panel p-8 md:p-10">
          {services.map((service) => (
            <div key={service.name} className="flex items-baseline group">
              <span className="font-[family-name:var(--font-heading)] text-white font-semibold uppercase tracking-[0.18em] text-[13px] md:text-[15px] group-hover:text-gold transition-colors duration-500">
                {service.name}
              </span>
              <span className="dotted-leader !border-white/40" />
              <span className="font-[family-name:var(--font-accent)] text-white/80 text-lg md:text-xl font-light">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        {/* Ornamental divider between sections */}
        <div className="reveal-line ornament ornament-wide mb-24">
          <span className="text-gold text-xs">&#9670;</span>
        </div>

        {/* Packages heading */}
        <div className="reveal text-center mb-6">
          <span className="font-[family-name:var(--font-serif)] text-gold-light italic text-sm md:text-base tracking-wide block mb-4">
            The Full Experience
          </span>
          <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-[36px] font-bold uppercase tracking-[0.2em] mb-8">
            Our Packages
          </h3>
        </div>

        <p className="reveal text-center text-white/70 text-[11px] uppercase tracking-[0.2em] leading-relaxed mb-3 max-w-xl mx-auto">
          All shaves come complete with hot towels, pre shave oil, hot lather, &
          cold towel finish
        </p>
        <p className="reveal text-center text-white/50 text-sm italic mb-16">
          *Prices vary by barber
        </p>

        {/* Package cards */}
        <div className="stagger-children grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="group relative text-center px-6 py-10 glass-panel hover:border-gold/30 transition-all duration-500"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/20 group-hover:border-gold/50 transition-colors duration-700" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 group-hover:border-gold/50 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 group-hover:border-gold/50 transition-colors duration-700" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/20 group-hover:border-gold/50 transition-colors duration-700" />

              <h4 className="font-[family-name:var(--font-heading)] text-white font-bold uppercase tracking-[0.15em] text-sm mb-0.5">
                {pkg.name}
              </h4>
              <span className="font-[family-name:var(--font-serif)] text-gold italic text-sm tracking-wide">
                {pkg.subtitle}
              </span>
              <div className="my-5">
                <span className="font-[family-name:var(--font-accent)] text-gold-light text-4xl font-light">
                  {pkg.price}
                </span>
              </div>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-5" />
              <p className="text-white/60 text-sm leading-relaxed">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-gold"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
