"use client";
import { AccountSidebar } from "@/components/AccountSidebar/AccountSidebar";
import styles from "./page.module.css";
import { AccountForm } from "@/components/AccountForm/AccountForm";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <section className={styles.accountSection}>
      <div className={styles.accountContainer}>
        <div className={styles.accountContent}>
          <AccountSidebar />
          {pathname === "/account" && <AccountForm />}
        </div>
      </div>
    </section>
  );
}
