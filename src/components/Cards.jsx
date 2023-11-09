import React from "react";
import { Card as ReactCard, CardImg, CardBody, CardTitle, Button, CardText, CardHeader } from "react-bootstrap";
import './Cards.css';

const Card = ({ header, src, title, buttonLabel, text, cartItems, setCartItems }) => {
  const handleAddToCartClick = () => {
    const cardData = {
      id,
      header,
      src,
      title,
      text
    };

    // Update the cartItems state in the parent component with the new card data
    setCartItems([...cartItems, cardData]);
  };

  return (
    <ReactCard className="card">
      <div>
        <CardImg orientation="top" src={src} className="card-img" />
        
          <CardHeader className="aa">{header}</CardHeader>
        
      </div>
      <CardBody>
        <Button className="add-button" onClick={handleAddToCartClick}>{buttonLabel}</Button>
        <CardTitle>{title}</CardTitle>
        <CardText>${text}</CardText>
      </CardBody>
    </ReactCard>
  );
};

export default Card;

