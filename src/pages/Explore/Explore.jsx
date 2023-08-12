import React from "react";
import { useData } from "../../context/DataContext";

export const Explore = () => {
  const { state, dispatch } = useData();

  return (
    <>
      <div>{state.city}</div>
      <button
        onClick={() => {
          dispatch({ type: "CHANGECITY" });
        }}
      >
        Change State
      </button>
    </>
  );
};
