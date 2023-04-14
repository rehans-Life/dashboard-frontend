import React, { useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";
import { getMode } from "../redux/themeSlice";

export default function AppLayout({ children }) {
  const mode = useSelector(getMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
}
