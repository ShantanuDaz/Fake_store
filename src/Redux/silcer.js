import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    categories: [],
    items: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setItems } = counterSlice.actions;

export default counterSlice.reducer;
