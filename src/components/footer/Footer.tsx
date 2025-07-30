"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const footerLinks = useRef<HTMLAnchorElement[]>([]);

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !footerLinks.current.includes(el)) {
      footerLinks.current.push(el);
    }
  };

  useEffect(() => {
    const hoverColors = [
      "var(--color-presenter)",
      "var(--color-planning)",
      "var(--color-charts)",
      "var(--color-community)",
    ];

    const currentLinks = [...footerLinks.current];
    const handlersMap = new Map<
      HTMLAnchorElement,
      { enter: () => void; leave: () => void }
    >();

    currentLinks.forEach((link) => {
      const handleMouseEnter = () => {
        const randomColor =
          hoverColors[Math.floor(Math.random() * hoverColors.length)];
        link.style.color = randomColor;
      };

      const handleMouseLeave = () => {
        link.style.color = "";
      };

      handlersMap.set(link, {
        enter: handleMouseEnter,
        leave: handleMouseLeave,
      });

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      currentLinks.forEach((link) => {
        const handlers = handlersMap.get(link);
        if (handlers) {
          link.removeEventListener("mouseenter", handlers.enter);
          link.removeEventListener("mouseleave", handlers.leave);
        }
      });
    };
  }, []);

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
                  <Link href={"/presenter"} ref={addToRefs}>
                    Presenter
                  </Link>
                </li>
                <li className={styles.footerProductLink}>
                  <Link href={"/content"} ref={addToRefs}>
                    Content
                  </Link>
                </li>
                <li className={styles.footerProductLink}>
                  <Link href={"/videoplayer"} ref={addToRefs}>
                    Video Player
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCompanyColumn}>
              <h3 className={styles.footerCompanyTitle}>Company</h3>
              <ul className={styles.footerCompanyLinks}>
                <li className={styles.footerCompanyLink}>
                  <Link href={"/about"} ref={addToRefs}>
                    About Us
                  </Link>
                </li>
                <li className={styles.footerCompanyLink}>
                  <Link href={"/contact"} ref={addToRefs}>
                    Get in Touch
                  </Link>
                </li>
                <li className={styles.footerCompanyLink}>
                  <Link href={"/privacy"} ref={addToRefs}>
                    Privacy Policy
                  </Link>
                </li>
                <li className={styles.footerCompanyLink}>
                  <Link href={"/terms"} ref={addToRefs}>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerLearnColumn}>
              <h3 className={styles.footerLearnTitle}>Learn</h3>
              <ul className={styles.footerLearnLinks}>
                <li className={styles.footerLearnLink}>
                  <Link href={"/blog"} ref={addToRefs}>
                    Tutorials
                  </Link>
                </li>
                <li className={styles.footerLearnLink}>
                  <Link href={"/docs"} ref={addToRefs}>
                    Blog
                  </Link>
                </li>
                <li className={styles.footerLearnLink}>
                  <Link href={"/faq"} ref={addToRefs}>
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerSocialColumn}>
              <h3 className={styles.footerSocialTitle}>Socials</h3>
              <ul className={styles.footerSocialLinks}>
                <li className={styles.footerSocialLink}>
                  <Link href={"https://linkedin.com"} ref={addToRefs}>
                    LinkedIn
                  </Link>
                </li>
                <li className={styles.footerSocialLink}>
                  <Link href={"https://instagram.com"} ref={addToRefs}>
                    Instagram
                  </Link>
                </li>
                <li className={styles.footerSocialLink}>
                  <Link href={"https://facebook.com"} ref={addToRefs}>
                    Facebook
                  </Link>
                </li>
                <li className={styles.footerSocialLink}>
                  <Link href={"https://x.com"} ref={addToRefs}>
                    X
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
