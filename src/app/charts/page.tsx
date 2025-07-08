import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.musicSection}>
      <div className={styles.musicContainer}>
        <div className={styles.musicContent}></div>
      </div>
    </section>
  );
}
