"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjects from "@/components/OtherProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Light mode adalah default — desain ini berdasar pada konsep dokumen cetak
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
    // light adalah default, tidak butuh atribut
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", next);
  };

  // Fluid scroll reveal observer across sections and cards
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "#about, #nikaha, #karya, #skills, #contact, .project-reference-card, .spec-card, .metric-card"
    );

    // Apply stagger delays for list items
    document.querySelectorAll<HTMLElement>(".project-reference-card").forEach((card, idx) => {
      card.style.transitionDelay = `${(idx % 2) * 0.15 + 0.1}s`;
    });

    document.querySelectorAll<HTMLElement>(".spec-card").forEach((card, idx) => {
      card.style.transitionDelay = `${(idx % 4) * 0.08 + 0.1}s`;
    });

    document.querySelectorAll<HTMLElement>(".metric-card").forEach((card, idx) => {
      card.style.transitionDelay = `${(idx % 4) * 0.08 + 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => {
      el.classList.add("scroll-reveal");
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <FeaturedProject />
      <OtherProjects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
