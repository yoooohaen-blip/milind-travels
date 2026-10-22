import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MumbaiCoverageSection from "@/components/MumbaiCoverageSection";
import Link from "next/link";
import { Navigation, MapPin, ArrowRight } from "lucide-react";
import { MUMBAI_CORRIDORS, CONTACT_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Mumbai & MMR Corporate Corridors | Milind Travels Private Limited",
  description:
    "Explore Milind Travels Private Limited corporate transport coverage across Mumbai MMR: Vikhroli, Powai, BKC, Lower Parel, Andheri SEEPZ, Airoli, and Thane.",
};

export default function CorridorsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="GREATER MUMBAI LOGISTICS"
        title="Mumbai & MMR Corporate Corridors"
        subtitle="Strategically headquartered in Kailas Business Park, Vikhroli West, our fleet network spans every critical IT corridor, financial center, and manufacturing node across the Mumbai Metropolitan Region."
      />

      {/* Main Interactive Corridor Component */}
      <MumbaiCoverageSection />

      {/* Strategic Hub Matrix */}
      <section className="section-py surface-white" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              Tailored Route Logistics for Mumbai’s Top Business Parks
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              Every Mumbai corridor possesses distinct traffic dynamics, peak hours, and suburban connector chokepoints.
              We calibrate departure buffers and vehicle staging accordingly.
            </p>
          </div>

          <div className="grid-12">
            {MUMBAI_CORRIDORS.map((c) => (
              <div
                key={c.id}
                className="card-white"
                style={{
                  gridColumn: "span 4",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.75rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-champagne-dark)",
                      }}
                    >
                      {c.region} Region
                    </span>
                    <MapPin size={16} style={{ color: "var(--color-slate-gray)" }} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-midnight-navy)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {c.name}
                  </h3>

                  <p style={{ fontSize: "0.88rem", color: "var(--text-dark-secondary)", lineHeight: 1.55, marginBottom: "1.25rem" }}>
                    {c.routeFocus}
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-slate-gray)",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Primary Business Facilities:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {c.majorHubs.slice(0, 3).map((h) => (
                      <span
                        key={h}
                        style={{
                          fontSize: "0.78rem",
                          backgroundColor: "var(--bg-primary)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          color: "var(--color-midnight-navy)",
                          border: "1px solid rgba(8, 21, 33, 0.08)",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "3.5rem",
              textAlign: "center",
              padding: "2.5rem",
              backgroundColor: "var(--color-midnight-navy)",
              borderRadius: "var(--radius-lg)",
              color: "#FFFFFF",
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Operating across multiple corporate facilities in Mumbai?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#C8D3DB", maxWidth: "600px", margin: "0 auto 1.5rem auto" }}>
              Our operations directors coordinate multi-nodal staff transit connecting employees across Central, Western, and Trans-Thane arteries.
            </p>
            <Link href="/calculator" className="btn btn-champagne">
              <span>Configure Multi-Corridor RFP</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
