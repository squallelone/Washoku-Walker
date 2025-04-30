import { SetViewPropsInterface } from "../../types";
import "./styles.css";

export default function LandingPage({ setView }: SetViewPropsInterface) {
  return (
    <section>
      <h1 className="page-title">What are you looking for?</h1>
      <div className="choices">
        <div className="card" onClick={() => setView("recommendations")}>
          <h2 className="sub-heading">I know what I want to eat</h2>
          <p>Show me restaurant recommendations for a specific dish.</p>
        </div>
        <div className="card" onClick={() => setView("userSelection")}>
          <h2 className="sub-heading">I'm not sure where to start.</h2>
          <p>Show restaurant recommendations near me.</p>
        </div>
      </div>
    </section>
  );
}
