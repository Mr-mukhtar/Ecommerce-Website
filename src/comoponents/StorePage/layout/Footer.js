import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSpotify, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section>
    <Container fluid className="bg-secondary" style={{ backgroundColor: "#56CCF2", height: "150px",  }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1 className="display-2 text-white mr-4" style={{
             fontSize:"50px",fontWeight:"600"}}>The Generics</h1>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white mx-5" />
          <FontAwesomeIcon icon={faSpotify} size="2x" className="text-white mx-2" />
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white mx-3" />
        </div>
      </div>

    </Container>
    <section className="px-4 py-3 bg-yellow-950 sm:px-12" id="Footer">
    <div className="max-w-5xl mx-auto text-center backGroundcolor -black text-yellow-50">
      © BootStrap | 2023 | All Right Reserved
    </div>
  </section>
  </section>
  );
};

export default Footer;
