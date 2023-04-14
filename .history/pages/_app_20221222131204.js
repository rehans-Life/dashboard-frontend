import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme";
function MyApp({ Component, pageProps }) {
  // Gets the mode attribute value from the theme slice.
  const mode = useSelector(getMode);
  const theme = createTheme({
    palette: {
      primary: "#4d547d",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
