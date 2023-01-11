import styles from "./layout.module.css";
import { useState } from "react";

const Flashcard = ({
  ger,
  eng,
  kor,
}: {
  ger?: string;
  eng?: string;
  kor: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleClick = () => {
    setIsFlipped((current: boolean) => !current);
    console.log(isFlipped);
  };

  return (
    <div className={styles.card}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner} onClick={() => handleClick()}>
          <div>
            {isFlipped === true ? (
              <div className={styles.flipCardFront}>
                {eng}
                {ger}
              </div>
            ) : (
              <div className={styles.flipCardBack}>{kor}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Flashcard;
