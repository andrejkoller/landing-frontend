import { useEffect, useRef } from "react";
import styles from "./AccountProfileImage.module.css";
import { ButtonBase } from "@mui/material";
import Link from "next/link";

export const AccountProfileImage = () => {
  const profileImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backgroundColors = [
      "var(--color-presenter)",
      "var(--color-visuals)",
      "var(--color-videoplayer)",
      "var(--color-app)",
    ];

    const randomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

    if (profileImageRef.current) {
      profileImageRef.current.style.backgroundColor = randomColor;
    }
  }, []);

  return (
    <div className={styles.accountProfileImage} ref={profileImageRef}>
      <ButtonBase className={styles.accountProfileButton}>
        <Link href={"/account/profile"}>A</Link>
      </ButtonBase>
    </div>
  );
};
