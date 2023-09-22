import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation_action",
  initialState: { navigationIsVisible: true },
  reducers: {
    toggle_navigation(state, action) {
      state.navigationIsVisible = action.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;
