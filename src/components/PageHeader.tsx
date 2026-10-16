"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-midnight-navy)",
        color: "#FFFFFF",
        paddingTop: "clamp(3.5rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
        borderBottom: "1px solid rgba(199, 166, 120, 0.25)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199, 166, 120, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Breadcrumb Trail */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--color-slate-gray)",
            marginBottom: "1.25rem",
          }}
          aria-label="Breadcrumbs"
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  style={{
                    color: "var(--color-slate-gray)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-champagne-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-slate-gray)";
                  }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "var(--color-champagne-light)", fontWeight: 600 }}>
                  {crumb.label}
                </span>
              )}
              {idx < breadcrumbs.length - 1 && <ChevronRight size={13} style={{ opacity: 0.6 }} />}
            </React.Fragment>
          ))}
          <ChevronRight size={13} style={{ opacity: 0.6 }} />
          <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{title}</span>
        </nav>

        {/* Title */}
        <h1
          className="text-editorial-headline"
          style={{
            color: "#FFFFFF",
            marginBottom: "1rem",
            maxWidth: "920px",
            fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lead"
          style={{
            color: "#C8D3DB",
            maxWidth: "760px",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
