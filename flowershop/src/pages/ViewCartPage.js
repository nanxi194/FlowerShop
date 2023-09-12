import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ViewCartPage.module.css";
import CartItems from "../components/CartItems";
import { navigationActions } from "../store/navigation-slice";
import { Link } from "react-router-dom";

function ViewCartPage() {
  const dispatch = useDispatch();
  const cartSubtotal = useSelector((state) => state.cart.subtotal);
  const cartItems = useSelector((state) => state.cart.items);

  const handleButton = () => {
    dispatch(navigationActions.toggle_navigation(false));
  };

  return (
    <div className={classes.cart_items}>
      <h1 className={classes.title}>Cart</h1>
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

      <div className={classes.itemcontainer}>
        <h1>Subtotal </h1>
        <h2>${cartSubtotal.toFixed(2)} SGD</h2>
      </div>

      <Link key={"flowers"} to={"/flowers"} style={{ textDecoration: "none" }}>
        <button className={classes.subtotal_btn}>CONTINUE SHOPPING</button>
      </Link>

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
  );
}

export default ViewCartPage;
