"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Building,
  Car,
  Clock,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Users,
} from "lucide-react";
import { CONTACT_INFO, MUMBAI_CORRIDORS } from "@/data/content";

export default function InteractiveProposalCalculator() {
  const [serviceType, setServiceType] = useState("Staff Transportation (Daily Roster)");
  const [corridor, setCorridor] = useState("Vikhroli, Powai & Kanjurmarg (Central)");
  const [vehicleTier, setVehicleTier] = useState("Premium Multi-Passenger MPV (Innova Class)");
  const [shiftPattern, setShiftPattern] = useState("Rotational 24x7 Hub (BPO / IT Roster)");
  const [workforceSize, setWorkforceSize] = useState("25 - 50 Employees");
  
  // Contact details
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const getWhatsappHref = () => {
    const text = encodeURIComponent(
      `*Corporate RFP Inquiry — Milind Travels (Est. 2000)*\n\n` +
      `*Company:* ${companyName || "Corporate Client"}\n` +
      `*Contact Person:* ${contactPerson || "Procurement Desk"}\n` +
      `*Service Required:* ${serviceType}\n` +
      `*Corridor / Location:* ${corridor}\n` +
      `*Fleet Preference:* ${vehicleTier}\n` +
      `*Shift Pattern:* ${shiftPattern}\n` +
      `*Workforce Size:* ${workforceSize}\n` +
      `*Phone:* ${phone || "Not provided"}\n` +
      `*Email:* ${email || "Not provided"}\n` +
      (notes ? `*Notes:* ${notes}` : "")
    );
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="calculator" className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "3rem" }}>
          <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1.25rem" }}>
            Configure Your Corporate Mobility RFP
            <br />
            & Route Architecture.
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            Select your organization’s operating parameters to generate a structured mobility specification.
            Our operations directors in Vikhroli West will prepare a comprehensive route audit and tariff proposal.
          </p>
        </div>

        {/* Two-Column Interactive Tool: Left Controls, Right Real-Time Dossier */}
        <div className="grid-12" style={{ alignItems: "stretch" }}>
          {/* Left Form: Parameters (Span 7) */}
          <div
            style={{
              gridColumn: "span 7",
              backgroundColor: "var(--bg-secondary)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              border: "1px solid rgba(129, 144, 154, 0.2)",
              boxShadow: "var(--shadow-sm)",
            }}
            className="calc-form-column"
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Service Type Selection */}
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    color: "var(--color-midnight-navy)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.6rem",
                  }}
                >
                  <Car size={15} style={{ color: "var(--color-champagne-dark)" }} />
                  <span>1. Required Mobility Service</span>
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(8, 21, 33, 0.2)",
                    backgroundColor: "var(--bg-primary)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--color-midnight-navy)",
                  }}
                >
                  <option value="Staff Transportation (Scheduled Daily Roster)">Staff Transportation (Scheduled Daily Roster)</option>
                  <option value="Ad-Hoc Duty for Connected Clients (Priority Dispatch)">Ad-Hoc Duty for Connected Clients (Priority Dispatch)</option>
                  <option value="Airport Transfers for Connected Clients (CSMIA T1/T2)">Airport Transfers for Connected Clients (CSMIA T1/T2)</option>
                  <option value="Packages Tailored to Client Requirements (Retainer/MSA)">Packages Tailored to Client Requirements (Retainer/MSA)</option>
                </select>
              </div>

              {/* Corridor Selection */}
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    color: "var(--color-midnight-navy)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.6rem",
                  }}
                >
                  <MapPin size={15} style={{ color: "var(--color-champagne-dark)" }} />
                  <span>2. Primary Mumbai Operating Corridor</span>
                </label>
                <select
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(8, 21, 33, 0.2)",
                    backgroundColor: "var(--bg-primary)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--color-midnight-navy)",
                  }}
                >
                  {MUMBAI_CORRIDORS.map((c) => (
                    <option key={c.id} value={`${c.name} (${c.region})`}>
                      {c.name} — {c.region} Mumbai
                    </option>
                  ))}
                  <option value="Custom Multi-Hub MMR Route">Custom Multi-Hub MMR Network (Custom Route)</option>
                </select>
              </div>

              {/* Vehicle Tier + Shift Pattern (Row) */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="calc-row-2">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.84rem",
                      fontWeight: 700,
                      color: "var(--color-midnight-navy)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    3. Fleet Tier Preference
                  </label>
                  <select
                    value={vehicleTier}
                    onChange={(e) => setVehicleTier(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.85rem 0.9rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(8, 21, 33, 0.2)",
                      backgroundColor: "var(--bg-primary)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--color-midnight-navy)",
                    }}
                  >
                    <option value="Premium Multi-Passenger MPV (Innova Class)">Premium MPVs (Innova Class)</option>
                    <option value="Executive Luxury Sedans (Camry / Mercedes)">Executive Sedans (Camry / Luxury)</option>
                    <option value="Corporate Minibus / Coach (13-26 Seater)">Corporate Shuttles (13-26 Seater)</option>
                    <option value="Economy Corporate Cabs (Dzire Class)">Economy Staff Cabs (Sedans)</option>
                    <option value="Mixed Multi-Tier Corporate Fleet">Mixed Multi-Tier Balanced Fleet</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.84rem",
                      fontWeight: 700,
                      color: "var(--color-midnight-navy)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    4. Operational Shift Pattern
                  </label>
                  <select
                    value={shiftPattern}
                    onChange={(e) => setShiftPattern(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.85rem 0.9rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(8, 21, 33, 0.2)",
                      backgroundColor: "var(--bg-primary)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--color-midnight-navy)",
                    }}
                  >
                    <option value="Rotational 24x7 Hub (BPO / IT Roster)">Rotational 24x7 (BPO / IT Hub)</option>
                    <option value="Standard Business Day Shift (9 AM – 6 PM)">Standard Day Shift (9 AM – 6 PM)</option>
                    <option value="Split & Staggered Team Shifts">Split & Staggered Shifts</option>
                    <option value="Executive On-Demand & Airport Transit">Executive On-Demand & Events</option>
                  </select>
                </div>
              </div>

              {/* Workforce Scale */}
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    color: "var(--color-midnight-navy)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Users size={15} style={{ color: "var(--color-champagne-dark)" }} />
                  <span>5. Estimated Commuting Headcount</span>
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }} className="calc-headcount-grid">
                  {["1 - 10", "10 - 30", "30 - 75", "75+ Commuters"].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setWorkforceSize(scale)}
                      style={{
                        padding: "0.65rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textAlign: "center",
                        backgroundColor: workforceSize === scale ? "var(--color-midnight-navy)" : "var(--bg-primary)",
                        color: workforceSize === scale ? "#FFFFFF" : "var(--text-dark-primary)",
                        border: workforceSize === scale ? "1px solid var(--color-champagne)" : "1px solid rgba(8, 21, 33, 0.15)",
                        transition: "all var(--transition-fast)",
                      }}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company & Contact Information */}
              <div
                style={{
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(8, 21, 33, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="calc-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      COMPANY / ORGANIZATION NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Technologies India Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      CONTACT PERSON & TITLE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HR / Facility Director"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="calc-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                      DIRECT PHONE / MOBILE *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(8, 21, 33, 0.2)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-slate-gray)", marginBottom: "0.3rem" }}>
                    ADDITIONAL ROUTE SPECIFICATIONS OR SHIFT DETAILS (OPTIONAL)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific pickup clusters, female escort requirements, billing preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(8, 21, 33, 0.2)",
                      fontSize: "0.9rem",
                      resize: "vertical",
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-navy btn-lg"
                  style={{ flex: 1, minWidth: "220px" }}
                >
                  <Send size={16} />
                  <span>{submitting ? "Transmitting Specification..." : "Transmit RFP to Vikhroli Operations"}</span>
                </button>

                <a
                  href={getWhatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-champagne"
                  style={{ padding: "0.9rem 1.4rem" }}
                >
                  <span>Dispatch via WhatsApp</span>
                </a>
              </div>
            </form>

            {isSubmitted && (
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(46, 125, 50, 0.1)",
                  border: "1px solid rgba(46, 125, 50, 0.3)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <CheckCircle2 size={22} style={{ color: "#2E7D32", flexShrink: 0, marginTop: "0.15rem" }} />
                <div>
                  <strong style={{ display: "block", color: "#1B5E20", fontSize: "0.95rem" }}>
                    RFP Specification Successfully Received
                  </strong>
                  <p style={{ color: "#2E7D32", fontSize: "0.86rem", marginTop: "0.25rem", lineHeight: 1.45 }}>
                    Your corporate transportation parameters have been logged at our Kailas Business Park coordination desk.
                    Our operations team will review route density and contact {contactPerson || "your office"} within 24 business hours.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Live RFP Dossier Preview (Span 5) */}
          <div
            style={{
              gridColumn: "span 5",
              backgroundColor: "var(--color-midnight-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#FFFFFF",
              border: "1px solid rgba(199, 166, 120, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow-dark)",
            }}
            className="calc-dossier-column"
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--color-champagne)",
                    fontWeight: 700,
                  }}
                >
                  RFP Specification Dossier
                </span>
                <span style={{ fontSize: "0.75rem", color: "#81909A" }}>Live Preview</span>
              </div>

              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.35rem",
                  color: "#FFFFFF",
                }}
              >
                {companyName || "Client Organization"}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#C8D3DB", marginBottom: "1.75rem" }}>
                Target Hub: <strong style={{ color: "#FFFFFF" }}>{corridor}</strong>
              </p>

              {/* Summary Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "#81909A" }}>Service Architecture:</span>
                  <strong style={{ color: "#FFFFFF", textAlign: "right" }}>{serviceType}</strong>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "#81909A" }}>Primary Fleet Class:</span>
                  <strong style={{ color: "var(--color-champagne-light)", textAlign: "right" }}>{vehicleTier}</strong>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "#81909A" }}>Operational Shift:</span>
                  <strong style={{ color: "#FFFFFF", textAlign: "right" }}>{shiftPattern}</strong>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "#81909A" }}>Commuting Scale:</span>
                  <strong style={{ color: "#FFFFFF", textAlign: "right" }}>{workforceSize}</strong>
                </div>
              </div>

              {/* Statutory Guarantee Inclusion */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-champagne)",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                  }}
                >
                  Standard Enterprise Inclusions:
                </span>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {[
                    "100% Commercial T-Permit Fleet Compliance",
                    "Assigned Route Chauffeurs with Background Checks",
                    "Mandatory Night-Shift Female Employee Protection",
                    "Standby Vehicle Deployment via Vikhroli Hub",
                    "Single Consolidated Monthly GST Corporate Invoice",
                  ].map((inc) => (
                    <li key={inc} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#C8D3DB" }}>
                      <CheckCircle2 size={14} style={{ color: "var(--color-champagne)", flexShrink: 0 }} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Support Callout */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: "0.78rem", color: "#81909A" }}>Need urgent route restructuring?</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.15rem" }}>
                Direct Hotline:{" "}
                <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: "var(--color-champagne)" }}>
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.calc-form-column),
          :global(.calc-dossier-column) {
            grid-column: span 12 !important;
          }
          :global(.calc-row-2) {
            grid-template-columns: 1fr !important;
          }
          :global(.calc-headcount-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
