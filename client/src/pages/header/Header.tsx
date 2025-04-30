import "./styles.css";
import { DisplayMode } from "../../types.ts";

interface HeaderInterface {
  setView: (mode: DisplayMode) => void;
}

export default function Header({ setView }: HeaderInterface) {
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
