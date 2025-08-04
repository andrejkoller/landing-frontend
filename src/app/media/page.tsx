import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.mediaSection}>
      <div className={styles.mediaContainer}>
        <div className={styles.mediaContent}></div>
      </div>
    </section>
  );
}
