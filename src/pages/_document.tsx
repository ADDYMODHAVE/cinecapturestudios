import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />

        <script
          src="https://kit.fontawesome.com/7536fda798.js"
          crossOrigin="anonymous"
        ></script>
        <title>Cinecapture studio</title>
      </Head>
      <body>
        <div style={{ display:"none" }}>
          Roshan Chinchpure,Roshan Chinchpure photography,Roshan
          photography,best photographer in pune,manchar,ambegoan,india
          photographer pune ,best wedding photographer,wedding photographer,best
          prewedding photographer
        </div>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
