import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";
import { closeButtonSx } from "@/utils/closeButtonSx";
import { buttonBaseSx } from "@/utils/buttonBaseSx";
import { useAuth } from "@/hooks/useAuth";
import { updateUserAddress } from "@/services/userService";
import { useState, useEffect } from "react";

interface UpdateEmailDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateAddressDialog = ({
  open,
  onClose,
}: UpdateEmailDialogProps) => {
  const { publicUser, refreshUser, refreshing } = useAuth();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open && publicUser) {
      setCountry(publicUser.address?.country || "No Country set");
      setState(publicUser.address?.state || "No State set");
      setCity(publicUser.address?.city || "No City set");
      setZipCode(publicUser.address?.zipCode || "No Zip Code set");
    }
  }, [open, publicUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicUser?.id) {
      console.error("No user ID available");
      return;
    }

    setSubmitting(true);
    try {
      await updateUserAddress({
        id: publicUser.id,
        address: {
          country,
          state,
          city,
          zipCode,
        },
      });

      await refreshUser();
      onClose();
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const isLoading = submitting || refreshing;

  return (
    <div className={`${styles.dialog} ${open ? styles.open : ""}`}>
      <div className={styles.dialogContainer}>
        <div className={styles.dialogHeader}>
          <div className={styles.dialogTitle}>
            <h3>Edit your address</h3>
          </div>
          <ButtonBase
            sx={closeButtonSx}
            className={styles.dialogCloseButton}
            onClick={onClose}
          >
            <XIcon />
          </ButtonBase>
        </div>
        <form className={styles.dialogForm} onSubmit={handleSubmit}>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="Country"
                variant="outlined"
                placeholder="Germany"
                margin="normal"
                required
                autoFocus
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormControl>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="State"
                variant="outlined"
                placeholder="Bavaria"
                margin="normal"
                required
                autoFocus
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </FormControl>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="City"
                variant="outlined"
                placeholder="Munich"
                margin="normal"
                required
                autoFocus
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="Zip Code"
                variant="outlined"
                placeholder="80336"
                margin="normal"
                required
                autoFocus
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </FormControl>
          </div>
          <div className={styles.dialogActions}>
            <ButtonBase
              sx={buttonBaseSx}
              type={"submit"}
              className={styles.dialogButton}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </ButtonBase>
          </div>
        </form>
      </div>
    </div>
  );
};
