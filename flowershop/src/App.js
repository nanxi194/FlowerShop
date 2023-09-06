import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import AddOnPage from "./pages/AddOnPage";
import AllFlowersPage from "./pages/AllFlowersPage";
import SameDayDelivery from "./pages/SameDayDelivery";
import FlowersDetailPage from "./pages/FlowersDetailPage";
import CollectionDetailPage from "./pages/CollectionDetailPage";
import AddOnDetailPage from "./pages/AddOnDetailPage";

import "./App.css";

// IMAGE
import p1 from "./assets/dicoverimg.jpg";
import ph1 from "./assets/hover.jpg";
import pd1 from "./assets/detail.jpg";

const DUMMY_PRODUCTS = [
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "p1",
    price: 45.0,
    title: "Cool Blue",
    color: ["Pink"],
    avaliability: "In stock",
    types: ["Tuilps"],
    dimensions: [23, 22],
    arrangements: "Flower Bouquets",
    collection: "birthday",
    description:
      "This Get well soon basket will help to recover your loved ones in no time.",
    blooms: "Light Pink Tuilps (3 Stalks)",
    same_day_delivery: "1 to 2 working days",
  },
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "p2",
    price: 119.9,
    title: "Madeleine",
    color: ["Pink", "White"],
    avaliability: "In stock",
    types: ["Roses", "Lilies"],
    dimensions: [30, 25],
    arrangements: "Flower Bouquets",
    collection: "love",
    description:
      "For the woman that will always be your #1. Remind her of how extraordinary she is by surprising her with a bouquet that will make her heart flutter. This lush mix of fragrant pink lilies and lush white roses is destined to brighten someone's day!",
    blooms: "White Rose (17 Stalks), Pink Lily (5 Stalks)",
    same_day_delivery: "same day delivery",
  },
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "p3",
    price: 159.9,
    title: "Amber Abundance",
    color: ["Orange", "Yellow"],
    avaliability: "In stock",
    types: ["Lilies", "Roses"],
    dimensions: [70, 50],
    arrangements: "Flower Bouquets",
    collection: "care",
    description:
      "A warm, golden symphony of precious petals, arranged together for the most marvelous of celebrations! ",
    blooms:
      "Orange Lily (3 stalks), Champagne Rose (10 stalks), Yellow Alstroemeria (5 stalks), Greentick (3 stalks), Eucalyptus Cinerea",
    same_day_delivery: "same day delivery",
  },
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "p4",
    price: 329.9,
    title: "Opening Flower Stand",
    color: ["Orange", "Yellow", "Pink"],
    avaliability: "In stock",
    types: ["Roses", "Sunflowers"],
    dimensions: [60, 170],
    arrangements: "Flower Stand",
    collection: "care",
    description: "Best Of Luck Opening Flower Stand",
    blooms:
      "Shocking Pink Rose (10 Stalks), Sunflower (5 Stalks), Bird of Paradise (5 Stalks), Champagne Eustoma (5 Stalks), Red Gerbera (10 Stalks), Pink Hydrangea (1 Stalk), Green Ivy (2 Stalks), Pink Anthurium (3 Stalks), Monstera, Eucalyptus Leaves",
    same_day_delivery: "3 to 5 working days",
  },
  {
    image: p1,
    image_hover: ph1,
    image_detail: pd1,
    id: "p5",
    price: 87.9,
    title: "Romy",
    color: ["Pink", "White"],
    avaliability: "In stock",
    types: ["Roses"],
    dimensions: [38, 30],
    arrangements: "Flower Bouquets",
    collection: "wedding",
    description:
      "All in lovely shades from white to pink, Romy is a crisp mix of fragrant roses, daisies, and alstroemerias.",
    blooms:
      "Shocking Pink Rose (12 Stalks), White Carnation Spray(5 Stalks), Purple Caspia",
    same_day_delivery: "same day delivery",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> }, //main page, default root
      {
        path: "/collection",
        element: <CollectionPage data={DUMMY_PRODUCTS} />,
      },
      { path: "/add-on", element: <AddOnPage /> },

      {
        path: "/flowers",
        element: <AllFlowersPage data={DUMMY_PRODUCTS} />,
      },
      {
        path: "/same-day-delivery",
        element: <SameDayDelivery data={DUMMY_PRODUCTS} />,
      },
      { path: "/flowers/:flowersId", element: <FlowersDetailPage /> },
      {
        path: "/collection/:collectionTitle",
        element: <CollectionDetailPage />,
      },
      { path: "/add-on/:addonId", element: <AddOnDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
