import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { formControlSx } from "@/utils/formControlSx";
import { XIcon } from "lucide-react";
import { closeButtonSx } from "@/utils/closeButtonSx";

interface UpdatePasswordDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdatePasswordDialog = ({
  open,
  onClose,
}: UpdatePasswordDialogProps) => {
  return (
    <div className={`${styles.dialog} ${open ? styles.open : ""}`}>
      <div className={styles.dialogContainer}>
        <div className={styles.dialogHeader}>
          <ButtonBase
            sx={closeButtonSx}
            className={styles.dialogCloseButton}
            onClick={onClose}
          >
            <XIcon />
          </ButtonBase>
        </div>
        <form className={styles.dialogForm}>
          <div className={styles.dialogTitle}>
            <h3>Edit your password</h3>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
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
            <FormControl sx={formControlSx} fullWidth>
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
    </div>
  );
};
