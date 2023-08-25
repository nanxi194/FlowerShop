import React from "react";
import classes from "./FlowersDetailPage.module.css";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { cart_actionActions } from "../store/cart_action-slice";

function FlowersDetailPage(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const _state = location.state;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: _state.id,
        title: _state.title,
        price: _state.price,
      })
    );
    setTimeout(() => {
      dispatch(cart_actionActions.toggle_cart());
    }, 500);
    clearTimeout();
  };

  return (
    <>
      <div className={classes.flexcontainer}>
        <img
          alt="productimg"
          src={_state.image_detail}
          className={classes.imge}
        />

        <div className={classes.flexcontainer2}>
          <h1 className={classes.title}>{_state.title}</h1>
          <p className={classes.price}>${_state.price.toFixed(2)} SGD</p>

          <h2 className={classes.subtitle}>DESIGN NOTES</h2>
          <p className={classes.text}>{_state.description}</p>

          <h3 className={classes.texttitle}>Approximate dimensions</h3>
          <p className={classes.text}>Length: {_state.dimensions[0]}cm</p>
          <p className={classes.text}>Height: {_state.dimensions[1]}cm</p>

          <h3 className={classes.texttitle}>Blooms</h3>
          <p className={classes.textend}>{_state.blooms}</p>
          <button className={classes.button} onClick={addItemHandler}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FlowersDetailPage;
