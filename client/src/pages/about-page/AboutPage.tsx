import "./styles.css";

export default function AboutPage() {
  return (
    <section>
      <h1 className="page-title">About Washoku Walker</h1>
      <div className="about-content">
        <p>
          Washoku walker is an app that lets you find quality Japanese food (
          <em>washoku</em>) near you.
        </p>
        <p>
          If you're familiar with Japanese food and know what you want, you can
          find restaurants by cusine. Not sure what you want? We'll find a few
          highly rated restaurants nearby.
        </p>
        <p>
          In either case, Washoku Walker searches within a 1.5 km radius to get
          you the best Japanese food we can find.
        </p>
      </div>
    </section>
  );
}
