"use client";

import { AccountPresenterLinking } from "@/components/AccountPresenterLinking/AccountPresenterLinking";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.appsContainer}>
      <div className={styles.appsContent}>
        <AccountPresenterLinking />
      </div>
    </div>
  );
}
