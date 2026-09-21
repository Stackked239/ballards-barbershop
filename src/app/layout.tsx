import type { Metadata } from "next";
import { Montserrat, Open_Sans, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://www.ballardsbarbershop.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ballard's Barbershop | Classic Cuts, Modern Style | Belmont, NC",
  description:
    "Ballard's Barbershop in Belmont, NC offers classic barbershop cuts with an upscale vibe. Book your appointment today. Serving the community since 1949.",
  keywords:
    "barbershop, Belmont NC, haircut, men's grooming, classic cut, shave, Ballard's",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ballard's Barbershop | Belmont, NC",
    description:
      "Classic barbershop with an upscale vibe. Serving Belmont since 1949.",
    url: SITE_URL,
    siteName: "Ballard's Barbershop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/storefront.png",
        width: 2500,
        height: 1667,
        alt: "Ballard's Barbershop storefront in downtown Belmont, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ballard's Barbershop | Belmont, NC",
    description:
      "Classic barbershop with an upscale vibe. Serving Belmont since 1949.",
    images: ["/images/storefront.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="light only" />
        <link rel="describedby" href={`${SITE_URL}/llms.txt`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              name: "Ballard's Barbershop",
              address: {
                "@type": "PostalAddress",
                streetAddress: "200 N. Main St.",
                addressLocality: "Belmont",
                addressRegion: "NC",
                postalCode: "28012",
                addressCountry: "US",
              },
              telephone: "+1-704-741-1900",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "15:00",
                },
              ],
              url: SITE_URL,
              image: `${SITE_URL}/images/storefront.png`,
              sameAs: [
                "https://www.facebook.com/BallardsBarbershopNC",
                "https://www.instagram.com/ballardsbarbershopnc/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${oswald.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
