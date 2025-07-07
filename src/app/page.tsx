import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles["intro"]}></section>
      <section className={styles["presenter"]}></section>
      <section className={styles["planning"]}></section>
      <section className={styles["music"]}></section>
      <section className={styles["community"]}></section>
      <section className={styles["footer"]}></section>
    </>
  );
}
