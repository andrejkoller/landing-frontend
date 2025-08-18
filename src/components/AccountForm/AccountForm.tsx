import { FormControl, FormControlLabel, TextField } from "@mui/material";
import styles from "./AccountForm.module.css";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { AnimatedCheckbox } from "../AnimatedCheckbox/AnimatedCheckbox";
import { ThemeSelect } from "../ThemeSelect/ThemeSelect";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";

export const AccountForm = () => {
  return (
    <div className={styles.accountFormContainer}>
      <div className={styles.accountFormContent}>
        <h1 className={styles.accountFormHeading}>My Account</h1>
        <form className={styles.accountForm}>
          <div className={styles.accountFields}>
            <div className={styles.accountFieldGroup}>
              <div className={styles.accountField}>
                <FormControl fullWidth>
                  <TextField
                    sx={textFieldSx}
                    label="First Name"
                    variant="outlined"
                    placeholder="Andrej"
                    margin="normal"
                    required
                    autoFocus
                  />
                </FormControl>
              </div>
              <div className={styles.accountField}>
                <FormControl fullWidth>
                  <TextField
                    sx={textFieldSx}
                    label="Last Name"
                    variant="outlined"
                    placeholder="Koller"
                    margin="normal"
                    required
                  />
                </FormControl>
              </div>
            </div>
            <div className={styles.accountField}>
              <FormControl fullWidth>
                <TextField
                  sx={textFieldSx}
                  label="Email"
                  variant="outlined"
                  placeholder="name@domain.com"
                  margin="normal"
                  required
                />
              </FormControl>
            </div>
          </div>
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
          <div className={styles.accountActions}>
            <AnimatedButton
              type={"submit"}
              className={styles.accountButton}
              hoverType={"background"}
            >
              Save
            </AnimatedButton>
          </div>
        </form>
      </div>
    </div>
  );
};
