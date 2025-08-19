"use client";
import { AccountOptions } from "@/components/AccountOptions/AccountOptions";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileContainer}>
        <h1 className={styles.profileHeading}>Account</h1>
        <AccountOptions />
      </div>
    </section>
  );
}
