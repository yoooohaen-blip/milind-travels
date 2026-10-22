import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CORE_SERVICES } from "@/data/content";

export const metadata: Metadata = {
  title: "Corporate Transportation Services | Milind Travels Private Limited",
  description:
    "Explore our enterprise corporate mobility solutions: Staff Transportation, Ad-Hoc Duty for Connected Clients, Airport Transfers, and Customized Packages tailored to client requirements.",
};

export default function ServicesPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="ENTERPRISE MOBILITY PORTFOLIO"
        title="Corporate Transportation & Fleet Services"
        subtitle="End-to-end staff transportation, prioritized ad-hoc duty for connected clients, punctual CSMIA airport transfers, and customized packages tailored to your organization’s exact operational requirements."
      />

      {/* Main Interactive Services Component */}
      <ServicesSection />

      {/* Additional In-Depth Enterprise Service Architecture Grid */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              How We Deliver Contractual Reliability
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              Every enterprise contract includes defined Service Level Agreements (SLAs) tailored to your operational shift rosters and compliance requirements.
            </p>
          </div>

          <div className="grid-12">
            {[
              {
                title: "Roster Synchronization",
                desc: "Direct integration with your facility roster. Automated nodal pickup scheduling ensuring punctuality across 24x7 operational shifts.",
              },
              {
                title: "Dedicated Account Desk",
                desc: "An assigned route manager at our Kailas Business Park operations office to oversee daily dispatch, driver coordination, and roster changes.",
              },
              {
                title: "Standby Vehicle Allocation",
                desc: "Buffer vehicles stationed strategically near major corporate corridors (BKC, Vikhroli, Andheri, Airoli) to guarantee zero trip downtime.",
              },
              {
                title: "Transparent GST Billing",
                desc: "Consolidated monthly corporate billing with trip logs, transparent fuel escalation indexing, and full statutory GST compliance.",
              },
            ].map((card, idx) => (
              <div
                key={card.title}
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
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "var(--color-champagne-dark)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-midnight-navy)", marginBottom: "0.5rem" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-dark-secondary)", lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            style={{
              marginTop: "3.5rem",
              backgroundColor: "var(--color-midnight-navy)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(2rem, 4vw, 3rem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                Need a Custom Corporate Mobility Proposal?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#C8D3DB" }}>
                Use our interactive route calculator or speak directly with our commercial desk.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/calculator" className="btn btn-champagne">
                <span>RFP Route Calculator</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline-dark">
                <span>Contact Operations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
