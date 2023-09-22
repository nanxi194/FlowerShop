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
    FILTER(state, action) {
      const newFilterData = [...action.payload.filterquests];
      const newData = [...action.payload.flowerfilterdata];
      const sort = action.payload.sort;

      function checkIfAllFalse(arr, num) {
        var count = 0;
        arr.forEach((datas) => {
          if (!datas.state) {
            count = count + 1;
          }
        });
        if (count === num) {
          return false;
        } else {
          return true;
        }
      }

      var finalData = [...newData];
      newFilterData.forEach((data) => {
        const filtertype = data.title;

        // availability
        if (
          filtertype === "availability" &&
          checkIfAllFalse(data.filterdata, 2)
        ) {
          const tmpData2 = [];
          data.filterdata.forEach((datas) => {
            if (datas.state) {
              finalData.forEach((newdata) => {
                if (newdata.avaliability === datas.type) {
                  // check if tmpData already got info
                  const found = tmpData2.some((el) => el.id === newdata.id);
                  if (!found) {
                    tmpData2.push(newdata);
                  }
                }
              });
            }
          });
          finalData = [...tmpData2];
        }

        // range
        if (filtertype === "price") {
          const tmpData2 = [];
          const min = data.filterdata[0];
          const max = data.filterdata[1];

          finalData.forEach((newdata) => {
            if (newdata.price >= min && newdata.price <= max) {
              // check if tmpData already got info
              const found = tmpData2.some((el) => el.id === newdata.id);
              if (!found) {
                tmpData2.push(newdata);
              }
            }
          });
          finalData = [...tmpData2];
        }

        // color
        if (filtertype === "color" && checkIfAllFalse(data.filterdata, 4)) {
          const tmpData2 = [];
          data.filterdata.forEach((datas) => {
            if (datas.state) {
              finalData.forEach((newdata) => {
                if (newdata.color.includes(datas.type)) {
                  // check if tmpData already got info
                  const found = tmpData2.some((el) => el.id === newdata.id);
                  if (!found) {
                    tmpData2.push(newdata);
                  }
                }
              });
            }
          });
          finalData = [...tmpData2];
        }

        if (filtertype === "types" && checkIfAllFalse(data.filterdata, 4)) {
          const tmpData2 = [];
          data.filterdata.forEach((datas) => {
            if (datas.state) {
              finalData.forEach((newdata) => {
                if (newdata.types.includes(datas.type)) {
                  // check if tmpData already got info
                  const found = tmpData2.some((el) => el.id === newdata.id);
                  if (!found) {
                    tmpData2.push(newdata);
                  }
                }
              });
            }
          });
          finalData = [...tmpData2];
        }
      });

      if (finalData.length === 0) {
        state.products = [];
        state.totalProducts = 0;
      } else {
        // sort
        if (sort === "default") {
          state.products = [...finalData];
          state.totalProducts = finalData.length;
        }
        if (sort === "desc") {
          const sortedData = finalData.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
            return 0;
          });
          state.products = [...sortedData];
          state.totalProducts = sortedData.length;
        }
        if (sort === "asc") {
          const sortedData = finalData.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
          });
          state.products = [...sortedData];
          state.totalProducts = sortedData.length;
        }
        if (sort === "low to high") {
          const sortedData = finalData.sort(function (a, b) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
          });
          state.products = [...sortedData];
          state.totalProducts = sortedData.length;
        }
        if (sort === "high to low") {
          const sortedData = finalData.sort(function (a, b) {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          });
          state.products = [...sortedData];
          state.totalProducts = sortedData.length;
        }
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
