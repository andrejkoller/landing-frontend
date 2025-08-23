"use client";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import styles from "./page.module.css";
import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountPhoneNumber } from "@/components/AccountPhoneNumber/AccountPhoneNumber";

export default function Page() {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.accountContent}>
        <div className={styles.accountLeft}></div>
        <div className={styles.accountRight}>
          <AccountEmail />
          <AccountPhoneNumber />
          <AccountOptions />
        </div>
      </div>
    </div>
  );
}
