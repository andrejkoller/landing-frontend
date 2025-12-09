"use client";

import { useAuth } from "@/hooks/useAuth";
import styles from "./layout.module.css";
import { CircularProgress } from "@mui/material";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { publicUser, loading } = useAuth();

  if (loading) {
    return (
      <div className={styles.account}>
        <div className={styles.loadingContainer}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  if (publicUser) {
    return <div className={styles.account}>{children}</div>;
  }

  return null;
}
