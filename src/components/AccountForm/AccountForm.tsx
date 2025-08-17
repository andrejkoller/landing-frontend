import { TextField } from "@mui/material";
import styles from "./AccountForm.module.css";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--border-default)",
    },
    "&:hover fieldset": {
      borderColor: "var(--border-default)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--border-default)",
    },
    "& .MuiInputBase-input": {
      color: "var(--text-default)",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "var(--text-muted)",
      opacity: 1,
    },
  },
  "& .MuiFormLabel-root": {
    color: "var(--text-default)",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "var(--text-default)",
  },
};

export const AccountForm = () => {
  return (
    <div className={styles.accountFormContainer}>
      <div className={styles.accountFormContent}>
        <form className={styles.accountForm}>
          <div className={styles.accountFields}>
            <div className={styles.accountFieldGroup}>
              <div className={styles.accountField}>
                <TextField
                  sx={textFieldSx}
                  label="First Name"
                  variant="outlined"
                  placeholder="Andrej"
                  fullWidth
                  margin="normal"
                  required
                  autoFocus
                />
              </div>
              <div className={styles.accountField}>
                <TextField
                  sx={textFieldSx}
                  label="Last Name"
                  variant="outlined"
                  placeholder="Koller"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
            </div>
            <div className={styles.accountField}>
              <TextField
                sx={textFieldSx}
                label="Email"
                variant="outlined"
                placeholder="name@domain.com"
                fullWidth
                margin="normal"
                required
              />
            </div>
            <div className={styles.accountField}>
              <TextField
                sx={textFieldSx}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </div>
            <div className={styles.accountField}>
              <TextField
                sx={textFieldSx}
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </div>
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
