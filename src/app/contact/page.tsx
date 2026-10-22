import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Headquarters & Operations Desk | Milind Travels Private Limited",
  description:
    "Contact Milind Travels Private Limited at A-808, Kailas Business Park, Vikhroli West, Mumbai. Direct phone +91 92234 31020, email mumbai@milindtravels.com.",
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      <PageHeader
        eyebrow="DIRECT COMMERCIAL ENGAGEMENT"
        title="Contact Headquarters & Operations Desk"
        subtitle="Connect with our fleet directors at Kailas Business Park, Vikhroli West, for employee commute contracts, vehicle allocation, or corporate tariff discussions."
      />

      {/* Main Contact Section with Dual Addresses & Form */}
      <ContactSection />

      {/* Office Visiting & Transit Information */}
      <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
            <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
              Navigating to Our Vikhroli Headquarters
            </h2>
            <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
              Located in one of Central Mumbai’s prime commercial IT complexes with immediate access to the Eastern Express Highway and JVLR.
            </p>
          </div>

          <div className="grid-12">
            <div
              className="card-white"
              style={{
                gridColumn: "span 4",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong style={{ fontSize: "1.1rem", color: "var(--color-midnight-navy)", display: "block", marginBottom: "0.5rem" }}>
                  From Eastern Express Highway
                </strong>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dark-secondary)", lineHeight: 1.6 }}>
                  Exit at Vikhroli / Godrej junction onto Veer Savarkar Road towards Park Site. Kailas Business Park is situated approximately 1.5 km west.
                </p>
              </div>
            </div>

            <div
              className="card-white"
              style={{
                gridColumn: "span 4",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong style={{ fontSize: "1.1rem", color: "var(--color-midnight-navy)", display: "block", marginBottom: "0.5rem" }}>
                  From Powai & JVLR
                </strong>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dark-secondary)", lineHeight: 1.6 }}>
                  Direct 10-minute transit via the Vikhroli-Powai Link Road connecting Hiranandani Business Park with Veer Savarkar Road.
                </p>
              </div>
            </div>

            <div
              className="card-white"
              style={{
                gridColumn: "span 4",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong style={{ fontSize: "1.1rem", color: "var(--color-midnight-navy)", display: "block", marginBottom: "0.5rem" }}>
                  Operational Timings
                </strong>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dark-secondary)", lineHeight: 1.6 }}>
                  <strong>Commercial Office:</strong> Mon – Sat: 9:00 AM – 8:00 PM IST
                  <br />
                  <strong>Route Dispatch Desk:</strong> 24/7/365 Dedicated Coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
