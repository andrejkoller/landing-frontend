"use client";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/app/globals.css";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import { useState } from "react";
import { Backdrop } from "@mui/material";
import { usePathname } from "next/navigation";
import { AccountSettingsHeader } from "@/components/AccountSettingsHeader/AccountSettingsHeader";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const showAccountSettingsHeader = pathname.startsWith("/account");

  return (
    <ThemeProvider>
      <Header
        activeDropdown={activeDropdown !== null ? activeDropdown : undefined}
        setActiveDropdown={setActiveDropdown}
      />
      {showAccountSettingsHeader && <AccountSettingsHeader />}
      <main className="mainContent">{children}</main>
      <Footer />
      <Backdrop
        sx={{
          zIndex: "var(--z-index-backdrop)",
        }}
        open={activeDropdown !== null}
        onClick={() => setActiveDropdown(null)}
      />
    </ThemeProvider>
  );
}
