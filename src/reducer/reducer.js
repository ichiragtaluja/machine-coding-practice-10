import React from "react";
import { inventoryData } from "../data/data";

export const reducer = () => {
  const initialState = inventoryData;
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "ADDPRODUCT":
        return [...state, action.payload];
      default:
        return state;
    }
  };

  return { initialState, dataReducer };
};
