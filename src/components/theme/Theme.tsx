import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext } from "react";
import styles from "./Theme.module.css";
import { ButtonBase } from "@mui/material";

export const Theme = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme === "light") {
      setDarkTheme?.();
    } else {
      setLightTheme?.();
    }
  };

  return (
    <div className={styles["theme-container"]}>
      <ButtonBase
        className={styles["theme-button"]}
        onClick={handleThemeChange}
      >
        {theme === "light" ? (
          <span className={styles["theme-text"]}>Light Theme</span>
        ) : (
          <span className={styles["theme-text"]}>Dark Theme</span>
        )}
      </ButtonBase>
    </div>
  );
};
