import { useState } from "react";

import { DisplayMode } from "./types.ts";

import Router from "./pages/router/Router.tsx";
import Header from "./pages/header/Header.tsx";
import useGetUserLocation from "./hooks/useGetUserLocation.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("landingPage");
  const userLoc = useGetUserLocation();
  // console.log(userLoc);

  return (
    <div className="outer-container">
      <Header setView={setView} />
      <Router view={view} setView={setView} userLoc={userLoc} />
    </div>
  );
}
