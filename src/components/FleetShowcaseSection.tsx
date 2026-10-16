"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLEET_TIERS, CONTACT_INFO } from "@/data/content";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function FleetShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [activeTierId, setActiveTierId] = useState<string>(FLEET_TIERS[0].id);

  // Monitor scroll progress and boundaries
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < maxScroll - 20);
    }

    // Determine which card is currently in view
    const cardWidth = 400; // estimated card + gap
    const index = Math.min(
      Math.max(Math.round(scrollLeft / cardWidth), 0),
      FLEET_TIERS.length - 1
    );
    setActiveTierId(FLEET_TIERS[index].id);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 390;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 390;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="fleet-tiers-showcase"
      className="section-py surface-dark"
      style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.09) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header with Navigation Controls */}
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
          <div style={{ maxWidth: "720px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-champagne)",
                marginBottom: "0.5rem",
              }}
            >
              Mumbai Commercial Fleet Specifications
            </span>
            <h2 className="text-section-title" style={{ color: "#FFFFFF", marginBottom: "0.75rem", lineHeight: 1.2 }}>
              Four Distinct Corporate Fleet Tiers.
            </h2>
            <p className="text-lead" style={{ color: "#C8D3DB", marginBottom: 0 }}>
              Scroll horizontally through our four commercial tiers—from executive sedans and luxury MPVs to employee shuttles and commute fleets.
            </p>
          </div>

          {/* Quick Jump Buttons & Scroll Arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            {/* Quick Tier Jump Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "0.3rem",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              className="hidden-mobile"
            >
              {FLEET_TIERS.map((tier, idx) => {
                const isSelected = tier.id === activeTierId;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    style={{
                      padding: "0.35rem 0.85rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      border: "none",
                      backgroundColor: isSelected ? "var(--color-champagne)" : "transparent",
                      color: isSelected ? "#081521" : "#C8D3DB",
                      transition: "all 200ms ease",
                    }}
                  >
                    0{idx + 1} {tier.category.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            {/* Left / Right Scroll Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll Fleet Left"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(199, 166, 120, 0.35)",
                  backgroundColor: canScrollLeft ? "rgba(199, 166, 120, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  color: canScrollLeft ? "var(--color-champagne)" : "#64748B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: canScrollLeft ? "pointer" : "not-allowed",
                  opacity: canScrollLeft ? 1 : 0.4,
                  transition: "all 200ms ease",
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                aria-label="Scroll Fleet Right"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(199, 166, 120, 0.35)",
                  backgroundColor: canScrollRight ? "rgba(199, 166, 120, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  color: canScrollRight ? "var(--color-champagne)" : "#64748B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: canScrollRight ? "pointer" : "not-allowed",
                  opacity: canScrollRight ? 1 : 0.4,
                  transition: "all 200ms ease",
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Boxes Track (Horizontal Scroll with snap) */}
        <div
          ref={scrollRef}
          className="fleet-scroll-track"
          style={{
            display: "flex",
            gap: "1.75rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "1.5rem",
            paddingTop: "0.5rem",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {FLEET_TIERS.map((tier, idx) => (
            <div
              key={tier.id}
              style={{
                flex: "0 0 370px",
                width: "370px",
                maxWidth: "85vw",
                scrollSnapAlign: "start",
                backgroundColor: "rgba(11, 26, 40, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                border: "1px solid rgba(199, 166, 120, 0.3)",
                overflow: "hidden",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 300ms ease",
              }}
              className="fleet-scroll-box"
            >
              <div>
                {/* Vehicle Photograph */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "210px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={tier.imageSrc}
                    alt={tier.imageAlt}
                    fill
                    sizes="(max-width: 900px) 85vw, 370px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 45%",
                      transition: "transform 500ms ease",
                    }}
                    className="fleet-box-image"
                  />

                  {/* Scrim Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(8, 21, 33, 0.3) 0%, rgba(8, 21, 33, 0.7) 60%, rgba(11, 26, 40, 0.95) 100%)",
                    }}
                  />

                  {/* Top Tier Badge */}
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
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.22rem 0.6rem",
                        borderRadius: "14px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      <Sparkles size={11} />
                      <span>Tier 0{idx + 1}</span>
                    </span>

                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.4rem",
                        fontWeight: 900,
                        color: "rgba(255, 255, 255, 0.22)",
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Capacity Pills on Photo */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.85rem",
                      left: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
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
                        padding: "0.25rem 0.6rem",
                        borderRadius: "6px",
                        border: "1px solid rgba(199, 166, 120, 0.3)",
                        color: "#FFFFFF",
                        fontSize: "0.74rem",
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
                        padding: "0.25rem 0.6rem",
                        borderRadius: "6px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#C8D3DB",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                      }}
                    >
                      <Briefcase size={12} style={{ color: "var(--color-champagne)" }} />
                      <span>{tier.capacity.luggage.split("+")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Box Specifications Content */}
                <div style={{ padding: "1.4rem 1.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                      marginBottom: "0.3rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tier.category}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "var(--color-champagne)",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {tier.tagline}
                  </p>

                  {/* Typical Models Chips */}
                  <div style={{ marginBottom: "1rem" }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#81909A",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Representative Fleet Models:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {tier.typicalModels.map((model) => (
                        <span
                          key={model}
                          style={{
                            fontSize: "0.75rem",
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(199, 166, 120, 0.25)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "4px",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top 3 Core Specifications */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.25rem" }}>
                    {tier.highlights.slice(0, 3).map((item, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          fontSize: "0.8rem",
                          color: "#CBD5E1",
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: "var(--color-champagne)", flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Strip */}
              <div
                style={{
                  padding: "1rem 1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  backgroundColor: "rgba(8, 21, 33, 0.4)",
                }}
              >
                <Link
                  href={`/calculator?tier=${tier.id}`}
                  className="btn btn-champagne"
                  style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", flex: 1, justifyContent: "center" }}
                >
                  <span>Reserve Tier</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  aria-label="Direct Dispatch Phone"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-champagne)",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  <PhoneCall size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div
          style={{
            marginTop: "1.5rem",
            width: "100%",
            maxWidth: "360px",
            margin: "1.5rem auto 0 auto",
            height: "3px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "3px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.max(25, scrollProgress * 100)}%`,
              background: "linear-gradient(90deg, var(--color-champagne) 0%, var(--color-champagne-light) 100%)",
              borderRadius: "3px",
              transition: "width 0.15s ease-out",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        :global(.fleet-scroll-track::-webkit-scrollbar) {
          display: none;
        }
        :global(.fleet-scroll-box:hover) {
          transform: translateY(-5px);
          border-color: rgba(199, 166, 120, 0.6) !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(199, 166, 120, 0.15) !important;
        }
        :global(.fleet-scroll-box:hover .fleet-box-image) {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
