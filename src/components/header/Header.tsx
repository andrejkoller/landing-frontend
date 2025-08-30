"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  activeDropdown?: string;
  setActiveDropdown?: (dropdown: string | null) => void;
}

export const Header = ({ activeDropdown, setActiveDropdown }: HeaderProps) => {
  const { publicUser } = useAuth();
  const productsDropdownRef = useRef<HTMLUListElement>(null);
  const learnDropdownRef = useRef<HTMLUListElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown?.(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown?.(null);
    }, 500);
  };

  useEffect(() => {
    if (activeDropdown === "products" && productsDropdownRef.current) {
      const dropdown = productsDropdownRef.current;
      const scrollHeight = dropdown.scrollHeight;
      dropdown.style.setProperty("--dropdown-height", `${scrollHeight}px`);
      dropdown.style.maxHeight = `${scrollHeight}px`;
    } else if (productsDropdownRef.current) {
      productsDropdownRef.current.style.maxHeight = "0px";
    }

    if (activeDropdown === "learn" && learnDropdownRef.current) {
      const dropdown = learnDropdownRef.current;
      const scrollHeight = dropdown.scrollHeight;
      dropdown.style.setProperty("--dropdown-height", `${scrollHeight}px`);
      dropdown.style.maxHeight = `${scrollHeight}px`;
    } else if (learnDropdownRef.current) {
      learnDropdownRef.current.style.maxHeight = "0px";
    }

    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, [activeDropdown]);

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
                <Link href={"/pricing"} className={styles.navLink}>
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
        {publicUser ? (
          <div className={styles.headerAccountLinksContainer}>
            <Link href={"/account"} className={styles.headerAccountLink}>
              Account
            </Link>
          </div>
        ) : (
          <div className={styles.headerAccountLinksContainer}>
            <Link
              href={
                process.env.NEXT_PUBLIC_SIGNIN_REDIRECT_URL ||
                "http://localhost:3001/signin?redirect=http://localhost:3000/callback"
              }
              className={styles.headerAccountLink}
            >
              Log In
            </Link>
            <AnimatedLink
              href={
                process.env.NEXT_PUBLIC_SIGNUP_REDIRECT_URL ||
                "http://localhost:3001/signup?redirect=http://localhost:3000/callback"
              }
              hoverType={"background"}
              className={styles.headerAccountLink}
            >
              Sign Up
            </AnimatedLink>
          </div>
        )}
      </div>
      {/* Products Dropdown - Immer gerendert für smooth transitions */}
      <ul
        ref={productsDropdownRef}
        className={`${styles.dropdownMenu} ${
          activeDropdown === "products" ? styles.open : ""
        }`}
        onMouseEnter={() => handleMouseEnter("products")}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.dropdownContent}>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/presenter"} className={styles.dropdownLink}>
              Presenter
            </AnimatedLink>
          </li>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/visuals"} className={styles.dropdownLink}>
              Visuals
            </AnimatedLink>
          </li>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/videoplayer"} className={styles.dropdownLink}>
              Video Player
            </AnimatedLink>
          </li>
        </div>
      </ul>

      {/* Learn Dropdown - Immer gerendert für smooth transitions */}
      <ul
        ref={learnDropdownRef}
        className={`${styles.dropdownMenu} ${
          activeDropdown === "learn" ? styles.open : ""
        }`}
        onMouseEnter={() => handleMouseEnter("learn")}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.dropdownContent}>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/blog"} className={styles.dropdownLink}>
              Blog
            </AnimatedLink>
          </li>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/tutorials"} className={styles.dropdownLink}>
              Tutorials
            </AnimatedLink>
          </li>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/updates"} className={styles.dropdownLink}>
              Updates
            </AnimatedLink>
          </li>
          <li className={styles.dropdownItem}>
            <AnimatedLink href={"/features"} className={styles.dropdownLink}>
              Features
            </AnimatedLink>
          </li>
        </div>
      </ul>
    </header>
  );
};
