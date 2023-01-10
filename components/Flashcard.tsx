import styles from "./layout.module.css";

const Flashcard = ({ eng, kor }: { eng: string; kor: string }) => {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>{eng}</div>
          <div className={styles.flipCardBack}>{kor}</div>
        </div>
      </div>
    </>
  );
};
export default Flashcard;
