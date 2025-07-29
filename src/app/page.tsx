import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.startSection}>
        <div className={styles.startContainer}>
          <div className={styles.startContent}>
            <div className={styles.startIntro}></div>
            <div className={styles.startShowcase}>
              <div className={styles.presenter}></div>
              <div className={styles.planning}></div>
              <div className={styles.charts}></div>
              <div className={styles.community}></div>
            </div>
            <div className={styles.startOutro}></div>
          </div>
        </div>
      </section>
    </>
  );
}
