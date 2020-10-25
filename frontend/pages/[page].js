import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useQuery } from "@apollo/react-hooks";
import PAGE_QUERY from "../graphql/page.query";

const Page = (query) => {
  const { page } = query;
  const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: { page },
  });

  if (data) {
    const { landingPageOptions } = data.page;
    return (
      <Layout home>
        <section className={utilStyles.headingMd}>
          <img src={landingPageOptions.header.logo.sourceUrl} />
        </section>
      </Layout>
    );
  }
  return (<></>) 
};

Page.getInitialProps = async ({ query }) => {
  return query;
};

export default Page;
