import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "../theme";
function MyApp({ Component, pageProps }) {
  const mode = useSelector(getMode);
  return <Component {...pageProps} />;
}

export default MyApp;
