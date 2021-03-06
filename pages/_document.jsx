import Document, { Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";

import {
  Hotjar,
  GoogleAnalytics,
  FullStory,
  Mixpanel,
  Smartlook
} from "../src/components/analytics";
import { styletron } from "../src/services/styletron";

class MyDocument extends Document {
  static getInitialProps(props) {
    const page = props.renderPage(App => localProps => (
      <StyletronProvider value={styletron}>
        <App {...localProps} />
      </StyletronProvider>
    ));
    const stylesheets = styletron.getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <GoogleAnalytics />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={JSON.stringify(sheet)}
            />
          ))}
          <FullStory />
          <Mixpanel />
          <Smartlook />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <Hotjar />
      </html>
    );
  }
}

export default MyDocument;
