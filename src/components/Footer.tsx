"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, Shield, ArrowUp } from "lucide-react";
import { CONTACT_INFO, SITE_METADATA } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="spyker-clean-footer">
      <div className="spyker-footer-inner">
        {/* =================================================================
            UPPER EDITORIAL SECTION (3-COLUMN LAYOUT LIKE SPYKER)
            ================================================================= */}
        <div className="spyker-footer-top">
          {/* Left Column: Brand Logo */}
          <div className="spyker-brand-col">
            <Link href="/" className="spyker-brand-link" title="Milind Travels — Home">
              <div className="spyker-logo-box">
                <Image
                  src="/images/brand/milind-logo-dark-2x.png"
                  alt="Milind Travels"
                  fill
                  priority
                  sizes="240px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "left top",
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Center Column: Prominent Editorial Navigation Links */}
          <div className="spyker-nav-col">
            <nav className="spyker-editorial-menu" aria-label="Footer Navigation">
              <Link href="/" className="spyker-menu-link">Home</Link>
              <Link href="/services" className="spyker-menu-link">Corporate Services</Link>
              <Link href="/fleet" className="spyker-menu-link">Fleet Architecture</Link>
              <Link href="/about" className="spyker-menu-link">Heritage (Est. 2000)</Link>
              <Link href="/corridors" className="spyker-menu-link">Mumbai Corridors</Link>
              <Link href="/operations" className="spyker-menu-link">Safety & Compliance</Link>
              <Link href="/calculator" className="spyker-menu-link">RFP Calculator</Link>
              <Link href="/contact" className="spyker-menu-link">Contact</Link>
            </nav>

            {/* Centered Communication & Social Icons */}
            <div className="spyker-social-row">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="spyker-icon-btn"
                title="Call Operations Desk"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.primaryEmail}`}
                className="spyker-icon-btn"
                title="Email Corporate Office"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="spyker-icon-btn"
                title="WhatsApp Fleet Desk"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href="#contact"
                className="spyker-icon-btn"
                title="Commercial Headquarters"
                aria-label="Location"
              >
                <MapPin size={16} />
              </a>
              <a
                href="/operations"
                className="spyker-icon-btn"
                title="Safety Standards"
                aria-label="Safety Standards"
              >
                <Shield size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Policies & Specialized Links */}
          <div className="spyker-policy-col">
            <div className="spyker-policy-group">
              <Link href="/operations" className="spyker-policy-link">Safety Governance</Link>
              <Link href="/clients" className="spyker-policy-link">Enterprise MSAs</Link>
              <Link href="/about" className="spyker-policy-link">Terms & Compliance</Link>
            </div>

            <div className="spyker-policy-group" style={{ marginTop: "2.5rem" }}>
              <Link href="/contact" className="spyker-policy-link">Corporate RFP Inquiry</Link>
              <Link href="/corridors" className="spyker-policy-link">24/7 Operations Hub</Link>
            </div>
          </div>
        </div>

        {/* =================================================================
            LOWER EDITORIAL METADATA BAR (5-COLUMN CLEAN GRID LIKE SPYKER)
            ================================================================= */}
        <div className="spyker-footer-bottom">
          {/* Column 1: Get in touch label */}
          <div className="spyker-meta-col">
            <span className="spyker-meta-label">Get in touch</span>
          </div>

          {/* Column 2: Primary Email */}
          <div className="spyker-meta-col">
            <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="spyker-meta-link">
              {CONTACT_INFO.primaryEmail}
            </a>
          </div>

          {/* Column 3: Corporate Hotline & Contracts */}
          <div className="spyker-meta-col">
            <span className="spyker-meta-muted">For corporate contracts:</span>
            <a href={`tel:${CONTACT_INFO.phone}`} className="spyker-meta-link">
              {CONTACT_INFO.phoneFormatted}
            </a>
          </div>

          {/* Column 4: Commercial HQ Address & Phone */}
          <div className="spyker-meta-col">
            <strong className="spyker-meta-title">Milind Travels HQ</strong>
            <p className="spyker-meta-address">
              A-808, Kailas Business Park, Veer Savarkar Road, Park Site, Vikhroli West, Mumbai - 400079
            </p>
            <span className="spyker-meta-phone">
              Tel: <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneFormatted}</a>
            </span>
          </div>

          {/* Column 5: Copyright & Registered Office */}
          <div className="spyker-meta-col spyker-col-right">
            <p className="spyker-copyright">
              © 2000–2026 Milind Travels. All Rights Reserved.
            </p>
            <p className="spyker-reg-office">
              Reg. Office: 1/3, Surju Yadav Niwas, Asalfa Village, Ghatkopar West, Mumbai - 400084
            </p>
            <button
              onClick={scrollToTop}
              className="spyker-back-top"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .spyker-clean-footer {
          width: 100%;
          background-color: #FFFFFF;
          color: #101010;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-family: var(--font-body);
        }

        .spyker-footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 4vw, 3.5rem) 2.5rem;
        }

        /* Upper 3-Column Section */
        .spyker-footer-top {
          display: grid;
          grid-template-columns: 280px 1fr 240px;
          column-gap: clamp(2rem, 5vw, 4rem);
          row-gap: 3rem;
          padding-bottom: clamp(3rem, 5vw, 4.5rem);
        }

        /* Left Column: Brand Logo */
        .spyker-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .spyker-brand-link {
          display: inline-block;
          text-decoration: none;
        }

        .spyker-logo-box {
          position: relative;
          width: 220px;
          height: 80px;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .spyker-logo-box:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        /* Center Column: Navigation */
        .spyker-nav-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: clamp(1rem, 3vw, 3rem);
        }

        .spyker-editorial-menu {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 2.25rem;
        }

        :global(.spyker-menu-link) {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 2.6vw, 2.35rem);
          font-weight: 500;
          color: #101010;
          text-decoration: none;
          line-height: 1.25;
          letter-spacing: -0.01em;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        :global(.spyker-menu-link:hover) {
          color: #C7A678;
          transform: translateX(4px);
        }

        /* Social / Contact Icons Row */
        .spyker-social-row {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          padding-top: 0.5rem;
        }

        .spyker-icon-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.14);
          background-color: transparent;
          color: #101010;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .spyker-icon-btn:hover {
          background-color: #101010;
          color: #FFFFFF;
          border-color: #101010;
          transform: translateY(-2px);
        }

        /* Right Column: Policies & Corporate Links */
        .spyker-policy-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        .spyker-policy-group {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        :global(.spyker-policy-link) {
          font-size: 0.88rem;
          color: #101010;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        :global(.spyker-policy-link:hover) {
          color: #C7A678;
        }

        /* Lower 5-Column Metadata Bar */
        .spyker-footer-bottom {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding-top: 2rem;
          display: grid;
          grid-template-columns: 140px 1.2fr 1.3fr 1.8fr 1.6fr;
          column-gap: 1.75rem;
          row-gap: 1.5rem;
          font-size: 0.82rem;
          color: #555555;
          line-height: 1.5;
        }

        .spyker-meta-col {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .spyker-meta-label {
          color: #101010;
          font-weight: 500;
        }

        .spyker-meta-link {
          color: #101010;
          text-decoration: none;
          transition: color 0.2s ease;
          word-break: break-all;
        }

        .spyker-meta-link:hover {
          color: #C7A678;
        }

        .spyker-meta-muted {
          color: #777777;
          font-size: 0.78rem;
        }

        .spyker-meta-title {
          color: #101010;
          font-weight: 600;
        }

        .spyker-meta-address {
          margin: 0;
          font-size: 0.78rem;
          color: #666666;
          line-height: 1.45;
        }

        .spyker-meta-phone {
          font-size: 0.78rem;
          color: #666666;
        }

        .spyker-meta-phone a {
          color: #101010;
          text-decoration: none;
        }

        .spyker-col-right {
          align-items: flex-start;
        }

        .spyker-copyright {
          margin: 0;
          color: #101010;
          font-weight: 500;
          font-size: 0.78rem;
        }

        .spyker-reg-office {
          margin: 0.2rem 0 0.5rem 0;
          font-size: 0.74rem;
          color: #777777;
          line-height: 1.4;
        }

        .spyker-back-top {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          padding: 0;
          font-size: 0.76rem;
          font-weight: 600;
          color: #101010;
          cursor: pointer;
          transition: color 0.2s ease;
          margin-top: 0.25rem;
        }

        .spyker-back-top:hover {
          color: #C7A678;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .spyker-footer-top {
            grid-template-columns: 200px 1fr 180px;
          }
          .spyker-footer-bottom {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 860px) {
          .spyker-footer-top {
            grid-template-columns: 1fr;
            row-gap: 2.5rem;
          }
          .spyker-nav-col {
            padding-left: 0;
          }
          .spyker-policy-col {
            align-items: flex-start;
            text-align: left;
          }
          .spyker-footer-bottom {
            grid-template-columns: 1fr;
            row-gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
