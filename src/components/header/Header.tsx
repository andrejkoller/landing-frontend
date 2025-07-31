"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";

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
                <ButtonBase
                  className={styles.navButton}
                  onMouseEnter={() => handleMouseEnter("learn")}
                  onMouseLeave={handleMouseLeave}
                >
                  Learn
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
                <Link href={"/help"} className={styles.navLink}>
                  Help
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerAccountLinksContainer}>
          <Link href={"/signin"} className={styles.headerAccountLink}>
            Log In
          </Link>
          <AnimatedLink
            href={"/signup"}
            className={styles.headerAccountLink}
            hoverType={"background"}
          >
            Sign Up
          </AnimatedLink>
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
      {activeDropdown === "learn" && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
            <Link href={"/tutorials"} className={styles.dropdownLink}>
              Tutorials
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/blog"} className={styles.dropdownLink}>
              Blog
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={"/features"} className={styles.dropdownLink}>
              Features
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};
