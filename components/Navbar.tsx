"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Hitung persentase scroll dari 0% ke 100%
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      const sections = ["home", "about", "nikaha", "karya", "skills", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "nikaha", label: "Nikaha" },
    { id: "karya", label: "Project" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <>
      {/* ── Scroll Progress Bar (Top of Screen) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "2.5px",
          backgroundColor: "#FF4624",
          boxShadow: "0 0 10px rgba(255, 70, 36, 0.75), 0 0 2px rgba(255, 70, 36, 0.9)",
          zIndex: 9999,
          pointerEvents: "none",
          transition: "width 0.08s ease-out",
        }}
      />

      <header
        style={{
          position: "fixed",
          top: "clamp(0.75rem, 2vw, 1.25rem)",
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          padding: "0 1rem",
          pointerEvents: "none",
        }}
      >
        {/* Outer Dark Dock Shell (Opsi 1: Brand Harmony) */}
        <div
          className="navbar-dock"
          style={{
            pointerEvents: "auto",
            backgroundColor: "rgba(18, 18, 20, 0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "9999px",
            padding: "6px 8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: scrolled
              ? "0 20px 48px -8px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              : "0 12px 32px -6px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Inner Dark Glass Pill Track */}
          <div
            className="navbar-track"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderRadius: "9999px",
              padding: "3px 4px",
              display: "flex",
              alignItems: "center",
              gap: "2px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Standard Nav Items: Home, About, Nikaha, Project, Skills */}
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "0.45rem 1.05rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    color: isActive ? "#0A0A0A" : "rgba(255, 255, 255, 0.72)",
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    boxShadow: isActive ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none",
                    transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    whiteSpace: "nowrap",
                  }}
                  className="nav-track-btn"
                >
                  {item.label}
                </button>
              );
            })}

            {/* Special Action Item: Contact (Brand Accent Red-Orange Pill with Magnetic Effect) */}
            <MagneticButton
              onClick={() => scrollTo("contact")}
              style={{
                border: "none",
                cursor: "pointer",
                padding: "0.45rem 1.25rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 700,
                fontFamily: "var(--font-dm-sans), sans-serif",
                color: "#FFFFFF",
                backgroundColor: "#FF4624",
                boxShadow:
                  activeSection === "contact"
                    ? "0 0 0 2px #FFFFFF, 0 4px 16px rgba(255, 70, 36, 0.5)"
                    : "0 4px 14px rgba(255, 70, 36, 0.35)",
                whiteSpace: "nowrap",
                marginLeft: "3px",
              }}
              className="nav-contact-btn"
            >
              Contact
            </MagneticButton>
          </div>

          {/* Theme Toggle Subtle Circular Button */}
          <button
            onClick={onToggleTheme}
            title={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              cursor: "pointer",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "13px",
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
            className="theme-btn"
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          </button>


          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              cursor: "pointer",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              padding: "8px",
              flexShrink: 0,
            }}
            className="mobile-hamburger"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "1.5px",
                backgroundColor: "#FFFFFF",
                borderRadius: "1px",
                transition: "transform 0.2s ease",
                transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "1.5px",
                backgroundColor: "#FFFFFF",
                borderRadius: "1px",
                transition: "transform 0.2s ease",
                transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "calc(clamp(0.75rem, 2vw, 1.25rem) + 64px)",
            left: "1rem",
            right: "1rem",
            zIndex: 99,
            backgroundColor: "rgba(18, 18, 20, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "1rem 1.25rem",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          {[...navItems, { id: "contact", label: "Contact" }].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "none",
                  border: "none",
                  borderRadius: "12px",
                  color: isActive ? "#FF4624" : "#FFFFFF",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{link.label}</span>
                {isActive && <span style={{ color: "#FF4624", fontSize: "1.2rem" }}>•</span>}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        .nav-track-btn:hover {
          color: #FFFFFF !important;
          background-color: rgba(255, 255, 255, 0.12) !important;
        }
        .nav-contact-btn:hover {
          opacity: 0.95;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(255, 70, 36, 0.5) !important;
        }
        .theme-btn:hover {
          background-color: rgba(255, 255, 255, 0.18) !important;
        }

        @media (max-width: 768px) {
          .navbar-track {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
          .navbar-dock {
            padding: 6px 12px !important;
          }
        }
      `}</style>
    </>
  );
}
