import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mo-School — One platform for every school & family",
  description:
    "Mo-School replaces paper registers, WhatsApp chaos, and Excel fee tracking with one clean digital platform for mid-size schools in India.",
  keywords: [
    "school management",
    "student monitoring",
    "attendance tracking",
    "school SaaS",
    "India EdTech",
  ],
  openGraph: {
    title: "Mo-School — One platform for every school & family",
    description:
      "Replace paper registers, WhatsApp chaos, and Excel fee tracking with one clean platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
