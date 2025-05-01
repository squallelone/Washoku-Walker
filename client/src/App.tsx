import { useState } from "react";

import { DisplayMode } from "./types.ts";

import Router from "./pages/router/Router.tsx";
import Header from "./pages/header/Header.tsx";
import useGetUserLocation from "./hooks/useGetUserLocation.tsx";
import UserLocationContext from "./UserLocationContext.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("landingPage");
  const userLoc = useGetUserLocation();

  return (
    <div className="outer-container">
      <UserLocationContext.Provider value={userLoc}>
        <Header setView={setView} />
        <Router view={view} setView={setView} />
      </UserLocationContext.Provider>
    </div>
  );
}
