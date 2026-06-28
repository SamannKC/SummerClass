import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function askLLM() {
    setResponse("Thinking...");

    const res = await fetch(
      "http://localhost:3000/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }
    );

    const data = await res.json();

    setResponse(data.answer);
  }

  return (
    <>
      <h1>PDF Summarizer</h1>

      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button onClick={askLLM}>
        Send
      </button>

      <hr />

      <pre>{response}</pre>
    </>
  );
}
