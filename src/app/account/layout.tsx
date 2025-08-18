"use client";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import { AccountHeader } from "@/components/AccountHeader/AccountHeader";
import { AccountSettingsHeader } from "@/components/AccountSettingsHeader/AccountSettingsHeader";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showAccountSettingsHeader = pathname.startsWith("/account/profile");

  return (
    <>
      <AccountHeader />
      {showAccountSettingsHeader && <AccountSettingsHeader />}
      <div className={styles.account}>{children}</div>
    </>
  );
}
