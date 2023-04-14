import "../styles/globals.css";
import Layout from "../Layouts/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { setupListeners } from "@reduxjs/toolkit/query";

// Setting up a event listner to check to see when the api calls
// that are made by the components.

setupListeners(store.dispatch);

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
