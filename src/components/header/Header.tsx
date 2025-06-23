"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase } from "@mui/material";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["header-logo-container"]}>
              <Link href={"/"} className={styles["header-logo"]}>
                <span className={styles["header-logo-text"]}>MyApp</span>
              </Link>
            </div>
            <nav className={styles["header-nav"]} aria-label="Main Navigation">
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-item"]}>
                  <ButtonBase className={styles["nav-button"]}>
                    Apps
                    <span>
                      <ChevronDown className={styles["nav-icon"]} />
                    </span>
                  </ButtonBase>
                </li>
                <li className={styles["nav-item"]}>
                  <ButtonBase className={styles["nav-button"]}>
                    Pricing
                    <span>
                      <ChevronDown className={styles["nav-icon"]} />
                    </span>
                  </ButtonBase>
                </li>
                <li className={styles["nav-item"]}>
                  <Link href={"/help"} className={styles["nav-link"]}>
                    Help
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles["header-account-links-container"]}>
            <Link href={"/signin"} className={styles["header-account-link"]}>
              Log In
            </Link>
            <Link href={"/signup"} className={styles["header-account-link"]}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
