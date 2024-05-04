"use client";
import React, { useState } from "react";
import { appStore } from "@/store/appStore";
export const B = () => {
  const [loc, setLoc] = useState("");
  const fnChange = (eve) => {
    setLoc(eve.target.value);
  };
  const fnClick = () => {
    appStore.dispatch({
      type: "LOC_UPDATE",
      payload: loc,
    });
  };
  return (
    <div>
      <h1>B</h1>
      <p>
        Location:
        <input onChange={fnChange} />
      </p>
      <button onClick={fnClick}>Share loc</button>
    </div>
  );
};
