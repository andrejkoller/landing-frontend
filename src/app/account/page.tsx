"use client";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.accountContent}>
        <AccountOptions />
      </div>
    </div>
  );
}
