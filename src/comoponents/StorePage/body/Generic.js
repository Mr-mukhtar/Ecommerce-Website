import React from "react";
import { Container } from "react-bootstrap";

const Generic = () => {
  return (
    <>
      <Container fluid className="bg-secondary" style={{ height: "210px" }}>
        <h1
          className=" text-center m-5"
          style={{ fontWeight: "700", color: "white", fontSize: "90px" }}
        >
          The Generics
        </h1>
      </Container>
    </>
  );
};

export default Generic;
