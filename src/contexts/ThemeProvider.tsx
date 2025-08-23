"use client";
import { useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "@/types/theme";
import { THEMES } from "@/types/theme";
import {
  getStoredTheme,
  applyTheme,
  persistTheme,
  getInitialTheme,
} from "../utils/themeUtils";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

const themeOrder: Theme[] = [THEMES.LIGHT, THEMES.DARK, THEMES.BLACK];

export function ThemeProvider({
  children,
  defaultTheme = THEMES.LIGHT,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return getInitialTheme();
    }
    return defaultTheme;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = getInitialTheme();
      setThemeState(currentTheme);
      applyTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const storedTheme = getStoredTheme();
      if (!storedTheme) {
        const systemTheme = e.matches ? THEMES.DARK : THEMES.LIGHT;
        setThemeState(systemTheme);
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    persistTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
