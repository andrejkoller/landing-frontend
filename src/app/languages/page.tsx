import Flag from "react-world-flags";
import styles from "./page.module.css";

const topLanguages = [
  {
    code: "DE",
    name: "Deutschland",
  },
  {
    code: "US",
    name: "United States",
  },
  {
    code: "GB",
    name: "United Kingdom",
  },
  {
    code: "AU",
    name: "Australia",
  },
  {
    code: "FR",
    name: "France",
  },
  {
    code: "ES",
    name: "España",
  },
  {
    code: "IT",
    name: "Italia",
  },
];

export default function Page() {
  return (
    <section className={styles.languagesSection}>
      <div className={styles.languagesContainer}>
        <div className={styles.languagesContent}>
          <div className={styles.languagesHeader}></div>
          <ul className={styles.topLanguagesList}>
            {topLanguages.map((language) => (
              <li key={language.code} className={styles.languageItem}>
                <Flag code={language.code} className={styles.languageFlag} />
                <span className={styles.languageName}>{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
