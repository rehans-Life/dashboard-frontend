import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      {" "}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
