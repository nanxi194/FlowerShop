import React from "react";
import classes from "./AddOnPage.module.css";
import AddOnCard from "../components/AddOnCard";
import Footer from "../components/Footer";
import { useLoaderData, json } from "react-router-dom";

function AddOnPage() {
  const loader = useLoaderData();
  const DUMMY_ADDONS = loader.add_ons;

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

export async function loader() {
  const response = await fetch("http://localhost:8000/add_ons");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
