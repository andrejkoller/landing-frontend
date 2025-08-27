import { PhoneIcon } from "lucide-react";
import styles from "./AccountPhoneNumber.module.css";
import { ButtonBase } from "@mui/material";
import { useDialog } from "@/hooks/useDialog";
import { useAuth } from "@/hooks/useAuth";

export const AccountPhoneNumber = () => {
  const { openUpdatePhoneNumberDialog } = useDialog();
  const { publicUser } = useAuth();

  return (
    <div className={styles.accountPhoneNumber}>
      <h1 className={styles.accountPhoneNumberHeading}>Phone Number</h1>
      <div className={styles.accountPhoneNumberContainer}>
        <div className={styles.accountPhoneNumberFieldGroup}>
          <PhoneIcon className={styles.accountPhoneNumberIcon} />
          <p className={styles.accountPhoneNumberDescription}>
            {publicUser?.phoneNumber || "No phone number set"}
          </p>
        </div>
        <div className={styles.accountPhoneNumberButtonContainer}>
          <ButtonBase
            className={styles.accountPhoneNumberButton}
            onClick={openUpdatePhoneNumberDialog}
          >
            Edit
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
