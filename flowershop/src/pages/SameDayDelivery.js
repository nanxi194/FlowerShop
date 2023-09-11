import { React } from "react";
import FlowersPage from "./FlowersPage";
import { useLoaderData } from "react-router-dom";

function SameDayDelivery() {
  const loader = useLoaderData();
  const data = loader.message;

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
