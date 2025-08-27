import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";
import { closeButtonSx } from "@/utils/closeButtonSx";
import { buttonBaseSx } from "@/utils/buttonBaseSx";
import { useAuth } from "@/hooks/useAuth";

interface UpdateAddressDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateAddressDialog = ({
  open,
  onClose,
}: UpdateAddressDialogProps) => {
  const { publicUser } = useAuth();

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
                value={publicUser?.street || ""}
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
                value={publicUser?.city || ""}
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
                value={publicUser?.state || ""}
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
                value={publicUser?.zipCode || ""}
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </FormControl>
          </div>
          <div className={styles.dialogActions}>
            <ButtonBase
              sx={buttonBaseSx}
              type={"submit"}
              className={styles.dialogButton}
            >
              Save
            </ButtonBase>
          </div>
        </form>
      </div>
    </div>
  );
};
