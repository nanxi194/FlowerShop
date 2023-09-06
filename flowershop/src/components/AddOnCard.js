import { React, useState } from "react";
import classes from "./AddOnCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { cart_actionActions } from "../store/cart_action-slice";

function AddOnCard(props) {
  const { data, title, price, src, src_hvoer } = props;
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: data.id,
        title: title,
        price: price,
      })
    );
    setTimeout(() => {
      dispatch(cart_actionActions.toggle_cart());
    }, 500);
    clearTimeout();
  };

  return (
    <>
      <div className={classes.imge}>
        <div
          onMouseOver={() => setOpen(false)}
          onMouseOut={() => setOpen(true)}
          className={classes.container}
        >
          <Link
            to={`/add-on/${data.id}`}
            state={data}
            style={{ textDecoration: "none" }}
          >
            <img
              alt="productimg"
              src={open ? src : src_hvoer}
              className={classes.imge}
            />
          </Link>
          <p onClick={addItemHandler} className={open ? "" : classes.centered}>
            {open ? "" : "Quick Add"}
          </p>
        </div>
        <Link
          to={`/add-on/${data.id}`}
          state={data}
          style={{ textDecoration: "none" }}
        >
          <h1 className={classes.text}>{title}</h1>
          <h2 className={classes.text}>${price.toFixed(2)}</h2>
        </Link>
      </div>
    </>
  );
}

export default AddOnCard;
