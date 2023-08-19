import React from "react";
import classes from "./NewArrival.module.css";
import homeimg2 from "../assets/homeimg2.jpg";

function NewArrival() {
  return (
    <>
      <div className={classes.flexcontainer}>
        <div className={classes.flexcontainer2}>
          <p>NEW ARRIVAL</p>
          <h1>COOL BLUE</h1>
          <p>Refined and full of sophistication</p>
          <h2>SHOP NOW</h2>
        </div>
        <img alt="Julia janeta" src={homeimg2} className={classes.imgBox} />
      </div>
    </>
  );
}

export default NewArrival;
