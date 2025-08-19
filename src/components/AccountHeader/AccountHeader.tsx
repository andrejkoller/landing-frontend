import styles from "./AccountHeader.module.css";
import { AccountProfileImage } from "../AccountProfileImage/AccountProfileImage";
import Link from "next/link";

export const AccountHeader = () => {
  return (
    <header className={styles.accountHeader}>
      <div className={styles.accountHeaderContainer}>
        <div className={styles.accountHeaderContent}>
          <h1 className={styles.accountHeaderLogo}>
            <Link href={"/account"}>Presenter</Link>
          </h1>
        </div>
        <div className={styles.accountHeaderProfile}>
          <AccountProfileImage />
        </div>
      </div>
    </header>
  );
};
