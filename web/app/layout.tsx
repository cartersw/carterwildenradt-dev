import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inconsolata } from "next/font/google";
import { NAME } from "./constants/site";
import "./globals.css";

export const metadata: Metadata = {
  title: NAME,
  description: "portfolio",
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <body>{children}</body>
    </html>
  );
}
