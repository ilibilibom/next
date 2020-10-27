import React from "react";
import { Row } from "react-bootstrap";
import Product from "./product";

const Products = ({ products }) => {
  return (
    <Row className="justify-content-lg-center py-5 mb-5 mx-0">
      <Product products={products} />;
    </Row>
  );
};

export default Products;
