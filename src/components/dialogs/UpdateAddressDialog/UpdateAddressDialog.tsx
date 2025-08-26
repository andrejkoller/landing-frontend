import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";
import { closeButtonSx } from "@/utils/closeButtonSx";

interface UpdateAddressDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateAddressDialog = ({
  open,
  onClose,
}: UpdateAddressDialogProps) => {
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
            <h3>Edit your address</h3>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="Street"
                placeholder="123 Main St"
                type="text"
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
                label="City"
                placeholder="Los Angeles"
                type="text"
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
                label="State"
                placeholder="CA"
                type="text"
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
                label="Zip Code"
                placeholder="12345"
                type="text"
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
