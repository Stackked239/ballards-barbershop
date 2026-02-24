import Image from "next/image";

export default function Atmosphere() {
  return (
    <section className="relative section-darker">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28 md:py-40">
        <div className="reveal-scale">
          <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden photo-depth">
            <Image
              src="/images/atmosphere-photo.png"
              alt="Inside Ballard's Barbershop"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Left-heavy gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/40 to-transparent" />

            {/* Overlaid text */}
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-lg p-6 md:p-10">
              <span className="font-[family-name:var(--font-serif)] text-gold-light italic text-sm md:text-base tracking-wide block mb-3">
                Step Inside
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-[38px] font-bold uppercase tracking-[0.15em] mb-3 leading-tight">
                Great
                <br />
                Atmosphere
              </h2>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gradient-to-r from-gold to-transparent" />
                <span className="text-gold text-xs">&#9670;</span>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-[1.9] font-[family-name:var(--font-body)]">
                Ballard&apos;s is your classic barbershop with an upscale vibe,
                small town charm, and all things dapper. Come relax with the
                builds and enjoy an old fashioned glass bottle coke.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
