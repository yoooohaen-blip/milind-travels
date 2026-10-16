import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import InteractiveProposalCalculator from "@/components/InteractiveProposalCalculator";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Mobility RFP & Route Calculator | Milind Travels Mumbai",
  description:
    "Configure your organization's employee commute requirements, select Mumbai corridors, choose fleet tiers, and receive a tailored corporate mobility proposal.",
};

export default function CalculatorPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="PROCUREMENT & FACILITY SPECIFICATION"
        title="Corporate Mobility RFP & Route Calculator"
        subtitle="Specify your organization’s shift rotations, commuter headcount, preferred vehicle class, and primary Mumbai operational corridors to generate a custom mobility proposal."
      />

      {/* Main Interactive RFP & Mobility Calculator Tool */}
      <InteractiveProposalCalculator />

      {/* Procurement Process Flow */}
      <section className="section-py surface-white" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              From RFP Submission to Fleet Deployment
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              A disciplined four-stage onboarding framework engineered to ensure zero disruption during corporate transport transitions.
            </p>
          </div>

          <div className="grid-12">
            {[
              {
                step: "01",
                title: "Specification & Route Audit",
                desc: "Our Vikhroli operations team analyzes your employee address clusters, shift timings, and Mumbai traffic bottlenecks (JVLR, Eastern Express, WEH, SCLR).",
              },
              {
                step: "02",
                title: "Customized Tariff & SLA Proposal",
                desc: "Within 24 business hours, you receive a transparent commercial proposal detailing per-kilometer tariffs, dedicated retainers, and SLA commitments.",
              },
              {
                step: "03",
                title: "Chauffeur & Fleet Allocation",
                desc: "Vehicles undergo comprehensive mechanical pre-inspection; assigned chauffeurs complete background verification and route orientation.",
              },
              {
                step: "04",
                title: "Live Operations & Monitoring",
                desc: "Roster commences under direct supervision from our Kailas Business Park desk with continuous route tracking and 24/7 client coordination.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="card-white"
                style={{
                  gridColumn: "span 3",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.75rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-champagne-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {st.step}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-midnight-navy)", marginBottom: "0.5rem" }}>
                    {st.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-dark-secondary)", lineHeight: 1.55 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
