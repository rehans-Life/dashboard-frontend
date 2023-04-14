import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
const store = configureStore({
  theme: themeReducer,
});
