import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";
import { closeButtonSx } from "@/utils/closeButtonSx";
import { buttonBaseSx } from "@/utils/buttonBaseSx";
import { useAuth } from "@/hooks/useAuth";
import { updateUserEmail } from "@/services/userService";
import { useState, useEffect } from "react";

interface UpdateEmailDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateEmailDialog = ({
  open,
  onClose,
}: UpdateEmailDialogProps) => {
  const { publicUser, refreshUser, refreshing } = useAuth();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open && publicUser) {
      setEmail(publicUser.email || "");
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
      await updateUserEmail({
        id: publicUser.id,
        email,
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
          <ButtonBase
            sx={closeButtonSx}
            className={styles.dialogCloseButton}
            onClick={onClose}
          >
            <XIcon />
          </ButtonBase>
        </div>
        <form className={styles.dialogForm} onSubmit={handleSubmit}>
          <div className={styles.dialogTitle}>
            <h3>Edit your email</h3>
          </div>
          <div className={styles.dialogField}>
            <FormControl sx={formControlSx} fullWidth>
              <TextField
                sx={textFieldSx}
                label="Email"
                variant="outlined"
                placeholder="name@domain.com"
                margin="normal"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
