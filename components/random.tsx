import englishWords from "../words/englishWords";
const length: number = englishWords.length;

const getRandomInt = () => {
  var num = Math.floor(Math.random() * 2 + 1);
  return num;
};
export default getRandomInt;
