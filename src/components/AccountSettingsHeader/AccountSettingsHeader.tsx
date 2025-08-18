import Link from "next/link";
import styles from "./AccountSettingsHeader.module.css";

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface AccountHeaderProps {
  navItems?: NavItem[];
}

export const AccountSettingsHeader = ({
  navItems = [
    { href: "/account/settings", label: "General" },
    { href: "/account/settings/security", label: "Security" },
    { href: "/account/settings/notifications", label: "Notifications" },
  ],
}: AccountHeaderProps) => {
  return (
    <header className={styles.settingsHeader}>
      <div className={styles.settingsHeaderContainer}>
        <div className={styles.settingsHeaderContent}>
          <nav className={styles.settingsHeaderNav}>
            <ul className={styles.settingsHeaderList}>
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`${styles.settingsHeaderItem} ${
                    item.isActive ? styles.settingsHeaderItemActive : ""
                  }`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
