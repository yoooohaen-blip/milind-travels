"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLEET_TIERS, CONTACT_INFO } from "@/data/content";
import { ArrowRight } from "lucide-react";

const SHORT_LABELS: Record<string, string> = {
  "premium-mpv": "Premium MPVs",
  "economy-staff-cab": "Economy Cabs",
  "workforce-coach": "Corporate Shuttles",
};

const getShortLabel = (id: string, category: string) =>
  SHORT_LABELS[id] ?? category.replace(/\s*\(.*\)\s*/, "").split("&")[0].trim();

export default function FleetShowcaseSection() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [segmentProgress, setSegmentProgress] = useState<number>(0);
  const total = FLEET_TIERS.length;

  // Scroll-driven tier switching: the stage is (total × 100vh) tall and the
  // inner panel is sticky, so each viewport-height of scroll advances one tier.
  useEffect(() => {
    const onScroll = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999);
      const raw = progress * total;
      setActiveIndex(Math.floor(raw));
      setSegmentProgress(raw - Math.floor(raw));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [total]);

  const scrollToTier = (index: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const stageTop = stage.getBoundingClientRect().top + window.scrollY;
    const scrollable = stage.offsetHeight - window.innerHeight;
    const target = stageTop + (scrollable * (index + 0.05)) / total;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const tier = FLEET_TIERS[activeIndex];

  return (
    <section
      id="fleet-tiers-showcase"
      className="surface-dark"
      style={{ position: "relative", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
    >
      {/* Intro */}
      <div className="site-container" style={{ paddingTop: "clamp(4rem, 8vw, 6rem)", paddingBottom: "1rem" }}>
        <div style={{ maxWidth: "780px" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--color-champagne)",
              marginBottom: "0.75rem",
            }}
          >
            Mumbai Commercial Fleet
          </span>
          <h2 className="text-section-title" style={{ color: "#FFFFFF", marginBottom: "0.75rem", lineHeight: 1.2 }}>
            Three Corporate Fleet Tiers.
          </h2>
          <p className="text-lead" style={{ color: "#C8D3DB", marginBottom: 0 }}>
            Operating 80+ owned vehicles and approximately 500 attached vehicles, enabling us to cater to a wide range of corporate transportation requirements across Mumbai.
          </p>
        </div>
      </div>

      {/* =========================== DESKTOP: sticky split-screen =========================== */}
      <div
        ref={stageRef}
        className="fleet-split-stage"
        style={{ position: "relative", height: `${total * 100}vh` }}
      >
        <div
          className="fleet-split-sticky"
          style={{
            position: "sticky",
            top: "var(--navbar-offset, 76px)",
            height: "calc(100vh - var(--navbar-offset, 76px))",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="site-container"
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "center",
            }}
          >
            {/* Left: crossfading image stack */}
            <div
              style={{
                position: "relative",
                height: "min(72vh, 620px)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 30px 70px rgba(0, 0, 0, 0.45)",
                backgroundColor: "#0D1721",
              }}
            >
              {FLEET_TIERS.map((t, idx) => (
                <div
                  key={t.id}
                  aria-hidden={idx !== activeIndex}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: idx === activeIndex ? "scale(1)" : "scale(1.06)",
                    transition: "opacity 700ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <Image
                    src={t.imageSrc}
                    alt={t.imageAlt}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "center 45%" }}
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Soft bottom scrim for the counter */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(8,21,33,0) 55%, rgba(8,21,33,0.75) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Plain-text counter (no pill) */}
              <div
                style={{
                  position: "absolute",
                  left: "1.75rem",
                  bottom: "1.5rem",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <span style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }}>0{activeIndex + 1}</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
                  / 0{total}
                </span>
              </div>
            </div>

            {/* Right: tabs + text */}
            <div>
              {/* Text tabs with underline — no pill containers */}
              <div
                role="tablist"
                aria-label="Fleet tiers"
                style={{
                  display: "flex",
                  gap: "1.75rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                  marginBottom: "2.25rem",
                  flexWrap: "wrap",
                }}
              >
                {FLEET_TIERS.map((t, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={t.id}
                      id={`fleet-tab-${t.id}`}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => scrollToTier(idx)}
                      style={{
                        position: "relative",
                        background: "none",
                        border: "none",
                        padding: "0 0 0.85rem 0",
                        cursor: "pointer",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: isActive ? "#FFFFFF" : "rgba(200, 211, 219, 0.55)",
                        transition: "color 300ms ease",
                      }}
                    >
                      {getShortLabel(t.id, t.category)}
                      {/* Underline: fills across the active tab as you scroll through it */}
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: "-1px",
                          height: "2px",
                          width: isActive ? `${Math.max(18, segmentProgress * 100)}%` : idx < activeIndex ? "100%" : "0%",
                          backgroundColor: isActive ? "var(--color-champagne)" : "rgba(199, 166, 120, 0.35)",
                          transition: "width 150ms linear",
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Content — remounts per tier to replay the entry animation */}
              <div key={tier.id} className="fleet-split-content">
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 3.4vw, 3rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    marginBottom: "1rem",
                  }}
                >
                  {tier.category.replace(/\s*\(.*\)\s*/, "")}
                </h3>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "#C8D3DB", marginBottom: "2rem", maxWidth: "520px" }}>
                  {tier.tagline} Ideal for {tier.corporateUseCases.slice(0, 2).join(" and ").toLowerCase()}.
                </p>

                {/* Spec rows — plain typography separated by hairlines */}
                <dl style={{ margin: 0, marginBottom: "2.25rem", maxWidth: "520px" }}>
                  {[
                    { label: "Seating", value: tier.capacity.passengers },
                    { label: "Luggage", value: tier.capacity.luggage },
                    { label: "Models", value: tier.typicalModels.join(" · ") },
                    { label: "Comfort", value: tier.highlights[0] },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "110px 1fr",
                        gap: "1rem",
                        padding: "0.8rem 0",
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <dt
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--color-champagne)",
                          paddingTop: "0.15rem",
                        }}
                      >
                        {row.label}
                      </dt>
                      <dd style={{ margin: 0, fontSize: "0.92rem", color: "#E2E8F0", lineHeight: 1.5 }}>{row.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* CTA — circular arrow + text, like the reference */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
                  <Link
                    id={`fleet-reserve-${tier.id}`}
                    href={`/calculator?tier=${tier.id}`}
                    className="fleet-split-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    <span
                      className="fleet-split-cta-circle"
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-champagne)",
                        color: "#081521",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 250ms ease",
                      }}
                    >
                      <ArrowRight size={18} />
                    </span>
                    Reserve this tier
                  </Link>

                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    style={{ fontSize: "0.88rem", color: "rgba(200, 211, 219, 0.75)", textDecoration: "none" }}
                  >
                    or call dispatch {CONTACT_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================== MOBILE: stacked image + text =========================== */}
      <div className="fleet-split-mobile site-container" style={{ display: "none", paddingBottom: "4rem" }}>
        {FLEET_TIERS.map((t, idx) => (
          <article key={t.id} style={{ marginTop: idx === 0 ? "1.5rem" : "3.5rem" }}>
            <div style={{ position: "relative", height: "240px", borderRadius: "18px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <Image src={t.imageSrc} alt={t.imageAlt} fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
            <span
              style={{
                display: "block",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-champagne)",
                marginBottom: "0.5rem",
              }}
            >
              Tier 0{idx + 1}
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "0.6rem" }}>
              {t.category.replace(/\s*\(.*\)\s*/, "")}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#C8D3DB", lineHeight: 1.6, marginBottom: "1rem" }}>{t.tagline}</p>
            <p style={{ fontSize: "0.88rem", color: "#E2E8F0", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              {t.capacity.passengers} · {t.capacity.luggage}
              <br />
              {t.typicalModels.join(" · ")}
            </p>
            <Link
              href={`/calculator?tier=${t.id}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-champagne)", fontWeight: 600, textDecoration: "none" }}
            >
              Reserve this tier <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>

      <style jsx>{`
        :global(.fleet-split-content) {
          animation: fleetTextIn 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fleetTextIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.fleet-split-cta:hover .fleet-split-cta-circle) {
          transform: translateX(4px);
        }
        @media (max-width: 860px) {
          :global(.fleet-split-stage) {
            display: none;
          }
          :global(.fleet-split-mobile) {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
