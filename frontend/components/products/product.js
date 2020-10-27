import React from "react";
import { Col } from "react-bootstrap";
import style from "../../styles/layout.module.scss";

const Product = ({ products }) => {
  return Object.values(products).map(
    (product, i) =>
      typeof product === "object" && (
        <Col
          key={`product-${i}`}
          xs={12}
          lg="3"
          className="justify-content-start align-items-center flex-column d-flex text-center px-5"
        >
          <img src={product.icon.sourceUrl} alt={product.icon.altText} />
          <h3 className={`py-3 ${style.productTitle}`}>{product.title}</h3>
          <p className={style.productContent}>{product.paragraph}</p>
        </Col>
      )
  );
};

export default Product;
