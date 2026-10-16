"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check session storage so returning visits within same session are seamless
    const hasLoaded = sessionStorage.getItem("milind_preloader_seen");
    if (hasLoaded) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    let current = 0;
    const interval = setInterval(() => {
      // Sophisticated stepped acceleration curve
      const step = current < 30 ? 4 : current < 70 ? 7 : current < 90 ? 5 : 3;
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);

        // Pause briefly at 100% then lift curtain
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem("milind_preloader_seen", "true");
          // Remove from DOM after curtain transition finishes
          setTimeout(() => {
            setShouldRender(false);
          }, 950);
        }, 320);
      } else {
        setProgress(current);
      }
    }, 38);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      id="preloader-outer"
      className={`preloader-wrapper ${isFinished ? "preloader-exit" : ""}`}
      aria-hidden={isFinished}
    >
      {/* Ambient Radial Illumination */}
      <div className="preloader-ambient-glow" />

      <div className="preloader-content">
        {/* Brand Logo with Glow */}
        <div className="preloader-logo-frame">
          <Image
            src="/images/brand/milind-logo-white-2x.png"
            alt="Milind Travels Mumbai"
            width={260}
            height={90}
            priority
            sizes="260px"
            style={{
              objectFit: "contain",
              width: "auto",
              height: "72px",
              filter: "drop-shadow(0 4px 20px rgba(199, 166, 120, 0.45))",
            }}
          />
        </div>

        {/* Spyker-Inspired Minimalist Counter & Progress Bar */}
        <div className="preloader-metrics">
          <div className="preloader-counter">
            <span className="counter-number">
              {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}
            </span>
            <span className="counter-symbol">%</span>
          </div>

          {/* Ultra-thin hairline track */}
          <div className="preloader-track">
            <div
              className="preloader-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Editorial Tagline */}
          <div className="preloader-status">
            <span className="status-live-dot" />
            <span className="status-text">INITIALIZING ENTERPRISE FLEET DISPATCH</span>
            <span className="status-dot-sep">•</span>
            <span className="status-sub">EST. 2000</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-wrapper {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background-color: #050D15;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          will-change: transform;
          transition: transform 0.9s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .preloader-exit {
          transform: translateY(-100%);
          pointer-events: none;
        }

        .preloader-ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(199, 166, 120, 0.16) 0%,
            rgba(8, 21, 33, 0.3) 50%,
            transparent 70%
          );
          pointer-events: none;
          animation: pulsePreloadGlow 3s infinite ease-in-out;
        }

        @keyframes pulsePreloadGlow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        .preloader-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          max-width: 480px;
          width: 100%;
        }

        .preloader-logo-frame {
          margin-bottom: 2.25rem;
          animation: logoSubtleFloat 2.5s ease-in-out infinite alternate;
        }

        @keyframes logoSubtleFloat {
          0% {
            transform: translateY(0px) scale(0.98);
          }
          100% {
            transform: translateY(-4px) scale(1.02);
          }
        }

        .preloader-metrics {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 320px;
        }

        .preloader-counter {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #FFFFFF;
          margin-bottom: 0.85rem;
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
        }

        .counter-number {
          font-variant-numeric: tabular-nums;
          color: #FFFFFF;
        }

        .counter-symbol {
          font-size: 0.75rem;
          color: var(--color-champagne);
          font-weight: 600;
        }

        .preloader-track {
          width: 100%;
          height: 1.5px;
          background-color: rgba(255, 255, 255, 0.12);
          overflow: hidden;
          position: relative;
          border-radius: 2px;
          margin-bottom: 1.25rem;
        }

        .preloader-fill {
          height: 100%;
          background: linear-gradient(90deg, #A58253 0%, #C7A678 60%, #FFFFFF 100%);
          box-shadow: 0 0 10px rgba(199, 166, 120, 0.75);
          transition: width 0.05s linear;
        }

        .preloader-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #81909A;
          font-weight: 600;
        }

        .status-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #2ED573;
          box-shadow: 0 0 8px #2ED573;
          animation: blinkDot 1s infinite alternate;
        }

        @keyframes blinkDot {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        .status-dot-sep {
          color: rgba(255, 255, 255, 0.25);
        }

        .status-sub {
          color: var(--color-champagne-light);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
