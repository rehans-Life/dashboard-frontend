import "../styles/globals.css";
import AppLayout from "../Layouts/AppLayout";
import { Provider } from "react-redux";
import {store} from '../redux/store'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
