import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "../scss/HeroSection.scss";

function HeroSection({ title, body, buttonText }) {
  return (
    <>
      <div className="py-5">
        <Container className="px-lg-5">
          <div className="bg-light rounded-3 text-center p-5 p-lg-5">
            <div className="m-5 m-lg-5">
              <h1 className="fw-bold display-5">{title}</h1>
              <p className="fs-4">{body}</p>
              <Button className="btn-lg">{buttonText}</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeroSection;
