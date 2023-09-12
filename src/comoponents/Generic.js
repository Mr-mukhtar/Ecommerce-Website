import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

const Generic = () => {
  return (
    <>
      <Container fluid className="bg-secondary" style={{ height: "200px" }}>
        <h1  className="text-center   display-2 mt-2 "
        style={{fontWeight: "700",color:"white", fontSize:"100px"}} >The Generics</h1>
      </Container>
    </>
  );
};

export default Generic;
