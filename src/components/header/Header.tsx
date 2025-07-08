"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <nav className={styles.headerNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <ButtonBase
                  className={styles.navButton}
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                >
                  Products
                  <span>
                    <ChevronDown className={styles.navIcon} />
                  </span>
                </ButtonBase>
              </li>
              <li className={styles.navItem}>
                <Link href={"/presenter"} className={styles.navLink}>
                  Pricing
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href={"/media"} className={styles.navLink}>
                  Media
                </Link>
              </li>
              <li className={styles.navItem}>
                <ButtonBase
                  className={styles.navButton}
                  onMouseEnter={() => handleMouseEnter("help")}
                  onMouseLeave={handleMouseLeave}
                >
                  Help
                  <span>
                    <ChevronDown className={styles.navIcon} />
                  </span>
                </ButtonBase>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerAccountLinksContainer}>
          <Link href={"/signin"} className={styles.headerAccountLink}>
            Log In
          </Link>
          <Link href={"/signup"} className={styles.headerAccountLink}>
            Sign Up
          </Link>
        </div>
      </div>
      {activeDropdown === "products" && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
            <Link href={"/presenter"} className={styles.dropdownLink}>
              Presenter
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/planning"} className={styles.dropdownLink}>
              Planning
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/music"} className={styles.dropdownLink}>
              Charts
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/community"} className={styles.dropdownLink}>
              Community
            </Link>
          </li>
        </ul>
      )}
      {activeDropdown === "help" && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
            <Link href={"/faq"} className={styles.dropdownLink}>
              FAQ
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/faq"} className={styles.dropdownLink}>
              Contact
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/faq"} className={styles.dropdownLink}>
              Videos
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};
