import styles from "./layout.module.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Flashcard = ({
  ger,
  eng,
  kor,
}: {
  ger?: string;
  eng?: string;
  kor: string;
}) => {
  const [flip, setFlip] = useState(true);

  const handleClick = () => {
    setFlip((current: boolean) => !current);
  };

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div className={styles.card}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner} onClick={() => handleClick()}>
            <div className={styles.flipCardFront}>
              {eng}
              {ger}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner} onClick={() => handleClick()}>
            <div className={styles.flipCardBack}>{kor}</div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};
export default Flashcard;
