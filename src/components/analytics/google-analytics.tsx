interface EventConfig {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: string;
}

export function sendEvent({
  eventAction,
  eventCategory,
  eventLabel,
  eventValue
}: EventConfig) {
  if (typeof gtag === "undefined") {
    // tslint:disable-next-line:no-console
    console.log(
      `Not sending event: ${eventCategory}:${eventAction}, not in production environment`
    );
  } else {
    gtag("event", eventAction, { eventCategory, eventLabel, eventValue });
  }
}

function GoogleAnalytics() {
  // if (process.env.NODE_ENV !== "production") {
  //   return null;
  // }

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
