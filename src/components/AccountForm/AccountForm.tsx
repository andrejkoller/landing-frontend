import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./AccountForm.module.css";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { selectSx } from "@/utils/selectSx";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { formControlSx } from "@/utils/formControlSx";
import { AnimatedCheckbox } from "../AnimatedCheckbox/AnimatedCheckbox";

export const AccountForm = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

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
            <FormControl sx={formControlSx} fullWidth>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                sx={selectSx}
                MenuProps={{
                  PaperProps: { elevation: 2 },
                }}
                open={isSelectOpen}
                onOpen={() => setIsSelectOpen(true)}
                onClose={() => setIsSelectOpen(false)}
                label="Language"
                labelId="language-select-label"
                id="language-select"
                variant="outlined"
                IconComponent={() => {
                  return (
                    <ChevronDownIcon
                      className={`${styles.chevronIcon} ${
                        isSelectOpen ? styles.chevronIconOpen : ""
                      }`}
                    />
                  );
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="de">Deutsch</MenuItem>
              </Select>
            </FormControl>
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
