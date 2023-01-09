import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import getRandomInt from "../components/random";
import axios from "axios";

const API_KEY = process.env.AIR_API_KEY;

const Deutsch = ({ airQuality }: { airQuality: string }) => {
  return (
    <Layout deutsch air={airQuality}>
      <h1 className={utilStyles.heading2Xl}>Lass uns Deutsch lernen!</h1>
    </Layout>
  );
};

export default Deutsch;

export async function getServerSideProps() {
  const res = await axios.get(
    `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/5/동남권/서초구`
  );
  const airQuality = res.data.RealtimeCityAir.row[0].IDEX_NM;

  return {
    props: { airQuality },
  };
}
