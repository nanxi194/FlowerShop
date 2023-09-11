import React from "react";
import { useLoaderData, json } from "react-router-dom";
import classes from "./HomePage.module.css";
import homeimg from "../assets/homeimg.jpg";
import NewArrival from "../components/NewArrival";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

function HomePage() {
  const loader = useLoaderData();
  const data = loader.message;

  return (
    <>
      <img alt="Julia janeta" src={homeimg} className={classes.imgbox} />
      <NewArrival data={data}></NewArrival>
      <Discover data={data}></Discover>
      <Footer></Footer>
    </>
  );
}

export default HomePage;

export async function loader() {
  const response = await fetch("http://localhost:8000/message");

  if (!response.ok) {
    // pass object to response
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
