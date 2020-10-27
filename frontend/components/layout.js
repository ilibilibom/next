import Head from "next/head";

export const siteTitle =
  "Small business insurance has never been easier | Next Insurance";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Small business insurance has never been easier"
        />
      </Head>
      <>{children}</>
    </>
  );
}
