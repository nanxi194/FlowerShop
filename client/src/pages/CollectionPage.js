import React from "react";
import Footer from "../components/Footer";
import classes from "./CollectionPage.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation-slice";

function CollectionPage() {
  const loader = useLoaderData();
  const data = loader.message;
  const dispatch = useDispatch();
  dispatch(navigationActions.toggle_navigation(true));
  const pd1 =
    "https://bouqs.com/product_images/pink-roses-oriental-lilies-vase/Original/64f0daa591c06100856de742/detail.jpg?c=1693506213";
  const pd4 =
    "https://bouqs.com/product_images/pink-peach-garden-roses/Deluxe/64efad318da85f008afe68c9/detail.jpg?c=1693429041";
  const pd2 =
    "https://bouqs.com/product_images/sunflower-peach-carnations-roses/Deluxe/630ff1cd79a294009625475d/detail.jpg?c=1661989325";
  const pd3 =
    "https://bouqs.com/product_images/ivory-roses-blue-hydrangea/Deluxe/62e30dad034bb10098e4682f/detail.jpg?c=1659047341";

  const collectionTitle = ["love", "care", "birthday", "wedding"];
  const collectionImage = [pd1, pd2, pd3, pd4];
  return (
    <>
      <div className={classes.cards}>
        {collectionTitle.map((title, index) => (
          <div key={title} className={classes.imge}>
            <Link
              to={`/collection/${title}`}
              state={data.filter((item) => item.collection === title)}
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
