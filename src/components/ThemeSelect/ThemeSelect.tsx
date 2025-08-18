import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext, useState } from "react";
import styles from "./ThemeSelect.module.css";
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

export const ThemeSelect = () => {
  const [isThemeSelectOpen, setIsThemeSelectOpen] = useState(false);
  const context = useContext(ThemeContext);

  if (!context) {
    return (
      <div className={styles["theme-container"]}>
        <span
          className={styles["theme-label"]}
          style={{ color: "var(--color-red)" }}
        >
          Error: Theme component must be used within a ThemeProvider.
        </span>
      </div>
    );
  }

  const { theme, setLightTheme, setDarkTheme, setBlackTheme } = context;

  const handleThemeChange = (event: SelectChangeEvent) => {
    switch (event.target.value) {
      case "light":
        setLightTheme?.();
        break;
      case "dark":
        setDarkTheme?.();
        break;
      case "black":
        setBlackTheme?.();
        break;
      default:
        break;
    }
  };

  return (
    <FormControl sx={formControlSx} fullWidth>
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        sx={selectSx}
        MenuProps={{
          PaperProps: { elevation: 2 },
        }}
        open={isThemeSelectOpen}
        onOpen={() => setIsThemeSelectOpen(true)}
        onClose={() => setIsThemeSelectOpen(false)}
        value={theme}
        onChange={handleThemeChange}
        label="Theme"
        labelId="theme-select-label"
        id="theme-select"
        variant="outlined"
        IconComponent={() => {
          return (
            <ChevronDownIcon
              className={`${styles.chevronIcon} ${
                isThemeSelectOpen ? styles.chevronIconOpen : ""
              }`}
            />
          );
        }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="black">Black</MenuItem>
      </Select>
    </FormControl>
  );
};
