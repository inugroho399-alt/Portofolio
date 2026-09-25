"use client";

import { useState, useCallback } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    demoUrl: string;
    repoUrl?: string;
    hasIframePreview?: boolean;
  };
}

export default function DemoModal({ isOpen, onClose, project }: DemoModalProps) {
  const [loaded, setLoaded] = useState(false);

  const isValidUrl =
    project.demoUrl &&
    !project.demoUrl.startsWith("//") &&
    project.demoUrl.startsWith("http");

  const handleOverlay = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlay}>
      <div className="modal-box">
        {/* Header — browser chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid var(--wire)",
            backgroundColor: "var(--page)",
            flexShrink: 0,
          }}
        >
          {/* Dots */}
          <div style={{ display: "flex", gap: "5px", marginRight: "4px" }}>
            {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
              <div
                key={c}
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }}
              />
            ))}
          </div>

          {/* URL bar */}
          <div
            style={{
              flex: 1,
              background: "var(--surface)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              padding: "3px 10px",
              fontSize: "12px",
              color: "var(--ink-60)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-dm-sans), monospace",
            }}
          >
            {isValidUrl
              ? `🔒 ${project.demoUrl.replace(/^https?:\/\//, "")}`
              : `${project.title} — demo belum tersedia`}
          </div>

          {/* Tombol buka tab baru & GitHub */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "0.5rem" }}>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--ink-60)",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ink-60)";
                }}
              >
                GitHub ↗
              </a>
            )}
            {isValidUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.78rem",
                  color: "#FF4624",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                buka ↗
              </a>
            )}
          </div>

          {/* Tutup */}
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "1px solid var(--wire)",
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "var(--ink-60)",
              flexShrink: 0,
              transition: "color 0.12s ease, border-color 0.12s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-40)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--ink-60)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--wire)";
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            position: "relative",
            minHeight: "420px",
            backgroundColor: "var(--page)",
          }}
        >
          {isValidUrl && project.hasIframePreview ? (
            <>
              {/* Loading state */}
              {!loaded && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    color: "var(--ink-40)",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    zIndex: 2,
                    backgroundColor: "var(--page)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "2px solid var(--wire)",
                      borderTopColor: "#FF4624",
                      borderRadius: "50%",
                      animation: "spin 0.7s linear infinite",
                    }}
                  />
                  Memuat…
                </div>
              )}
              <iframe
                src={project.demoUrl}
                title={`Demo — ${project.title}`}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "480px",
                  border: "none",
                  display: "block",
                  opacity: loaded ? 1 : 0,
                  transition: "opacity 0.25s ease",
                }}
                onLoad={() => setLoaded(true)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "380px",
                gap: "1rem",
                padding: "2rem",
                textAlign: "center",
                color: "var(--ink-60)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "var(--ink-40)" }}>
                {isValidUrl
                  ? "Proyek ini tidak bisa di-embed. Buka di tab baru."
                  : "Demo belum di-deploy. Update demoUrl di data/projects.ts."}
              </p>
              {isValidUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-grove"
                  style={{ marginTop: "0.5rem" }}
                >
                  Buka
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
