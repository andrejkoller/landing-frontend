import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.planningSection}>
      <div className={styles.planningContainer}>
        <div className={styles.planningContent}>
          <div className={styles.planningIntro}></div>
          <div className={styles.planningShowcase}></div>
          <div className={styles.planningOutro}></div>
        </div>
      </div>
    </section>
  );
}
