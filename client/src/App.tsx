import { useState } from "react";

import { DisplayMode } from "./types.ts";

import MainView from "./pages/main-view/MainView.tsx";
import Header from "./pages/header/Header.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("landingPage");

  return (
    <div className="outer-container">
      <Header setView={setView} />
      <MainView view={view} setView={setView} />
    </div>
  );
}
