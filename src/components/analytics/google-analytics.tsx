interface DataLayerConfig {
  [x: string]: any;
}

export function sendEvent(eventName: string, config: DataLayerConfig) {
  if (typeof dataLayer === "undefined") {
    // tslint:disable-next-line:no-console
    console.log(
      `Not sending event: ${eventName}, not in production environment`
    );
  } else {
    dataLayer.push({
      event: eventName,
      ...(config || {})
    });
  }
}

function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <script
        async={true}
        src="https://www.googletagmanager.com/gtag/js?id=UA-77301580-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-77301580-1', { 'optimize_id': 'GTM-TD486C3'});
          `
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
