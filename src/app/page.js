import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Sample Projects</h1>
      <ul className={styles.links}>
        <Link href="/load-more">Load More</Link>
        <Link href="/tree-view">Tree View</Link>
      </ul>
    </main>
  );
}
