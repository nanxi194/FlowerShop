import React from "react";
import classes from "./Discover.module.css";
import dicoverimg from "../assets/dicoverimg.jpg";
import { Link } from "react-router-dom";

function Discover(props) {
  const collectionTitle = ["love", "care", "birthday", "wedding"];

  return (
    <>
      <h1 className={classes.title}>DISCOVER</h1>
      <div className={classes.cards}>
        {collectionTitle.map((title, index) => (
          <div className={classes.wrapper} key={title}>
            <Link
              key={title}
              to={`/collection/${title}`}
              state={props.data.filter((item) => item.collection === title)}
              style={{ textDecoration: "none" }}
            >
              <img
                alt="dicoverimg"
                src={dicoverimg}
                className={classes.imgBox}
              />
              <p>{title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Discover;
