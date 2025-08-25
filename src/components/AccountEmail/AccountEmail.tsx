import { MailIcon } from "lucide-react";
import styles from "./AccountEmail.module.css";
import { ButtonBase } from "@mui/material";

export const AccountEmail = () => {
  return (
    <div className={styles.accountEmail}>
      <h1 className={styles.accountEmailHeading}>Email</h1>
      <div className={styles.accountEmailContainer}>
        <div className={styles.accountEmailFieldGroup}>
          <MailIcon className={styles.accountEmailIcon} />
          <p className={styles.accountEmailDescription}>
            andrejkoller@outlook.com
          </p>
        </div>
        <div className={styles.accountEmailButtonContainer}>
          <ButtonBase className={styles.accountEmailButton}>Edit</ButtonBase>
        </div>
      </div>
    </div>
  );
};
