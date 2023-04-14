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
      primary: { main: "#4d547d" },
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
