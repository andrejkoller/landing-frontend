import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.chartsSection}>
      <div className={styles.chartsContainer}>
        <div className={styles.chartsContent}>
          <div className={styles.chartsIntro}></div>
          <div className={styles.chartsShowcase}></div>
          <div className={styles.chartsOutro}></div>
        </div>
      </div>
    </section>
  );
}
