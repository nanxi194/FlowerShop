import React from "react";
import { XLg } from "react-bootstrap-icons";
import classes from "./Popup.module.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className={classes.popup}>
      <div className={classes.popup_inner}>
        <button
          className={classes.close_btn}
          onClick={() => props.setTrigger(false)}
        >
          <XLg size={24} />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
