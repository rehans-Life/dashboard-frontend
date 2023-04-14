import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import { api } from "../redux/api";

export const store = configureStore({
  reducer: {
    theme: themeReducer,

    // Adding our query methods to our datalayer so that any
    // every other component in our app can use it.
    [api.reducerPath]: api.reducer,
  },

  // Adding a middleware to make the api calls ""TEMPLATE CODE""
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
