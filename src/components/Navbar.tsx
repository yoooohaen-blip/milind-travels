"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const isVisibleRef = useRef(true);

  // Synchronize CSS variable and route changes
  useEffect(() => {
    isVisibleRef.current = true;
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--navbar-offset", "76px");
    }
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Initial sync
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--navbar-offset", "76px");
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Styling changes based on scroll depth
      setIsScrolled(currentScrollY > 40);

      // Always show navbar near top of page or when mobile drawer is open
      if (currentScrollY <= 45 || mobileMenuOpen) {
        if (!isVisibleRef.current) {
          setIsVisible(true);
          isVisibleRef.current = true;
          document.documentElement.style.setProperty("--navbar-offset", "76px");
        }
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      // Scrolling down past top bar -> hide navbar smoothly
      if (diff > 5 && currentScrollY > 50) {
        if (isVisibleRef.current) {
          setIsVisible(false);
          isVisibleRef.current = false;
          document.documentElement.style.setProperty("--navbar-offset", "0px");
        }
      }
      // Scrolling up -> reveal navbar smoothly
      else if (diff < -5) {
        if (!isVisibleRef.current) {
          setIsVisible(true);
          isVisibleRef.current = true;
          document.documentElement.style.setProperty("--navbar-offset", "76px");
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Fleet Tiers", href: "/fleet" },
    { label: "Mobility Calculator", href: "/calculator" },
    { label: "Safety & Compliance", href: "/operations" },
    { label: "Mumbai Corridors", href: "/corridors" },
    { label: "Clients", href: "/clients" },
    { label: "Heritage", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Sticky Header with Hide-on-Scroll */}
      <header
        id="site-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? "rgba(8, 21, 33, 0.96)" : "rgba(8, 21, 33, 0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: isScrolled
            ? "1px solid rgba(199, 166, 120, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition:
            "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), background-color 300ms ease, border-color 300ms ease, height 300ms ease",
          willChange: "transform",
        }}
      >
        <div
          className="site-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: isScrolled ? "70px" : "82px",
            transition: "height 300ms ease",
          }}
        >
          {/* Brand Mark with User's Transparent Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: isScrolled ? "165px" : "190px",
                height: isScrolled ? "50px" : "58px",
                transition: "all 300ms ease",
              }}
            >
              <Image
                src="/images/brand/milind-logo-white-2x.png"
                alt="Milind Travels"
                fill
                priority
                sizes="190px"
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))",
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation with Multi-Page Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.45rem",
            }}
            className="hidden-tablet"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--color-champagne)" : "#C8D3DB",
                    letterSpacing: "0.01em",
                    transition: "color 180ms ease",
                    position: "relative",
                    padding: "0.25rem 0",
                    borderBottom: isActive ? "2px solid var(--color-champagne)" : "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#C8D3DB";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
            className="hidden-tablet"
          >
            <Link
              href="/calculator"
              className="btn btn-champagne btn-sm"
            >
              <span>Request RFP</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              color: "#FFFFFF",
              padding: "0.5rem",
              borderRadius: "4px",
              display: "none",
            }}
            className="show-mobile-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(8, 21, 33, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 899,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ position: "relative", width: "170px", height: "55px", marginBottom: "0.5rem" }}>
              <Image
                src="/images/brand/milind-logo-white-2x.png"
                alt="Milind Travels"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#C7A678",
                fontWeight: 700,
              }}
            >
              Enterprise Portal Pages
            </span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: isActive ? "var(--color-champagne)" : "#FFFFFF",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingBottom: "0.65rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {link.label}
                  <ArrowUpRight size={16} style={{ color: "#C7A678" }} />
                </Link>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontSize: "0.8rem", color: "#81909A" }}>Corporate Mobility Hotline:</span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                style={{ fontSize: "1.1rem", fontWeight: 700, color: "#C7A678" }}
              >
                {CONTACT_INFO.phoneFormatted}
              </a>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Link
                href="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-champagne"
                style={{ flex: 1 }}
              >
                RFP Calculator
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-outline-dark"
                style={{ flex: 1 }}
              >
                Contact Desk
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Responsive helper styles for header */}
      <style jsx>{`
        @media (max-width: 1080px) {
          :global(.hidden-tablet) {
            display: none !important;
          }
          :global(.show-mobile-btn) {
            display: block !important;
          }
        }
        @media (max-width: 640px) {
          :global(.hidden-mobile) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
