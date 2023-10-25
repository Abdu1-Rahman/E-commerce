import React from "react";
import { Card as ReactCard, CardImg, CardBody, CardTitle, Button, CardText  } from "react-bootstrap";
import './Cards.css';

// Custom Card component that accepts props
const Card = ({ src, title, buttonLabel,text }) => {
  return (
    <ReactCard className="card">
      <CardImg orientation="top" src={src} className="card-img" />
      <CardBody>
        <Button className="button" href="#">{buttonLabel}</Button>
        <CardTitle>{title}</CardTitle>
        <CardText>${text}</CardText>
      </CardBody>
    </ReactCard>
  );
};

export default Card