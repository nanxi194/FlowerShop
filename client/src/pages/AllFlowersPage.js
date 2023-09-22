import { React } from "react";
import FlowersPage from "./FlowersPage";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation-slice";

function AllFlowersPage() {
  const loader = useLoaderData();
  const data = loader.message;
  const dispatch = useDispatch();
  dispatch(navigationActions.toggle_navigation(true));

  return (
    <>
      <FlowersPage data={data} />
    </>
  );
}

export default AllFlowersPage;
