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
            Please enter your phone number.
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
