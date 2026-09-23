"use client";

import { useState } from "react";
import Image from "next/image";
import { otherProjects, ProjectItem } from "@/data/projects";
import DemoModal from "./DemoModal";

export default function OtherProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="karya"
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
              Selected Projects
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
            • ACADEMIC &amp; INDEPENDENT WORKS
          </div>
        </div>

        {/* 2-Column Grid Matching Reference Layout */}
        <div
          className="projects-editorial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(2.5rem, 4vw, 4rem) clamp(1.75rem, 3.5vw, 3rem)",
            alignItems: "start",
          }}
        >
          {otherProjects.map((project) => {
            const hasDemo =
              project.demoUrl &&
              !project.demoUrl.startsWith("//") &&
              project.demoUrl.startsWith("http");

            return (
              <div
                key={project.id}
                className="project-reference-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: hasDemo ? "pointer" : "default",
                }}
                onClick={() => {
                  if (hasDemo) {
                    if (project.hasIframePreview) {
                      setSelectedProject(project);
                    } else {
                      window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                    }
                  }
                }}
              >
                {/* 1. Large Rounded Visual Preview Container */}
                <div
                  className="preview-media-box"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--wire)",
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={project.id === "pdf-tools" || project.id === "gym-tracker"}
                    className="preview-image"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  {/* Eye Icon Hover Overlay (Otomatis Demokan saat diklik) */}
                  {hasDemo && (
                    <div
                      className="eye-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(3px)",
                        opacity: 0,
                        transition: "opacity 0.25s ease",
                        zIndex: 2,
                      }}
                    >
                      <div
                        className="eye-button"
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#111827",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
                          transform: "scale(0.85)",
                          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, color 0.2s ease",
                        }}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Title & Disciplines Row (Directly below preview container) */}
                <div
                  style={{
                    marginTop: "1.2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                  }}
                >
                  {/* Left: Project Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)",
                      fontWeight: 800,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      margin: 0,
                      lineHeight: 1.15,
                    }}
                  >
                    {project.shortTitle}
                  </h3>

                  {/* Right: Dot-separated disciplines / categories */}
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--ink-60)",
                      letterSpacing: "0.01em",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.disciplines}
                  </div>
                </div>

                {/* 3. Description Row */}
                <p
                  style={{
                    marginTop: "0.5rem",
                    marginBottom: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.92rem",
                    color: "var(--ink-60)",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Modal for Iframe Preview */}
      {selectedProject && (
        <DemoModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}

      <style>{`
        .project-reference-card:hover .preview-image {
          transform: scale(1.035);
        }
        .project-reference-card:hover .preview-media-box {
          border-color: #FF4624;
          box-shadow: 0 16px 36px -12px rgba(255, 70, 36, 0.2);
        }
        .project-reference-card:hover h3 {
          color: #FF4624;
        }
        .preview-media-box:hover .eye-overlay {
          opacity: 1 !important;
        }
        .preview-media-box:hover .eye-button {
          transform: scale(1) !important;
        }
        .eye-button:hover {
          background-color: #FF4624 !important;
          color: #FFFFFF !important;
          transform: scale(1.1) !important;
        }

        @media (max-width: 768px) {
          .projects-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
