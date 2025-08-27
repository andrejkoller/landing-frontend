"use client";

import { AccountCard } from "@/components/AccountCard/AccountCard";
import styles from "./page.module.css";
import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import { AccountPhoneNumber } from "@/components/AccountPhoneNumber/AccountPhoneNumber";
import { AccountAddress } from "@/components/AccountAddress/AccountAddress";

export default function Page() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <AccountCard />
        <AccountEmail />
        <AccountPhoneNumber />
        <AccountAddress />
        <AccountOptions />
      </div>
    </div>
  );
}
