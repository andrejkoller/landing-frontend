import { useMemo } from "react";
import styles from "./AccountSettingsHeader.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    { href: "/account/profile", label: "Account" },
    { href: "/account/profile/security", label: "Security" },
    { href: "/account/profile/notifications", label: "Notifications" },
    { href: "/account/profile/activity", label: "Activity" },
  ],
}: AccountHeaderProps) => {
  const pathname = usePathname();

  const activeNavItems = useMemo(() => {
    return navItems.map((item) => ({
      ...item,
      isActive: item.href === pathname,
    }));
  }, [navItems, pathname]);

  return (
    <header className={styles.settingsHeader}>
      <div className={styles.settingsHeaderContainer}>
        <div className={styles.settingsHeaderContent}>
          <nav className={styles.settingsHeaderNav}>
            <ul className={styles.settingsHeaderList}>
              {activeNavItems.map((item) => (
                <li
                  key={item.href}
                  className={`${styles.settingsHeaderItem} ${
                    item.isActive ? styles.settingsHeaderItemActive : ""
                  }`}
                >
                  <Link href={item.href} className={styles.settingsHeaderLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
