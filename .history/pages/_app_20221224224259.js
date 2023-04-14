import "../styles/globals.css";
import Layout from "../Layouts/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../redux/api";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
