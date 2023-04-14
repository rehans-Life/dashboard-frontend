import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import { api } from "../redux/api";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Adding our Api to our datalayer so that any other component can use it.
    [api.reducerPath]: api.reducer,
  },
  // Adding a middleware to make the api calls
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
