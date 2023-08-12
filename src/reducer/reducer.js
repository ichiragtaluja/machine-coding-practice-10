import React from "react";
import { inventoryData } from "../data/data";

export const reducer = () => {
  const initialState = inventoryData;
  const dataReducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  return { initialState, dataReducer };
};
