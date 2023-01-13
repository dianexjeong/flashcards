import flipStyles from "../styles/Flashcard.module.css";
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
      <div className={flipStyles.card}>
        <div className={flipStyles.flipCard}>
          <div
            className={flipStyles.flipCardInner}
            onClick={() => handleClick()}
          >
            <div className={flipStyles.flipCardFront}>
              {eng}
              {ger}
            </div>
          </div>
        </div>
      </div>
      <div className={flipStyles.card}>
        <div className={flipStyles.flipCard}>
          <div
            className={flipStyles.flipCardInner}
            onClick={() => handleClick()}
          >
            <div className={flipStyles.flipCardBack}>{kor}</div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};
export default Flashcard;
