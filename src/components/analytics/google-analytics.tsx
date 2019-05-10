function GoogleAnalytics() {
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

            gtag('config', 'UA-77301580-1');
          `
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
