import styles from "./layout.module.css";
import { useState, useEffect } from "react";
import englishKorean from "../words/englishKorean";
import englishWords from "../words/englishWords";
import getRandomInt from "./random";



const Flashcard = () =>{
  // const [num, setNum] = useState(getRandomInt());
  // useEffect(() => {
  //   const r = getRandomInt();
  //   setNum(r)},[]);
  const num=getRandomInt();

  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>{englishWords[num]}</div>
          <div className={styles.flipCardBack}>{englishKorean[num]}</div>
        </div>
      </div>
    </>
  );
}
export default Flashcard;