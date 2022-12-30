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
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.JPG"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={greet}
            />
            <h1 className={utilStyles.heading2Xl}>{greet}</h1>
          </>
        ) : deutsch ? (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.JPG"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={germanGreet}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {germanGreet}
              </Link>
            </h2>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.JPG"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={greet}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {greet}
              </Link>
            </h2>
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
