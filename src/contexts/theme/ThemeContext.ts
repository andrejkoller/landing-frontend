import { createContext } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  setLightTheme?: () => void;
  setDarkTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setLightTheme: () => {},
  setDarkTheme: () => {},
});
