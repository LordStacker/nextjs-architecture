import { LandingButtons } from "./features/landing/intex";

export default function LandingPage() {
  return (
    <main style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Welcome to Hello World App</h1>
      <p>Select a path to test:</p>
      <LandingButtons/>
    </main>
  );
}
