import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "../theme";
function MyApp({ Component, pageProps }) {
  // Gets the mode attribute value from the theme slice.
  const mode = useSelector(getMode);
  return <Component {...pageProps} />;
}

export default MyApp;
