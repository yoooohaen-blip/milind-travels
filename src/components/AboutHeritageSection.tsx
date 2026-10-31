"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { COMPANY_HERITAGE, CONTACT_INFO } from "@/data/content";
import {
  Compass,
  Target,
  HeartHandshake,
  UploadCloud,
  FileText,
  CheckCircle2,
  X,
  Briefcase,
  User,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Send,
  Building2,
} from "lucide-react";

export default function AboutHeritageSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "Corporate Chauffeur",
    experience: "1 - 3 Years",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10MB limit. Please upload a smaller file.");
      return;
    }

    const validExtensions = [".pdf", ".doc", ".docx"];
    const ext = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validExtensions.includes(ext)) {
      setFileError("Invalid format. Please upload a PDF, DOC, or DOCX document.");
      return;
    }

    setFileError("");
    setCvFile(file);
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      role: "Corporate Chauffeur",
      experience: "1 - 3 Years",
      message: "",
    });
    setCvFile(null);
    setFileError("");
    setIsSubmitted(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="heritage" className="section-py surface-dark" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
          <h2 className="text-section-title" style={{ color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Decades of Continuity in Mumbai’s
            <br />
            Dynamic Enterprise Landscape.
          </h2>

          <p className="text-lead" style={{ color: "#C8D3DB" }}>
            Established in April 2000 as a proprietorship firm with just one vehicle, Milind Travels began providing cab services to call centres and BPO companies, growing into an enterprise partner operating 80+ owned and ~500 attached vehicles.
          </p>
        </div>

        {/* Narrative & Image Composition (Grid 12) */}
        <div className="grid-12" style={{ alignItems: "center", marginBottom: "4rem" }}>
          {/* Story Narrative (Span 7) */}
          <div style={{ gridColumn: "span 7" }} className="heritage-story-column">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#C8D3DB",
                  lineHeight: 1.7,
                }}
              >
                Established in April 2000 as a proprietorship firm, Milind Travels began its journey with just one vehicle, providing cab services to call centres and BPO companies. Over the years, through our commitment to reliable service, operational excellence, and customer satisfaction, we have steadily expanded our business and client base.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#9EAAB4",
                  lineHeight: 1.7,
                }}
              >
                In August 2025, the business transitioned into Milind Travels Private Limited, marking a significant milestone in our growth and strengthening our foundation for future expansion. Today, we operate a diverse fleet comprising 80+ owned vehicles and approximately 500 attached vehicles, enabling us to cater to a wide range of corporate transportation requirements across Mumbai&apos;s Western, Eastern, and Harbour Zones.
              </p>
            </div>
          </div>

          {/* Visual Showcase (Span 5) */}
          <div style={{ gridColumn: "span 5" }} className="heritage-image-column">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(199, 166, 120, 0.25)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <Image
                src="/images/fleet/premium-mpv.jpg"
                alt="Milind Travels Corporate Fleet Mobility in Mumbai"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(8, 21, 33, 0.95) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  color: "#FFFFFF",
                }}
              >
                <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-champagne)" }}>
                  Operations &amp; Communications Base
                </div>
                <strong style={{ fontSize: "1.1rem", display: "block" }}>
                  A-808, Kailas Business Park, Vikhroli West
                </strong>
                <span style={{ fontSize: "0.82rem", color: "#C8D3DB" }}>
                  Centrally positioned for immediate Mumbai MMR transit coordination.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Triad */}
        <div className="grid-12">
          {/* Mission */}
          <div
            className="card-dark"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(199, 166, 120, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--color-champagne)",
              }}
            >
              <Target size={22} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Our Mission
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6 }}>
              {COMPANY_HERITAGE.mission}
            </p>
          </div>

          {/* Vision */}
          <div
            className="card-dark"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(199, 166, 120, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--color-champagne)",
              }}
            >
              <Compass size={22} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Our Vision
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6 }}>
              {COMPANY_HERITAGE.vision}
            </p>
          </div>

          {/* Values */}
          <div
            className="card-dark"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(199, 166, 120, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "var(--color-champagne)",
              }}
            >
              <HeartHandshake size={22} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Our Values
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#C8D3DB", lineHeight: 1.6 }}>
              {COMPANY_HERITAGE.values}
            </p>
          </div>
        </div>

        {/* =========================================================================
            CAREERS & JOB APPLICATION SECTION (CV Upload & Contact Form)
            ========================================================================= */}
        <div
          id="careers"
          style={{
            marginTop: "5rem",
            backgroundColor: "rgba(10, 22, 34, 0.85)",
            borderRadius: "20px",
            border: "1px solid rgba(199, 166, 120, 0.28)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45)",
            padding: "clamp(2rem, 4vw, 3.25rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(199, 166, 120, 0.1) 0%, rgba(10, 22, 34, 0) 70%)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div className="grid-12" style={{ alignItems: "stretch", gap: "2.5rem" }}>
            {/* Left Column: Careers Info & Why Join Us (Span 5) */}
            <div
              style={{
                gridColumn: "span 5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2rem",
              }}
              className="careers-info-col"
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--color-champagne)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Careers &amp; Talent Network
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                  }}
                >
                  Join Our Mumbai Fleet &amp; Operations Team.
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#C8D3DB",
                    lineHeight: 1.65,
                    marginBottom: "2rem",
                  }}
                >
                  As Milind Travels Private Limited expands our corporate mobility services across Mumbai,
                  we welcome disciplined corporate chauffeurs, on-site route supervisors, and operations coordinators.
                </p>

                {/* Key Pillars of Working with Milind Travels */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    {
                      title: "Established Corporate Client Roster",
                      desc: "Work with premier technology, banking, and global enterprise accounts on scheduled routes.",
                    },
                    {
                      title: "On-Site Supervision & Safe Protocols",
                      desc: "Structured shift rosters, female employee night escorts, and dedicated on-site team support.",
                    },
                    {
                      title: "Timely Compensation & Growth",
                      desc: "Punctual monthly settlements, incentive structures, and advancement into fleet dispatch management.",
                    },
                  ].map((pillar) => (
                    <div key={pillar.title} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <CheckCircle2
                        size={18}
                        style={{ color: "var(--color-champagne)", flexShrink: 0, marginTop: "0.2rem" }}
                      />
                      <div>
                        <strong style={{ fontSize: "0.92rem", color: "#FFFFFF", display: "block", marginBottom: "0.15rem" }}>
                          {pillar.title}
                        </strong>
                        <span style={{ fontSize: "0.82rem", color: "#9EAAB4", lineHeight: 1.5, display: "block" }}>
                          {pillar.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruitment Desk Contact Card */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  fontSize: "0.84rem",
                  color: "#C8D3DB",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--color-champagne)" }}>
                  <Building2 size={16} />
                  <strong style={{ fontSize: "0.86rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    HR &amp; Recruitment Desk
                  </strong>
                </div>
                <div style={{ lineHeight: 1.5, color: "#9EAAB4", marginBottom: "0.75rem" }}>
                  A-808, Kailas Business Park, Veer Savarkar Road, Park Site, Vikhroli West, Mumbai - 400079
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.82rem" }}>
                  <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Phone size={13} style={{ color: "var(--color-champagne)" }} />
                    <span>{CONTACT_INFO.phoneFormatted}</span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.primaryEmail}`} style={{ color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Mail size={13} style={{ color: "var(--color-champagne)" }} />
                    <span>{CONTACT_INFO.primaryEmail}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form & CV Upload (Span 7) */}
            <div
              style={{
                gridColumn: "span 7",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--color-midnight-navy)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
              }}
              className="careers-form-col"
            >
              {isSubmitted ? (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "3rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(199, 166, 120, 0.15)",
                      border: "2px solid var(--color-champagne-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      color: "var(--color-champagne-dark)",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--color-midnight-navy)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Application Received Successfully!
                  </h4>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-dark-secondary)",
                      maxWidth: "460px",
                      lineHeight: 1.6,
                      marginBottom: "1.75rem",
                    }}
                  >
                    Thank you, <strong>{formData.fullName}</strong>. Your CV and details for the{" "}
                    <strong>{formData.role}</strong> position have been recorded. Our recruitment team at
                    Kailas Business Park will review your profile and contact you at <strong>{formData.phone}</strong>.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-navy"
                  >
                    <span>Submit Another Application</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--color-champagne-dark)",
                        display: "block",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Job Application &amp; CV Submission
                    </span>
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "var(--color-midnight-navy)",
                        margin: 0,
                      }}
                    >
                      Apply for an Open Position
                    </h4>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {/* Row 1: Name and Phone */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="careers-input-row">
                      <div>
                        <label
                          htmlFor="careers-name"
                          style={{
                            display: "block",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--color-midnight-navy)",
                            marginBottom: "0.35rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="careers-name"
                          type="text"
                          required
                          placeholder="e.g. Rajesh S. Verma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 0.9rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid rgba(8, 21, 33, 0.2)",
                            fontSize: "0.9rem",
                            color: "var(--color-midnight-navy)",
                            backgroundColor: "#FAFAFA",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="careers-phone"
                          style={{
                            display: "block",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--color-midnight-navy)",
                            marginBottom: "0.35rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Mobile / WhatsApp *
                        </label>
                        <input
                          id="careers-phone"
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 0.9rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid rgba(8, 21, 33, 0.2)",
                            fontSize: "0.9rem",
                            color: "var(--color-midnight-navy)",
                            backgroundColor: "#FAFAFA",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Email and Role */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="careers-input-row">
                      <div>
                        <label
                          htmlFor="careers-email"
                          style={{
                            display: "block",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--color-midnight-navy)",
                            marginBottom: "0.35rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Email Address *
                        </label>
                        <input
                          id="careers-email"
                          type="email"
                          required
                          placeholder="e.g. rajesh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 0.9rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid rgba(8, 21, 33, 0.2)",
                            fontSize: "0.9rem",
                            color: "var(--color-midnight-navy)",
                            backgroundColor: "#FAFAFA",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="careers-role"
                          style={{
                            display: "block",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--color-midnight-navy)",
                            marginBottom: "0.35rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Position Desired *
                        </label>
                        <select
                          id="careers-role"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 0.9rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid rgba(8, 21, 33, 0.2)",
                            fontSize: "0.9rem",
                            color: "var(--color-midnight-navy)",
                            backgroundColor: "#FAFAFA",
                            outline: "none",
                            cursor: "pointer",
                          }}
                        >
                          <option value="Corporate Chauffeur">Corporate Chauffeur (Passenger Fleet)</option>
                          <option value="On-Site Route Supervisor">On-Site Route Supervisor</option>
                          <option value="Fleet Operations Executive">Fleet Operations &amp; Dispatch Executive</option>
                          <option value="Compliance & Maintenance Inspector">Compliance &amp; Vehicle Inspector</option>
                          <option value="Client Relationship Executive">Client Relationship &amp; Billing Admin</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Experience */}
                    <div>
                      <label
                        htmlFor="careers-experience"
                        style={{
                          display: "block",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--color-midnight-navy)",
                          marginBottom: "0.35rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Total Relevant Experience *
                      </label>
                      <select
                        id="careers-experience"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "0.75rem 0.9rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid rgba(8, 21, 33, 0.2)",
                          fontSize: "0.9rem",
                          color: "var(--color-midnight-navy)",
                          backgroundColor: "#FAFAFA",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        <option value="Fresher / Less than 1 Year">Fresher / Less than 1 Year</option>
                        <option value="1 - 3 Years">1 - 3 Years in Commercial / Corporate Mobility</option>
                        <option value="3 - 5 Years">3 - 5 Years in Fleet or Operations Management</option>
                        <option value="5+ Years">5+ Years Senior Chauffeur / Fleet Supervisor</option>
                      </select>
                    </div>

                    {/* Row 4: CV / Resume File Upload Box */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--color-midnight-navy)",
                          marginBottom: "0.35rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Upload CV / Resume (PDF, DOC, DOCX) *
                      </label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        id="cv-upload-input"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />

                      {cvFile ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.85rem 1rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--color-champagne-dark)",
                            backgroundColor: "rgba(199, 166, 120, 0.1)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", minWidth: 0 }}>
                            <FileText size={20} style={{ color: "var(--color-champagne-dark)", flexShrink: 0 }} />
                            <div style={{ minWidth: 0 }}>
                              <span
                                style={{
                                  display: "block",
                                  fontSize: "0.88rem",
                                  fontWeight: 600,
                                  color: "var(--color-midnight-navy)",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {cvFile.name}
                              </span>
                              <span style={{ fontSize: "0.74rem", color: "var(--text-dark-secondary)" }}>
                                {(cvFile.size / 1024).toFixed(0)} KB • Ready for upload
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            title="Remove attached CV"
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "0.3rem",
                              color: "#81909A",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                            }}
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          style={{
                            border: "2px dashed rgba(8, 21, 33, 0.25)",
                            borderRadius: "var(--radius-sm)",
                            padding: "1.25rem 1rem",
                            textAlign: "center",
                            cursor: "pointer",
                            backgroundColor: "#FAFAFA",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-champagne-dark)";
                            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(199, 166, 120, 0.05)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(8, 21, 33, 0.25)";
                            (e.currentTarget as HTMLElement).style.backgroundColor = "#FAFAFA";
                          }}
                        >
                          <UploadCloud size={28} style={{ color: "var(--color-champagne-dark)", margin: "0 auto 0.4rem" }} />
                          <span style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "var(--color-midnight-navy)" }}>
                            Click to browse or drop your CV here
                          </span>
                          <span style={{ display: "block", fontSize: "0.76rem", color: "var(--text-dark-secondary)", marginTop: "0.15rem" }}>
                            Accepted files: PDF, DOC, DOCX • Maximum file size 10MB
                          </span>
                        </div>
                      )}

                      {fileError && (
                        <span style={{ display: "block", fontSize: "0.78rem", color: "#D9383A", marginTop: "0.35rem", fontWeight: 600 }}>
                          {fileError}
                        </span>
                      )}
                    </div>

                    {/* Row 5: Short Note */}
                    <div>
                      <label
                        htmlFor="careers-message"
                        style={{
                          display: "block",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--color-midnight-navy)",
                          marginBottom: "0.35rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Brief Introduction / Prior Experience (Optional)
                      </label>
                      <textarea
                        id="careers-message"
                        rows={2}
                        placeholder="Mention previous transport companies, driver badge details, or operational qualifications..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "0.75rem 0.9rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid rgba(8, 21, 33, 0.2)",
                          fontSize: "0.88rem",
                          color: "var(--color-midnight-navy)",
                          backgroundColor: "#FAFAFA",
                          outline: "none",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-navy"
                      style={{
                        width: "100%",
                        padding: "0.95rem 1.5rem",
                        marginTop: "0.5rem",
                        justifyContent: "center",
                      }}
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? "Submitting Application..." : "Submit Job Application & CV"}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.heritage-story-column),
          :global(.heritage-image-column),
          :global(.careers-info-col),
          :global(.careers-form-col),
          :global(#heritage .grid-12 > div) {
            grid-column: span 12 !important;
          }
          :global(.careers-input-row) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
