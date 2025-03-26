import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./Features/shoppingSlice";
import contactReducer from "./Features/contactSlice";
import authReducer from "./Features/authSlice"
export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    contact:contactReducer,
    auth:authReducer
  },
});
