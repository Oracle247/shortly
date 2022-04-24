import { configureStore } from "@reduxjs/toolkit"; 
import linkSlice from "../features/linkSlice";
import loadingSlice from "../features/loadingSlice";

export const store = configureStore({
  reducer: {
    links: linkSlice,
    loading: loadingSlice
  }
});