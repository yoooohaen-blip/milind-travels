"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(true);
  const [bgOpacity, setBgOpacity] = useState(1);
  const [logoStyle, setLogoStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: "scale(0.92)",
    transition: "opacity 0.35s ease-out, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
  });
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Mark preloader as active on root to coordinate hand-off
    document.documentElement.classList.add("preloader-active");

    // 2. Subtle luxury entrance for the centered logo
    const enterTimer = setTimeout(() => {
      setLogoStyle({
        opacity: 1,
        transform: "scale(1)",
        transition: "opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      });
    }, 40);

    // 3. Initiate the transition to the hero placeholder
    const transitionTimer = setTimeout(() => {
      const heroPlaceholder = document.getElementById("hero-logo-placeholder");
      const logoEl = logoRef.current;

      if (heroPlaceholder && logoEl) {
        const sourceRect = logoEl.getBoundingClientRect();
        const targetRect = heroPlaceholder.getBoundingClientRect();

        // Viewport coordinate deltas
        const sourceCenterX = sourceRect.left + sourceRect.width / 2;
        const sourceCenterY = sourceRect.top + sourceRect.height / 2;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        const deltaX = Math.round(targetCenterX - sourceCenterX);
        const deltaY = Math.round(targetCenterY - sourceCenterY);

        // Scale ratio matching rendered target height
        const sourceHeight = sourceRect.height || 76;
        const targetHeight = targetRect.height || 76;
        const scale = sourceHeight > 0 ? targetHeight / sourceHeight : 1;

        // Animate preloader logo directly into the hero placeholder coordinates
        setLogoStyle({
          opacity: 1,
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`,
          transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
        });

        // Dissolve dark backdrop concurrently to unveil the hero section beneath
        setBgOpacity(0);
      } else {
        // Fallback for subpages without a hero placeholder
        setLogoStyle({
          opacity: 0,
          transform: "scale(0.9)",
          transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        });
        setBgOpacity(0);
      }
    }, 600);

    // 4. Conclude transition: reveal hero placeholder and unmount preloader
    const doneTimer = setTimeout(() => {
      document.documentElement.classList.remove("preloader-active");
      setShouldRender(false);
    }, 1500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(transitionTimer);
      clearTimeout(doneTimer);
      document.documentElement.classList.remove("preloader-active");
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      id="preloader-outer"
      className="preloader-wrapper"
      style={{
        opacity: bgOpacity,
        pointerEvents: bgOpacity === 0 ? "none" : "auto",
      }}
      aria-hidden={bgOpacity === 0}
    >
      {/* Ambient Radial Luxury Glow */}
      <div
        className="preloader-ambient-glow"
        style={{
          opacity: bgOpacity > 0 ? 0.8 : 0,
          transition: "opacity 0.6s ease",
        }}
      />

      {/* Pure Logo Only */}
      <div
        ref={logoRef}
        className="preloader-logo-frame"
        style={logoStyle}
      >
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
            height: "76px",
            filter: "drop-shadow(0 4px 24px rgba(199, 166, 120, 0.45)) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8))",
          }}
        />
      </div>

      <style jsx>{`
        .preloader-wrapper {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background-color: #050D15;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          will-change: opacity;
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .preloader-ambient-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(199, 166, 120, 0.2) 0%,
            rgba(8, 21, 33, 0.35) 50%,
            transparent 70%
          );
          pointer-events: none;
        }

        .preloader-logo-frame {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, opacity;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
}
