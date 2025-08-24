"use client";

import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import { AccountPhoneNumber } from "@/components/AccountPhoneNumber/AccountPhoneNumber";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <div className={styles.profileLeft}></div>
        <div className={styles.profileRight}>
          <AccountEmail />
          <AccountPhoneNumber />
          <AccountOptions />
        </div>
      </div>
    </div>
  );
}
