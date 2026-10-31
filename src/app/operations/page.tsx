import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import OperationalFrameworkSection from "@/components/OperationalFrameworkSection";
import Link from "next/link";
import { ShieldCheck, UserCheck, Wrench, PhoneCall, ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Safety Governance & Operations Compliance | Milind Travels Private Limited",
  description:
    "Learn about Milind Travels Private Limited rigorous chauffeur vetting, 100% commercial vehicle compliance, and dedicated night-shift female employee safety protocols.",
};

export default function OperationsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="ENTERPRISE RISK MITIGATION"
        title="Operational Rigor, Safety & Governance"
        subtitle="Uncompromising safety standards, rigorous chauffeur screening, and specialized passenger protection protocols engineered for Mumbai’s 24/7 enterprise operations."
      />

      {/* Main 4 Pillars Component */}
      <OperationalFrameworkSection />

      {/* Specialized Night Shift & Female Employee Safety Deep-Dive */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          {/* Section Header */}
          <div style={{ maxWidth: "820px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}>
              Dedicated Female Employee &amp;
              <br />
              Night-Shift Protection Protocols.
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              In accordance with enterprise BPO guidelines and government transport mandates,
              Milind Travels enforces strict non-negotiable protocols for all late-evening and early-morning employee commutes.
            </p>
          </div>

          <div className="grid-12" style={{ alignItems: "stretch" }}>
            {/* Left Protocol Cards */}
            <div style={{ gridColumn: "span 7", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "No Single Female Passenger Rule",
                  desc: "A female employee is never the first passenger picked up or the last passenger dropped off unless accompanied by an authorized corporate security guard or designated colleague.",
                },
                {
                  title: "Safe Entry Confirmation",
                  desc: "Chauffeurs are instructed to remain parked with headlamps illuminating the residential entrance until the employee is safely inside the premises gate.",
                },
                {
                  title: "Dedicated On-Site Client Supervisors",
                  desc: "We have dedicated supervisors stationed on each client site to monitor trip check-ins, route tracking, and live drop-off verifications.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    backgroundColor: "#FFFFFF",
                    padding: "1.4rem 1.6rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(129, 144, 154, 0.18)",
                    boxShadow: "var(--shadow-sm)",
                    flex: 1,
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: "var(--color-champagne-dark)", flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <strong style={{ fontSize: "1.05rem", color: "var(--color-midnight-navy)", display: "block", marginBottom: "0.35rem" }}>
                      {item.title}
                    </strong>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-dark-secondary)", lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Chauffeur Screening Card */}
            <div style={{ gridColumn: "span 5" }}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "var(--color-midnight-navy)",
                  borderRadius: "var(--radius-lg)",
                  padding: "clamp(2rem, 3.5vw, 2.5rem)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(199, 166, 120, 0.25)",
                  boxShadow: "var(--shadow-dark)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <UserCheck size={22} style={{ color: "var(--color-champagne)" }} />
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-champagne)" }}>
                      Driver Scrutiny Protocol
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.85rem", color: "#FFFFFF" }}>
                    5-Point Chauffeur Verification
                  </h3>

                  <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Before any driver operates a corporate route under the Milind Travels banner, they must satisfy our strict criteria:
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.86rem" }}>
                    {[
                      "Commercial driving license verification with RTO records",
                      "Permanent and present residential address verification",
                      "Prior commercial transport experience assessment in Mumbai traffic",
                      "Defensive driving and passenger courtesy orientation",
                      "Strict zero-tolerance policy on mobile usage while operating",
                    ].map((req) => (
                      <li key={req} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#C8D3DB" }}>
                        <ShieldCheck size={15} style={{ color: "var(--color-champagne)", flexShrink: 0 }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", color: "#81909A" }}>24/7 Operations Desk:</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: "var(--color-champagne-light)", fontWeight: 700 }}>
                    {CONTACT_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
