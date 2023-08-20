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
      const tmpData = [];
      const tmpData2 = [];
      const tmpData3 = [];

      // availability
      newFilterData.forEach((data) => {
        const filtertype = data.title;

        if (filtertype === "availability") {
          data.filterdata.forEach((datas) => {
            if (datas.state) {
              newData.forEach((newdata) => {
                if (newdata.avaliability === datas.type) {
                  // check if tmpData already got info
                  const found = tmpData.some((el) => el.id === newdata.id);
                  if (!found) {
                    tmpData.push(newdata);
                  }
                }
              });
            }
          });
        }

        // color
        if (filtertype === "color") {
          data.filterdata.forEach((datas) => {
            if (datas.state) {
              newData.forEach((newdata) => {
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
        }

        if (filtertype === "types") {
          data.filterdata.forEach((datas) => {
            if (datas.state) {
              newData.forEach((newdata) => {
                if (newdata.types.includes(datas.type)) {
                  // check if tmpData already got info
                  const found = tmpData3.some((el) => el.id === newdata.id);
                  if (!found) {
                    tmpData3.push(newdata);
                  }
                }
              });
            }
          });
        }
      });

      const tmpData4 = [...tmpData, ...tmpData2, ...tmpData3];
      const tmpData5 = tmpData4.flat();
      console.log(tmpData5);

      if (tmpData5.length === 0) {
        state.products = [];
        state.totalProducts = 0;
      } else {
        // get id
        const tmpId = [];
        tmpData5.forEach((data) => {
          tmpId.push(data.id);
        });

        // count occurrence
        const count = tmpId.reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {});

        //convert in to objects array
        const countArray = [];
        const countValues = Object.values(count);
        tmpId.forEach((i, index) => {
          countArray.push({ count: countValues[index], id: i });
        });
        console.log(countArray);

        //sort number of occurrence
        const sortedCountData = countArray.sort(function (a, b) {
          if (a.count < b.count) return 1;
          if (a.count > b.count) return -1;
          return 0;
        });
        console.log(sortedCountData);

        // get id
        const finalData = [];
        const maxCount = sortedCountData[0].count;
        console.log(maxCount);
        sortedCountData.forEach((i) => {
          if (maxCount === i.count) {
            newData.forEach((j) => {
              if (j.id === i.id) {
                console.log("in");
                finalData.push(j);
              }
            });
          }
        });
        console.log(finalData);

        state.products = [...finalData];
        state.totalProducts = finalData.length;
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
