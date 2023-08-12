import React from "react";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");

  const { initialState, dataReducer } = reducer();
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const departments = state.reduce(
    (acc, curr) =>
      acc.includes(curr.department) ? acc : [...acc, curr.department],
    []
  );

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        departments,
        selectedDepartment,
        setSelectedDepartment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
