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
    title: "Foundation of Milind Travels in Mumbai",
    headline: "Built on: “Delivering more than what is promised.”",
    desc: "Established with an uncompromising dedication to punctual corporate passenger transport, serving pioneering financial institutions and commercial trading houses.",
    image: "/images/timeline/timeline-2000.jpg",
    fleetPill: "Tata Indica & Classic Executive Saloons",
    corridorPill: "South Mumbai CBD & Central Belts",
  },
  {
    year: "2006",
    era: "Era 02 • BPO & IT Expansion",
    title: "Sunrise 24/7 Rotational Shift Commutes",
    headline: "Pioneering structured night-shift passenger security.",
    desc: "Expanded into 24/7 enterprise employee transportation across Mumbai's booming BPO and tech campuses, formalizing zero-compromise female passenger drop protocols.",
    image: "/images/timeline/timeline-2006.jpg",
    fleetPill: "Chevrolet Tavera & 13-Seater Shuttles",
    corridorPill: "Andheri SEEPZ & Powai Tech Hubs",
  },
  {
    year: "2012",
    era: "Era 03 • Fleet Management",
    title: "Institutional Turnkey Fleet Operations",
    headline: "Long-term corporate Master Service Agreements (MSAs).",
    desc: "Transitioned into turnkey outsourced fleet management, absorbing vehicle procurement, chauffeur staffing, preventive maintenance, and statutory compliance for multinationals.",
    image: "/images/timeline/timeline-2012.jpg",
    fleetPill: "Toyota Innova & Executive Saloons",
    corridorPill: "BKC, Lower Parel & Thane Corridors",
  },
  {
    year: "2018",
    era: "Era 04 • Central Command",
    title: "Operations Hub at Kailas Business Park",
    headline: "Centralizing corporate dispatch in Vikhroli West.",
    desc: "Commissioned our flagship 24/7 command center at A-808, Kailas Business Park, Vikhroli West, positioned at the EEH and JVLR intersection for rapid MMR vehicle staging.",
    image: "/images/timeline/timeline-2018.jpg",
    fleetPill: "Innova Crysta & Force Urbania",
    corridorPill: "Vikhroli, JVLR & Trans-Thane Transits",
  },
  {
    year: "2026",
    era: "Era 05 • Next-Gen Mobility",
    title: "Modern Enterprise Mobility & Digital Architecture",
    headline: "24+ years of unbroken corporate reliability across Mumbai.",
    desc: "Coordinating corporate mobility for leading technology firms, financial institutions, and global corporations with BS-VI compliant executive sedans and 99%+ on-time execution.",
    image: "/images/timeline/timeline-2026.jpg",
    fleetPill: "Toyota Camry Hybrid & Mercedes-Benz",
    corridorPill: "All Greater Mumbai & MMR Corridors",
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

  // Synchronized scroll tracking and dynamic car position calculation
  useEffect(() => {
    const handleScrollAndMeasure = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 1. Measure all milestone rows to get their vertical centers relative to container top
      const offsets: { [year: string]: number } = {};
      MILESTONES.forEach((m) => {
        const el = milestoneRefs.current[m.year];
        if (el) {
          const r = el.getBoundingClientRect();
          offsets[m.year] = (r.top + r.height / 2) - containerRect.top;
        }
      });
      setNodeOffsets(offsets);

      const firstY = offsets[MILESTONES[0].year] ?? 100;
      const lastY = offsets[MILESTONES[MILESTONES.length - 1].year] ?? (containerRect.height - 100);
      const span = Math.max(lastY - firstY, 1);
      setTrackBounds({ top: firstY, height: span });

      // 2. Viewport focal line: where the user's attention is focused (~48% of screen)
      const focalY = windowHeight * 0.48;
      const currentFocalY = focalY - containerRect.top;

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
  const hitCount = MILESTONES.filter((m) => {
    const y = nodeOffsets[m.year];
    return y !== undefined && carY >= y - 25;
  }).length || 1;

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
            {/* Left: Active Era Display & Goals Counter */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-slate-gray)",
                }}
              >
                Milind Highway:
              </span>
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

              {/* Real-time Goals Hit Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  backgroundColor: hitCount === 5 ? "rgba(16, 185, 129, 0.15)" : "rgba(199, 166, 120, 0.15)",
                  color: hitCount === 5 ? "#059669" : "var(--color-champagne-dark)",
                  border: hitCount === 5 ? "1px solid rgba(16, 185, 129, 0.35)" : "1px solid rgba(199, 166, 120, 0.3)",
                }}
              >
                <CheckCircle2 size={13} strokeWidth={2.5} />
                <span>{hitCount}/5 Goals Hit</span>
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
                      width: isCurrent ? "72px" : "60px",
                      height: isCurrent ? "72px" : "60px",
                      borderRadius: "50%",
                      background: isHit
                        ? "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 30%, rgba(225, 205, 175, 0.8) 70%, rgba(199, 166, 120, 0.95) 100%)"
                        : "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 60%, rgba(240, 235, 225, 0.7) 100%)",
                      border: isHit
                        ? "2.5px solid #FFFFFF"
                        : "1.5px solid rgba(255, 255, 255, 0.85)",
                      boxShadow: isHit
                        ? "0 0 35px rgba(199, 166, 120, 0.65), inset 2px 2px 6px rgba(255, 255, 255, 1), 0 10px 24px rgba(8, 21, 33, 0.16)"
                        : "0 6px 18px rgba(8, 21, 33, 0.06), inset 2px 2px 4px rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(16px)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 300ms ease",
                    }}
                    className="timeline-center-node"
                  >
                    {/* Goal Hit Checkmark Badge */}
                    {isHit && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-6px",
                          right: "-6px",
                          backgroundColor: "var(--color-midnight-navy)",
                          border: "2px solid var(--color-champagne)",
                          color: "var(--color-champagne)",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 12px rgba(199, 166, 120, 0.8)",
                          zIndex: 12,
                        }}
                        title="Milestone Goal Achieved"
                      >
                        <CheckCircle2 size={13} strokeWidth={2.5} />
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
                          animation: "goalPulse 1s infinite ease-out",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: isCurrent ? "1.05rem" : "0.92rem",
                        fontWeight: 800,
                        color: isHit ? "var(--color-midnight-navy)" : "var(--color-slate-gray)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {item.year}
                    </span>
                    <span
                      style={{
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: isHit ? "var(--color-champagne-dark)" : "#81909A",
                        marginTop: "2px",
                      }}
                    >
                      Goal 0{idx + 1}
                    </span>
                  </div>

                  {/* Horizontal Connector Line from Center Node to Box */}
                  <div
                    style={{
                      position: "absolute",
                      left: isEven ? "calc(50% - 50px)" : "50%",
                      width: "50px",
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

                      {/* Floating Glass Pills on Image */}
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
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--color-champagne)",
                            backgroundColor: "rgba(8, 21, 33, 0.85)",
                            backdropFilter: "blur(8px)",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "14px",
                            border: "1px solid rgba(199, 166, 120, 0.3)",
                          }}
                        >
                          {item.era}
                        </span>

                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: "#FFFFFF",
                            backgroundColor: "rgba(8, 21, 33, 0.85)",
                            backdropFilter: "blur(8px)",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "14px",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                          }}
                        >
                          Est. {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Card Content (Reduced, Crisp Copy with Goal Status) */}
                    <div style={{ padding: "1.4rem 1.6rem" }}>
                      {/* Goal Achievement Badge */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "20px",
                          marginBottom: "0.65rem",
                          backgroundColor: isHit ? "rgba(16, 185, 129, 0.1)" : "rgba(8, 21, 33, 0.05)",
                          color: isHit ? "#059669" : "#64748B",
                          border: isHit ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid rgba(8, 21, 33, 0.08)",
                          transition: "all 300ms ease",
                        }}
                      >
                        {isHit ? (
                          <>
                            <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: "#10B981" }} />
                            <span>Goal 0{idx + 1} Achieved & Operational</span>
                          </>
                        ) : (
                          <>
                            <Clock size={12} style={{ color: "#81909A" }} />
                            <span>Target Goal 0{idx + 1} • Approaching</span>
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
        @keyframes goalPulse {
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
            width: 52px !important;
            height: 52px !important;
          }
          :global(.timeline-center-node span:first-child) {
            font-size: 0.85rem !important;
          }
          :global(.timeline-connector-line) {
            left: 28px !important;
            width: 32px !important;
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

