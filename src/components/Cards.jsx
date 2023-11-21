import React, { useState, useContext } from "react";
import { Card as ReactCard, CardImg, CardBody, CardTitle, Button, CardText, CardHeader } from "react-bootstrap";
import './Cards.css';
import { FcLike } from 'react-icons/fc';
import { PiHeartLight } from 'react-icons/pi';
import all_products from "../Assets/All_prooducts";
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from "./CounterSlice";

const Card = (props) => {
  const { id, header, src, title, text,data } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [newdata,setnewdata]=useState()
const dispatch = useDispatch()
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };


  const likeBtnClass = isLiked ? <FcLike /> : <PiHeartLight />;

  return (
    <ReactCard className="card">
      <div>
        <CardImg orientation="top" src={src} className="card-img" />
        <CardHeader className="off">{header}</CardHeader>
        <button className='like-btn' onClick={handleLikeClick}>{likeBtnClass}</button>
      </div>
      <CardBody>
        <Button className="add-button" onClick={() => dispatch(addtocart(data))}>{props.buttonLabel}</Button>
        <CardTitle>{title}</CardTitle>
        <CardText>${text}</CardText>
      </CardBody>
    </ReactCard>
  );
};

export default Card;
