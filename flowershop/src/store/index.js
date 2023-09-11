import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";
import cartSlice from "./cart-slice";
import cart_actionSlice from "./cart_action-slice";
import navigationSlice from "./navigation-slice";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
    cart_action: cart_actionSlice.reducer,
    navigation_action: navigationSlice.reducer,
  },
});

export default store;
