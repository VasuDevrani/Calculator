import React from "react";
import { ACTIONS } from "./App.js";

export default function DButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.JOIN_DIGITS, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
