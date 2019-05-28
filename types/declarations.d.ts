interface FSInterface {
  event: (eventName: string, eventProperties?: {}) => null;
}

interface MixpanelInterface {
  track: (eventName: string, eventProperties?: {}) => null;
}

type GAEventInterface = {
  hitType: string;
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: string;
};

type Smartlook = (
  eventType: string,
  eventName: string,
  eventProperties?: {}
) => null;

declare module "baseui/button";
declare module "styletron-engine-atomic";
declare module "react-ab-test";
declare var FS: FSInterface;
declare var mixpanel: MixpanelInterface;
declare var smartlook: Smartlook;
declare var gtag: (
  event: string,
  action: string,
  config: { [key: string]: string | undefined }
) => null;
