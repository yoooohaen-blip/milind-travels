"use client";

import React from "react";
import Image from "next/image";
import { HISTORICAL_CLIENTS } from "@/data/content";
import { ShieldCheck } from "lucide-react";

export default function ClientTrustSection() {
  // Row 1: forward order duplicated for seamless loop
  const row1Logos = [...HISTORICAL_CLIENTS, ...HISTORICAL_CLIENTS];
  
  // Row 2: offset rotated order duplicated for seamless loop
  const rotatedClients = [
    ...HISTORICAL_CLIENTS.slice(5),
    ...HISTORICAL_CLIENTS.slice(0, 5),
  ];
  const row2Logos = [...rotatedClients, ...rotatedClients];

  return (
    <section
      className="section-py surface-white"
      style={{
        borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
          <h2
            className="text-section-title"
            style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}
          >
            Trusted by Industry Leaders
            <br />
            Across 24+ Years of Operation.
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            Our corporate mobility solutions have supported organizations ranging from fast-growing tech enterprises
            to multinational corporations, financial institutions, and 24/7 BPO operations.
          </p>
        </div>
      </div>

      {/* Unlimited Automated Scrolling Marquee (Only Logos) */}
      <div className="marquee-wrapper">
        {/* Row 1: Scrolls Left */}
        <div className="marquee-track-container">
          <div className="marquee-track scroll-left">
            {row1Logos.map((client, idx) => (
              <div
                key={`row1-${client.name}-${idx}`}
                className="logo-capsule"
                title={client.name}
              >
                <Image
                  src={`/images/clients/${client.logoFilename}`}
                  alt={`${client.name} Corporate Client`}
                  width={150}
                  height={48}
                  style={{
                    maxHeight: "44px",
                    maxWidth: "140px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  className="client-logo-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-track-container" style={{ marginTop: "1rem" }}>
          <div className="marquee-track scroll-right">
            {row2Logos.map((client, idx) => (
              <div
                key={`row2-${client.name}-${idx}`}
                className="logo-capsule"
                title={client.name}
              >
                <Image
                  src={`/images/clients/${client.logoFilename}`}
                  alt={`${client.name} Corporate Client`}
                  width={150}
                  height={48}
                  style={{
                    maxHeight: "44px",
                    maxWidth: "140px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  className="client-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container">
        {/* Verified Enterprise Client Portfolio Showcase */}
        <div style={{ marginTop: "4.5rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "780px", marginBottom: "2.5rem" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-champagne-dark)",
                display: "inline-block",
                marginBottom: "0.5rem",
              }}
            >
              Enterprise Client Roster
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--color-midnight-navy)",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
              }}
            >
              Institutional Mobility Partners
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--text-dark-secondary)", lineHeight: 1.6, margin: 0 }}>
              Leading corporate institutions that trust Milind Travels for scheduled workforce transit,
              executive board mobility, and priority operations across the Mumbai Metropolitan Region.
            </p>
          </div>

          <div className="grid-12" style={{ gap: "1.25rem", alignItems: "stretch" }}>
            {HISTORICAL_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="client-grid-card"
                style={{
                  gridColumn: "span 6",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(8, 21, 33, 0.09)",
                  borderRadius: "14px",
                  padding: "1.5rem 1.75rem",
                  boxShadow: "0 4px 14px rgba(8, 21, 33, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: "135px",
                    height: "54px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Image
                    src={`/images/clients/${client.logoFilename}`}
                    alt={`${client.name} Corporate Client`}
                    width={140}
                    height={48}
                    style={{
                      maxHeight: "44px",
                      maxWidth: "130px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                    <h4
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--color-midnight-navy)",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {client.name}
                    </h4>
                    {client.tenure && (
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.55rem",
                          borderRadius: "100px",
                          backgroundColor: "rgba(199, 166, 120, 0.15)",
                          color: "var(--color-champagne-dark)",
                          border: "1px solid rgba(199, 166, 120, 0.35)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {client.tenure}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-dark-secondary)",
                      display: "block",
                      marginBottom: client.highlight ? "0.3rem" : "0.45rem",
                    }}
                  >
                    {client.industry}
                  </span>
                  {client.highlight && (
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-midnight-navy)",
                        fontWeight: 500,
                        margin: "0 0 0.45rem 0",
                        lineHeight: 1.4,
                      }}
                    >
                      {client.highlight}
                    </p>
                  )}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--color-champagne-dark)",
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>Verified Corporate Roster</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Governance Footnote */}
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-sm)",
            backgroundColor: "rgba(8, 21, 33, 0.03)",
            border: "1px solid rgba(8, 21, 33, 0.08)",
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
            fontSize: "0.82rem",
            color: "var(--color-slate-gray)",
            maxWidth: "920px",
          }}
        >
          <ShieldCheck size={16} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
          <span>
            <strong>Documentation Notice:</strong> Client associations verified from historical company operational records since 2000. All corporate marks, logos, and trade names are the property of their respective corporate entities.
          </span>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
          padding: 0.5rem 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
        }

        .marquee-track-container {
          overflow: hidden;
          display: flex;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          width: max-content;
          will-change: transform;
        }

        .scroll-left {
          animation: marqueeLeft 38s linear infinite;
        }

        .scroll-right {
          animation: marqueeRight 42s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .logo-capsule {
          background-color: #FFFFFF;
          border: 1px solid rgba(8, 21, 33, 0.08);
          border-radius: 16px;
          height: 84px;
          min-width: 210px;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(8, 21, 33, 0.04);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
          user-select: none;
        }

        .logo-capsule:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: rgba(199, 166, 120, 0.5);
          box-shadow: 0 10px 24px rgba(8, 21, 33, 0.08);
        }

        .logo-capsule:hover :global(.client-logo-img) {
          transform: scale(1.05);
        }

        :global(.client-grid-card:hover) {
          transform: translateY(-3px);
          border-color: rgba(199, 166, 120, 0.5) !important;
          box-shadow: 0 10px 24px rgba(8, 21, 33, 0.08) !important;
        }

        @media (max-width: 768px) {
          :global(.client-grid-card) {
            grid-column: span 12 !important;
          }
        }

        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .logo-capsule {
            height: 72px;
            min-width: 170px;
            padding: 0.5rem 1rem;
            border-radius: 12px;
          }
          .scroll-left {
            animation-duration: 26s;
          }
          .scroll-right {
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}
