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
            Established in April 2000 as a proprietorship firm with just one vehicle, Milind Travels began providing cab services to call centres and BPO companies, growing into an enterprise partner operating 80+ owned and ~500 attached vehicles.
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
                Established in April 2000 as a proprietorship firm, Milind Travels began its journey with just one vehicle, providing cab services to call centres and BPO companies. Over the years, through our commitment to reliable service, operational excellence, and customer satisfaction, we have steadily expanded our business and client base.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#9EAAB4",
                  lineHeight: 1.7,
                }}
              >
                In August 2025, the business transitioned into Milind Travels Private Limited, marking a significant milestone in our growth and strengthening our foundation for future expansion. Today, we operate a diverse fleet comprising 80+ owned vehicles and approximately 500 attached vehicles, enabling us to cater to a wide range of corporate transportation requirements across Mumbai's Western, Eastern, and Harbour Zones.
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
                src="/images/fleet/premium-mpv.jpg"
                alt="Milind Travels Corporate Fleet Mobility in Mumbai"
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
                  Operations &amp; Communications Base
                </div>
                <strong style={{ fontSize: "1.1rem", display: "block" }}>
                  A-808, Kailas Business Park, Vikhroli West
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
