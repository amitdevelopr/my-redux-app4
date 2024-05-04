"use client";
import React, { useRef } from "react";
import { appStore } from "@/store/appStore";
export const A = () => {
  const nameRef = useRef();
  const fnClick = () => {
    const name = nameRef.current.value;
    appStore.dispatch({
      type: "NAME_UPDATE",
      payload: name,
    });
  };
  return (
    <div>
      <h1>A</h1>
      <p>
        Name:
        <input ref={nameRef} />
      </p>
      <button onClick={fnClick}>Share name</button>
    </div>
  );
};
