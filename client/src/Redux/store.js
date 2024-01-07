import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";

const store = configureStore({
  reducer: {
    cartReducer: cartSlices,
  },
});

export default store;
