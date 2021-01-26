import "@shoelace-style/shoelace/dist/shoelace/shoelace.css";
import '../styles/globals.css'

import { useLayoutEffect, useRef } from "react";

import {
  setAssetPath,
  defineCustomElements
} from "@shoelace-style/shoelace";

function CustomEls({ URL }) {
  const customEls = useRef(false);

  useLayoutEffect(() => {
    if (customEls.current) {
      return;
    }
    setAssetPath(`${URL}/static/static`);
    // If you're wanting to selectively import components, replace this line with your own definitions
    defineCustomElements();
    // customElements.define("sl-button", SlButton);
    customEls.current = true;
  }, [URL, customEls]);

  return null;
}

function MyApp({ Component, pageProps, URL }) {
  return (
    <>
      {process.browser && <CustomEls URL={URL} />}
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const URL = process.env.BASE_URL;

  return {
    URL,
  };
};

export default MyApp
