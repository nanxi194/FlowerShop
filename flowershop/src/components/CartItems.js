import React from "react";
import { X } from "react-bootstrap-icons";
import classes from "./CartItems.module.css";
import p1 from "../assets/dicoverimg.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function CartItems(props) {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <div className={classes.cart_item}>
      <div className={classes.remove_item}>
        <X onClick={deleteItemHandler} />
      </div>
      <div className={classes.item_img}>
        <img src={p1}></img>
      </div>
      <div className={classes.item_details}>
        <p>{title}</p>
        <p>${total.toFixed(2)} SGD</p>
        <div className={classes.qty}>
          <span onClick={removeItemHandler}>-</span>
          <p>{quantity}</p>
          <span onClick={addItemHandler}>+</span>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
