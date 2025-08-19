import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";

export const UpdatePasswordDialog = () => {
  return (
    <div className={styles.dialog}>
      <form className={styles.dialogForm}>
        <div className={styles.dialogField}>
          <FormControl fullWidth>
            <TextField
              sx={textFieldSx}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
          </FormControl>
        </div>
        <div className={styles.dialogField}>
          <FormControl fullWidth>
            <TextField
              sx={textFieldSx}
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
          </FormControl>
        </div>
        <div className={styles.dialogActions}>
          <AnimatedButton
            type={"submit"}
            className={styles.dialogButton}
            hoverType={"background"}
          >
            Save
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
};
