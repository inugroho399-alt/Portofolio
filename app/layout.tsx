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
  metadataBase: new URL("https://ilhamdev.my.id"),
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
    icon: "/ilham.jpg",
    shortcut: "/ilham.jpg",
    apple: "/ilham.jpg",
  },
  openGraph: {
    title: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
    description:
      "Membangun antarmuka web yang cantik, responsif, dan presisi.",
    type: "website",
    url: "https://ilhamdev.my.id",
    siteName: "Ilham Nugroho — Portfolio",
    images: [
      {
        url: "/ilham.jpg",
        width: 800,
        height: 800,
        alt: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilham Nugroho — Front-End Developer & Founder Nikaha",
    description:
      "Membangun antarmuka web yang cantik, responsif, dan presisi.",
    images: ["/ilham.jpg"],
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
