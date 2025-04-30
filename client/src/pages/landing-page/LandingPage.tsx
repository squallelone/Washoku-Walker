import { SetViewPropsInterface } from "../../types";
import "./styles.css";

// import Recommendations from "../recommendations/Recommendations.tsx";
// import UserSelection from "../user-selection/UserSelection.tsx";

export default function LandingPage({ setView }: SetViewPropsInterface) {
  return (
    <section>
      <h1>What are you looking for?</h1>
      <div className="choices">
        <div className="card" onClick={() => setView("recommendations")}>
          <h2>I know what I want to eat</h2>
          <p>Show me restaurant recommendations for a specific dish.</p>
        </div>
        <div className="card" onClick={() => setView("userSelection")}>
          <h2>I'm not sure where to start.</h2>
          <p>Show restaurant recommendations near me.</p>
        </div>
      </div>
    </section>
  );
}
