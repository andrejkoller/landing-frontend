"use client";

import styles from "./layout.module.css";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.account}>{children}</div>;
}
