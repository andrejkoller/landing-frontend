import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layoutClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presenter",
  description: "Presenter - Open Source Presentation Software",
  icons: {
    icon: [
      {
        url: "/assets/icons/presenter-icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/icons/presenter-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
