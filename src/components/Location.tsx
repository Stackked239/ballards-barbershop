"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const BOOKING_URL = "https://www.phorest.com/salon/ballardsbarbershop";
const COORDS: [number, number] = [-81.0378, 35.2432];

export default function Location() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: COORDS,
      zoom: 15,
      scrollZoom: false,
      attributionControl: false,
    });

    new mapboxgl.Marker({ color: "#b4a176" })
      .setLngLat(COORDS)
      .addTo(map);

    map.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-right"
    );

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section id="location" className="relative overflow-hidden">
      {/* Full-section background image */}
      <Image
        src="/images/storefront.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-deep/80" />

      {/* Content */}
      <div
        id="contact"
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-28 md:py-40"
      >
        {/* Section heading */}
        <div className="reveal text-center mb-14 heading-glow">
          <span className="font-[family-name:var(--font-serif)] text-gold-light italic text-sm md:text-base tracking-wide block mb-4">
            Come Visit
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl md:text-[44px] font-bold uppercase tracking-[0.2em] mb-6">
            Find Us
          </h2>
          <div className="ornament ornament-wide">
            <span className="text-gold text-xs">&#9670;</span>
          </div>
        </div>

        {/* Map */}
        <div className="reveal reveal-delay-1 mb-10">
          <div
            ref={mapContainer}
            className="w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden border border-gold/10"
          />
        </div>

        {/* Contact info row */}
        <div className="reveal reveal-delay-2 grid grid-cols-3 gap-6 md:gap-10 text-center glass-panel p-6 md:p-8 mb-12">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-gold text-[10px] font-semibold uppercase tracking-[0.35em] mb-3">
              Address
            </h3>
            <p className="text-white/70 text-[13px] md:text-[15px] tracking-wide leading-relaxed font-[family-name:var(--font-body)]">
              200 N. Main St.
              <br />
              Belmont, NC
            </p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-gold text-[10px] font-semibold uppercase tracking-[0.35em] mb-3">
              Phone
            </h3>
            <a
              href="tel:7047411900"
              className="text-white/70 text-[13px] md:text-[15px] tracking-wide hover:text-gold transition-colors duration-500 font-[family-name:var(--font-body)]"
            >
              704.741.1900
            </a>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-gold text-[10px] font-semibold uppercase tracking-[0.35em] mb-3">
              Hours
            </h3>
            <p className="text-white/70 text-[13px] md:text-[15px] tracking-wide leading-relaxed font-[family-name:var(--font-body)]">
              Mon&ndash;Fri 9&ndash;7
              <br />
              Sat 8&ndash;3
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-3 text-center">
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
