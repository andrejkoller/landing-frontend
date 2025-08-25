"use client";

import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import { AccountPhoneNumber } from "@/components/AccountPhoneNumber/AccountPhoneNumber";
import styles from "./page.module.css";
import { AccountCard } from "@/components/AccountCard/AccountCard";

export default function Page() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <div className={styles.profileLeft}>
          <AccountCard />
        </div>
        <div className={styles.profileRight}>
          <AccountEmail />
          <AccountPhoneNumber />
          <AccountOptions />
        </div>
      </div>
    </div>
  );
}
