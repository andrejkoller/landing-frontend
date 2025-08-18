import styles from "./AccountSidebar.module.css";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";

export const AccountSidebar = () => {
  return (
    <div className={styles.accountSidebarContainer}>
      <div className={styles.accountSidebarContent}>
        <div className={styles.userSettings}>
          <h2 className={styles.sidebarHeading}>Account Settings</h2>
          <ul className={styles.sidebarLinks}>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/account"}>My Account</AnimatedLink>
            </li>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/security"}>Security</AnimatedLink>
            </li>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/devices"}>Devices</AnimatedLink>
            </li>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/connections"}>Connections</AnimatedLink>
            </li>
          </ul>
        </div>
        <div className={styles.billing}>
          <h2 className={styles.sidebarHeading}>Payment Settings</h2>
          <ul className={styles.sidebarLinks}>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/subscriptions"}>Subscriptions</AnimatedLink>
            </li>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/billing"}>Billing</AnimatedLink>
            </li>
          </ul>
        </div>
        <div className={styles.products}>
          <h2 className={styles.sidebarHeading}>Products</h2>
          <ul className={styles.sidebarLinks}>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/presenter"}>Presenter</AnimatedLink>
            </li>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/visuals"}>Visuals</AnimatedLink>
            </li>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/videoplayer"}>Video Player</AnimatedLink>
            </li>
          </ul>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.accountOptions}>
          <ul className={styles.sidebarLinks}>
            <li className={styles.sidebarItem}>
              <AnimatedLink href={"/logout"} className={styles.logout}>
                Logout
              </AnimatedLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
