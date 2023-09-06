import { React } from "react";
import FlowersPage from "./FlowersPage";

function SameDayDelivery(props) {
  const flowerData = props.data.filter(
    (item) => item.same_day_delivery === "Same day delivery"
  );

  return (
    <>
      <FlowersPage data={flowerData} />
    </>
  );
}

export default SameDayDelivery;
