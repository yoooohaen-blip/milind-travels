"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Crown,
  PlaneTakeoff,
  CalendarRange,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface MasterpieceService {
  id: string;
  index: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  badge: string;
  fleetTag: string;
  deliverables: string[];
  icon: string;
}

const SERVICES_DATA: MasterpieceService[] = [
  {
    id: "staff-transportation",
    index: "01",
    title: "Staff Transportation",
    tagline: "Synchronized employee commute logistics for Mumbai's 24/7 enterprise workforce.",
    desc: "End-to-end scheduled employee pickup and drop rosters tailored to your company's operational shift rotations, facility corridors, and strict female employee night-escort mandates.",
    image: "/images/fleet/corporate-shuttle.jpg",
    badge: "Core Enterprise Solution",
    fleetTag: "13–26 Seater Shuttles & Multi-Passenger MPVs",
    deliverables: ["24/7 Rotational Shift Synchronization", "Safe Female Passenger Gate Drop Confirmation", "Pre-Planned Suburban Route Buffer Planning"],
    icon: "Users",
  },
  {
    id: "ad-hoc-duty",
    index: "02",
    title: "Ad-Hoc Duty for Connected Clients",
    tagline: "Rapid on-demand vehicular dispatch and flexible duty execution for contracted corporate clients.",
    desc: "Dedicated on-call transportation for contracted corporate accounts. Whether facing urgent executive travel, emergency roster gaps, or sudden client delegations, our central Vikhroli desk provides immediate priority dispatch.",
    image: "/images/fleet/premium-mpv.jpg",
    badge: "Priority Connected Service",
    fleetTag: "Executive Sedans & Toyota Innova Crysta / Hycross",
    deliverables: ["Zero Surge Pricing on Contracted Corporate Rates", "Standby Vehicles Stationed at Key Mumbai Hubs", "24/7 Real-Time Supervisor Dispatch Support"],
    icon: "ShieldCheck",
  },
  {
    id: "airport-transfers",
    index: "03",
    title: "Airport Transfers for Connected Clients",
    tagline: "Punctual, seamless CSMIA Terminal 1 & Terminal 2 corporate airport transfers.",
    desc: "Pre-scheduled business transfers seamlessly connecting commercial hubs (BKC, Lower Parel, Powai, Vikhroli, Andheri) with Chhatrapati Shivaji Maharaj International Airport (CSMIA) with flight buffer tracking and personalized meet-and-assist.",
    image: "/images/fleet/executive-sedan.jpg",
    badge: "Executive Airport Transit",
    fleetTag: "Camry Hybrid, Mercedes-Benz & Premium MPVs",
    deliverables: ["Live Commercial Flight Delay Tracking", "BOM T1 / T2 Terminal Meet & Assist Greetings", "Luggage Protocol & Direct Terminal Curb Pickup"],
    icon: "PlaneTakeoff",
  },
  {
    id: "custom-packages",
    index: "04",
    title: "Packages Tailored to Client Requirements",
    tagline: "Customized corporate mobility packages structured around your unique operational and financial model.",
    desc: "Corporate mobility agreements engineered around how your business operates: from flexible hourly packages (4-hr/40-km, 8-hr/80-km) to dedicated monthly vehicle retainers and multi-year corporate Master Service Agreements (MSAs).",
    image: "/images/hero-cinematic.jpg",
    badge: "Custom Client Packages",
    fleetTag: "Complete Fleet Mix Across All Tiers",
    deliverables: ["Dedicated Vehicle & Assigned Background-Verified Chauffeur", "Single Consolidated Monthly GST Invoicing", "Customized Service Level Agreements (SLAs)"],
    icon: "CalendarRange",
  },
];

export default function HomeServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 6.5 seconds if user is not hovering
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const getServiceIcon = (name: string, size = 20) => {
    switch (name) {
      case "Users":
        return <Users size={size} />;
      case "ShieldCheck":
        return <ShieldCheck size={size} />;
      case "Crown":
        return <Crown size={size} />;
      case "PlaneTakeoff":
        return <PlaneTakeoff size={size} />;
      case "CalendarRange":
        return <CalendarRange size={size} />;
      default:
        return <Users size={size} />;
    }
  };

  const activeService = SERVICES_DATA[activeIndex];

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          Desktop Masterpiece: Expanding Panoramic Horizon Stage (No Boxes!)
          ========================================================================= */}
      <div
        className="horizon-stage-desktop"
        style={{
          position: "relative",
          width: "100%",
          height: "660px",
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          backgroundColor: "#081521",
          boxShadow: "0 25px 70px rgba(8, 21, 33, 0.16)",
          border: "1px solid rgba(199, 166, 120, 0.25)",
        }}
      >
        {SERVICES_DATA.map((service, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={service.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                position: "relative",
                flex: isActive ? 3.6 : 1,
                height: "100%",
                cursor: isActive ? "default" : "pointer",
                transition: "flex 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                overflow: "hidden",
                borderRight:
                  idx < SERVICES_DATA.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.12)"
                    : "none",
              }}
              className="horizon-panel"
            >
              {/* Full-Bleed High-Resolution Photograph */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                  transition: "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 65vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 40%",
                  }}
                  priority={idx <= 1}
                />
              </div>

              {/* Dynamic Gradient Scrim */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isActive
                    ? "linear-gradient(180deg, rgba(8, 21, 33, 0.3) 0%, rgba(8, 21, 33, 0.72) 42%, rgba(8, 21, 33, 0.96) 100%)"
                    : "linear-gradient(180deg, rgba(8, 21, 33, 0.55) 0%, rgba(8, 21, 33, 0.88) 100%)",
                  transition: "background 500ms ease",
                }}
              />

              {/* Inactive Slice View (Sleek Vertical Architectural Bar) */}
              {!isActive && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "2.25rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 2,
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                  }}
                  className="inactive-slice"
                >
                  {/* Top: Index Numeral */}
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--color-champagne)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {service.index}
                  </div>

                  {/* Middle: Vertical Title */}
                  <div
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span>{service.title}</span>
                  </div>

                  {/* Bottom: Circular Icon Badge (Aligned to same bottom baseline) */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(8, 21, 33, 0.85)",
                      border: "1px solid rgba(199, 166, 120, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-champagne)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                      transition: "transform 250ms ease, border-color 250ms ease",
                    }}
                    className="slice-icon-bubble"
                  >
                    {getServiceIcon(service.icon, 18)}
                  </div>
                </div>
              )}

              {/* Active Panel View (Expansive Architectural Masterpiece Showcase) */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "2.25rem clamp(1.75rem, 3vw, 2.75rem)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: 3,
                    animation: "fadeInContent 500ms ease forwards",
                  }}
                >
                  {/* Top Floating Glass Badges */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span
                        style={{
                          backgroundColor: "rgba(8, 21, 33, 0.85)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(199, 166, 120, 0.4)",
                          color: "var(--color-champagne)",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "20px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <Sparkles size={13} />
                        <span>Vertical {service.index} • {service.badge}</span>
                      </span>

                      <span
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.12)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          color: "#FFFFFF",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          padding: "0.35rem 0.8rem",
                          borderRadius: "20px",
                        }}
                        className="hidden-mobile"
                      >
                        {service.fleetTag}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        color: "rgba(255, 255, 255, 0.22)",
                        lineHeight: 1,
                      }}
                    >
                      {service.index}
                    </span>
                  </div>

                  {/* Bottom Editorial Showcase */}
                  <div style={{ maxWidth: "780px" }}>
                    <h3
                      style={{
                        fontSize: "clamp(1.65rem, 2.5vw, 2.25rem)",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        lineHeight: 1.2,
                        marginBottom: "0.45rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 600,
                        color: "var(--color-champagne)",
                        lineHeight: 1.4,
                        marginBottom: "0.65rem",
                      }}
                    >
                      {service.tagline}
                    </p>

                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "#CBD5E1",
                        lineHeight: 1.6,
                        marginBottom: "1.2rem",
                        maxWidth: "680px",
                      }}
                    >
                      {service.desc}
                    </p>

                    {/* Operational Deliverables Strip */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.55rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {service.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(199, 166, 120, 0.25)",
                            borderRadius: "6px",
                            padding: "0.32rem 0.7rem",
                            fontSize: "0.8rem",
                            color: "#FFFFFF",
                            fontWeight: 500,
                          }}
                        >
                          <CheckCircle2 size={13} style={{ color: "var(--color-champagne)" }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons (Generous clearance from bottom edge) */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap" }}>
                      <Link
                        href={`/services#service-card-${service.id}`}
                        className="btn btn-champagne"
                        style={{ padding: "0.75rem 1.4rem" }}
                      >
                        <span>Explore Full Service Specifications</span>
                        <ArrowRight size={16} />
                      </Link>

                      <Link
                        href={`/calculator?service=${service.id}`}
                        className="btn btn-outline-dark"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          borderColor: "rgba(255, 255, 255, 0.25)",
                          color: "#FFFFFF",
                          padding: "0.75rem 1.25rem",
                        }}
                      >
                        <span>RFP Route Calculator</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          Stage Bottom HUD / Interactive Horizon Control Bar
          ========================================================================= */}
      <div
        style={{
          marginTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "0.85rem 1.4rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "var(--radius-lg)",
          border: "1px solid rgba(8, 21, 33, 0.08)",
          boxShadow: "0 8px 24px rgba(8, 21, 33, 0.04)",
        }}
      >
        {/* Left: Active Vertical Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              backgroundColor: "rgba(199, 166, 120, 0.12)",
              color: "var(--color-champagne-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {getServiceIcon(activeService.icon, 20)}
          </div>
          <div>
            <strong
              style={{
                fontSize: "0.96rem",
                color: "var(--color-midnight-navy)",
                fontWeight: 700,
              }}
            >
              {activeService.title}
            </strong>
          </div>
        </div>

        {/* Center: Segmented Navigation Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
            flexWrap: "wrap",
          }}
          className="horizon-nav-pills"
        >
          {SERVICES_DATA.map((srv, idx) => {
            const isSel = idx === activeIndex;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                style={{
                  padding: "0.42rem 0.9rem",
                  borderRadius: "20px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: isSel
                    ? "1px solid var(--color-champagne)"
                    : "1px solid rgba(8, 21, 33, 0.08)",
                  backgroundColor: isSel
                    ? "var(--color-midnight-navy)"
                    : "rgba(8, 21, 33, 0.03)",
                  color: isSel ? "var(--color-champagne)" : "var(--color-midnight-navy)",
                  boxShadow: isSel
                    ? "0 4px 12px rgba(8, 21, 33, 0.15)"
                    : "none",
                  transition: "all 200ms ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <span>{srv.index}</span>
                <span>{srv.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Step Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev === 0 ? SERVICES_DATA.length - 1 : prev - 1))
            }
            aria-label="Previous service vertical"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(8, 21, 33, 0.12)",
              backgroundColor: "#FAFAFA",
              color: "var(--color-midnight-navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(8, 21, 33, 0.04)",
              transition: "all 200ms ease",
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length)}
            aria-label="Next service vertical"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(8, 21, 33, 0.12)",
              backgroundColor: "#FAFAFA",
              color: "var(--color-midnight-navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(8, 21, 33, 0.04)",
              transition: "all 200ms ease",
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* =========================================================================
          Mobile Responsive Fallback: Luxury Editorial Swipe Carousel
          ========================================================================= */}
      <div className="horizon-mobile-container" style={{ display: "none" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#081521",
            boxShadow: "0 18px 45px rgba(8, 21, 33, 0.15)",
          }}
        >
          {/* Mobile Image */}
          <div style={{ position: "relative", width: "100%", height: "240px" }}>
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(8, 21, 33, 0.2) 0%, rgba(8, 21, 33, 0.95) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                backgroundColor: "rgba(8, 21, 33, 0.85)",
                padding: "0.3rem 0.75rem",
                borderRadius: "20px",
                border: "1px solid rgba(199, 166, 120, 0.35)",
                fontSize: "0.72rem",
                color: "var(--color-champagne)",
                fontWeight: 700,
              }}
            >
              {activeService.badge}
            </div>
          </div>

          {/* Mobile Content */}
          <div style={{ padding: "1.75rem 1.5rem" }}>
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "0.4rem",
              }}
            >
              {activeService.title}
            </h3>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--color-champagne-light)",
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              {activeService.tagline}
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#C8D3DB",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              {activeService.desc}
            </p>

            <Link
              href={`/services#service-card-${activeService.id}`}
              className="btn btn-champagne"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Explore Specifications</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.inactive-slice:hover .slice-icon-bubble) {
          border-color: var(--color-champagne) !important;
          transform: scale(1.1) !important;
        }

        @media (max-width: 900px) {
          :global(.horizon-stage-desktop) {
            display: none !important;
          }
          :global(.horizon-mobile-container) {
            display: block !important;
          }
          :global(.horizon-nav-pills) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
