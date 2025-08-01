"use client";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/app/globals.css";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import { useState } from "react";
import { Backdrop } from "@mui/material";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  return (
    <ThemeProvider>
      <Header
        activeDropdown={activeDropdown !== null ? activeDropdown : undefined}
        setActiveDropdown={setActiveDropdown}
      />
      <main className="mainContent">{children}</main>
      <Footer />
      <Backdrop
        open={activeDropdown !== null}
        onClick={() => setActiveDropdown(null)}
      />
    </ThemeProvider>
  );
}
