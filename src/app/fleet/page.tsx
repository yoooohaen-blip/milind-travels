import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FleetShowcaseSection from "@/components/FleetShowcaseSection";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Wrench } from "lucide-react";
import { FLEET_TIERS } from "@/data/content";

export const metadata: Metadata = {
  title: "Corporate Fleet Architecture & Vehicles | Milind Travels Private Limited",
  description:
    "Explore Milind Travels Private Limited corporate fleet tiers: executive sedans, premium multi-passenger MPVs, workforce shuttles, and economy staff commute cabs.",
};

export default function FleetPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="MUMBAI ENTERPRISE FLEET"
        title="Fleet Architecture & Specifications"
        subtitle="Meticulously maintained, fully air-conditioned, and commercially compliant passenger vehicles engineered for Mumbai’s corporate commute and executive travel."
      />

      {/* Main Interactive Fleet Filter Showcase */}
      <FleetShowcaseSection />

      {/* Technical Specification Matrix */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              Detailed Tier Specifications
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              Compare seating capacities, luggage configurations, and intended corporate applications across our fleet tiers.
            </p>
          </div>

          <div
            style={{
              overflowX: "auto",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(129, 144, 154, 0.2)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.92rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "var(--color-midnight-navy)",
                    color: "#FFFFFF",
                    borderBottom: "2px solid var(--color-champagne)",
                  }}
                >
                  <th style={{ padding: "1.2rem 1.5rem" }}>Fleet Tier</th>
                  <th style={{ padding: "1.2rem 1.5rem" }}>Seating Capacity</th>
                  <th style={{ padding: "1.2rem 1.5rem" }}>Luggage Space</th>
                  <th style={{ padding: "1.2rem 1.5rem" }}>Typical Configurations</th>
                  <th style={{ padding: "1.2rem 1.5rem" }}>Primary Application</th>
                  <th style={{ padding: "1.2rem 1.5rem" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {FLEET_TIERS.map((tier, idx) => (
                  <tr
                    key={tier.id}
                    style={{
                      borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
                      backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "var(--bg-primary)",
                    }}
                  >
                    <td style={{ padding: "1.2rem 1.5rem", fontWeight: 700, color: "var(--color-midnight-navy)" }}>
                      {tier.category}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "var(--text-dark-secondary)" }}>
                      {tier.capacity.passengers}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "var(--text-dark-secondary)" }}>
                      {tier.capacity.luggage}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "var(--text-dark-secondary)" }}>
                      {tier.typicalModels.join(", ")}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "var(--text-dark-secondary)" }}>
                      {tier.corporateUseCases[0]}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem" }}>
                      <Link
                        href={`/calculator?tier=${tier.id}`}
                        className="btn btn-navy btn-sm"
                        style={{ padding: "0.45rem 0.85rem", fontSize: "0.8rem" }}
                      >
                        Inquire Tier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Maintenance Rigor Box */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "var(--bg-secondary)",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(129, 144, 154, 0.2)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <ShieldCheck size={26} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
              <div>
                <strong style={{ display: "block", color: "var(--color-midnight-navy)", marginBottom: "0.3rem" }}>
                  100% Commercial Compliance
                </strong>
                <p style={{ fontSize: "0.86rem", color: "var(--text-dark-secondary)", lineHeight: 1.5 }}>
                  Every vehicle holds active commercial T-Permits, fitness certifications, and comprehensive passenger insurance.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <Wrench size={26} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
              <div>
                <strong style={{ display: "block", color: "var(--color-midnight-navy)", marginBottom: "0.3rem" }}>
                  Scheduled Mechanical Audits
                </strong>
                <p style={{ fontSize: "0.86rem", color: "var(--text-dark-secondary)", lineHeight: 1.5 }}>
                  Rigorous preventive maintenance audits covering brakes, suspension, tire tread, and multi-zone air conditioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
