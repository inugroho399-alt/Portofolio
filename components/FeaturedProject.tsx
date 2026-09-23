"use client";

import { useRef, useState, useEffect } from "react";
import { featuredProject } from "@/data/projects";
import MagneticButton from "./MagneticButton";

/**
 * Featured Project — Nikaha
 * Pure Behance Editorial Showcase:
 * - Triangle accent ▶ with wide red-orange uppercase title
 * - Clean timeline date
 * - Pill-bordered tech tags & template connector lines
 * - Interactive macOS-style browser frame
 */
export default function FeaturedProject() {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [iframeVisible, setIframeVisible] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframeVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nikaha"
      style={{
        padding: "clamp(5rem, 8vw, 7.5rem) 0",
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
              Featured Project
            </h2>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div
          className="featured-behance-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "start",
          }}
        >
          {/* Kolom Kiri: Project Info dengan Connector Line khas Behance */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            {/* Project Title + Role */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 900,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {featuredProject.title}
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#FF4624",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Founder &amp; Front-End Developer
                </span>
              </div>

              {/* Subtitle */}
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1rem",
                  color: "var(--ink-60)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  margin: "0.5rem 0 0",
                }}
              >
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.975rem",
                color: "var(--ink-60)",
                lineHeight: 1.7,
                fontFamily: "var(--font-dm-sans), sans-serif",
                margin: 0,
              }}
            >
              {featuredProject.description}
            </p>

            {/* Stack Badges bergaya Pill Outline persis referensi Behance */}
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-40)",
                  marginBottom: "0.6rem",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Core Technologies
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.3rem 0.85rem",
                      borderRadius: "9999px",
                      border: "1.5px solid var(--wire)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-dm-sans), monospace",
                      letterSpacing: "0.04em",
                      color: "var(--ink)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Template Desain dengan connector lines khas Behance */}
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-40)",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Available Templates
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { name: "Black Java", desc: "Royal Javanese Traditional Style" },
                  { name: "Botanical Sage", desc: "Modern Floral & Nature Aesthetic" },
                  { name: "Minimalist Rose", desc: "Clean & Elegant Contemporary" },
                ].map((tpl) => (
                  <div
                    key={tpl.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "var(--ink)", whiteSpace: "nowrap" }}>
                      {tpl.name}
                    </span>
                    {/* Horizontal connector line khas Behance */}
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        backgroundColor: "var(--wire)",
                        minWidth: "20px",
                      }}
                    />
                    <span style={{ color: "var(--ink-60)", fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                      {tpl.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button: Live Demo only with Magnetic Effect */}
            <div style={{ paddingTop: "0.5rem" }}>
              <MagneticButton
                as="a"
                href={featuredProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderRadius: "9999px",
                  padding: "0.75rem 1.8rem",
                  backgroundColor: "#FF4624",
                  color: "#FFFFFF",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 8px 20px rgba(255, 70, 36, 0.35)",
                }}
              >
                Buka Website
              </MagneticButton>
            </div>
          </div>

          {/* Kolom Kanan: Browser Mockup Frame untuk Interactive Preview */}
          <div ref={iframeRef}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--wire)",
                backgroundColor: "var(--surface)",
                boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Browser Toolbar Dark Tech Style */}
              <div
                style={{
                  backgroundColor: "#0D0D0D",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />

                <div
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "6px",
                    padding: "3px 12px",
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontFamily: "monospace",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span className="pulse-dot" style={{ color: "#28C840" }}>●</span>
                  https://nikaha.my.id
                </div>

                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "11px",
                    color: "#FF4624",
                    textDecoration: "none",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Open
                </a>
              </div>

              {/* Iframe Viewport */}
              <div
                style={{
                  height: "480px",
                  position: "relative",
                  backgroundColor: "var(--page)",
                }}
              >
                {iframeVisible ? (
                  <>
                    {!iframeLoaded && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "var(--page)",
                          color: "var(--ink-40)",
                          fontSize: "0.85rem",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          zIndex: 1,
                        }}
                      >
                        Memuat live preview Nikaha...
                      </div>
                    )}
                    <iframe
                      src={featuredProject.iframeUrl}
                      title="Nikaha Live Demo"
                      onLoad={() => setIframeLoaded(true)}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        display: "block",
                      }}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </>
                ) : (
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--ink-40)",
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Memuat live preview Nikaha...
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                marginTop: "0.75rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.8rem",
                color: "var(--ink-40)",
                fontFamily: "var(--font-dm-sans), monospace",
              }}
            >
              <span>INTERACTIVE LIVE PREVIEW</span>
              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .featured-behance-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
