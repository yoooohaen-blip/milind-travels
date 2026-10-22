import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeritageSection from "@/components/AboutHeritageSection";
import InteractiveHeritageTimeline from "@/components/InteractiveHeritageTimeline";
import HomeIntroDirectorsSection from "@/components/HomeIntroDirectorsSection";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_HERITAGE, CONTACT_INFO, SITE_METADATA } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us & Board of Directors | Milind Travels Private Limited",
  description:
    "Founded in 2000, Milind Travels Private Limited is an established corporate passenger transportation provider in Mumbai. Meet our Directors Milind Prabhakar Phodkar and Sarvesh Milind Phodkar.",
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      {/* Corporate Timeline Milestones with Scrollable Animation (Starting with Timeline) */}
      <section
        className="section-py surface-light"
        style={{
          borderBottom: "1px solid rgba(8, 21, 33, 0.08)",
          paddingTop: "clamp(3.5rem, 5vw, 4.5rem)",
        }}
      >
        <div className="site-container">
          <div style={{ maxWidth: "820px", marginBottom: "2.5rem" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-champagne)",
                marginBottom: "0.75rem",
              }}
            >
              Enterprise Evolution (2000 – Present)
            </span>
            <h1 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              Key Milestones in Our Growth
            </h1>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              Experience the evolution of Milind Travels across 24+ years—from pioneer corporate car rentals in Mumbai in 2000 to comprehensive enterprise mobility logistics today.
            </p>
          </div>

          {/* Interactive Scroll-Driven Timeline */}
          <InteractiveHeritageTimeline />
        </div>
      </section>

      {/* Introduction to Milind Travels Private Limited & Board of Directors */}
      <HomeIntroDirectorsSection />

      {/* Heritage Narrative & Mission/Vision/Values (Positioned After Timeline) */}
      <AboutHeritageSection />

      {/* Contact Call to Action */}
      <section
        style={{
          backgroundColor: "#081521",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="site-container">
          <div
            style={{
              padding: "2.5rem 3rem",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(199, 166, 120, 0.25)",
              borderRadius: "var(--radius-lg)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                Experience the Difference in Corporate Transport
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#C8D3DB" }}>
                Contact our commercial desk at Kailas Business Park, Vikhroli West.
              </p>
            </div>
            <Link href="/contact" className="btn btn-champagne">
              <span>Contact Headquarters</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
