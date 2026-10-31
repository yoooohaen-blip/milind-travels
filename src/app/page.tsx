"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeIntroDirectorsSection from "@/components/HomeIntroDirectorsSection";
import HomeServicesShowcase from "@/components/HomeServicesShowcase";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BusFront,
  CarFront,
  Plane,
  Users,
  Car,
  MapPin,
  Clock,
  Briefcase,
  Building2,
  ChevronRight,
  CheckCircle2,
  CalendarRange,
  Crown,
  PlaneTakeoff,
} from "lucide-react";
import { CORE_SERVICES, FLEET_TIERS, HISTORICAL_CLIENTS, CONTACT_INFO, SITE_METADATA } from "@/data/content";

export default function HomePage() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "staff-transportation":
        return <BusFront size={20} strokeWidth={2.1} style={{ color: "var(--color-midnight-navy)" }} />;
      case "ad-hoc-duty":
        return <CarFront size={20} strokeWidth={2.1} style={{ color: "var(--color-midnight-navy)" }} />;
      case "airport-transfers":
        return <Plane size={20} strokeWidth={2.1} style={{ color: "var(--color-midnight-navy)" }} />;
      case "custom-packages":
      default:
        return <Briefcase size={20} strokeWidth={2.1} style={{ color: "var(--color-midnight-navy)" }} />;
    }
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Introduction of Milind Travels Private Limited & Board of Directors */}
      <HomeIntroDirectorsSection />

      {/* 2. Strategic Difference Teaser (Ad-Hoc vs Managed Enterprise Mobility) with Glass Bubbles */}
      <section
        className="section-py surface-light"
        style={{
          borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Floating Glass Bubbles in Section Background */}
        <div
          className="glass-ambient-orb"
          style={{
            top: "8%",
            left: "4%",
            width: "150px",
            height: "150px",
            animationDelay: "0s",
            opacity: 0.75,
          }}
        />
        <div
          className="glass-ambient-orb"
          style={{
            bottom: "10%",
            right: "5%",
            width: "190px",
            height: "190px",
            animationDelay: "-3.5s",
            opacity: 0.65,
          }}
        />
        <div
          className="glass-ambient-orb"
          style={{
            top: "22%",
            right: "30%",
            width: "85px",
            height: "85px",
            animationDelay: "-5s",
            opacity: 0.8,
          }}
        />
        <div
          className="glass-ambient-orb"
          style={{
            bottom: "8%",
            left: "25%",
            width: "115px",
            height: "115px",
            animationDelay: "-2s",
            opacity: 0.7,
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "3.5rem",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
              <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)" }}>
                The Difference Between Ad-Hoc Cabs
                <br />
                and Managed Corporate Mobility.
              </h2>
            </div>

            <Link href="/operations" className="btn btn-outline-light">
              <span>View Safety & Compliance Standards</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid-12">
            {[
              {
                title: "Guaranteed Route Punctuality",
                desc: "Assigned chauffeurs, mandatory 45-min pre-shift check-ins, and zero trip cancellations eliminate the commute chaos of retail cab apps.",
                link: "/operations",
              },
              {
                title: "Shift Roster Synchronization",
                desc: "Automated nodal routes aligned directly with your 24x7 operational windows, ensuring entire teams arrive together on time.",
                link: "/services",
              },
              {
                title: "Statutory & Women’s Safety",
                desc: "Strict drop-confirmation protocols, mandatory escorts for female night-shift passengers, and full commercial T-permit compliance.",
                link: "/operations",
              },
              {
                title: "Consolidated GST Billing",
                desc: "Single monthly enterprise invoices with transparent per-km indexing, replacing hundreds of scattered employee expense reimbursements.",
                link: "/calculator",
              },
            ].map((col, idx) => (
              <div
                key={col.title}
                className="glass-bubble-card"
                style={{
                  gridColumn: "span 3",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Diagonal Specular Glass Reflection Sheen */}
                <div className="glass-bubble-sheen" />

                {/* Decorative Micro Glass Bubble Cluster in Top-Right Corner */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "18px",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(199, 166, 120, 0.22) 55%, rgba(255, 255, 255, 0.1) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      boxShadow: "inset 1px 1px 3px rgba(255, 255, 255, 0.9), 0 4px 10px rgba(8, 21, 33, 0.04)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "6px",
                        width: "6px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.9)",
                        transform: "rotate(-30deg)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(199, 166, 120, 0.3) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.85)",
                      position: "absolute",
                      bottom: "-8px",
                      right: "-6px",
                      boxShadow: "0 2px 6px rgba(8, 21, 33, 0.05)",
                    }}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* 3D Spherical Glass Number Bubble */}
                  <div className="glass-number-bubble">
                    0{idx + 1}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-midnight-navy)",
                      marginBottom: "0.55rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {col.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-dark-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {col.desc}
                  </p>
                </div>

                <Link
                  href={col.link}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    color: "var(--color-midnight-navy)",
                    marginTop: "1.5rem",
                    transition: "gap var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-champagne-dark)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-midnight-navy)";
                  }}
                >
                  <span>Explore Standard</span>
                  <ChevronRight size={14} style={{ color: "var(--color-champagne-dark)" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Enterprise Services Portal Section */}
      <section
        className="section-py surface-light"
        style={{
          borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Glass Bubble Orbs in background */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "-4%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199, 166, 120, 0.16) 0%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(45px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199, 166, 120, 0.18) 0%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "2.75rem",
            }}
          >
            <div style={{ maxWidth: "760px" }}>
              <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)" }}>
                Customized Transportation Solutions
                <br />
                for Corporate Mumbai.
              </h2>
            </div>

            <Link href="/services" className="btn btn-navy">
              <span>View All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Panoramic Horizon Masterpiece Showcase (Zero generic boxes) */}
          <HomeServicesShowcase />
        </div>
      </section>

      {/* 4. Fleet Tiers Portal Section */}
      <section className="section-py surface-dark" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="site-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "3.5rem",
            }}
          >
            <div style={{ maxWidth: "760px" }}>
              <h2 className="text-section-title" style={{ color: "#FFFFFF" }}>
                Multi-Tier Corporate Fleet
                <br />
                Engineered for Every Requirement.
              </h2>
            </div>

            <Link href="/fleet" className="btn btn-champagne">
              <span>View Full Fleet Specifications</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid-12">
            {FLEET_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="card-dark"
                style={{
                  gridColumn: "span 4",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "160px",
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                      marginBottom: "1.25rem",
                      backgroundColor: "#0D1721",
                    }}
                  >
                    <Image
                      src={tier.imageSrc}
                      alt={tier.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <span style={{ fontSize: "0.75rem", color: "var(--color-champagne)", fontWeight: 700, textTransform: "uppercase" }}>
                    {tier.capacity.passengers}
                  </span>

                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.25rem", marginBottom: "0.4rem" }}>
                    {tier.category}
                  </h3>

                  <p style={{ fontSize: "0.82rem", color: "#C8D3DB", lineHeight: 1.5, marginBottom: "1rem" }}>
                    {tier.typicalModels.join(", ")}
                  </p>
                </div>

                <Link
                  href="/fleet"
                  className="btn btn-outline-dark btn-sm"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span>Tier Details</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Calculator Callout Banner */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div
            style={{
              backgroundColor: "var(--color-midnight-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(2.5rem, 5vw, 4rem)",
              color: "#FFFFFF",
              border: "1px solid rgba(199, 166, 120, 0.25)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "center",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Configure Your Corporate
                <br />
                Mobility RFP in 2 Minutes.
              </h2>
              <p style={{ fontSize: "1rem", color: "#C8D3DB", lineHeight: 1.6, marginBottom: "2rem" }}>
                Select your employee shift rotations, headcount scale, preferred vehicle class, and target Mumbai corridors.
                Receive an immediate structured specification dossier with direct WhatsApp dispatch.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/calculator" className="btn btn-champagne btn-lg">
                  <span>Launch RFP Route Calculator</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-outline-dark btn-lg">
                  <span>Contact Operations</span>
                </Link>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                padding: "2rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem", color: "#FFFFFF" }}>
                Enterprise Onboarding Checklist:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem" }}>
                {[
                  "Route Density & Nodal Analysis for Mumbai Traffic",
                  "Dedicated Standby Vehicles Stationed at Vikhroli Hub",
                  "Verified Commercial Chauffeurs & Background Checks",
                  "Mandatory Female Employee Escort Norms for Night Shifts",
                  "Consolidated Monthly GST Corporate Invoice",
                ].map((pt) => (
                  <li key={pt} style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "#C8D3DB" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-champagne)", flexShrink: 0 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Trust Strip with Infinite Auto-Scrolling (Only Logos) */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)", overflow: "hidden" }}>
        <div className="site-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", fontSize: "1.8rem" }}>
                Trusted Across 24+ Years of Operations
              </h2>
            </div>

            <Link href="/clients" className="btn btn-outline-light btn-sm">
              <span>View Client Portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Unlimited Automated Scrolling Marquee Strip */}
        <div className="home-client-marquee-wrapper">
          <div className="home-client-marquee-track">
            {[...HISTORICAL_CLIENTS, ...HISTORICAL_CLIENTS].map((client, idx) => (
              <div
                key={`home-client-${client.name}-${idx}`}
                className="home-logo-pill"
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
                    transition: "transform 0.25s ease",
                  }}
                  className="home-logo-img"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .home-client-marquee-wrapper {
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            overflow: hidden;
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 8%,
              black 92%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 8%,
              black 92%,
              transparent 100%
            );
            padding: 0.5rem 0;
          }

          .home-client-marquee-track {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            width: max-content;
            animation: homeMarqueeScroll 35s linear infinite;
            will-change: transform;
          }

          .home-client-marquee-track:hover {
            animation-play-state: paused;
          }

          .home-logo-pill {
            background-color: #FFFFFF;
            border: 1px solid rgba(8, 21, 33, 0.08);
            border-radius: 14px;
            height: 82px;
            min-width: 200px;
            padding: 0.75rem 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 14px rgba(8, 21, 33, 0.04);
            transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
            user-select: none;
          }

          .home-logo-pill:hover {
            transform: translateY(-3px) scale(1.02);
            border-color: rgba(199, 166, 120, 0.5);
            box-shadow: 0 10px 24px rgba(8, 21, 33, 0.08);
          }

          .home-logo-pill:hover :global(.home-logo-img) {
            transform: scale(1.05);
          }

          @keyframes homeMarqueeScroll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }

          @media (max-width: 768px) {
            .home-logo-pill {
              height: 68px;
              min-width: 160px;
              padding: 0.5rem 1rem;
            }
            .home-client-marquee-track {
              animation-duration: 25s;
            }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}
