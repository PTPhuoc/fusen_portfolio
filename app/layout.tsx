import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import "./globals.css";

const smoochSans = Smooch_Sans({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FUsen",
  description: "Portfolio",
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
