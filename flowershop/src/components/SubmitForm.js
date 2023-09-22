import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation-slice";
import classes from "./SubmitForm.module.css";
import { Shop, Truck } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Select from "react-select";

function SubmitForm() {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState("Ship");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const backToCart = () => {
    dispatch(navigationActions.toggle_navigation(true));
  };

  const onOptionChange = (e) => {
    setDelivery(e.target.value);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid!");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      borderColor: "#d9d9d9",
      fontSize: "14px",
      margin: "0.6rem 0",
    }),
    container: (base) => ({
      ...base,
      display: "inline-block",
      width: "100%",
    }),
    valueContainer: (base) => ({
      ...base,
      minHeight: "20px",
      height: "3rem",
    }),
  };

  return (
    <>
      <form>
        <h1 class={classes.title}>Contact</h1>
        <div className={classes.field}>
          <input
            type="text"
            id="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="if empty will not work"
          />
          <label>Email</label>
        </div>
        {error && <h2 className={classes.error}>{error}</h2>}
        <h1 className={classes.title}>Delivery method</h1>
        <div className={classes.method}>
          <input
            type="radio"
            name="topping"
            value="Ship"
            id="Ship"
            checked={delivery === "Ship"}
            onChange={onOptionChange}
          />
          <Truck size={19} />
          <label
            style={{
              color: delivery === "Ship" ? "#cf714a" : "",
            }}
          >
            Ship
          </label>
        </div>
        <div className={classes.method}>
          <input
            type="radio"
            name="topping"
            value="Pick up"
            id="Pick up"
            checked={delivery === "Pick up"}
            onChange={onOptionChange}
          />
          <Shop size={19} />
          <label
            style={{
              color: delivery === "Pick up" ? "#cf714a" : "",
            }}
          >
            Pick up
          </label>
        </div>

        {delivery === "Ship" && (
          <>
            <h1 className={classes.title}>Shipping address</h1>

            <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              placeholder="Country"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  text: "#cf714a",
                  font: "#cf714a",
                  primary25: "#cf714a",
                  primary: "#cf714a",
                  neutral80: "black",
                  color: "black",
                },
              })}
              styles={customStyles}
            />

            <div className={classes.field}>
              <input
                type="text"
                id="Last name"
                placeholder="if empty will not work"
              />
              <label>Last name</label>
            </div>
            <div className={classes.field}>
              <input
                type="text"
                id="First name"
                placeholder="if empty will not work"
              />
              <label>First name</label>
            </div>

            <div className={classes.field}>
              <input
                type="text"
                id="Address"
                placeholder="if empty will not work"
              />
              <label>Address</label>
            </div>

            <div className={classes.field}>
              <input
                type="text"
                id="Apartment"
                placeholder="Apartment,suite,etc.(optional)"
              />
              <label>Apartment,suite,etc.(optional)</label>
            </div>

            <div className={classes.field}>
              <input type="text" id="Postal code" placeholder="Postal code" />
              <label>Postal code</label>
            </div>

            <div className={classes.field}>
              <input placeholder="Phone" id="Phone" type="text" />
              <label>Phone</label>
            </div>
          </>
        )}

        {delivery === "Pick up" && (
          <>
            <h1 className={classes.title}>Pickup locations</h1>
            <div className={classes.box}>
              <div className={classes.line1}>
                <label>
                  <input
                    type="radio"
                    name="store"
                    value="Flower store"
                    id="Flower store"
                    checked={true}
                  />
                  Flower store
                </label>

                <p>Free</p>
              </div>
              <div className={classes.line2}>
                <p>Opening hours: Mon-Sun: 8am-5pm</p>
              </div>
            </div>
          </>
        )}

        <div className={classes.line3}>
          <Link
            key={"view-cart"}
            to={"/view-cart"}
            style={{ textDecoration: "none" }}
          >
            <button className={classes.back_to_cart} onClick={backToCart}>
              ← Return to cart
            </button>
          </Link>

          <Link
            key={"submitted"}
            to={"/submitted"}
            style={{ textDecoration: "none" }}
            className={classes.submit}
          >
            <button type="submit">Finish checkout</button>
          </Link>
          {/* <button className={classes.submit} type="submit">
            Finish checkout
          </button> */}
        </div>
      </form>
    </>
  );
}

export default SubmitForm;
