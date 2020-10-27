import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/layout.module.scss";

const Footer = ({ footer }) => {
  return (
    <Row className={`footer py-0 py-lg-2 ${style.footer} m-0`}>
      <Container className={`${style.footerContainer} p-0`}>
        <Row className="m-0 px-md-2">
          <Col xs={12} lg={6} className="order-2 order-lg-1 d-flex justify-content-center justify-content-lg-start pb-3 py-sm-4 py-lg-0">
            <span>{footer.copyright}</span>
          </Col>
          <Col xs={12} lg={6} className={`order-1 order-lg-2 d-flex justify-content-center py-3 py-sm-4 py-lg-0 justify-content-lg-end ${style.footerBoorder}`}>
            {footer.chooseLogos &&
              Object.values(footer.certificatelogos).map((logo, i) => (
                <img
                  src={logo.sourceUrl}
                  alt={logo.altText}
                  key={`cert-${i}`}
                  className={style.footerLogos}
                />
              ))}
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Footer;
