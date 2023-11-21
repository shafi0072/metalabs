import Layout from "@/src/component/core/layout/Layout";
import "@/styles/globals.css";
// import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
