import Document, { Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";

import Hotjar from "../src/components/analytics/hotjar";
import GoogleAnalytics from "../src/components/analytics/google-analytics";
import { styletron } from "../src/services/styletron";

function FullStory() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_org'] = 'KXAVB';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
                if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_host+'/s/fs.js';
                y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                g.consent=function(a){g("consent",!arguments.length||a)};
                g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                g.clearUserCookie=function(){};
            })(window,document,window['_fs_namespace'],'script','user');
          `
      }}
    />
  );
}

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <Hotjar />
        <GoogleAnalytics />
      </html>
    );
  }
}

export default MyDocument;
