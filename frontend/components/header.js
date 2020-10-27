import React from "react";
import { Row, Col } from "react-bootstrap";
import style from '../styles/layout.module.scss'; 

const Header = ({logo:{sourceUrl,altText}}) => {
  return (
    <Row className="m-0">
      <Col className={`text-center py-3 ${style.header}`}>
        <img 
            className={style.logo}
          src={sourceUrl}
          alt={altText}
        />
      </Col>
    </Row>
  );
};

export default Header;
