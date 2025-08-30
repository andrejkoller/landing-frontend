import { ButtonBase } from "@mui/material";
import styles from "../dialog.module.css";
import { buttonBaseSx } from "@/utils/buttonBaseSx";
import { useAuth } from "@/hooks/useAuth";
import { deleteUser } from "@/services/userService";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface UpdateNameDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AcceptAccountDeletion = ({
  open,
  onClose,
}: UpdateNameDialogProps) => {
  const { publicUser, refreshing } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicUser?.id) {
      console.error("No user ID available");
      return;
    }

    setSubmitting(true);
    try {
      await deleteUser(publicUser.id);
      router.push("/goodbye");
    } catch (error) {
      console.error("Failed to delete user:", error);
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
            <h3>Are you sure you want to delete your account?</h3>
          </div>
        </div>
        <form className={styles.dialogForm} onSubmit={handleSubmit}>
          <div className={styles.dialogActions}>
            <ButtonBase
              sx={buttonBaseSx}
              type={"submit"}
              className={styles.dialogButton}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </ButtonBase>
            <ButtonBase
              sx={buttonBaseSx}
              className={styles.dialogButton}
              onClick={onClose}
            >
              Cancel
            </ButtonBase>
          </div>
        </form>
      </div>
    </div>
  );
};
