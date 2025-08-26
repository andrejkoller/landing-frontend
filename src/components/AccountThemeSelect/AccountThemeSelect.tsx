"use client";

import { useEffect, useState } from "react";
import styles from "./AccountThemeSelect.module.css";
import { formControlSx } from "@/utils/formControlSx";
import { selectSx } from "@/utils/selectSx";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ChevronDownIcon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { THEMES } from "@/types/theme";
import type { Theme } from "@/types/theme";

interface ThemeOption {
  value: Theme;
  label: string;
  icon?: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  { value: THEMES.LIGHT, label: "Light" },
  { value: THEMES.DARK, label: "Dark" },
  { value: THEMES.BLACK, label: "Black" },
];

export const AccountThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  const [isThemeSelectOpen, setIsThemeSelectOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const currentTheme = theme || THEMES.LIGHT;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleThemeChange = (event: SelectChangeEvent<Theme>) => {
    const newTheme = event.target.value as Theme;
    setTheme(newTheme);
  };

  if (isClient) {
    return (
      <FormControl sx={formControlSx} fullWidth>
        <InputLabel id="theme-select-label">Theme</InputLabel>
        <Select
          sx={selectSx}
          MenuProps={{
            PaperProps: {
              elevation: 2,
              style: { zIndex: 1001 },
            },
          }}
          open={isThemeSelectOpen}
          onOpen={() => setIsThemeSelectOpen(true)}
          onClose={() => setIsThemeSelectOpen(false)}
          value={currentTheme}
          onChange={handleThemeChange}
          label="Theme"
          labelId="theme-select-label"
          id="theme-select"
          variant="outlined"
          IconComponent={() => (
            <ChevronDownIcon
              className={`${styles.chevronIcon} ${
                isThemeSelectOpen ? styles.chevronIconOpen : ""
              }`}
            />
          )}
        >
          {THEME_OPTIONS.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              className={styles.themeMenuItem}
            >
              <span className={styles.themeMenuItemContent}>
                {option.icon && (
                  <span className={styles.themeIcon}>{option.icon}</span>
                )}
                {option.label}
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    return <div>Loading themes...</div>;
  }
};
