import '@shoelace-style/shoelace/dist/themes/base.css';
import '../styles/globals.css'

import { useLayoutEffect, useRef } from "react";

function CustomEls({ URL }) {
  const customEls = useRef(false);

  useLayoutEffect(() => {
    if (customEls.current) {
      return;
    }
    const {
      setBasePath
    } = require("@shoelace-style/shoelace/dist/utilities/base-path");

    setBasePath(`${URL}/static/static`);

    // This imports all components
    require("@shoelace-style/shoelace/dist/shoelace");
    // If you're wanting to selectively import components, replace this line with your own definitions
    // require("@shoelace-style/shoelace/dist/components/button/button");
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
