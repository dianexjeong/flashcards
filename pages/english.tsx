import Layout from "../components/layout";
import { useState, useEffect } from "react";
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
  airQuality,
  wordData,
}: {
  airQuality: string;
  wordData: abc;
}) => {
  console.log(wordData);
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
  const res = await axios.get(
    `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/5/동남권/서초구`
  );
  const airQuality = res.data.RealtimeCityAir.row[0].IDEX_NM;

  const filePath = path.join(process.cwd(), "pages/api/english.json");
  const jsonData = await fsPromises.readFile(filePath);
  const wordData = JSON.parse(jsonData.toString());

  return {
    props: { airQuality, wordData },
  };
}
