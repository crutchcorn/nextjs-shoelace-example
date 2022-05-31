import '@shoelace-style/shoelace/dist/themes/light.css';
import '../styles/globals.css'

import { useLayoutEffect, useRef } from "react";

function CustomEls({ URL }) {
  const customEls = useRef(false);

  useLayoutEffect(() => {
    if (customEls.current) {
      return;
    }

    import("@shoelace-style/shoelace/dist/utilities/base-path").then(({setBasePath}) => {
      setBasePath(`${URL}/static/static`);

      // This imports all components
      import("@shoelace-style/shoelace/dist/shoelace");
      // If you're wanting to selectively import components, replace this line with your own definitions
      // import("@shoelace-style/shoelace/dist/components/button/button");
      customEls.current = true;
    });
  }, [URL, customEls]);

  return null;
}

function MyApp({ Component, pageProps, URL }) {
  const isBrowser = typeof window !== 'undefined';
  return (
    <>
      {isBrowser && <CustomEls URL={URL} />}
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
