import { configureStore } from "@reduxjs/toolkit";
import silcer from "./silcer";

export default configureStore({
  reducer: {
    counter: silcer,
  },
});
