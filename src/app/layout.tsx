import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nafiru Portfolio | Enthusiastic Developer",
  description: "Personal portfolio of Nafil Habibi Mulyadi...",
  metadataBase: new URL("https://nfldev.vercel.app"),
  authors: [{ name: "Nafil Habibi Mulyadi" }],
  keywords: ["portfolio", "web developer", "engineer", "programmer"],
  openGraph: {
    title: "Nafiru Portfolio | Creative Developer",
    description: "Personal portfolio of Nafil Habibi Mulyadi...",
    url: "https://nfldev.vercel.app",
    siteName: "Nafiru Portfolio",
    images: [{ url: "/hydrotectearthguard.png", width: 1200, height: 630, alt: "Nafiru Portfolio Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafiru Portfolio | Creative Developer",
    description: "Personal portfolio of Nafil Habibi Mulyadi...",
    creator: "@nafilhabibi",
    images: ["/hydrotectearthguard.png"],
  },

  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
