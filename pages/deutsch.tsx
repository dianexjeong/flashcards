import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";
import Flashcard from "../components/Flashcard";
import axios from "axios";
import fsPromises from "fs/promises";
import path from "path";
import getRandomInt from "../components/Random";

const API_KEY = process.env.AIR_API_KEY;

type abc = {
  englishWords: word[];
  germanWords: word[];
};

type word = {
  id: number;
  word: string;
  def: string;
};

const Deutsch = ({
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
  const words = wordData.germanWords;
  const [gerWord, defWord] = fetchWord(words);
  return (
    <Layout deutsch air={airQuality}>
      <h1 className={utilStyles.heading2Xl}>Lass uns Deutsch lernen!</h1>
      <Flashcard ger={gerWord} kor={defWord} />
    </Layout>
  );
};

export default Deutsch;

const fetchWord = (words: any) => {
  const [num, setNum] = useState<number>(0);
  const randNum = getRandomInt();
  useEffect(() => setNum(randNum), []);
  const thisWord: string = words[num].word;
  const thisDef: string = words[num].def;
  return [thisWord, thisDef] as const;
};

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "pages/api/vocab.json");
  const jsonData = await fsPromises.readFile(filePath);
  const wordData = JSON.parse(jsonData.toString());

  return {
    props: { wordData },
  };
}
