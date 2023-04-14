import "../styles/globals.css";
import AppLayout from "../Layouts/AppLayout";
function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
