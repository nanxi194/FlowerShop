import React from "react";
import classes from "./CartItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function CartItems(props) {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, src } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        src,
      })
    );
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <>
      <div className={classes.cart_item}>
        <div className={classes.item_img}>
          <img alt="cartimg" src={src}></img>
        </div>
        <div className={classes.item_details}>
          <p>{title}</p>
          <p>${total.toFixed(2)} SGD</p>
          <div className={classes.qty}>
            <span onClick={removeItemHandler}>-</span>
            <p>{quantity}</p>
            <span onClick={addItemHandler}>+</span>
          </div>
          <h1 onClick={deleteItemHandler}>Remove</h1>
        </div>
      </div>
    </>
  );
}

export default CartItems;
