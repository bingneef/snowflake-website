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
  if (typeof ga === "undefined") {
    // tslint:disable-next-line:no-console
    console.log(
      `Not sending event: ${eventCategory}:${eventAction}, not in production environment`
    );
  } else {
    ga.send({
      eventAction,
      eventCategory,
      eventLabel,
      eventValue,
      hitType: "event"
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
      <style
        dangerouslySetInnerHTML={{
          __html: `.async-hide { opacity: 0 !important} `
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'OPT_CONTAINER_ID':true});`
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
