import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}></div>
      </div>
    </section>
  );
}
