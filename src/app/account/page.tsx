import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.accountSection}>
      <div className={styles.accountContainer}>
        <div className={styles.accountContent}></div>
      </div>
    </section>
  );
}
