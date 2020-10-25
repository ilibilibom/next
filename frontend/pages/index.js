import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useQuery } from '@apollo/react-hooks';
import PAGE_QUERY from '../graphql/page.query';

const Home = () => {
  const page = "/";
  const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: { page },
  });

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  if(data){
    const { landingPageOptions } = data.page;
    return (
      <Layout home>
        <Head>
    <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <img src={landingPageOptions.header.logo.sourceUrl} />
        </section>
      </Layout>
    )
  }
  return (<></>) 
}

export default Home;