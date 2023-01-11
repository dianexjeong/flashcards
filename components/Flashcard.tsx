import styles from "./layout.module.css";

const Flashcard = ({
  ger,
  eng,
  kor,
}: {
  ger?: string;
  eng?: string;
  kor: string;
}) => {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            {eng}
            {ger}
          </div>
          <div className={styles.flipCardBack}>{kor}</div>
        </div>
      </div>
    </>
  );
};
export default Flashcard;
