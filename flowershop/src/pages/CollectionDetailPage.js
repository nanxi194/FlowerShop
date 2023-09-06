import { React } from "react";
import { useLocation } from "react-router-dom";
import FlowersPage from "./FlowersPage";

function CollectionDetailPage(props) {
  const location = useLocation();
  const _state = location.state;

  return (
    <>
      <FlowersPage data={_state} />
    </>
  );
}

export default CollectionDetailPage;
