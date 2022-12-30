import englishWords from "../words/englishWords";
var num: number = 0;
const length: number = englishWords.length;
export default function getRandomInt() {
  num = Math.floor(Math.random() * length);
  return num;
}
