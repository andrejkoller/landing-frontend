import { textFieldSx } from "@/utils/textFieldSx";
import { FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";

export const UpdateNameDialog = () => {
  return (
    <div className={styles.dialog}>
      <form className={styles.dialogForm}>
        <div className={styles.dialogField}>
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
        <div className={styles.dialogField}>
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
