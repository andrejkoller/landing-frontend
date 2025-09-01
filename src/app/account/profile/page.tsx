"use client";

import { AccountCard } from "@/components/AccountCard/AccountCard";
import styles from "./page.module.css";
import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import { AccountAddress } from "@/components/AccountAddress/AccountAddress";

export default function Page() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <AccountCard />
        <AccountEmail />
        <AccountAddress />
        <AccountOptions />
      </div>
    </div>
  );
}
