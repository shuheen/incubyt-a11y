import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result] = useState(null);

  const handleCalculate = () => {};

  return (
    <main style={{ padding: "20px", backgroundColor: "#fff", color: "#aaa" }}>
      <header>
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          alt="String Calculator Image"
          height={400}
        />

        <h1 style={{color:"#000"}}>String Calculator</h1>
      </header>
      <section>
        <label htmlFor="numbers" style={{ fontSize: "20px", display: "block", color: "#000" }} id="input-label">
          Enter numbers
        </label>

        <textarea
          style={{ margin: "10px 0", color: "#aaa" }}
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="numbers"
          aria-labelledby="input-label"
        />

        <button
          onClick={handleCalculate}
          style={{
            padding: "10px",
            backgroundColor: "#008cba",
            color: "#fff",
            border: "none",
            display: "block",
          }}
        >
          Calculate
        </button>

        {result !== null && (
          <p style={{ color: "green" }} role="status" aria-live="polite">
            Result: {result}
          </p>
        )}
        <p role="alert" aria-live="assertive" style={{ color: "red" }}>Make sure you enter numbers correctly!</p>
      </section>
    </main>
  );
};

export default App;
