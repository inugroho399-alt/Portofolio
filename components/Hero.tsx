"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

/** Daftar judul typewriter — di luar komponen agar tidak dibuat ulang setiap render */
const TYPEWRITER_TITLES: string[] = [
  "Front-End Developer",
  "Founder of Nikaha",
  "AI-Assisted Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TYPEWRITER_TITLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Delay slightly to coordinate with initial hero entrance
    const startTimer = setTimeout(() => {
      setDisplayText("");
      setHasStarted(true);
    }, 450);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const currentTitle = TYPEWRITER_TITLES[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTitle) {
      // Hold for 2.6s so it can be comfortably read
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && displayText === "") {
      // Pause briefly when empty, then move to next title in cycle
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TYPEWRITER_TITLES.length);
      }, 450);
    } else {
      const speed = isDeleting ? 38 : 75;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentTitle.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, hasStarted, titleIndex]);

  // Subtle Mouse Parallax state
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setMouseOffset({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        paddingTop: "clamp(5rem, 9vw, 7rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative" }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 0 }}>
          <h1
            className="hero-heading-animate"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "clamp(2.75rem, 7.5vw, 5.8rem)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            I&apos;m <span style={{ color: "#FF5324" }}>Ilham,</span>
            <br />
            <span
              suppressHydrationWarning
              style={{
                display: "inline-block",
                minHeight: "1.1em",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {displayText || "\u00A0"}<span className="typewriter-cursor">|</span>
            </span>
          </h1>
        </div>

        {/* ── 3-Column Grid ──
            Center col uses negative marginTop to pull photo up so
            the head overlaps the second line of the heading,
            exactly like the Jenny reference. */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "clamp(1rem, 2.5vw, 2.5rem)",
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Left Col: Quote & Stat ── */}
          <div
            className="hero-left-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: "260px" }}>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  fontWeight: 500,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  margin: 0,
                }}
              >
                Menerjemahkan ide &amp; desain menjadi antarmuka web yang{" "}
                <span style={{ fontWeight: 700, color: "#FF5324" }}>rapi</span>, interaktif, dan responsif.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 900,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "0.3rem",
                }}
              >
                Next.js &amp; Tailwind
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--ink-60)",
                  fontWeight: 500,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Primary Ecosystem
              </div>
            </div>
          </div>

          {/* ── Center Col: Dome + Photo + Buttons ──
              Negative marginTop = pulls the photo up so the head
              sits at the "Full-Stack Developer" line, just like reference. */}
          <div
            className="hero-center-col"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "clamp(-8rem, -12vw, -11rem)",
            }}
          >
            {/* Stage: tall enough that head reaches the heading */}
            <div
              className="hero-stage"
              style={{
                position: "relative",
                width: "clamp(300px, 36vw, 420px)",
                height: "clamp(480px, 60vw, 600px)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {/* Parallax Layer 1: Orange Dome (moves gently counter to cursor) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translate3d(${-mouseOffset.x * 5}px, ${-mouseOffset.y * 4}px, 0)`,
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="dome-circle"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "clamp(270px, 32vw, 380px)",
                    height: "clamp(270px, 32vw, 380px)",
                    borderRadius: "50%",
                    backgroundColor: "#FF5324",
                    border: "4px solid #F59E0B",
                    boxShadow: "0 24px 48px -12px rgba(255, 83, 36, 0.4)",
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Parallax Layer 2: Photo Cutout (moves gently toward cursor) */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: "100%",
                  transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 5}px, 0)`,
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="hero-photo-animate"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/ilham-cutout.webp"
                    alt="Ilham Nugroho — Front-End Developer"
                    width={575}
                    height={1024}
                    priority
                    style={{
                      width: "auto",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom center",
                      filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.18))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Portfolio + Hire Me buttons */}
            <div
              style={{
                position: "relative",
                marginTop: "-22px",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              {/* Doodle arrow */}
              <div
                className="doodle-arrow"
                style={{
                  position: "absolute",
                  left: "-52px",
                  bottom: "10px",
                  width: "48px",
                  height: "44px",
                  pointerEvents: "none",
                }}
              >
                <svg viewBox="0 0 50 45" fill="none" style={{ width: "100%", height: "100%" }}>
                  <path
                    d="M 5 5 C 10 25, 25 35, 42 28"
                    stroke="var(--ink)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 34 22 L 43 28 L 38 36"
                    stroke="var(--ink)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Portfolio button with Magnetic Effect */}
              <MagneticButton
                onClick={() => scrollTo("nikaha")}
                style={{
                  borderRadius: "9999px",
                  padding: "0.75rem 1.6rem",
                  backgroundColor: "#FF5324",
                  color: "#FFFFFF",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  border: "2px solid #FF5324",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 8px 20px rgba(255,83,36,0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                Portfolio
              </MagneticButton>

              {/* Hire Me button with Magnetic Effect */}
              <MagneticButton
                onClick={() => scrollTo("contact")}
                style={{
                  borderRadius: "9999px",
                  padding: "0.75rem 1.6rem",
                  backgroundColor: "var(--surface)",
                  color: "var(--ink)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  border: "2px solid var(--ink)",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                  whiteSpace: "nowrap",
                }}
              >
                Hire Me
              </MagneticButton>
            </div>
          </div>

          {/* ── Right Col: Stars & Education ── */}
          <div
            className="hero-right-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Undergraduate Tag & Degree Info */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#FF5324",
                  fontFamily: "var(--font-dm-sans), monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Undergraduate
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Teknik Informatika
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--ink-60)",
                  lineHeight: 1.4,
                  marginTop: "0.35rem",
                  marginBottom: "0.75rem",
                }}
              >
                Univ. Duta Bangsa Surakarta
              </div>
              <div
                style={{
                  width: "120px",
                  height: "3.5px",
                  backgroundColor: "#A3E635",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroTextReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroPhotoRise {
          from {
            opacity: 0;
            transform: translateY(36px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroDomeBreathe {
          0% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 24px 48px -12px rgba(255, 83, 36, 0.4);
          }
          50% {
            transform: translateX(-50%) scale(1.025);
            box-shadow: 0 32px 64px -10px rgba(255, 83, 36, 0.55), 0 0 24px rgba(245, 158, 11, 0.25);
          }
          100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 24px 48px -12px rgba(255, 83, 36, 0.4);
          }
        }

        @keyframes heroLeftIn {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroRightIn {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes doodleBounce {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-3deg);
          }
        }

        @keyframes cursorBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          color: #FF5324;
          font-weight: 300;
          animation: cursorBlink 0.85s infinite;
          vertical-align: baseline;
          user-select: none;
          white-space: nowrap;
        }

        .hero-heading-animate {
          animation: heroTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-left-col {
          animation: heroLeftIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }

        .hero-photo-animate {
          animation: heroPhotoRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .dome-circle {
          animation: heroDomeBreathe 4s ease-in-out infinite alternate !important;
        }

        .doodle-arrow {
          animation: doodleBounce 3.2s ease-in-out infinite !important;
        }

        .hero-right-col {
          animation: heroRightIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }

        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-center-col {
            order: 1;
            margin-top: 0 !important;
          }
          .hero-left-col {
            order: 2;
            flex-direction: row !important;
            justify-content: space-around !important;
            text-align: center;
          }
          .hero-right-col {
            order: 3;
            align-items: center !important;
            text-align: center;
          }
          .doodle-arrow { display: none; }
        }

        @media (max-width: 640px) {
          .hero-heading-animate {
            font-size: clamp(1.85rem, 7.5vw, 2.5rem) !important;
            line-height: 1.12 !important;
            letter-spacing: -0.03em !important;
          }
          .hero-left-col {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.25rem !important;
          }
          .hero-left-col > div {
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .hero-stage {
            width: min(310px, 90vw) !important;
            height: clamp(390px, 115vw, 460px) !important;
          }
          .dome-circle {
            width: min(250px, 75vw) !important;
            height: min(250px, 75vw) !important;
          }
        }

        @media (max-width: 380px) {
          .hero-heading-animate {
            font-size: clamp(1.6rem, 7.2vw, 1.85rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
