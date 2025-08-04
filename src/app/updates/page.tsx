import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.updatesSection}>
      <div className={styles.updatesContainer}>
        <div className={styles.updatesContent}></div>
      </div>
    </section>
  );
}
