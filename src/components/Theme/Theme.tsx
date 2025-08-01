import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext } from "react";
import styles from "./Theme.module.css";
import { styled, Switch, SwitchProps } from "@mui/material";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

export const Theme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return (
      <div className={styles["theme-container"]}>
        <span className={styles["theme-label"]} style={{ color: "red" }}>
          Error: Theme component must be used within a ThemeProvider.
        </span>
      </div>
    );
  }

  const { theme, setLightTheme, setDarkTheme } = context;

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDarkTheme?.();
    } else {
      setLightTheme?.();
    }
  };

  return (
    <div className={styles["theme-container"]}>
      <IOSSwitch
        checked={theme === "dark"}
        onChange={handleThemeChange}
        aria-label="Toggle dark mode"
      />
    </div>
  );
};
