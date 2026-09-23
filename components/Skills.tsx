"use client";

import React, { useState, useEffect, useRef } from "react";
import { skillCategories } from "@/data/skills";

function MetricTile({
  target,
  suffix,
  defaultText,
  label,
  desc,
  animate,
}: {
  target: number;
  suffix: string;
  defaultText: string;
  label: string;
  desc: string;
  animate: boolean;
}) {
  const [val, setVal] = useState<number | null>(null);

  useEffect(() => {
    if (!animate) return;

    let startTimestamp: number | null = null;
    const duration = 1400; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [animate, target]);

  return (
    <div
      style={{
        padding: "1.25rem",
        borderRadius: "16px",
        backgroundColor: "var(--surface)",
        border: "1px solid var(--wire)",
        boxShadow: "0 4px 16px -4px rgba(0, 0, 0, 0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem",
        transition: "border-color 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease",
      }}
      className="metric-card"
    >
      <div
        suppressHydrationWarning
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
          fontWeight: 900,
          color: "var(--ink)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {val !== null ? `${val}${suffix}` : defaultText}
      </div>

      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.875rem",
          fontWeight: 700,
          color: "var(--ink)",
          marginTop: "0.2rem",
          lineHeight: 1.25,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.78rem",
          color: "var(--ink-60)",
          lineHeight: 1.4,
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function Skills() {
  const specializations = [
    {
      title: "Front-End & UI Slicing",
      stack: "Next.js · React · Tailwind CSS",
      desc: "Menerjemahkan ide dan desain visual menjadi antarmuka web yang terstruktur rapi, cepat, dan mudah dikembangkan.",
    },
    {
      title: "Mobile-First & Responsive Layout",
      stack: "Flexbox · CSS Grid · Fluid UI",
      desc: "Memastikan layout tampil proporsional, presisi, dan nyaman diakses di berbagai ukuran layar smartphone hingga desktop.",
    },
    {
      title: "Interactive Web Applications",
      stack: "TypeScript · JavaScript · Client State",
      desc: "Membangun fitur dinamis, manipulasi DOM interaktif, serta integrasi pemrosesan di sisi browser (seperti pada PDFTools & GymTracker).",
    },
    {
      title: "Backend & Database Integration",
      stack: "PHP · MySQL · Supabase · REST API",
      desc: "Integrasi autentikasi pengguna, operasi CRUD basis data, serta pengelolaan data aplikasi web.",
    },
  ];

  const metricStats = [
    {
      number: "3+",
      target: 3,
      suffix: "+",
      label: "Live Web Projects",
      desc: "Nikaha, PDFTools, & GymTracker aktif diakses publik",
    },
    {
      number: "100%",
      target: 100,
      suffix: "%",
      label: "Mobile-First Responsive",
      desc: "Tampilan adaptif dan presisi di semua resolusi layar",
    },
    {
      number: "10+",
      target: 10,
      suffix: "+",
      label: "Teknologi & Tools",
      desc: "Ekosistem modern dari front-end hingga backend dasar",
    },
    {
      number: "4+",
      target: 4,
      suffix: "+",
      label: "Bahasa Pemrograman",
      desc: "JavaScript, TypeScript, PHP, dan C++",
    },
  ];

  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "clamp(5rem, 8vw, 7.5rem) 0",
        borderTop: "1px solid var(--wire)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.5rem",
            }}
          >
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
              Expertise &amp; Capabilities
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
            • CORE COMPETENCIES &amp; TECH STACK
          </div>
        </div>

        {/* Balanced 2-Column Grid */}
        <div
          className="skills-balanced-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            alignItems: "start",
          }}
        >
          {/* Kolom Kiri: 4 Specialization Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--ink-60)",
                fontFamily: "var(--font-dm-sans), monospace",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.25rem",
              }}
            >
              Core Specializations
            </div>

            {specializations.map((spec) => (
              <div
                key={spec.title}
                style={{
                  padding: "1.25rem 1.4rem",
                  borderRadius: "16px",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--wire)",
                  boxShadow: "0 4px 16px -4px rgba(0, 0, 0, 0.04)",
                  transition: "border-color 0.2s ease, transform 0.15s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
                className="spec-card"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--ink)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {spec.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#FF4624",
                      fontFamily: "var(--font-dm-sans), monospace",
                      letterSpacing: "0.02em",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(255, 70, 36, 0.08)",
                    }}
                  >
                    {spec.stack}
                  </span>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    color: "var(--ink-60)",
                    lineHeight: 1.55,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Kolom Kanan: 2x2 Metric Tiles + Tech Stack Catalog */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--ink-60)",
                fontFamily: "var(--font-dm-sans), monospace",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.25rem",
              }}
            >
              Key Metrics &amp; Experience
            </div>

            {/* 2x2 Metrics Grid with Animated Counter */}
            <div
              ref={metricsRef}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {metricStats.map((stat) => (
                <MetricTile
                  key={stat.label}
                  target={stat.target}
                  suffix={stat.suffix}
                  defaultText={stat.number}
                  label={stat.label}
                  desc={stat.desc}
                  animate={metricsVisible}
                />
              ))}
            </div>

            {/* Tech Stack Catalog Card */}
            <div
              style={{
                padding: "1.25rem 1.4rem",
                borderRadius: "16px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--wire)",
                boxShadow: "0 4px 16px -4px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--ink-60)",
                  fontFamily: "var(--font-dm-sans), monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.85rem",
                }}
              >
                Technologies &amp; Tools Catalog
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.45rem",
                }}
              >
                {skillCategories.flatMap((cat) =>
                  cat.skills.map((s) => (
                    <span
                      key={`${cat.category}-${s.name}`}
                      style={{
                        fontSize: "0.78rem",
                        padding: "0.25rem 0.7rem",
                        borderRadius: "9999px",
                        border: "1px solid var(--wire)",
                        color: "var(--ink)",
                        backgroundColor: "var(--page)",
                        fontFamily: "var(--font-dm-sans), monospace",
                        letterSpacing: "0.02em",
                        fontWeight: 600,
                      }}
                    >
                      {s.name}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .spec-card:hover, .metric-tile:hover {
          border-color: #FF4624 !important;
          transform: translateY(-2px);
        }
        @media (max-width: 880px) {
          .skills-balanced-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
