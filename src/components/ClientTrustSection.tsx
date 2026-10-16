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
    ...HISTORICAL_CLIENTS.slice(6),
    ...HISTORICAL_CLIENTS.slice(0, 6),
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
                    filter: "grayscale(100%) contrast(115%) opacity(80%)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
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
                    filter: "grayscale(100%) contrast(115%) opacity(80%)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                  }}
                  className="client-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container">
        {/* Enterprise Governance Footnote */}
        <div
          style={{
            marginTop: "3rem",
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
          border: 1px solid rgba(129, 144, 154, 0.16);
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
          border-color: rgba(199, 166, 120, 0.45);
          box-shadow: 0 10px 24px rgba(8, 21, 33, 0.08), 0 0 16px rgba(199, 166, 120, 0.15);
        }

        .logo-capsule:hover :global(.client-logo-img) {
          filter: grayscale(0%) opacity(100%) !important;
          transform: scale(1.05);
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
