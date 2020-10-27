import React, { useEffect, useState } from "react";
import Form from "./form";

const Hero = ({ mobileBanner, desktopBanner, formOptions }) => {
  const [banner, setBanner] = useState();
  const mobileView = 575;
  
  const handleWindowResize = (event) => {
    if(event){
      const { innerWidth } = event.target;
    } else {
      const { innerWidth } = window; 
    }
    if (innerWidth < mobileView) {
      const { sourceUrl } = mobileBanner;
      setBanner(sourceUrl)
    } else {
      const { sourceUrl } = desktopBanner;
      setBanner(sourceUrl)
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    handleWindowResize()
  }, []);

  return (
    <div style={{ backgroundImage: `url("${banner}")` }} className="hero-image">
      <Form formOptions={formOptions} />
    </div>
  );
};

export default Hero;
