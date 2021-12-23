import React from "react";
import "./Button.css";

const Button = ({ startGame, playing }) => (
  <button onClick={startGame}>{playing ? "Reset" : "Start"}</button>
);

export default Button;
