"use client";
import { AccountForm } from "@/components/AccountForm/AccountForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileContainer}>
        <AccountForm />
      </div>
    </section>
  );
}
