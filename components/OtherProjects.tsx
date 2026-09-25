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
                    priority={project.id === "hmris" || project.id === "pdf-tools"}
                    className="preview-image"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  {/* Action Icons Hover Overlay */}
                  {(hasDemo || project.repoUrl) && (
                    <div
                      className="eye-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "14px",
                        backgroundColor: "rgba(0, 0, 0, 0.45)",
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        opacity: 0,
                        transition: "opacity 0.25s ease",
                        zIndex: 2,
                      }}
                    >
                      {/* 1. Tombol Eye (Buka Web / Live Demo) */}
                      {hasDemo && (
                        <button
                          type="button"
                          className="overlay-action-btn eye-button"
                          title="Buka Demo Website"
                          aria-label={`Buka demo ${project.title}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.hasIframePreview) {
                              setSelectedProject(project);
                            } else {
                              window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                            }
                          }}
                          style={{
                            width: "54px",
                            height: "54px",
                            borderRadius: "50%",
                            backgroundColor: "#FFFFFF",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#111827",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
                            transform: "scale(0.85)",
                            transition:
                              "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, color 0.2s ease",
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
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
                        </button>
                      )}

                      {/* 2. Tombol GitHub (Source Code Repo) */}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-action-btn github-button"
                          title="Lihat Repository GitHub"
                          aria-label={`Buka repository GitHub ${project.title}`}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          style={{
                            width: "54px",
                            height: "54px",
                            borderRadius: "50%",
                            backgroundColor: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#111827",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
                            textDecoration: "none",
                            transform: "scale(0.85)",
                            transition:
                              "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, color 0.2s ease",
                          }}
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Title & Disciplines Row (Directly below preview container) */}
                <div
                  className="project-title-row"
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
                    className="project-disciplines"
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

                {/* 4. Action Buttons for Mobile Touch Devices */}
                <div className="project-mobile-actions">
                  {hasDemo && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.hasIframePreview) {
                          setSelectedProject(project);
                        } else {
                          window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="mobile-action-btn mobile-demo-btn"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>Lihat Demo</span>
                    </button>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-action-btn mobile-repo-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
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
        .preview-media-box:hover .overlay-action-btn {
          transform: scale(1) !important;
        }
        .eye-button:hover {
          background-color: #FF4624 !important;
          color: #FFFFFF !important;
          transform: scale(1.12) !important;
        }
        .github-button:hover {
          background-color: #161B22 !important;
          color: #FFFFFF !important;
          transform: scale(1.12) !important;
        }

        .project-mobile-actions {
          display: none;
        }

        @media (max-width: 768px) {
          .projects-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .project-title-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.35rem !important;
          }
          .project-disciplines {
            text-align: left !important;
            white-space: normal !important;
          }
          .project-mobile-actions {
            display: flex !important;
            align-items: center;
            gap: 0.65rem;
            margin-top: 1rem;
            flex-wrap: wrap;
          }
          .mobile-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            padding: 0.52rem 0.95rem;
            border-radius: 9999px;
            font-size: 0.82rem;
            font-weight: 700;
            font-family: var(--font-dm-sans), sans-serif;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .mobile-demo-btn {
            background-color: #FF4624;
            color: #FFFFFF;
            border: none;
            box-shadow: 0 4px 12px rgba(255, 70, 36, 0.25);
          }
          .mobile-demo-btn:active {
            transform: scale(0.96);
          }
          .mobile-repo-btn {
            background-color: var(--surface);
            color: var(--ink);
            border: 1px solid var(--wire);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }
          .mobile-repo-btn:active {
            transform: scale(0.96);
          }
        }
      `}</style>
    </section>
  );
}
