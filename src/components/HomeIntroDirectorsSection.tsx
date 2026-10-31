"use client";

import React from "react";
import Image from "next/image";
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
            Established in April 2000 as a proprietorship firm with just one vehicle providing cab services to call centres and BPO companies, Milind Travels has steadily expanded over 24+ years. In August 2025, the business transitioned into <strong>{SITE_METADATA.legalName}</strong> (CIN: {SITE_METADATA.cin}). Today, we operate a diverse fleet comprising <strong>80+ owned vehicles and approximately 500 attached vehicles</strong> (hatchbacks, sedans, SUVs, and premium vehicles), backed by dedicated supervisors on each client site to monitor and live track across Mumbai's Western, Eastern, and Harbour Zones.
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

        {/* 2 Clean & Redesigned Executive Director Cards */}
        <div className="grid-12" style={{ alignItems: "stretch", gap: "1.5rem" }}>
          {/* Card 1: Milind Prabhakar Phodkar */}
          <div
            className="monumental-director-panel"
            style={{
              gridColumn: "span 6",
              backgroundColor: "rgba(10, 22, 34, 0.82)",
              border: "1px solid rgba(199, 166, 120, 0.24)",
              borderRadius: "18px",
              padding: "clamp(1.5rem, 2.5vw, 1.85rem)",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "1.6rem",
              transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            {/* Left: Tilted Gold Bordered Portrait */}
            <div
              style={{
                position: "relative",
                width: "135px",
                height: "160px",
                flexShrink: 0,
              }}
              className="director-portrait-wrap"
            >
              {/* Tilted gold backdrop layer */}
              <div
                style={{
                  position: "absolute",
                  inset: "-4px -3px 4px 3px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(199, 166, 120, 0.5) 0%, rgba(199, 166, 120, 0.1) 100%)",
                  border: "1px solid rgba(199, 166, 120, 0.45)",
                  transform: "rotate(-3.5deg)",
                  zIndex: 0,
                  boxShadow: "0 6px 20px rgba(199, 166, 120, 0.15)",
                }}
              />
              {/* Front Portrait Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1.5px solid rgba(199, 166, 120, 0.75)",
                  boxShadow: "0 10px 26px rgba(0, 0, 0, 0.6)",
                  zIndex: 1,
                  backgroundColor: "#07121C",
                }}
              >
                <Image
                  src="/images/directors/milind-phodkar.jpg"
                  alt="Milind Prabhakar Phodkar — Founder & Managing Director"
                  fill
                  sizes="150px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 15%",
                  }}
                  priority
                />
              </div>
            </div>

            {/* Right: Identity & Clean Text */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "0.6rem",
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Milind Prabhakar Phodkar
                </h4>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-champagne)",
                    fontWeight: 600,
                    marginTop: "0.25rem",
                    marginBottom: "0.55rem",
                  }}
                >
                  Founder &amp; Managing Director • 24+ Years Leadership
                </div>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "#BAC7D3",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Founded Milind Travels in 2000. Steers institutional enterprise MSAs, statutory corporate governance, and passenger safety compliance across Mumbai.
                </p>
              </div>

              {/* Minimal Bottom Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "0.65rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.76rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <a
                  href="mailto:mumbai@milindtravels.com"
                  style={{
                    color: "#BAC7D3",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Mail size={13} style={{ color: "var(--color-champagne)" }} />
                  <span>
                    <strong style={{ color: "var(--color-champagne)" }}>Direct:</strong> mumbai@milindtravels.com
                  </span>
                </a>
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
          </div>

          {/* Card 2: Sarvesh Milind Phodkar */}
          <div
            className="monumental-director-panel"
            style={{
              gridColumn: "span 6",
              backgroundColor: "rgba(10, 22, 34, 0.82)",
              border: "1px solid rgba(199, 166, 120, 0.24)",
              borderRadius: "18px",
              padding: "clamp(1.5rem, 2.5vw, 1.85rem)",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "1.6rem",
              transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            {/* Left: Tilted Gold Bordered Silhouette */}
            <div
              style={{
                position: "relative",
                width: "135px",
                height: "160px",
                flexShrink: 0,
              }}
              className="director-portrait-wrap"
            >
              {/* Tilted gold backdrop layer */}
              <div
                style={{
                  position: "absolute",
                  inset: "-4px -3px 4px 3px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(199, 166, 120, 0.5) 0%, rgba(199, 166, 120, 0.1) 100%)",
                  border: "1px solid rgba(199, 166, 120, 0.45)",
                  transform: "rotate(-3.5deg)",
                  zIndex: 0,
                  boxShadow: "0 6px 20px rgba(199, 166, 120, 0.15)",
                }}
              />
              {/* Front Silhouette Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1.5px solid rgba(199, 166, 120, 0.75)",
                  boxShadow: "0 10px 26px rgba(0, 0, 0, 0.6)",
                  zIndex: 1,
                  backgroundColor: "#07121C",
                }}
              >
                <Image
                  src="/images/directors/sarvesh-phodkar.jpg"
                  alt="Sarvesh Milind Phodkar — Director — Operations & Fleet Technology"
                  fill
                  sizes="150px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                  }}
                  priority
                />
              </div>
            </div>

            {/* Right: Identity & Clean Text */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "0.6rem",
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Sarvesh Milind Phodkar
                </h4>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-champagne)",
                    fontWeight: 600,
                    marginTop: "0.25rem",
                    marginBottom: "0.55rem",
                  }}
                >
                  Director — Operations &amp; Fleet Technology
                </div>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "#BAC7D3",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Directs 24/7 corporate fleet route execution, automated shift rosters, priority ad-hoc client dispatch, and driver compliance frameworks across MMR.
                </p>
              </div>

              {/* Minimal Bottom Bar: No address, No plan proposal */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "0.65rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.76rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  style={{
                    color: "#BAC7D3",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Phone size={13} style={{ color: "var(--color-champagne)" }} />
                  <span>
                    <strong style={{ color: "var(--color-champagne)" }}>Direct:</strong> {CONTACT_INFO.phoneFormatted}
                  </span>
                </a>
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

        @media (max-width: 580px) {
          .monumental-director-panel {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .director-portrait-wrap {
            margin: 0 auto 0.5rem auto !important;
          }
        }
      `}</style>
    </section>
  );
}
