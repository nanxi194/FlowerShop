import React from "react";
import classes from "./NewArrival.module.css";
import { Link } from "react-router-dom";
import homeimg2 from "../assets/homeimg2.jpg";

function NewArrival(props) {
  const data = props.data[1];
  return (
    <>
      <div className={classes.flexcontainer}>
        <div className={classes.flexcontainer2}>
          <p>NEW ARRIVAL</p>
          <h1>COOL BLUE</h1>
          <p>Refined and full of sophistication</p>
          <Link
            to={`/flowers/${data.id}`}
            state={data}
            style={{ textDecoration: "none" }}
          >
            <h2>SHOP NOW</h2>
          </Link>
        </div>
        <img alt="Julia janeta" src={homeimg2} className={classes.imgBox} />
      </div>
    </>
  );
}

export default NewArrival;
