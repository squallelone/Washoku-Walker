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
  url: string;
  openNow: boolean;
}

interface UserLocation {
  lat: number | null;
  log: number | null;
}

export type {
  DisplayMode,
  ViewPropsInterface,
  SetViewPropsInterface,
  Restaurant,
  UserLocation,
};
