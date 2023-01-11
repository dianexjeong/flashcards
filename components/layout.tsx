import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const greet = "Hello";
const germanGreet = "Hallo";
export const siteTitle = "Next-Flashcards";

export default function Layout({
  children,
  home,
  deutsch,
  air,
}: {
  children: React.ReactNode;
  home?: boolean;
  deutsch?: boolean;
  air?: any;
}) {
  var airClass: string = "";
  if (air === "좋음") {
    airClass = `${utilStyles.goodSign}`;
  } else if (air === "보통") {
    airClass = `${utilStyles.normalSign}`;
  } else if (air === "나쁨") {
    airClass = `${utilStyles.badSign}`;
  } else if (air === "매우나쁨") {
    airClass = `${utilStyles.veryBadSign}`;
  } else {
    airClass = `${utilStyles.goodSign}`;
  }

  // const airClass: string = `${
  //   air === "좋음"
  //     ? utilStyles.goodSign
  //     : air === "보통"
  //     ? utilStyles.normalSign
  //     : air === "나쁨"
  //     ? utilStyles.badSign
  //     : utilStyles.veryBadSign
  // }`;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A simple flashcard that can help enhance your vocab using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Vibur"
        ></link>
        {home ? (
          <>
            <div className={airClass}>{greet}</div>
          </>
        ) : deutsch ? (
          <>
            <div className={airClass}>
              <Link href="/" className={utilStyles.colorInherit}>
                {germanGreet}
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={airClass}>
              <Link href="/" className={utilStyles.colorInherit}>
                {greet}
              </Link>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home &&
        (deutsch ? (
          <div className={styles.backToHome}>
            <Link href="/">← Zurück zu Startseite</Link>
          </div>
        ) : (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        ))}
    </div>
  );
}
