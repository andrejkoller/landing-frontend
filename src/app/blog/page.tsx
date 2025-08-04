import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogContent}></div>
      </div>
    </section>
  );
}
