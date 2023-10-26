import React from "react";
import { Card as ReactCard, CardImg, CardBody, CardTitle, Button, CardText , CardHeader } from "react-bootstrap";
import './Cards.css';

// Custom Card component that accepts props
const Card = ({ header, src, title, buttonLabel,text }) => {
  return (
    <>
    <ReactCard className="card">
      
      <div>
      
      <CardImg orientation="top" src={src} className="card-img" />
      <div className="aa">
     <CardHeader >{header}</CardHeader>
     </div>
     </div>
      <CardBody>
        <Button className="button" href="#">{buttonLabel}</Button>
        <CardTitle>{title}</CardTitle>
        <CardText>${text}</CardText>
      </CardBody>
    </ReactCard>
    </>
  );
};

export default Card