import "../styles/globals.css";
import { getMode } from "../redux/themeSlice";
import { useSelector } from "react-redux";
function MyApp({ Component, pageProps }) {
  const mode = useSelector(getMode);
  return <Component {...pageProps} />;
}

export default MyApp;
