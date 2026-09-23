"use client";

import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      style={{
        padding: "clamp(5rem, 8vw, 7.5rem) 0 clamp(4rem, 6vw, 6rem)",
        borderTop: "1px solid var(--wire)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Behance-Style Section Header — Tetap Konsisten */}
        <div style={{ marginBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.5rem",
            }}
          >
            {/* Triangle Icon ▶ */}
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
              About Me
            </h2>
          </div>

          <div
            style={{
              fontSize: "0.95rem",
              color: "var(--ink-60)",
              fontFamily: "var(--font-dm-sans), monospace",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>•</span>
            <span>Profil, Pendidikan &amp; Pendekatan Kerja</span>
          </div>
        </div>

        {/* 2-Column Layout sebelumnya */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "center",
          }}
        >
          {/* Kolom Kiri: Real Workspace Photo */}
          <div
            className="about-workspace-box"
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--wire)",
              backgroundColor: "var(--surface)",
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)",
              aspectRatio: "4/3",
              width: "100%",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
            }}
          >
            <Image
              src="/workspace.webp"
              alt="Developer Workspace"
              fill
              sizes="(max-width: 840px) 100vw, 50vw"
              priority={false}
              className="about-workspace-img"
              style={{
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>

          {/* Kolom Kanan: Detail Tentang, Headline & Pill Button */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Headline yang natural dan profesional */}
            <h3
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Crafting Modern &amp; <br />
              Responsive Web Interfaces
            </h3>

            {/* Narasi yang personal, jujur, dan tidak berlebihan */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "var(--ink-60)",
                fontSize: "0.975rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              <p style={{ margin: 0 }}>
                Saya Ilham Nugroho, mahasiswa Teknik Informatika di{" "}
                <strong style={{ color: "var(--ink)" }}>
                  Universitas Duta Bangsa Surakarta
                </strong>{" "}
                sekaligus pengembang di balik{" "}
                <a
                  href="https://nikaha.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FF4624",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  Nikaha (nikaha.my.id)
                </a>{" "}
                — platform undangan pernikahan digital yang dibangun dengan ekosistem modern Next.js, React, dan Tailwind CSS.
              </p>
              <p style={{ margin: 0 }}>
                Sebagai Front-End Developer, fokus utama saya adalah merancang antarmuka pengguna yang bersih, interaktif, dan responsif di berbagai perangkat. Saya menyukai proses menerjemahkan ide dan desain menjadi website nyata yang cepat, rapi, serta nyaman digunakan.
              </p>
            </div>

            {/* Pill CTA Button with Magnetic Effect */}
            <div style={{ paddingTop: "0.5rem" }}>
              <MagneticButton
                onClick={() => scrollTo("contact")}
                style={{
                  borderRadius: "9999px",
                  padding: "0.8rem 2rem",
                  backgroundColor: "var(--ink)",
                  color: "var(--surface)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Contact Me
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-workspace-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 52px -12px rgba(0, 0, 0, 0.18) !important;
        }
        .about-workspace-box:hover .about-workspace-img {
          transform: scale(1.04);
        }

        @media (max-width: 840px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
