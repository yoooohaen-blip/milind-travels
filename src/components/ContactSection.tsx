"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/content";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Corporate Staff Transportation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="section-py surface-white" style={{ position: "relative" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "780px", marginBottom: "3.5rem" }}>
          <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}>
            Connect with Our Mumbai
            <br />
            Operations Headquarters.
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            Discuss employee shift transportation, request a detailed corporate tariff sheet,
            or arrange an on-site route consultation with our Vikhroli fleet directors.
          </p>
        </div>

        {/* Contact Layout: Left Contact Cards & Map, Right Inbound Form */}
        <div className="grid-12" style={{ alignItems: "stretch" }}>
          {/* Left Column: Office Details & Google Map (Span 6) */}
          <div
            style={{
              gridColumn: "span 6",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
            className="contact-info-column"
          >
            {/* Primary Office Card */}
            <div
              style={{
                backgroundColor: "var(--color-midnight-navy)",
                color: "#FFFFFF",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                border: "1px solid rgba(199, 166, 120, 0.25)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div style={{ position: "relative", width: "160px", height: "55px", marginBottom: "0.75rem" }}>
                <Image
                  src="/images/brand/milind-logo-white-2x.png"
                  alt="Milind Travels"
                  fill
                  sizes="160px"
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-champagne)",
                  marginBottom: "0.75rem",
                }}
              >
                <MapPin size={13} />
                <span>Primary Operations Hub</span>
              </div>

              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "#FFFFFF" }}>
                {CONTACT_INFO.communicationOffice.title}
              </h3>

              <p style={{ fontSize: "0.95rem", color: "#C8D3DB", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                {CONTACT_INFO.communicationOffice.fullAddress}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#81909A", textTransform: "uppercase" }}>
                    Corporate Mobile Hotline
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-champagne-light)" }}
                  >
                    {CONTACT_INFO.phoneFormatted}
                  </a>
                </div>

                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#81909A", textTransform: "uppercase" }}>
                    Headquarters Landline
                  </span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>
                    {CONTACT_INFO.landline}
                  </span>
                </div>
              </div>

              <div style={{ marginTop: "1.25rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={`mailto:${CONTACT_INFO.primaryEmail}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.85rem",
                    color: "#C8D3DB",
                  }}
                >
                  <Mail size={14} style={{ color: "var(--color-champagne)" }} />
                  <span>{CONTACT_INFO.primaryEmail}</span>
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.secondaryEmail}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.85rem",
                    color: "#C8D3DB",
                  }}
                >
                  <Mail size={14} style={{ color: "var(--color-champagne)" }} />
                  <span>{CONTACT_INFO.secondaryEmail}</span>
                </a>
              </div>
            </div>

            {/* Registered Entity Card (Separated as per guidelines) */}
            <div
              style={{
                backgroundColor: "var(--bg-primary)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem 1.75rem",
                border: "1px solid rgba(129, 144, 154, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-slate-gray)",
                  }}
                >
                  Statutory Registered Office
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--color-slate-gray)", fontWeight: 600 }}>
                  PIN: {CONTACT_INFO.registeredOffice.pincode}
                </span>
              </div>
              <strong style={{ fontSize: "1rem", color: "var(--color-midnight-navy)", display: "block", marginBottom: "0.25rem" }}>
                {CONTACT_INFO.registeredOffice.title}
              </strong>
              <p style={{ fontSize: "0.88rem", color: "var(--text-dark-secondary)", lineHeight: 1.5 }}>
                {CONTACT_INFO.registeredOffice.fullAddress}
              </p>
              <span style={{ display: "block", fontSize: "0.76rem", color: "var(--color-slate-gray)", marginTop: "0.4rem" }}>
                * Maintained for corporate and statutory record transparency.
              </span>
            </div>

            {/* Google Maps Embed for Kailas Business Park */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid rgba(129, 144, 154, 0.25)",
                height: "240px",
                position: "relative",
              }}
            >
              <iframe
                title="Milind Travels Kailas Business Park Location"
                src={CONTACT_INFO.communicationOffice.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Inbound Corporate Proposal Form (Span 6) */}
          <div
            style={{
              gridColumn: "span 6",
              backgroundColor: "var(--bg-primary)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(2rem, 3.5vw, 2.75rem)",
              border: "1px solid rgba(129, 144, 154, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow-sm)",
            }}
            className="contact-form-column"
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-champagne-dark)",
                  marginBottom: "0.35rem",
                }}
              >
                Inbound Corporate Inquiry
              </span>
              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "var(--color-midnight-navy)",
                  marginBottom: "0.5rem",
                }}
              >
                Request a Proposal or Fleet Meeting
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-dark-secondary)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.5,
                }}
              >
                Our commercial desk reviews corporate route requirements promptly.
                Share your parameters below for an immediate callback.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="contact-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 0.9rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        backgroundColor: "#FFFFFF",
                        fontSize: "0.92rem",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      COMPANY / ENTITY *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Organization Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 0.9rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        backgroundColor: "#FFFFFF",
                        fontSize: "0.92rem",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="contact-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="r.sharma@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 0.9rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        backgroundColor: "#FFFFFF",
                        fontSize: "0.92rem",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      DIRECT PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 92234 31020"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 0.9rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        backgroundColor: "#FFFFFF",
                        fontSize: "0.92rem",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                    PRIMARY SERVICE OF INTEREST
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 0.9rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(8, 21, 33, 0.2)",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.92rem",
                    }}
                  >
                    <option value="Staff Transportation">Staff Transportation (Daily Shift Rosters)</option>
                    <option value="Ad-Hoc Duty for Connected Clients">Ad-Hoc Duty for Connected Clients (Priority Dispatch)</option>
                    <option value="Airport Transfers for Connected Clients">Airport Transfers for Connected Clients (CSMIA T1/T2)</option>
                    <option value="Packages Tailored to Client Requirements">Packages Tailored to Client Requirements (Retainers / MSAs)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                    MESSAGE OR MOBILITY SCOPE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding shift timing, route clusters, vehicle preference, or estimated passenger count..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 0.9rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(8, 21, 33, 0.2)",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.92rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-champagne btn-lg"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  <Send size={16} />
                  <span>{loading ? "Transmitting Proposal..." : "Submit Inquiry to Milind Travels"}</span>
                </button>
              </form>

              {submitted && (
                <div
                  style={{
                    marginTop: "1.25rem",
                    padding: "1rem 1.25rem",
                    backgroundColor: "rgba(46, 125, 50, 0.12)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(46, 125, 50, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: "#2E7D32", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "#1B5E20", fontWeight: 600 }}>
                    Thank you. Your message has been routed to our corporate desk at Kailas Business Park. We will respond within 24 hours.
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "1.75rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(8, 21, 33, 0.08)",
                fontSize: "0.8rem",
                color: "var(--color-slate-gray)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Emergency 24x7 Route Hotline:</span>
              <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: "var(--color-midnight-navy)", fontWeight: 700 }}>
                {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.contact-info-column),
          :global(.contact-form-column) {
            grid-column: span 12 !important;
          }
          :global(.contact-row-2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
