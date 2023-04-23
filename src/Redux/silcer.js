import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    categories: [],
    items:
      localStorage.getItem("items") !== null
        ? JSON.parse(localStorage.getItem("items"))
        : {},
    noOfItems:
      localStorage.getItem("noOfItems") !== null
        ? JSON.parse(localStorage.getItem("noOfItems"))
        : 0,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setItems: (state, action) => {
      state.items[action.payload] =
        state.items[action.payload] !== undefined
          ? state.items[action.payload] + 1
          : 1;
      let products = Object.keys(state.items);
      let num = 0;
      products.forEach((el) => {
        num += parseInt(state.items[el]);
      });
      state.noOfItems = num;
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("noOfItems", JSON.stringify(state.noOfItems));
    },
    removeItems: (state, action) => {
      if (state.items[action.payload] === 1) {
        let newItems = state.items;
        delete newItems[action.payload];
        state.items = newItems;
      } else {
        state.items[action.payload] =
          state.items[action.payload] !== undefined
            ? state.items[action.payload] - 1
            : 0;
      }
      let products = Object.keys(state.items);
      let num = 0;
      products.forEach((el) => {
        num += parseInt(state.items[el]);
      });
      state.noOfItems = num;
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("noOfItems", JSON.stringify(state.noOfItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setItems, removeItems } = counterSlice.actions;

export default counterSlice.reducer;
