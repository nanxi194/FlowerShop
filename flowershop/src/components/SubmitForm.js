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
        <div>
          <input
            placeholder="Email"
            id="email"
            type="text"
            onChange={handleEmailChange}
            value={email}
          />
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

            <div>
              <input placeholder="Last name" id="Last name" type="text" />
              <input placeholder="First name" id="First name" type="text" />
            </div>
            <div>
              <input placeholder="Address" id="Address" type="text" />
            </div>
            <div>
              <input
                placeholder="Apartment,suite,etc.(optional)"
                id="Apartment"
                type="text"
              />
            </div>
            <div>
              <input placeholder="Postal code" id="Postal code" type="text" />
            </div>
            <div>
              <input placeholder="Phone" id="Phone" type="text" />
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

          <button className={classes.submit} type="submit">
            Continue to Payment
          </button>
        </div>
      </form>
    </>
  );
}

export default SubmitForm;
