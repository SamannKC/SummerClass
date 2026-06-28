import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  async function testBackend() {
    const response = await fetch(
      "http://localhost:3000/api/test"
    );

    const data = await response.json();

    setMessage(data.message);
  }

  return (
    <>
      <h1>PDF Summarizer</h1>

      <button onClick={testBackend}>
        Test Backend
      </button>

      <pre>{message}</pre>
    </>
  );
}
