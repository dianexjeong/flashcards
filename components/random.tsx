import englishWords from "../words/englishWords";
const length: number = englishWords.length;

export default function getRandomInt() {
  var num = Math.floor(Math.random() * length);
  return num;
}
