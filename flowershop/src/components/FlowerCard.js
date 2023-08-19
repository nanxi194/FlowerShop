import React from "react";
import classes from "./FlowerCard.module.css";

function FlowerCard(props) {
  const { title, price, src } = props;

  return (
    <>
      <div>
        <img alt="productimg" src={src} className={classes.imge} />
        <h1 className={classes.text}>{title}</h1>
        <h2 className={classes.text}>${price}</h2>
      </div>
    </>
  );
}

export default FlowerCard;
