/**
 * File data proyek — edit di sini untuk menambah/mengubah proyek.
 *
 * Field yang tersedia:
 *   id               — unik identifier (string)
 *   title            — nama proyek
 *   category         — label kategori/tipe proyek
 *   period           — periode pengerjaan (misal: "2024 — PRESENT")
 *   description      — deskripsi singkat
 *   tags             — array string badge tech stack
 *   demoUrl          — URL live demo (jika ada)
 *   repoUrl          — URL GitHub repo (opsional, kosongkan jika private)
 *   hasIframePreview — true = bisa dibuka dalam modal iframe preview
 *   featured         — true = tampil di featured section (Nikaha)
 */

export const featuredProject = {
  id: "nikaha",
  title: "Nikaha",
  subtitle: "Platform Undangan Pernikahan Digital",
  description:
    "Platform undangan pernikahan digital multi-tenant yang memungkinkan pasangan membuat undangan online yang elegan dalam hitungan menit. Dilengkapi dengan fitur RSVP, countdown, galeri foto, dan 3 template desain eksklusif.",
  longDescription:
    "Nikaha dibangun sebagai bisnis kecil yang saya kembangkan sendiri — dari desain UI, backend Supabase, hingga alur pemesanan. Tersedia 3 template desain: Black Java (Royal Javanese), Botanical Sage, dan Minimalist Rose. Pemesanan dilakukan via WhatsApp, dan setiap undangan di-host di subdomain sendiri.",
  tags: ["Next.js", "Tailwind CSS", "Supabase", "Multi-tenant", "Vercel"],
  features: [
    "3 Template Desain Eksklusif",
    "RSVP & Konfirmasi Kehadiran",
    "Countdown Timer",
    "Galeri Foto",
    "Pemesanan via WhatsApp",
    "Custom Subdomain",
  ],
  demoUrl: "https://nikaha.my.id",
  iframeUrl: "https://nikaha.my.id",
  repoUrl: "https://github.com/inugroho399-alt",
  isPrivate: true,
};

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  disciplines: string;
  period?: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  hasIframePreview: boolean;
}

export const otherProjects: ProjectItem[] = [
  {
    id: "hmris",
    title: "HMRIS — Hospital Medical Record Information System",
    shortTitle: "HMRIS",
    category: "Healthcare Web System",
    disciplines: "Healthcare • Medical Records • Web System",
    description:
      "Sistem informasi rekam medis digital rumah sakit modern untuk pengelolaan data pasien, riwayat rekam medis, dan administrasi layanan kesehatan terintegrasi.",
    image: "/projects/hmris-showcase.webp",
    tags: ["Healthcare System", "Medical Records", "Dashboard", "Responsive Web", "UI/UX"],
    demoUrl: "https://hospital-medical-record.netlify.app/",
    repoUrl: "",
    hasIframePreview: true,
  },
  {
    id: "pdf-tools",
    title: "PDFTools — Multi-Purpose PDF & Image Utilities",
    shortTitle: "PDFTools",
    category: "Client-Side Web App",
    disciplines: "Web Utilities • Next.js • Client-Side",
    description:
      "Aplikasi web serbaguna untuk merge, split, kompresi PDF, dan manipulasi gambar. Seluruh komputasi berjalan aman di browser tanpa server upload.",
    image: "/projects/pdftools-showcase.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "Client-Side Processing", "WebAssembly"],
    demoUrl: "https://tools-multipurpose.vercel.app/",
    repoUrl: "",
    hasIframePreview: true,
  },
  {
    id: "gym-tracker",
    title: "Gym Progress Tracker",
    shortTitle: "Gym Tracker",
    category: "Fitness & Productivity Web App",
    disciplines: "Fitness App • TypeScript • PWA",
    description:
      "Aplikasi web pelacak kebugaran harian untuk memantau progressive overload latihan, grafik riwayat beban angkatan, dan konsistensi workout.",
    image: "/projects/gym-showcase.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Dashboard", "PWA"],
    demoUrl: "https://gym-tracker-kappa-pied.vercel.app/",
    repoUrl: "",
    hasIframePreview: true,
  },
];
