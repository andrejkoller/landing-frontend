"use client";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme as "light" | "dark");
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", storedTheme);
        }
        return;
      }
    }

    let initialTheme: "light" | "dark" = "light";
    if (typeof window !== "undefined" && window.matchMedia) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        initialTheme = "dark";
      }
    }
    setTheme(initialTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const setLightTheme = () => {
    setTheme("light");
    if (
      typeof window !== "undefined" &&
      typeof localStorage !== "undefined" &&
      typeof document !== "undefined"
    ) {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    } else if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const setDarkTheme = () => {
    setTheme("dark");
    if (
      typeof window !== "undefined" &&
      typeof localStorage !== "undefined" &&
      typeof document !== "undefined"
    ) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
