import React from "react";
import classes from "./AddOnPage.module.css";
import AddOnCard from "../components/AddOnCard";
import Footer from "../components/Footer";

import p1 from "../assets/dicoverimg.jpg";
import ph1 from "../assets/hover.jpg";
import pd1 from "../assets/detail.jpg";

const DUMMY_ADDONS = [
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "a1",
    price: 20.0,
    title: "I Love You Ballon",
    avaliability: "In stock",
    description:
      "A cheerful I Love You Balloon that will make your birthday order extra special!",
    same_day_delivery: "same day delivery",
  },
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "a2",
    price: 12.0,
    title: "Birthday Star Ballon",
    avaliability: "In stock",
    description:
      "Wish the shining star in your life a fabulous birthday, with the perfect gift.",
    same_day_delivery: "same day delivery",
  },
];

function AddOnPage() {
  return (
    <>
      <div className={classes.flexcontainer}></div>

      <div className={classes.cards}>
        {DUMMY_ADDONS.map((product, i) => (
          <AddOnCard
            key={i}
            title={product.title}
            price={product.price}
            src={product.image}
            src_hvoer={product.image_hover}
            data={product}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default AddOnPage;
