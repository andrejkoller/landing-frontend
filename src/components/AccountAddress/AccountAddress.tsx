import { HouseIcon } from "lucide-react";
import styles from "./AccountAddress.module.css";
import { ButtonBase } from "@mui/material";
import { useDialog } from "@/hooks/useDialog";
import { useAuth } from "@/hooks/useAuth";

export const AccountAddress = () => {
  const { openUpdateAddressDialog } = useDialog();
  const { publicUser } = useAuth();

  return (
    <div className={styles.accountAddress}>
      <h1 className={styles.accountAddressHeading}>Address</h1>
      <div className={styles.accountAddressContainer}>
        <div className={styles.accountAddressFieldGroup}>
          <HouseIcon className={styles.accountAddressIcon} />
          <div className={styles.accountAddressDescriptionWrapper}>
            <p className={styles.accountAddressDescription}>
              {publicUser?.street || "No street set"}
            </p>
            <p className={styles.accountAddressDescription}>
              {publicUser?.city || "No city set"}
            </p>
            <p className={styles.accountAddressDescription}>
              {publicUser?.zipCode || "No zip code set"}{" "}
              {publicUser?.state || "No state set"}
            </p>
          </div>
        </div>
        <div className={styles.accountAddressButtonContainer}>
          <ButtonBase
            className={styles.accountAddressButton}
            onClick={openUpdateAddressDialog}
          >
            Edit
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
