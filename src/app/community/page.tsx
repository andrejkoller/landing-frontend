import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.communitySection}>
      <div className={styles.communityContainer}>
        <div className={styles.communityContent}>
          <div className={styles.communityIntro}></div>
          <div className={styles.communityShowcase}></div>
          <div className={styles.communityOutro}></div>
        </div>
      </div>
    </section>
  );
}
