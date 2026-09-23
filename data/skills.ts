/**
 * File data skill — edit di sini untuk menambah/mengubah skill.
 *
 * Setiap kategori memiliki:
 *   category — nama kategori
 *   icon     — emoji ikon kategori
 *   skills   — array objek { name, level } (level: "expert" | "intermediate" | "learning")
 */

export const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: "expert" as const },
      { name: "CSS3", level: "expert" as const },
      { name: "JavaScript", level: "expert" as const },
      { name: "Next.js", level: "intermediate" as const },
      { name: "Tailwind CSS", level: "expert" as const },
      { name: "React", level: "intermediate" as const },
    ],
  },
  {
    category: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "PHP", level: "intermediate" as const },
      { name: "Laravel", level: "intermediate" as const },
      { name: "MySQL", level: "intermediate" as const },
      { name: "Supabase", level: "intermediate" as const },
    ],
  },
  {
    category: "Bahasa Pemrograman",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: "expert" as const },
      { name: "PHP", level: "intermediate" as const },
      { name: "C++", level: "intermediate" as const },
    ],
  },
  {
    category: "Sedang Dipelajari",
    icon: "📚",
    skills: [
      { name: "TypeScript", level: "learning" as const },
      { name: "UI/UX & Figma", level: "learning" as const },
      { name: "Framer Motion", level: "learning" as const },
    ],
  },
] as const;
