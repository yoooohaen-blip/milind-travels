"use client";

import React from "react";
import Image from "next/image";
import { COMPANY_HERITAGE, CONTACT_INFO } from "@/data/content";
import { Compass, Target, HeartHandshake, Award } from "lucide-react";

export default function AboutHeritageSection() {
  return (
    <section id="heritage" className="section-py surface-dark" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
          <h2 className="text-section-title" style={{ color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Decades of Continuity in Mumbai’s
            <br />
            Dynamic Enterprise Landscape.
          </h2>

          <p className="text-lead" style={{ color: "#C8D3DB" }}>
            Established in 2000, Milind Travels grew alongside Mumbai’s IT, financial services, and BPO sectors,
            becoming a dependable passenger logistics partner for organizations requiring uninterrupted operational transport.
          </p>
        </div>

        {/* Narrative & Image Composition (Grid 12) */}
        <div className="grid-12" style={{ alignItems: "center", marginBottom: "4rem" }}>
          {/* Story Narrative (Span 7) */}
          <div style={{ gridColumn: "span 7" }} className="heritage-story-column">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#C8D3DB",
                  lineHeight: 1.7,
                }}
              >
                Over 24+ years of continuous service, Milind Travels transitioned from individual passenger transport into an integrated corporate fleet logistics partner. Operating from Kailas Business Park, Vikhroli West, our central headquarters coordinates rapid access across BKC, Powai, Andheri SEEPZ, Lower Parel, and the Navi Mumbai tech corridors.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#9EAAB4",
                  lineHeight: 1.7,
                }}
              >
                Today, we manage turnkey transportation solutions for organizations ranging from high-growth enterprises to multinational corporations—handling dedicated shift rosters, executive chauffeur-driven sedans, and round-the-clock emergency replacement readiness.
              </p>
            </div>
          </div>

          {/* Visual Showcase (Span 5) */}
          <div style={{ gridColumn: "span 5" }} className="heritage-image-column">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(199, 166, 120, 0.25)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <Image
                src="/images/fleet/executive-sedan.jpg"
                alt="Milind Travels Executive Mobility in Mumbai"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(8, 21, 33, 0.95) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  color: "#FFFFFF",
                }}
              >
                <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-champagne)" }}>
                  Operations Base
                </div>
                <strong style={{ fontSize: "1.1rem", display: "block" }}>
                  Kailas Business Park, Vikhroli West
                </strong>
                <span style={{ fontSize: "0.82rem", color: "#C8D3DB" }}>
                  Centrally positioned for immediate Mumbai MMR transit coordination.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Triad */}
        <div className="grid-12">
          {/* Mission */}
          <div
            className="card-dark"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(199, 166, 120, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--color-champagne)",
              }}
            >
              <Target size={22} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Our Mission
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6 }}>
              {COMPANY_HERITAGE.mission}
            </p>
          </div>

          {/* Vision */}
          <div
            className="card-dark"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(199, 166, 120, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--color-champagne)",
              }}
            >
              <Compass size={22} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Our Vision
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6 }}>
              {COMPANY_HERITAGE.vision}
            </p>
          </div>

          {/* Values */}
          <div
            className="card-dark"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(199, 166, 120, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--color-champagne)",
              }}
            >
              <HeartHandshake size={22} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Our Values
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6 }}>
              {COMPANY_HERITAGE.values}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.heritage-story-column),
          :global(.heritage-image-column),
          :global(#heritage .grid-12 > div) {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
