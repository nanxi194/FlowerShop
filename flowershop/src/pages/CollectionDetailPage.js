import { React } from "react";
import { useLocation } from "react-router-dom";
import FlowersPage from "./FlowersPage";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation-slice";

function CollectionDetailPage(props) {
  const location = useLocation();
  const _state = location.state;
  const dispatch = useDispatch();
  dispatch(navigationActions.toggle_navigation(true));

  return (
    <>
      <FlowersPage data={_state} />
    </>
  );
}

export default CollectionDetailPage;
