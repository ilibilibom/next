import Head from "next/head";
import { Container } from "react-bootstrap";
import Layout, { siteTitle } from "../components/layout";
import { useQuery } from "@apollo/react-hooks";
import PAGE_QUERY from "../graphql/page.query";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/hero";
import Clients from "../components/clients/clients";
import Products from "../components/products/products";
import style from "../styles/layout.module.scss";

const Page = (query) => {
  const { page } = query;
  
  const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: { page },
  });

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  
  if (data && data.page) {
    const { logo } = data.page.landingPageOptions.header;
    const { herobannermobile, herobanner } = data.page.landingPageOptions.hero;
    const {
      logos: clientLogos,
      rating,
    } = data.page.landingPageOptions.clientsBar;
    const { formoptions, products, footer } = data.page.landingPageOptions;

    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container fluid="true" style={{ margin: 0 }}>
          <Header logo={logo} />
          <Hero
            formOptions={formoptions}
            mobileBanner={herobannermobile}
            desktopBanner={herobanner}
          />
          <Clients logos={clientLogos} rating={rating} />
          <Products products={products} />
          <Footer footer={footer} />
        </Container>
      </Layout>
    );
  } else 
  if(!loading){
    return <div className={style.notFound}>404 Not Found </div>;
  } else {
    return <></>
  }
};

Page.getInitialProps = async ({ query }) => {
  return query;
};

export default Page;
