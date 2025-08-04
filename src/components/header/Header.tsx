"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";
import { accountService } from "@/services/account/accountService";

interface HeaderProps {
  activeDropdown?: string;
  setActiveDropdown?: (dropdown: string | null) => void;
}

export const Header = ({ activeDropdown, setActiveDropdown }: HeaderProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const productsDropdownRef = useRef<HTMLUListElement>(null);
  const learnDropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setLoggedIn(accountService.isLoggedIn());
  }, []);

  useEffect(() => {
    if (activeDropdown === "products" && productsDropdownRef.current) {
      const dropdown = productsDropdownRef.current;
      dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
    }
    if (activeDropdown === "learn" && learnDropdownRef.current) {
      const dropdown = learnDropdownRef.current;
      dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
    }
  }, [activeDropdown]);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown?.(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown?.(null);
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
        {loggedIn ? (
          <div className={styles.headerAccountLinksContainer}>
            <Link href={"/account"} className={styles.headerAccountLink}>
              Account
            </Link>
          </div>
        ) : (
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
        )}
      </div>
      {activeDropdown === "products" && (
        <ul
          ref={productsDropdownRef}
          className={`${styles.dropdownMenu} ${styles.open}`}
        >
          <div className={styles.dropdownContent}>
            <li className={styles.dropdownItem}>
              <Link href={"/presenter"} className={styles.dropdownLink}>
                Presenter
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/visuals"} className={styles.dropdownLink}>
                Visuals
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/videoplayer"} className={styles.dropdownLink}>
                Video Player
              </Link>
            </li>
          </div>
        </ul>
      )}
      {activeDropdown === "learn" && (
        <ul
          ref={learnDropdownRef}
          className={`${styles.dropdownMenu} ${styles.open}`}
        >
          <div className={styles.dropdownContent}>
            <li className={styles.dropdownItem}>
              <Link href={"/blog"} className={styles.dropdownLink}>
                Blog
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/tutorials"} className={styles.dropdownLink}>
                Tutorials
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/updates"} className={styles.dropdownLink}>
                Updates
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/features"} className={styles.dropdownLink}>
                Features
              </Link>
            </li>
          </div>
        </ul>
      )}
    </header>
  );
};
