/**
 * File data proyek — edit di sini untuk menambah/mengubah proyek.
 *
 * Field yang tersedia:
 *   id           — unik identifier (string)
 *   title        — nama proyek
 *   description  — deskripsi singkat (1-2 kalimat)
 *   tags         — array string badge tech stack
 *   demoUrl      — URL live demo (ganti "// GANTI DENGAN URL DEPLOY" menjadi URL asli)
 *   repoUrl      — URL GitHub repo (ganti placeholder menjadi URL asli)
 *   hasIframePreview — true = buka dalam modal iframe; false = buka tab baru langsung
 *   featured     — true = tampil di featured section (Nikaha)
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
  // Contoh halaman undangan untuk iframe preview:
  iframeUrl: "https://nikaha.my.id",
  repoUrl: "https://github.com/ilham", // GANTI DENGAN URL REPO (atau hapus jika private)
  isPrivate: true, // set false jika repo publik
};

export const otherProjects = [
  {
    id: "hmris",
    title: "Hospital Medical Record Information System (HMRIS)",
    description:
      "Sistem informasi rekam medis rumah sakit berbasis web dengan role-based access control untuk 5 role berbeda: Admin, Dokter, Perawat, Apotek, dan Kasir.",
    tags: ["HTML", "CSS", "JavaScript", "Role-based Access"],
    demoUrl: "// GANTI DENGAN URL DEPLOY", // Contoh: "https://hmris.vercel.app"
    repoUrl: "// GANTI DENGAN URL GITHUB", // Contoh: "https://github.com/ilham/hmris"
    hasIframePreview: true,
  },
  {
    id: "library",
    title: "Sistem Manajemen Perpustakaan",
    description:
      "Aplikasi manajemen perpustakaan berbasis C++ dengan konsep OOP, pointer, dynamic memory management, dan algoritma bubble sort untuk sorting koleksi buku.",
    tags: ["C++", "OOP", "Data Structures", "Algorithms"],
    demoUrl: "", // Tidak ada live demo (aplikasi desktop)
    repoUrl: "// GANTI DENGAN URL GITHUB", // Contoh: "https://github.com/ilham/library-cpp"
    hasIframePreview: false,
  },
  {
    id: "printstock",
    title: "PrintStock — Inventory Gudang",
    description:
      "Aplikasi manajemen inventaris gudang percetakan berbasis web, lengkap dengan fitur CRUD stok barang, laporan masuk/keluar, dan dashboard ringkasan.",
    tags: ["HTML", "CSS", "JavaScript", "Inventory"],
    demoUrl: "// GANTI DENGAN URL DEPLOY", // Contoh: "https://printstock.vercel.app"
    repoUrl: "// GANTI DENGAN URL GITHUB", // Contoh: "https://github.com/ilham/printstock"
    hasIframePreview: true,
  },
];
