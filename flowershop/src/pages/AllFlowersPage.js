import { React } from "react";
import FlowersPage from "./FlowersPage";
import { useLoaderData } from "react-router-dom";

function AllFlowersPage() {
  const loader = useLoaderData();
  const data = loader.message;

  return (
    <>
      <FlowersPage data={data} />
    </>
  );
}

export default AllFlowersPage;
