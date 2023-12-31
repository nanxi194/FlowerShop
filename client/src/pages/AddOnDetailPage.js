import React from "react";
import classes from "./AddOnDetailPage.module.css";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { cart_actionActions } from "../store/cart_action-slice";
import { CheckCircle, XCircle, Truck } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { navigationActions } from "../store/navigation-slice";

function AddOnDetailPage(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const _state = location.state;
  dispatch(navigationActions.toggle_navigation(true));

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: _state.id,
        title: _state.title,
        price: _state.price,
        src: _state.image,
      })
    );
    setTimeout(() => {
      dispatch(cart_actionActions.toggle_cart());
    }, 500);
    clearTimeout();
  };

  return (
    <>
      <div className={classes.goback}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>Home </h1>
        </Link>
        <p>• •</p>
        <Link to={"/add-on"} style={{ textDecoration: "none" }}>
          <h1>Add-ons</h1>
        </Link>
        <p>• •</p>
        <h1>{_state.title}</h1>
      </div>

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

          <div className={classes.delivery}>
            <Truck size={20} className={classes.truck} />
            <p className={classes.deliverytitle}>{_state.same_day_delivery}</p>

            {_state.avaliability === "In stock" ? (
              <CheckCircle size={18} className={classes.circle} />
            ) : (
              <XCircle size={18} className={classes.circle} />
            )}
            <p className={classes.deliverytitle}>{_state.avaliability}</p>
          </div>

          <button className={classes.button} onClick={addItemHandler}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddOnDetailPage;
