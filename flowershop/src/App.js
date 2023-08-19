import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import AddOnPage from "./pages/AddOnPage";
import FlowersPage from "./pages/FlowersPage";
import "./App.css";

// IMAGE
import p1 from "./assets/dicoverimg.jpg";

const DUMMY_PRODUCTS = [
  {
    image: p1,
    id: "p1",
    price: 45.0,
    title: "Cool Blue",
    color: ["Pink"],
    avaliability: "In Stock",
    types: ["Tuilps"],
    dimensions: [23, 22],
    arrangements: "Flower Bouquets",
    collection: "Love",
    subcollection: "Birthday Flowers",
    description:
      "This Get well soon basket will help to recover your loved ones in no time.",
    blooms: "Light Pink Tuilps (3 Stalks)",
  },
  {
    image: p1,
    id: "p2",
    price: 119.9,
    title: "Madeleine",
    color: ["Pink", "White"],
    avaliability: "In Stock",
    types: ["Rose", "Lily"],
    dimensions: [30, 25],
    arrangements: "Flower Bouquets",
    collection: "Love",
    subcollection: "Birthday Flowers",
    description:
      "For the woman that will always be your #1. Remind her of how extraordinary she is by surprising her with a bouquet that will make her heart flutter. This lush mix of fragrant pink lilies and lush white roses is destined to brighten someone's day!",
    blooms: "White Rose (17 Stalks), Pink Lily (5 Stalks)",
  },
  {
    image: p1,
    id: "p3",
    price: 159.9,
    title: "Amber Abundance",
    color: ["Orange", "Yellow"],
    avaliability: "In Stock",
    types: ["Lily", "Rose", "Alstroemeria"],
    dimensions: [70, 50],
    arrangements: "Flower Bouquets",
    collection: "Care",
    subcollection: "Get Well Soon Flowers",
    description:
      "A warm, golden symphony of precious petals, arranged together for the most marvelous of celebrations! ",
    blooms:
      "Orange Lily (3 stalks), Champagne Rose (10 stalks), Yellow Alstroemeria (5 stalks), Greentick (3 stalks), Eucalyptus Cinerea",
  },
  {
    image: p1,
    id: "p4",
    price: 329.9,
    title: "Opening Flower Stand",
    color: ["Orange", "Yellow", "Pink"],
    avaliability: "In Stock",
    types: ["Rose", "Sunflower", "Champagne Eustoma", "Gerbera", "Hydrangea"],
    dimensions: [60, 170],
    arrangements: "Flower Stand",
    collection: "Care",
    subcollection: "Get Well Soon Flowers",
    description: "Best Of Luck Opening Flower Stand",
    blooms:
      "Shocking Pink Rose (10 Stalks), Sunflower (5 Stalks), Bird of Paradise (5 Stalks), Champagne Eustoma (5 Stalks), Red Gerbera (10 Stalks), Pink Hydrangea (1 Stalk), Green Ivy (2 Stalks), Pink Anthurium (3 Stalks), Monstera, Eucalyptus Leaves",
  },
  {
    image: p1,
    id: "p5",
    price: 329.9,
    title: "Opening Flower Stand",
    color: ["Orange", "Yellow", "Pink"],
    avaliability: "In Stock",
    types: ["Rose", "Sunflower", "Champagne Eustoma", "Gerbera", "Hydrangea"],
    dimensions: [60, 170],
    arrangements: "Flower Stand",
    collection: "Care",
    subcollection: "Get Well Soon Flowers",
    description: "Best Of Luck Opening Flower Stand",
    blooms:
      "Shocking Pink Rose (10 Stalks), Sunflower (5 Stalks), Bird of Paradise (5 Stalks), Champagne Eustoma (5 Stalks), Red Gerbera (10 Stalks), Pink Hydrangea (1 Stalk), Green Ivy (2 Stalks), Pink Anthurium (3 Stalks), Monstera, Eucalyptus Leaves",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> }, //main page, default root
      { path: "/collection", element: <CollectionPage /> },
      { path: "/add-on", element: <AddOnPage /> },
      {
        path: "/flowers",
        element: <FlowersPage data={DUMMY_PRODUCTS} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
