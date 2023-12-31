import { useState } from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import SideCart from "../components/SideCart";
import { cart_actionActions } from "../store/cart_action-slice";

function Navigation() {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const openCartHandler = () => {
    dispatch(cart_actionActions.toggle_cart());
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <NavLink
          to="/"
          end // only active when path ends at /
        >
          <h1 className={classes.logo}>FlowerShop</h1>
        </NavLink>

        <ul className={`${classes.navMenu} ${isActive ? classes.active : ""}`}>
          <li onClick={removeActive}>
            <NavLink
              to="/same-day-delivery"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              SAME DAY DELIVERY
            </NavLink>
          </li>

          <li onClick={removeActive}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/flowers"
            >
              FLOWERS
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              COLLECTION
            </NavLink>
          </li>

          <li onClick={removeActive}>
            <NavLink
              to="/add-on"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              ADD-ONS
            </NavLink>
          </li>
        </ul>

        <ul className={classes.listCart}>
          <li>
            <div
              className={`${classes.hamburger} ${
                isActive ? classes.active : ""
              }`}
              onClick={toggleActiveClass}
            >
              <span className={classes.bar}></span>
              <span className={classes.bar}></span>
              <span className={classes.bar}></span>
            </div>
          </li>
          <li>
            <Cart size={24} onClick={openCartHandler} />
            <SideCart></SideCart>
          </li>
          <li>
            <p>{cartQuantity}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
