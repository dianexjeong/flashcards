import englishWords from "../words/englishWords";
const length: number = englishWords.length;

const getRandomInt = () => {
  var num: number = Math.floor(Math.random() * 3);
  return num;
};

export default getRandomInt;
