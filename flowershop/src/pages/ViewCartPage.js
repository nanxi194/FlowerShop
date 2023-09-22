import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ViewCartPage.module.css";
import CartItems from "../components/CartItems";
import { navigationActions } from "../store/navigation-slice";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import { cartActions } from "../store/cart-slice";

function ViewCartPage() {
  const dispatch = useDispatch();
  dispatch(navigationActions.toggle_navigation(true));
  const cartSubtotal = useSelector((state) => state.cart.subtotal);
  const cartItems = useSelector((state) => state.cart.items);

  const [messageOpen, setMessageOpen] = useState(false);
  const [messageId, setMessageID] = useState("");
  const [originalMessage, setOriginalMessage] = useState("");

  const handleButton = () => {
    dispatch(navigationActions.toggle_navigation(false));
  };

  const handleMessageChange = (event) => {
    setOriginalMessage(event.target.value);
  };

  const saveMessageButton = () => {
    dispatch(
      cartActions.addMessageToCart({
        id: messageId,
        message: originalMessage,
      })
    );
    setMessageOpen(false);
  };

  return (
    <div className={classes.cart_items}>
      <Popup trigger={messageOpen} setTrigger={setMessageOpen}>
        <div className={classes.popup}>
          <h1>Enter your message here</h1>
          <textarea
            onChange={handleMessageChange}
            value={originalMessage}
            type="text"
            name="message"
            maxLength="100"
            placeholder="maximum 100 characters"
            rows={10}
            style={{ width: "450px", marginTop: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={() => setMessageOpen(false)}>CANCEL</button>
          <button onClick={saveMessageButton}>SAVE</button>
        </div>
      </Popup>

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
                message: item.message,
              }}
              setMessageOpen={setMessageOpen}
              setMessageID={setMessageID}
              setOriginalMessage={setOriginalMessage}
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
