import { React } from "react";
import FlowersPage from "./FlowersPage";

function AllFlowersPage(props) {
  const flowerData = props.data;
  return (
    <>
      <FlowersPage data={flowerData} />
    </>
  );
}

export default AllFlowersPage;
