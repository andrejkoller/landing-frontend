import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";

interface UpdateNameDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateNameDialog = ({ open, onClose }: UpdateNameDialogProps) => {
  return (
    <div className={`${styles.dialog} ${open ? styles.open : ""}`}>
      <div className={styles.dialogContainer}>
        <div className={styles.dialogHeader}>
          <h2>Logo</h2>
          <ButtonBase className={styles.dialogCloseButton} onClick={onClose}>
            <XIcon />
          </ButtonBase>
        </div>
        <form className={styles.dialogForm}>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
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
            <FormControl sx={formControlSx} fullWidth>
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
    </div>
  );
};
