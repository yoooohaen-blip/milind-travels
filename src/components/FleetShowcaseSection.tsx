"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLEET_TIERS, CONTACT_INFO } from "@/data/content";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Car,
} from "lucide-react";

interface FleetShowcaseSectionProps {
  isHomePage?: boolean;
}

export default function FleetShowcaseSection({ isHomePage = false }: FleetShowcaseSectionProps) {
  const [activeTierId, setActiveTierId] = useState<string>(FLEET_TIERS[0].id);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [carY, setCarY] = useState<number>(100);
  const [trackBounds, setTrackBounds] = useState<{ top: number; height: number }>({ top: 100, height: 1200 });
  const [tierOffsets, setTierOffsets] = useState<{ [id: string]: number }>({});
  const tierRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Synchronized scroll tracking and dynamic car position calculation
  useEffect(() => {
    const handleScrollAndMeasure = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 1. Measure all tier cards to get their vertical centers relative to container top
      const offsets: { [id: string]: number } = {};
      FLEET_TIERS.forEach((tier) => {
        const el = tierRefs.current[tier.id];
        if (el) {
          const r = el.getBoundingClientRect();
          offsets[tier.id] = (r.top + r.height / 2) - containerRect.top;
        }
      });
      setTierOffsets(offsets);

      const firstY = offsets[FLEET_TIERS[0].id] ?? 120;
      const lastY = offsets[FLEET_TIERS[FLEET_TIERS.length - 1].id] ?? (containerRect.height - 120);
      const span = Math.max(lastY - firstY, 1);
      setTrackBounds({ top: firstY, height: span });

      // 2. Viewport focal line: where the user's attention is focused (~48% of screen)
      const focalY = windowHeight * 0.48;
      const currentFocalY = focalY - containerRect.top;

      // 3. Clamped car position along the vertical spine
      const targetCarY = Math.min(Math.max(currentFocalY, firstY), lastY);
      setCarY(targetCarY);

      // 4. Progress ratio (0 to 1) from first tier to last tier
      const progress = (targetCarY - firstY) / span;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      // 5. Active tier based on the car's current position
      let currentId = FLEET_TIERS[0].id;
      for (let i = 0; i < FLEET_TIERS.length; i++) {
        const tier = FLEET_TIERS[i];
        const y = offsets[tier.id];
        if (y !== undefined && targetCarY >= y - 35) {
          currentId = tier.id;
        }
      }
      setActiveTierId(currentId);
    };

    handleScrollAndMeasure();
    window.addEventListener("scroll", handleScrollAndMeasure, { passive: true });
    window.addEventListener("resize", handleScrollAndMeasure, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollAndMeasure);
      window.removeEventListener("resize", handleScrollAndMeasure);
    };
  }, []);

  const scrollToTier = (id: string) => {
    const el = tierRefs.current[id];
    if (el) {
      const r = el.getBoundingClientRect();
      const yOffset = -window.innerHeight * 0.48 + r.height / 2;
      const targetScroll = window.pageYOffset + r.top + yOffset;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeIndex = FLEET_TIERS.findIndex((t) => t.id === activeTierId);
  const activeTier = FLEET_TIERS[activeIndex] || FLEET_TIERS[0];
  const hitCount = FLEET_TIERS.filter((t) => {
    const y = tierOffsets[t.id];
    return y !== undefined && carY >= y - 25;
  }).length || 1;

  return (
    <section
      ref={containerRef}
      id="fleet-showcase"
      className="section-py surface-dark"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background Subtle Radial Lighting */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-champagne)",
                marginBottom: "0.6rem",
              }}
            >
              {isHomePage ? "Mumbai Enterprise Fleet" : "Mumbai Commercial Fleet Specifications"}
            </span>
            <h2
              className="text-section-title"
              style={{ color: "#FFFFFF", marginBottom: isHomePage ? "0.6rem" : "1rem", lineHeight: 1.2 }}
            >
              {isHomePage ? (
                <>
                  Multi-Tier Corporate Fleet
                  <br />
                  Engineered for Every Requirement.
                </>
              ) : (
                <>
                  Engineered Fleet Architecture
                  <br />
                  for Every Corporate Application.
                </>
              )}
            </h2>
            <p className="text-lead" style={{ color: "#C8D3DB", marginBottom: 0 }}>
              {isHomePage
                ? "Scroll through our passenger tiers—from C-suite executive sedans and luxury MPVs to 24/7 staff shuttles and daily commute fleets."
                : "Scroll through our four distinct corporate passenger tiers—from C-suite executive sedans and multi-passenger luxury MPVs to 24/7 staff shuttles and cost-effective daily commute cabs."}
            </p>
          </div>

          {isHomePage && (
            <Link href="/fleet" className="btn btn-champagne">
              <span>View Full Fleet Specifications</span>
              <ArrowRight size={15} />
            </Link>
          )}
        </div>
      </div>

      {/* =========================================================================
          Sticky Floating Fleet Tier HUD / Scrub Bar (Synced to Scroll)
          ========================================================================= */}
      <div
        style={{
          position: "sticky",
          top: "var(--navbar-offset, 76px)",
          transition: "top 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 40,
          padding: "0.85rem 0",
          backgroundColor: "rgba(8, 21, 33, 0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(199, 166, 120, 0.25)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          marginBottom: "3rem",
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {/* Left: Active Tier Telemetry Readout */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(199, 166, 120, 0.15)",
                  border: "1px solid rgba(199, 166, 120, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-champagne)",
                  flexShrink: 0,
                }}
              >
                <Car size={18} />
              </div>

              <div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--color-slate-gray)",
                    display: "block",
                  }}
                >
                  Active Fleet Tier (Tier 0{activeIndex + 1} of 04)
                </span>
                <strong
                  style={{
                    fontSize: "0.98rem",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {activeTier.category}
                </strong>
              </div>

              {/* Real-time Tiers Hit Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.22rem 0.6rem",
                  borderRadius: "20px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  backgroundColor: hitCount === 4 ? "rgba(16, 185, 129, 0.15)" : "rgba(199, 166, 120, 0.15)",
                  color: hitCount === 4 ? "#059669" : "var(--color-champagne)",
                  border: hitCount === 4 ? "1px solid rgba(16, 185, 129, 0.35)" : "1px solid rgba(199, 166, 120, 0.3)",
                }}
              >
                <CheckCircle2 size={12} strokeWidth={2.5} />
                <span>{hitCount}/4 Tiers Viewed</span>
              </div>
            </div>

            {/* Right: Interactive Tier Scrub Pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                flexWrap: "wrap",
              }}
              className="fleet-scrub-pills"
            >
              {FLEET_TIERS.map((tier, idx) => {
                const isSelected = tier.id === activeTierId;
                const isItemHit = tierOffsets[tier.id] ? carY >= tierOffsets[tier.id] - 25 : idx === 0;

                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => scrollToTier(tier.id)}
                    style={{
                      padding: "0.4rem 0.85rem",
                      borderRadius: "20px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      border: isSelected
                        ? "1px solid var(--color-champagne)"
                        : isItemHit
                        ? "1px solid rgba(199, 166, 120, 0.35)"
                        : "1px solid rgba(255, 255, 255, 0.12)",
                      backgroundColor: isSelected
                        ? "var(--color-champagne)"
                        : isItemHit
                        ? "rgba(199, 166, 120, 0.1)"
                        : "rgba(255, 255, 255, 0.05)",
                      color: isSelected ? "#081521" : isItemHit ? "#FFFFFF" : "#C8D3DB",
                      boxShadow: isSelected
                        ? "0 4px 14px rgba(199, 166, 120, 0.35)"
                        : "none",
                      transition: "all 200ms ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <span>0{idx + 1}</span>
                    <span>{tier.category.split(" ")[0]}</span>
                    {isItemHit && (
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: isSelected ? "#081521" : "#10B981",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Liquid Gold Progress Track */}
          <div
            style={{
              marginTop: "0.7rem",
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${scrollProgress * 100}%`,
                background: "linear-gradient(90deg, var(--color-champagne) 0%, var(--color-champagne-light) 100%)",
                transition: "width 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          Compact Scrollable Tier Highway Track with Traveling Car
          ========================================================================= */}
      <div className="site-container" style={{ position: "relative" }}>
        {/* Left Vertical Spine Track */}
        <div
          className="fleet-spine-track"
          style={{
            position: "absolute",
            top: `${trackBounds.top}px`,
            height: `${trackBounds.height}px`,
            left: "40px",
            width: "3px",
            backgroundColor: "rgba(199, 166, 120, 0.2)",
            borderRadius: "3px",
            zIndex: 1,
          }}
        >
          {/* Liquid Gold Fill behind traveling car */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${Math.max(0, carY - trackBounds.top)}px`,
              background: "linear-gradient(180deg, var(--color-champagne) 0%, var(--color-champagne-dark) 100%)",
              boxShadow: "0 0 12px rgba(199, 166, 120, 0.8)",
              borderRadius: "3px",
              transition: "height 0.05s linear",
            }}
          />
        </div>

        {/* Traveling Executive Car Beacon */}
        <div
          className="fleet-car-beacon"
          style={{
            position: "absolute",
            left: "40px",
            top: `${carY}px`,
            transform: "translate(-50%, -50%)",
            zIndex: 25,
            pointerEvents: "none",
            transition: "top 60ms ease-out",
          }}
        >
          {/* Ambient Car Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "65px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(199, 166, 120, 0.45) 0%, rgba(199, 166, 120, 0) 70%)",
              filter: "blur(6px)",
            }}
          />

          {/* Top-Down Luxury Executive Sedan Chauffeur SVG */}
          <svg
            width="36"
            height="62"
            viewBox="0 0 42 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.5))" }}
          >
            <defs>
              <linearGradient id="fleetHeadlightLeft" x1="50%" y1="0%" x2="20%" y2="100%">
                <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#C7A678" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C7A678" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="fleetHeadlightRight" x1="50%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#C7A678" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C7A678" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="fleetCarBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#081521" />
                <stop offset="50%" stopColor="#1B3147" />
                <stop offset="100%" stopColor="#081521" />
              </linearGradient>
              <linearGradient id="fleetGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2C7A0" />
                <stop offset="50%" stopColor="#C7A678" />
                <stop offset="100%" stopColor="#9C7B4F" />
              </linearGradient>
            </defs>

            {/* Downward Beaming Headlights */}
            <polygon points="12,50 -2,74 18,74" fill="url(#fleetHeadlightLeft)" />
            <polygon points="30,50 24,74 44,74" fill="url(#fleetHeadlightRight)" />

            {/* Mirrors */}
            <rect x="4" y="32" width="4" height="6" rx="2" fill="#081521" stroke="#C7A678" strokeWidth="0.8" />
            <rect x="34" y="32" width="4" height="6" rx="2" fill="#081521" stroke="#C7A678" strokeWidth="0.8" />

            {/* Chassis */}
            <path
              d="M12 6 C12 4, 30 4, 30 6 C33 12, 35 22, 35 34 C35 44, 33 50, 29 52 C25 53.5, 17 53.5, 13 52 C9 50, 7 44, 7 34 C7 22, 9 12, 12 6 Z"
              fill="url(#fleetCarBody)"
              stroke="url(#fleetGoldTrim)"
              strokeWidth="1.4"
            />

            {/* Taillights */}
            <rect x="11" y="5.5" width="5" height="2" rx="1" fill="#EF4444" />
            <rect x="26" y="5.5" width="5" height="2" rx="1" fill="#EF4444" />

            {/* Sunroof */}
            <rect x="15" y="21" width="12" height="12" rx="2" fill="#081521" stroke="#C7A678" strokeWidth="0.6" />
            <circle cx="21" cy="27" r="2" fill="#DFC399" />

            {/* Windshield */}
            <path d="M14 36 L28 36 L30 43 L12 43 Z" fill="#223C54" stroke="#102334" strokeWidth="0.6" />

            {/* Front LED Headlights */}
            <rect x="10" y="49" width="5" height="3" rx="1" fill="#FFFFFF" />
            <rect x="27" y="49" width="5" height="3" rx="1" fill="#FFFFFF" />
          </svg>

          {/* Floating Pill Centered Above Car */}
          <div
            className="fleet-car-hud"
            style={{
              position: "absolute",
              bottom: "calc(100% + 6px)",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              backgroundColor: "rgba(8, 21, 33, 0.94)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(199, 166, 120, 0.45)",
              padding: "0.18rem 0.55rem",
              borderRadius: "14px",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10B981" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#FFFFFF" }}>
              Tier 0{activeIndex + 1}
            </span>
          </div>
        </div>

        {/* Compact Tier Dossiers List (Height only ~285px per card - sleek executive sizing!) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", position: "relative" }}>
          {FLEET_TIERS.map((tier, idx) => {
            const isCurrent = tier.id === activeTierId;
            const nodeY = tierOffsets[tier.id];
            const isHit = nodeY !== undefined ? carY >= nodeY - 25 : idx === 0;
            const isImpact = nodeY !== undefined ? Math.abs(carY - nodeY) < 35 : false;

            return (
              <div
                key={tier.id}
                ref={(el) => {
                  tierRefs.current[tier.id] = el;
                }}
                id={`fleet-tier-${tier.id}`}
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className="fleet-tier-row"
              >
                {/* Milestone Node on Left Spine */}
                <div
                  onClick={() => scrollToTier(tier.id)}
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    cursor: "pointer",
                    width: isCurrent ? "52px" : "44px",
                    height: isCurrent ? "52px" : "44px",
                    borderRadius: "50%",
                    background: isHit
                      ? "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.98) 0%, rgba(225, 205, 175, 0.8) 60%, rgba(199, 166, 120, 0.95) 100%)"
                      : "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(240, 235, 225, 0.5) 60%, rgba(200, 190, 180, 0.6) 100%)",
                    border: isHit ? "2px solid #FFFFFF" : "1.5px solid rgba(255, 255, 255, 0.6)",
                    boxShadow: isHit
                      ? "0 0 25px rgba(199, 166, 120, 0.6), 0 8px 18px rgba(0, 0, 0, 0.3)"
                      : "0 4px 12px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(12px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 300ms ease",
                  }}
                  className="fleet-node-bubble"
                >
                  {isHit && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-4px",
                        right: "-4px",
                        backgroundColor: "var(--color-midnight-navy)",
                        border: "1.5px solid var(--color-champagne)",
                        color: "var(--color-champagne)",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 10px rgba(199, 166, 120, 0.8)",
                        zIndex: 12,
                      }}
                    >
                      <CheckCircle2 size={11} strokeWidth={2.5} />
                    </div>
                  )}

                  {isImpact && (
                    <div
                      style={{
                        position: "absolute",
                        inset: "-12px",
                        borderRadius: "50%",
                        border: "2px solid var(--color-champagne)",
                        animation: "tierImpact 1s infinite ease-out",
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: isCurrent ? "0.92rem" : "0.8rem",
                      fontWeight: 800,
                      color: isHit ? "var(--color-midnight-navy)" : "#4A5568",
                      lineHeight: 1,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: isHit ? "var(--color-champagne-dark)" : "#718096",
                      marginTop: "1px",
                    }}
                  >
                    Tier
                  </span>
                </div>

                {/* Horizontal Connector Line to Card */}
                <div
                  style={{
                    position: "absolute",
                    left: "40px",
                    width: "44px",
                    height: isHit ? "2.5px" : "1.5px",
                    backgroundColor: isHit ? "var(--color-champagne)" : "rgba(199, 166, 120, 0.25)",
                    boxShadow: isHit ? "0 0 8px rgba(199, 166, 120, 0.7)" : "none",
                    zIndex: 2,
                    transition: "all 300ms ease",
                  }}
                  className="fleet-connector-line"
                />

                {/* =========================================================================
                    Compact Two-Column Tier Card (Height ~285px - Sized with Precision!)
                    ========================================================================= */}
                <div
                  style={{
                    marginLeft: "84px",
                    width: "calc(100% - 84px)",
                    minHeight: "285px",
                    backgroundColor: "rgba(11, 26, 40, 0.88)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: isCurrent
                      ? "1.5px solid rgba(199, 166, 120, 0.75)"
                      : isHit
                      ? "1px solid rgba(199, 166, 120, 0.35)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: isCurrent
                      ? "0 18px 45px rgba(0, 0, 0, 0.55), 0 0 25px rgba(199, 166, 120, 0.22)"
                      : "0 8px 25px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    transition: "all 350ms cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isCurrent ? "translateY(-3px)" : "none",
                  }}
                  className="fleet-compact-card"
                >
                  {/* Left Column: Compact Vehicle Photograph (38% width) */}
                  <div
                    style={{
                      position: "relative",
                      width: "38%",
                      minHeight: "285px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                    className="fleet-card-media"
                  >
                    <Image
                      src={tier.imageSrc}
                      alt={tier.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 38vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 45%",
                        transform: isCurrent ? "scale(1.04)" : "scale(1)",
                        transition: "transform 700ms ease",
                      }}
                      priority={idx <= 1}
                    />

                    {/* Gradient Lighting Scrim */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(8, 21, 33, 0.25) 0%, rgba(8, 21, 33, 0.65) 60%, rgba(11, 26, 40, 0.95) 100%)",
                      }}
                    />

                    {/* Top Floating Glass Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0.85rem",
                        left: "1rem",
                        right: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "rgba(8, 21, 33, 0.85)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(199, 166, 120, 0.4)",
                          color: "var(--color-champagne)",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Sparkles size={10} />
                        <span>Tier 0{idx + 1}</span>
                      </span>

                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.3rem",
                          fontWeight: 900,
                          color: "rgba(255, 255, 255, 0.22)",
                        }}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Bottom Capacity Glass HUD */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0.85rem",
                        left: "1rem",
                        right: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        flexWrap: "wrap",
                        zIndex: 2,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          backgroundColor: "rgba(8, 21, 33, 0.88)",
                          backdropFilter: "blur(10px)",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "6px",
                          border: "1px solid rgba(199, 166, 120, 0.3)",
                          color: "#FFFFFF",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                        }}
                      >
                        <Users size={12} style={{ color: "var(--color-champagne)" }} />
                        <span>{tier.capacity.passengers}</span>
                      </div>

                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          backgroundColor: "rgba(8, 21, 33, 0.88)",
                          backdropFilter: "blur(10px)",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "6px",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          color: "#C8D3DB",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                        }}
                      >
                        <Briefcase size={12} style={{ color: "var(--color-champagne)" }} />
                        <span>{tier.capacity.luggage.split("+")[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Compact Specifications & Action Strip (62% width) */}
                  <div
                    style={{
                      width: "62%",
                      padding: "1.2rem 1.6rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    className="fleet-card-body"
                  >
                    <div>
                      {/* Status Pill & Category Headline */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: isHit ? "#10B981" : "var(--color-slate-gray)",
                            backgroundColor: isHit ? "rgba(16, 185, 129, 0.12)" : "rgba(255, 255, 255, 0.05)",
                            padding: "0.12rem 0.45rem",
                            borderRadius: "8px",
                          }}
                        >
                          {isHit ? "✓ Specification Active" : `Approaching Tier 0${idx + 1}`}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "1.22rem",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          lineHeight: 1.25,
                          marginBottom: "0.25rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {tier.category}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-champagne)",
                          fontWeight: 600,
                          lineHeight: 1.35,
                          marginBottom: "0.6rem",
                        }}
                      >
                        {tier.tagline}
                      </p>

                      {/* Typical Models Pill Strip */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          flexWrap: "wrap",
                          marginBottom: "0.65rem",
                        }}
                      >
                        <span style={{ fontSize: "0.68rem", color: "#81909A", fontWeight: 700, textTransform: "uppercase" }}>
                          Models:
                        </span>
                        {tier.typicalModels.map((model) => (
                          <span
                            key={model}
                            style={{
                              fontSize: "0.72rem",
                              backgroundColor: "rgba(255, 255, 255, 0.06)",
                              border: "1px solid rgba(199, 166, 120, 0.25)",
                              padding: "0.15rem 0.5rem",
                              borderRadius: "4px",
                              color: "#FFFFFF",
                              fontWeight: 600,
                            }}
                          >
                            {model}
                          </span>
                        ))}
                      </div>

                      {/* Top 2 Core Amenities (Compact List) */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "0.75rem" }}>
                        {tier.highlights.slice(0, 2).map((item, hIdx) => (
                          <div
                            key={hIdx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.45rem",
                              fontSize: "0.78rem",
                              color: "#CBD5E1",
                            }}
                          >
                            <CheckCircle2 size={12} style={{ color: "var(--color-champagne)", flexShrink: 0 }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Strip */}
                    <div
                      style={{
                        paddingTop: "0.7rem",
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.65rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                        <Link
                          href={`/calculator?tier=${tier.id}`}
                          className="btn btn-champagne"
                          style={{ padding: "0.45rem 1rem", fontSize: "0.78rem" }}
                        >
                          <span>Reserve Tier</span>
                          <ArrowRight size={13} />
                        </Link>

                        <Link
                          href="/fleet"
                          className="btn btn-outline-dark"
                          style={{
                            padding: "0.45rem 0.85rem",
                            fontSize: "0.78rem",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            color: "#FFFFFF",
                          }}
                        >
                          <span>Tier Dossier</span>
                          <ArrowUpRight size={12} />
                        </Link>
                      </div>

                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-champagne)",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                        className="hidden-mobile"
                      >
                        Dispatch: {CONTACT_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Styles and Keyframe Animations */}
      <style jsx>{`
        @keyframes tierImpact {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @media (max-width: 860px) {
          :global(.fleet-spine-track) {
            left: 24px !important;
          }
          :global(.fleet-car-beacon) {
            left: 24px !important;
          }
          :global(.fleet-node-bubble) {
            left: 24px !important;
            width: 44px !important;
            height: 44px !important;
          }
          :global(.fleet-node-bubble span:first-child) {
            font-size: 0.8rem !important;
          }
          :global(.fleet-connector-line) {
            left: 24px !important;
            width: 32px !important;
          }
          :global(.fleet-compact-card) {
            margin-left: 56px !important;
            width: calc(100% - 56px) !important;
            flex-direction: column !important;
            min-height: auto !important;
          }
          :global(.fleet-card-media) {
            width: 100% !important;
            height: 180px !important;
            min-height: 180px !important;
          }
          :global(.fleet-card-body) {
            width: 100% !important;
            padding: 1.25rem !important;
          }
          :global(.fleet-car-hud) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

