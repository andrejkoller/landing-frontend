import { textFieldSx } from "@/utils/textFieldSx";
import { ButtonBase, FormControl, TextField } from "@mui/material";
import styles from "../dialog.module.css";
import { XIcon } from "lucide-react";
import { formControlSx } from "@/utils/formControlSx";
import { closeButtonSx } from "@/utils/closeButtonSx";
import { buttonBaseSx } from "@/utils/buttonBaseSx";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { updateUserName } from "@/services/userService";

interface UpdateNameDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UpdateNameDialog = ({ open, onClose }: UpdateNameDialogProps) => {
  const { publicUser, refreshUser, refreshing } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open && publicUser) {
      setFirstName(publicUser.firstName || "");
      setLastName(publicUser.lastName || "");
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
      await updateUserName({
        id: publicUser.id,
        firstName,
        lastName,
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
            <h3>Change your name</h3>
          </div>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
