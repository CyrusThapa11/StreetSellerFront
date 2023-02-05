import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loggedInUserReducer from "../features/loggedInUser/loggedInUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loggedInUser: loggedInUserReducer,
  },
});
