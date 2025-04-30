import { SetViewPropsInterface } from "../../types";

export default function Login({ setView }: SetViewPropsInterface) {
  return (
    <section>
      <h2>Login</h2>
      <div>
        <button onClick={() => setView("userProfile")}>Login</button>
      </div>
    </section>
  );
}
