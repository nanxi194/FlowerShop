import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import HomePage, { loader as dataLoader } from "./pages/HomePage";
import RootLayout from "./pages/Root";
// import AddOnPage, { loader as addOnLoader } from "./pages/AddOnPage";
// import AllFlowersPage from "./pages/AllFlowersPage";
// import SameDayDelivery from "./pages/SameDayDelivery";
import FlowersDetailPage from "./pages/FlowersDetailPage";
import CollectionDetailPage from "./pages/CollectionDetailPage";
import AddOnDetailPage from "./pages/AddOnDetailPage";
import CheckOutPage from "./pages/CheckOutPage";
import ViewCartPage from "./pages/ViewCartPage";

import "./App.css";

const AddOnPage = lazy(() => import("./pages/AddOnPage"));
const AllFlowersPage = lazy(() => import("./pages/AllFlowersPage"));
const SameDayDelivery = lazy(() => import("./pages/SameDayDelivery"));

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
        {
          path: "/add-on",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <AddOnPage />
            </Suspense>
          ),
          loader: () =>
            import("./pages/AddOnPage").then((module) => module.loader()),
        },

        {
          path: "/flowers",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <AllFlowersPage />
            </Suspense>
          ),
          loader: () =>
            import("./pages/HomePage").then((module) => module.loader()),
        },
        {
          path: "/same-day-delivery",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <SameDayDelivery />
            </Suspense>
          ),
          loader: () =>
            import("./pages/HomePage").then((module) => module.loader()),
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
