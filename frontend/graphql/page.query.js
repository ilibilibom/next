import { gql } from "@apollo/client";

const PAGE_QUERY = gql`
  query PageQuery($page: String!) {
    page(id: $page, idType: URI) {
      landingPageOptions {
        clientsBar {
          logos {
            logo1 {
              altText
              sourceUrl
            }
            logo2 {
              altText
              sourceUrl
            }
            logo3 {
              altText
              sourceUrl
            }
            logo4 {
              altText
              sourceUrl
            }
            logo5 {
              altText
              sourceUrl
            }
            logo6 {
              altText
              sourceUrl
            }
            logo7 {
              altText
              sourceUrl
            }
          }
          rating {
            stars
            text
          }
          chooseLogos
        }
        footer {
          copyright
          chooseLogos
          certificatelogos {
            image1 {
              altText
              sourceUrl
            }
            image2 {
              altText
              sourceUrl
            }
            image3 {
              altText
              sourceUrl
            }
          }
        }
        formoptions {
          button {
            text
          }
          formtitle
          input3 {
            label
            type
            value
          }
          selectoptions{
          select1option1 {
            value
            label
            correspondingfields {
              option1 {
                value
                label
              }
              option2 {
                value
                label
              }
              option3 {
                value
                label
              }
            }
          }
          select1option2 {
            value
            label
            correspondingfields {
              option1 {
                value
                label
              }
              option2 {
                value
                label
              }
              option3 {
                value
                label
              }
            }
          }
          select1option3 {
            value
            label
            correspondingfields {
              option1 {
                value
                label
              }
              option2 {
                value
                label
              }
              option3 {
                value
                label
              }
            }
            }
          }
          selectPlaceholders {
            select1placeholder
            select2placeholder
          }
        }
        header {
          logo {
            altText
            sourceUrl
          }
        }
        hero {
          herobanner {
            altText
            sourceUrl
          }
          herobannermobile {
            altText
            sourceUrl
          }
        }
        products {
          product1feature1 {
            title
            paragraph
            icon {
              altText
              sourceUrl
            }
          }
          product2feature2 {
            title
            paragraph
            icon {
              altText
              sourceUrl
            }
          }
          product3feature3 {
            title
            paragraph
            icon {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default PAGE_QUERY;
