export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  BLACK: "black",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const isValidTheme = (theme: string): theme is Theme => {
  return Object.values(THEMES).includes(theme as Theme);
};
