import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme";
import AppLayout from "../Layouts/AppLayout";
function MyApp({ Component, pageProps }) {
  // Gets the mode attribute value from the theme slice.
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
