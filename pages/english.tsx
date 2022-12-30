import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import englishKorean from "../words/englishKorean";
import englishWords from "../words/englishWords";
import getRandomInt from "../components/random";
import Card from "../components/flipcard";

export default function English() {
  var num = getRandomInt();
  return (
    <Layout>
      <h1 className={utilStyles.heading2Xl}>Let's study English!</h1>
      <div>{Card(englishWords[num], englishKorean[num])}</div>
    </Layout>
  );
}
