"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";
import { Language } from "../Language/Language";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoContainer}>
            <Link href={"/"} className={styles.footerLogoLink}>
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={150}
                height={50}
                className={styles.footerLogo}
              />
            </Link>
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
                  <AnimatedLink href={"/content"} hoverType={"color"}>
                    Content
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
                    About Us
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/contact"} hoverType={"color"}>
                    Get in Touch
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/privacy"} hoverType={"color"}>
                    Privacy Policy
                  </AnimatedLink>
                </li>
                <li className={styles.footerCompanyLink}>
                  <AnimatedLink href={"/terms"} hoverType={"color"}>
                    Terms of Service
                  </AnimatedLink>
                </li>
              </ul>
            </div>
            <div className={styles.footerLearnColumn}>
              <h3 className={styles.footerLearnTitle}>Learn</h3>
              <ul className={styles.footerLearnLinks}>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/blog"} hoverType={"color"}>
                    Tutorials
                  </AnimatedLink>
                </li>
                <li className={styles.footerLearnLink}>
                  <AnimatedLink href={"/docs"} hoverType={"color"}>
                    Blog
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
                <li className={styles.footerSocialLink}>
                  <AnimatedLink href={"https://x.com"} hoverType={"color"}>
                    X
                  </AnimatedLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
          <div className={styles.footerLanguageSelector}>
            <Language />
          </div>
        </div>
      </div>
    </footer>
  );
};
