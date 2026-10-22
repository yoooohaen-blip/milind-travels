"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(true);
  const [bgOpacity, setBgOpacity] = useState(1);
  const [logoTransform, setLogoTransform] = useState("translate3d(0, 0, 0) scale(1)");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Ensure scroll position starts at top to avoid coordinate offsets
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      document.documentElement.classList.add("preloader-active");
    }

    // 2. Begin transition to hero placeholder after a brief pause
    const transitionTimer = setTimeout(() => {
      const heroPlaceholder = document.getElementById("hero-logo-placeholder");
      const logoEl = logoRef.current;

      if (heroPlaceholder && logoEl) {
        const sourceRect = logoEl.getBoundingClientRect();
        const targetRect = heroPlaceholder.getBoundingClientRect();

        // Exact viewport coordinate translation
        const sourceCenterX = sourceRect.left + sourceRect.width / 2;
        const sourceCenterY = sourceRect.top + sourceRect.height / 2;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        const deltaX = Math.round(targetCenterX - sourceCenterX);
        const deltaY = Math.round(targetCenterY - sourceCenterY);

        // Precise height-based scale factor
        const sourceHeight = sourceRect.height || 125;
        const targetHeight = targetRect.height || 125;
        const scale = sourceHeight > 0 ? targetHeight / sourceHeight : 1;

        setIsTransitioning(true);
        setLogoTransform(`translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`);
        setBgOpacity(0);
      } else {
        // Fallback for subpages
        setIsTransitioning(true);
        setLogoTransform("translate3d(0, -16px, 0) scale(0.92)");
        setBgOpacity(0);
      }
    }, 450);

    // 3. Conclude transition and cleanly unmount
    const doneTimer = setTimeout(() => {
      document.documentElement.classList.remove("preloader-active");
      setShouldRender(false);
    }, 1300);

    return () => {
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
        transition: "opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
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

      {/* Pure Logo Only - Instant First Paint */}
      <div
        ref={logoRef}
        className="preloader-logo-frame"
        style={{
          transform: logoTransform,
          transition: isTransitioning
            ? "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)"
            : "none",
        }}
      >
        <Image
          src="/images/brand/milind-logo-white-2x.png"
          alt="Milind Travels Mumbai"
          width={500}
          height={175}
          priority
          sizes="500px"
          style={{
            objectFit: "contain",
            width: "auto",
            height: "125px",
            filter: "drop-shadow(0 6px 30px rgba(199, 166, 120, 0.5)) drop-shadow(0 3px 12px rgba(0, 0, 0, 0.85))",
          }}
        />
      </div>
    </div>
  );
}
