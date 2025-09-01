import { HouseIcon } from "lucide-react";
import styles from "./AccountAddress.module.css";
import { ButtonBase } from "@mui/material";
import { useDialog } from "@/hooks/useDialog";
import { useAuth } from "@/hooks/useAuth";

export const AccountAddress = () => {
  const { openUpdateAddressDialog } = useDialog();
  const { publicUser } = useAuth();

  const address = publicUser?.address;

  return (
    <div className={styles.accountAddress}>
      <h1 className={styles.accountAddressHeading}>Address</h1>
      <div className={styles.accountAddressContainer}>
        <div className={styles.accountAddressFieldGroup}>
          <HouseIcon className={styles.accountAddressIcon} />
          {address ? (
            <div className={styles.accountAddressDetails}>
              <p>{address.country}</p>
              <p>{address.state}</p>
              <p>
                {address.zipCode} {address.city}
              </p>
            </div>
          ) : (
            <p className={styles.accountAddressDescription}>No Address set</p>
          )}
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
