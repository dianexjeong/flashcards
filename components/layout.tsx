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
}: {
  children: React.ReactNode;
  home?: boolean;
  deutsch?: boolean;
}) {
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
            <div className={utilStyles.sign}>{greet}</div>
          </>
        ) : deutsch ? (
          <>
            <div className={utilStyles.sign}>
              <Link href="/" className={utilStyles.colorInherit}>
                {germanGreet}
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={utilStyles.sign}>
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
