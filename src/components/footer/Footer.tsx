"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerProductColumn}>
              <h3 className={styles.footerProductTitle}>Products</h3>
              <ul className={styles.footerProductLinks}>
                <li className={styles.footerProductLink}>
                  <AnimatedLink href={"/presenter"} hoverType={"color"}>
                    Presenter
                  </AnimatedLink>
                </li>
                <li className={styles.footerProductLink}>
                  <AnimatedLink href={"/visuals"} hoverType={"color"}>
                    Visuals
                  </AnimatedLink>
                </li>
                <li className={styles.footerProductLink}>
                  <AnimatedLink href={"/videoplayer"} hoverType={"color"}>
                    Video Player
                  </AnimatedLink>
                </li>
              </ul>
            </div>
            <div className={styles.footerCompanyColumn}>
              <h3 className={styles.footerCompanyTitle}>Company</h3>
              <ul className={styles.footerCompanyLinks}>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/about"} hoverType={"color"}>
                    About
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/contact"} hoverType={"color"}>
                    Contact
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/privacy-policy"} hoverType={"color"}>
                    Privacy Policy
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink
                    href={"/terms-and-conditions"}
                    hoverType={"color"}
                  >
                    Terms & Conditions
                  </AnimatedLink>
                </li>
              </ul>
            </div>
            <div className={styles.footerLearnColumn}>
              <h3 className={styles.footerLearnTitle}>Learn</h3>
              <ul className={styles.footerLearnLinks}>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/blog"} hoverType={"color"}>
                    Blog
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/tutorials"} hoverType={"color"}>
                    Tutorials
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/updates"} hoverType={"color"}>
                    Updates
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/features"} hoverType={"color"}>
                    Features
                  </AnimatedLink>
                </li>
              </ul>
            </div>
            <div className={styles.footerSocialColumn}>
              <h3 className={styles.footerSocialTitle}>Socials</h3>
              <ul className={styles.footerSocialLinks}>
                <li className={styles.footerSocialLink}>
                  <AnimatedLink href={"https://x.com"} hoverType={"color"}>
                    X
                  </AnimatedLink>
                </li>
                <li className={styles.footerSocialLink}>
                  <AnimatedLink
                    href={"https://linkedin.com"}
                    hoverType={"color"}
                  >
                    LinkedIn
                  </AnimatedLink>
                </li>
                <li className={styles.footerSocialLink}>
                  <AnimatedLink
                    href={"https://instagram.com"}
                    hoverType={"color"}
                  >
                    Instagram
                  </AnimatedLink>
                </li>
                <li className={styles.footerSocialLink}>
                  <AnimatedLink
                    href={"https://facebook.com"}
                    hoverType={"color"}
                  >
                    Facebook
                  </AnimatedLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerLogoContainer}>
            <Link href={"/"} className={styles.footerLogoLink}>
              <h1 className={styles.footerLogoText}>Presenter</h1>
            </Link>
            <div className={styles.footerLanguageSelector}>
              <LanguageSelector />
            </div>
          </div>
          <div className={styles.footerCopyrightContainer}>
            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} Presenter. All rights reserved.
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerDescription}>
            <p className={styles.footerDescriptionText}>
              ¹ Setup required. Presenter is a modern church presentation
              software designed to enrich worship services with powerful
              features and an intuitive user interface.
            </p>
            <p className={styles.footerDescriptionText}>
              ² Presenter is suitable for both small churches and large
              congregations. The software offers customizable templates, easy
              media management, and a stable presentation experience.
            </p>
            <p className={styles.footerDescriptionText}>
              ³ The basic version is free to use. Advanced features such as
              cloud sharing, multi-user access, and livestream integration may
              require a separate subscription.
            </p>
            <p className={styles.footerDescriptionText}>
              ⁴ Presenter is compatible with major operating systems. A stable
              internet connection is required for synchronization and sharing
              features.
            </p>
            <p className={styles.footerDescriptionText}>
              ⁵ All content can be stored locally or managed via Presenter’s
              cloud services. A free user account is required for cloud
              functionality.
            </p>
            <p className={styles.footerDescriptionText}>
              ⁶ Regular updates include functional improvements and security
              enhancements.
            </p>
            <p className={styles.footerDescriptionText}>
              ⁷ For more information, visit: www.presenter-app.io
            </p>
            <p className={styles.footerDescriptionText}>
              ⁸ All images shown are for illustration purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
