"use client";

import styles from "./Footer.module.css";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoColumn}>
            <div className={styles.footerLogo}>
              <AnimatedLink href={"/"} hoverType={"color"}>
                <h1 className={styles.footerLogoText}>Presenter</h1>
              </AnimatedLink>
            </div>
            <div className={styles.footerSocials}>
              <ul className={styles.footerSocialLinks}>
                <li className={styles.footerSocialLink}>
                  <Link
                    href={"https://x.com"}
                    aria-label="Visit our X (Twitter) page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        fill="var(--bg-main)"
                        d="M9.47 6.77 15.3 0h-1.4L8.85 5.88 4.81 0H.15l6.11 8.9L.15 16h1.38l5.35-6.21L11.14 16h4.67zm-1.9 2.2-.61-.88-4.93-7.05h2.12l3.98 5.69.62.88 5.17 7.4h-2.13L7.58 8.97z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className={styles.footerSocialLink}>
                  <Link
                    href={"https://youtube.com"}
                    aria-label="Visit our YouTube channel"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      fill="none"
                      viewBox="0 0 16 14"
                      aria-hidden="true"
                    >
                      <g clipPath="url(#a)">
                        <path
                          fill="var(--bg-main)"
                          d="M15.6 2.5c.4 1.4.4 4.4.4 4.4s0 3-.4 4.4c-.2.8-.8 1.4-1.5 1.6-1.4.4-6.1.4-6.1.4s-4.7 0-6-.4c-.8-.2-1.4-.8-1.6-1.6C0 9.9 0 6.9 0 6.9s0-3 .4-4.4c.2-.8.8-1.4 1.5-1.6C3.3.5 8 .5 8 .5s4.7 0 6 .4c.8.2 1.4.8 1.6 1.6M6.4 9.7l4.8-2.8-4.8-2.8z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="currentColor" d="M0 .5h16v13H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li className={styles.footerSocialLink}>
                  <Link
                    href={"https://instagram.com"}
                    aria-label="Visit our Instagram profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 449 449"
                      aria-hidden="true"
                    >
                      <path
                        fill="var(--bg-main)"
                        d="M224.18 109.6c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8a26.8 26.8 0 1 1 26.8-26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8m-47.8 224.5a75.63 75.63 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9a75.63 75.63 0 0 1-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1a75.63 75.63 0 0 1 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.63 75.63 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className={styles.footerSocialLink}>
                  <Link
                    href={"https://facebook.com"}
                    aria-label="Visit our Facebook page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 448 449"
                      aria-hidden="true"
                    >
                      <path
                        fill="var(--bg-main)"
                        d="M448 25.2v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V275h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8V70.8c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4V275h58.4v173.5H24.7C11.1 448.5 0 437.4 0 423.8V25.2C0 11.6 11.1.5 24.7.5h398.5C436.9.5 448 11.6 448 25.2"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
        </div>
      </div>
    </footer>
  );
};
