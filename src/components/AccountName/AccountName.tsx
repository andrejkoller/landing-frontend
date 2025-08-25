import styles from "./AccountName.module.css";
import { ButtonBase } from "@mui/material";

export const AccountName = () => {
  return (
    <div className={styles.accountName}>
      <div className={styles.accountNameContainer}>
        <div className={styles.accountNameFieldGroup}>
          <p className={styles.accountNameDescription}>Andrej Koller</p>
        </div>
        <div className={styles.accountNameButtonContainer}>
          <ButtonBase className={styles.accountNameButton}>
            Change Name
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
