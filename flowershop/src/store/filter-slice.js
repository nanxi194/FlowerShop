import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { products: [], totalProducts: 0 },
  reducers: {
    SHOW_DATA(state, action) {
      state.products = action.payload;
      state.totalProducts = action.payload.length;
    },
    SORT_BY_ALPHABET_DESC(state, action) {
      const newData = [...action.payload];
      const sortedData = newData.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        return 0;
      });
      state.products = [...sortedData];
      state.totalProducts = sortedData.length;
    },
    SORT_BY_ALPHABET_ASC(state, action) {
      const newData = [...action.payload];
      const sortedData = newData.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      state.products = [...sortedData];
      state.totalProducts = sortedData.length;
    },
    SORT_BY_PRICE_LH(state, action) {
      const newData = [...action.payload];
      const sortedData = newData.sort(function (a, b) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
      state.products = [...sortedData];
      state.totalProducts = sortedData.length;
    },
    SORT_BY_PRICE_HL(state, action) {
      const newData = [...action.payload];
      const sortedData = newData.sort(function (a, b) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      state.products = [...sortedData];
      state.totalProducts = sortedData.length;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
