import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.videoPlayerSection}>
      <div className={styles.videoPlayerContainer}>
        <div className={styles.videoPlayerContent}>
          <div className={styles.videoPlayerIntro}></div>
          <div className={styles.videoPlayerShowcase}></div>
          <div className={styles.videoPlayerOutro}></div>
        </div>
      </div>
    </section>
  );
}
