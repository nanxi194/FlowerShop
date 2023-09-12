import React from "react";
import { X } from "react-bootstrap-icons";
import classes from "./SideCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cart_actionActions } from "../store/cart_action-slice";
import { navigationActions } from "../store/navigation-slice";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

function SideCart(props) {
  const dispatch = useDispatch();
  const isOpenCart = useSelector((state) => state.cart_action.cartIsVisible);

  const openCartHandler = () => {
    dispatch(cart_actionActions.toggle_cart());
  };

  const handleButton = () => {
    dispatch(navigationActions.toggle_navigation(false));
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
            {cartItems.length !== 0
              ? cartItems.map((item) => (
                  <CartItems
                    key={item.id}
                    item={{
                      id: item.id,
                      title: item.name,
                      quantity: item.quantity,
                      total: item.totalPrice,
                      price: item.price,
                      src: item.src,
                    }}
                  />
                ))
              : ""}
          </div>
          <div className={classes.cart_actions}>
            <div className={classes.subtotal}>
              <p>SUBTOTAL:</p>
              <p>
                $<span>{cartSubtotal.toFixed(2)}</span>
              </p>
            </div>

            <Link
              key={"checkout"}
              to={"/information"}
              style={{ textDecoration: "none" }}
            >
              <button onClick={handleButton} className={classes.subtotal_btn}>
                CHECK OUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideCart;
