import React from "react";
import { Cart, X } from "react-bootstrap-icons";
import classes from "./SideCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cart_actionActions } from "../store/cart_action-slice";
import { cartActions } from "../store/cart-slice";
import CartItems from "./CartItems";

function SideCart(props) {
  const dispatch = useDispatch();
  const isOpenCart = useSelector((state) => state.cart_action.cartIsVisible);

  const openCartHandler = () => {
    dispatch(cart_actionActions.toggle_cart());
  };

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartSubtotal = useSelector((state) => state.cart.subtotal);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div className={`${isOpenCart ? classes.show : classes.backdrop}`}></div>
      <div className={`${isOpenCart ? classes.open : classes.sidecart}`}>
        <div className={classes.cartcontent}>
          <div className={classes.header}>
            <div className={classes.header_title}>
              <h2>Cart ({cartQuantity})</h2>
            </div>
            <X className={classes.close_btn} onClick={openCartHandler} />
          </div>
          <div className={classes.cart_items}>
            {cartItems.map((item) => (
              <CartItems
                key={item.id}
                item={{
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </div>
          <div className={classes.cart_actions}>
            <div className={classes.subtotal}>
              <p>SUBTOTAL:</p>
              <p>
                $<span>{cartSubtotal.toFixed(2)}</span>
              </p>
            </div>
            <button className={classes.subtotal_btn}>CHECK OUT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideCart;
