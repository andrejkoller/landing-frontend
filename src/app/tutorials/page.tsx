import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.tutorialsSection}>
      <div className={styles.tutorialsContainer}>
        <div className={styles.tutorialsContent}></div>
      </div>
    </section>
  );
}
