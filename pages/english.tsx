import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Flashcard from "../components/Flashcard";

export default function English() {
  
  return (
    <Layout>
      <h1 className={utilStyles.heading2Xl}>Let's study English!</h1>
      <Flashcard />
    </Layout>
  );
}
