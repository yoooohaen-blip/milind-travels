import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ClientTrustSection from "@/components/ClientTrustSection";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Laptop, Briefcase, Landmark, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Client Portfolio & Sectors | Milind Travels Private Limited",
  description:
    "Discover the enterprise organizations and industries served by Milind Travels Private Limited across 24+ years of passenger transportation in Mumbai.",
};

export default function ClientsPage() {
  const industries = [
    {
      title: "IT, SaaS & Technology Hubs",
      icon: <Laptop size={22} style={{ color: "var(--color-champagne)" }} />,
      desc: "Synchronized shift rosters, campus-to-metro connectors, and 24x7 standby fleets for enterprise software companies across Powai, BKC, and Navi Mumbai.",
    },
    {
      title: "BPO & Customer Operations",
      icon: <Briefcase size={22} style={{ color: "var(--color-champagne)" }} />,
      desc: "Large-scale workforce mobility, rotational shift transportation, and mandatory female employee night escort protocols for international contact centers.",
    },
    {
      title: "Banking, Financial Services & Insurance (BFSI)",
      icon: <Landmark size={22} style={{ color: "var(--color-champagne)" }} />,
      desc: "Punctual executive transit, C-suite chauffeur rentals, and board meeting transportation across Mumbai's financial districts in BKC and Lower Parel.",
    },
    {
      title: "Healthcare Technology & Knowledge Services",
      icon: <Stethoscope size={22} style={{ color: "var(--color-champagne)" }} />,
      desc: "Dependable transportation for mission-critical clinical support teams, legal knowledge centers, and corporate consulting practices.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="24+ YEARS OF ENTERPRISE TRUST"
        title="Client Portfolio & Industry Sectors"
        subtitle="Trusted by leading multinational corporations, technology enterprises, financial institutions, and contact centers operating across Greater Mumbai since 2000."
      />

      {/* Main Client Trust Grid */}
      <ClientTrustSection />

      {/* Industry Sector Breakdown */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              Mobility Tailored to Your Sector’s Demands
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              Different corporate sectors have distinct compliance frameworks and shift dynamics.
              Here is how we customize our passenger logistics.
            </p>
          </div>

          <div className="grid-12">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="card-white"
                style={{
                  gridColumn: "span 6",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--color-midnight-navy)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {ind.icon}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-midnight-navy)", marginBottom: "0.5rem" }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-dark-secondary)", lineHeight: 1.6 }}>
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Box */}
          <div
            style={{
              marginTop: "3.5rem",
              backgroundColor: "var(--color-midnight-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                Partner with Milind Travels for Your Organization
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#C8D3DB" }}>
                Structured master service agreements (MSAs) with volume pricing and transparent SLAs.
              </p>
            </div>
            <Link href="/contact" className="btn btn-champagne">
              <span>Initiate Corporate Dialogue</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
