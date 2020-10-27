import React from "react";
import { Row, Col } from "react-bootstrap";
import Rating from "./rating";
import ClientLogos from "./clientLogos";
import style from "../../styles/layout.module.scss";

const Clients = ({ logos, rating }) => {
  return (
    <>
      <Row className={`py-3 ${style.clients} m-0`}>
        <Col xs={12} xl={8} className="text-center d-md-flex justify-content-md-around align-items-md-center">
          <ClientLogos logos={logos} />
        </Col>
        <Col
          xs={4}
          className={`justify-content-center align-items-center ${style.desktopRating}`}
        >
          <Rating rating={rating} />
        </Col>
      </Row>
      <Row className="m-0">
      <Col
          xs={12}
          className={`flex-column flex-sm-row justify-content-end align-items-center px-5 py-4 ${style.mobileRating}`}
        >
          <Rating rating={rating} />
        </Col>
      </Row>
    </>
  );
};

export default Clients;
