import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.languagesSection}>
      <div className={styles.languagesContainer}>
        <div className={styles.languagesContent}>
          <h1 className={styles.languagesTitle}>Select Your Language</h1>
        </div>
      </div>
    </section>
  );
}
