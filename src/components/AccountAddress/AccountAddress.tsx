import { HouseIcon } from "lucide-react";
import styles from "./AccountAddress.module.css";
import { ButtonBase } from "@mui/material";
import { useDialog } from "@/hooks/useDialog";

export const AccountAddress = () => {
  const { openUpdateAddressDialog } = useDialog();

  return (
    <div className={styles.accountAddress}>
      <h1 className={styles.accountAddressHeading}>Address</h1>
      <div className={styles.accountAddressContainer}>
        <div className={styles.accountAddressFieldGroup}>
          <HouseIcon className={styles.accountAddressIcon} />
          <div className={styles.accountAddressDescriptionWrapper}>
            <p className={styles.accountAddressDescription}>123 Main St</p>
            <p className={styles.accountAddressDescription}>Springfield</p>
            <p className={styles.accountAddressDescription}>USA</p>
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
