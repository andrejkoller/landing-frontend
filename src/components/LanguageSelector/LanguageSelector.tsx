import Link from "next/link";
import Flag from "react-world-flags";
import styles from "./LanguageSelector.module.css";

export const LanguageSelector = () => {
  return (
    <Link className={styles["languages-link"]} href={"/languages"}>
      <Flag className={styles.languageFlag} code="US" />
    </Link>
  );
};
