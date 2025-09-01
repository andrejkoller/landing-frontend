"use client";

import { useAuth } from "@/hooks/useAuth";
import styles from "./layout.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { publicUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !publicUser) {
      router.push(
        process.env.NEXT_PUBLIC_SIGNIN_REDIRECT_URL ||
          "http://localhost:3001/signin?redirect=http://localhost:3000/callback"
      );
    }
  }, [publicUser, loading, router]);

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
