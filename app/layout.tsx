import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import "./globals.css";

const smoochSans = Smooch_Sans({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FUsen",
  description:
    "Portfolio of Fusen - Full Stack Developer specialized in React, Next.js, and backend systems.",
  keywords: ["Fusen", "Phan Tan Phuoc", "Full Stack Developer", "React", "Next.js", "Portfolio", "Intern", "Fresher"],
  authors: [{ name: "Fusen" }],
  openGraph: {
    title: "Fusen Portfolio",
    description: "Full Stack Developer Portfolio",
    url: "https://fusen-portfolio-three.vercel.app/",
    siteName: "Fusen Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${smoochSans.className} antialiased`}>{children}</body>
    </html>
  );
}
