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
        padding: "clamp(3rem, 5vw, 4.25rem) 0",
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
        <div style={{ maxWidth: "880px", marginBottom: "2.25rem" }}>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
              marginBottom: "1rem",
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
              fontSize: "1rem",
              color: "#C5D2DC",
              lineHeight: 1.65,
              fontWeight: 400,
            }}
          >
            Founded in 2000, Milind Travels emerged alongside Mumbai’s rapid corporate expansion, delivering disciplined passenger mobility to multinational corporations, IT campuses, and financial institutions. Now incorporated as <strong>{SITE_METADATA.legalName}</strong> (CIN: {SITE_METADATA.cin}), our central operations base at <strong>A-808, Kailas Business Park in Vikhroli West</strong> maintains daily executive oversight across all scheduled employee commutes, priority ad-hoc duties, and airport transfers.
          </p>
        </div>

        {/* =================================================================
            2. BOARD OF DIRECTORS: ARCHITECTURAL EXECUTIVE PANELS (NO PHOTOS)
            ================================================================= */}
        <div style={{ marginBottom: "1.25rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1rem",
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

        {/* 2 Clean & Uncluttered Executive Director Cards */}
        <div className="grid-12" style={{ alignItems: "stretch", gap: "1.5rem" }}>
          {/* Card 1: Milind Prabhakar Phodkar */}
          <div
            className="monumental-director-panel"
            style={{
              gridColumn: "span 6",
              backgroundColor: "rgba(10, 22, 34, 0.75)",
              border: "1px solid rgba(199, 166, 120, 0.22)",
              borderRadius: "14px",
              padding: "1.35rem 1.6rem",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "0.85rem",
              transition: "transform 0.25s ease, border-color 0.25s ease",
            }}
          >
            {/* Top: Insignia Seal + Clean Identity */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.95rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "11px",
                  background: "linear-gradient(135deg, #132435 0%, #081521 100%)",
                  border: "1.5px solid var(--color-champagne)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "var(--color-champagne)",
                    letterSpacing: "0.04em",
                  }}
                >
                  MP
                </span>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  Milind Prabhakar Phodkar
                </h4>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-champagne-light)",
                    fontWeight: 600,
                    marginTop: "0.2rem",
                  }}
                >
                  Founder & Managing Director • 24+ Years Leadership
                </div>
              </div>
            </div>

            {/* Middle: Clean Executive Summary */}
            <p
              style={{
                fontSize: "0.84rem",
                color: "#BAC7D3",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Founded Milind Travels in 2000. Steers institutional enterprise MSAs, statutory corporate governance, and passenger safety compliance across Mumbai.
            </p>

            {/* Bottom: Minimal Contact & Link */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "0.75rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.75rem",
              }}
            >
              <span style={{ color: "#8E9EAD" }}>
                <span style={{ color: "var(--color-champagne)", fontWeight: 600 }}>Direct:</span> mumbai@milindtravels.com
              </span>
              <Link
                href="/contact"
                style={{
                  color: "var(--color-champagne)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  transition: "color 0.2s ease",
                }}
              >
                <span>Contact Office</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: Sarvesh Milind Phodkar */}
          <div
            className="monumental-director-panel"
            style={{
              gridColumn: "span 6",
              backgroundColor: "rgba(10, 22, 34, 0.75)",
              border: "1px solid rgba(199, 166, 120, 0.22)",
              borderRadius: "14px",
              padding: "1.35rem 1.6rem",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "0.85rem",
              transition: "transform 0.25s ease, border-color 0.25s ease",
            }}
          >
            {/* Top: Insignia Seal + Clean Identity */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.95rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "11px",
                  background: "linear-gradient(135deg, #132435 0%, #081521 100%)",
                  border: "1.5px solid var(--color-champagne)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "var(--color-champagne)",
                    letterSpacing: "0.04em",
                  }}
                >
                  SM
                </span>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  Sarvesh Milind Phodkar
                </h4>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-champagne-light)",
                    fontWeight: 600,
                    marginTop: "0.2rem",
                  }}
                >
                  Director — Operations & Fleet Technology
                </div>
              </div>
            </div>

            {/* Middle: Clean Executive Summary */}
            <p
              style={{
                fontSize: "0.84rem",
                color: "#BAC7D3",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Directs 24/7 corporate fleet route execution, automated shift rosters, priority ad-hoc client dispatch, and driver compliance frameworks across MMR.
            </p>

            {/* Bottom: Minimal Hub & Link */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "0.75rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.75rem",
              }}
            >
              <span style={{ color: "#8E9EAD" }}>
                <span style={{ color: "var(--color-champagne)", fontWeight: 600 }}>Command Hub:</span> Kailas Business Park, Vikhroli (W)
              </span>
              <Link
                href="/calculator"
                style={{
                  color: "var(--color-champagne)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  transition: "color 0.2s ease",
                }}
              >
                <span>Plan Proposal</span>
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
            marginTop: "2.25rem",
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
