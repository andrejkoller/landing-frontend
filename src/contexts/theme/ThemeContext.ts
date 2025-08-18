import { createContext } from "react";

export type ThemeContextType = {
  theme: "light" | "dark" | "black";
  setLightTheme?: () => void;
  setDarkTheme?: () => void;
  setBlackTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setLightTheme: () => {},
  setDarkTheme: () => {},
  setBlackTheme: () => {},
});
