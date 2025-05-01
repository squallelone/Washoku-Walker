type DisplayMode =
  | "landingPage"
  | "recommendations"
  | "userSelection"
  | "login"
  | "userProfile"
  | "aboutPage";

interface ViewPropsInterface {
  view: DisplayMode;
  setView: (mode: DisplayMode) => void;
}

interface SetViewPropsInterface {
  setView: (mode: DisplayMode) => void;
}

interface Restaurant {
  name: string;
  rating: number;
  formattedAddress: string;
  websiteUri: string;
  openNow: boolean;
}

export type {
  DisplayMode,
  ViewPropsInterface,
  SetViewPropsInterface,
  Restaurant,
};
