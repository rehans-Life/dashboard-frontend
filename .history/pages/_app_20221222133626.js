import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme";
import AppLayout from "../Layouts/AppLayout";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  // Gets the mode attribute value from the theme slice.
  const [appTheme, setTheme] = useState("dark");
  const theme = createTheme({
    palette: {
      primary: { main: "#cca752" },
    },
    typography: {
      h1: {
        fontSize: "2rem",
      },
    },
  });
  const theme2 = createTheme({
    palette: {
      primary: { main: "#0d1025" },
    },
    typography: {
      h1: {
        fontSize: "2rem",
      },
    },
  });
  return (
    <ThemeProvider theme={appTheme === "dark" ? theme : theme2}>
      <CssBaseline />
      <AppLayout>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          Change theme
        </button>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
