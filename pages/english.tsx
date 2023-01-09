import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Flashcard from "../components/Flashcard";
import axios from "axios";

const API_KEY = process.env.AIR_API_KEY;

const English = ({ airQuality }: { airQuality: string }) => {
  return (
    <Layout air={airQuality}>
      <h1 className={utilStyles.heading2Xl}>Let's study English!</h1>
      <Flashcard />
    </Layout>
  );
};

export default English;

export async function getServerSideProps() {
  const res = await axios.get(
    `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/5/동남권/서초구`
  );
  const airQuality = res.data.RealtimeCityAir.row[0].IDEX_NM;

  return {
    props: { airQuality },
  };
}
