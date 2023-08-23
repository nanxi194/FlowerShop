import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { filter: filterSlice.reducer, cart: cartSlice.reducer },
});

export default store;
