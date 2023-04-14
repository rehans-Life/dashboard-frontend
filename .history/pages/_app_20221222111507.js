import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
function MyApp({ Component, pageProps }) {
  // Gets the mode attribute value from the theme slice.
  const mode = useSelector(getMode);
  return <Component {...pageProps} />;
}

export default MyApp;
