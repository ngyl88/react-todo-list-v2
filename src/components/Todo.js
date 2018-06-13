import React from "react";

export default props => {
  console.log("todo", props.item.name);
  console.log("completed?", props.item.isCompleted);
  return (
    <li className={props.item.isCompleted ? "done" : ""}>{props.item.name}</li>
  );
};
