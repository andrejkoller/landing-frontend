"use client";

import { AccountCard } from "@/components/AccountCard/AccountCard";
import styles from "./page.module.css";
import { AccountEmail } from "@/components/AccountEmail/AccountEmail";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";

export default function Page() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <AccountCard />
        <AccountEmail />
        <AccountOptions />
      </div>
    </div>
  );
}
