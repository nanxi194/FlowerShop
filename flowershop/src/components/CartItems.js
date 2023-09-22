import { React } from "react";
import classes from "./CartItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Gift } from "react-bootstrap-icons";

function CartItems(props) {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, src, message } = props.item;

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
        message,
      })
    );
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  const messageHandler = () => {
    props.setMessageOpen(true);
    props.setMessageID(id);
    props.setOriginalMessage(message);
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
          <h1 onClick={messageHandler}>
            <Gift style={{ marginRight: "3" }} />
            Gift Message
          </h1>
          <h2 className={classes.message}>{message}</h2>
        </div>
      </div>
    </>
  );
}

export default CartItems;
