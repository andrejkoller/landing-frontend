"use client";
import styles from "./page.module.css";
import { AccountForm } from "@/components/AccountForm/AccountForm";
import { usePathname } from "next/navigation";
import { AccountHeader } from "@/components/AccountHeader/AccountHeader";

export default function Page() {
  const pathname = usePathname();
  const isProfilePage = pathname === "/account/profile";

  return (
    <section className={styles.accountSection}>
      <div className={styles.accountContainer}>
        <AccountHeader />
        <div className={styles.accountContent}>
          {isProfilePage && <AccountForm />}
        </div>
      </div>
    </section>
  );
}
