import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    categories: [],
    items: {},
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setItems } = counterSlice.actions;

export default counterSlice.reducer;
