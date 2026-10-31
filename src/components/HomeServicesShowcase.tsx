"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BusFront,
  CarFront,
  Plane,
  Briefcase,
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
    title: "Employee / Staff Transportation",
    tagline: "Reliable employee transportation services for IT companies, BPOs, call centres, and banking institutions.",
    desc: "Milind Travels Private Limited offers reliable, flexible, and efficient transportation solutions tailored to corporate clients. Our 24×7 operational capabilities support employees working in general, rotational, and night shifts.",
    image: "/images/fleet/corporate-shuttle.jpg",
    badge: "Primary Corporate Solution",
    fleetTag: "Hatchbacks, Sedans, SUVs & Corporate Shuttles",
    deliverables: ["24×7 Operational Capabilities (General, Rotational, Night)", "Supervisors on Each Client Site to Monitor & Live Track", "Strict Safe-Entry & Night-Shift Escort Compliance"],
    icon: "BusFront",
  },
  {
    id: "ad-hoc-duty",
    index: "02",
    title: "Ad Hoc Transportation Services",
    tagline: "Flexible, on-demand transportation solutions to meet clients' occasional and special travel requirements.",
    desc: "Turnkey vehicular logistics covering Corporate Events (conferences, seminars, outings), Corporate Visits (meetings, delegations), Outstation Business Travel, and Airport Transfers with diverse fleet allocation.",
    image: "/images/fleet/premium-mpv.jpg",
    badge: "Flexible On-Demand",
    fleetTag: "Corporate Sedans & Toyota Innova Crysta / Hycross",
    deliverables: ["Corporate Events, Offsites & Outstation Business Travel", "Corporate Visits, Business Delegations & Official Guests", "Dedicated On-Site Client Supervisors for Live Coordination"],
    icon: "CarFront",
  },
  {
    id: "airport-transfers",
    index: "03",
    title: "Airport Transfers & Corporate Visits",
    tagline: "Timely pickup and drop services for employees, executives, and corporate visitors.",
    desc: "Pre-scheduled business transfers seamlessly connecting commercial hubs across Mumbai with Chhatrapati Shivaji Maharaj International Airport (CSMIA) with flight buffer tracking and personalized meet-and-assist.",
    image: "/images/fleet/economy-sedan.jpg",
    badge: "Airport & Corporate Visits",
    fleetTag: "Sedans, SUVs & Premium MPVs",
    deliverables: ["Timely Airport Pickup & Drop for Employees & Guests", "Dedicated Transportation for Client Meetings & Delegations", "Zero Surge Pricing on Corporate Contract Rates"],
    icon: "Plane",
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
    icon: "Briefcase",
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
      case "BusFront":
      case "Users":
        return <BusFront size={size} strokeWidth={2.1} />;
      case "CarFront":
      case "ShieldCheck":
        return <CarFront size={size} strokeWidth={2.1} />;
      case "Plane":
      case "PlaneTakeoff":
        return <Plane size={size} strokeWidth={2.1} />;
      case "Briefcase":
      case "CalendarRange":
        return <Briefcase size={size} strokeWidth={2.1} />;
      default:
        return <CarFront size={size} strokeWidth={2.1} />;
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
                fontFamily: "var(--font-heading)",
                fontSize: "1.02rem",
                color: "var(--color-midnight-navy)",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                display: "block",
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
