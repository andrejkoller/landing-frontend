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
          <div className={styles.footerLogoContainer}>
            <Link href={"/"} className={styles.footerLogoLink}>
              <h1 className={styles.footerLogoText}>Your Company Name</h1>
            </Link>
            <p className={styles.footerLogoDescription}>
              Your company description goes here. Briefly explain what you do.
            </p>
          </div>
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
                  <AnimatedLink href={"/privacy"} hoverType={"color"}>
                    Privacy Policy
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/terms"} hoverType={"color"}>
                    Terms & Conditions
                  </AnimatedLink>
                </li>
              </ul>
            </div>
            <div className={styles.footerLearnColumn}>
              <h3 className={styles.footerLearnTitle}>Learn</h3>
              <ul className={styles.footerLearnLinks}>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/docs"} hoverType={"color"}>
                    Blog
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/blog"} hoverType={"color"}>
                    Tutorials
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/updates"} hoverType={"color"}>
                    Updates
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/faq"} hoverType={"color"}>
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
          <div className={styles.footerLanguageSelector}>
            <LanguageSelector />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
