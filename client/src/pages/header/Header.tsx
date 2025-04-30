import "./styles.css";
import { DisplayMode } from "../../types.ts";

export default function Header({
  setView,
}: {
  setView: (mode: DisplayMode) => void;
}) {
  return (
    <header className="header">
      <h1 onClick={() => setView("landingPage")}>Washoku Walker</h1>
      <nav className="nav">
        <div onClick={() => setView("aboutPage")}>About</div>
        <div>Login</div>
      </nav>
    </header>
  );
}
