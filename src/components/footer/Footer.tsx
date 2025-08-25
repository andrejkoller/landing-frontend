"use client";
import styles from "./Footer.module.css";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";

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
            <div className={styles.footerSupportColumn}>
              <h3 className={styles.footerSupportTitle}>Support</h3>
              <ul className={styles.footerSupportLinks}>
                <li className={styles.footerSupportLink}>
                  <AnimatedLink href={"/help"} hoverType={"color"}>
                    Help
                  </AnimatedLink>
                </li>
                <li className={styles.footerSupportLink}>
                  <AnimatedLink href={"/system-status"} hoverType={"color"}>
                    System Status
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
          <div className={styles.footerBottom}>
            <div className={styles.footerCopyright}>
              &copy; {new Date().getFullYear()} Presenter. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
