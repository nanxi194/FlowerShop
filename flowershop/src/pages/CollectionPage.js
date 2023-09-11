import React from "react";
import Footer from "../components/Footer";
import classes from "./CollectionPage.module.css";
import { Link } from "react-router-dom";

import pd1 from "../assets/detail.jpg";

function CollectionPage(props) {
  const collectionTitle = ["love", "care", "birthday", "wedding"];
  const collectionImage = [pd1, pd1, pd1, pd1];
  return (
    <>
      <div className={classes.cards}>
        {collectionTitle.map((title, index) => (
          <div key={title} className={classes.imge}>
            <Link
              to={`/collection/${title}`}
              state={props.data.filter((item) => item.collection === title)}
              style={{ textDecoration: "none" }}
            >
              <img
                alt="productimg"
                src={collectionImage[index]}
                className={classes.imge}
              />
              <p className={classes.text}>{title}</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default CollectionPage;
