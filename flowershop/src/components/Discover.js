import React from "react";
import classes from "./Discover.module.css";
import dicoverimg from "../assets/dicoverimg.jpg";

const DISCOVERS = [
  { id: "p1", title: "Wedding" },
  { id: "p2", title: "Wedding" },
  { id: "p3", title: "Wedding" },
  { id: "p4", title: "Wedding" },
];

function Discover() {
  return (
    <>
      <h1 className={classes.title}>DISCOVER</h1>
      <div className={classes.flexcontainer}>
        {DISCOVERS.map((prod) => (
          <div className={classes.wrapper} key={prod.id}>
            <img alt="dicoverimg" src={dicoverimg} className={classes.imgBox} />
            <p>{prod.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Discover;
