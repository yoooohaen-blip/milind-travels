"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("services") || document.getElementById("calculator");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <section id="high-impact-hero" className="spyker-hero">
      {/* Cinematic Widescreen Background with Slow Ken-Burns Scale */}
      <div className="spyker-hero-media">
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Milind Travels Executive Fleet Lineup at Mumbai Corporate Headquarters"
          fill
          priority
          sizes="100vw"
          className="spyker-hero-bg-img"
        />

        {/* Spyker-Style Lens Vignette & Gradient Overlays */}
        <div className="spyker-hero-vignette" />
        <div className="spyker-hero-top-gradient" />
        <div className="spyker-hero-bottom-gradient" />
      </div>

      {/* Centered Monumental Editorial Content */}
      <div className="spyker-hero-center-container">
        <div className="spyker-hero-content-wrapper">
          {/* Brand Logo Anchor / Hero Placeholder for Preloader Transition */}
          <div id="hero-logo-placeholder" className="hero-logo-placeholder">
            <Image
              src="/images/brand/milind-logo-white-2x.png"
              alt="Milind Travels Mumbai"
              width={500}
              height={175}
              priority
              sizes="(max-width: 768px) 320px, 500px"
              style={{
                objectFit: "contain",
                width: "auto",
                height: "clamp(95px, 13vw, 160px)",
                filter: "drop-shadow(0 6px 30px rgba(199, 166, 120, 0.5)) drop-shadow(0 3px 12px rgba(0, 0, 0, 0.85))",
              }}
            />
          </div>

          {/* Monumental Ultra-Bold Headline */}
          <h1 className="spyker-headline">
            <span className="headline-block">UNCOMPROMISING</span>
            <span className="headline-block headline-gold">FLEET LOGISTICS</span>
          </h1>

          {/* Founding Axiom Heritage Sub-headline */}
          <div className="spyker-axiom-wrapper">
            <p className="spyker-axiom-text">
              “Delivering more than what is promised across 24+ years of continuous passenger transportation in Mumbai.”
            </p>
            <p className="spyker-sub-description">
              Specialized corporate staff transit, dedicated turnkey fleet rosters, and discreet executive chauffeur mobility for Mumbai’s leading multinational enterprises.
            </p>
          </div>

          {/* Spyker-Style High-Impact Action Buttons */}
          <div className="spyker-cta-group">
            <Link href="/fleet" className="spyker-btn-solid">
              <span>EXPLORE FLEET TIERS</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link href="/calculator" className="spyker-btn-outline">
              <Sparkles size={15} style={{ color: "var(--color-champagne)" }} />
              <span>CONFIGURE RFP PROPOSAL</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Telemetry & Status HUD (Spyker Style) */}
      <div className="spyker-bottom-hud">
        <div className="site-container hud-flex-container">
          <div style={{ flex: 1 }} className="hud-spacer" />

          {/* Center: Minimalist Scroll Cue */}
          <button
            onClick={scrollToNext}
            className="hud-scroll-cue"
            aria-label="Scroll to explore services"
          >
            <span className="scroll-cue-text">SCROLL TO EXPLORE</span>
            <div className="scroll-cue-line">
              <div className="scroll-cue-pulse" />
            </div>
          </button>

          {/* Right: Direct Fleet Dispatch Hotline */}
          <div className="hud-hotline-item" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <a href={`tel:${CONTACT_INFO.phone}`} className="hud-hotline-link">
              <Phone size={13} style={{ color: "var(--color-champagne)" }} />
              <span>DISPATCH: {CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .spyker-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #050D15;
          color: #FFFFFF;
          overflow: hidden;
          width: 100%;
        }

        /* 1. Cinematic Background */
        .spyker-hero-media {
          position: absolute;
          inset: -5%;
          z-index: 0;
          overflow: hidden;
        }

        :global(.spyker-hero-bg-img) {
          object-fit: cover;
          object-position: center 40%;
          animation: cinematicKenBurns 30s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes cinematicKenBurns {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.06) translate3d(-1%, -1%, 0);
          }
          100% {
            transform: scale(1.03) translate3d(1%, 0.5%, 0);
          }
        }

        .spyker-hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 45%,
            rgba(5, 13, 21, 0.45) 0%,
            rgba(5, 13, 21, 0.85) 65%,
            rgba(5, 13, 21, 0.98) 100%
          );
        }

        .spyker-hero-top-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: linear-gradient(180deg, rgba(8, 21, 33, 0.9) 0%, transparent 100%);
        }

        .spyker-hero-bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 240px;
          background: linear-gradient(0deg, #081521 0%, rgba(8, 21, 33, 0.75) 50%, transparent 100%);
        }

        /* 2. Center Monumental Typography */
        .spyker-hero-center-container {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(5rem, 10vw, 7.5rem) 1.5rem clamp(6.5rem, 12vw, 8rem);
        }

        .spyker-hero-content-wrapper {
          max-width: 960px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .spyker-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-size: clamp(0.72rem, 1.2vw, 0.82rem);
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.5rem;
          padding: 0.4rem 1.1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(199, 166, 120, 0.25);
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .spyker-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-champagne);
          box-shadow: 0 0 8px var(--color-champagne);
        }

        .spyker-eyebrow-sep {
          color: rgba(255, 255, 255, 0.3);
        }

        .spyker-eyebrow-gold {
          color: var(--color-champagne-light);
          font-weight: 700;
        }

        .hero-logo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(1.5rem, 2.8vw, 2.25rem);
          min-height: clamp(95px, 13vw, 160px);
          will-change: transform, opacity;
          transition: opacity 0.3s ease;
        }

        :global(html.preloader-active) .hero-logo-placeholder {
          opacity: 0 !important;
          visibility: hidden !important;
        }

        .spyker-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 6.8vw, 5.8rem);
          font-weight: 800;
          text-transform: uppercase;
          line-height: 0.9;
          letter-spacing: 0.03em;
          color: #FFFFFF;
          margin-bottom: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .headline-block {
          display: block;
          white-space: nowrap;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
        }

        .headline-gold {
          background: linear-gradient(135deg, #FFFFFF 0%, #E8D3B9 40%, #C7A678 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .spyker-axiom-wrapper {
          max-width: 720px;
          margin-bottom: 2.75rem;
        }

        .spyker-axiom-text {
          font-family: var(--font-heading);
          font-size: clamp(1.05rem, 1.8vw, 1.3rem);
          font-style: italic;
          color: #FFFFFF;
          line-height: 1.5;
          margin-bottom: 0.85rem;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
        }

        .spyker-sub-description {
          font-family: var(--font-body);
          font-size: clamp(0.88rem, 1.3vw, 0.98rem);
          color: #C8D3DB;
          line-height: 1.65;
          max-width: 640px;
          margin: 0 auto;
        }

        /* 3. Spyker-Style Luxury Action Buttons */
        .spyker-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          width: 100%;
        }

        :global(.spyker-btn-solid) {
          min-width: 220px;
          height: 48px;
          padding: 0 2rem;
          background-color: #FFFFFF;
          color: #081521;
          border-radius: 4px;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          text-decoration: none;
          box-shadow: 0 4px 25px rgba(255, 255, 255, 0.2);
          transition: all 0.25s ease;
        }

        :global(.spyker-btn-solid:hover) {
          background-color: var(--color-champagne);
          color: #081521;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(199, 166, 120, 0.4);
        }

        :global(.spyker-btn-outline) {
          min-width: 220px;
          height: 48px;
          padding: 0 2rem;
          background-color: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 4px;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          text-decoration: none;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.25s ease;
        }

        :global(.spyker-btn-outline:hover) {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: var(--color-champagne);
          color: var(--color-champagne-light);
          transform: translateY(-2px);
        }

        /* 4. Floating Bottom Telemetry & Status HUD */
        .spyker-bottom-hud {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(8, 21, 33, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 1rem 0;
        }

        .hud-flex-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .hud-status-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hud-live-beacon {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #2ED573;
          box-shadow: 0 0 10px #2ED573;
          animation: beaconPulse 2s infinite ease-in-out;
          flex-shrink: 0;
        }

        @keyframes beaconPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.7);
            opacity: 0.5;
          }
        }

        .hud-meta {
          display: flex;
          flex-direction: column;
        }

        .hud-strong {
          font-size: 0.76rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .hud-sub {
          font-size: 0.68rem;
          color: #81909A;
        }

        .hud-scroll-cue {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: #81909A;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0;
        }

        .hud-scroll-cue:hover {
          color: var(--color-champagne-light);
        }

        .scroll-cue-text {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .scroll-cue-line {
          width: 1px;
          height: 22px;
          background: rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .scroll-cue-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: var(--color-champagne);
          animation: cueScroll 1.8s infinite ease-in-out;
        }

        @keyframes cueScroll {
          0% {
            transform: translateY(-8px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(22px);
            opacity: 0;
          }
        }

        .hud-hotline-item {
          display: flex;
          align-items: center;
        }

        .hud-hotline-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .hud-hotline-link:hover {
          color: var(--color-champagne-light);
        }

        /* Responsive Breakpoints */
        @media (max-width: 860px) {
          .headline-block {
            white-space: normal;
          }
          .spyker-headline {
            font-size: clamp(2.4rem, 10vw, 3.8rem);
          }
          .spyker-btn-solid,
          .spyker-btn-outline {
            width: 100%;
          }
          .hud-scroll-cue {
            display: none;
          }
          .hud-flex-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
