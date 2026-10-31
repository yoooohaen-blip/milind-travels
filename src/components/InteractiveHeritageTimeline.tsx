"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MapPin,
  Car,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface MilestoneItem {
  year: string;
  era: string;
  title: string;
  headline: string;
  desc: string;
  image: string;
  fleetPill: string;
  corridorPill: string;
}

const MILESTONES: MilestoneItem[] = [
  {
    year: "2000",
    era: "Era 01 • The Inception",
    title: "Inception with 1 Vehicle in April 2000",
    headline: "Journey began with one vehicle serving Call Centres & BPO companies.",
    desc: "Established in April 2000 as a proprietorship firm with just one vehicle. Built on operational excellence and customer satisfaction, initiating our partnership with Radius that continues to date.",
    image: "/images/timeline/timeline-2000.jpg",
    fleetPill: "1 Vehicle • Call Centre & BPO Services",
    corridorPill: "Radius Partner (Since 2000 to till date)",
  },
  {
    year: "2006",
    era: "Era 02 • eClinicalWorks Scaling",
    title: "eClinicalWorks Fleet Scaling (5 to 200+ Vehicles)",
    headline: "Single vendor operated the entire operation.",
    desc: "Partnered with eClinicalWorks in 2006. Fleet rapidly increased from 5 vehicles to 200 plus vehicles before lockdown, with Milind Travels operating as the single vendor for the entire operation.",
    image: "/images/timeline/timeline-2006.jpg",
    fleetPill: "Scaled from 5 to 200+ Vehicles",
    corridorPill: "Single Vendor Corporate Operation",
  },
  {
    year: "2014",
    era: "Era 03 • 10-Year Enterprise Partnerships",
    title: "Decade of Trust with Global Leaders",
    headline: "10+ years partnership with Accenture, Integreon & Bizmatic.",
    desc: "Solidified long-standing corporate mobility partnerships with Accenture, Integreon, and Bizmatic, providing round-the-clock shift logistics and female employee night-shift escort compliance.",
    image: "/images/timeline/timeline-2012.jpg",
    fleetPill: "Sedans, MPVs & Corporate Minibuses",
    corridorPill: "Accenture • Integreon • Bizmatic",
  },
  {
    year: "2018",
    era: "Era 04 • On-Site Supervision Model",
    title: "Kailas Business Park & On-Site Supervisors",
    headline: "Dedicated supervisors deployed on each client site to monitor & live track.",
    desc: "Corporate communications headquartered at A-808, Kailas Business Park, Vikhroli West, with dedicated supervisors stationed directly on each client site for real-time trip check-ins and live tracking.",
    image: "/images/timeline/timeline-2018.jpg",
    fleetPill: "Toyota Innova Crysta & Corporate Shuttles",
    corridorPill: "Western, Eastern & Harbour Zones",
  },
  {
    year: "2025",
    era: "Era 05 • Private Limited Milestone",
    title: "Transition to Milind Travels Private Limited",
    headline: "80+ owned vehicles and approximately 500 attached vehicles.",
    desc: "In August 2025, transitioned into Milind Travels Private Limited. Today operating 80+ owned and ~500 attached vehicles (hatchbacks, sedans, SUVs, and premium vehicles) 24/7/365 across Mumbai.",
    image: "/images/timeline/timeline-2026.jpg",
    fleetPill: "80+ Owned & ~500 Attached Vehicles",
    corridorPill: "24 Hours • 7 Days • 365 Days a Year",
  },
];

export default function InteractiveHeritageTimeline() {
  const [activeYear, setActiveYear] = useState<string>("2000");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [carY, setCarY] = useState<number>(100);
  const [trackBounds, setTrackBounds] = useState<{ top: number; height: number }>({ top: 100, height: 1600 });
  const [nodeOffsets, setNodeOffsets] = useState<{ [year: string]: number }>({});
  const milestoneRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackContainerRef = useRef<HTMLDivElement | null>(null);

  // Synchronized scroll tracking and dynamic car position calculation
  useEffect(() => {
    const handleScrollAndMeasure = () => {
      const trackContainer = trackContainerRef.current;
      if (!trackContainer) return;

      const trackContainerRect = trackContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 1. Measure all milestone rows to get their vertical centers relative to track container top
      const offsets: { [year: string]: number } = {};
      MILESTONES.forEach((m) => {
        const el = milestoneRefs.current[m.year];
        if (el) {
          const r = el.getBoundingClientRect();
          offsets[m.year] = (r.top + r.height / 2) - trackContainerRect.top;
        }
      });
      setNodeOffsets(offsets);

      const firstY = offsets[MILESTONES[0].year] ?? 0;
      const lastY = offsets[MILESTONES[MILESTONES.length - 1].year] ?? trackContainerRect.height;
      const span = Math.max(lastY - firstY, 1);
      setTrackBounds({ top: firstY, height: span });

      // 2. Viewport focal line: where the user's attention is focused (~48% of screen)
      const focalY = windowHeight * 0.48;
      const currentFocalY = focalY - trackContainerRect.top;

      // 3. Clamped car position along the vertical spine
      const targetCarY = Math.min(Math.max(currentFocalY, firstY), lastY);
      setCarY(targetCarY);

      // 4. Progress ratio (0 to 1) from first milestone to last milestone
      const progress = (targetCarY - firstY) / span;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      // 5. Active milestone based on the car's current position
      let currentYear = MILESTONES[0].year;
      for (let i = 0; i < MILESTONES.length; i++) {
        const m = MILESTONES[i];
        const y = offsets[m.year];
        if (y !== undefined && targetCarY >= y - 35) {
          currentYear = m.year;
        }
      }
      setActiveYear(currentYear);
    };

    handleScrollAndMeasure();
    window.addEventListener("scroll", handleScrollAndMeasure, { passive: true });
    window.addEventListener("resize", handleScrollAndMeasure, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollAndMeasure);
      window.removeEventListener("resize", handleScrollAndMeasure);
    };
  }, []);

  const scrollToYear = (year: string) => {
    const el = milestoneRefs.current[year];
    if (el) {
      const r = el.getBoundingClientRect();
      const yOffset = -window.innerHeight * 0.48 + r.height / 2;
      const targetScroll = window.pageYOffset + r.top + yOffset;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeIndex = MILESTONES.findIndex((m) => m.year === activeYear);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* =========================================================================
          Sticky Floating Timeline HUD / Year Time-Travel Scrub Bar
          ========================================================================= */}
      <div
        style={{
          position: "sticky",
          top: "var(--navbar-offset, 76px)",
          transition: "top 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 40,
          padding: "1rem 0",
          backgroundColor: "rgba(250, 247, 242, 0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(199, 166, 120, 0.25)",
          boxShadow: "0 8px 24px rgba(8, 21, 33, 0.04)",
          marginBottom: "3.5rem",
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
            {/* Left: Active Era Display & Milestones Counter */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "var(--color-midnight-navy)",
                  letterSpacing: "-0.02em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>{activeYear}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-champagne-dark)" }}>
                  ({MILESTONES[activeIndex]?.title.split(" ")[0]} Milestone)
                </span>
              </div>
            </div>

            {/* Right: Year Quick-Travel Interactive Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
              {MILESTONES.map((item) => {
                const isSelected = item.year === activeYear;
                const isItemHit = nodeOffsets[item.year] ? carY >= nodeOffsets[item.year] - 25 : item.year === "2000";
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => scrollToYear(item.year)}
                    style={{
                      padding: "0.4rem 0.85rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      cursor: "pointer",
                      border: isSelected
                        ? "1px solid var(--color-champagne)"
                        : isItemHit
                        ? "1px solid rgba(199, 166, 120, 0.4)"
                        : "1px solid transparent",
                      backgroundColor: isSelected
                        ? "var(--color-midnight-navy)"
                        : isItemHit
                        ? "rgba(199, 166, 120, 0.1)"
                        : "rgba(8, 21, 33, 0.04)",
                      color: isSelected ? "#FFFFFF" : isItemHit ? "var(--color-midnight-navy)" : "var(--color-slate-gray)",
                      boxShadow: isSelected
                        ? "0 4px 14px rgba(8, 21, 33, 0.16)"
                        : "none",
                      transition: "all var(--transition-fast)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <span>{item.year}</span>
                    {isItemHit && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: isSelected ? "var(--color-champagne)" : "#10B981",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slim Hairline Progress Track */}
          <div
            style={{
              marginTop: "0.75rem",
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(199, 166, 120, 0.2)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${scrollProgress * 100}%`,
                backgroundColor: "var(--color-champagne)",
                transition: "width 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          Two-Sided Center-Spine Timeline with Travelling Fleet Car
          ========================================================================= */}
      <div style={{ position: "relative", minHeight: "1000px" }}>
        {/* Ambient Warm Golden Glows */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199, 166, 120, 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "2%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199, 166, 120, 0.1) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div
          ref={trackContainerRef}
          style={{
            position: "relative",
            maxWidth: "1140px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
          className="timeline-center-container"
        >
          {/* Vertical Golden Spine Line - DEAD CENTER (50%) */}
          <div
            style={{
              position: "absolute",
              top: `${trackBounds.top}px`,
              height: `${trackBounds.height}px`,
              left: "50%",
              transform: "translateX(-50%)",
              width: "3px",
              backgroundColor: "rgba(199, 166, 120, 0.22)",
              borderRadius: "3px",
              zIndex: 1,
            }}
            className="timeline-center-spine"
          >
            {/* Liquid Gold Scroll Trail laid behind the traveling car */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${Math.max(0, carY - trackBounds.top)}px`,
                background: "linear-gradient(180deg, var(--color-champagne) 0%, var(--color-champagne-dark) 100%)",
                boxShadow: "0 0 14px rgba(199, 166, 120, 0.8)",
                borderRadius: "3px",
                transition: "height 0.05s linear",
              }}
            />
          </div>

          {/* Alternating Milestone Items List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem", position: "relative" }}>
            {MILESTONES.map((item, idx) => {
              const isCurrent = item.year === activeYear;
              const isEven = idx % 2 === 0; // idx 0 (left), 1 (right), 2 (left), 3 (right), 4 (left)
              const nodeY = nodeOffsets[item.year];
              const isHit = nodeY !== undefined ? carY >= nodeY - 25 : idx === 0;
              const isImpact = nodeY !== undefined ? Math.abs(carY - nodeY) < 38 : false;

              return (
                <div
                  key={item.year}
                  ref={(el) => {
                    milestoneRefs.current[item.year] = el;
                  }}
                  id={`milestone-${item.year}`}
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isEven ? "flex-start" : "flex-end",
                  }}
                  className={`timeline-milestone-row ${isEven ? "row-left" : "row-right"}`}
                >
                  {/* Central Year Node / 3D Glass Bubble (Centered on the Spine) */}
                  <div
                    onClick={() => scrollToYear(item.year)}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                      cursor: "pointer",
                      width: isCurrent ? "92px" : "84px",
                      height: isCurrent ? "92px" : "84px",
                      borderRadius: "50%",
                      background: isHit
                        ? "radial-gradient(circle at 35% 25%, #FFFFFF 0%, #FAF8F5 35%, #F1E7D8 70%, #E3D0B6 100%)"
                        : "radial-gradient(circle at 35% 25%, #FFFFFF 0%, #F8F9FA 45%, #EBEFF2 85%, #DFE5EA 100%)",
                      border: isHit
                        ? "2.5px solid #FFFFFF"
                        : "2px solid rgba(255, 255, 255, 0.95)",
                      boxShadow: isHit
                        ? "0 0 28px rgba(199, 166, 120, 0.55), inset 0 0 0 1px rgba(199, 166, 120, 0.45), inset 2px 2px 6px rgba(255, 255, 255, 1), 0 10px 24px rgba(8, 21, 33, 0.12)"
                        : "0 6px 18px rgba(8, 21, 33, 0.08), inset 0 0 0 1px rgba(126, 142, 155, 0.22), inset 2px 2px 5px rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(16px)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2px",
                      padding: "6px",
                      transition: "all 300ms ease",
                    }}
                    className="timeline-center-node"
                  >
                    {/* Subtle Inner Concentric Ring (Minted Medallion Bezel) */}
                    <div
                      style={{
                        position: "absolute",
                        inset: "4px",
                        borderRadius: "50%",
                        border: isHit
                          ? "1px dashed rgba(199, 166, 120, 0.5)"
                          : "1px dashed rgba(126, 142, 155, 0.25)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Glass Bubble Top-Left Specular Reflection */}
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "14px",
                        width: "18px",
                        height: "9px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.25))",
                        transform: "rotate(-35deg)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Milestone Checkmark Badge */}
                    {isHit && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-3px",
                          right: "-3px",
                          backgroundColor: "var(--color-midnight-navy)",
                          border: "2px solid var(--color-champagne)",
                          color: "var(--color-champagne)",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.35), 0 0 12px rgba(199, 166, 120, 0.65)",
                          zIndex: 12,
                        }}
                        title="Milestone Achieved"
                      >
                        <CheckCircle2 size={13} strokeWidth={2.7} />
                      </div>
                    )}

                    {/* Active Collision Impact Shockwave */}
                    {isImpact && (
                      <div
                        style={{
                          position: "absolute",
                          inset: "-14px",
                          borderRadius: "50%",
                          border: "2px solid var(--color-champagne)",
                          animation: "milestonePulse 1s infinite ease-out",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    {/* Top Micro-label: MILESTONE */}
                    <span
                      className="timeline-bubble-label"
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.46rem",
                        fontWeight: 750,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: isHit ? "var(--color-champagne-dark)" : "#7E8E9B",
                        lineHeight: 1,
                        display: "block",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      Milestone
                    </span>

                    {/* Center Hero Year: Regal Cinzel Serif */}
                    <span
                      className="timeline-bubble-year"
                      style={{
                        fontFamily: "var(--font-cinzel), Georgia, serif",
                        fontSize: isCurrent ? "1.32rem" : "1.18rem",
                        fontWeight: 800,
                        color: isHit ? "var(--color-midnight-navy)" : "#2C3E50",
                        letterSpacing: "0.03em",
                        lineHeight: 1.05,
                        display: "block",
                        userSelect: "none",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      {item.year}
                    </span>

                    {/* Bottom Numeral Capsule Badge: 01, 02, etc. */}
                    <span
                      className="timeline-bubble-index"
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.52rem",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        color: isHit ? "#684E25" : "#647482",
                        backgroundColor: isHit ? "rgba(199, 166, 120, 0.24)" : "rgba(126, 142, 155, 0.14)",
                        border: isHit ? "1px solid rgba(199, 166, 120, 0.55)" : "1px solid rgba(126, 142, 155, 0.3)",
                        padding: "1.5px 7px",
                        borderRadius: "999px",
                        lineHeight: 1.1,
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Horizontal Connector Line from Center Node to Box */}
                  <div
                    style={{
                      position: "absolute",
                      left: isEven ? "calc(50% - 60px)" : "50%",
                      width: "60px",
                      height: isHit ? "3px" : "2px",
                      backgroundColor: isHit ? "var(--color-champagne)" : "rgba(199, 166, 120, 0.3)",
                      boxShadow: isHit ? "0 0 10px rgba(199, 166, 120, 0.7)" : "none",
                      zIndex: 2,
                      transition: "all 300ms ease",
                    }}
                    className="timeline-connector-line"
                  />

                  {/* Milestone Card (Alternating Left / Right) */}
                  <div
                    style={{
                      width: "calc(50% - 60px)",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "var(--radius-lg)",
                      border: isCurrent
                        ? "1.5px solid rgba(199, 166, 120, 0.6)"
                        : isHit
                        ? "1px solid rgba(199, 166, 120, 0.35)"
                        : "1px solid rgba(8, 21, 33, 0.08)",
                      boxShadow: isCurrent
                        ? "0 20px 45px rgba(8, 21, 33, 0.1), 0 0 25px rgba(199, 166, 120, 0.2)"
                        : "0 8px 24px rgba(8, 21, 33, 0.04)",
                      overflow: "hidden",
                      transition: "all 300ms ease",
                      transform: isCurrent ? "translateY(-4px)" : "none",
                      position: "relative",
                      zIndex: 3,
                    }}
                    className="timeline-card-box"
                  >
                    {/* Unique Historical Fleet Image for this specific era */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "175px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title} (${item.year})`}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center 40%",
                        }}
                        priority={idx === 0}
                      />

                      {/* Scrim Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(8, 21, 33, 0.3) 0%, rgba(8, 21, 33, 0.85) 100%)",
                        }}
                      />

                      {/* Typography Header on Image (Clean text, no pill container) */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          left: "1.1rem",
                          right: "1.1rem",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "var(--color-champagne)",
                            textShadow: "0 2px 8px rgba(0, 0, 0, 0.9)",
                          }}
                        >
                          {item.era}
                        </span>

                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            color: "#FFFFFF",
                            textShadow: "0 2px 8px rgba(0, 0, 0, 0.9)",
                          }}
                        >
                          Est. {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Card Content (Reduced, Crisp Copy with Milestone Status) */}
                    <div style={{ padding: "1.4rem 1.6rem" }}>
                      {/* Milestone Achievement Status (Clean text, no pill container) */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: isHit ? "#059669" : "#64748B",
                          marginBottom: "0.6rem",
                          transition: "color 300ms ease",
                        }}
                      >
                        {isHit ? (
                          <>
                            <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: "#10B981" }} />
                            <span>Milestone 0{idx + 1} Achieved & Operational</span>
                          </>
                        ) : (
                          <>
                            <Clock size={13} style={{ color: "#81909A" }} />
                            <span>Target Milestone 0{idx + 1} • Approaching</span>
                          </>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--color-midnight-navy)",
                          lineHeight: 1.3,
                          marginBottom: "0.35rem",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Headline / Core Promise */}
                      <p
                        style={{
                          fontSize: "0.86rem",
                          fontWeight: 600,
                          color: "var(--color-champagne-dark)",
                          marginBottom: "0.65rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.headline}
                      </p>

                      {/* Reduced, Compact Narrative */}
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-dark-secondary)",
                          lineHeight: 1.6,
                          marginBottom: "1.1rem",
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Metadata Highlights (Fleet & Corridors) */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.45rem",
                          paddingTop: "0.85rem",
                          borderTop: "1px solid rgba(8, 21, 33, 0.08)",
                          fontSize: "0.78rem",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                          <Car size={13} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
                          <span style={{ color: "#81909A", fontWeight: 600 }}>Fleet:</span>
                          <span style={{ color: "var(--color-midnight-navy)", fontWeight: 600 }}>
                            {item.fleetPill}
                          </span>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                          <MapPin size={13} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
                          <span style={{ color: "#81909A", fontWeight: 600 }}>Corridors:</span>
                          <span style={{ color: "var(--color-midnight-navy)", fontWeight: 600 }}>
                            {item.corridorPill}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive Styles and Keyframe Animations */}
      <style jsx>{`
        @keyframes milestonePulse {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        @media (max-width: 860px) {
          :global(.timeline-center-spine) {
            left: 28px !important;
            transform: none !important;
          }
          :global(.timeline-milestone-row) {
            justifyContent: flex-start !important;
          }
          :global(.timeline-center-node) {
            left: 28px !important;
            transform: translate(-50%, -50%) !important;
            width: 68px !important;
            height: 68px !important;
            padding: 4px !important;
            gap: 1.5px !important;
          }
          :global(.timeline-bubble-label) {
            font-size: 0.38rem !important;
            letter-spacing: 0.1em !important;
          }
          :global(.timeline-bubble-year) {
            font-size: 0.98rem !important;
          }
          :global(.timeline-bubble-index) {
            font-size: 0.42rem !important;
            padding: 1px 5px !important;
          }
          :global(.timeline-connector-line) {
            left: 28px !important;
            width: 40px !important;
          }
          :global(.timeline-card-box) {
            width: calc(100% - 68px) !important;
            margin-left: 68px !important;
          }
        }
      `}</style>
    </div>
  );
}

