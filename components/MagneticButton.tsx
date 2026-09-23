"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  title?: string;
  ariaLabel?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  strength = 0.32,
  style,
  className = "",
  onClick,
  title,
  ariaLabel,
  as = "button",
  href,
  target,
  rel,
  type = "button",
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    // Batasi maksimum tarikan magnetik agar tetap elegan (max 9px horizontal, 7px vertikal)
    const clampedX = Math.max(-9, Math.min(9, distanceX));
    const clampedY = Math.max(-7, Math.min(7, distanceY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const combinedStyle: React.CSSProperties = {
    ...style,
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered
      ? "transform 0.12s ease-out, box-shadow 0.2s ease, opacity 0.2s ease"
      : "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease, opacity 0.2s ease",
    willChange: "transform",
  };

  if (as === "a" && href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        title={title}
        aria-label={ariaLabel}
        className={className}
        style={combinedStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      className={className}
      style={combinedStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
