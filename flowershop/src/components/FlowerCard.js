import { React, useState } from "react";
import classes from "./FlowerCard.module.css";
import { Link } from "react-router-dom";

function FlowerCard(props) {
  const { data, title, price, src, src_hvoer } = props;
  const [open, setOpen] = useState(true);

  return (
    <>
      <Link
        to={`/flowers/${data.id}`}
        state={data}
        style={{ textDecoration: "none" }}
      >
        <div
          onMouseOver={() => setOpen(false)}
          onMouseOut={() => setOpen(true)}
        >
          <img
            alt="productimg"
            src={open ? src : src_hvoer}
            className={classes.imge}
          />
        </div>
        <h1 className={classes.text}>{title}</h1>
        <h2 className={classes.text}>${price}</h2>
      </Link>
    </>
  );
}

export default FlowerCard;
