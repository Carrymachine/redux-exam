import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../store/Product";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});
