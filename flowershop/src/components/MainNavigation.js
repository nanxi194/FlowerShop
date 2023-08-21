import { NavLink } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <NavLink
          to="/"
          end // only active when path ends at /
        >
          <h1 className={classes.h1}>FlowerShop</h1>
        </NavLink>
        <div>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/flowers"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                SAME DAY DELIVERY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flowers"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                FLOWERS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                COLLECTION
              </NavLink>
            </li>
            <li>
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
        </div>

        <div>
          <ul className={classes.listCart}>
            <li>
              <Cart size={22} />
            </li>
            <li>
              <p>0</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
