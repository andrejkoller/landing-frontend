import { AccountName } from "../AccountName/AccountName";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";
import styles from "./AccountCard.module.css";

export const AccountCard = () => {
  return (
    <div className={styles.accountCard}>
      <AnimatedBackground className={styles.accountCardBanner}>
        <h2 className={styles.accountCardTitle}>Account</h2>
        <div className={styles.accountCardProfileImage}>
          <span className={styles.accountCardProfileImageInitials}>AK</span>
        </div>
      </AnimatedBackground>
      <div className={styles.accountCardContainer}>
        <AccountName />
      </div>
    </div>
  );
};
