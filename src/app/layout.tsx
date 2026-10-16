import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CONTACT_INFO, SITE_METADATA } from "@/data/content";
import Preloader from "@/components/Preloader";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Milind Travels — Enterprise Corporate Transportation & Fleet Logistics | Mumbai",
  description:
    "Established in 2000. Enterprise employee transportation, dedicated corporate fleet management, and luxury executive car rentals for Mumbai's leading organizations and BPOs. Corporate Office at Kailas Business Park, Vikhroli West.",
  keywords: [
    "Corporate Staff Transportation Mumbai",
    "Employee Pickup and Drop Services Mumbai",
    "Corporate Cab Services Vikhroli",
    "BPO Transportation Mumbai",
    "Fleet Management Services Mumbai",
    "Corporate Car Rental BKC",
    "Luxury Car Rental Mumbai",
    "Milind Travels Mumbai",
  ],
  authors: [{ name: "Milind Travels", url: SITE_METADATA.siteUrl }],
  creator: "Milind Travels",
  publisher: "Milind Travels",
  metadataBase: new URL(SITE_METADATA.siteUrl),
  openGraph: {
    title: "Milind Travels — Enterprise Corporate Transportation & Fleet Management",
    description:
      "24+ years of passenger mobility excellence in Mumbai. Dedicated staff transport, executive sedans, and turnkey fleet management for multinational corporations and BPOs.",
    url: SITE_METADATA.siteUrl,
    siteName: "Milind Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Milind Travels Corporate Fleet Lineup in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milind Travels — Enterprise Corporate Transportation | Mumbai",
    description:
      "Specialized employee transportation and fleet management in Mumbai since 2000. Headquartered at Kailas Business Park, Vikhroli West.",
    images: ["/images/hero-cinematic.jpg"],
  },
  icons: {
    icon: "/images/brand/milind-logo-white-2x.png",
    apple: "/images/brand/milind-logo-white-2x.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Milind Travels",
    "legalName": "Milind Travels",
    "foundingDate": "2000",
    "description":
      "Established in 2000, Milind Travels provides corporate staff transportation, employee pickup and drop services, dedicated fleet management, and luxury car rentals across Mumbai and MMR.",
    "url": "https://www.milindtravels.com",
    "telephone": CONTACT_INFO.phone,
    "email": CONTACT_INFO.primaryEmail,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CONTACT_INFO.communicationOffice.line1}, ${CONTACT_INFO.communicationOffice.line2}`,
      "addressLocality": CONTACT_INFO.communicationOffice.area,
      "addressRegion": "Maharashtra",
      "postalCode": CONTACT_INFO.communicationOffice.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.106678",
      "longitude": "72.919761",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Thane" },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${plusJakarta.variable} preloader-active`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=='undefined'&&'scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
