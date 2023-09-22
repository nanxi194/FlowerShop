import { createSlice } from "@reduxjs/toolkit";

const cart_actionSlice = createSlice({
  name: "cart_action",
  initialState: { cartIsVisible: false, filterIsVisible: false },
  reducers: {
    toggle_cart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggle_filter(state) {
      state.filterIsVisible = !state.filterIsVisible;
    },
  },
});

export const cart_actionActions = cart_actionSlice.actions;

export default cart_actionSlice;
