import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <span className="Heading">Example:</span>
        <span className="Example"> {props.examples}</span>
      </div>
    );
  } else {
    return null;
  }
}
