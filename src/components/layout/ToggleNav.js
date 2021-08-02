import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function ToggleNav(props) {
  if (props.toggleOn) {
    return <FaTimes />;
  } else {
    return <FaBars />;
  }
}

export default ToggleNav;
