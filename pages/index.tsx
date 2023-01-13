import Head from "next/head";
import { useState } from "react";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import axios from "axios";

const API_KEY = process.env.AIR_API_KEY;

export default function Home({ airQuality }: { airQuality: string }) {
  const [data, setData] = useState({ air: airQuality });

  return (
    <Layout home air={airQuality}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.pageLink}>
        {" "}
        <section className={utilStyles.headingLg}>
          <Link href={{ pathname: "/deutsch", query: data }}>
            Deutsch lernen
          </Link>
        </section>
        <section className={utilStyles.headingLg}>
          <Link href={{ pathname: "/english", query: data }}>
            Learn English
          </Link>
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/5/동남권/서초구`
  );
  const airQuality = res.data.RealtimeCityAir.row[0].IDEX_NM;

  return {
    props: { airQuality },
  };
}
