import { ButtonBase, FormControlLabel } from "@mui/material";
import styles from "./AccountOptions.module.css";
import { AnimatedCheckbox } from "../AnimatedCheckbox/AnimatedCheckbox";
import { ThemeSelect } from "../ThemeSelect/ThemeSelect";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { LogOutIcon } from "lucide-react";

export const AccountOptions = () => {
  return (
    <div className={styles.accountOptions}>
      <h1 className={styles.accountOptionsHeading}>Account Options</h1>
      <div className={styles.accountFieldGroup}>
        <div className={styles.accountField}>
          <ThemeSelect />
        </div>
        <div className={styles.accountField}>
          <LanguageSelect />
        </div>
        <div className={styles.accountField}>
          <FormControlLabel
            control={<AnimatedCheckbox />}
            label="Receive email updates about new versions before they are released"
          />
        </div>
        <div className={styles.accountField}>
          <ButtonBase
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "16.5px 32px 16.5px 14px",
              border: "1px solid var(--border-default)",
              borderRadius: "4px",
              width: "100%",
              fontFamily: "Arial",
              fontSize: "1rem",
            }}
            className={styles.accountLogoutButton}
          >
            <LogOutIcon />
            <span className={styles.accountLogoutButtonText}>Logout</span>
          </ButtonBase>
        </div>
        <div className={styles.accountField}>
          <ButtonBase
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "16.5px 32px 16.5px 14px",
              border: "1px solid var(--border-default)",
              borderRadius: "4px",
              color: "var(--color-red)",
              width: "100%",
              fontFamily: "Arial",
              fontSize: "1rem",
            }}
            className={styles.accountDeleteButton}
          >
            <span className={styles.accountLogoutButtonText}>
              Delete Account
            </span>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
