import type { Metadata } from "next";
import { Cinzel, Manrope, Plus_Jakarta_Sans } from "next/font/google";
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

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Milind Travels Private Limited — Enterprise Corporate Transportation & Fleet Logistics | Mumbai",
  description:
    "Established in 2000. Milind Travels Private Limited provides Staff Transportation, Ad-Hoc Duty for Connected Clients, Airport Transfers, and Customized Mobility Packages for Mumbai's leading organizations and BPOs. Corporate Office at Kailas Business Park, Vikhroli West.",
  keywords: [
    "Milind Travels Private Limited",
    "Corporate Staff Transportation Mumbai",
    "Employee Pickup and Drop Services Mumbai",
    "Ad-Hoc Corporate Cabs Mumbai",
    "Corporate Airport Transfers CSMIA Mumbai",
    "Custom Corporate Travel Packages Mumbai",
    "Fleet Management Services Vikhroli",
    "Milind Travels Mumbai",
  ],
  authors: [{ name: "Milind Travels Private Limited", url: SITE_METADATA.siteUrl }],
  creator: "Milind Travels Private Limited",
  publisher: "Milind Travels Private Limited",
  metadataBase: new URL(SITE_METADATA.siteUrl),
  openGraph: {
    title: "Milind Travels Private Limited — Enterprise Corporate Transportation & Fleet Logistics",
    description:
      "24+ years of passenger mobility excellence in Mumbai. Staff Transportation, Ad-Hoc Duty for Connected Clients, Airport Transfers, and Custom Corporate Packages for multinational corporations.",
    url: SITE_METADATA.siteUrl,
    siteName: "Milind Travels Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Milind Travels Private Limited Corporate Fleet Lineup in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milind Travels Private Limited — Enterprise Corporate Transportation | Mumbai",
    description:
      "Specialized employee transportation and corporate mobility services in Mumbai since 2000. Headquartered at Kailas Business Park, Vikhroli West.",
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
    "name": "Milind Travels Private Limited",
    "legalName": "Milind Travels Private Limited",
    "identifier": SITE_METADATA.cin,
    "foundingDate": "2000",
    "description":
      "Established in 2000, Milind Travels Private Limited provides staff transportation, ad-hoc duties for connected corporate clients, airport transfers, and tailored corporate travel packages across Mumbai and MMR.",
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
    <html lang="en" className={`${manrope.variable} ${plusJakarta.variable} ${cinzel.variable} preloader-active`}>
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
