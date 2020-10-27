import React from "react";
import style from "../../styles/layout.module.scss";

const ClientsLogos = ({ logos }) => {
  return (
    <>  
      {Object.values(logos).map((logo, i) => (
        typeof logo === 'object' && <img
          src={logo.sourceUrl}
          alt={logo.altText}
          className={`${style.clientLogo} my-2 mx-2`}
          key={`client-${i}`}
        />
      ))}
    </>
  );
};

export default ClientsLogos;
