import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSpotify, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="bg-secondary" style={{ backgroundColor: "#56CCF2", height: "150px" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1 className="display-2 text-white mr-4">The Generics</h1>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white mx-2" />
          <FontAwesomeIcon icon={faSpotify} size="2x" className="text-white mx-2" />
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white mx-2" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;