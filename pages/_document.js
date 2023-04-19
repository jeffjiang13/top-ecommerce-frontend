import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="ChiqueChick Store" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="ChiqueChick Store" />
          <meta name="description" content="Shoe Store Based in Indonesia" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fff" />

          <link rel="apple-touch-icon" href="/icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon.png"
          />

          <link rel="mask-icon" href="/icon.png" color="#5bbad5" />
          <link rel="shortcut icon" href="/icon.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://ChiqueChick.vercel.com" />
          <meta name="twitter:title" content="ChiqueChick Store" />
          <meta
            name="twitter:description"
            content="Shoe Store based in Indonesia"
          />
          <meta name="twitter:image" content="/icon.png" />
          <meta name="twitter:creator" content="@mudzikale" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ChiqueChick Store" />
          <meta
            property="og:description"
            content="Shoe Store based in Indonesia"
          />
          <meta property="og:site_name" content="ChiqueChick" />
          <meta property="og:url" content="https://ChiqueChick.vercel.com" />
          <meta property="og:image" content="/icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icon.png" type="image/x-icon" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
