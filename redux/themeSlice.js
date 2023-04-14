import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = themeSlice.actions;

export const getMode = (state) => {
  return state.theme.mode;
};

export default themeSlice.reducer;
