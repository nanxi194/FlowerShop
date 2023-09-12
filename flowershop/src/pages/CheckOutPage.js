import { React } from "react";
import { useSelector } from "react-redux";
import classes from "./CheckOutPage.module.css";
import SubmitForm from "../components/SubmitForm";
import { Link } from "react-router-dom";
import PlaceComponent from "../components/PlaceComponent";

function CheckOutPage() {
  const cartSubtotal = useSelector((state) => state.cart.subtotal);
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartSubtotal + 10;

  return (
    <>
      <div className={classes.cards}>
        <div className={classes.section_one}>
          <div className={classes.goback}>
            <Link to={"/view-cart"} style={{ textDecoration: "none" }}>
              <h1>Cart </h1>
            </Link>
            <p>• •</p>

            <h2>Information</h2>
          </div>

          <SubmitForm />
        </div>

        <div className={classes.section_two}>
          {cartItems.length !== 0
            ? cartItems.map((item) => (
                <div className={classes.productcontainer} key={item.id}>
                  <img
                    alt="productimg"
                    src={item.src}
                    className={classes.imge}
                  ></img>
                  <p>{item.name}</p>
                  <p>${item.totalPrice.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))
            : ""}
          <div className={classes.filter__dropdown__actions}></div>
          <div className={classes.itemcontainer}>
            <h1>Subtotal </h1>
            <h2>${cartSubtotal.toFixed(2)} SGD</h2>
          </div>
          <div className={classes.itemcontainer}>
            <h1>Shipping </h1>
            <h2>$10.00 SGD</h2>
          </div>
          <div className={classes.filter__dropdown__actions}></div>
          <div className={classes.itemcontainer}>
            <h4>Total </h4>
            <h3>${total.toFixed(2)} SGD</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
