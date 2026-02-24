import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="relative section-darker">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: History image */}
          <div className="reveal-left">
            <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden photo-depth">
              <Image
                src="/images/history-bg.png"
                alt="Ballard's Barbershop historic interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Cinematic bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-deep/60 to-transparent" />
            </div>
          </div>

          {/* Right: Text content — left-aligned */}
          <div className="reveal-right reveal-delay-1">
            <span className="font-[family-name:var(--font-serif)] text-gold-light italic text-sm md:text-base tracking-wide block mb-4">
              Since 1949
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl md:text-[44px] font-bold uppercase tracking-[0.2em] mb-6">
              Our Story
            </h2>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-px bg-gradient-to-r from-gold to-transparent" />
              <span className="text-gold text-xs">&#9670;</span>
            </div>

            <div className="border-l-2 border-gold/30 pl-8">
              <div className="glass-panel p-8 md:p-10 space-y-8">
                <p className="font-[family-name:var(--font-body)] text-white/80 text-base md:text-[17px] leading-[2.1]">
                  In 1949, William Henry &ldquo;Bill&rdquo; Ballard set up shop and
                  Ballard&apos;s Barbershop was born. For decades, Ballard&apos;s was
                  a pillar in the Belmont community &mdash; a place where men came for
                  a quality cut and good conversation.
                </p>
                <p className="font-[family-name:var(--font-body)] text-white/80 text-base md:text-[17px] leading-[2.1]">
                  Reimagined in 2019, Ballard&apos;s Barbershop has found a new home at
                  200 N Main Street in downtown Belmont, NC. While the location is new,
                  the spirit is the same.
                </p>
                <p className="font-[family-name:var(--font-body)] text-white/80 text-base md:text-[17px] leading-[2.1]">
                  Ballard&apos;s is your classic community barbershop with a modern
                  vibe &mdash; a place where you can relax, catch up with friends, and
                  leave looking your best.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
