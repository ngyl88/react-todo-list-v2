import React from "react";

export default props => {
  return (
    <li
      className={props.item.isCompleted ? "done" : ""}
      onClick={props.handleClick}
    >
      {props.item.name}
    </li>
  );
};
