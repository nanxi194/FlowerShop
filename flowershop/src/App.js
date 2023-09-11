import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import HomePage, { loader as dataLoader } from "./pages/HomePage";
import RootLayout from "./pages/Root";
import AddOnPage, { loader as addOnLoader } from "./pages/AddOnPage";
import AllFlowersPage from "./pages/AllFlowersPage";
import SameDayDelivery from "./pages/SameDayDelivery";
import FlowersDetailPage from "./pages/FlowersDetailPage";
import CollectionDetailPage from "./pages/CollectionDetailPage";
import AddOnDetailPage from "./pages/AddOnDetailPage";
import CheckOutPage from "./pages/CheckOutPage";
import ViewCartPage from "./pages/ViewCartPage";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: dataLoader }, //main page, default root
        {
          path: "/collection",
          element: <CollectionPage />,
          loader: dataLoader,
        },
        { path: "/add-on", element: <AddOnPage />, loader: addOnLoader },

        {
          path: "/flowers",
          element: <AllFlowersPage />,
          loader: dataLoader,
        },
        {
          path: "/same-day-delivery",
          element: <SameDayDelivery />,
          loader: dataLoader,
        },
        {
          path: "/information",
          element: <CheckOutPage />,
        },
        {
          path: "/view-cart",
          element: <ViewCartPage />,
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

  return <RouterProvider router={router} />;
}

export default App;
