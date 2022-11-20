import "../styles/globals.css";
import type { AppProps } from "next/app";
import { enableMapSet } from "immer";
enableMapSet();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
