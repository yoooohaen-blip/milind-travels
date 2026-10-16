"use client";

import React from "react";
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

export default function StrategicDifferenceSection() {
  const comparisons = [
    {
      feature: "Driver Reliability & Route Dedication",
      corporateSolution: "Dedicated chauffeurs assigned to fixed routes with mandatory 45-minute pre-shift check-in and zero trip cancellations.",
      adHocApps: "Unpredictable gig-driver cancellations, high surge multipliers during peak hours, and zero route familiarity.",
    },
    {
      feature: "Employee Shift Roster Synchronization",
      corporateSolution: "Automated nod-to-nod pickup planning synchronized directly with your HR/facility shift schedules (General, Night, or Rotational).",
      adHocApps: "Individual employees booking ad-hoc rides; frequent delays causing staggered team arrivals and operational downtime.",
    },
    {
      feature: "Safety Protocols & Night-Shift Protection",
      corporateSolution: "Mandatory drop verification, guard escort integration for female employees, and vetted commercial driver credentials.",
      adHocApps: "Variable driver vetting with no customized safety protocols or verified escalation contact for facility management.",
    },
    {
      feature: "Commercial Invoicing & Cost Governance",
      corporateSolution: "Single consolidated monthly corporate GST invoice with transparent per-kilometer/retainer rates and no surge pricing.",
      adHocApps: "Hundreds of fragmented individual reimbursement receipts, unpredictable surge charges, and administrative overhead.",
    },
  ];

  return (
    <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "3.5rem" }}>
          <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}>
            The Difference Between Ad-Hoc Cabs
            <br />
            and Managed Enterprise Mobility.
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            In Mumbai’s commercial hubs, employee transportation is a mission-critical operational lifeline.
            Here is how Milind Travels transforms chaotic daily commutes into a predictable, compliant, and cost-efficient advantage.
          </p>
        </div>

        {/* Comparison Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {comparisons.map((item, index) => (
            <div
              key={item.feature}
              className="glass-bubble-card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.75rem",
                alignItems: "center",
                padding: "1.75rem 2rem",
                borderRadius: "var(--radius-md)",
              }}
            >
              {/* Feature Title */}
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--color-champagne-dark)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.35rem",
                  }}
                >
                  Strategic Pillar 0{index + 1}
                </span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-midnight-navy)" }}>
                  {item.feature}
                </h3>
              </div>

              {/* Milind Travels Solution */}
              <div
                style={{
                  backgroundColor: "rgba(199, 166, 120, 0.08)",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: "3px solid var(--color-champagne)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "var(--color-midnight-navy)",
                    marginBottom: "0.35rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: "#2E7D32" }} />
                  <span>Milind Travels Enterprise Standard</span>
                </div>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dark-secondary)", lineHeight: 1.55 }}>
                  {item.corporateSolution}
                </p>
              </div>

              {/* Typical Ad-Hoc Model */}
              <div
                style={{
                  backgroundColor: "rgba(129, 144, 154, 0.08)",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: "3px solid #81909A",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#546E7A",
                    marginBottom: "0.35rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <XCircle size={16} style={{ color: "#D32F2F" }} />
                  <span>Ad-Hoc App / Retail Taxi Model</span>
                </div>
                <p style={{ fontSize: "0.92rem", color: "#546E7A", lineHeight: 1.55 }}>
                  {item.adHocApps}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner */}
        <div
          style={{
            marginTop: "3.5rem",
            backgroundColor: "var(--color-midnight-navy)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(2rem, 4vw, 3rem)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.75rem",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <span
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-champagne)",
                fontWeight: 700,
              }}
            >
              Enterprise Fleet Transition
            </span>
            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                fontWeight: 700,
                marginTop: "0.35rem",
                marginBottom: "0.6rem",
              }}
            >
              Ready to streamline employee mobility for your Mumbai facility?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#C8D3DB", lineHeight: 1.5 }}>
              Our operations directors in Vikhroli conduct route density audits and cost-benefit assessments tailored to your exact workforce roster.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#calculator" className="btn btn-champagne">
              <span>Build Fleet Proposal</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
