import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.presenterSection}>
      <div className={styles.presenterContainer}>
        <div className={styles.presenterContent}></div>
      </div>
    </section>
  );
}
