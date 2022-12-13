/** @format */

import React, { Component } from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.func}>
      {props.value}
    </button>
  );
}

export default Square;
