// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import englishData from "./englishData";

type EnglishData = {
  id: number;
  word: string;
  def: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EnglishData>
) {
  res.status(200).json({ id: 0, word: "hi", def: "안녕" });
}
