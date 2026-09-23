import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

/**
 * Fraunces — optical variable serif, "wonky" axis.
 * Memberikan karakter artisanal dan presisi.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

/**
 * DM Sans — geometric sans yang bersih.
 * Counterpoint fungsional: tidak dingin, tidak busy.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-blush-three-66.vercel.app"),
  title: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
  description:
    "Ilham Nugroho membangun antarmuka web modern yang presisi dan responsif. Mahasiswa Teknik Informatika dan Founder Nikaha.",
  keywords: [
    "Ilham Nugroho",
    "portofolio",
    "front-end developer",
    "frontend developer",
    "Nikaha",
    "undangan pernikahan digital",
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI/UX Design",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
    description:
      "Membangun antarmuka web modern yang presisi dan responsif. Mahasiswa Teknik Informatika dan Founder Nikaha.",
    type: "website",
    url: "https://portofolio-blush-three-66.vercel.app",
    siteName: "Ilham Nugroho — Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
    description:
      "Membangun antarmuka web modern yang presisi dan responsif. Mahasiswa Teknik Informatika dan Founder Nikaha.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
