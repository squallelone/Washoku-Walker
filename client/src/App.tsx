import { useState } from "react";

import { DisplayMode } from "./types.ts";

import Router from "./pages/router/Router.tsx";
import Header from "./pages/header/Header.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("landingPage");

  return (
    <div className="outer-container">
      <Header setView={setView} />
      <Router view={view} setView={setView} />
    </div>
  );
}
