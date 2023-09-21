import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import appReducer from "../reducers";

const reducer = combineReducers({
  appReducer,
  // here we can add multiple reducers
});

const store = configureStore({ reducer });

export default store;
