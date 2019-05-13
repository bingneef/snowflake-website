interface FSInterface {
  event: (eventName: string, eventProperties?: {}) => null;
}

interface MixpanelInterface {
  track: (eventName: string) => null;
}

declare module "baseui/button";
declare module "styletron-engine-atomic";
declare module "react-ab-test";
declare var FS: FSInterface;
declare var mixpanel: MixpanelInterface;
