import React from "react";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { initialState, dataReducer } = reducer();
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const name = "Chirag";
  return (
    <DataContext.Provider value={{ name, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
