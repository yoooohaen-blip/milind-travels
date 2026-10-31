"use client";

import React from "react";
import Link from "next/link";
import { OPERATIONAL_PILLARS, CONTACT_INFO } from "@/data/content";
import {
  ShieldCheck,
  CheckCircle2,
  UserCheck,
  Clock,
  Shield,
  FileText,
  Phone,
  ArrowRight,
} from "lucide-react";

interface PillarData {
  id: string;
  metric: string;
  metricLabel: string;
  category: string;
  points: { title: string; desc: string }[];
}

const PILLAR_DETAILS: Record<string, PillarData> = {
  compliance: {
    id: "compliance",
    metric: "100%",
    metricLabel: "Statutory RTO Compliance",
    category: "Pillar 01 • Legal & Mechanical",
    points: [
      {
        title: "100% Commercial Permits & Insurance",
        desc: "Full RTO commercial registration (T-Permits), valid state fitness certificates, and comprehensive commercial passenger cover.",
      },
      {
        title: "Zero-Tolerance Mechanical Age Standard",
        desc: "Strict fleet retirement policy ensuring modern, BS-VI late-model passenger vehicles with pristine climate control.",
      },
      {
        title: "Weekly Multi-Point Mechanical Audits",
        desc: "Rigorous inspection covering dual-circuit braking, tire tread depth, suspension, seatbelts, and emergency kit validity.",
      },
    ],
  },
  chauffeurs: {
    id: "chauffeurs",
    metric: "5-Point",
    metricLabel: "Verification Standard",
    category: "Pillar 02 • Human Capital",
    points: [
      {
        title: "Law Enforcement & Address Verification",
        desc: "Comprehensive police record verification, permanent hometown address scrutiny, and commercial license validity authentication.",
      },
      {
        title: "Corporate Etiquette & Defensive Driving",
        desc: "Trained in discrete passenger conduct, optimal route selection, executive decorum, and defensive Mumbai driving techniques.",
      },
      {
        title: "Strict Zero-Distraction & Sobriety Mandate",
        desc: "Randomized sobriety breathalyzer tests, mandatory hands-free regulations, and immediate termination for mobile usage while driving.",
      },
    ],
  },
  "safety-protocols": {
    id: "safety-protocols",
    metric: "24/7",
    metricLabel: "On-Site Supervision",
    category: "Pillar 03 • Passenger Protection",
    points: [
      {
        title: "On-Site Supervisors for Live Tracking",
        desc: "We deploy dedicated supervisors on each client site to monitor shift rosters, vehicle dispatch, and live track operations.",
      },
      {
        title: "Residential Gate Illumination & Safe Entry",
        desc: "Chauffeur remains stationary with headlamps illuminating the residential gate until the female passenger is safely indoors.",
      },
      {
        title: "No Single Female Passenger Commute Rule",
        desc: "Female employees are never picked up first or dropped off last unescorted during night shift rotations (8 PM – 6 AM).",
      },
    ],
  },
};

export default function OperationalFrameworkSection() {
  const getPillarIcon = (id: string, size = 22) => {
    switch (id) {
      case "punctuality":
        return <Clock size={size} style={{ color: "var(--color-champagne-dark)" }} strokeWidth={2.1} />;
      case "compliance":
        return <ShieldCheck size={size} style={{ color: "var(--color-champagne-dark)" }} strokeWidth={2.1} />;
      case "chauffeurs":
        return <UserCheck size={size} style={{ color: "var(--color-champagne-dark)" }} strokeWidth={2.1} />;
      case "safety-protocols":
      default:
        return <Shield size={size} style={{ color: "var(--color-champagne-dark)" }} strokeWidth={2.1} />;
    }
  };

  return (
    <section
      id="operations-governance"
      style={{
        backgroundColor: "var(--bg-primary)",
        padding: "clamp(3.5rem, 5vw, 5rem) 0",
        borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "840px", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-champagne-dark)",
              marginBottom: "0.75rem",
            }}
          >
            Institutional Governance Framework
          </span>

          <h2
            className="text-section-title"
            style={{
              color: "var(--color-midnight-navy)",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Audited Operational Rigor &amp;
            <br />
            Passenger Safety Standards.
          </h2>

          <p
            className="text-lead"
            style={{
              color: "var(--text-dark-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.65,
            }}
          >
            Corporate passenger transportation demands zero compromise. Our institutional governance combines
            100% commercial RTO compliance, 5-point chauffeur background scrutiny, dedicated on-site supervisors
            for live tracking, and strict night-shift female employee escort protocols.
          </p>
        </div>

        {/* 3 Clean White Governance Pillar Cards */}
        <div className="grid-12" style={{ gap: "2rem", alignItems: "stretch" }}>
          {OPERATIONAL_PILLARS.map((pillar, idx) => {
            const data = PILLAR_DETAILS[pillar.id] || {
              id: pillar.id,
              metric: pillar.metric,
              metricLabel: "Verified Standard",
              category: `Pillar 0${idx + 1} • Mandate`,
              points: pillar.points.map((p) => ({ title: "Standard Protocol", desc: p })),
            };

            return (
              <div
                key={pillar.id}
                style={{
                  gridColumn: "span 4",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid rgba(8, 21, 33, 0.09)",
                  boxShadow: "0 6px 24px rgba(8, 21, 33, 0.05)",
                  padding: "clamp(2rem, 3.2vw, 2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                className="governance-white-card"
              >
                <div>
                  {/* Card Header: Icon + Category + Large Metric */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      paddingBottom: "1.25rem",
                      borderBottom: "1px solid rgba(8, 21, 33, 0.07)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                      <div
                        style={{
                          width: "46px",
                          height: "46px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(199, 166, 120, 0.12)",
                          border: "1px solid rgba(199, 166, 120, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {getPillarIcon(pillar.id, 22)}
                      </div>

                      <div>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--color-champagne-dark)",
                            display: "block",
                            marginBottom: "0.15rem",
                          }}
                        >
                          {data.category}
                        </span>
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "var(--text-dark-muted)",
                          }}
                        >
                          Milind Travels Standard
                        </span>
                      </div>
                    </div>

                    {/* Metric Display */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <strong
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.85rem",
                          fontWeight: 800,
                          color: "var(--color-midnight-navy)",
                          lineHeight: 1,
                          display: "block",
                        }}
                      >
                        {data.metric}
                      </strong>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "var(--text-dark-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {data.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Overview */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.28rem",
                      fontWeight: 700,
                      color: "var(--color-midnight-navy)",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-dark-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.75rem",
                    }}
                  >
                    {pillar.description}
                  </p>

                  {/* Protocol Checklist (Clean, Legible, No Nested Boxes) */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.1rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {data.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                        }}
                      >
                        <CheckCircle2
                          size={18}
                          style={{
                            color: "var(--color-champagne-dark)",
                            flexShrink: 0,
                            marginTop: "0.2rem",
                          }}
                        />
                        <div>
                          <strong
                            style={{
                              fontSize: "0.92rem",
                              fontWeight: 700,
                              color: "var(--color-midnight-navy)",
                              display: "block",
                              marginBottom: "0.2rem",
                            }}
                          >
                            {pt.title}
                          </strong>
                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "var(--text-dark-secondary)",
                              lineHeight: 1.55,
                              margin: 0,
                            }}
                          >
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Governance Documentation CTA Banner */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2.25rem 2.75rem",
            backgroundColor: "var(--color-midnight-navy)",
            borderRadius: "16px",
            border: "1px solid rgba(199, 166, 120, 0.25)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            boxShadow: "0 16px 40px rgba(8, 21, 33, 0.12)",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.45rem" }}>
              <FileText size={18} style={{ color: "var(--color-champagne)" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                Enterprise Procurement &amp; Compliance Audit Pack
              </h3>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#C8D3DB", margin: 0, lineHeight: 1.55 }}>
              Need our commercial RTO permit records, vehicle insurance schedules, and driver verification SOPs for corporate vendor onboarding?
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap" }}>
            <Link
              href="/contact?subject=compliance-audit-pack"
              className="btn btn-champagne"
            >
              <span>Request Audit Pack</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="btn btn-outline-dark"
              style={{ borderColor: "rgba(255, 255, 255, 0.25)", color: "#FFFFFF" }}
            >
              <Phone size={15} />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.governance-white-card:hover) {
          transform: translateY(-4px);
          border-color: rgba(199, 166, 120, 0.5) !important;
          box-shadow: 0 16px 36px rgba(8, 21, 33, 0.08) !important;
        }
        @media (max-width: 900px) {
          :global(#operations-governance .grid-12 > div) {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
