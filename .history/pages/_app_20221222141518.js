import "../styles/globals.css";
import AppLayout from "../Layouts/AppLayout";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
