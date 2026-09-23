"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";

const CONTACT_INFO = {
  email: "inugroho399@gmail.com",
  phone: "083149596357",
  city: "Sukoharjo",
  province: "Jawa Tengah",
  github: "https://github.com/inugroho399-alt",
  instagram: "https://instagram.com/17obie_",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const handleCopy = (text: string, type: "email" | "phone") => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {
        // Fallback silent: clipboard permission denied (HTTP / browser policy)
      });
    }
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = formData.name.trim() || "Pengunjung Web";
    const subject = encodeURIComponent(`Pesan Portofolio dari ${fullName}`);
    const body = encodeURIComponent(
      `Halo Ilham,\n\nNama: ${fullName}\nEmail Pengirim: ${formData.email}\n\nPesan:\n${formData.message}\n`
    );
    window.open(
      `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(5rem, 8vw, 7.5rem) 0 clamp(4rem, 6vw, 6rem)",
        borderTop: "1px solid var(--wire)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Behance-Style Section Header */}
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.5rem",
            }}
          >
            {/* Dark Triangle Accent ▶ */}
            <span
              style={{
                display: "inline-block",
                width: 0,
                height: 0,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderLeft: "9px solid var(--ink)",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                fontWeight: 900,
                color: "#FF4624",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Contact
            </h2>
          </div>

          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "var(--ink-60)",
              fontFamily: "var(--font-dm-sans), monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              paddingLeft: "1.2rem",
            }}
          >
            • GET IN TOUCH &amp; COLLABORATION
          </div>
        </div>

        {/* 2-Column Layout */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "clamp(2.5rem, 5vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Kolom Kiri: Informasi Kontak Personal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.25rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  fontWeight: 800,
                  color: "var(--ink)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                Let&apos;s build something
                <br />
                great together.
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--ink-60)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  margin: 0,
                  maxWidth: "45ch",
                }}
              >
                Tertarik berdiskusi seputar proyek web front-end, platform Nikaha, atau peluang kerja sama?
                Hubungi saya melalui email di bawah atau kirimkan pesan langsung.
              </p>
            </div>

            {/* List Kontak: Email & Domisili */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Item 1: Email */}
              <div
                onClick={() => handleCopy(CONTACT_INFO.email, "email")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  cursor: "pointer",
                  color: "inherit",
                  position: "relative",
                  padding: "0.5rem 0.65rem",
                  margin: "-0.5rem -0.65rem",
                  borderRadius: "14px",
                  transition: "background-color 0.15s ease",
                }}
                className="contact-item-row"
                title="Klik untuk menyalin email"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--wire)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--ink)",
                    transition: "all 0.2s ease",
                  }}
                  className="contact-circle-icon"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--ink-40)",
                        fontWeight: 700,
                        fontFamily: "var(--font-dm-sans), monospace",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Email
                    </span>
                    {copiedType === "email" && (
                      <span className="copied-pill-badge">
                        Tersalin! ✓
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {CONTACT_INFO.email}
                  </div>
                </div>

                {/* Micro Copy Indicator */}
                <div
                  style={{
                    padding: "6px 8px",
                    borderRadius: "8px",
                    color: copiedType === "email" ? "#22c55e" : "var(--ink-40)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s ease",
                  }}
                  className="copy-indicator-btn"
                >
                  {copiedType === "email" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Item 2: Phone */}
              <div
                onClick={() => handleCopy(CONTACT_INFO.phone, "phone")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  cursor: "pointer",
                  color: "inherit",
                  position: "relative",
                  padding: "0.5rem 0.65rem",
                  margin: "-0.5rem -0.65rem",
                  borderRadius: "14px",
                  transition: "background-color 0.15s ease",
                }}
                className="contact-item-row"
                title="Klik untuk menyalin nomor telepon"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--wire)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--ink)",
                    transition: "all 0.2s ease",
                  }}
                  className="contact-circle-icon"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--ink-40)",
                        fontWeight: 700,
                        fontFamily: "var(--font-dm-sans), monospace",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Phone
                    </span>
                    {copiedType === "phone" && (
                      <span className="copied-pill-badge">
                        Tersalin! ✓
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {CONTACT_INFO.phone}
                  </div>
                </div>

                {/* Micro Copy Indicator */}
                <div
                  style={{
                    padding: "6px 8px",
                    borderRadius: "8px",
                    color: copiedType === "phone" ? "#22c55e" : "var(--ink-40)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s ease",
                  }}
                  className="copy-indicator-btn"
                >
                  {copiedType === "phone" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Item 3: Domisili */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--wire)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--ink)",
                  }}
                  className="contact-circle-icon"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--ink-40)",
                      fontWeight: 700,
                      fontFamily: "var(--font-dm-sans), monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Domisili
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {CONTACT_INFO.city}
                    <br />
                    <span style={{ fontWeight: 500, color: "var(--ink-60)", fontSize: "0.85rem" }}>
                      {CONTACT_INFO.province}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Pill with Official Logos */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                paddingTop: "0.25rem",
                flexWrap: "wrap",
              }}
            >
              {/* GitHub Pill with Logo */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.45rem 1.15rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--wire)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: "var(--ink)",
                  backgroundColor: "var(--surface)",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#FF4624";
                  (e.currentTarget as HTMLElement).style.color = "#FF4624";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--wire)";
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Official GitHub Logo */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              {/* Instagram Pill with Logo */}
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.45rem 1.15rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--wire)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: "var(--ink)",
                  backgroundColor: "var(--surface)",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#FF4624";
                  (e.currentTarget as HTMLElement).style.color = "#FF4624";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--wire)";
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Official Instagram Logo */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Send Message Form */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              borderRadius: "20px",
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              border: "1px solid var(--wire)",
              boxShadow: "0 12px 32px -8px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Header Form */}
            <div style={{ marginBottom: "1.75rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  margin: "0 0 0.35rem 0",
                }}
              >
                Send Message
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ink-60)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Kirimkan pesan langsung melalui email Anda.
              </p>
            </div>

            {/* The Form Fields */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {/* Row 1: Nama Lengkap */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-dm-sans), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--ink-60)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Nama Anda
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--wire)",
                    backgroundColor: "var(--page)",
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    outline: "none",
                    transition: "border-color 0.15s ease",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#FF4624";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "var(--wire)";
                  }}
                />
              </div>

              {/* Row 2: Email Pengirim */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-dm-sans), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--ink-60)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Alamat Email Anda
                </label>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--wire)",
                    backgroundColor: "var(--page)",
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    outline: "none",
                    transition: "border-color 0.15s ease",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#FF4624";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "var(--wire)";
                  }}
                />
              </div>

              {/* Row 3: Pesan */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-dm-sans), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--ink-60)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Pesan Anda
                </label>
                <textarea
                  rows={5}
                  placeholder="Tulis pesan atau penawaran kerja sama di sini..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--wire)",
                    backgroundColor: "var(--page)",
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.15s ease",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#FF4624";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "var(--wire)";
                  }}
                />
              </div>

              {/* Submit Button */}
              <div style={{ paddingTop: "0.35rem" }}>
                <MagneticButton
                  type="submit"
                  strength={0.2}
                  style={{
                    width: "100%",
                    padding: "0.9rem 1.25rem",
                    borderRadius: "12px",
                    backgroundColor: "#FF4624",
                    color: "#FFFFFF",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    letterSpacing: "0.02em",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(255, 70, 36, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Kirim Pesan
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .copied-pill-badge {
          background-color: #22c55e;
          color: #FFFFFF;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 9999px;
          animation: popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          display: inline-flex;
          align-items: center;
          gap: 3px;
        }

        .contact-item-row:hover {
          background-color: rgba(255, 70, 36, 0.05);
        }

        .contact-item-row:hover .contact-circle-icon {
          transform: translateY(-2px);
          border-color: #FF4624 !important;
          color: #FF4624 !important;
        }

        .contact-item-row:hover .copy-indicator-btn {
          color: #FF4624 !important;
        }

        .contact-circle-icon:hover {
          transform: translateY(-2px);
          border-color: #FF4624 !important;
          color: #FF4624 !important;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
