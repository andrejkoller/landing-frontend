import { ButtonBase } from "@mui/material";
import styles from "./AccountHeader.module.css";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface HeaderAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface AccountHeaderProps {
  navItems?: NavItem[];
  actions?: HeaderAction[];
}

export const AccountHeader = ({
  navItems = [
    { href: "/account", label: "Home" },
    { href: "/account/profile", label: "Profile" },
  ],
  actions,
}: AccountHeaderProps) => {
  const headerActions = actions ?? [{ label: "Logout" }];

  return (
    <header className={styles.accountHeader}>
      <div className={styles.accountHeaderContainer}>
        <div className={styles.accountHeaderContent}>
          <nav className={styles.accountHeaderNav}>
            <ul className={styles.accountHeaderList}>
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`${styles.accountHeaderItem} ${
                    item.isActive ? styles.accountHeaderItemActive : ""
                  }`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.accountHeaderActions}>
            {headerActions.map((action, index) =>
              action.href ? (
                <Link key={index} href={action.href}>
                  <ButtonBase>{action.label}</ButtonBase>
                </Link>
              ) : (
                <ButtonBase key={index} onClick={action.onClick}>
                  {action.label}
                </ButtonBase>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
