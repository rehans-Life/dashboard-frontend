import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
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

  // We will be using it for creating our theme we will make sure to only create the theme again only when mode
  // actually changes to something else.

  // Then we pass in the theme to the themeProvider so it can implement it to the app.

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
