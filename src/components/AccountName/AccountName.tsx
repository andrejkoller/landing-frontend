import { useDialog } from "@/hooks/useDialog";
import styles from "./AccountName.module.css";
import { ButtonBase } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";

export const AccountName = () => {
  const { openUpdateNameDialog } = useDialog();
  const { publicUser } = useAuth();

  return (
    <div className={styles.accountName}>
      <div className={styles.accountNameContainer}>
        <div className={styles.accountNameFieldGroup}>
          <p className={styles.accountNameDescription}>
            {publicUser?.firstName} {publicUser?.lastName}
          </p>
        </div>
        <div className={styles.accountNameButtonContainer}>
          <ButtonBase
            className={styles.accountNameButton}
            onClick={openUpdateNameDialog}
          >
            Change Name
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
