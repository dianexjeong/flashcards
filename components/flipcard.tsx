import styles from "./layout.module.css";

export default function Card(word: string, def: string) {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>{word}</div>
          <div className={styles.flipCardBack}>{def}</div>
        </div>
      </div>
    </>
  );
}
