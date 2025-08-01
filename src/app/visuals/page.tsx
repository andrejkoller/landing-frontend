import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.visualsSection}>
      <div className={styles.visualsContainer}>
        <div className={styles.visualsContent}>
          <div className={styles.visualsIntro}></div>
          <div className={styles.visualsShowcase}></div>
          <div className={styles.visualsOutro}></div>
        </div>
      </div>
    </section>
  );
}
