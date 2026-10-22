"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  MapPin,
  Award,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import { DIRECTORS, SITE_METADATA, CONTACT_INFO } from "@/data/content";

export default function HomeIntroDirectorsSection() {
  return (
    <section
      id="intro-directors"
      style={{
        position: "relative",
        backgroundColor: "#061019",
        color: "#FFFFFF",
        padding: "clamp(4.5rem, 7vw, 6.5rem) 0",
        borderTop: "1px solid rgba(199, 166, 120, 0.22)",
        borderBottom: "1px solid rgba(199, 166, 120, 0.22)",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Ambient Lighting Backdrops */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "15%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.12) 0%, rgba(6, 16, 25, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.09) 0%, rgba(6, 16, 25, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Luxury Geometric Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
        {/* =================================================================
            1. SECTION HEADER: MONUMENTAL INTRODUCTION
            ================================================================= */}
        <div style={{ maxWidth: "880px", marginBottom: "3.75rem" }}>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
            }}
          >
            Direct Founder Stewardship.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 20%, var(--color-champagne-light) 60%, var(--color-champagne) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Uncompromising Corporate Accountability.
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              color: "#C5D2DC",
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            Founded in 2000, Milind Travels emerged alongside Mumbai’s rapid corporate expansion, delivering disciplined passenger mobility to multinational corporations, IT campuses, and financial institutions. Now incorporated as <strong>{SITE_METADATA.legalName}</strong> (CIN: {SITE_METADATA.cin}), our central operations base at <strong>A-808, Kailas Business Park in Vikhroli West</strong> maintains daily executive oversight across all scheduled employee commutes, priority ad-hoc duties, and airport transfers.
          </p>
        </div>

        {/* =================================================================
            2. BOARD OF DIRECTORS: ARCHITECTURAL EXECUTIVE PANELS (NO PHOTOS)
            ================================================================= */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--color-champagne)",
                }}
              >
                Executive Leadership
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: "0.25rem",
                }}
              >
                Board of Directors
              </h3>
            </div>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.86rem",
                fontWeight: 600,
                color: "var(--color-champagne)",
                textDecoration: "none",
                transition: "gap 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-champagne-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-champagne)";
              }}
            >
              <span>Explore 24+ Years Heritage Timeline</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* 2 Compact Executive Director Cards */}
        <div className="grid-12" style={{ alignItems: "stretch", gap: "1.5rem" }}>
          {/* Card 1: Milind Prabhakar Phodkar */}
          <div
            className="monumental-director-panel"
            style={{
              gridColumn: "span 6",
              backgroundColor: "rgba(12, 24, 36, 0.75)",
              border: "1px solid rgba(199, 166, 120, 0.28)",
              borderRadius: "16px",
              padding: "clamp(1.25rem, 2.5vw, 1.65rem)",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Top Right Ambient Glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle at 100% 0%, rgba(199, 166, 120, 0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div>
              {/* Header: Insignia Seal + Identity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                {/* Bespoke Geometric Gold Insignia Seal */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #132435 0%, #081521 100%)",
                    border: "1.5px solid var(--color-champagne)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--color-champagne)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    MP
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      backgroundColor: "var(--color-champagne)",
                      color: "#081521",
                      borderRadius: "50%",
                      width: "15px",
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.55rem",
                      fontWeight: 900,
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    ★
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--color-champagne)",
                      marginBottom: "0.15rem",
                    }}
                  >
                    <span>Managing Director</span>
                    <span style={{ opacity: 0.4 }}>•</span>
                    <span>24+ Years Leadership</span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    Milind Prabhakar Phodkar
                  </h4>

                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-champagne-light)",
                      fontWeight: 500,
                      marginTop: "0.1rem",
                    }}
                  >
                    Founder & Managing Director
                  </div>
                </div>
              </div>

              {/* Guiding Principle (Compact Italic Statement) */}
              <p
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "#EDF2F7",
                  lineHeight: 1.5,
                  margin: "0 0 0.85rem 0",
                  paddingLeft: "0.75rem",
                  borderLeft: "2px solid var(--color-champagne)",
                }}
              >
                “Delivering more than what is promised with absolute dependability and passenger safety.”
              </p>

              {/* Executive Bio */}
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#BAC7D3",
                  lineHeight: 1.55,
                  marginBottom: "0.9rem",
                }}
              >
                Founded Milind Travels in 2000. Steers corporate governance, institutional MSAs, volume enterprise tariffs, and statutory passenger compliance for Mumbai&apos;s leading organizations.
              </p>

              {/* Compact Mandate Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1rem",
                }}
              >
                {[
                  "Enterprise MSAs & Tariffs",
                  "Statutory Governance",
                  "Institutional BFSI Focus",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--color-champagne-light)",
                      backgroundColor: "rgba(199, 166, 120, 0.1)",
                      border: "1px solid rgba(199, 166, 120, 0.25)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Action Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
                paddingTop: "0.85rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#8E9EAD" }}>
                <span style={{ color: "var(--color-champagne)" }}>Direct:</span> mumbai@milindtravels.com
              </div>

              <Link
                href="/contact"
                className="monumental-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  color: "#081521",
                  backgroundColor: "var(--color-champagne)",
                  padding: "0.42rem 0.85rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <span>Request Consultation</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: Sarvesh Milind Phodkar */}
          <div
            className="monumental-director-panel"
            style={{
              gridColumn: "span 6",
              backgroundColor: "rgba(12, 24, 36, 0.75)",
              border: "1px solid rgba(199, 166, 120, 0.28)",
              borderRadius: "16px",
              padding: "clamp(1.25rem, 2.5vw, 1.65rem)",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Top Right Ambient Glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle at 100% 0%, rgba(199, 166, 120, 0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div>
              {/* Header: Insignia Seal + Identity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                {/* Bespoke Geometric Gold Insignia Seal */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #132435 0%, #081521 100%)",
                    border: "1.5px solid var(--color-champagne)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--color-champagne)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    SM
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      backgroundColor: "var(--color-champagne)",
                      color: "#081521",
                      borderRadius: "50%",
                      width: "15px",
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.55rem",
                      fontWeight: 900,
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    ⚡
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--color-champagne)",
                      marginBottom: "0.15rem",
                    }}
                  >
                    <span>Director of Operations</span>
                    <span style={{ opacity: 0.4 }}>•</span>
                    <span>Fleet & Route Technology</span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    Sarvesh Milind Phodkar
                  </h4>

                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-champagne-light)",
                      fontWeight: 500,
                      marginTop: "0.1rem",
                    }}
                  >
                    Director — Operations & Fleet Technology
                  </div>
                </div>
              </div>

              {/* Guiding Principle (Compact Italic Statement) */}
              <p
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "#EDF2F7",
                  lineHeight: 1.5,
                  margin: "0 0 0.85rem 0",
                  paddingLeft: "0.75rem",
                  borderLeft: "2px solid var(--color-champagne)",
                }}
              >
                “Modern corporate transit requires technological precision and direct accountability.”
              </p>

              {/* Executive Bio */}
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#BAC7D3",
                  lineHeight: 1.55,
                  marginBottom: "0.9rem",
                }}
              >
                Directs operational route execution, driver compliance frameworks, ad-hoc fleet dispatch, and connected client service management across MMR.
              </p>

              {/* Compact Mandate Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1rem",
                }}
              >
                {[
                  "Ad-Hoc Client Desk",
                  "24/7 Route Sync",
                  "Driver Vetting & Safety",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--color-champagne-light)",
                      backgroundColor: "rgba(199, 166, 120, 0.1)",
                      border: "1px solid rgba(199, 166, 120, 0.25)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Action Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
                paddingTop: "0.85rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#8E9EAD" }}>
                <span style={{ color: "var(--color-champagne)" }}>Command Hub:</span> Kailas Business Park, Vikhroli (W)
              </div>

              <Link
                href="/calculator"
                className="monumental-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  color: "#081521",
                  backgroundColor: "var(--color-champagne)",
                  padding: "0.42rem 0.85rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <span>Build Proposal</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* =================================================================
            3. OFFICIAL STATUTORY AUTHORITY METADATA STRIP
            ================================================================= */}
        <div
          style={{
            marginTop: "3.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            borderRadius: "14px",
            padding: "1.25rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "0.84rem",
            color: "#A2B3C2",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ color: "var(--color-champagne)", fontWeight: 700 }}>Legal Entity:</span>
            <strong style={{ color: "#FFFFFF" }}>{SITE_METADATA.legalName}</strong>
          </div>

          <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} className="strip-divider" />

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ color: "var(--color-champagne)", fontWeight: 700 }}>Corporate CIN:</span>
            <span style={{ color: "#EDF2F7", letterSpacing: "0.04em", fontFamily: "monospace" }}>{SITE_METADATA.cin}</span>
          </div>

          <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} className="strip-divider" />

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ color: "var(--color-champagne)", fontWeight: 700 }}>Headquarters:</span>
            <span>A-808, Kailas Business Park, Vikhroli West, Mumbai - 400079</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .monumental-director-panel:hover {
          transform: translateY(-5px);
          border-color: rgba(199, 166, 120, 0.6) !important;
          box-shadow: 0 32px 70px rgba(0, 0, 0, 0.6), 0 0 30px rgba(199, 166, 120, 0.12) !important;
        }

        .monumental-btn:hover {
          background-color: var(--color-champagne-light) !important;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .monumental-director-panel {
            grid-column: span 12 !important;
          }
          .strip-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
