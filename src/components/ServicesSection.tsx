"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CORE_SERVICES, ServiceItem, CONTACT_INFO } from "@/data/content";
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
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Car,
  MapPin,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";

// Curated high-resolution fleet photography matching each enterprise service
const SERVICE_MEDIA: Record<
  string,
  {
    image: string;
    fleetPills: string[];
    slaHighlight: string;
  }
> = {
  "staff-transportation": {
    image: "/images/fleet/corporate-shuttle.jpg",
    fleetPills: ["13–26 Seater Shuttles", "Multi-Passenger MPVs", "Sedans & Hatchbacks"],
    slaHighlight: "24×7 Operational Capabilities • Rotational & Night Shifts",
  },
  "ad-hoc-duty": {
    image: "/images/fleet/premium-mpv.jpg",
    fleetPills: ["Toyota Innova Crysta / Hycross", "Corporate Sedans", "Minibuses"],
    slaHighlight: "Corporate Events • Visits • Outstation • Airport Transfers",
  },
  "airport-transfers": {
    image: "/images/fleet/economy-sedan.jpg",
    fleetPills: ["Comfort Sedans", "Premium SUVs", "Terminal Meet & Assist"],
    slaHighlight: "Timely Pickup & Drop for Employees & Guests",
  },
  "custom-packages": {
    image: "/images/hero-cinematic.jpg",
    fleetPills: ["Diverse Fleet Range", "Dedicated Site Supervisors", "Consolidated Invoicing"],
    slaHighlight: "Tailored Corporate Master Service Agreements (MSAs)",
  },
};

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(CORE_SERVICES[0].id);
  const isClickScrolling = useRef(false);

  const getServiceIcon = (iconName: string, size = 18) => {
    switch (iconName) {
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

  // Scroll spy effect to highlight the active service in the sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const triggerPosition = window.innerHeight * 0.38;
      let currentActive = CORE_SERVICES[0].id;

      for (let i = 0; i < CORE_SERVICES.length; i++) {
        const service = CORE_SERVICES[i];
        const el = document.getElementById(`service-card-${service.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPosition) {
            currentActive = service.id;
          }
        }
      }

      setActiveServiceId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (id: string) => {
    isClickScrolling.current = true;
    setActiveServiceId(id);

    const el = document.getElementById(`service-card-${id}`);
    if (el) {
      const yOffset = -90; // offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  };

  const activeIndex = CORE_SERVICES.findIndex((s) => s.id === activeServiceId);

  return (
    <section
      id="services-dossier"
      className="section-py surface-light"
      style={{
        borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-champagne-dark)",
              marginBottom: "0.75rem",
            }}
          >
            Contractual Enterprise Logistics
          </span>
          <h2
            className="text-section-title"
            style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}
          >
            Tailored Passenger Mobility
            <br />
            Engineered for Mumbai Enterprises.
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            Milind Travels Private Limited offers reliable, flexible, and efficient transportation solutions tailored to the diverse requirements of corporate clients.
          </p>
        </div>

        {/* Master 12-Column Grid with Sticky Sidebar + Continuous Dossier Feed */}
        <div className="grid-12" style={{ alignItems: "flex-start", position: "relative" }}>
          {/* =========================================================================
              Left Column: Sticky Architectural Navigation Rail (Span 4)
              ========================================================================= */}
          <div
            style={{
              gridColumn: "span 4",
              position: "sticky",
              top: "96px",
              zIndex: 30,
            }}
            className="services-sticky-rail"
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem 1.5rem",
                border: "1px solid rgba(8, 21, 33, 0.08)",
                boxShadow: "0 10px 30px rgba(8, 21, 33, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Rail Top Title & Active Counter */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(8, 21, 33, 0.07)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--color-slate-gray)",
                      display: "block",
                      marginBottom: "0.15rem",
                    }}
                  >
                    Enterprise Spectrum
                  </span>
                  <strong
                    style={{
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: "var(--color-midnight-navy)",
                    }}
                  >
                    Corporate Solutions
                  </strong>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    backgroundColor: "var(--bg-primary)",
                    padding: "0.35rem 0.65rem",
                    borderRadius: "20px",
                    border: "1px solid rgba(8, 21, 33, 0.08)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--color-champagne-dark)",
                  }}
                >
                  <span>0{activeIndex + 1}</span>
                  <span style={{ color: "#81909A" }}>/</span>
                  <span style={{ color: "var(--color-midnight-navy)" }}>0{CORE_SERVICES.length}</span>
                </div>
              </div>

              {/* 4 Service Navigation Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.55rem",
                }}
                className="services-nav-buttons"
              >
                {CORE_SERVICES.map((service, idx) => {
                  const isSelected = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => scrollToService(service.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 1.15rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: isSelected ? "var(--color-midnight-navy)" : "#FAFAFA",
                        color: isSelected ? "#FFFFFF" : "var(--color-midnight-navy)",
                        border: isSelected
                          ? "1px solid var(--color-champagne)"
                          : "1px solid rgba(8, 21, 33, 0.07)",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 250ms ease",
                        position: "relative",
                        boxShadow: isSelected
                          ? "0 6px 18px rgba(8, 21, 33, 0.16)"
                          : "none",
                        transform: isSelected ? "translateX(4px)" : "translateX(0)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            width: "38px",
                            height: "38px",
                            borderRadius: "10px",
                            backgroundColor: isSelected
                              ? "rgba(199, 166, 120, 0.22)"
                              : "rgba(8, 21, 33, 0.05)",
                            border: isSelected
                              ? "1px solid rgba(199, 166, 120, 0.45)"
                              : "1px solid rgba(8, 21, 33, 0.08)",
                            color: isSelected ? "var(--color-champagne)" : "var(--color-midnight-navy)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 250ms ease",
                            boxShadow: isSelected ? "0 2px 8px rgba(199, 166, 120, 0.2)" : "none",
                          }}
                        >
                          {getServiceIcon(service.iconName, 19)}
                        </div>

                        <div>
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: isSelected ? "var(--color-champagne)" : "var(--color-slate-gray)",
                              marginBottom: "0.15rem",
                            }}
                          >
                            Service 0{idx + 1}
                          </span>
                          <span
                            style={{
                              fontSize: "0.92rem",
                              fontWeight: 700,
                              lineHeight: 1.25,
                              display: "block",
                              color: isSelected ? "#FFFFFF" : "var(--color-midnight-navy)",
                            }}
                          >
                            {service.title}
                          </span>
                        </div>
                      </div>

                      <ArrowRight
                        size={15}
                        style={{
                          color: isSelected ? "var(--color-champagne)" : "rgba(8, 21, 33, 0.25)",
                          transform: isSelected ? "translateX(2px)" : "translateX(0)",
                          transition: "all 250ms ease",
                          flexShrink: 0,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================================
              Right Column: Rich Architectural Service Dossiers (Span 8)
              ========================================================================= */}
          <div
            style={{
              gridColumn: "span 8",
              display: "flex",
              flexDirection: "column",
              gap: "3.5rem",
            }}
            className="services-feed-column"
          >
            {CORE_SERVICES.map((service, idx) => {
              const media = SERVICE_MEDIA[service.id] || {
                image: "/images/fleet/premium-mpv.jpg",
                fleetPills: ["Corporate Sedans", "Premium MPVs"],
                slaHighlight: "24/7 Enterprise Reliability Standard",
              };
              const isCurrent = service.id === activeServiceId;

              return (
                <article
                  key={service.id}
                  id={`service-card-${service.id}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: isCurrent
                      ? "1px solid rgba(199, 166, 120, 0.45)"
                      : "1px solid rgba(8, 21, 33, 0.08)",
                    boxShadow: isCurrent
                      ? "0 18px 45px rgba(8, 21, 33, 0.08)"
                      : "0 10px 30px rgba(8, 21, 33, 0.04)",
                    transition: "all 350ms ease",
                    scrollMarginTop: "100px",
                  }}
                >
                  {/* Cinematic Fleet Image Header */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "300px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={media.image}
                      alt={`${service.title} - Milind Travels Mumbai`}
                      fill
                      sizes="(max-width: 900px) 100vw, 60vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 40%",
                      }}
                      priority={idx === 0}
                    />

                    {/* Gradient Depth Scrim */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(8, 21, 33, 0.35) 0%, rgba(8, 21, 33, 0.88) 100%)",
                      }}
                    />

                    {/* Top Floating Glass Badges */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        left: "1.5rem",
                        right: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "rgba(8, 21, 33, 0.82)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(199, 166, 120, 0.35)",
                          color: "var(--color-champagne)",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "20px",
                        }}
                      >
                        {service.badge || "Core Enterprise Vertical"}
                      </span>

                      <span
                        style={{
                          backgroundColor: "rgba(8, 21, 33, 0.82)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          color: "#FFFFFF",
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          padding: "0.35rem 0.85rem",
                          borderRadius: "20px",
                        }}
                      >
                        Est. 2000 Operational Standard
                      </span>
                    </div>

                    {/* Bottom Fleet Capacity Glass HUD */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.25rem",
                        left: "1.5rem",
                        right: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--color-champagne)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 700,
                            display: "block",
                            marginBottom: "0.2rem",
                          }}
                        >
                          Deployment Fleet Tier
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                          {media.fleetPills.map((pill) => (
                            <span
                              key={pill}
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.18)",
                                backdropFilter: "blur(10px)",
                                color: "#FFFFFF",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                padding: "0.25rem 0.65rem",
                                borderRadius: "4px",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                              }}
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "2.25rem",
                          fontWeight: 800,
                          color: "rgba(255, 255, 255, 0.25)",
                          lineHeight: 1,
                        }}
                      >
                        0{idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div style={{ padding: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                    {/* Header Title & Tagline */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--color-slate-gray)",
                          fontWeight: 700,
                          display: "block",
                          marginBottom: "0.35rem",
                        }}
                      >
                        Vertical 0{idx + 1} • Enterprise Specification
                      </span>
                      <h3
                        style={{
                          fontSize: "clamp(1.5rem, 2.3vw, 1.95rem)",
                          fontWeight: 800,
                          color: "var(--color-midnight-navy)",
                          lineHeight: 1.25,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1.05rem",
                          color: "var(--color-champagne-dark)",
                          fontWeight: 600,
                          lineHeight: 1.45,
                        }}
                      >
                        {service.shortTagline}
                      </p>
                    </div>

                    {/* Overview Paragraph */}
                    <p
                      style={{
                        fontSize: "0.96rem",
                        color: "var(--text-dark-secondary)",
                        lineHeight: 1.7,
                        marginBottom: "2rem",
                      }}
                    >
                      {service.overview}
                    </p>

                    {/* Operational Deliverables & Guarantees (2-Column Check Grid) */}
                    <div style={{ marginBottom: "2.25rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <Shield size={16} style={{ color: "var(--color-champagne-dark)" }} />
                        <h4
                          style={{
                            fontSize: "0.82rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--color-midnight-navy)",
                            fontWeight: 700,
                            margin: 0,
                          }}
                        >
                          Contractual Deliverables & SLA Guarantees
                        </h4>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "0.85rem",
                        }}
                      >
                        {service.keyBenefits.map((benefit) => (
                          <div
                            key={benefit}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.75rem",
                              padding: "0.85rem 1rem",
                              backgroundColor: "var(--bg-primary)",
                              borderRadius: "var(--radius-sm)",
                              border: "1px solid rgba(8, 21, 33, 0.06)",
                            }}
                          >
                            <CheckCircle2
                              size={17}
                              style={{
                                color: "var(--color-champagne-dark)",
                                flexShrink: 0,
                                marginTop: "0.15rem",
                              }}
                            />
                            <span
                              style={{
                                fontSize: "0.9rem",
                                color: "var(--text-dark-primary)",
                                lineHeight: 1.45,
                                fontWeight: 500,
                              }}
                            >
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Split: Applicable Fleets & Recommended Sectors */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "1.5rem",
                        padding: "1.5rem 0",
                        borderTop: "1px solid rgba(8, 21, 33, 0.08)",
                        borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
                        marginBottom: "2rem",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "var(--color-slate-gray)",
                            letterSpacing: "0.08em",
                            marginBottom: "0.55rem",
                          }}
                        >
                          Applicable Fleet Models
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                          {service.vehicleTypes.map((v) => (
                            <span
                              key={v}
                              style={{
                                fontSize: "0.82rem",
                                backgroundColor: "var(--bg-primary)",
                                padding: "0.3rem 0.75rem",
                                borderRadius: "4px",
                                fontWeight: 600,
                                color: "var(--color-midnight-navy)",
                                border: "1px solid rgba(8, 21, 33, 0.09)",
                              }}
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "var(--color-slate-gray)",
                            letterSpacing: "0.08em",
                            marginBottom: "0.55rem",
                          }}
                        >
                          Recommended Industry Sectors
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                          {service.idealFor.map((sector) => (
                            <span
                              key={sector}
                              style={{
                                fontSize: "0.82rem",
                                backgroundColor: "var(--bg-primary)",
                                padding: "0.3rem 0.75rem",
                                borderRadius: "4px",
                                fontWeight: 600,
                                color: "var(--color-midnight-navy)",
                                border: "1px solid rgba(8, 21, 33, 0.09)",
                              }}
                            >
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1.25rem",
                      }}
                    >
                      <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                        <Link
                          href={`/calculator?service=${service.id}`}
                          className="btn btn-navy"
                        >
                          <span>Inquire About {service.title}</span>
                          <ArrowRight size={16} />
                        </Link>
                        <Link href="/contact" className="btn btn-outline-dark">
                          <span>Custom SLA Spec</span>
                        </Link>
                      </div>

                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-slate-gray)",
                          fontWeight: 500,
                        }}
                      >
                        {media.slaHighlight}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive Breakpoint Helpers */}
      <style jsx>{`
        @media (max-width: 992px) {
          :global(.services-sticky-rail) {
            position: sticky !important;
            top: 76px !important;
            grid-column: span 12 !important;
            margin-bottom: 2rem;
            z-index: 50 !important;
          }
          :global(.services-nav-buttons) {
            flex-direction: row !important;
            overflow-x: auto !important;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          :global(.services-nav-buttons button) {
            min-width: 250px !important;
            transform: none !important;
          }
          :global(.services-feed-column) {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
