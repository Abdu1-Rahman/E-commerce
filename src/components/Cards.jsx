import React, { useState } from "react";
import { Card as ReactCard, CardImg, CardBody, CardTitle, Button, CardText, CardHeader } from "react-bootstrap";
import './Cards.css';
import { FcLike } from 'react-icons/fc';
import {PiHeartLight} from 'react-icons/pi'

const Card = ({ header, src, title, buttonLabel, text, cartItems, setCartItems }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

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

  // Apply a different class based on the liked state
  const likeBtnClass = isLiked ? <FcLike/> : <PiHeartLight/>;

  return (
    <ReactCard className="card">
      <div>
        <CardImg orientation="top" src={src} className="card-img" />
        <CardHeader className="off">{header}</CardHeader>
          <button className='like-btn' onClick={handleLikeClick}>{likeBtnClass}</button>
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


