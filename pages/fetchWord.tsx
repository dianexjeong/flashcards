// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";
import path from "path";

type abc = {
  englishWords: word[];
};

type word = {
  id: number;
  word: string;
  def: string;
};

const fetchWord = ({ wordData }: { wordData: abc }) => {
  console.log(wordData);
  const words = wordData.englishWords;
  return {
    props: { words },
  };
};

export default fetchWord;

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "pages/api/english.json");
  const jsonData = await fsPromises.readFile(filePath);
  const wordData = JSON.parse(jsonData.toString());

  return {
    props: { wordData },
  };
}
