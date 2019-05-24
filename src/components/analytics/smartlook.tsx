export function sendEvent(eventName: string, eventProperties?: {}) {
  if (typeof smartlook === "undefined") {
    // tslint:disable-next-line:no-console
    console.log(
      `Not sending event: ${eventName}, not in production environment`
    );
  } else {
    smartlook("track", eventName, eventProperties);
  }
}

function Smartlook() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.smartlook||(function(d) {
          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
          c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
          })(document);
          smartlook('init', '1918e07593de805de944505d6e91fb8ceec2b696');
          `
      }}
    />
  );
}

export default Smartlook;
