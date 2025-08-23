import type { Theme } from "../types/theme";
import { THEMES, isValidTheme } from "../types/theme";

export const STORAGE_KEY = "theme";
export const DATA_ATTRIBUTE = "data-theme";

export const getInitialTheme = (): Theme => {
  const storedTheme = getStoredTheme();
  if (storedTheme) return storedTheme;

  return getSystemTheme();
};

export const getStoredTheme = (): Theme | null => {
  if (typeof localStorage === "undefined") return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && isValidTheme(stored) ? stored : null;
};

export const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") return THEMES.LIGHT;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? THEMES.DARK : THEMES.LIGHT;
};

export const applyTheme = (theme: Theme): void => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute(DATA_ATTRIBUTE, theme);
};

export const persistTheme = (theme: Theme): void => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, theme);
};
