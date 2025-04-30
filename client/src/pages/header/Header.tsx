import "./styles.css";
import { SetViewPropsInterface } from "../../types";

export default function Header({ setView }: SetViewPropsInterface) {
  return (
    <header className="header">
      <h1 onClick={() => setView("landingPage")}>Washoku Walker</h1>
      <nav className="nav">
        <div onClick={() => setView("aboutPage")}>About</div>
        <div onClick={() => setView("login")}>Login</div>
      </nav>
    </header>
  );
}
