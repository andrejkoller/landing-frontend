import Link from "next/link";
import Flag from "react-world-flags";
import styles from "./Language.module.css";

export const Language = () => {
  return (
    <Link className={styles["languages-link"]} href={"/languages"}>
      <Flag className={styles.languageFlag} code="US" />
        <span className={styles.languageText}>English</span>
    </Link>
  );
};
