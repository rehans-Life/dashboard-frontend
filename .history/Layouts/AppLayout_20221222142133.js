import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";
import { getMode } from "../redux/themeSlice";

export default function AppLayout({ children }) {
  const mode = useSelector(getMode);
  const theme = createTheme(themeSettings(mode));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
