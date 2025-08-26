import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";
import { closeButtonSx } from "@/utils/closeButtonSx";

interface UpdatePhoneNumberDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdatePhoneNumberDialog = ({
  open,
  onClose,
}: UpdatePhoneNumberDialogProps) => {
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
            <h3>Edit your phone number</h3>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="Phone Number"
                placeholder="123-456-7890"
                type="tel"
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
