import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";
import Flashcard from "../components/Flashcard";
import axios from "axios";
import fsPromises from "fs/promises";
import path from "path";
import getRandomInt from "../components/random";

const API_KEY = process.env.AIR_API_KEY;

type abc = {
  englishWords: word[];
};

type word = {
  id: number;
  word: string;
  def: string;
};

const English = ({
  airQ,
  wordData,
}: {
  airQ: string;
  airQuality: string;
  wordData: abc;
}) => {
  const router = useRouter();
  const data = router.query;
  const airQuality = data.air;
  const words = wordData.englishWords;
  const [engWord, defWord] = fetchWord(words);
  return (
    <Layout air={airQuality}>
      <h1 className={utilStyles.heading2Xl}>Let's study English!</h1>
      <Flashcard eng={engWord} kor={defWord} />
    </Layout>
  );
};

export default English;

const fetchWord = (words: any) => {
  const [num, setNum] = useState<number>(0);
  const randNum = getRandomInt();
  useEffect(() => setNum(randNum), []);
  const thisWord: string = words[num].word;
  const thisDef: string = words[num].def;
  return [thisWord, thisDef] as const;
};

// const getWord = ({ num, words }: { num: number; words: abc }) => {
//   const engWord = words[num];
// };

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "pages/api/vocab.json");
  const jsonData = await fsPromises.readFile(filePath);
  const wordData = JSON.parse(jsonData.toString());

  return {
    props: { wordData },
  };
}
