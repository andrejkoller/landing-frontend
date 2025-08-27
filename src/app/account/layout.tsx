"use client";

import { useAuth } from "@/hooks/useAuth";
import styles from "./layout.module.css";
import { useEffect } from "react";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { publicUser } = useAuth();

  useEffect(() => {
    if (!publicUser) {
      window.location.href =
        "http://localhost:3001/signin?redirect=http://localhost:3000/callback";
    }
  }, [publicUser]);
  return <div className={styles.account}>{children}</div>;
}
