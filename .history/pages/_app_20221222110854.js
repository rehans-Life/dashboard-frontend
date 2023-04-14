import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import { getMode } from "../redux/themeSlice";
function MyApp({ Component, pageProps }) {
  const mode = useSelector(getMode);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
