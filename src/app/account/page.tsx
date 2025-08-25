"use client";

import { AccountCard } from "@/components/AccountCard/AccountCard";
import styles from "./page.module.css";
import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import { AccountPhoneNumber } from "@/components/AccountPhoneNumber/AccountPhoneNumber";
import { AccountAddress } from "@/components/AccountAddress/AccountAddress";

export default function Page() {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.accountContent}>
        <div className={styles.accountLeft}>
          <AccountCard />
          <AccountOptions />
        </div>
        <div className={styles.accountRight}>
          <AccountEmail />
          <AccountPhoneNumber />
          <AccountAddress />
        </div>
      </div>
    </div>
  );
}
