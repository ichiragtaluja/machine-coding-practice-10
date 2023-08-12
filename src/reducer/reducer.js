import React from "react";

export const reducer = () => {
  const initialState = { city: "Oakville" };
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "CHANGECITY":
        return { ...state, city: "Toronto" };
      default:
        return state;
    }
  };

  return { initialState, dataReducer };
};
