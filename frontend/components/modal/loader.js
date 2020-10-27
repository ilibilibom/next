import React from "react";
import style from "../../styles/layout.module.scss";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className={style.loader}>
      <Spinner animation="border" variant="primary" className={style.spinner} />
    </div>
  );
};

export default Loader;
