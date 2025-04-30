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
  address: string;
  maps_url: string;
}

export type {
  DisplayMode,
  ViewPropsInterface,
  SetViewPropsInterface,
  Restaurant,
};
