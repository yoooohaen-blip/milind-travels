"use client";

import React, { useState } from "react";
import { MUMBAI_CORRIDORS, CONTACT_INFO } from "@/data/content";
import { MapPin, Building2, Check, ArrowRight } from "lucide-react";

export default function MumbaiCoverageSection() {
  const [activeCorridorId, setActiveCorridorId] = useState<string>(MUMBAI_CORRIDORS[0].id);

  const activeCorridor =
    MUMBAI_CORRIDORS.find((c) => c.id === activeCorridorId) || MUMBAI_CORRIDORS[0];

  return (
    <section id="corridors" className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "3.5rem" }}>
          <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}>
            Comprehensive Corridor Coverage
            <br />
            Across Greater Mumbai.
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            Strategically headquartered in Kailas Business Park, Vikhroli West, our fleet coordination desk
            operates across every key commercial node in Mumbai, Navi Mumbai, and Thane.
          </p>
        </div>

        {/* Interactive Layout: Left Corridor Selector, Right Visual Dossier */}
        <div className="grid-12" style={{ alignItems: "stretch" }}>
          {/* Left: Corridor List (Span 5) */}
          <div
            style={{
              gridColumn: "span 5",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
            className="corridor-list-column"
          >
            {MUMBAI_CORRIDORS.map((corridor) => {
              const isSelected = corridor.id === activeCorridorId;
              return (
                <button
                  key={corridor.id}
                  type="button"
                  onClick={() => setActiveCorridorId(corridor.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.2rem 1.4rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: isSelected ? "var(--color-midnight-navy)" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF" : "var(--color-midnight-navy)",
                    border: isSelected ? "1px solid var(--color-champagne)" : "1px solid rgba(129, 144, 154, 0.2)",
                    textAlign: "left",
                    transition: "all var(--transition-fast)",
                    boxShadow: isSelected ? "var(--shadow-md)" : "none",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: isSelected ? "var(--color-champagne-light)" : "var(--color-slate-gray)",
                        fontWeight: 700,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {corridor.region} Mumbai
                    </span>
                    <strong style={{ fontSize: "1rem", fontWeight: 700 }}>{corridor.name}</strong>
                  </div>

                  <MapPin
                    size={18}
                    style={{
                      color: isSelected ? "var(--color-champagne)" : "var(--color-slate-gray)",
                      flexShrink: 0,
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Corridor Dossier & Hub Card (Span 7) */}
          <div
            style={{
              gridColumn: "span 7",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(2rem, 3.5vw, 3rem)",
              border: "1px solid rgba(129, 144, 154, 0.2)",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className="corridor-detail-column"
          >
            <div>
              {/* Region Tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-champagne-dark)",
                  }}
                >
                  {activeCorridor.region} Region Focus
                </span>

                <span style={{ fontSize: "0.82rem", color: "var(--color-slate-gray)", fontWeight: 600 }}>
                  Active Operational Route
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                  fontWeight: 700,
                  color: "var(--color-midnight-navy)",
                  marginBottom: "0.85rem",
                }}
              >
                {activeCorridor.name}
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-dark-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                {activeCorridor.routeFocus}
              </p>

              {/* Major Tech Parks & Commercial Hubs */}
              <div style={{ marginBottom: "2rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-midnight-navy)",
                    marginBottom: "1rem",
                  }}
                >
                  Major Enterprise Hubs & Facilities Served:
                </span>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  {activeCorridor.majorHubs.map((hub) => (
                    <div
                      key={hub}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid rgba(8, 21, 33, 0.08)",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--color-midnight-navy)",
                      }}
                    >
                      <Building2 size={16} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
                      <span>{hub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Headquarters Callout if Vikhroli */}
              {activeCorridor.id === "vikhroli-powai" && (
                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(8, 21, 33, 0.04)",
                    border: "1px dashed var(--color-champagne)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <strong style={{ display: "block", color: "var(--color-midnight-navy)", fontSize: "0.95rem" }}>
                    Milind Travels Corporate Headquarters Location
                  </strong>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-dark-secondary)", marginTop: "0.25rem", lineHeight: 1.45 }}>
                    {CONTACT_INFO.communicationOffice.fullAddress}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Inquire CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(8, 21, 33, 0.08)",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a href="#calculator" className="btn btn-navy">
                <span>Configure Routes in {activeCorridor.name}</span>
                <ArrowRight size={15} />
              </a>

              <span style={{ fontSize: "0.84rem", color: "var(--color-slate-gray)" }}>
                Route surveys conducted within 48h
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.corridor-list-column),
          :global(.corridor-detail-column) {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
