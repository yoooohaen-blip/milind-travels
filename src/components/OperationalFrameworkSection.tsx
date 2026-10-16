"use client";

import React, { useState } from "react";
import Link from "next/link";
import { OPERATIONAL_PILLARS, CONTACT_INFO } from "@/data/content";
import {
  ShieldCheck,
  CheckCircle2,
  UserCheck,
  Wrench,
  HeartHandshake,
  Eye,
  Clock,
  Radio,
  FileText,
  Phone,
  ArrowRight,
  Sparkles,
  Shield,
  MapPin,
  Lock,
} from "lucide-react";

interface PillarDetail {
  id: string;
  categoryTag: string;
  metricValue: string;
  metricLabel: string;
  statusBadge: string;
  statusColor: string;
  accentColor: string;
  telemetryPills: string[];
  protocolHighlights: { title: string; desc: string; tag: string }[];
}

const PILLAR_EXTENSIONS: Record<string, PillarDetail> = {
  punctuality: {
    id: "punctuality",
    categoryTag: "DYNAMIC TELEMETRY & ROUTE GOVERNANCE",
    metricValue: "99.4%",
    metricLabel: "On-Time Dispatch SLA",
    statusBadge: "Active Route Telematics",
    statusColor: "#10B981",
    accentColor: "#C7A678",
    telemetryPills: ["14 Mumbai Corridors", "Metro Diversion Scouting", "+25 Min Buffer Sync"],
    protocolHighlights: [
      {
        title: "Dynamic Chokepoint Scouting",
        desc: "Advance route reconnaissance for ongoing metro construction on JVLR, WEH, and EEH to bypass bottle-necks.",
        tag: "Live Route Intel",
      },
      {
        title: "45-Minute Pre-Shift Staging Gate",
        desc: "Chauffeur reporting, breathalyzer confirmation, and vehicle sanitation verified 45 minutes prior to scheduled pickup.",
        tag: "Pre-Shift Gate",
      },
      {
        title: "Cluster Standby Fleet Staging",
        desc: "Hot-standby replacement vehicles stationed at BKC, Vikhroli, Andheri SEEPZ, and Airoli for instant redundancy.",
        tag: "Zero Downtime",
      },
    ],
  },
  compliance: {
    id: "compliance",
    categoryTag: "STATUTORY LEGAL & MECHANICAL SHIELD",
    metricValue: "100%",
    metricLabel: "Statutory RTO Compliance",
    statusBadge: "Commercial T-Permits Certified",
    statusColor: "#10B981",
    accentColor: "#C7A678",
    telemetryPills: ["Zero Client Liability", "Comprehensive Passenger Cover", "BS-VI Late Models"],
    protocolHighlights: [
      {
        title: "100% Commercial Permits & Insurance",
        desc: "Full RTO commercial registration (T-Permits), valid state fitness certificates, and comprehensive commercial passenger cover.",
        tag: "Zero Liability",
      },
      {
        title: "Zero-Tolerance Mechanical Age Standard",
        desc: "Strict fleet retirement policy ensuring modern, BS-VI late-model passenger vehicles with pristine climate control.",
        tag: "Modern Fleet",
      },
      {
        title: "Weekly Multi-Point Mechanical Audits",
        desc: "Rigorous inspection covering dual-circuit braking, tire tread depth, suspension, seatbelts, and emergency kit validity.",
        tag: "Weekly Audit",
      },
    ],
  },
  chauffeurs: {
    id: "chauffeurs",
    categoryTag: "HUMAN CAPITAL & CHAUFFEUR SCRUTINY",
    metricValue: "5-Pt",
    metricLabel: "Verification Protocol",
    statusBadge: "Police & Address Verified",
    statusColor: "#10B981",
    accentColor: "#C7A678",
    telemetryPills: ["Police Clearances", "Defensive Driving Certified", "Zero-Distraction Mandate"],
    protocolHighlights: [
      {
        title: "Law Enforcement & Residential Verification",
        desc: "Comprehensive police record verification, permanent hometown address scrutiny, and commercial license validity authentication.",
        tag: "Background Cleared",
      },
      {
        title: "Corporate Etiquette & Defensive Driving",
        desc: "Trained in discrete passenger conduct, optimal route selection, executive decorum, and defensive Mumbai driving techniques.",
        tag: "Certified Protocol",
      },
      {
        title: "Strict Zero-Distraction & Sobriety Mandate",
        desc: "Randomized sobriety breathalyzer tests, mandatory hands-free regulations, and immediate termination for mobile usage while driving.",
        tag: "0.00 BAC Strict",
      },
    ],
  },
  "safety-protocols": {
    id: "safety-protocols",
    categoryTag: "WOMEN'S SAFETY & 24/7 NIGHT-SHIFT PROTOCOLS",
    metricValue: "24/7",
    metricLabel: "Active Operations Command",
    statusBadge: "Nodal Escort Care Active",
    statusColor: "#10B981",
    accentColor: "#C7A678",
    telemetryPills: ["Safe Gate Entry Confirmed", "Non-Negotiable Escort Care", "Direct SOS Command"],
    protocolHighlights: [
      {
        title: "Residential Gate Illumination & Safe Entry",
        desc: "Chauffeur remains stationary with headlamps illuminating the residential gate until the female passenger is safely indoors.",
        tag: "Safe Gate Drop",
      },
      {
        title: "No Single Female Passenger Commute Rule",
        desc: "Female employees are never picked up first or dropped off last unescorted during night shift rotations (8 PM – 6 AM).",
        tag: "Escort Mandate",
      },
      {
        title: "Dedicated Vikhroli Control Room Hotline",
        desc: "Live route tracking and instant direct-line telephone access for facility managers and commuting employees 24/7.",
        tag: "24/7 Hotlink",
      },
    ],
  },
};

export default function OperationalFrameworkSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const getPillarIcon = (id: string, size = 22) => {
    switch (id) {
      case "punctuality":
        return <Eye size={size} style={{ color: "var(--color-champagne)" }} />;
      case "compliance":
        return <Wrench size={size} style={{ color: "var(--color-champagne)" }} />;
      case "chauffeurs":
        return <UserCheck size={size} style={{ color: "var(--color-champagne)" }} />;
      case "safety-protocols":
        return <HeartHandshake size={size} style={{ color: "var(--color-champagne)" }} />;
      default:
        return <ShieldCheck size={size} style={{ color: "var(--color-champagne)" }} />;
    }
  };

  const filteredPillars =
    activeTab === "all"
      ? OPERATIONAL_PILLARS
      : OPERATIONAL_PILLARS.filter((p) => p.id === activeTab);

  return (
    <section
      id="operations-governance"
      className="section-py surface-dark-secondary"
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Grid Glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-150px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-250px",
          left: "-150px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header with Live Telemetry Pulse */}
        <div style={{ maxWidth: "860px", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.35rem 0.85rem",
              backgroundColor: "rgba(199, 166, 120, 0.1)",
              border: "1px solid rgba(199, 166, 120, 0.25)",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                display: "inline-block",
                boxShadow: "0 0 10px #10B981",
              }}
            />
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-champagne)",
              }}
            >
              Active Compliance Telemetry • Kailas Business Park Command Desk
            </span>
          </div>

          <h2
            className="text-section-title"
            style={{ color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.2 }}
          >
            Enterprise Governance, Safety &amp;
            <br />
            Audited Rigor in Every Kilometer.
          </h2>

          <p className="text-lead" style={{ color: "#C8D3DB", fontSize: "1.05rem" }}>
            Corporate passenger logistics demands zero compromise. Our institutional governance combines
            real-time suburban route scouting, verified chauffeur screening, 100% commercial RTO compliance,
            and dedicated night-shift female employee escort protocols.
          </p>
        </div>

        {/* Real-time Telemetry Governance HUD Strip (4 Top Cards) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              metric: "99.4%",
              label: "On-Time Dispatch SLA",
              sub: "14 suburban corridors actively monitored",
              icon: <Clock size={18} style={{ color: "var(--color-champagne)" }} />,
            },
            {
              metric: "100%",
              label: "RTO T-Permit Compliance",
              sub: "Full commercial passenger insurance",
              icon: <ShieldCheck size={18} style={{ color: "var(--color-champagne)" }} />,
            },
            {
              metric: "5-Point",
              label: "Chauffeur Verification",
              sub: "Police clearances & defensive certified",
              icon: <UserCheck size={18} style={{ color: "var(--color-champagne)" }} />,
            },
            {
              metric: "24/7/365",
              label: "Nodal SOS Control Room",
              sub: "Direct hotlink for facility managers",
              icon: <Radio size={18} style={{ color: "var(--color-champagne)" }} />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(199, 166, 120, 0.2)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem 1.4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                transition: "all 250ms ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(199, 166, 120, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(200, 211, 219, 0.6)",
                  }}
                >
                  Metric 0{i + 1}
                </span>
              </div>

              <div>
                <strong
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    display: "block",
                    lineHeight: 1.1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.metric}
                </strong>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--color-champagne-light)",
                    display: "block",
                    marginBottom: "0.2rem",
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontSize: "0.76rem",
                    color: "#81909A",
                    lineHeight: 1.4,
                    display: "block",
                  }}
                >
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Filter / Pillar Selector */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
            paddingBottom: "1.25rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-slate-gray)",
                marginRight: "0.5rem",
              }}
            >
              Filter Framework:
            </span>
            {[
              { id: "all", label: "All 4 Governance Pillars" },
              { id: "punctuality", label: "01 Route Punctuality" },
              { id: "compliance", label: "02 Statutory Compliance" },
              { id: "chauffeurs", label: "03 Vetted Chauffeurs" },
              { id: "safety-protocols", label: "04 Women's Safety" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "0.45rem 0.95rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    backgroundColor: isActive
                      ? "var(--color-champagne)"
                      : "rgba(255, 255, 255, 0.04)",
                    color: isActive ? "#081521" : "#C8D3DB",
                    border: isActive
                      ? "1px solid var(--color-champagne)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <span style={{ fontSize: "0.8rem", color: "#81909A" }}>
            Showing {filteredPillars.length} of 4 Mandated Protocols
          </span>
        </div>

        {/* 4 Pillars Grid (2x2 Architecture with Luxury Visual Depth) */}
        <div className="grid-12" style={{ gap: "2rem" }}>
          {filteredPillars.map((pillar, idx) => {
            const ext = PILLAR_EXTENSIONS[pillar.id] || {
              id: pillar.id,
              categoryTag: "GOVERNANCE PROTOCOL",
              metricValue: "100%",
              metricLabel: "Standard Verified",
              statusBadge: "Audit Compliant",
              statusColor: "#10B981",
              accentColor: "#C7A678",
              telemetryPills: ["Certified", "Audited", "Monitored"],
              protocolHighlights: pillar.points.map((pt) => ({
                title: "Operational Standard",
                desc: pt,
                tag: "Verified",
              })),
            };

            const realIndex = OPERATIONAL_PILLARS.findIndex((p) => p.id === pillar.id);

            return (
              <div
                key={pillar.id}
                style={{
                  gridColumn: activeTab === "all" ? "span 6" : "span 12",
                  backgroundColor: "rgba(11, 30, 45, 0.75)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(199, 166, 120, 0.22)",
                  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                  position: "relative",
                  transition: "transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease",
                }}
                className="pillar-card-hover"
              >
                <div>
                  {/* Top Header: Icon + Category + Large Metric HUD */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                      paddingBottom: "1.25rem",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(199, 166, 120, 0.12)",
                          border: "1px solid rgba(199, 166, 120, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 0 16px rgba(199, 166, 120, 0.1)",
                        }}
                      >
                        {getPillarIcon(pillar.id, 24)}
                      </div>

                      <div>
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "var(--color-champagne)",
                            display: "block",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {ext.categoryTag}
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span
                            style={{
                              width: "7px",
                              height: "7px",
                              borderRadius: "50%",
                              backgroundColor: ext.statusColor,
                              display: "inline-block",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.78rem",
                              color: "#FFFFFF",
                              fontWeight: 600,
                            }}
                          >
                            {ext.statusBadge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Prominent Metric Display */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.75rem",
                          fontWeight: 800,
                          color: "var(--color-champagne)",
                          lineHeight: 1,
                          display: "block",
                        }}
                      >
                        {ext.metricValue}
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "rgba(200, 211, 219, 0.6)",
                        }}
                      >
                        {ext.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Pillar Title & Overview */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.65rem",
                        marginBottom: "0.45rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          color: "var(--color-champagne-dark)",
                        }}
                      >
                        0{realIndex + 1}.
                      </span>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          margin: 0,
                          lineHeight: 1.25,
                        }}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontSize: "0.93rem",
                        color: "#C8D3DB",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>

                  {/* 3 Structured Telemetry Row Highlights */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {ext.protocolHighlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.85rem 1rem",
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "0.75rem",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                          <CheckCircle2
                            size={16}
                            style={{
                              color: "var(--color-champagne)",
                              flexShrink: 0,
                              marginTop: "0.15rem",
                            }}
                          />
                          <div>
                            <strong
                              style={{
                                fontSize: "0.86rem",
                                color: "#FFFFFF",
                                display: "block",
                                marginBottom: "0.15rem",
                              }}
                            >
                              {hl.title}
                            </strong>
                            <p
                              style={{
                                fontSize: "0.81rem",
                                color: "#C8D3DB",
                                lineHeight: 1.45,
                                margin: 0,
                              }}
                            >
                              {hl.desc}
                            </p>
                          </div>
                        </div>

                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--color-champagne-light)",
                            backgroundColor: "rgba(199, 166, 120, 0.12)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "4px",
                            flexShrink: 0,
                          }}
                        >
                          {hl.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Telemetry Strip */}
                <div
                  style={{
                    paddingTop: "1.25rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {ext.telemetryPills.map((pill) => (
                      <span
                        key={pill}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "#C8D3DB",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--color-champagne)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <Shield size={12} />
                    Audit Standard 2026
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Governance Documentation CTA Banner */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2rem 2.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(199, 166, 120, 0.25)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
              <FileText size={18} style={{ color: "var(--color-champagne)" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                Enterprise Procurement &amp; Compliance Audit Pack
              </h3>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#C8D3DB", margin: 0 }}>
              Need our commercial RTO permit records, insurance policy schedules, and driver verification SOPs for your corporate vendor onboarding?
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
              style={{ borderColor: "rgba(255, 255, 255, 0.2)", color: "#FFFFFF" }}
            >
              <Phone size={15} />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.pillar-card-hover:hover) {
          border-color: rgba(199, 166, 120, 0.5) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 25px rgba(199, 166, 120, 0.12) !important;
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
