
import React from "react";
import Card from "react-bootstrap/Card";
import "../scss/CardComponent.scss";

function CardComponent({ title, content, img }) {
  return (
    <div className="col-lg-6 col-xxl-4 mb-5">
      <Card className="bg-light border-0 h-100">
        <Card.Body className="text-center p-4 p-lg-4 pt-0 pt-lg-0">
          <div className="d-inline-block bg-primary feature bg-gradient text-white mb-4 rounded-3 p-3 card-back card-hover">
            {img}
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
