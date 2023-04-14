import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "../theme";
function MyApp({ Component, pageProps }) {
  // Gets the mode attribute value from the theme slice.
  const mode = useSelector(getMode);
  // Creating your theme using the material UI createtheme funcion initially of it you have to pass all the
  // necessary color palletes  and fonts inside of it.

  // useMemo is used to cache the outputs of a function for a specific input so that when the component is
  // rerendered it doesnt recompute the value for the same input but just returns the cached value

  // But you can tell it to rerun the function inside of it when the input ever changes so it recomputes the
  // ouptu in that case.

  return <Component {...pageProps} />;
}

export default MyApp;
