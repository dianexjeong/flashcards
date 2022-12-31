import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import getRandomInt from "../components/random";

export default function English() {
  return (
    <Layout deutsch>
      <h1 className={utilStyles.heading2Xl}>Lass uns Deutsch lernen!</h1>
    </Layout>
  );
}
