import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import store from "../redux/store";
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Provider store={store}>
          <Main />
          <NextScript />
        </Provider>
      </body>
    </Html>
  );
}
