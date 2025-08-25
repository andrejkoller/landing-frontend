import { PhoneIcon } from "lucide-react";
import styles from "./AccountPhoneNumber.module.css";
import { ButtonBase } from "@mui/material";

export const AccountPhoneNumber = () => {
  return (
    <div className={styles.accountPhoneNumber}>
      <h1 className={styles.accountPhoneNumberHeading}>Phone Number</h1>
      <div className={styles.accountPhoneNumberContainer}>
        <div className={styles.accountPhoneNumberFieldGroup}>
          <PhoneIcon className={styles.accountPhoneNumberIcon} />
          <p className={styles.accountPhoneNumberDescription}>
            +41 79 123 45 67
          </p>
        </div>
        <div className={styles.accountPhoneNumberButtonContainer}>
          <ButtonBase className={styles.accountPhoneNumberButton}>
            Edit
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
