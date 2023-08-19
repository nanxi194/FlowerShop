import React from "react";
import classes from "./HomePage.module.css";
import homeimg from "../assets/homeimg.jpg";
import NewArrival from "../components/NewArrival";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <img alt="Julia janeta" src={homeimg} className={classes.imgbox} />
      <NewArrival></NewArrival>
      <Discover></Discover>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
