import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.wrapper}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.footerUtils}>
              <div className={styles.footerUtilsItem}>
                <div className={styles.footerUtilsItemLinks}>
                  <Link href="/about" className={styles.footerLink}>
                    About Us
                  </Link>
                  <Link href="/contact" className={styles.footerLink}>
                    Contact
                  </Link>
                  <Link href="/privacy" className={styles.footerLink}>
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className={styles.footerLink}>
                    Terms of Service
                  </Link>
                </div>
              </div>
              <div className={styles.footerUtilsItem}>
                <div className={styles.footerUtilsItemTheme}></div>
                <div className={styles.footerUtilsItemLanguage}></div>
              </div>
            </div>
          </div>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Products</h3>
              <ul className={styles.footerColumnList}>
                <li className={styles.footerColumnItem}>
                  <Link href="/presenter" className={styles.footerLink}>
                    Presenter
                  </Link>
                </li>
                <li className={styles.footerColumnItem}>
                  <Link href="/planning" className={styles.footerLink}>
                    Planning
                  </Link>
                </li>
                <li className={styles.footerColumnItem}>
                  <Link href="/charts" className={styles.footerLink}>
                    Charts
                  </Link>
                </li>
                <li className={styles.footerColumnItem}>
                  <Link href="/community" className={styles.footerLink}>
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Learn</h3>
              <ul className={styles.footerColumnList}>
                <li className={styles.footerColumnItem}>
                  <Link href="/tutorials" className={styles.footerLink}>
                    Tutorials
                  </Link>
                </li>
                <li className={styles.footerColumnItem}>
                  <Link href="/blog" className={styles.footerLink}>
                    Blog
                  </Link>
                </li>
                <li className={styles.footerColumnItem}>
                  <Link href="/features" className={styles.footerLink}>
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Support</h3>
              <ul className={styles.footerColumnList}>
                <li className={styles.footerColumnItem}>
                  <Link href="/help" className={styles.footerLink}>
                    Help Center
                  </Link>
                </li>
                <li className={styles.footerColumnItem}>
                  <Link href="/contact-support" className={styles.footerLink}>
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
