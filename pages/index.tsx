import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import axios from "axios";

const API_KEY = process.env.AIR_API_KEY;

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <Link href={`/deutsch`}>Deutsch Lernen</Link>
      </section>
      <section className={utilStyles.headingLg}>
        <Link href={`/english`}>Learn English</Link>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/5/동남권/서초구`
  );
  console.log(res.data.RealtimeCityAir.row[0].IDEX_NM);
  return {
    props: {},
  };
}
