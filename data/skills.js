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
      { name: "HTML5", level: "expert" },
      { name: "CSS3", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Next.js", level: "intermediate" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "React", level: "intermediate" },
    ],
  },
  {
    category: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "PHP", level: "intermediate" },
      { name: "Laravel", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
      { name: "Supabase", level: "intermediate" },
    ],
  },
  {
    category: "Bahasa Pemrograman",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: "expert" },
      { name: "PHP", level: "intermediate" },
      { name: "C++", level: "intermediate" },
    ],
  },
  {
    category: "Sedang Dipelajari",
    icon: "📚",
    skills: [
      { name: "Web Security", level: "learning" },
      { name: "Penetration Testing", level: "learning" },
      { name: "OWASP Top 10", level: "learning" },
    ],
  },
];
