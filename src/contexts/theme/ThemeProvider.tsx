"use client";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | "black">("light");

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (
        storedTheme &&
        (storedTheme === "light" ||
          storedTheme === "dark" ||
          storedTheme === "black")
      ) {
        setTheme(storedTheme as "light" | "dark" | "black");
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", storedTheme);
        }
        return;
      }
    }

    let initialTheme: "light" | "dark" | "black" = "light";
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

  const setThemeAndPersist = (newTheme: "light" | "dark" | "black") => {
    setTheme(newTheme);
    if (
      typeof window !== "undefined" &&
      typeof localStorage !== "undefined" &&
      typeof document !== "undefined"
    ) {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } else if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  const setLightTheme = () => setThemeAndPersist("light");

  const setDarkTheme = () => setThemeAndPersist("dark");

  const setBlackTheme = () => setThemeAndPersist("black");

  return (
    <ThemeContext.Provider
      value={{ theme, setLightTheme, setDarkTheme, setBlackTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
