import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INITAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, INITAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const values = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
