import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    categories: [],
    items: {},
    noOfItems: 0,
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
    },
    removeItems: (state, action) => {
      state.items[action.payload] =
        state.items[action.payload] !== undefined
          ? state.items[action.payload] - 1
          : 0;
      let products = Object.keys(state.items);
      let num = 0;
      products.forEach((el) => {
        num += parseInt(state.items[el]);
      });
      state.noOfItems = num;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setItems } = counterSlice.actions;

export default counterSlice.reducer;
