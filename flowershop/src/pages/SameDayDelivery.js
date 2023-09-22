import { React } from "react";
import FlowersPage from "./FlowersPage";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation-slice";

function SameDayDelivery() {
  const loader = useLoaderData();
  const data = loader.message;
  const dispatch = useDispatch();
  dispatch(navigationActions.toggle_navigation(true));

  const flowerData = data.filter(
    (item) => item.same_day_delivery === "Same day delivery"
  );

  return (
    <>
      <FlowersPage data={flowerData} />
    </>
  );
}

export default SameDayDelivery;
