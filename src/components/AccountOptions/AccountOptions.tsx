import { FormControlLabel } from "@mui/material";
import styles from "./AccountOptions.module.css";
import { AnimatedCheckbox } from "../AnimatedCheckbox/AnimatedCheckbox";
import { AccountThemeSelect } from "../AccountThemeSelect/AccountThemeSelect";
import { AccountLanguageSelect } from "../AccountLanguageSelect/AccountLanguageSelect";
import { AccountLogout } from "../AccountLogout/AccountLogout";
import { AccountDelete } from "../AccountDelete/AccountDelete";

export const AccountOptions = () => {
  return (
    <div className={styles.accountOptions}>
      <h1 className={styles.accountOptionsHeading}>Account Options</h1>
      <div className={styles.accountFieldGroup}>
        <div className={styles.accountField}>
          <AccountThemeSelect />
        </div>
        <div className={styles.accountField}>
          <AccountLanguageSelect />
        </div>
        <div className={styles.accountField}>
          <FormControlLabel
            control={<AnimatedCheckbox />}
            label="Receive email updates about new versions before they are released"
          />
        </div>
        <div className={styles.accountField}>
          <AccountLogout />
        </div>
        <div className={styles.accountField}>
          <AccountDelete />
        </div>
      </div>
    </div>
  );
};
