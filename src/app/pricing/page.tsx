import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingContent}></div>
      </div>
    </section>
  );
}
